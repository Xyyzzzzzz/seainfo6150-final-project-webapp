import React from 'react'
import RecipeCategoryList from '../../reuseableComponents/RecipeCategoryList/RecipeCategoryList.jsx'
import styles from './Home.module.css';

const Home = ({ recipesInCategories }) => {
    return (
        <div className={styles.container}>
            <ul>
                {Object.keys(recipesInCategories).map((category, index) => (
                    <li key={index}>
                        <RecipeCategoryList recipes={recipesInCategories[category]} category={category} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home;
