## Project Description

My app is called Easy Cooking Recipe to help those people who want to easily look for recipes with dynamic categories. User can find recipes by type in the searching bar and click search button. Users will see 20 different recipes for each categories and once one of the food is clicked, the ingredient for specific food will show on the page. Users can always click a link for more detailed information of selected food.

### Sample image of homepage

![](https://i.imgur.com/pbHy2V3.png)

### Components

- App (root component)
- Search (includes form, input and search button)
- Foods (the container shows 20 results of searched food)
- Recipe (ingredient page with more info link)

### MVP User Stories

##### MVP User Stories

- As a user, I want to find food by searching the categories.

- As a user, I want to see ingredient and recipe of food I am interested in.

##### Post MVP Stretch Goals

- As a user, I want to see more info of food (eg: nutrition info)

## API

[Link to the API's documentation I used.](https://developer.edamam.com/edamam-docs-recipe-api)

#### Sample response

```
{
  "q" : "chicken",
  "from" : 0,
  "to" : 10,
  "more" : true,
  "count" : 161,
  "hits" : [ {
    "recipe" : {
      "uri" : "http://www.edamam.com/ontologies/edamam.owl#recipe_3da1169eb633a5e4607890ebf7dee89f",
      "label" : "Grilled Butterflied Chicken Recipe",
      "image" : "https://www.edamam.com/web-img/7a2/7a2f41a7891e8a8f8a087a96930c6463.jpg",
      "source" : "Serious Eats",
      "url" : "http://www.seriouseats.com/recipes/2012/08/grilled-butterflied-chicken-recipe.html",
      "shareAs" : "http://www.edamam.com/recipe/grilled-butterflied-chicken-recipe-3da1169eb633a5e4607890ebf7dee89f/chicken/2-ing",
      "yield" : 4.0,
      "dietLabels" : [ "Low-Carb" ],
      "healthLabels" : [ "Sugar-Conscious", "Peanut-Free", "Tree-Nut-Free", "Alcohol-Free" ],
      "cautions" : [ ],
     }

```

### Future improvement

Whenever the page reloads I see a screen flash, I will change some functionality to make the page reload smoother and add more features to my app. For instance, adding drop-down list outside of the form element with categories that users can select.

[Please click here to see my recipe app!](https://recipeapp-12345.herokuapp.com)
