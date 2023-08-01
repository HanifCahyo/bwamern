import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage_";
import Checkout from "pages/Checkout";
import Example from "pages/Example";

import "assets/scss/style.scss";

// const history = createBrowserHistory({
//   basename: process.env.PUBLIC_URL,
// });

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/properties/:id" element={<DetailsPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/example" element={<Example />} />
      </Routes>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
