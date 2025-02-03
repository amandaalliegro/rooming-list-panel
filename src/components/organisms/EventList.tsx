"use client";
import React from "react";
import EventCard from "../organisms/EventCard";

/**
 * Props for the EventList component.
 *
 * @interface EventListProps
 * @property {string} name - The name of the event group.
 * @property {any[]} events - An array of event objects to be displayed.
 * @property {number} index - The index of the event group (used for alternating themes).
 */
interface EventListProps {
  name: string;
  events: any[];
  index: number;
}

/**
 * EventList Component
 *
 * Renders a list of event cards grouped under a themed header.
 * The header displays the group name with a horizontal line on each side.
 * The theme (green or purple) is chosen based on the group's index (even/odd).
 *
 * @param {EventListProps} props - The component props.
 * @returns {JSX.Element} The rendered EventList component.
 */
const EventList = ({ name, events, index }: EventListProps) => {
  // Choose theme based on index (green if even, purple if odd)
  const assignedColor = index % 2 === 0 ? "green" : "purple";

  return (
    <div className="flex flex-col items-center justify-center w-full gap-4 pb-4">
      {/* Render the event title header only if there are events in the group */}
      {events.length > 0 && (
        <div className="flex items-center gap-5 self-stretch justify-center">
          {/* First horizontal line with gradient based on theme */}
          <hr
            className={`w-[533px] h-px border-0 bg-gradient-to-r ${
              assignedColor === "green"
                ? "from-[rgba(0,194,166,0)] to-accent-green"
                : "from-[rgba(103,7,253,0)] to-accent-purple"
            }`}
          />
          {/* Title element displaying the event group name */}
          <h2
            className={`flex-none flex justify-center items-center gap-2 px-2 py-1.5 rounded border text-center text-sm font-semibold leading-5 font-poppins tracking-wide ${
              assignedColor === "green"
                ? "border-accent-green bg-light-green-bg text-accent-green"
                : "border-accent-purple bg-light-purple-bg text-accent-purple"
            }`}
          >
            {name}
          </h2>
          {/* Second horizontal line with gradient based on theme */}
          <hr
            className={`w-[533px] h-px border-0 bg-gradient-to-r ${
              assignedColor === "green"
                ? "from-accent-green to-[rgba(0,194,166,0)]"
                : "from-accent-purple to-[rgba(103,7,253,0)]"
            }`}
          />
        </div>
      )}

      {/* Event cards container */}
      <div className="flex flex-col items-center gap-4 self-stretch w-full max-w-full">
        {/* Scrollable container with custom scrollbar styles */}
        <div className="flex items-center gap-4 self-stretch overflow-x-auto px-4 lg:px-8 pb-8 transition-all duration-700 ease-in-out custom-scrollbar scrollbar-webkit">
          {events.map((event, idx) => (
            <EventCard key={idx} {...event} />
          ))}
        </div>
      </div>

      {/* Embedded custom scrollbar styling overrides */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 16px;
          transition: all 700ms ease-in-out;
        }
        .custom-scrollbar::-webkit-scrollbar-track-piece {
          background: #cdd4e5;
          border-radius: 9999px;
          margin: 0 32px;
          border-width: 6px 2px 6px 2px;
          border-color: #f9fbff;
          border-style: solid;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #cdd4e5;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-button {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default EventList;
