const admin = require("firebase-admin");
var bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

const db = admin.firestore();
const collectionName = "ticket";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/ticket", async (req, res) => {
  try {
    const ticket = req.body;
    console.log(ticket);
    const newItem = await db.collection(collectionName).add(req.body);
    res.json({ message: `Item created with ID: ${newItem.id}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating ticket" });
  }
});

// Route for getting all items
app.get("/ticket", async (req, res) => {
  try {
    const ticket = [];
    const snapshot = await db.collection(collectionName).get();
    snapshot.forEach((doc) => ticket.push({ id: doc.id, ...doc.data() }));
    res.json(ticket);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching ticket" });
  }
});

// Route for updating an item by ID
app.put("/ticket/:id", async (req, res) => {
  const ticketId = req.params.id;
  const updateticket = req.body;
  try {
    await db.collection(collectionName).doc(ticketId).update(updateticket);
    res.json({ message: `Item with ID ${ticketId} updated successfully` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating item" });
  }
});

// Route for deleting an item by ID
app.delete("/ticket/:id", async (req, res) => {
  const ticketId = req.params.id;
  try {
    await db.collection(collectionName).doc(ticketId).delete();
    res.json({ message: `Item with ID ${ticketId} deleted successfully` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting item" });
  }
});
