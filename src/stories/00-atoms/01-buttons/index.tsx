interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

function getSizeCSS(size: "small" | "medium" | "large") {
  switch (size) {
    case "small":
      return "py-1 px-3 text-sm";
    case "medium":
      return "py-2 px-4 text-md";
    case "large":
      return "py-2 px-5 text-xl";
  }
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? "bg-sky-500 text-white" : "bg-slate-300";
  const sizeCSS = getSizeCSS(size);
  return (
    <button
      type="button"
      className={[
        " rounded  ",
        `storybook-button--${size}`,
        mode,
        sizeCSS,
      ].join(" ")}
      {...props}
    >
      {label}
    </button>
  );
};
