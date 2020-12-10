import React, { useState, useEffect } from "react";
import './App.css';
import { Switch, Route } from "react-router-dom";
import { isEmpty } from "lodash";

import Home from "./pages/Home/Home.jsx";
import RecipeCategoryPage from "./pages/RecipeCategoryPage/RecipeCategoryPage.jsx";
import RecipeItemPage from './pages/RecipeItemPage/RecipeItemPage.jsx';
import MyCollectionPage from './pages/MyCollectionPage/MyCollectionPage.jsx';
import SubscribePage from './pages/SubscribePage/SubscribePage.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';
import Nav from "./reuseableComponents/Nav/Nav";
import AppHeader from "./reuseableComponents/AppHeader/AppHeader";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import { convertRecipesInCategory } from './utils/utils';
import { recipes } from "./data";

function App() {
  // if the data cannot be fetched, use the data from data.js
  // const fetchedData = recipes;
  // const recipesInCategories = convertRecipesInCategory(fetchedData);

  const [fetchedData, setFetchedData] = useState();
  const [myCollection, setMyCollection] = useState({});
  const [searchedRecipes, setSearchedRecipes] = useState();
  const recipesInCategories = convertRecipesInCategory(searchedRecipes);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://run.mocky.io/v3/258f0aa8-e395-4fed-8eaa-347caecfd1f1");
      const responseJson = await response.json();
      setFetchedData(responseJson);
      setSearchedRecipes(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  const content = (isEmpty(fetchedData) || isEmpty(searchedRecipes)) ?
    <h3>Loading ... Please wait ...</h3> :
    (<div>
      <Nav
        recipes={Object.values(fetchedData)}
        setSearchedRecipes={setSearchedRecipes} />
      <Switch>
        <Route exact path="/">
          < Home recipesInCategories={recipesInCategories} />
        </Route >
        <Route
          path="/category/:categoryName"
          exact
          render={({ match }) => (
            <RecipeCategoryPage
              categoryName={match.params.categoryName}
              recipes={recipesInCategories[match.params.categoryName]}
            />
          )}
        />
        <Route
          path="/details/:recipeId"
          exact
          render={({ match }) => (
            <RecipeItemPage
              recipe={fetchedData[match.params.recipeId]}
              myCollection={myCollection}
              setMyCollection={setMyCollection}
            />
          )}
        />
        <Route path="/myCollection" exact>
          <MyCollectionPage recipes={myCollection} />
        </Route>
        <Route path="/subscribe" exact>
          <SubscribePage />
        </Route>
        <Route path="/contactUs" exact>
          <ContactUsPage />
        </Route>
        <Route component={ErrorPage} />
      </Switch >
    </div >);

  return (
    <div className="App">
      <AppHeader />
      {content}
    </div>
  );
}

export default App;
