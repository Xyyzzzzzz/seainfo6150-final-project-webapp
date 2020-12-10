import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styles from './Nav.module.css';
import { searchRecipes } from '../../utils/utils';

const Nav = ({ recipes, setSearchedRecipes }) => {
    const [selectNavTab, setSelectNavTab] = useState("Home");
    const [searchText, setSearchText] = useState('');

    const onChange = (e) => {
        setSearchText(e.target.value);
    };

    const applySearch = () => {
        const searchResult = searchRecipes(searchText, recipes);
        setSearchedRecipes(searchResult);
    };

    const changeTab = (tabName) => {
        setSelectNavTab(tabName);
        setSearchedRecipes(recipes);
        setSearchText("");
    };

    return (
        <nav className={styles.navbar}>
            <Link to="/" onClick={() => setSelectNavTab("Home")}>Home</Link>
            <div className={styles.dropdown}>
                <button className={styles.dropbtn}>Categories</button>
                <div className={styles.dropContent}>
                    <Link to="/category/American" onClick={() => changeTab("Category")}>American</Link>
                    <Link to="/category/Asian" onClick={() => changeTab("Category")}>Asian</Link>
                    <Link to="/category/European" onClick={() => changeTab("Category")}>European</Link>
                    <Link to="/category/Others" onClick={() => changeTab("Category")}>Others</Link>
                </div>
            </div>
            <Link to="/myCollection" onClick={() => changeTab("My Collection")}>My Collection</Link>
            <Link to="/subscribe" onClick={() => changeTab("Subscribe")}>Subscribe</Link>
            <Link to="/contactUs" onClick={() => changeTab("Contact Us")}>Contact Us</Link>
            {(selectNavTab === "Home" || selectNavTab === "Category" || selectNavTab === "") ?
                < div className={styles.searchContainer}>
                    <input type="text" placeholder="Search.." name="search" value={searchText} onChange={onChange} />
                    <button type="submit" onClick={applySearch}>Submit</button>
                </div> :
                null}

        </nav>
    )
};

export default Nav;