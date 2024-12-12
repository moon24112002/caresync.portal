import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Header/Navbar";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import Nav from "./Pages/Navbar/Nav";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Nav />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/*<Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route> */}
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
