import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa6";
import Card from "../../components/Card";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [Filtered, setFiltered] = useState([]);
  const [SelectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/product.json");
        const data = await response.json();
        setProducts(data);
        setFiltered(data); 
      } catch (error) {
        console.log("error:", error);
      }
    };

    fetchData();
  }, []);

  const FilteredItems = (Category) => {
    const filtered = Category === "all" ? products : products.filter((item) => item.category === Category);
    setFiltered(filtered);
    setSelectedCategory(Category);
  };

  const showAll = () => {
    setFiltered(products); 
    setSelectedCategory("all"); 
  };

  const handleSort = (option) => {
    setSortOption(option); 

    let sortedItems = [...Filtered]; 

    switch (option) {
      case "a-z":
        sortedItems.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "z-a":
        sortedItems.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        sortedItems = [...products]; 
        break;
    }

    setFiltered(sortedItems); 
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:p-28 ">
      <h2 className="text-3xl font-semibold capitalize text-center my-2">
        Or subscribe to the newsletter
      </h2>
      <div>
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-x-3">
          <div className="flex flex-row justify-start md:items-center md:gap-5 gap-4 flex-wrap">
            <button onClick={showAll}>All Products</button>
            <button onClick={() => FilteredItems("Clothing")}>Clothing</button>
            <button onClick={() => FilteredItems("Hoodies")}>Hoodies</button>
            <button onClick={() => FilteredItems("Bags")}>Bags</button>
          </div>

          <div className="flex justify-end mb-4 rounded-sm">
            <div className="bg-black p-2">
              <FaFilter className="text-white w-4 h-4" />
            </div>

            <select
              id="sort"
              onChange={(e) => handleSort(e.target.value)}
              value={sortOption}
              className="bg-black text-white px-1 py-2 rounded-sm gap-5"
            >
              <option value="default">default</option>
              <option value="a-z">A-Z</option>
              <option value="z-a">Z-A</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
        </div>
        <Card name={Filtered} />
      </div>
    </div>
  );
};

export default Products;