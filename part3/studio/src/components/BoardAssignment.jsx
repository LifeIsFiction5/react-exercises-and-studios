import { useState } from 'react';

export default function BoardAssignment () {
   
   const [ boardName, setBoardName ] = useState("No boards yet!");
   const boards = [
   {
      label: "New Recipes that you'll love",
      value: "newRecipes"
      },
   {
      label: "Our Favorites",
      value: "ourFavorites"
   },
   {
      label: "Cheap and easy",
      value: "cheapAndEasy"
   },
   ];

   let boardOptions = boards.map((board, index) => {
      return <option key={index} value={board.value}>{board.value}</option>
   });

   const handleChange = (event) => {
      setBoardName(event.target.value);
   }

   return ( 
      <div style={{paddingTop: "50px"}}>
         <label>Save to Board: </label>
         <select value={boardName} onChange={handleChange}></select>
         <p>Saved to {boardName}!</p>
      </div>
   );
}
