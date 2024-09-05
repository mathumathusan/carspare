import React, { useEffect, useState } from "react";
import "./Home.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import axios from "axios";
import Swal from "sweetalert2"; // Import SweetAlert2

function Home() {
  const [carParts, setCarParts] = useState([]);
  const [cart, setCart] = useState([]); // State to manage cart items

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
  }, []); // Add empty dependency array to run this only once

  const handleAddToCart = (part) => {
    // Check if the item is already in the cart
    const existingItem = cart.find((item) => item.id === part.id);

    if (existingItem) {
      // If item is already in the cart, update the quantity
      setCart(
        cart.map((item) =>
          item.id === part.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // If item is not in the cart, add it with quantity 1
      setCart([...cart, { ...part, quantity: 1 }]);
    }
  };

  const handlePlaceOrder = async () => {
    try {
      const { value: formValues } = await Swal.fire({
        title: "Place Your Order",
        html:
          '<input id="swal-input1" class="swal2-input" placeholder="Enter your name">' +
          '<input id="swal-input2" class="swal2-input" placeholder="Enter your address">',
        focusConfirm: false,
        preConfirm: () => {
          const customer_name = document.getElementById('swal-input1').value;
          const customer_address = document.getElementById('swal-input2').value;
          
          if (!customer_name || !customer_address) {
            Swal.showValidationMessage("Name and address are required");
            return false;
          }
          return [customer_name, customer_address];
        }
      });
  
      if (formValues) {
        const [customer_name, customer_address] = formValues;
  
        // Calculate total price of all items in the cart
        let totalOrderPrice = 0;
        cart.forEach(item => {
          totalOrderPrice += item.price * item.quantity;
        });
  
        // Prepare the orders for each cart item
        for (const item of cart) {
          const total_price = item.price * item.quantity; // Multiply price by quantity
  
          await axios.post("http://localhost:3000/api/orders", {
            car_part_id: item.id,
            quantity: item.quantity,
            total_price,  // Use the updated total price
            customer_name,
            customer_address,
          });
        }
  
        // Show success message with the total order price
        Swal.fire(
          "Success!",
          `Order placed successfully! Total amount: $${totalOrderPrice.toFixed(2)}`,
          "success"
        );
        setCart([]); // Clear the cart after placing order
      }
    } catch (error) {
      console.error("Error placing order:", error);
      Swal.fire("Error", "There was an error placing your order.", "error");
    }
  };
  

  return (
    <>
      <NavBar />
      <div className="home-container">
        {carParts.map((part, index) => (
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
            <button
              className="add-to-cart-btn"
              onClick={() => handleAddToCart(part)}
            >
              Add to Cart
            </button>
          </div>
        ))}

        {/* Display Cart Items */}
        {/* Display Cart Items */}
        {cart.length > 0 && (
          <div className="cart-container">
            <h2>Your Cart</h2>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  <span>
                    {item.name} (x{item.quantity})
                  </span>
                  <span>Total: ${item.price * item.quantity}</span>
                </li>
              ))}
            </ul>
            <button className="place-order-btn" onClick={handlePlaceOrder}>
              Place Order
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Home;
