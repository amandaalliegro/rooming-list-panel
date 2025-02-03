import "../../styles/ViewBookingsButton.css";

/**
 * ViewBookingsButton Component
 *
 * This component renders a button that displays the number of bookings for a given event.
 *
 * @param {Object} props - The component props.
 * @param {number} props.bookings - The number of bookings associated with the event.
 */

const ViewBookingsButton = ({ bookings }: { bookings: number }) => {
  return (
    <button className="view-bookings">
      View Bookings ({bookings})
    </button>
  );
};

export default ViewBookingsButton;
