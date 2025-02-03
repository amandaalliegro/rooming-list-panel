/**
 * EventHeader Component
 *
 * This component displays the event name in a styled header.
 * The header has a background color, rounded borders, and formatted text.
 *
 * @param {string} name - The name of the event.
 */
 const EventHeader = ({ name }: { name: string }) => {
  return (
    <div className="flex justify-center items-center text-sm font-bold bg-green-100 text-green-700 rounded-lg px-4 py-2">
      {name}
    </div>
  );
};

export default EventHeader;
