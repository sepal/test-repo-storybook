/**
 * @author codelity_proto@0.0.1
 * @request /home/sebastian/Work/projects/codelity/test-repo-storybook
 */
import { render, screen } from "@testing-library/react";
import { Button } from "./index";

describe("Button component", () => {
  test("renders with the right class depending on primary prop", () => {
    render(<Button primary label="Primary Button" />);
    const primaryButton = screen.getByText("Primary Button");
    expect(primaryButton).toHaveClass("bg-sky-500 text-white");

    render(<Button label="Secondary Button" />);
    const secondaryButton = screen.getByText("Secondary Button");
    expect(secondaryButton).toHaveClass("bg-slate-300");
  });
});
