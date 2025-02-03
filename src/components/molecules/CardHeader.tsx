/**
 * CardHeader Component
 *
 * This component represents the header section of an event card.
 * It displays the event title, agreement type, and cut-off date.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The event title.
 * @param {string} props.category - The agreement type (e.g., "staff", "artist").
 * @param {string} props.month - The month of the cut-off date.
 * @param {string} props.day - The day of the cut-off date.
 */
 import "../../styles/CardHeader.css";
 import DateBadge from "../atoms/DateBadge";
 import Title from "../atoms/Title";
 import Subtitle from "../atoms/Subtitle";
 
 const CardHeader = ({
   title,
   category,
   month,
   day,
 }: {
   title: string;
   category: string;
   month: string;
   day: string;
 }) => {
   return (
     <div className="header-box">
       {/* Title and Agreement Type */}
       <div className="title-subtitle">
         <Title title={title} />
         <Subtitle text={`Agreement: ${category}`} bold={true} />
       </div>
 
       {/* Cut-Off Date Display */}
       <DateBadge month={month} day={day} />
     </div>
   );
 };
 
 export default CardHeader;
 