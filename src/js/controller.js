const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
const APIkey = 'a277813b-063a-4e8d-82c3-0403243901f1';
const searchUrl = `https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=${APIkey}`;

const recipeUrl = `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886?key=${APIkey}`;

const showRecipe = async function(){
  try{
    const res = await fetch(recipeUrl);
    const data = await res.json();
    if(!res.ok) throw new Error(`${data.message} ${res.status}`);
    let {recipe} = data.data;
    recipe = {
      id : recipe.id,
      title : recipe.title,
      publisher : recipe.publisher,
      source_url : recipe.source_url,
      image_url : recipe.image_url,
      servings : recipe.servings,
      cookingTime : recipe.cookingTime,
      ingredients : recipe.ingredients,
    }


  }catch (e){
    alert(e.message);
  }
};
showRecipe();

