import Plot from "react-plotly.js";

function Scatter() {
  const trace = {
    x: [4.2, 5.55, 6.91],
    y: [3.14, 2.84, 4.34],
    mode: "markers+lines",
    type: "scatter",
  };
  const trace2 = {
    x: [1, 2, 3],
    y: [4, 5, 6],
    mode: "markers+lines",
    type: "scatter",
  };
  const data = [trace, trace2];
  return (
    <div>
      <Plot
        data={data}
        layout={{
          title: "Diameter and height in cylinders",
          xaxis: {
            ticksuffix: "%",
          },
        }}
      />
    </div>
  );
}

export default Scatter;
