import React from 'react'
import RecipeItemCard from '../RecipeItemCard/RecipeItemCard';
import styles from './RecipeCategoryList.module.css';

const RecipeCategory = ({ recipes, category }) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h3><a href={`/category/${category}`}>{category}</a></h3>
                <p className={styles.viewMore}><a href={`/category/${category}`}>View More</a></p>
            </div>
            <ul className={styles.recipes}>
                {recipes.map((recipe, index) => (index <= 3 ?
                    <li key={index}><RecipeItemCard recipe={recipe} /></li> : null))}
            </ul>
        </div>
    )
};

export default RecipeCategory;