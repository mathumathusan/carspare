const express = require("express");
const router = express.Router();
const db = require("./db");


//  add  the carparts
router.post("/carparts", (req, res) => {
  const { name ,brand,model	,year,price,stock,image_url } = req.body;
  const query =
    "INSERT INTO carparts (name ,brand,model,year,price,stock,image_url) VALUES (?,?,?,?,?,?,?)";

  db.query(query, [name ,brand,model,year,price,stock,image_url], (err, result) => {
    if (err) throw err;
    res.json({ message: "Car parts added successfully", id: result.insertId });
  });
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
router.get("/carpart/:id",(req,res)=>{
const {id}=req.params;
const query="SELECT * FROM carparts where id=?";

db.query(query,[id],(err,results)=>{
    if(err) throw err;
    res.json(results);
})

})

// delete the carparts
router.delete('/carpart/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM carparts WHERE id = ?', [id], (err) => {
      if (err) throw err;
      res.json({ message: 'car parts deleted successfully' });
    });
  });


module.exports = router;
