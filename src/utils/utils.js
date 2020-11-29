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
    return text.length > 150 ? text.slice(0, 150) + '...' : text;
};