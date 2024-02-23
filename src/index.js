import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div>
      <h1>Hello React</h1>
    </div>
  );
};
const container = createRoot(document.getElementById("root"));

container.render(<App />);
