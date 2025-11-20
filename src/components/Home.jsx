import React from "react";
import "./App.css";

function Home() {
  return (
    <div className="home">
      <div className="home-content fade-in">
        <h1 className="home-title">Selamat Datang di Restoran Makanan</h1>
        <p className="home-subtitle">
          Nikmati hidangan spesial dengan cita rasa terbaik, hanya untuk Anda
        </p>
        <button className="btn-menu">Lihat Menu</button>
      </div>
    </div>
  );
}

export default Home;
