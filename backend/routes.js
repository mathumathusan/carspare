const express = require("express");
const router = express.Router();
const db = require("./db");

//  add  the carparts
router.post("/carparts", (req, res) => {
  const { name, brand, model, year, price, stock, image_url } = req.body;
  const query =
    "INSERT INTO carparts (name ,brand,model,year,price,stock,image_url) VALUES (?,?,?,?,?,?,?)";

  db.query(
    query,
    [name, brand, model, year, price, stock, image_url],
    (err, result) => {
      if (err) throw err;
      res.json({
        message: "Car parts added successfully",
        id: result.insertId,
      });
    }
  );
});

// get the carparts
router.get("/carparts", (req, res) => {
  const query = "SELECT * FROM carparts";

  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// get the carpats using specific id
router.get("/carpart/:id", (req, res) => {
  const { id } = req.params;
  const query = "SELECT * FROM carparts where id=?";

  db.query(query, [id], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// delete the carparts
router.delete("/carpart/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM carparts WHERE id = ?", [id], (err) => {
    if (err) throw err;
    res.json({ message: "car parts deleted successfully" });
  });
});

//create a new vendor
router.post("/vendors", (req, res) => {
  const { name, address, phone, email } = req.body;
  const query =
    "INSERT INTO Vendors (name, address, phone, email) VALUES (?, ?, ?, ?)";
  db.query(query, [name, address, phone, email], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ id: result.insertId, name, address, phone, email });
  });
});

// get all vendors
router.get("/vendors", (req, res) => {
  const query = "SELECT * FROM Vendors";
  db.query(query, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});


// Get all orders
router.get('/orders', (req, res) => {
  const sql = 'SELECT * FROM Orders';
  db.query(sql, (err, results) => {
      if (err) return res.status(500).send(err);
      res.json(results);
  });
});

// Create a new order
router.post('/orders', (req, res) => {
  const { car_part_id, quantity, total_price, customer_name, customer_address } = req.body;
  const sql = `INSERT INTO Orders (car_part_id, quantity, total_price, customer_name, customer_address) 
               VALUES (?, ?, ?, ?, ?)`;
  db.query(sql, [car_part_id, quantity, total_price, customer_name, customer_address], (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ id: result.insertId, car_part_id, quantity, total_price, customer_name, customer_address });
  });
});


module.exports = router;
