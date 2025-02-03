/**
 * Formats an ISO date string into a short month and day format.
 *
 * @param {string} isoString - The date string in ISO format.
 * @returns {string} - A formatted date string in "MMM DD" format (e.g., "Jan 15") or a fallback message if invalid.
 */
 export const formatDate = (isoString: string): string => {
  try {
    if (!isoString) return "N/A";

    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "2-digit",
    }).format(new Date(isoString));
  } catch (error) {
    return "Invalid Date";
  }
};
