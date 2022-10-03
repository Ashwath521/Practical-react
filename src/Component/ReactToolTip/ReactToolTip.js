import React, { forwardRef } from "react";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

const Colored = () => {
  return <span style={{ color: "red" }}>colored</span>;
};

const Child = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <h1>steve job</h1>
    </div>
  );
});

function ReactToolTip() {
  return (
    <>
      <div>
        <Tippy
          arrow={false}
          delay={1000}
          placement={"right-start"}
          content="steve"
        >
          <button>Welcome</button>
        </Tippy>
      </div>

      <div style={{ paddingTop: "1rem" }}>
        <Tippy content={<Colored />}>
          <Child />
        </Tippy>
      </div>
    </>
  );
}

export default ReactToolTip;
