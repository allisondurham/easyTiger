import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Contact,
  Music,
  Tour,
  Merch,
  Allison,
  Heather,
  Elaine,
  Michael,
  Anthony,
} from "./components";


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/music" element={<Music />} />
      <Route path="/tour" element={<Tour />} />
      <Route path="/merch" element={<Merch />} />
      <Route path="/allison" element={<Allison />} />
      <Route path="/heather" element={<Heather />} />
      <Route path="/michael" element={<Michael />} />
      <Route path="/elaine" element={<Elaine />} />
      <Route path="/anthony" element={<Anthony />} />
    </Routes>
    <Footer />
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
