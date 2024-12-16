
import { MdFavoriteBorder } from "react-icons/md";


function ProductWear() {


    const products = [
        {
            "id": 1,
            "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            "price": 109.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL.AC_SL1500.jpg",
            "rating": { "rate": 3.9, "count": 120 }
        },
        {
            "id": 2,
            "title": "Mens Casual Premium Slim Fit T-Shirts",
            "price": 22.3,
            "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, lightweight & soft fabric for breathable wearing.",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/71-3HjGNDUL.AC_SY879._SX._UX._SY._UY.jpg",
            "rating": { "rate": 4.1, "count": 259 }
        },
        {
            "id": 3,
            "title": "Mens Cotton Jacket",
            "price": 55.99,
            "description": "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions.",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/71li-ujtlUL.AC_UX679.jpg",
            "rating": { "rate": 4.7, "count": 500 }
        },
        {
            "id": 4,
            "title": "Mens Casual Slim Fit",
            "price": 15.99,
            "description": "The color could be slightly different between on the screen and in practice.",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/71YXzeOuslL.AC_UY879.jpg",
            "rating": { "rate": 2.1, "count": 430 }
        },
        {
            "id": 5,
            "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
            "price": 695,
            "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon.",
            "category": "jewelery",
            "image": "https://fakestoreapi.com/img/71pWzhdJNwL.AC_UL640_QL65_ML3.jpg",
            "rating": { "rate": 4.6, "count": 400 }
        },
        {
            "id": 6,
            "title": "Solid Gold Petite Micropave ",
            "price": 168,
            "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.",
            "category": "jewelery",
            "image": "https://fakestoreapi.com/img/61sbMiUnoGL.AC_UL640_QL65_ML3.jpg",
            "rating": { "rate": 3.9, "count": 70 }
        },
        {
            "id": 7,
            "title": "White Gold Plated Princess",
            "price": 9.99,
            "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring.",
            "category": "jewelery",
            "image": "https://fakestoreapi.com/img/71YAIFU48IL.AC_UL640_QL65_ML3.jpg",
            "rating": { "rate": 3, "count": 400 }
        },
        {
            "id": 8,
            "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
            "price": 10.99,
            "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings.",
            "category": "jewelery",
            "image": "https://fakestoreapi.com/img/51UDEzMJVpL.AC_UL640_QL65_ML3.jpg",
            "rating": { "rate": 1.9, "count": 100 }
        },
        {
            "id": 9,
            "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
            "price": 64,
            "description": "Fast data transfers, improved PC performance, and high capacity.",
            "category": "electronics",
            "image": "https://fakestoreapi.com/img/61IBBVJvSDL.AC_SY879.jpg",
            "rating": { "rate": 3.3, "count": 203 }
        },
        {
            "id": 10,
            "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
            "price": 109,
            "description": "Easy upgrade for faster boot up, shutdown, and app load.",
            "category": "electronics",
            "image": "https://fakestoreapi.com/img/61U7T1koQqL.AC_SX679.jpg",
            "rating": { "rate": 2.9, "count": 470 }
        },
        {
            "id": 11,
            "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache",
            "price": 109,
            "description": "3D NAND flash technology provides higher storage density.",
            "category": "electronics",
            "image": "https://fakestoreapi.com/img/71kWymZ+jYL.AC_SX679.jpg",
            "rating": { "rate": 4.8, "count": 319 }
        },
        {
            "id": 12,
            "title": "WD 4TB Gaming Drive Works with Playstation 4",
            "price": 114,
            "description": "Expand your PS4 gaming experience, play anywhere.",
            "category": "electronics",
            "image": "https://fakestoreapi.com/img/61mtL65D4cL.AC_SX679.jpg",
            "rating": { "rate": 4.8, "count": 400 }
        },
        {
            "id": 13,
            "title": "Acer SB220Q bi 21.5 inches Full HD",
            "price": 599,
            "description": "21. 5 inches Full HD (1920 x 1080) widescreen monitor.",
            "category": "electronics",
            "image": "https://fakestoreapi.com/img/81QpkIctqPL.AC_SX679.jpg",
            "rating": { "rate": 2.9, "count": 250 }
        },
        {
            "id": 14,
            "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor",
            "price": 999.99,
            "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR.",
            "category": "electronics",
            "image": "https://fakestoreapi.com/img/81Zt42ioCgL.AC_SX679.jpg",
            "rating": { "rate": 2.2, "count": 140 }
        },
        {
            "id": 15,
            "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket",
            "price": 56.99,
            "description": "Material: 100% Polyester; Detachable Liner Insulated.",
            "category": "women's clothing",
            "image": "https://fakestoreapi.com/img/51Y5NI-I5jL.AC_UX679.jpg",
            "rating": { "rate": 2.6, "count": 235 }
        },
        {
            "id": 16,
            "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
            "price": 29.95,
            "description": "100% POLYURETHANE (shell) 100% POLYESTER (lining).",
            "category": "women's clothing",
            "image": "https://fakestoreapi.com/img/81XH0e8fefL.AC_UY879.jpg",
            "rating": { "rate": 2.9, "count": 340 }
        }
    ];


  return (
    <>
         <section className="py-8 bg-gray-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 container">
         {products.map((product) => (
          <>
                 <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                    {/* Product Image */}
                    <img
                        className="h-48 w-full object-cover"
                        src={product.image}
                        alt={product.title}
                    />

                    {/* Product Details */}
                    <div className="p-4">
                        <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
                        <p className="text-gray-600 text-sm mt-2 line-clamp-2">{product.description}</p>

                        {/* Price and Rating */}
                        <div className="flex justify-between items-center mt-3">
                        <span className="text-gray-900 font-bold text-lg">${product.price}</span>
                        <div className="flex items-center">
                            <span className="text-yellow-500 text-sm mr-1">★</span>
                            <span className="text-gray-600 text-sm">{product.rating.rate}</span>
                        </div>
                        </div>

                        {/* Buttons */}
                        <div className="mt-4 flex justify-between">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                            Add to Cart
                        </button>
                        <button

                        >
                           <MdFavoriteBorder size={25}/>
                        </button>
                        </div>
                    </div>
                    </div>
          </>
        ))}
        </section>
    </>
  )
}

export default ProductWear
