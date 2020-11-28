import React from 'react'
import styles from './RecipeItemPage.module.css'

const RecipeItemPage = ({ recipe }) => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={recipe.images.recipeDetailUrl} alt={recipe.title}></img>
            <h2>
                {recipe.title}
            </h2>
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
                    {recipe.mainIngredients.map((ingredient, index) => (
                        <li key={index} className={styles.ingredient}>{ingredient}</li>
                    ))}
                </div>
                <div className={styles.instructions}>
                    <h3>Cooking Instructions</h3>
                    {recipe.cookingInstructions.map((instruction, index) => (
                        <li key={index} className={styles.instruction}>Step {index + 1}: {instruction}</li>
                    ))}
                </div>
            </div>
        </div >
    )
};

export default RecipeItemPage;