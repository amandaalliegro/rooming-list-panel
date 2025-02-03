import "../../styles/Subtitle.css";

/**
 * Subtitle Component
 *
 * This component renders a subtitle, with the ability to bold part of the text.
 * It is commonly used for labels followed by values, e.g., "Agreement: Staff".
 *
 * @param {string} text - The subtitle text content.
 * @param {boolean} [bold=false] - Determines whether the second part of the text should be bold.
 */

const Subtitle = ({ text, bold = false }: { text: string; bold?: boolean }) => {
  // Splitting at ": " to separate the label from the value
  const parts = text.split(": ");

  return (
    <p className="subtitle">
      {parts[0]}:{" "}
      <span className="subtitle-bold">{parts[1]}</span>
    </p>
  );
};

export default Subtitle;
