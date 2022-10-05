import Plot from "react-plotly.js";

function Pie() {
  var data = [
    {
      values: [112, 454, 65, 544],
      labels: ["Blue", "Red", "Yellow", "Orange"],
      type: "pie",
    },
  ];

  return (
    <div>
      <Plot data={data} layout={{ title: "Balls in Box according to color" }} />
    </div>
  );
}

export default Pie;
