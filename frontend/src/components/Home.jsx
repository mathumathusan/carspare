import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";

function Home({ cart, setCart }) {
  const [carParts, setCarParts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/carparts");
        setCarParts(response.data);
      } catch (error) {
        console.error("Error fetching car parts:", error);
      }
    };

    getData();
  }, []);

  const handleAddToCart = (part) => {
    const existingItem = cart.find((item) => item.id === part.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === part.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...part, quantity: 1 }]);
    }
  };

  return (
    <div className="home-container">
      {carParts.map((part, index) => {
        const cartItem = cart.find((item) => item.id === part.id);
        return (
          <div className="car-part-card" key={index}>
            <img
              src={part.image_url}
              alt={part.name}
              className="car-part-image"
            />
            <h3 className="car-part-name">{part.name}</h3>
            <p className="car-part-brand">Brand: {part.brand}</p>
            <p className="car-part-model">Model: {part.model}</p>
            <p className="car-part-year">Year: {part.year}</p>
            <p className="car-part-price">Price: ${part.price}</p>

            {/* {cartItem ? (
              <p>Quantity: {cartItem.quantity}</p>
            ) : (
              <p>Quantity: 0</p> yttyuiop[]op[]\6-098Q23
            )} */}

            <button
              className="add-to-cart-btn"
              onClick={() => handleAddToCart(part)}
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
