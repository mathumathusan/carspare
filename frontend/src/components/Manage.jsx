import React, { useState } from "react";
import "./Manage.css";
import NavBar from "./NavBar";
import axios from "axios";
import Footer from "./Footer";

function Manage() {
  const [carPart, setCarPart] = useState({
    name: "",
    brand: "",
    model: "",
    year: "",
    price: "",
    stock: "",
    image_url: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarPart({
      ...carPart,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/carparts",
        carPart
      );
      console.log("Data submitted successfully:", response.data);
    } catch (error) {
      console.error("There was an error submitting the data!", error);
    }
  };

  return (
    <>
     
      <form className="car-part-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={carPart.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={carPart.brand}
          onChange={handleChange}
        />
        <input
          type="text"
          name="model"
          placeholder="Model"
          value={carPart.model}
          onChange={handleChange}
        />
        <input
          type="number"
          name="year"
          placeholder="Year"
          value={carPart.year}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={carPart.price}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={carPart.stock}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image_url"
          placeholder="Image URL"
          value={carPart.image_url}
          onChange={handleChange}
        />
        <button type="submit"> Car Part</button>
      </form>
    </>
  );
}

export default Manage;
