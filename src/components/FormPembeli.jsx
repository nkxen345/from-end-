import React from "react";

function FormPembeli({ pembeli, setPembeli }) {
  return (
    <div className="mt-4">
      <h3 className="font-bold mb-2">Data Pembeli</h3>
      <input 
        type="text" 
        placeholder="Nama" 
        value={pembeli.nama} 
        onChange={e => setPembeli({ ...pembeli, nama: e.target.value })}
        className="border p-2 w-full mb-2 rounded"
      />
      <input 
        type="text" 
        placeholder="Alamat" 
        value={pembeli.alamat} 
        onChange={e => setPembeli({ ...pembeli, alamat: e.target.value })}
        className="border p-2 w-full mb-2 rounded"
      />
    </div>
  );
}

export default FormPembeli;
