import * as model from './model.js';
import recipeView from "./views/recipeView.js";

//import icons from /omg/icons.svg

import 'core-js/stable';
import 'regenerator-runtime/runtime';




const recipeContainer = document.querySelector('.recipe');



// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
const APIkey = 'a277813b-063a-4e8d-82c3-0403243901f1';
const searchUrl = `https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=${APIkey}`;





const controlRecipes = async function() {
  try {
    const id = window.location.hash.slice(1);
    if(!id)return;
    recipeView.renderSpinner();

    //1.loading recipe
    await model.loadRecipe(id);
    const {recipe} = model.state.recipe;

    //2.rendering recipe
    recipeView.render(model.state.recipe);

  } catch (e) {
    alert(e.message);
  }
};

['hashchange','load'].forEach(event => window.addEventListener(event, controlRecipes));









