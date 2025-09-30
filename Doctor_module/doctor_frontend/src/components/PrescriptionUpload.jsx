import React, { useState } from "react";

const PrescriptionUpload = () => {
  const [file, setFile] = useState(null); // Store selected prescription file

  const handleUpload = (e) => {
    e.preventDefault();
    console.log("Prescription uploaded:", file);
    // TODO: API call to backend (POST /doctor/upload-prescription)
  };

  return (
    <form onSubmit={handleUpload} className="p-4 bg-white shadow-md w-96 mx-auto mt-10 rounded">
      <h2 className="text-xl font-bold mb-4">Upload Prescription</h2>

      {/* File input */}
      <input type="file" accept=".pdf,.jpg,.png" onChange={(e) => setFile(e.target.files[0])} className="mb-2"/>

      {/* Upload button */}
      <button type="submit" className="bg-purple-600 text-white p-2 rounded w-full">Upload</button>
    </form>
  );
};

export default PrescriptionUpload;
