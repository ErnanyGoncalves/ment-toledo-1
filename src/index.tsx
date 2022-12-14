import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import TodoPage from "./Pages/TodoPage/TodoPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <TodoPage />
  </React.StrictMode>
);
