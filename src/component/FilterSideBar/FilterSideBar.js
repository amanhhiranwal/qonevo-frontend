

import React, { useState } from "react";
import "./FilterSideBar.css";

/* ========================================
   DATA
======================================== */

const FILTER_GROUPS = [
  {
    key: "sizes",
    label: "Sizes",
    options: ["65\"", "75\"", "86\"", "96\"", "110\""],
  },
  {
    key: "chipset",
    label: "Chipset",
    options: ["9679", "V100", "311D2", "3576"],
  },
  {
    key: "storage",
    label: "Storage",
    options: ["8GB + 128GB", "16GB + 256GB"],
  },
  {
    key: "smartFeatures",
    label: "Smart Features",
    options: ["AI Whiteboard (Gravity AI)", "NFC Enabled"],
  },
  {
    key: "googleIntegration",
    label: "Google Integration",
    options: ["EDLA Certified"],
  },
];

/* ========================================
   COMPONENT
======================================== */

const FilterSideBar = ({ onFilterChange }) => {
  // Track which groups are open
  const [openGroups, setOpenGroups] = useState(
    () => Object.fromEntries(FILTER_GROUPS.map((g) => [g.key, true]))
  );

  // Track selected checkboxes: { groupKey: Set<option> }
  const [selected, setSelected] = useState(
    () => Object.fromEntries(FILTER_GROUPS.map((g) => [g.key, new Set()]))
  );

  /* ── Toggle group open/closed ── */
  const toggleGroup = (key) => {
    setOpenGroups((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  /* ── Toggle a checkbox ── */
  const toggleOption = (groupKey, option) => {
    setSelected((prev) => {
      const next = new Set(prev[groupKey]);
      next.has(option) ? next.delete(option) : next.add(option);
      const updated = { ...prev, [groupKey]: next };

      // Notify parent if needed
      if (onFilterChange) {
        onFilterChange(
          Object.fromEntries(
            Object.entries(updated).map(([k, v]) => [k, [...v]])
          )
        );
      }

      return updated;
    });
  };

  return (
    <aside className="filter-sidebar">
      {FILTER_GROUPS.map((group, gi) => (
        <div
          key={group.key}
          className={`filter-group ${gi < FILTER_GROUPS.length - 1 ? "has-divider" : ""}`}
        >
          {/* ── GROUP HEADER ── */}
          <button
            className="filter-group-header"
            onClick={() => toggleGroup(group.key)}
            aria-expanded={openGroups[group.key]}
          >
            <span className="filter-group-label">{group.label}</span>
            <span className="filter-group-icon">
              {openGroups[group.key] ? (
                /* Minus */
                <svg width="16" height="2" viewBox="0 0 16 2" fill="none">
                  <rect width="16" height="2" rx="1" fill="#1a1a1a" />
                </svg>
              ) : (
                /* Plus */
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="7" width="2" height="16" rx="1" fill="#1a1a1a" />
                  <rect y="7" width="16" height="2" rx="1" fill="#1a1a1a" />
                </svg>
              )}
            </span>
          </button>

          {/* ── OPTIONS GRID ── */}
          {openGroups[group.key] && (
            <div className="filter-options">
              {group.options.map((option) => {
                const checked = selected[group.key].has(option);
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
      ))}
    </aside>
  );
};

export default FilterSideBar;