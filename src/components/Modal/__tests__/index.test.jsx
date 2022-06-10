import { render } from "@testing-library/react";
import Modal from "components/Modal";

describe("Test Modal Component", () => {
  it("render Modal", () => {
    render(<Modal />);
  });
  it("render Modal show", () => {
    render(<Modal show={true} />);
  });
});
