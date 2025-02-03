/**
 * Filters the event data based on a search query and selected status filters.
 *
 * @param {any[]} eventsData - The full list of event data before filtering.
 * @param {string} searchQuery - The user's input for searching events.
 * @param {string[]} selectedFilters - The list of selected filters (status labels).
 * @returns {any[]} - A filtered array of events that match the search criteria and status filters.
 */
 export const filterEvents = (eventsData: any[], searchQuery: string, selectedFilters: string[]) => {
  return eventsData
    .map((event) => ({
      ...event,
      items: event.items.filter((item) => {
        // Check if the event matches the search query
        const matchesSearch =
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          `${item.month} ${item.day}`.toLowerCase().includes(searchQuery.toLowerCase());

        // Check if the event matches the selected status filters
        const matchesStatus =
          selectedFilters.length === 0 || selectedFilters.includes(item.statusLabel);

        return matchesSearch && matchesStatus;
      }),
    }))
    // Remove empty event groups after filtering
    .filter((event) => event.items.length > 0);
};
