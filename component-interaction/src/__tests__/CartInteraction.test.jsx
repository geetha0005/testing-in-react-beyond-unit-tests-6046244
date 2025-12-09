//import { render, screen } from "@testing-library/react";
import { render, screen } from "../test-utils";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("Shared state interaction test", () => {
  it("updates cart count when Add to Cart button is clicked", async () => {
    render(<App />);

    // Initial state
    expect(screen.getByText(/items in cart: 0/i)).toBeInTheDocument();

    // Simulate user clicking Add to Cart
    const button = screen.getByRole("button", { name: /add to cart/i });
    await userEvent.click(button);
    await userEvent.click(button);

    // After clicks
    expect(screen.getByText(/items in cart: 2/i)).toBeInTheDocument();
  });
});
