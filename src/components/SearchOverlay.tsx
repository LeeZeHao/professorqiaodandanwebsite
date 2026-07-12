import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { searchItems, type SectionId } from "../data/siteData";

type SearchOverlayProps = {
  open: boolean;
  onClose: () => void;
  onSelect: (id: SectionId) => void;
};

function normalize(value: string) {
  return value.toLowerCase().trim();
}

export function SearchOverlay({ open, onClose, onSelect }: SearchOverlayProps) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = normalize(query);

    if (!q) return searchItems;

    return searchItems.filter((item) => {
      const haystack = normalize(
        [item.title, item.subtitle, item.group, ...item.keywords].join(" ")
      );

      return q
        .split(/\s+/)
        .filter(Boolean)
        .every((word) => haystack.includes(word));
    });
  }, [query]);

  const groupedResults = useMemo(() => {
    return results.reduce<Record<string, typeof searchItems>>((acc, item) => {
      acc[item.group] ??= [];
      acc[item.group].push(item);
      return acc;
    }, {});
  }, [results]);

  if (!open) return null;

  return (
    <div className="search-backdrop" onMouseDown={onClose}>
      <div className="search-panel" onMouseDown={(event) => event.stopPropagation()}>
        <div className="search-input-row">
          <Search size={18} />
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search..."
          />
          <button onClick={onClose}>ESC</button>
        </div>

        <div className="search-results-list">
          {Object.entries(groupedResults).map(([group, items]) => (
            <div className="search-group" key={group}>
              <p className="search-group-title">{group}</p>

              {items.map((item) => (
                <button
                  key={item.id}
                  className="search-result"
                  onClick={() => onSelect(item.sectionId)}
                >
                  <span
                    className="result-dot"
                    style={{ backgroundColor: item.color ?? "#999" }}
                  />
                  <span className="result-text">
                    <span>
                      {item.title}
                      {item.badge && <em>{item.badge}</em>}
                    </span>
                    <small>{item.subtitle}</small>
                  </span>
                  <kbd>↵</kbd>
                </button>
              ))}
            </div>
          ))}

          {results.length === 0 && (
            <div className="empty-search">
              No matches found. Try “projects”, “AI”, “teaching”, or “contact”.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}