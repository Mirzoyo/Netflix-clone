import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies/Movies";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
