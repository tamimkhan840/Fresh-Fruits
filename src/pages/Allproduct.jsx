import { useState } from "react";

const womenClothing = [
    {
        id: 1,
        name: "Silk Saree",
        price: 1200.99,
        rating: 4.5,
        color: "Red",
        image: "https://www.mysoresareeudyog.com/media/wysiwyg/art_silk_1.PNG",
    },
    {
        id: 2,
        name: "Cotton Kurti",
        price: 750.5,
        rating: 4.2,
        color: "White",
        image: "https://s.alicdn.com/@sc04/kf/H6b35ccd35ba24bb3aa3fd013adcd421dw.jpg",
    },
    {
        id: 3,
        name: "Georgette Lehenga",
        price: 4599.99,
        rating: 4.8,
        color: "Pink",
        image: "https://glamourental.com/cdn/shop/files/Stunning_Cream_Georgette_Lehenga_Choli_with_Intricate_Sequins_-_Rent.jpg",
    },
    {
        id: 4,
        name: "Anarkali Suit",
        price: 2200.0,
        rating: 4.6,
        color: "Blue",
        image: "https://www.inddus.com/cdn/shop/products/pink-net-partywear-anarkali-suit-478503.jpg",
    },
    {
        id: 5,
        name: "Chiffon Dupatta",
        price: 450.49,
        rating: 4.1,
        color: "Yellow",
        image: "https://www.kayseria.com/cdn/shop/files/GTX5695-73-_1.jpg",
    },
    {
        id: 6,
        name: "Denim Jacket",
        price: 1599.89,
        rating: 4.3,
        color: "Dark Blue",
        image: "https://shopaudaciousboutique.com/cdn/shop/files/IMG_6165_1_2048x.jpg",
    },
    {
        id: 7,
        name: "Embroidered Blouse",
        price: 999.99,
        rating: 4.7,
        color: "Golden",
        image: "https://i.ebayimg.com/images/g/AOMAAOSwuEheUd88/s-l1600.webp",
    },
    {
        id: 8,
        name: "Party Gown",
        price: 3200.0,
        rating: 4.9,
        color: "Maroon",
        image: "https://www.kayseria.com/cdn/shop/files/GTX5695-73-_1.jpg",
    },
    {
        id: 9,
        name: "Silk Dupatta",
        price: 899.5,
        rating: 4.2,
        color: "Green",
        image: "https://images.pexels.com/photos/28831537/pexels-photo-28831537/free-photo-of-elegant-eastern-bridal-fashion-portrait.jpeg",
    },
    {
        id: 10,
        name: "Printed Maxi Dress",
        price: 1400.99,
        rating: 4.4,
        color: "Floral",
        image: "https://images.pexels.com/photos/11556942/pexels-photo-11556942.jpeg",
    },
];


function Allproduct() {
    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = (id) => {
        setFavorites((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    const handleAddToCart = (item) => {
        alert(`"${item.name}" added to cart!`);
    };



  return (

    <>
    <section className="py-8 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-center mb-6">
                    {`Women's Clothing`}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
                    {womenClothing.map((item) => (
                        <div
                        data-aos="fade-up"
                        data-aos-delay={item.aosDelay}
                        key={item.id}
                        className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden relative"
                      >
                        {/* Favorite Icon */}
                        <button
                          className={`absolute top-2 right-2 p-2 rounded-full ${
                            favorites.includes(item.id)
                              ? "bg-red-500 text-white"
                              : "bg-gray-200 text-gray-500"
                          }`}
                          onClick={() => toggleFavorite(item.id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            width="20"
                            height="20"
                          >
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                        </button>

                        {/* Image Section */}
                        <div className="overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-48 object-cover transform hover:scale-110 transition duration-300"
                          />
                        </div>

                        {/* Product Details */}
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                          <p className="text-red-500 font-bold">${item.price.toFixed(2)}</p>

                          {/* Rating */}
                          <div className="flex items-center mt-2">
                            {Array.from({ length: 5 }).map((_, index) => (
                              <svg
                                key={index}
                                className={`w-5 h-5 ${
                                  index < item.rating ? "text-yellow-400" : "text-gray-300"
                                }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.357 4.208a1 1 0 00.95.69h4.42c.969 0 1.371 1.24.588 1.81l-3.584 2.597a1 1 0 00-.364 1.118l1.357 4.208c.3.921-.755 1.688-1.539 1.118l-3.584-2.597a1 1 0 00-1.176 0L5.98 17.688c-.784.57-1.838-.197-1.539-1.118l1.357-4.208a1 1 0 00-.364-1.118L1.85 9.635c-.783-.57-.381-1.81.588-1.81h4.42a1 1 0 00.95-.69l1.357-4.208z" />
                              </svg>
                            ))}
                          </div>

                          {/* Add to Cart Button */}
                          <button
                            onClick={() => handleAddToCart(item)}
                            className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 flex items-center justify-center space-x-2"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 3h2l.401 2m2.598 9h9.005M16 13.5A2.5 2.5 0 1 1 18.5 16 2.5 2.5 0 0 1 16 13.5ZM7 13.5A2.5 2.5 0 1 1 9.5 16 2.5 2.5 0 0 1 7 13.5ZM7.401 6h10.346a1 1 0 0 1 .956.742L21 11H6.374"
                              />
                            </svg>
                            <span>Add to Cart</span>
                          </button>
                        </div>
                      </div>


                    ))}
                </div>
            </div>
        </section>

    </>
  )
}

export default Allproduct;
