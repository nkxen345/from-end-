import React from "react";

function Pesanan({ pesanan, tambahQty, kurangQty }) {
  return (
    <div>
      <h3 className="font-bold mb-2">Pesanan Anda</h3>
      {pesanan.map(item => (
        <div key={item.id} className="flex justify-between mb-2">
          <span>{item.nama} x {item.qty}</span>
          <div className="flex gap-1">
            <button onClick={() => kurangQty(item.id)} className="px-2 bg-gray-200 rounded">-</button>
            <button onClick={() => tambahQty(item.id)} className="px-2 bg-gray-200 rounded">+</button>
          </div>
        </div>
      ))}
      <p className="font-bold mt-2">
        Total: Rp {pesanan.reduce((acc, cur) => acc + cur.harga * cur.qty, 0).toLocaleString()}
      </p>
    </div>
  );
}

export default Pesanan;
