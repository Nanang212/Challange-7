// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


import ReactDOM from "react-dom/client";
import "./styles/reset.css";
import "./styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { store } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, GetCar, NotFound} from "./pages";
import Cars from "./pages/cars";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/view" element={<GetCar />} />
        <Route path="/cars" element={<Cars />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
