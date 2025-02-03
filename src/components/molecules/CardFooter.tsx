import ViewBookingsButton from "../atoms/ViewBookingsButton";
import ViewAgreementButton from "../atoms/ViewAgreementButton";

/**
 * CardFooter Component
 *
 * This component represents the footer section of an event card.
 * It provides action buttons for viewing bookings and agreements.
 *
 * @param {Object} props - The component props.
 * @param {number} props.bookings - The number of bookings associated with the event.
 */
const CardFooter = ({ bookings }: { bookings: number }) => {
  return (
    <div className="flex items-start gap-2 self-stretch">
      {/* Button to view the number of bookings */}
      <ViewBookingsButton bookings={bookings} />
      
      {/* Button to view the agreement details */}
      <ViewAgreementButton />
    </div>
  );
};

export default CardFooter;
