import {async} from 'regenerator-runtime';

import {API_URL} from "./config.js";
import {getJSON} from "./helper.js";

export const state = {
    recipe: {

    }
};


const APIkey = 'a277813b-063a-4e8d-82c3-0403243901f1';

export const loadRecipe = async function (id) {
    try{

        const data = await getJSON(`${API_URL}/${id}`);

        let {recipe} = data.data;
        state.recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            source_url: recipe.source_url,
            image_url: recipe.image_url,
            servings: recipe.servings,
            cookingTime: recipe.cookingTime,
            ingredients: recipe.ingredients,
        };
    }catch (e){
       console.error(`${e}`);
    }

};