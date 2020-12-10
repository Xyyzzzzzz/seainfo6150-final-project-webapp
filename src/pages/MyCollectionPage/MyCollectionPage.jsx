import React from 'react'
import RecipeItemDetailsCard from '../../reuseableComponents/RecipeItemDetailsCard/RecipeItemDetailsCard';
import styles from './MyCollectionPage.module.css'
import PageHeader from '../../reuseableComponents/PageHeader/PageHeader';

const MyCollectionPage = ({ recipes }) => {
    return (
        <div>
            <PageHeader header="My Collection" />
            <div className={styles.container}>
                {Object.values(recipes).length === 0 ?
                    <p>You don't have any recipe in your collection.</p> :
                    <ul >
                        {Object.values(recipes).map(recipe => (
                            <li key={recipe.id}>
                                <RecipeItemDetailsCard recipe={recipe} />
                            </li>
                        ))}
                    </ul>}
            </div>
        </div >
    )
};

export default MyCollectionPage;