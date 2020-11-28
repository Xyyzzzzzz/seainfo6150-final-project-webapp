import React from 'react'
import RecipeItemCard from '../RecipeItemCard/RecipeItemCard';
import styles from './RecipeCategoryList.module.css';
import { Link } from "react-router-dom";

const RecipeCategory = ({ recipes, category }) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h3>{category}</h3>
                <Link to={{ pathname: `/category/${category}` }}>View All</Link>
            </div>
            <div className={styles.recipes}>
                {recipes.map((recipe, index) => (
                    index <= 2 ? <RecipeItemCard recipe={recipe} /> : null
                ))}
            </div>
        </div>
    )
};

export default RecipeCategory;