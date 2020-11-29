import React from 'react'
import RecipeItemCard from '../RecipeItemCard/RecipeItemCard';
import styles from './RecipeCategoryList.module.css';
import { Link } from "react-router-dom";

const RecipeCategory = ({ recipes, category }) => {
    return (
        <li className={styles.container}>
            <div className={styles.categoryName}>
                <h3><Link to={{ pathname: `/category/${category}` }}>{category}</Link></h3>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.recipes}>
                    {recipes.map((recipe, index) => (
                        index <= 3 ? <RecipeItemCard recipe={recipe} /> : null
                    ))}
                </div>
            </div>
        </li>
    )
};

export default RecipeCategory;