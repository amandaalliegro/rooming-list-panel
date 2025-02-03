"use client";
import "../../styles/EventList.css";
import EventCard from "../organisms/EventCard";

/**
 * EventList Component
 *
 * This component renders a list of event cards grouped under a section with a title.
 * The title is visually styled with a color based on the index of the event list.
 *
 * @param {string} name - The name of the event group.
 * @param {any[]} events - The array of event objects to be displayed.
 * @param {number} index - The index of the event list (used for assigning colors).
 */
const EventList = ({ name, events, index }: { name: string; events: any[]; index: number }) => {
  // Assign a color to the event title based on the index of the event list
  const assignedColor = index % 2 === 0 ? "green" : "purple";

  return (
    <div className="events ">
      {/* Render the event title if there are events in the group */}
      {events.length > 0 && (
        <div className="event-title">
          <hr className={`first-line ${assignedColor === "green" ? "first-line-green" : "first-line-purple"}`} />
          <h2 className={`event-name ${assignedColor === "green" ? "event-name-green" : "event-name-purple"}`}>
            {name}
          </h2>
          <hr className={`second-line ${assignedColor === "green" ? "second-line-green" : "second-line-purple"}`} />
        </div>
      )}

      {/* Render the event cards inside a row container */}
      <div className="event-cards">
        <div className="event-row custom-scrollbar">
          {events.map((event, idx) => (
            <EventCard key={idx} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventList;
