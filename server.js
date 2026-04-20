const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 5000;

app.get("/api/data", (req, res) => {
    res.json({
        traffic: Math.floor(Math.random() * 100),
        energy: Math.floor(Math.random() * 100),
        waste: Math.floor(Math.random() * 100)
    });
});

app.get("/api/predict", (req, res) => {
    res.json({
        trafficPrediction: "High Traffic",
        energyPrediction: "Peak Usage",
        wastePrediction: "Collection Needed"
    });
});

app.get("/api/optimize", (req, res) => {
    res.json({
        trafficAction: "Adjust Signals",
        energyAction: "Reduce Load",
        wasteAction: "Dispatch Truck"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});