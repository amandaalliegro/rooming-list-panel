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
    <div className="flex flex-col items-center gap-1">
      {/* Date Display */}
      <div className="flex flex-col items-center w-[56px] bg-white rounded-[8px]">
        <span className="flex justify-center items-center px-[10px] py-[2px] gap-[10px] self-stretch rounded-t-[8px] bg-badge-month-bg text-badge-blue text-xs font-semibold tracking-[1px] uppercase leading-[12px] font-poppins">
          {month}
        </span>
        <span className="flex flex-col justify-center items-center px-[10px] py-[4px] gap-[10px] self-stretch rounded-b-[8px] bg-badge-day-bg text-badge-blue text-[26px] font-bold uppercase text-center leading-[24px] font-poppins">
          {day}
        </span>
      </div>

      {/* Cut-Off Date Label */}
      <span className="text-muted-gray text-xs font-medium leading-[16px] font-poppins">
        Cut-Off Date
      </span>
    </div>
  );
};

export default DateBadge;
