import { Search } from "lucide-react";
import { forwardRef, useMemo, useState } from "react";
import { siteContent, studentItems } from "../data/siteContent";

type StudentFilter = "all" | "alumni" | "current";

export const StudentsSection = forwardRef<HTMLElement>(
  function StudentsSection(_, ref) {
    const content = siteContent.students;
    const [activeFilter, setActiveFilter] = useState<StudentFilter>("all");
    const [searchQuery, setSearchQuery] = useState("");
    const normalizedQuery = searchQuery.trim().toLocaleLowerCase();

    const filteredStudents = useMemo(() => {
      const queryTerms = normalizedQuery.split(/\s+/).filter(Boolean);

      return studentItems.filter(({ name, description, status }) => {
        const matchesStatus =
          activeFilter === "all" ||
          status.toLocaleLowerCase() === activeFilter;
        const searchableText = `${name} ${description}`.toLocaleLowerCase();
        const matchesSearch = queryTerms.every((term) =>
          searchableText.includes(term),
        );

        return matchesStatus && matchesSearch;
      });
    }, [activeFilter, normalizedQuery]);

    return (
      <section id="students" ref={ref} className="students-section">
        <div className="section-kicker">
          <span>{content.sectionNumber}</span>
          <p>{content.sectionTitle}</p>
          <div />
        </div>

        <h2 className="publication-heading students-heading">
          {content.heading}
        </h2>

        <div className="students-content">
          <div className="student-controls">
            <label className="student-search">
              <Search size={18} aria-hidden="true" />
              <span className="sr-only">{content.searchLabel}</span>
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder={content.searchPlaceholder}
              />
            </label>

            <div
              className="student-tabs"
              role="tablist"
              aria-label={content.filtersLabel}
            >
              {content.filters.map((filter) => (
                <button
                  key={filter.value}
                  type="button"
                  role="tab"
                  aria-selected={activeFilter === filter.value}
                  className={activeFilter === filter.value ? "active" : ""}
                  onClick={() =>
                    setActiveFilter(filter.value as StudentFilter)
                  }
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="students-grid" aria-live="polite">
            {filteredStudents.map((student) => (
              <article
                className={`student-card${
                  activeFilter === "all" ? " has-status-tag" : ""
                }`}
                key={`${student.name}-${student.description}`}
              >
                {activeFilter === "all" && (
                  <span
                    className={`student-status-tag student-status-${student.status.toLowerCase()}`}
                  >
                    {student.status === "Current"
                      ? content.currentTag
                      : content.alumniTag}
                  </span>
                )}
                <h2>{student.name}</h2>
                <p>{student.description}</p>
              </article>
            ))}

            {filteredStudents.length === 0 && (
              <p className="students-empty">
                {normalizedQuery
                  ? `${content.noMatchesPrefix} “${searchQuery.trim()}”.`
                  : `No ${
                      activeFilter === "all" ? "" : `${activeFilter} `
                    }${content.emptySuffix}`}
              </p>
            )}
          </div>
        </div>
      </section>
    );
  },
);
