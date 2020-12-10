import React, { useState } from 'react'
import styles from './RecipeItemPage.module.css'

const RecipeItemPage = ({ recipe, myCollection, setMyCollection }) => {
    const recipeId = recipe.id;
    const [buttonText, setButtonText] = useState(
        myCollection[recipeId] ? "Remove from My Collection" : "Add to My Collection");

    const ToggleRecipeToCollection = () => {
        const newMyCollection = myCollection;
        if (myCollection[recipeId]) {
            delete newMyCollection[recipeId];
            setButtonText("Add to My Collection");
        } else {
            newMyCollection[recipeId] = recipe;
            setButtonText("Remove from My Collection");
        }
        setMyCollection(newMyCollection);
    }

    return (
        <div className={styles.container}>
            <img className={styles.image} src={recipe.images.recipeDetailUrl} alt={recipe.title}></img>
            <h2>
                {recipe.title}
            </h2>
            <button className="collect-button" onClick={ToggleRecipeToCollection}>
                {buttonText}
            </button>
            <div className={styles.textWrapper}>
                <div className={styles.overview}>
                    <div className={styles.recommendationText}>{recipe.recommendationText}</div>
                    <div className={styles.otherInfo}>
                        <div>
                            Serving Number: {recipe.otherInfo.servingNumber}
                        </div>
                        <div>
                            Cooking Time: {recipe.otherInfo.cookTime}
                        </div>
                        <div>
                            Skill Level: {recipe.otherInfo.skillLevel}
                        </div>
                    </div>
                </div>
                <div className={styles.details}>
                    <div className={styles.ingredients}>
                        <h3>Main Ingredients</h3>
                        <ul>
                            {recipe.mainIngredients.map((ingredient, index) => (
                                <li key={index} className={styles.ingredient}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.instructions}>
                        <h3>Cooking Instructions</h3>
                        <ol>
                            {recipe.cookingInstructions.map((instruction, index) => (
                                <li key={index} className={styles.instruction}>Step {index + 1}: {instruction}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div >
    )
};

export default RecipeItemPage;