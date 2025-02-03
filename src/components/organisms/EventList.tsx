"use client";
import React from "react";
import EventCard from "../organisms/EventCard";

interface EventListProps {
  name: string;
  events: any[];
  index: number;
}

const EventList = ({ name, events, index }: EventListProps) => {
  // Choose theme based on index (green if even, purple if odd)
  const assignedColor = index % 2 === 0 ? "green" : "purple";

  return (
    <div className="flex flex-col items-center justify-center w-full gap-4 pb-4">
      {/* Render the event title if there are events */}
      {events.length > 0 && (
        <div className="flex items-center gap-5 self-stretch justify-center">
          {/* First horizontal line */}
          <hr
            className={`w-[533px] h-px border-0 bg-gradient-to-r ${
              assignedColor === "green"
                ? "from-[rgba(0,194,166,0)] to-accent-green"
                : "from-[rgba(103,7,253,0)] to-accent-purple"
            }`}
          />
          {/* Title element */}
          <h2
            className={`flex-none flex justify-center items-center gap-2 px-2 py-1.5 rounded border text-center text-sm font-semibold leading-5 font-poppins tracking-wide ${
              assignedColor === "green"
                ? "border-accent-green bg-light-green-bg text-accent-green"
                : "border-accent-purple bg-light-purple-bg text-accent-purple"
            }`}
          >
            {name}
          </h2>
          {/* Second horizontal line */}
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
        <div className="flex items-center gap-4 self-stretch overflow-x-auto px-4 lg:px-8 pb-8 transition-all duration-700 ease-in-out custom-scrollbar scrollbar-webkit">
          {events.map((event, idx) => (
            <EventCard key={idx} {...event} />
          ))}
        </div>
      </div>

      {/* Embedded custom scrollbar styling */}
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
