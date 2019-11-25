import React from 'react';
import { useState } from 'react';

const [count, setCount] = useState(0);
const StateHook = ({count, setCount}) => (
  // Declare a new state variable, which we'll call "count"

  <div>
    <p>You clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>
      Click me
    </button>
  </div>
)


export default StateHook;