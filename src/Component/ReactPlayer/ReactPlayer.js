import React from "react";
import ReactPlayer from "react-player";

function ReactPlay() {
  return (
    <div>
      <ReactPlayer
        controls
        height="300px"
        width="600px"
        url="https://www.youtube.com/watch?v=7sDY4m8KNLc&list=PLC3y8-rFHvwhAh1ypBvcZLDO6I7QTY5CM&index=12"
        onReady={() => console.log("onReady callback")}
        onStart={() => console.log("onReady callback")}
        onPause={() => console.log("onReady callback")}
        onEnded={() => console.log("onReady callback")}
        onError={() => console.log("onReady callback")}
      />
    </div>
  );
}

export default ReactPlay;
