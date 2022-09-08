// rafcp
import React, { useEffect, useState } from "react";

// Example: useEffect

const Practice12 = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count === 5]);
  // []- if we want only first time to call then give empty array.

  return (
    <div>
      <h1>useEffect ....{count} </h1>
      <button onClick={() => {setCount(count + 1)}}>update state</button>
    </div>
  );
};

export default Practice12;
