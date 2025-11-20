import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoIosContact } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import Pesanan from "./Pesanan";
import FormPembeli from "./FormPembeli";

const Navbar = ({ pesanan, pembeli, setPembeli, checkout, tambahQty, kurangQty }) => {
  const [showCart, setShowCart] = useState(false);

  return (
    <header className="flex justify-between items-center px-5 py-5 lg:px-14 md:px-10 bg-[#c4dbce] fixed w-full z-50 shadow-md">
      <div>
        <span className="text-xl font-bold text-black">FarmRoot</span>
      </div>

      <nav className="hidden md:flex flex-row gap-6 items-center">
        <a href="/" className="text-black hover:text-white font-semibold transition-colors">Home</a>
        <a href="/menu" className="text-black hover:text-white font-semibold transition-colors">Menu</a>
        <a href="/about" className="text-black hover:text-white font-semibold transition-colors">About Us</a>

        {/* Icons */}
        <div className="flex gap-4 items-center ml-8">
          <FiSearch size={24} className="text-black cursor-pointer" />
          <IoIosContact size={24} className="text-black cursor-pointer" />

          {/* Cart */}
          <div className="relative cursor-pointer" onClick={() => setShowCart(!showCart)}>
            <FaShoppingCart size={24} className="text-black" />
            {pesanan.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {pesanan.length}
              </span>
            )}
          </div>
        </div>
      </nav>

      {/* Mini Cart */}
      {showCart && (
        <div className="absolute right-5 top-16 bg-white shadow-lg rounded p-4 w-80 z-50">
          {pesanan.length === 0 ? (
            <p>Keranjang kosong</p>
          ) : (
            <>
              <Pesanan pesanan={pesanan} tambahQty={tambahQty} kurangQty={kurangQty} />
              <FormPembeli pembeli={pembeli} setPembeli={setPembeli} />
              <button
                onClick={checkout}
                className="mt-3 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
              >
                Checkout
              </button>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
