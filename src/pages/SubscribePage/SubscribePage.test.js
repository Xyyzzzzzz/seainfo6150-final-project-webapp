import React from "react";
import { render } from "@testing-library/react";
import SubscribePage from "./SubscribePage.jsx";

it("renders the Subscreibe page correctly", () => {
    const { container } = render(<SubscribePage />);
    expect(container).toMatchSnapshot();
});