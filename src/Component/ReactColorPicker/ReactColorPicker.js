import React, { useState } from "react";
import { ChromePicker } from "react-color";

function ReactColorPicker() {
  const [color, setColor] = useState("fff");
  const [showColorPicker, setColorPicker] = useState(false);
  return (
    <div>
      <button
        onClick={() => setColorPicker((showColorPicker) => !showColorPicker)}
      >
        {showColorPicker ? "close color" : "pick a color"}
      </button>
      {showColorPicker && (
        <ChromePicker
          color={color}
          onChange={(updatedColor) => setColor(updatedColor.hex)}
        />
      )}
      <h1>{color}</h1>
    </div>
  );
}

export default ReactColorPicker;
