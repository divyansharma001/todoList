import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import 'dotenv/config';

const app = express();
const port = 3000;

const db = new pg.Client ({
  user: process.env.DB_USER || 'your-username',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'your-database-name',
  password: process.env.DB_PASSWORD || 'your-password',
  port: process.env.DB_PORT || 5432,
})

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var tasks;

let items = [];

app.get("/", async (req, res) => {

const result =  await db.query('SELECT * FROM items');
tasks = result.rows
console.log(tasks);

let currentDate = new Date().toJSON().slice(0, 10);
console.log(currentDate);

  res.render("index.ejs", {
    listTitle: currentDate,
    listItems: tasks,
  });
});

app.post("/add", async (req, res) => {
  try {
    const item = req.body.newItem;
    const result = await db.query('INSERT INTO items (title) VALUES ($1)', [item]);
    res.redirect("/");
  } catch (error) {
    console.error("Error in /add route:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/edit", async (req, res) => {
  try {
    const updatedValue = req.body.updatedItemTitle;
    const reqId = req.body.updatedItemId;
    console.log(updatedValue);

    const result = await db.query('UPDATE items SET title = $1 WHERE id = $2', [updatedValue, reqId]);

    res.redirect('/');
  } catch (error) {
    console.error("Error in /edit route:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/delete", async (req, res) => {
  try {
    const reqId = req.body.deleteItemId;
    await db.query('DELETE FROM items WHERE id= $1', [reqId]);
    res.redirect('/');
  } catch (error) {
    console.error("Error in /delete route:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
