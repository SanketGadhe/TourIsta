import React, { useState } from "react";
import QRCode from "qrcode.react";
// import htmlToImage from 'html-to-image';
import html2canvas from "html2canvas";
import { useOutletContext } from "react-router-dom";
const Admin = () => {
  
const [placesData, setplacesData] = useState({})
  // State to store form data
  const [formData, setFormData] = useState({
    placeName: "",
    briefHistory: "",
    image: null,
  });

  const [qrCodeData, setqrCodeData] = useState("");
 

  const handleSubmit = (e) => {
    e.preventDefault();
    const { placeName, briefHistory, image } = formData;

    setplacesData({
      ...placesData,
      [placeName]: [briefHistory, URL.createObjectURL(image)],
    });
    setqrCodeData(placeName);
    // setFormData({
    //   placeName: "",
    //   briefHistory: "",
    //   image: null,
    // });
    console.log(placesData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
  };
  const handleDownload = () => {
    var container = document.getElementById("QRCODE"); /* full page */
    html2canvas(container, { allowTaint: true }).then(function (canvas) {
      var link = document.createElement("a");
      document.body.appendChild(link);
      link.download = `${formData.placeName}.jpg`;
      link.href = canvas.toDataURL();
      link.target = "_blank";
      link.click();
    });
  };
  return (
    <div className="  mt-10 flex gap-9 w-[100vw] justify-center">
      <div className="formfill ">
      <h1 className="text-3xl font-semibold mb-6">Add New Place</h1>
      <form onSubmit={handleSubmit} className="">
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="placeName"
          >
            Place Name:
          </label>
          <input
            type="text"
            id="placeName"
            name="placeName"
            value={formData.placeName}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter place name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="briefHistory"
          >
            Brief History:
          </label>
          <textarea
            id="briefHistory"
            name="briefHistory"
            value={formData.briefHistory}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="4"
            placeholder="Enter brief history"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="image"
          >
            Image Upload:
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
      </div>
      <div className="QRside bg-[#292929] text-white">
      {qrCodeData && (
        <div className="wholeQr  text-center  flex justify-center" >
            <div className="maimqrcode">
          <div className="mt-8 text-center p-5 bg-[#292929]" id="QRCODE">
            <h2 className="text-2xl font-semibold mb-4">
              Explore with a Scan!
            </h2>
            <p className="text-lg my-4">Unlock the Mystery</p>

            <div className="mx-auto  w-52 h-52 bg-white border border-gray-300 rounded-lg shadow-lg p-4 flex flex-col justify-center items-center">
              <QRCode value={qrCodeData} size={180} />
            </div>

            <p className="text-sm text-gray-600 mt-2">
              Scan the QR code to discover the secrets of this enchanting place.
            </p>
          </div>
          <button
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleDownload}
            >
            Download QR Code
          </button>
            </div>
        </div>
      )}</div>
      {/* Display dictionary content for testing */}
      {/* <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Check Place Data Once</h2>
        <ul>
          {Object.entries(props.placesData).map(([placeName, data]) => (
            <li key={placeName} className="mb-4">
              <h3 className="text-xl font-semibold">{placeName}</h3>
              <p>{data[0]}</p>
              <img src={data[1]} alt={placeName} className="mt-2 max-w-xs" />
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default Admin;
