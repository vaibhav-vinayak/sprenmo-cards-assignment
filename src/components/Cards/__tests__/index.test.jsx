import { screen, render, fireEvent } from "@testing-library/react";
import Cards from "components/Cards";
import { Provider } from "react-redux";
import store from "store";

describe("Test Cards list", () => {
  const mockStore = store;
  it("Render cards", () => {
    render(
      <Provider store={mockStore}>
        <Cards />
      </Provider>
    );
    const input = screen.getByTestId("input");
    fireEvent.change(input, { target: { value: "" } });
    fireEvent.change(input, { target: { value: "Clark Kent" } });
    const confirmBtn = screen.getByText("confirm");
    const colorBtn = screen.getByTestId("#fc5b71");
    fireEvent.click(colorBtn);
    fireEvent.click(confirmBtn);
  });
});
