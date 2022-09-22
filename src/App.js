import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import styled from "styled-components";

import Home from "./components/page/Home";
import Contact from "./components/page/Contact";

const NavPage = styled.header`
  display: flex;
  justify-content: center;
  background-color: aliceblue;
  padding: 50px;
`;

const App = () => {
  return (
    <>
      <NavPage>
        <a href="/">Home</a>
        <a href="/contact">Contact</a>
      </NavPage>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
