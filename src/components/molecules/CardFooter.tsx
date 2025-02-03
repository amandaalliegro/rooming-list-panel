/**
 * CardFooter Component
 *
 * This component represents the footer section of an event card.
 * It provides action buttons for viewing bookings and agreements.
 *
 * @param {Object} props - The component props.
 * @param {number} props.bookings - The number of bookings associated with the event.
 */

 import "../../styles/CardFooter.css";
 import ViewBookingsButton from "../atoms/ViewBookingsButton";
 import ViewAgreementButton from "../atoms/ViewAgreementButton";
 
 const CardFooter = ({ bookings }: { bookings: number }) => {
   return (
     <div className="bookings-agreement-btns">
       {/* Button to view the number of bookings */}
       <ViewBookingsButton bookings={bookings} />
       
       {/* Button to view the agreement details */}
       <ViewAgreementButton />
     </div>
   );
 };
 
 export default CardFooter;
 