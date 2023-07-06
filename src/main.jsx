import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TaskContextProvider } from "./context/TaskContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  //Para que compruebe que código está ok en desarrollo
  <React.StrictMode>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </React.StrictMode>
);
