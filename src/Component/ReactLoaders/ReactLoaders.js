import React from "react";
import { BounceLoader, BarLoader, BeatLoader } from "react-spinners";

function ReactLoaders() {
  return (
    <div>
      <BounceLoader loading />
      <BarLoader loading />
      <BeatLoader loading />
    </div>
  );
}
export default ReactLoaders;
