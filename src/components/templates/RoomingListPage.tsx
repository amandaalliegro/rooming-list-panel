"use client";
import { useState, useEffect } from "react";
import "../../styles/RoomingListPage.css";
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

  // State for storing processed event data
  const [eventsData, setEventsData] = useState<any[]>([]);

  // State to prevent hydration mismatch by ensuring client-side rendering
  const [isClient, setIsClient] = useState(false);

  /**
   * useEffect Hook - Initializes and processes event data when the component mounts.
   * 
   * - Ensures the component only renders on the client to prevent hydration mismatches.
   * - Parses the event data, extracts relevant fields, and groups them by event name.
   * - Uses `formatDate` for consistent date formatting.
   * - Maps event status IDs to readable labels using `STATUS_MAP`.
   */
  useEffect(() => {
    setIsClient(true); // Ensures rendering only happens on the client

    const groupedEvents = data.reduce((acc: any, roomingList: any) => {
      const { drl_rfp, cutoff_date, drl_rooming_list_bookings, status_id } = roomingList;

      // Extract necessary fields from the rooming list data
      const eventName = drl_rfp.event_name;
      const title = drl_rfp.event_internal_name;
      const category = drl_rfp.agreement_type;
      const month = formatDate(cutoff_date).split(" ")[0];
      const day = formatDate(cutoff_date).split(" ")[1];
      const dateRange = `${formatDate(drl_rfp.event_start_date)} - ${formatDate(drl_rfp.event_end_date)}`;
      const bookings = drl_rooming_list_bookings.length;
      const statusLabel = STATUS_MAP[status_id] || "unknown";

      // Group events by event name
      if (!acc[eventName]) acc[eventName] = [];
      acc[eventName].push({ title, category, month, day, dateRange, bookings, statusLabel });

      return acc;
    }, {});

    // Convert grouped events into an array format for rendering
    setEventsData(Object.entries(groupedEvents).map(([name, items]) => ({ name, items })));
  }, []);

  // Prevent rendering on the server to avoid hydration mismatch
  if (!isClient) return null;

  /**
   * Filters the event data based on the user's search query and selected filters.
   * Uses the `filterEvents` utility function for processing.
   */
  const filteredEvents = filterEvents(eventsData, searchQuery, selectedFilters);

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Rooming List Management: Events</h1>

        {/* Search Bar and Filters */}
        <div className="filter-container">
          <SearchBar onSearch={setSearchQuery} />
          <FilterButton onFilterChange={setSelectedFilters} />
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
