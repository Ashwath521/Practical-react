import React from "react";
import Plot from "react-plotly.js";

function Bar() {
  // basic example of bar chart

  //   const barData = [
  //     {
  //       x: ["Comedy", "Action", "Romance", "Drama", "Scifi"],
  //       y: [4, 5, 6, 1, 4],
  //       type: "bar",
  //       //   horizontal bar chart
  //       orientation: "h",
  //     },
  //   ];

  //   grouping bar chart

  var trace1 = {
    x: ["Comedy", "Action", "Romance", "Drama", "Scifi"],
    y: [4, 5, 6, 1, 4],
    name: "Nueplex",
    type: "bar",
  };

  var trace2 = {
    x: ["Comedy", "Action", "Romance", "Drama", "Scifi"],
    y: [12, 3, 5, 6, 2],
    name: "Cinepax",
    type: "bar",
  };

  var data = [trace1, trace2];

  return (
    <div>
      <Plot
        data={data}
        layout={{
          autosize: true,
          font: {
            size: 10,
          },
          legend: {
            x: 0,
            y: 1.2,
          },
          margin: { b: 20, l: 40, r: 10, t: 10 },
          paper_bgcolor: "#f5f6f7",
          plot_bgcolor: "#f5f6f7",
          showlegend: true,
          title: {
            font: {
              size: 11,
            },
          },
          title: "React_plot Practical",
          xaxis: {
            ticksuffix: "%",
          },
        }}
        config={{
          displayModeBar: true,
          displaylogo: false,
          modeBarButtonsToRemove: [
            "pan2d",
            "zoom2d",
            "autoScale2d",
            "lasso2d",
            "zoomIn2d",
            "zoomOut2d",
            "select2d",
            "resetScale2d",
          ],
          scrollZoom: false,
          toImageButtonOptions: {
            filename: "React plot image",
            scale: 2,
          },
        }}
      />
    </div>
  );
}

export default Bar;
