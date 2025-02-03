/**
 * Title Component
 *
 * This component renders a title inside an `h3` element.
 * It is styled using Tailwind classes along with inline styles for the line clamping.
 *
 * @param {string} title - The text content for the title.
 */
 const Title = ({ title }: { title: string }) => {
  return (
    <h3
      className="text-base font-bold leading-[24px] text-primary-text overflow-hidden text-ellipsis self-stretch font-poppins"
      style={{
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: 1,
      }}
    >
      {title}
    </h3>
  );
};

export default Title;
