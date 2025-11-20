import React from "react";

export default function Testimoni() {
  const testimoniList = [
    {
      nama: "Naruto",
      pesan: "Pelayanan cepat dan makanannya lezat banget!",
      foto: "/images/img1.jpg",
    },
    {
      nama: "Ichigo",
      pesan: "Tempatnya nyaman dan estetik, cocok buat nongkrong.",
      foto: "/images/img2.jpg",
    },
    {
      nama: "Kaito",
      pesan: "Harga terjangkau tapi kualitas premium!",
      foto: "/images/img3.jpg",
    }
  ];

  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: "#fef3c7",
        minHeight: "100vh",
        textAlign: "center"
      }}
    >
      <h2 style={{ color: "#b45309", marginBottom: "20px" }}>💬 Testimoni Pelanggan</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "25px"
        }}
      >
        {testimoniList.map((t, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "#fff",
              borderRadius: "15px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              width: "250px",
              padding: "20px",
              textAlign: "center",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={t.foto}
              alt={t.nama}
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "10px"
              }}
            />
            <h4 style={{ margin: "10px 0", color: "#92400e" }}>{t.nama}</h4>
            <p style={{ fontStyle: "italic", color: "#6b7280" }}>"{t.pesan}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}
