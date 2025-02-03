import "../../styles/Title.css";

/**
 * Title Component
 *
 * This component renders a title inside an `h3` element.
 * It is styled using the `title` class from the associated CSS file.
 *
 * @param {string} title - The text content for the title.
 */

const Title = ({ title }: { title: string }) => {
  return <h3 className="title">{title}</h3>;
};

export default Title;
