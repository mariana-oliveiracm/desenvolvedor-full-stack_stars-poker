const express = require("express");
const router = require("./routes/routes.js");
const { setDb } = require("./db/banco.js");

const PORT = 3001;
const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
    try {
        setDb();
        res.json({ message: "API Stars Poker" });        
    } catch (error) {
        res.status(400).send(error.message);
    };
});

app.use("/", router);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});