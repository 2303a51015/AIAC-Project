async function loadData() {

    const data = await fetch("http://localhost:5000/api/data")
        .then(res => res.json());

    document.getElementById("traffic").innerText = data.traffic;
    document.getElementById("energy").innerText = data.energy;
    document.getElementById("waste").innerText = data.waste;

    const pred = await fetch("http://localhost:5000/api/predict")
        .then(res => res.json());

    document.getElementById("prediction").innerText =
        pred.trafficPrediction + ", " +
        pred.energyPrediction + ", " +
        pred.wastePrediction;

    const act = await fetch("http://localhost:5000/api/optimize")
        .then(res => res.json());

    document.getElementById("action").innerText =
        act.trafficAction + ", " +
        act.energyAction + ", " +
        act.wasteAction;
}