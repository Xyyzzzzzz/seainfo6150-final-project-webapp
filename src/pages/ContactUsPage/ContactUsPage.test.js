import React from "react";
import { render } from "@testing-library/react";
import ContactUsPage from "./ContactUsPage.jsx";

it("renders the Contact Us page correctly", () => {
    const { container } = render(<ContactUsPage />);
    expect(container).toMatchSnapshot();
});
