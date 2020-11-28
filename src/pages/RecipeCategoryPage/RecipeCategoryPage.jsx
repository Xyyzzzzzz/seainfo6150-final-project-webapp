import React from 'react'
import RecipeItemDetailsCard from '../../reuseableComponents/RecipeItemDetailsCard/RecipeItemDetailsCard';
import styles from './RecipeCategoryPage.module.css'
import PageHeader from '../../reuseableComponents/PageHeader/PageHeader';

const RecipeCategoryPage = ({ categoryName, recipes }) => {
    return (
        <div>
            <PageHeader header={categoryName} />
            <div className={styles.container}>
                <li>
                    {recipes.map(recipe => (
                        <RecipeItemDetailsCard recipe={recipe} />
                    ))}
                </li>
            </div>
        </div>
    )
};

export default RecipeCategoryPage;