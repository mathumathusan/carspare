import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const [carParts, setCarParts] = useState([]);

  // Fetch car parts data from the backend
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/carparts")
      .then((response) => {
        setCarParts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the car parts!", error);
      });
  }, []);

  // Handle edit button click
  const handleEdit = (id) => {
    console.log(`Edit car part with ID: ${id}`);
    // Navigate to edit page or open modal with form
  };

  
  const handleDelete = (id) => {
    console.log(`Delete car part with ID: ${id}`);

    axios
      .delete(`http://localhost:3000/api/carpart/1`)
      .then((res) => {console.log(res);})
      .catch((err) => console.error(err));
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/"}>About</Link>
          </li>
          <li>
            <Link to={"/manage"}>Manage</Link>
          </li>
          <li>
            <Link to={"/services"}>Services</Link>
          </li>
          <li>
            <Link to={"/"}>Contact</Link>
          </li>
        </ul>
      </aside>
      <div className="main-content">
        <header className="header">
          <h1>Welcome to Your Dashboard</h1>
        </header>
        <div className="content">
          <Link to={"/manage"} className="card_link">
            <section className="card">
              <h3>Manage Products</h3>
              <p>Admin can able to add the products</p>
            </section>
          </Link>
          <Link to={"/services"} className="card_link">
            <section className="card">
              <h3>Car Products</h3>
              <p>Admin can able to see parts</p>
            </section>
          </Link>
          <Link to={"/services"} className="card_link">
            <section className="card">
              <h3>Car Products</h3>
              <p>Admin can able to see parts</p>
            </section>
          </Link>
          <Link to={"/services"} className="card_link">
            <section className="card">
              <h3>Car Products</h3>
              <p>Admin can able to see parts</p>
            </section>
          </Link>
          <table className="car-parts-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {carParts.map((part) => (
                <tr key={part.id}>
                  <td>{part.id}</td>
                  <td>{part.name}</td>
                  <td>{part.description}</td>
                  <td>
                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(part.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(part.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
