import React, { useState } from "react";

// Example: hooks

export default function Practice11() {
       const [count, setCount] = useState(200);
       // setCount-use as setState and count use as state.
  return (
    <div>
      <h1>Hooks {count}</h1>
      <button onClick={()=>{setCount(count +1)}}>Increment</button>
    </div>
  );
}


