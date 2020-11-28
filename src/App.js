import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { isEmpty } from "lodash";
import './App.css';
import { recipesInCategory } from './utils/utils';
import { recipes } from "./data";

import Home from "./pages/Home/Home.jsx";
import RecipeCategoryPage from "./pages/RecipeCategoryPage/RecipeCategoryPage.jsx";
import RecipeItemPage from './pages/RecipeItemPage/RecipeItemPage.jsx'
import SubscribePage from './pages/SubscribePage/SubscribePage.jsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx'
import Nav from "./reuseableComponents/Nav/Nav";
import AppHeader from "./reuseableComponents/AppHeader/AppHeader";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";


function App() {
  const fetchedData = recipes;
  const recipesInCategories = recipesInCategory(fetchedData);

  // const [fetchedData, setFetchedData] = useState();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     // performs a GET request
  //     const response = await fetch("http://demo5112044.mockable.io/recipes");
  //     const responseJson = await response.json();
  //     setFetchedData(Object.values(responseJson));
  //   };

  //   if (isEmpty(fetchedData)) {
  //     fetchData();
  //   }
  // }, [fetchedData]);

  return isEmpty(fetchedData) ?
    'no data found' : (
      <div className="App" style={{ backgroundColor: "rgb(245, 241, 241)" }}>
        <AppHeader />
        <Nav />
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
              />
            )}
          />
          <Route path="/subscribe" exact>
            <SubscribePage />
          </Route>
          <Route path="/contactUs" exact>
            <ContactUsPage />
          </Route>
          <Route component={ErrorPage} />
        </Switch >
      </div >
    );
}

export default App;
