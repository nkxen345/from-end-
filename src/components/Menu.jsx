import React from "react";

function Menu({ menuItems, kategori, setKategori, pesanan, tambahPesanan }) {
  const filteredMenu = kategori === "Semua" ? menuItems : menuItems.filter(item => item.kategori === kategori);

  return (
    <div style={{ padding: "0 20px" }}>
      <div className="kategori-buttons" style={{ marginBottom: 20 }}>
        {["Semua", "Makanan", "Minuman"].map((kat) => (
          <button 
            key={kat} 
            onClick={() => setKategori(kat)} 
            style={{
              marginRight: 10,
              backgroundColor: kategori === kat ? "#007bff" : "#f0f0f0",
              color: kategori === kat ? "#fff" : "#000",
              padding: "6px 12px",
              borderRadius: 6,
              border: "none",
              cursor: "pointer"
            }}
          >
            {kat}
          </button>
        ))}
      </div>

      <div className="menu" style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
        {filteredMenu.map((item) => (
          <div key={item.id} className="menu-card" style={{ width: 200, border: "1px solid #ccc", borderRadius: 8, padding: 12 }}>
            <img src={item.gambar} alt={item.nama} style={{ width: "100%", height: 100, objectFit: "cover", borderRadius: 8, marginBottom: 8 }} />
            <h3>{item.nama}</h3>
            <p>Rp {item.harga.toLocaleString()}</p>
            <button onClick={() => tambahPesanan(item)} style={{ marginTop: 8, backgroundColor: "green", color: "white", padding: "6px 12px", borderRadius: 6, border: "none" }}>
              Pesan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
