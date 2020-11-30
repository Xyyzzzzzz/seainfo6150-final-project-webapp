import React from "react";
import { render } from "@testing-library/react";
import ErrorPage from "./ErrorPage.jsx";


it("renders the Error page correctly", () => {
    const { container } = render(<ErrorPage />);
    expect(container).toMatchSnapshot();
});