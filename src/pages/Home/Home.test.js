import React from "react";
import { render } from "@testing-library/react";
import { convertRecipesInCategory } from '../../utils/utils';
import { BrowserRouter as Router } from "react-router-dom";
import { recipes } from '../../data';
import Home from "./Home.jsx";

const recipesInCategories = convertRecipesInCategory(recipes);

it("renders the home component correctly", () => {
    const { container } = render(
        <Router>
            <Home recipesInCategories={recipesInCategories} />
        </Router>);
    expect(container).toMatchSnapshot();
});