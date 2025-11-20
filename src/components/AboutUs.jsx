function AboutUs() {
  return (
    <div
      className="about-us"
      style={{
        maxWidth: 800,
        margin: "40px auto",
        padding: "20px",
        backgroundColor: "#c27637ff",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
        lineHeight: 1.6,
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#d32f2f",
          marginBottom: "20px",
        }}
      >
        Tentang Kami
      </h1>

      <p style={{ fontSize: "16px", textAlign: "justify", marginBottom: "16px" }}>
        Restoran kami berdiri sejak <strong>2023</strong> dengan tujuan menghadirkan 
        makanan dan minuman terbaik untuk pelanggan. Semua bahan yang kami gunakan 
        adalah pilihan berkualitas tinggi yang diolah oleh koki berpengalaman.
      </p>

      <p style={{ fontSize: "16px", textAlign: "justify", marginBottom: "16px" }}>
        Kami berkomitmen memberikan pelayanan yang ramah, cepat, dan tentunya rasa 
        yang selalu bikin kangen. Kepuasan pelanggan adalah prioritas utama kami.
      </p>

      <div
        style={{
          marginTop: "30px",
          padding: "15px",
          backgroundColor: "#ee2b15ff",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#bf360c", marginBottom: "10px" }}>Visi & Misi</h2>
        <p style={{ fontSize: "15px" }}>
          Menjadi restoran pilihan utama masyarakat dengan selalu menghadirkan 
          pengalaman makan terbaik melalui cita rasa autentik dan pelayanan istimewa.
        </p>
      </div>

      <div
        style={{
          marginTop: "30px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#1976d2", marginBottom: "10px" }}>Kontak Kami</h2>
        <p>
          📍 Jl. Makanan Enak No. 123, Pluto  
          📞 08xx-xxxx-xxxx  
          ✉️ resto@enak.com
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
