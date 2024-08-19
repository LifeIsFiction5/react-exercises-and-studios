export default function BookList() {
   let pageTitle = "Books I've read because I like to read";
   let book1 = "https://m.media-amazon.com/images/I/51ymen1ByKL._AC_UF1000,1000_QL80_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/71vK0WVQ4rL._AC_UF1000,1000_QL80_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/71Tze+xZcgL._AC_UF1000,1000_QL80_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="A Short History of Nearly Everything" />
         <img src={book2} alt="How to Win Friends and Influence People" />
         <img src={book3} alt="The Obstacle is the Way" />
      </div>      
   );
}