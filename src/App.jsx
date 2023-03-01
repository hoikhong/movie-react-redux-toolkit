import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//store
import { Provider } from "react-redux";
import store from "./store/Store";
import "./App.css";

// components
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Header />
          <div className="container mx-auto w-[100vw]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movie/:id" element={<MovieDetail />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
          <div className="bg-gray-400 fixed bottom-0 w-full py-4 flex justify-center">
            <Footer />
          </div>
        </Router>
      </Provider>
    </>
  );
}

export default App;
