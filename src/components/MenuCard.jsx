import React, { useState } from 'react';
import PlusMinus from './PlusMinus';

export default function MenuCard({ menuData, onAddToCart }) {
  const [count, setCount] = useState(1);

  const price = menuData.price.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(menuData, count);
    }
  };

  return (
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl relative">
      <button
        className="absolute right-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-700"
        aria-label="Wishlist"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312
              2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>

      <img
        src={menuData.image}
        alt={menuData.name}
        className="h-80 w-72 object-cover rounded-t-xl"
      />
      <p className="text-xl font-bold text-gray-900 mt-4">{menuData.name}</p>
      <p className="text-gray-500 text-sm mt-2 p-2">{menuData.description}</p>
      <p className={`text-gray-900 font-bold text-lg ${menuData.soldOut ? "sold-out" : ""}`}>
        {menuData.soldOut ? "SOLD OUT" : price}
      </p>

      <PlusMinus data={count} max="10" setData={setCount} id={menuData.id} />

      <button
        onClick={handleAddToCart}
        disabled={menuData.soldOut}
        className="block w-full rounded-sm bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Add to Cart
      </button>
    </div>
  );
}
