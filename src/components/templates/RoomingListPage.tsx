"use client";
import { useState, useEffect, useMemo, useCallback } from "react";
import data from "../../data/test-data.json";
import SearchBar from "../atoms/SearchBar";
import FilterButton from "../atoms/FilterButton";
import EventList from "../organisms/EventList";
import { formatDate } from "../../utils/formatDate";
import { STATUS_MAP } from "../../utils/statusMap";
import { filterEvents } from "../../utils/filterUtils";

/**
 * RoomingListPage Component
 *
 * This component is responsible for displaying a list of rooming events. 
 * It provides a search bar and filter functionality, allowing users to filter events based on status.
 * The component processes event data, applies formatting, and renders the filtered event lists.
 */
const RoomingListPage = () => {
  // State for managing the search query input by the user
  const [searchQuery, setSearchQuery] = useState("");

  // State for managing selected filter values
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  // State to prevent hydration mismatch by ensuring client-side rendering
  const [isClient, setIsClient] = useState(false);

  // Set the client flag on mount to avoid hydration mismatches.
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Memoize the grouping of events from the data
  const groupedEvents = useMemo(() => {
    return data.reduce((acc: any, roomingList: any) => {
      const { drl_rfp, cutoff_date, drl_rooming_list_bookings, status_id } = roomingList;
      const eventName = drl_rfp.event_name;
      const title = drl_rfp.event_internal_name;
      const category = drl_rfp.agreement_type;
      const month = formatDate(cutoff_date).split(" ")[0];
      const day = formatDate(cutoff_date).split(" ")[1];
      const dateRange = `${formatDate(drl_rfp.event_start_date)} - ${formatDate(drl_rfp.event_end_date)}`;
      const bookings = drl_rooming_list_bookings.length;
      const statusLabel = STATUS_MAP[status_id] || "unknown";

      if (!acc[eventName]) acc[eventName] = [];
      acc[eventName].push({ title, category, month, day, dateRange, bookings, statusLabel });
      return acc;
    }, {});
  }, []);

  // Convert the grouped events into an array for rendering
  const eventsData = useMemo(() => {
    return Object.entries(groupedEvents).map(([name, items]) => ({ name, items }));
  }, [groupedEvents]);

  // Memoize the filtered events so that filtering is recalculated only when necessary
  const filteredEvents = useMemo(() => {
    return filterEvents(eventsData, searchQuery, selectedFilters);
  }, [eventsData, searchQuery, selectedFilters]);

  // Memoize the search update function
  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  // Memoize the filter update function
  const handleFilterChange = useCallback((filters: string[]) => {
    setSelectedFilters(filters);
  }, []);

  // Prevent rendering on the server to avoid hydration mismatch
  if (!isClient) return null;

  return (
    <div className="flex flex-col items-center w-full max-w-none pb-4 pt-2 lg:pb-8 lg:pt-6">
      <div className="flex flex-col items-start gap-8 self-stretch m-6 lg:m-8 lg:mb-6">
        <h1
          className="self-stretch text-primary-text text-[32px] tracking-[1px] font-normal leading-[32px] font-poppins"
          style={{
            WebkitTextStroke: "1.5px #141416",
            textStroke: "1.5px #141416",
          }}
        >
          Rooming List Management: Events
        </h1>

        {/* Search Bar and Filters */}
        <div className="flex items-start gap-4 self-start">
          <SearchBar onSearch={handleSearch} />
          <FilterButton onFilterChange={handleFilterChange} />
        </div>
      </div>

      {/* Render Filtered Event Lists */}
      {filteredEvents.map((event, index) => (
        <EventList
          key={index}
          name={event.name}
          events={event.items}
          index={index} // Pass the correct index for styling purposes
        />
      ))}
    </div>
  );
};

export default RoomingListPage;
