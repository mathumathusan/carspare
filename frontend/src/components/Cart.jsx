import React from "react";
import Swal from "sweetalert2";
import axios from "axios";

function Cart({ cart, setCart }) {
  const handlePlaceOrder = async () => {
    try {
      const { value: formValues } = await Swal.fire({
        title: "Place Your Order",
        html:
          '<input id="swal-input1" class="swal2-input" placeholder="Enter your name">' +
          '<input id="swal-input2" class="swal2-input" placeholder="Enter your address">',
        focusConfirm: false,
        showCloseButton: true,
        preConfirm: () => {
          const customer_name = document.getElementById("swal-input1").value;
          const customer_address = document.getElementById("swal-input2").value;

          if (!customer_name || !customer_address) {
            Swal.showValidationMessage("Name and address are required");
            return false;
          }
          return [customer_name, customer_address];
        },
      });

      if (formValues) {
        const [customer_name, customer_address] = formValues;

        let totalOrderPrice = 0;
        cart.forEach((item) => {
          totalOrderPrice += item.price * item.quantity;
        });

        for (const item of cart) {
          const total_price = item.price * item.quantity;

          await axios.post("http://localhost:3000/api/orders", {
            car_part_id: item.id,
            quantity: item.quantity,
            total_price,
            customer_name,
            customer_address,
          });
        }

        Swal.fire(
          "Success!",
          `Order placed successfully! Total amount: $${totalOrderPrice.toFixed(2)}`,
          "success"
        );
        setCart([]); // Clear the cart after placing order
      }
    } catch (error) {
      Swal.fire("Error", "There was an error placing your order.", "error");
    }
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <span>{item.name} (x{item.quantity})</span>
                <span>Total: ${item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <button className="place-order-btn" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
