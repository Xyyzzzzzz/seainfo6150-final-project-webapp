// export const fetchRecipes = async () => {
//     // performs a GET request
//     const response = await fetch("http://demo5112044.mockable.io/recipes");
//     const responseJson = await response.json();
//     console.log(Object.values(responseJson));
//     return Object.values(responseJson);
// };


export const recipesInCategory = (recipes) => {
    const recipesInCategory = {};
    for (let recipeId in recipes) {
        const recipe = recipes[recipeId]
        const category = recipe.category;
        if (recipesInCategory[category]) {
            recipesInCategory[category].push(recipe);
        } else {
            recipesInCategory[category] = [recipe];
        }
    }
    return recipesInCategory;
};

export const convertedText = (text) => {
    return text.length > 100 ? text.slice(0, 100) + '...' : text;
};