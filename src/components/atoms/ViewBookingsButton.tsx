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
    <button
      className="flex justify-center items-center text-white text-sm font-normal tracking-[0.7px] leading-[20px] font-[Poppins] px-[10px] py-[10px] rounded-[8px] bg-vivid-blue flex-[1_0_0]"
      style={{ WebkitTextStroke: "0.5px white", textStroke: "0.5px white" }}
    >
      View Bookings ({bookings})
    </button>
  );
};

export default ViewBookingsButton;
