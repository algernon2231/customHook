import React, { useState } from "react";
import useTitle from "../hooks/useTitle";
function DocTitleOne() {
  const [count, setCount] = useState(0);
  useTitle(count);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
    </div>
  );
}

export default DocTitleOne;
