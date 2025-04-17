import React from "react";
import CategoryCard from "./CategoryCard";
import Fruits from "../assets/Fruits.webp";
import Vegetables from "../assets/Vegetables.jpg";
import Meat from "../assets/Meat.jpg";
import Bakery from "../assets/Bakery.webp"
import Dairy from "../assets/Dairy.png"
import Beverages from "../assets/Beverages.jpg"

const categoryItems = [
  {
    name: "Fruits",
    image: Fruits,
  },
  {
    name: "Vegetables",
    image: Vegetables,
  },
  {
    name: "Beverages",
    image: Beverages,
  },
  {
    name: "Bakery",
    image: Bakery,
  },
  {
    name: "Dairy",
    image: Dairy,
  },
  {
    name: "Meat",
    image: Meat,
  },
];

const Category = () => {
  return (
    <section className="py-12 bg-gray-50 px-6 md:px-0">
      <div className="max-w-5xl mx-auto ">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Shop By Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categoryItems.map((item, index) => {
            return (
              <CategoryCard name={item.name} key={index} image={item.image} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Category;
