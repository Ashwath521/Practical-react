import CountUp, { useCountUp } from "react-countup";

function ReactCountUp() {
  const { countUp, start, pauseResume, reset, update } = useCountUp({
    duration: 5,
    end: 1000,
    startOnMount: false,
  });
  return (
    <div>
      <div>
        <h1>{countUp}</h1>
        <button onClick={start}>Start</button>
        <button onClick={pauseResume}>pause/Resume</button>
        <button onClick={reset}>Reset</button>
        <button
          onClick={() => {
            update(2000);
          }}
        >
          Update
        </button>
      </div>
      {/* with end prop */}
      <h1>
        <CountUp end={200} />
      </h1>
      {/* With duration prop */}
      <h1>
        <CountUp end={200} duration={5} />
      </h1>
      {/* With start prop */}
      <h1>
        <CountUp start={50} end={200} />
      </h1>
      {/* With prefix props */}
      <h1>
        <CountUp start={0} end={200} prefix="$" decimals={2} />
      </h1>
      {/* With Suffix props */}
      <h1>
        <CountUp start={0} end={200} suffix="USD" decimals={2} />
      </h1>
    </div>
  );
}

export default ReactCountUp;
