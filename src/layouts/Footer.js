import React from 'react';
import { Route, Routes, useParams, useLocation } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div>
      <h2>Stopka</h2>
      <Routes>
        <Route
          path="/"
          element={<p>Jesteś na stronie głównej</p>}
        ></Route>
        <Route
          path="/:page"
          element={<AnswerFooter />}
        ></Route>
        <Route
          path="/:page/:idProduct"
          element={<AnswerFooter />}
        ></Route>
      </Routes>
    </div>
  );
};

const AnswerFooter = () => {
  let { page, idProduct } = useParams();
  let { pathname } = useLocation();
  console.log(useParams());
  console.log(useLocation());
  //   console.log(idProduct);
  //   console.log(pathname);
  return (
    <>
      <p>
        Jesteś na <span>{idProduct !== undefined ? idProduct : page}</span>
      </p>
      <p>
        Jesteś na <span>{pathname}</span>
      </p>
      <p>
        Jesteś na <span>{window.location.href}</span>
      </p>
    </>
  );
};

export default Footer;
