"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import "../../styles/FilterButton.css";

/**
 * FilterButton Component
 *
 * A dropdown filter button that allows users to select and apply filters.
 * The selected filters are temporarily stored until the user clicks "Save."
 *
 * @param {Function} onFilterChange - Callback function to apply selected filters.
 */

const FilterButton = ({ onFilterChange }: { onFilterChange?: (selectedFilters: string[]) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]); // Stores saved filters
  const [tempSelectedFilters, setTempSelectedFilters] = useState<string[]>([]); // Temporary selections before saving
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // List of available RFP status filters
  const filterOptions = [
    { id: "active", label: "Active" },
    { id: "closed", label: "Closed" },
    { id: "canceled", label: "Canceled" },
  ];

  /**
   * Handles outside clicks to close the dropdown and reset selections.
   */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setTempSelectedFilters(selectedFilters); // Reset to last saved state
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, selectedFilters]);

  /**
   * Toggles dropdown visibility and loads current selections into temporary state.
   */
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
    setTempSelectedFilters(selectedFilters);
  };

  /**
   * Updates the temporary filter selection when a checkbox is toggled.
   */
  const handleFilterChange = (filter: string) => {
    setTempSelectedFilters((prev) =>
      prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]
    );
  };

  /**
   * Applies the selected filters and closes the dropdown.
   */
  const applyFilters = useCallback(() => {
    setSelectedFilters(tempSelectedFilters);
    if (onFilterChange) {
      onFilterChange([...tempSelectedFilters]);
    }
    setIsOpen(false);
  }, [tempSelectedFilters, onFilterChange]);

  return (
    <div className="filter-container relative" ref={dropdownRef}>
      {/* Filters Button */}
      <button
        className={`filter-button ${isOpen ? "filter-button-active" : ""}`}
        onClick={toggleDropdown}
      >
        <span>Filters</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M11 5C12.1046 5 13 4.10457 13 3C13 1.89543 12.1046 1 11 1C9.89543 1 9 1.89543 9 3C9 4.10457 9.89543 5 11 5Z" 
                stroke="#00C2A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M1 3H9" stroke="#00C2A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13 3H17" stroke="#00C2A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 11C6.10457 11 7 10.1046 7 9C7 7.89543 6.10457 7 5 7C3.89543 7 3 7.89543 3 9C3 10.1046 3.89543 11 5 11Z" 
                stroke="#00C2A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M1 9H3" stroke="#00C2A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 9H17" stroke="#00C2A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 17C15.1046 17 16 16.1046 16 15C16 13.8954 15.1046 13 14 13C12.8954 13 12 13.8954 12 15C12 16.1046 12.8954 17 14 17Z" 
                stroke="#00C2A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M1 15H12" stroke="#00C2A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 15H17" stroke="#00C2A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="dropdown-menu">
          <p className="dropdown-title">RFP STATUS</p>
          <div className="options-wrapper">
            {filterOptions.map((option) => (
              <label key={option.id} className="dropdown-option">
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={tempSelectedFilters.includes(option.id)}
                  onChange={() => handleFilterChange(option.id)}
                />
                {option.label}
              </label>
            ))}
          </div>
          <button className="save-button" onClick={applyFilters}>Save</button>
        </div>
      )}
    </div>
  );
};

export default FilterButton;
