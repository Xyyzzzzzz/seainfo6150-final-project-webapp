export const convertRecipesInCategory = (recipes) => {
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
    return text.length > 150 ? text.slice(0, 150) + '...' : text;
};

export const searchRecipes = (searchText, recipes) => {
    const result = recipes.filter(recipe => {
        return recipe.title.toLowerCase().includes(searchText.toLowerCase())
    });
    return result;
};