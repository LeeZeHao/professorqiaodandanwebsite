import { Search } from "lucide-react";
import { forwardRef, useMemo, useState } from "react";

type StudentStatus = "Alumni" | "Current";

type StudentItem = {
  name: string;
  description: string;
  status: StudentStatus;
};

const studentItems: StudentItem[] = [
  // Add students here. Use status: "Current" or status: "Alumni".
  {
    name: "Ying Lu",
    description: "Former: PhD\nCurrent: Assistant Professor, IE University, Spain",
    status: "Alumni",
  },
  {
    name: "Haoyu Yuan",
    description: "Former: Visiting Student\nCurrent: Assistant Professor, Shanghai University of Finance and Economics",
    status: "Alumni",
  },
  {
    name: "Dinghao Xi",
    description: "Former: Visiting Student\nCurrent: Assistant Professor, Shanghai University of Finance and Economics",
    status: "Alumni",
  },
  {
    name: "Qian Xiong",
    description: "Former: Visiting Student",
    status: "Alumni",
  },
  {
    name: "Yiming Liu",
    description: "PhD, NUS",
    status: "Current",
  },
  {
    name: "Jingyuan Deng",
    description: "PhD, NUS",
    status: "Current",
  },
  {
    name: "Duofeng Xu",
    description: "PhD, NUS",
    status: "Current",
  },
  {
    name: "Wei Zhang",
    description: "PhD, NUS",
    status: "Current",
  },
  {
    name: "Dingyu Shi",
    description: "PhD Student\nResearch Interest: Digital Marketing, Econometrics",
    status: "Current",
  },
  {
    name: "Yingfei Shi",
    description: "PhD Student\nResearch Interest: Recommendation, Computational Social Science",
    status: "Current",
  },
  {
    name: "Mingxuan Zheng",
    description: "PhD Student\nResearch Interest: Explainable AI, Fintech, LLM",
    status: "Current",
  },
];

type StudentFilter = "all" | "alumni" | "current";

const studentFilters: Array<{ label: string; value: StudentFilter }> = [
  { label: "All", value: "all" },
  { label: "Alumni", value: "alumni" },
  { label: "Current", value: "current" },
];

export const StudentsSection = forwardRef<HTMLElement>(function StudentsSection(_, ref) {
  const [activeFilter, setActiveFilter] = useState<StudentFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLocaleLowerCase();

  const filteredStudents = useMemo(() => {
    const queryTerms = normalizedQuery.split(/\s+/).filter(Boolean);

    return studentItems.filter(({ name, description, status }) => {
      const matchesStatus =
        activeFilter === "all" || status.toLocaleLowerCase() === activeFilter;
      const searchableText = `${name} ${description}`.toLocaleLowerCase();
      const matchesSearch = queryTerms.every((term) => searchableText.includes(term));

      return matchesStatus && matchesSearch;
    });
  }, [activeFilter, normalizedQuery]);

  return (
    <section id="students" ref={ref} className="students-section">
      <div className="section-kicker">
        <span>06</span>
        <p>Students</p>
        <div />
      </div>

      <h2 className="publication-heading students-heading">Students</h2>

      <div className="students-content">
        <div className="student-controls">
          <label className="student-search">
            <Search size={18} aria-hidden="true" />
            <span className="sr-only">Search students by name or description</span>
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search name or description..."
            />
          </label>

          <div className="student-tabs" role="tablist" aria-label="Student status">
            {studentFilters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                role="tab"
                aria-selected={activeFilter === filter.value}
                className={activeFilter === filter.value ? "active" : ""}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="students-grid" aria-live="polite">
          {filteredStudents.map((student) => (
            <article
              className={`student-card${activeFilter === "all" ? " has-status-tag" : ""}`}
              key={`${student.name}-${student.description}`}
            >
              {activeFilter === "all" && (
                <span
                  className={`student-status-tag student-status-${student.status.toLowerCase()}`}
                >
                  {student.status === "Current" ? "Student" : "Alumni"}
                </span>
              )}
              <h2>{student.name}</h2>
              <p>{student.description}</p>
            </article>
          ))}

          {filteredStudents.length === 0 && (
            <p className="students-empty">
              {normalizedQuery
                ? `No students match “${searchQuery.trim()}”.`
                : `No ${activeFilter === "all" ? "" : `${activeFilter} `}students are available yet.`}
            </p>
          )}
        </div>
      </div>
    </section>
  );
});
