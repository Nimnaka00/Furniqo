import { useState } from "react";
import { motion } from "framer-motion";

const categories = ["Chairs", "Tables", "Dressers", "Lamps", "Beds", "Sofas"];

const products = [
  { id: 1, name: "Nordic Church Chair", price: "LKR 29,000", category: "Chairs", image: "/assets/furniture/Nordic Church Chair.png" },
  { id: 2, name: "Ekero Contemporary Armchair", price: "LKR 45,500", category: "Chairs", image: "/assets/furniture/Ekero Contemporary Armchair.png" },
  { id: 3, name: "Vibrant Lounge Chair", price: "LKR 42,000", category: "Chairs", image: "/assets/furniture/Vibrant Lounge Chair.png" },
  { id: 4, name: "Sleek Nesting Tables", price: "LKR 32,500", category: "Tables", image: "/assets/furniture/Sleek Nesting Tables.png" },
  { id: 5, name: "Industrial Reclaimed Wood Table", price: "LKR 55,000", category: "Tables", image: "/assets/furniture/Industrial Reclaimed Wood Table.png" },
  { id: 6, name: "Scholar Round Dining Table", price: "LKR 39,500", category: "Tables", image: "/assets/furniture/Scholar Round Dining Table.png" },
  { id: 7, name: "Rustic Iron Edge Table", price: "LKR 60,000", category: "Tables", image: "/assets/furniture/Rustic Iron Edge Table.png" },
  { id: 8, name: "Blaire 6-Drawer Dresser", price: "LKR 68,000", category: "Dressers", image: "/assets/furniture/Blaire 6-Drawer Dresser.png" },
  { id: 9, name: "Matera Tallboy Dresser", price: "LKR 58,000", category: "Dressers", image: "/assets/furniture/Matera Tallboy Dresser.png" },
  { id: 10, name: "Ore Tripod Floor Lamp", price: "LKR 22,500", category: "Lamps", image: "/assets/furniture/Ore Tripod Floor Lamp.png" },
  { id: 11, name: "Nordli Modern Bed Frame", price: "LKR 74,000", category: "Beds", image: "/assets/furniture/Nordli Modern Bed Frame.png" },
  { id: 12, name: "Rochelle Classic Sofa", price: "LKR 99,000", category: "Sofas", image: "/assets/furniture/Rochelle Classic Sofa.png" },
  { id: 13, name: "Kendall Walnut Bookcase", price: "LKR 49,000", category: "Dressers", image: "/assets/furniture/Kendall Walnut Bookcase.png" },
  { id: 14, name: "Kendall Walnut Tall Bookcase", price: "LKR 59,000", category: "Dressers", image: "/assets/furniture/Kendall Walnut Tall Bookcase.png" },
  { id: 15, name: "Luna Nightstand", price: "LKR 24,000", category: "Dressers", image: "/assets/furniture/Luna Nightstand.png" },
  { id: 16, name: "Luna Oval Nightstand", price: "LKR 26,000", category: "Dressers", image: "/assets/furniture/Luna Oval Nightstand.png" },
  { id: 17, name: "TECA Storage Trunk with Metal Base", price: "LKR 40,000", category: "Dressers", image: "/assets/furniture/TECA Storage Trunk with Metal Base.png" },
];

const ProductGallery = () => {
  const [activeCategory, setActiveCategory] = useState("Chairs");
  const filteredProducts = products.filter((product) => product.category === activeCategory);

  return (
    <section className="py-20 bg-[#f9f9f9]" id="shop">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-[42px] font-medium text-[#1e1e1e] mb-8">Furniture</h2>

        <div className="flex justify-center mb-12">
          <div className="flex bg-[#f3f3f3] rounded-full px-2 py-1 gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`capitalize px-5 py-2 rounded-full text-[14px] font-medium transition-all duration-200 ${activeCategory === cat ? "bg-white shadow-sm text-[#1e1e1e]" : "text-[#6F6F6F] hover:text-[#1e1e1e]"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: product.id * 0.03 }}
              className="bg-white border rounded-2xl shadow hover:shadow-lg transition p-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4 rounded-xl"
              />
              <p className="text-sm text-[#6F6F6F]">{product.category}</p>
              <h3 className="text-lg font-semibold text-[#1e1e1e] mt-1">{product.name}</h3>
              <p className="text-[#b5712d] font-bold mt-2">{product.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
