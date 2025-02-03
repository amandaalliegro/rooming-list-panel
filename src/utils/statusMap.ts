/**
 * Maps status IDs to their corresponding status labels.
 * Used to categorize events based on their current state.
 */
 export const STATUS_MAP: Record<number, string> = {
  1: "active",   // Represents events that are currently received.
  2: "closed",   // Represents events that have been completed.
  3: "canceled", // Represents events that have been archived.
};
