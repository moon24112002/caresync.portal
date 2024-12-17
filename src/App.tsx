import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Header/Navbar";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import Nav from "./Pages/Navbar/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./services/store/Store";
import axios from "axios";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    debugger;
    axios
      .get("http://localhost:8080/patient/5")
      .then((res) => {
        console.log("Welcome user::", res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Nav />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
