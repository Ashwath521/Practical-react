import React, { useRef } from "react";
import { IdleTimerConsumer } from "react-idle-timer";

function ReactIdleTimer() {
  const idleTimer = useRef(null);
  const onIdle = () => {
    console.log("onIdle");
  };
  return (
    <div>
      <IdleTimerConsumer ref={idleTimer} timeout={5 * 1000} onIdle={onIdle}></IdleTimerConsumer>
    </div>
  );
}

export default ReactIdleTimer;
