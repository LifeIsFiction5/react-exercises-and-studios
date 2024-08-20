import React from 'react';
import styles from './Description.module.css';

const RecipeAuthor = () => {
    let authorLink = "https://www.gordonramsay.com/"
    let authorPhoto = "https://ew.com/thmb/U1RF2d5nQMFDuysEya_f4hbjrck=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Gordon-Ramsay-sandwich-092123-tout-b9138de1cba34d97a5188ae81a1ba454.jpg";
    let authorName = "Gordon Ramsay";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Gordon Ramsay, chef extraordinaire" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Blog name</a> 
           </div>
        </div>
     );

};

class RecipeDescription extends React.Component {
    render() {
    return (
<>
    <div> 
   <div>
      <h1>Make your own Idiot Sandwich</h1>
      <p>You are what you eat</p>
   </div>
   <RecipeAuthor />
</div>
</>

    );
}

}

export default RecipeDescription;