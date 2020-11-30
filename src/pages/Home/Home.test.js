import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home.jsx";
import { recipes } from '../../data';
import { convertRecipesInCategory } from '../../utils/utils';

const recipesInCategories = convertRecipesInCategory(recipes);

it("renders the home component correctly", () => {
    const { container } = render(<Home recipesInCategories={recipesInCategories} />);
    expect(container).toMatchSnapshot();
});