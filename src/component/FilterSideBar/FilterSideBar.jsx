import React, { useState, useMemo, memo, useEffect } from "react";
import "./FilterSideBar.css";

const FilterSideBar = memo(({ onFilterChange, filterOptions = {} }) => {
  // Debug
  useEffect(() => {
    console.log("Sidebar filter options:", filterOptions);
  }, [filterOptions]);

  const FILTER_GROUPS = useMemo(
    () => [
      {
        key: "size",
        label: "Sizes",
        options: [...(filterOptions?.sizes || [])].sort((a, b) => {
          const numA = parseFloat(a);
          const numB = parseFloat(b);

          // If both values start with numbers (e.g. "32", "43", "55 inch")
          if (!isNaN(numA) && !isNaN(numB)) {
            return numA - numB;
          }

          // Fallback for non-numeric values
          return a.localeCompare(b);
        }),
      },
      {
        key: "processor",
        label: "Processor",
        options: filterOptions?.processors || [],
      },
      {
        key: "processor_speed",
        label: "Processor Speed",
        options: filterOptions?.processorSpeeds || [],
      },
      {
        key: "storage",
        label: "Storage",
        options: filterOptions?.storages || [],
      },
      {
        key: "smart_features",
        label: "Smart Features",
        options: filterOptions?.smartFeatures || [],
      },
    ],
    [filterOptions],
  );

  const [openGroups, setOpenGroups] = useState({});

  const [selected, setSelected] = useState({});

  // Initialize only when groups become available
  useEffect(() => {
    const openState = {};

    FILTER_GROUPS.forEach((group) => {
      openState[group.key] = true;
    });

    setOpenGroups(openState);

    setSelected((prev) => {
      const next = { ...prev };

      FILTER_GROUPS.forEach((group) => {
        if (!next[group.key]) {
          next[group.key] = new Set();
        }
      });

      return next;
    });
  }, [FILTER_GROUPS]);

  const toggleGroup = (key) => {
    setOpenGroups((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const toggleOption = (groupKey, option) => {
    setSelected((prev) => {
      const next = new Set(prev[groupKey] || []);

      if (next.has(option)) {
        next.delete(option);
      } else {
        next.add(option);
      }

      const updated = {
        ...prev,
        [groupKey]: next,
      };

      if (onFilterChange) {
        const payload = Object.fromEntries(
          Object.entries(updated).map(([k, v]) => [k, [...v]]),
        );

        onFilterChange(payload);
      }

      return updated;
    });
  };

  return (
    <aside className="filter-sidebar">
      {FILTER_GROUPS.map((group, gi) => {
        if (!group.options || group.options.length === 0) {
          return null;
        }

        return (
          <div
            key={group.key}
            className={`filter-group ${
              gi < FILTER_GROUPS.length - 1 ? "has-divider" : ""
            }`}
          >
            <button
              className="filter-group-header"
              onClick={() => toggleGroup(group.key)}
              aria-expanded={openGroups[group.key]}
            >
              <span className="filter-group-label">{group.label}</span>

              <span className="filter-group-icon">
                {openGroups[group.key] ? (
                  <svg width="16" height="2" viewBox="0 0 16 2" fill="none">
                    <rect width="16" height="2" rx="1" fill="#1a1a1a" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="7" width="2" height="16" rx="1" fill="#1a1a1a" />
                    <rect y="7" width="16" height="2" rx="1" fill="#1a1a1a" />
                  </svg>
                )}
              </span>
            </button>

            {openGroups[group.key] && (
              <div className="filter-options">
                {group.options.map((option) => {
                  const checked = selected[group.key]?.has(option) || false;

                  const id = `${group.key}-${option}`;

                  return (
                    <label key={option} className="filter-option" htmlFor={id}>
                      <input
                        id={id}
                        type="checkbox"
                        className="filter-checkbox"
                        checked={checked}
                        onChange={() => toggleOption(group.key, option)}
                      />

                      <span className="filter-option-label">{option}</span>
                    </label>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </aside>
  );
});

export default FilterSideBar;
