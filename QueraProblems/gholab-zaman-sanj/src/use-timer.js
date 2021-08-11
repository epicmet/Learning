import React, { useState, useEffect } from "react";

export function useTimer() {
  const [seconds, setSeconds] = useState(0);
  const [interValID, setIntervalID] = useState(null);

  const setTime = () => {
    const ID = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    setIntervalID(ID);
  };

  useEffect(() => {
    setTime();
  }, []);

  const stop = () => {
    clearInterval(interValID);
  };

  const resume = () => {
    setTime();
  };

  const reset = () => {
    clearInterval(interValID);
    setSeconds(0);
    setTime();
  };

  return { seconds, stop, resume, reset };
}
