import Banner from "./Banner";
import BestSellers from "./BestSellers";
import Category from "./Category";
import Collection from "./Collection";
import NewsLetter from "./NewsLetter";
import Products from "./Products";
import SimpleProduct from "./SimpleProduct";

function Home() {
  return (
    <div>
      <Banner />
      <Category />
      <Products />
      <Collection />
      <BestSellers />
      <NewsLetter />
     
     
    </div>
  );
}

export default Home;
