import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context";

    const products = [
      {
          id: 1,
          name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          price: 109.95,
          description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
          category: "men's clothing",
          image: "https://images.pexels.com/photos/18842665/pexels-photo-18842665/free-photo-of-back-view-of-person-hiking-with-backpack.jpeg",
          rating: 4.4,
      },
      {
          id: 2,
          name: "Mens Casual Premium Slim Fit T-Shirts",
          price: 22.3,
          description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, lightweight & soft fabric for breathable wearing.",
          category: "men's clothing",
          image: "https://images.pexels.com/photos/5065177/pexels-photo-5065177.jpeg",
          rating: 4.4,
      },
      {
          id: 3,
          name: "Mens Cotton Jacket",
          price: 55.99,
          description: "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions.",
          category: "men's clothing",
          image: "https://images.pexels.com/photos/6764033/pexels-photo-6764033.jpeg",
          rating: 4.4,
      },
      {
          id: 4,
          name: "Mens Casual Slim Fit",
          price: 15.99,
          description: "The color could be slightly different between on the screen and in practice.",
          category: "men's clothing",
          image: "https://images.pexels.com/photos/6009034/pexels-photo-6009034.jpeg",
          rating: 4.4,
      },
      {
          id: 5,
          name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
          price: 695,
          description: "From our Legends Collection, the Naga was inspired by the mythical water dragon.",
          category: "jewelery",
          image: "https://images.pexels.com/photos/29844064/pexels-photo-29844064/free-photo-of-elegant-woman-in-traditional-ao-dai-in-hanoi.jpeg",
          rating: 4.4,
      },
      {
          id: 6,
          name: "Solid Gold Petite Micropave ",
          price: 168,
          description: "Satisfaction Guaranteed. Return or exchange any order within 30 days.",
          category: "jewelery",
          image: "https://images.pexels.com/photos/29819600/pexels-photo-29819600/free-photo-of-elegant-woman-in-traditional-sari-on-bridge.jpeg",
          rating: 4.4,
      },
      {
          id: 7,
          name: "White Gold Plated Princess",
          price: 9.99,
          description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring.",
          category: "jewelery",
          image: "https://images.pexels.com/photos/17124943/pexels-photo-17124943/free-photo-of-tray-with-coffee-and-water-in-woman-hands.jpeg",
          rating: 4.4,
      },
      {
          id: 8,
          name: "Pierced Owl Rose Gold Plated Stainless Steel Double",
          price: 10.99,
          description: "Rose Gold Plated Double Flared Tunnel Plug Earrings.",
          category: "jewelery",
          image: "https://images.pexels.com/photos/4793243/pexels-photo-4793243.jpeg",
          rating: 4.4,
      },
      {
          id: 9,
          name: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
          price: 64,
          description: "Fast data transfers, improved PC performance, and high capacity.",
          category: "electronics",
          image: "https://images.pexels.com/photos/17511215/pexels-photo-17511215/free-photo-of-little-redhead-boy-uses-a-smartphone-sitting-in-his-room-at-home.jpeg",
          rating: 4.4,
      },
      {
          id: 10,
          name: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
          price: 109,
          description: "Easy upgrade for faster boot up, shutdown, and app load.",
          category: "electronics",
          image: "https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg",
          rating: 4.4,
      },
      {
          id: 11,
          name: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache",
          price: 109,
          description: "3D NAND flash technology provides higher storage density.",
          category: "electronics",
          image: "https://images.pexels.com/photos/29850905/pexels-photo-29850905/free-photo-of-young-man-lifting-weights-in-gym-with-headphones.jpeg",
          rating: 4.4,
      },
      {
          id: 12,
          name: "WD 4TB Gaming Drive Works with Playstation 4",
          price: 114,
          description: "Expand your PS4 gaming experience, play anywhere.",
          category: "electronics",
          image: "https://images.pexels.com/photos/7855655/pexels-photo-7855655.jpeg",
          rating: 4.4,
      },
      {
          id: 13,
          name: "Acer SB220Q bi 21.5 inches Full HD",
          price: 599,
          description: "21. 5 inches Full HD (1920 x 1080) widescreen monitor.",
          category: "electronics",
          image: "https://images.pexels.com/photos/16484265/pexels-photo-16484265/free-photo-of-a-woman-in-a-blue-jacket-standing-near-a-tree.jpeg",
        rating: 4.4,
      },
      {
          id: 14,
          name: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor",
          price: 999.99,
          description: "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR.",
          category: "electronics",
          image: "https://images.pexels.com/photos/7047302/pexels-photo-7047302.jpeg",
          rating: 4.4,
      },
      {
          id: 15,
          name: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket",
          price: 56.99,
          description: "Material: 100% Polyester; Detachable Liner Insulated.",
          category: "women's clothing",
          image: "https://images.pexels.com/photos/6699264/pexels-photo-6699264.jpeg",
          rating: 4.4,
      },
      {
          id: 16,
          name: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
          price: 29.95,
          description: "100% POLYURETHANE (shell) 100% POLYESTER (lining).",
          category: "women's clothing",
          image: "https://images.pexels.com/photos/11696378/pexels-photo-11696378.jpeg",
          rating: 4.4,
      }
    ];

function ProductWear() {
  const {addToCart,setAddToCart, setProduct} = useContext(AuthContext)




    const addHandler = (product) => {
      const exist = addToCart.find((item) => item.id === product.id);

      if (!exist) {
        setAddToCart([...addToCart, product]);
      }
    };
    const productHandler = (item) => {
      setProduct(item)
    };

  return (
    <>
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-6">
            {`Women's Clothing`}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 container">
            {products.map((item) => (
              <div
                data-aos="fade-up"
                key={item.id}
                className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden relative"
              >
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
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-red-500 font-bold">
                    ${item.price.toFixed(2)}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center mt-2">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <svg
                        key={index}
                        className={`w-5 h-5 ${
                          index < item.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.357 4.208a1 1 0 00.95.69h4.42c.969 0 1.371 1.24.588 1.81l-3.584 2.597a1 1 0 00-.364 1.118l1.357 4.208c.3.921-.755 1.688-1.539 1.118l-3.584-2.597a1 1 0 00-1.176 0L5.98 17.688c-.784.57-1.838-.197-1.539-1.118l1.357-4.208a1 1 0 00-.364-1.118L1.85 9.635c-.783-.57-.381-1.81.588-1.81h4.42a1 1 0 00.95-.69l1.357-4.208z" />
                      </svg>
                    ))}
                  </div>

                  {/* Add to Cart Button */}
                  <div className="flex flex-row justify-between items-center">
                    <button
                      onClick={() => addHandler(item)}
                      className={` px-3 rounded-md py-2 text-center text-white transition-opacity duration-300 ${
                        addToCart.find((items) => items.id === item.id)
                          ? "bg-rose-500"
                          : "bg-black"
                      }`}
                    >
                      {addToCart.find((items) => items.id === item.id)
                        ? "Already Added"
                        : "Add To Cart"}
                    </button>
                    <Link
                      to={`/Products/${item.id}`}
                      onClick={() => productHandler(item)}
                      className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 flex items-center justify-center space-x-2"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductWear
