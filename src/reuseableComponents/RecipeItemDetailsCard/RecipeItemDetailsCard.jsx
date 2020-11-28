import React from 'react'
import { Link } from "react-router-dom";
import styles from './RecipeItemDetailsCard.module.css'
// import { convertedText } from '.../utils/utils.js'

const RecipeItemDetailsCard = ({ recipe }) => {
    const convertedText = (text) => {
        return text.length > 150 ? text.slice(0, 150) + '...' : text;
    };

    const convertedRecommendationText = convertedText(recipe.recommendationText);

    return (
        <div className={styles.container}>
            <img className={styles.image} src={recipe.images.recipeCardUrl} alt={recipe.title}></img>
            <div className={styles.details}>
                <Link className={styles.title}
                    to={{ pathname: `/details/${recipe.id}` }}>{recipe.title.toUpperCase()}
                </Link>
                <div className={styles.infos}>
                    <p className={styles.recommendationText}>{convertedRecommendationText}</p>
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

        </div>
    )
};

export default RecipeItemDetailsCard;