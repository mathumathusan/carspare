import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/'}>About</Link></li>
          <li><Link to={'/manage'}>Manage</Link></li>
          <li><Link to={'/services'}>Services</Link></li>
          <li><Link to={'/'}>Contact</Link></li>
        </ul>
      </aside>
      <div className="main-content">
        <header className="header">
          <h1>Welcome to Your Dashboard</h1>
        </header>
        <div className="content">
            <Link to={"/manage"} className='card_link'>
            <section className="card">
            <h3>Manage Products</h3>
            <p>Admin can able to add the products</p>
          </section>
            </Link>
            <Link to={"/services"} className='card_link'>
            <section className="card">
            <h3>Car Products</h3>
            <p>Admin can able to see parts</p>
          </section>
            </Link>
            <Link to={"/services"} className='card_link'>
            <section className="card">
            <h3>Car Products</h3>
            <p>Admin can able to see parts</p>
          </section>
            </Link>
            <Link to={"/services"} className='card_link'>
            <section className="card">
            <h3>Car Products</h3>
            <p>Admin can able to see parts</p>
          </section>
            </Link>
          {/* Add more sections/cards as needed */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
