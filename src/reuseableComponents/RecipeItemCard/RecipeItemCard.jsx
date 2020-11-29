import React from 'react'
import styles from './RecipeItemCard.module.css';
import { Link } from "react-router-dom";

const RecipeItemCard = ({ recipe }) => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={recipe.images.recipeCardUrl} alt={recipe.title} />
            <div className={styles.textWapper}>
                <div className={styles.title}>
                    <Link to={{ pathname: `/details/${recipe.id}` }}>{recipe.title}</Link>
                </div>

                <div className={styles.cookTime}>
                    Cooking Time: {recipe.otherInfo.cookTime}
                </div>
            </div>
        </div>
    )
};

export default RecipeItemCard;