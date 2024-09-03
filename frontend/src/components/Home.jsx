import React, { useEffect, useState } from "react";
import "./Home.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import axios from "axios";

function Home() {
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
  });

  const [carParts, setCarParts] = useState([]);

  // const carParts = [
  //     {
  //       name: 'Brake Pad',
  //       brand: 'Bosch',
  //       model: 'BMW X5',
  //       year: 2022,
  //       price: '$120',
  //       stock: 'In Stock',
  //       image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpcM35BgIKl2bz6JY8xhaOluUPxU1gGkb8Nw&s',
  //     },
  //     {
  //         name: 'Car Oil',
  //         brand: 'Bosch',
  //         model: 'BMW X5',
  //         year: 2022,
  //         price: '$120',
  //         stock: 'In Stock',
  //         image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyJkft0OuoEH83oFkTWvsnJDltK61ZCs4kSw&s',
  //       },
  //     {
  //       name: 'Air Filter',
  //       brand: 'K&N',
  //       model: 'Audi A4',
  //       year: 2021,
  //       price: '$75',
  //       stock: 'In Stock',
  //       image_url: 'https://pureflowair.com/cdn/shop/articles/122172537_209133694100720_2149545963637113533_o.jpg?v=1720450727',
  //     },
  //     {
  //         name: 'Brake Pad',
  //         brand: 'Bosch',
  //         model: 'BMW X5',
  //         year: 2022,
  //         price: '$120',
  //         stock: 'In Stock',
  //         image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpcM35BgIKl2bz6JY8xhaOluUPxU1gGkb8Nw&s',
  //       },
  //   ];

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
            <p className="car-part-price">Price: {part.price}</p>
            <p className="car-part-stock">{part.stock}</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Home;
