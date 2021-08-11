import { useState } from "react";

export function useStack() {
  const [stack, setStack] = useState([]);

  const push = (word) => {
    setStack([...stack, word]);
  };

  const pop = () => {
    let newStack = stack.filter((item, index) => index !== stack.length - 1);
    setStack(newStack);
  };

  return { stack, push, pop };
}

export function useCounter(start, finish) {
  const [c, setC] = useState(start);

  const count = () => {
    setC((prev) => {
      prev = prev + 1;
      if (prev > finish) prev = start;
      return prev;
    });
  };

  return [c, count];
}
