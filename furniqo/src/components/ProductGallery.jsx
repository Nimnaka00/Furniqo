import { useState } from "react";
import products from "../data/products";

const categories = ["chairs", "beds", "sofas", "lamps"];

const ProductGallery = () => {
  const [activeCategory, setActiveCategory] = useState("chairs");

  return (
    <section className="py-20 bg-[#f9f9f9]" id="shop">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-[42px] font-medium text-[#1e1e1e] mb-8">Furniture</h2>

        {/* Category Bar */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-[#f3f3f3] rounded-full px-2 py-1 gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`capitalize px-5 py-2 rounded-full text-[14px] font-medium transition-all duration-200
                  ${
                    activeCategory === cat
                      ? "bg-white shadow-sm text-[#1e1e1e]"
                      : "text-[#6F6F6F] hover:text-[#1e1e1e]"
                  }`}
              >
                {cat.replace(/s$/, "")}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products[activeCategory].map((product) => (
            <div
              key={product.id}
              className="bg-white border rounded-2xl shadow hover:shadow-lg transition p-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4 rounded-xl"
              />
              <p className="text-sm text-[#6F6F6F]">Chair</p>
              <h3 className="text-lg font-semibold text-[#1e1e1e] mt-1">{product.name}</h3>
              <p className="text-[#b5712d] font-bold mt-2">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
