import React from 'react'
import RecipeItemDetailsCard from '../../reuseableComponents/RecipeItemDetailsCard/RecipeItemDetailsCard';
import styles from './RecipeCategoryPage.module.css'
import PageHeader from '../../reuseableComponents/PageHeader/PageHeader';

const RecipeCategoryPage = ({ categoryName, recipes }) => {
    return (
        <div>
            <PageHeader header={categoryName} />
            <ul className={styles.container}>
                {recipes.map(recipe => (
                    <li key={recipe.id}>
                        <RecipeItemDetailsCard recipe={recipe} />
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default RecipeCategoryPage;