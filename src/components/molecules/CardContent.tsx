"use client";

import "../../styles/CardContent.css";

/**
 * CardContent Component
 *
 * This component displays the event's date range along with a calendar icon.
 *
 * @param {Object} props - The component props.
 * @param {string} props.dateRange - The formatted date range of the event.
 */

const CardContent = ({ dateRange }: { dateRange: string }) => {
  return (
    <div className="date-calendar">
      {/* Calendar Icon */}
      <svg
        className="date-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="15"
        viewBox="0 0 12 15"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.83333 1.33331C3.83333 1.05717 3.60948 0.833313 3.33333 0.833313C3.05719 0.833313 2.83333 1.05717 2.83333 1.33331V2.33331H2C0.895431 2.33331 0 3.22874 0 4.33331V5.49998H12V4.33331C12 3.22874 11.1046 2.33331 10 2.33331H9.16667V1.33331C9.16667 1.05717 8.94281 0.833313 8.66667 0.833313C8.39052 0.833313 8.16667 1.05717 8.16667 1.33331V2.33331H3.83333V1.33331ZM0 6.49998H12V12.6666C12 13.7712 11.1046 14.6666 10 14.6666H2C0.895431 14.6666 0 13.7712 0 12.6666V6.49998ZM6 10.6666C6.36819 10.6666 6.66667 10.3682 6.66667 9.99998C6.66667 9.63179 6.36819 9.33331 6 9.33331C5.63181 9.33331 5.33333 9.63179 5.33333 9.99998C5.33333 10.3682 5.63181 10.6666 6 10.6666ZM9.33333 9.99998C9.33333 10.3682 9.03486 10.6666 8.66667 10.6666C8.29848 10.6666 8 10.3682 8 9.99998C8 9.63179 8.29848 9.33331 8.66667 9.33331C9.03486 9.33331 9.33333 9.63179 9.33333 9.99998ZM3.33333 10.6666C3.70152 10.6666 4 10.3682 4 9.99998C4 9.63179 3.70152 9.33331 3.33333 9.33331C2.96514 9.33331 2.66667 9.63179 2.66667 9.99998C2.66667 10.3682 2.96514 10.6666 3.33333 10.6666Z"
          fill="#777E90"
        />
      </svg>

      {/* Display Date Range */}
      <p className="date-range">{dateRange}</p>
    </div>
  );
};

export default CardContent;
