import React from "react";
import { render } from "@testing-library/react";
import RecipeItemPage from "./RecipeItemPage.jsx";

const recipe = {
    "id": 1,
    "title": "Roasted Turkey with Smoked Paprika",
    "category": "American",
    "recommendationText": "Try this recipe for the perfect roasted turkey, made with a variety of herbs and spices. Perfect for the holiday season, the paprika adds incredible flavor for a slight twist on the classic entrée.",
    "images": {
        "recipeDetailUrl": "https://images.albertsons-media.com/is/image/ABS/0_roasted-turkey-with-smoked-paprika-M2?$recipe-detail-hero-desktop$",
        "recipeCardUrl": "https://images.albertsons-media.com/is/image/ABS/0_roasted-turkey-with-smoked-paprika-M2?$recipe-card$"
    },
    "otherInfo": {
        "servingNumber": 8,
        "cookTime": "2 hour",
        "skillLevel": "Medium"
    },
    "mainIngredients": [
        "2 tablespoons Italian seasoning",
        "2 tablespoons sea salt",
        "1 tablespoon coarsely ground black pepper",
        "1 tablespoon smoked paprika",
        "2 teaspoons garlic powder",
        "2 teaspoons ground mustard",
        "1 whole turkey (12 to 14 pounds), fresh or frozen, thawed",
        "2 ribs celery",
        "1 onion, quartered",
        "1 orange, quartered",
        "2 bay leaves",
        "1 tablespoon olive oil"
    ],
    "cookingInstructions": [
        "Place oven rack in lowest position. Preheat oven to 325°. Place roasting rack in shallow roasting pan. Mix first 6 ingredients in small bowl.",
        "Rinse turkey; pat dry. Place turkey, breast-side up, in prepared pan. Sprinkle 1 tablespoon of the seasoning mixture inside turkey. Stuff with celery, onion, orange and bay leaves.",
        "Brush turkey breast with oil. Spread remaining seasoning mixture over entire surface and under skin of turkey. Add 1/2 cup water to pan; cover loosely with heavy duty foil.",
        "Roast one hour. Remove foil. Roast 2 to 2 ½ hours longer or until internal temperature reaches 165° (175° in thigh), basting occasionally with pan juices.",
        "Remove turkey from oven. Let stand 20 minutes. Transfer to platter or carving board and slice. Reserve pan juices to make gravy or to serve with turkey"
    ]
};

const myCollection = {};


it("renders the Recipe Item page correctly", () => {
    const { container } = render(<RecipeItemPage recipe={recipe} myCollection={myCollection} />);
    expect(container).toMatchSnapshot();
});