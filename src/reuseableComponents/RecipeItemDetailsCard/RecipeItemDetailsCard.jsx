import React from 'react'
import { Link } from "react-router-dom";
import styles from './RecipeItemDetailsCard.module.css'
import { convertedText } from '../../utils/utils.js'

const RecipeItemDetailsCard = ({ recipe }) => {
    const convertedRecommendationText = convertedText(recipe.recommendationText);

    return (
        <div className={styles.container}>
            <img className={styles.image} src={recipe.images.recipeCardUrl} alt={recipe.title}></img>
            <div className={styles.details}>
                <div className={styles.title}>
                    <Link to={{ pathname: `/details/${recipe.id}` }}>{recipe.title.toUpperCase()}</Link>
                </div>
                <div className={styles.recommendationText}>
                    <p >{convertedRecommendationText}</p>
                </div>
                <div className={styles.otherInfo}>
                    <div>
                        Cooking Time: {recipe.otherInfo.cookTime}
                    </div>
                    <div>
                        Skill Level: {recipe.otherInfo.skillLevel}
                    </div>
                    <div>
                        Serving Number: {recipe.otherInfo.servingNumber}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default RecipeItemDetailsCard;