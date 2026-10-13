import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import { useState } from "react";
import Getdata from './Getdata';
import axios from 'axios'
import { useEffect } from 'react';
// import Header from './Header'
// import Home from './Home';
// import Project from './Project'
// import Accordion from './Accordion';
// import ModalBox from './ModalBox';
// import ErrorHandling from './ErrorHandling';
// import Product from './Product';
// import About_task from './Task/About_task.js';
// import Accordion_task from './Task/Accordion_task';
// import Contact_task from './Task/Contact_task';
// //import Home_task from './Task/Home_task';
// import Login_task from './Task/Login_task';
// import Projects_task from './Task/Projects_task';
// import Skills_task from './Task/Skills_task';
// import Layout from './Layout';
// import Counter from './Counter';
import Struct from './Struct';
import Crypto_Test from './Test.js/Crypto_Test';
import ModalBox from './ModalBox';
function App() {
  const [data, SetData] = useState([]);
  useEffect(() => {

    axios.get("https://api.coinpaprika.com/v1/tickers")
      .then((res) => { SetData(res.data) })
  }, [])

  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Layout />}>

          <Route path="about" element={<About_task data={data} />} />
          <Route path="accordion" element={<Accordion_task data={data} />} />
          <Route path="projects" element={<Projects_task data={data} />} />
          <Route path="skills" element={<Skills_task data={data} />} />
          <Route path="contact" element={<Contact_task data={data} />} />
          <Route path="login" element={<Login_task />} />
        </Route> */}
        <Route path="/" element={<Struct />}></Route>
        <Route path="Crypto" element={<Crypto_Test data={data} />}></Route>

      </Routes>


    </div>
  );
}
export default App;