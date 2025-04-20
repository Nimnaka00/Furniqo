import { useState } from "react";
import products from "../data/products";

const categories = ["chairs", "beds", "sofas", "lamps"];

const ProductGallery = () => {
  const [activeCategory, setActiveCategory] = useState("chairs");

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className=" md:text-4xl text-[42px] text-[#1e1e1e] font-normal mb-8">Furniture</h2>

        {/* Category Bar */}
        <div className="flex justify-center gap-6 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`capitalize px-4 py-2 rounded-full border-2 ${
                activeCategory === cat
                  ? "bg-primary text-white border-primary"
                  : "border-gray-300 text-dark hover:border-primary hover:text-primary"
              } transition`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products[activeCategory].map((product) => (
            <div key={product.id} className="border rounded-lg shadow hover:shadow-lg transition p-4">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-lg font-semibold text-dark">{product.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{activeCategory.toUpperCase()}</p>
              <p className="text-primary font-bold mt-2">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
