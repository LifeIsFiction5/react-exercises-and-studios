import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://www.gordonramsay.com/";
   let authorPhoto = "https://i.pinimg.com/736x/55/f9/67/55f9677cccfc60ccba290a3032aceffa.jpg";
   let authorName = "Gordon Ramsay";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}}
         width="200px"
         />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = [
      'eg',
      'salt',
      'pepper',
      'bread',
      'creme fresh',
      'cherry tomatoes',
      'green onion',
   ];

   let ingredientListItems = ingredients.map((ingredient, index) => {
      return <li key={index}>{ingredient}</li>;
   });

   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            {ingredientListItems}
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Gordan Ramsay's scrambled eg</h1>
            <p>
               When Gordon hungry and idiot sandwich just won't do, Gordon make scrambled eg.  Scrambled eg is how we test the new chefs that think they have what it takes to make it in Hell's Kitchen.  Gordon show you how to make the best eg and toast in all of Europe.  Don't be an idiot sandwich, grab your favorite pan, and let's scramble it up.
            </p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img 
         src="https://kitchentigress.com/wp-content/uploads/2022/09/scrambled2Beggs2BA2B12B43.jpg" 
         alt="Gordon's Famous Scrambled Eg" 
         className="imageUpdates"
         height="450px"
         />
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
