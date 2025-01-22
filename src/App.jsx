import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./assets/components/home";

import Editing from "./assets/components/editing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/update/:id" element={<Editing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
