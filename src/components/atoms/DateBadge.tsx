import "../../styles/DateBadge.css";

/**
 * DateBadge Component
 *
 * Displays a date badge showing the month and day, with a "Cut-Off Date" label.
 *
 * @param {string} month - The abbreviated month name (e.g., "Jan").
 * @param {string} day - The day of the month (e.g., "15").
 */

const DateBadge = ({ month, day }: { month: string; day: string }) => {
  return (
    <div className="date-badge">
      {/* Date Display */}
      <div className="date-badge-cutoff"> 
        <span className="date-badge-month">{month}</span>
        <span className="date-badge-day">{day}</span>
      </div>

      {/* Cut-Off Date Label */}
      <span className="date-badge-label">Cut-Off Date</span>
    </div>
  );
};

export default DateBadge;
