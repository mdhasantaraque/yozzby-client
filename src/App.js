import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Router/Routes";

function App() {
  return (
    <div className="max-w-7xl mx-auto bg-slate-50">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
