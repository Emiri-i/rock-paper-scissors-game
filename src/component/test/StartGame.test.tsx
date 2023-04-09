import StartGame from "../StartGame";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";

describe("StartGame component test", () => {
  const renderComponent = () => {
    return render(
      <MemoryRouter>
        <StartGame />
      </MemoryRouter>
    );
  };
  test("should renderes 3 icons and buttons", () => {
    renderComponent();
    const icons = screen.getAllByRole("start-page-icon");
    expect(icons).toHaveLength(3);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("should show a link to go to playGame component after clicking the start button", () => {
    const { container } = renderComponent();
    const linkWrapper = container.querySelector(".start-button-wrapper");
    expect(linkWrapper?.firstElementChild.firstElementChild).toHaveAttribute(
      "href",
      "/playGame"
    );
  });
});
