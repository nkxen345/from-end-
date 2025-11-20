import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import AboutUs from "./components/AboutUs";
import Testimoni from "./components/Testimoni";

const menuList = [
  { id: 1, nama: "Nasi Goreng", harga: 20000, gambar: "/images/nasi-goreng.jpg", kategori: "Makanan" },
  { id: 2, nama: "Mie Ayam", harga: 15000, gambar: "/images/Mie-ayam.jpg", kategori: "Makanan" },
  { id: 3, nama: "Sate Ayam", harga: 25000, gambar: "/images/Sate-ayam.jpg", kategori: "Makanan" },
  { id: 4, nama: "Gado-gado", harga: 15000, gambar: "/images/Gado-gado.jpg", kategori: "Makanan" },
  { id: 5, nama: "Es Teh Manis", harga: 5000, gambar: "/images/esteh.jpg", kategori: "Minuman" },
  { id: 6, nama: "Jus Alpukat", harga: 10000, gambar: "/images/jus-alpukat.jpg", kategori: "Minuman" }
];
const hitungTotal = (list) => list.reduce((t, i) => t + i.harga * i.qty, 0);

function App() {
  const [halaman, setHalaman] = useState("home");
  const [pesanan, setPesanan] = useState([]);
  const [rincianTerakhir, setRincianTerakhir] = useState(null);
  const [kategori, setKategori] = useState("Semua");
  const [pembeli, setPembeli] = useState({ nama: "", email: "", tipe: "dinein" });
  const [showCart, setShowCart] = useState(false);

  const tambahPesanan = (item) => {
    setPesanan(prev => {
      const idx = prev.findIndex(p => p.id === item.id);
      return idx !== -1 ? prev.map((p, i) => i === idx ? { ...p, qty: p.qty + 1 } : p) : [...prev, { ...item, qty: 1 }];
    });
  };
  const ubahQty = (id, val) => setPesanan(prev => prev.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty + val) } : i));
  const hapusItem = (id) => setPesanan(prev => prev.filter(i => i.id !== id));

  const checkout = () => {
    if (!pesanan.length) return alert("Pesanan masih kosong!");
    if (!pembeli.nama) return alert("Nama pembeli wajib diisi!");
    setRincianTerakhir({ daftarPesanan: pesanan, pembeli });
    setPesanan([]); setPembeli({ nama: "", email: "", tipe: "dinein" });
    setHalaman("pesanan"); setShowCart(false);
  };

  return (
    <div className="app">
      <div className="navbar" style={{ display: "flex", gap: 10, padding: 10, background: "#c4dbce" }}>
        {["home", "menu", "pesanan", "about", "testimoni"].map(p => (
          <button key={p} onClick={() => setHalaman(p)}>{p[0].toUpperCase() + p.slice(1)}</button>
        ))}
        <div style={{ marginLeft: "auto", position: "relative" }} onClick={() => setShowCart(!showCart)}>
          🛒{pesanan.length > 0 && <span style={{
            position: "absolute", top: -5, right: -10, background: "red", color: "white",
            borderRadius: "50%", padding: "2px 6px", fontSize: 12
          }}>{pesanan.length}</span>}
        </div>

        {showCart && (
          <div style={{
            position: "absolute", top: 50, right: 10, background: "white", padding: 10,
            border: "1px solid #ccc", borderRadius: 8, width: 300, zIndex: 100, color: "black"
          }}>
            {!pesanan.length ? <p>Keranjang kosong</p> : <>
              <h4>Pesanan Anda:</h4>
              <ul>{pesanan.map(i => (
                <li key={i.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                  <span>{i.nama} x {i.qty}</span>
                  <div style={{ display: "flex", gap: 4 }}>
                    <button onClick={() => ubahQty(i.id, -1)}>-</button>
                    <button onClick={() => ubahQty(i.id, 1)}>+</button>
                    <button onClick={() => hapusItem(i.id)} style={{ color: "red" }}>Hapus</button>
                  </div>
                </li>
              ))}</ul>
              <p><b>Total:</b> Rp {hitungTotal(pesanan).toLocaleString()}</p>
              <h4>Data Pembeli:</h4>
              <input placeholder="Nama" value={pembeli.nama} onChange={e => setPembeli({ ...pembeli, nama: e.target.value })} style={{ width: "100%", marginBottom: 5 }} />
              <input placeholder="Email" value={pembeli.email} onChange={e => setPembeli({ ...pembeli, email: e.target.value })} style={{ width: "100%", marginBottom: 5 }} />
              <select value={pembeli.tipe} onChange={e => setPembeli({ ...pembeli, tipe: e.target.value })} style={{ width: "100%", marginBottom: 5 }}>
                <option value="dinein">Makan di sini</option>
                <option value="takeaway">Bawa pulang</option>
              </select>
              <button onClick={checkout} style={{ width: "100%", background: "green", color: "white", padding: 6, border: "none", borderRadius: 6 }}>Checkout</button>
            </>}
          </div>
        )}
      </div>

      {halaman === "home" && <div className="home"><h1>Selamat Datang di Restoran</h1><button onClick={() => setHalaman("menu")}>Lihat Menu</button></div>}
      {halaman === "menu" && <Menu {...{ menuItems: menuList, kategori, setKategori, pesanan, tambahPesanan, ubahQty, hitungTotal, pembeli, setPembeli, checkout }} />}
      {halaman === "pesanan" && (
        <div className="pesanan">
          {rincianTerakhir ? <>
            <h3>Rincian Pesanan Terakhir</h3>
            <ul>{rincianTerakhir.daftarPesanan.map(p => <li key={p.id}>{p.nama} x {p.qty} - Rp {(p.harga * p.qty).toLocaleString()}</li>)}</ul>
            <p><b>Total:</b> Rp {hitungTotal(rincianTerakhir.daftarPesanan).toLocaleString()}</p>
            <h4>Data Pembeli:</h4>
            <p>Nama: {rincianTerakhir.pembeli.nama}</p>
            {rincianTerakhir.pembeli.email && <p>Email: {rincianTerakhir.pembeli.email}</p>}
            <p>Tipe: {rincianTerakhir.pembeli.tipe === "dinein" ? "Makan di sini" : "Bawa pulang"}</p>
            <button onClick={() => setRincianTerakhir(null)} style={{ marginTop: 10, background: "red", color: "white", padding: "6px 12px", border: "none", borderRadius: 6 }}>Hapus Semua Pesanan</button>
          </> : <p>Silahkan pesan dulu :)</p>}
        </div>
      )}
      {halaman === "about" && <AboutUs />}
      {halaman === "testimoni" && <Testimoni />}
    </div>
  );
}
export default App;
