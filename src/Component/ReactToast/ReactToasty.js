import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "../App.css";
import { ToastContainer } from "react-toastify";
import "./ReactToast.css";

function ReactToasty() {
  const notify = () => {
    toast.success("I use a custom id", {
      // toastId: Flip,
      // transition: Zoom,
      // draggablePercent: 40,
      // style: { width: "1000px" },
      // autoClose: 1000,
      position: "top-center",
    });
  };

  // const toastId = React.useRef(null);

  // const notify = () => (toastId.current = toast("Hello", { autoClose: false }));

  // const update = () =>
  //   toast.update(toastId.current, { type: toast.TYPE.INFO, autoClose: 5000 });

  return (
    <>
      <h1>React toastify Practical</h1>
      <button onClick={notify}>Notify</button>
      {/* <button onClick={update}>Update</button> */}
      <ToastContainer
        class="Toastify__toast Toastify__progress-bar"
        autoClose={4000}
        style={{ width: "90%" }}
      />
    </>
  );
}

export default ReactToasty;
