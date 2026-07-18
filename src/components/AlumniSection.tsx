import { Search } from "lucide-react";
import { forwardRef, useMemo, useState } from "react";

type AlumniItem = {
  name: string;
  description: string;
};

const alumniItems: AlumniItem[] = [
  // Add alumni here. Example:
  // {
  //   name: "Student Name",
  //   description: "Former PhD Student, Information Systems\nCurrent: Organization",
  // },
  {
    name: "Dr. John Doe",
    description: "Former Research Fellow, Computer Science\nCurrent: Anthropic"
  },
  {
    name: "Dr. Jane Doe",
    description: "Former PhD Student, Computer Science\nCurrent: National University of Singapore"
  },
  {
    name: "Dr. Joe Smith",
    description: "Former Research Fellow, Computer Science\nCurrent: Robotics Startup"
  },
  {
    name: "Dr. Frank White",
    description: "Former Research Fellow, Computer Science\nCurrent: Huawei"
  }
];

export const AlumniSection = forwardRef<HTMLElement>(function AlumniSection(_, ref) {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLocaleLowerCase();

  const filteredAlumni = useMemo(() => {
    if (!normalizedQuery) return alumniItems;

    return alumniItems.filter(({ name, description }) =>
      `${name} ${description}`.toLocaleLowerCase().includes(normalizedQuery),
    );
  }, [normalizedQuery]);

  return (
    <section id="alumni" ref={ref} className="alumni-section">
      <div className="section-kicker">
        <span>06</span>
        <p>Alumni</p>
        <div />
      </div>

      <h2 className="publication-heading alumni-heading">Alumni</h2>

      <div className="alumni-content">
        <label className="alumni-search">
          <Search size={18} aria-hidden="true" />
          <span className="sr-only">Search alumni by name or description</span>
          <input
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search name or description..."
          />
        </label>

        <div className="alumni-grid" aria-live="polite">
          {filteredAlumni.map((alumnus) => (
            <article className="alumni-card" key={`${alumnus.name}-${alumnus.description}`}>
              <h2>{alumnus.name}</h2>
              <p>{alumnus.description}</p>
            </article>
          ))}

          {filteredAlumni.length === 0 && (
            <p className="alumni-empty">
              {normalizedQuery
                ? `No alumni match “${searchQuery.trim()}”.`
                : "Alumni information will be added soon."}
            </p>
          )}
        </div>
      </div>
    </section>
  );
});
