import React, { useState, useEffect } from "react";
import './App.css';
import { Switch, Route } from "react-router-dom";
import { isEmpty } from "lodash";

import Home from "./pages/Home/Home.jsx";
import RecipeCategoryPage from "./pages/RecipeCategoryPage/RecipeCategoryPage.jsx";
import RecipeItemPage from './pages/RecipeItemPage/RecipeItemPage.jsx'
import SubscribePage from './pages/SubscribePage/SubscribePage.jsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx'
import Nav from "./reuseableComponents/Nav/Nav";
import AppHeader from "./reuseableComponents/AppHeader/AppHeader";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import { recipesInCategory } from './utils/utils';
import { recipes } from "./data";


function App() {
  // if the data cannot be fetched, use the data from data.js
  // const fetchedData = recipes;
  // const recipesInCategories = recipesInCategory(fetchedData);

  const [fetchedData, setFetchedData] = useState();
  const recipesInCategories = recipesInCategory(fetchedData);
  console.log(fetchedData)
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://run.mocky.io/v3/a4d7d187-d0df-4909-8a5a-58e1d4739b1f");
      const responseJson = await response.json();
      setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  const content = isEmpty(fetchedData) ?
    <h3>Loading ... Please wait ...</h3> :
    (<div>
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
    </div >);

  return (
    <div className="App">
      <AppHeader />
      {content}
    </div>
  );
}

export default App;
