import CardHeader from "../molecules/CardHeader";
import CardContent from "../molecules/CardContent";
import CardFooter from "../molecules/CardFooter";

/**
 * EventCard Component
 *
 * This component represents a single event card, which consists of:
 * - A **header** displaying the event title and category.
 * - A **content section** showing the event date range.
 * - A **footer** showing the number of bookings.
 *
 * @param {string} title - The event title.
 * @param {string} category - The category of the event.
 * @param {string} month - The month extracted from the cutoff date.
 * @param {string} day - The day extracted from the cutoff date.
 * @param {string} dateRange - The formatted date range of the event.
 * @param {number} bookings - The number of bookings associated with the event.
 */
const EventCard = ({
  title,
  category,
  month,
  day,
  dateRange,
  bookings
}: {
  title: string;
  category: string;
  month: string;
  day: string;
  dateRange: string;
  bookings: number;
}) => {
  return (
    <div className="flex flex-col justify-center items-start gap-3 w-[345px] lg:w-[400px] p-4 rounded-[8px] border border-[#E4ECF2] bg-white flex-none">
      {/* Header Section: Displays title, category, month, and day */}
      <CardHeader title={title} category={category} month={month} day={day} />

      {/* Info Section: Contains event details */}
      <div className="flex flex-col items-start gap-4 self-stretch">
        <CardContent dateRange={dateRange} />
        <CardFooter bookings={bookings} />
      </div>
    </div>
  );
};

export default EventCard;
