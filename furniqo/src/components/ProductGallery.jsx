import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const filteredProducts = products.filter(
    (product) => product.category === activeCategory
  );

  const openPopup = (product) => {
    setSelectedProduct(product);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedProduct(null);
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closePopup();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <motion.section
      className="py-20 bg-[#f9f9f9]"
      id="shop"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-[42px] font-medium text-[#1e1e1e] mb-8"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Furniture
        </motion.h2>

        {/* Category Bar */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex bg-[#f3f3f3] rounded-full px-2 py-1 gap-2">
            {categories.map((cat) => (
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.03 }}
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`capitalize px-5 py-2 rounded-full text-[14px] font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-white shadow text-[#1e1e1e]"
                    : "text-[#6F6F6F] hover:text-[#1e1e1e]"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, delay: index * 0.07 },
                },
              }}
              whileHover={{ scale: 1.05 }}
              className="bg-white border rounded-2xl shadow transition p-4 cursor-pointer"
              onClick={() => openPopup(product)}
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
        </motion.div>
      </div>

      {/* Product Popup */}
      <AnimatePresence>
        {showPopup && selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-lg max-w-md text-left relative"
            >
              <button
                className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
                onClick={closePopup}
              >
                &times;
              </button>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-60 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold text-[#1e1e1e] mb-2">
                {selectedProduct.name}
              </h3>
              <p className="text-sm text-[#6F6F6F] mb-2">{selectedProduct.category}</p>
              <p className="text-[#b5712d] font-bold">{selectedProduct.price}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default ProductGallery;
