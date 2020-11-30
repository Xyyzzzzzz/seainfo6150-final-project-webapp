import React from "react";
import { render } from "@testing-library/react";
import RecipeCategoryPage from "./RecipeCategoryPage.jsx";

const recipes = [
    {
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
    },
    {
        "id": 2,
        "title": "Pineapple Burger Stack with Avocado Salsa",
        "category": "American",
        "recommendationText": "Make the ultimate burger this summer with this recipe for a Pineapple Burger Stack with Avocado Salsa. The combination of grilled pineapple, jalapeño and avocado combine perfectly to create a sweet, spicy and creamy flavor.",
        "images": {
            "recipeDetailUrl": "https://images.albertsons-media.com/is/image/ABS/0_pineapple-burger-stack-with-avocado-salsa-M2?$recipe-detail-hero-desktop$",
            "recipeCardUrl": "https://images.albertsons-media.com/is/image/ABS/0_pineapple-burger-stack-with-avocado-salsa-M2?$recipe-card$"
        },
        "otherInfo": {
            "servingNumber": 2,
            "cookTime": "20 mins",
            "skillLevel": "Easy"
        },
        "mainIngredients": [
            "2 O Organics® ground beef patties, (4-ounce)",
            "half teaspoon paprika",
            "half teaspoon kosher salt",
            "2 fresh sliced pineapple rounds, 1/2-inch thick",
            "2 thick-sliced red onion rounds, 1/4-inch thick",
            "2 handfuls baby spinach",
            "oil of choice (to brush grill)",
            "jalapeño",
            "half cup diced red and yellow cherry tomatoes",
            "half cup diced avocado (ripe)"
        ],
        "cookingInstructions": [
            "Heat grill to medium-high and lightly brush with oil.",
            "Sprinkle burgers with paprika and salt (both sides), rubbing in all over. Place on grill, along with pineapple rounds, red onion rounds and jalapeño. Grill burgers, pineapple and onion 4-5 minutes on each side, to desired doneness. Check pineapple— it is done when it is juicy and has good grill marks.",
            "Grill jalapeño 4 minutes total, flipping halfway through cooking time. Remove jalapeño from grill and let cool. Discard the ribs and seeds. Dice the rest and add it to a bowl with diced tomatoes and avocado. Sprinkle with salt and toss salsa.",
            "Remove pineapple from grill. Top each pineapple round with a small handful of spinach. Add red onion on top of the spinach and then the burger. Scoop avocado salsa and pile on top of the two pineapple burger stacks. Serve immediately.",
            "Cook burger to desired doneness: Medium Rare (130-135°):7 minutes total; Medium (135-150°): 8 minutes total; Medium Well(150-165°): 9 minutes total; Well Done (165° and higher): 10 minutes total - For milder salsa, substitute bell pepper for jalapeño - Add cilantro to the top of the burger stack, if desired!"
        ]
    },
];

it("renders the Recipe Category page correctly", () => {
    const { container } = render(<RecipeCategoryPage recipes={recipes} categoryName='American' />);
    expect(container).toMatchSnapshot();
});