import React, { useEffect } from "react";

import api from "../utils/api";
import { Link } from "../component";

const giphyImage = "/giphy_logo.png";

const HomePage = () => {
  useEffect(() => {
    new Promise((resolve, reject) => {
      api
        .get(`/random?api_key=${process.env.REACT_APP_API_KEY}&tag=&rating=g`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }, []);
  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center flex-column gap-5">
      <h1 className="text-uppercase text-center fw-bold">
        welcome to your giphy
      </h1>
      <div className="box_shadow">
        <img src={giphyImage} className="img-fluid" />
      </div>
      <div className="flex flex-row mt-4 text-center">
        <Link href="/iron-man" className="text-uppercase mb-4">
          iron man giphy
        </Link>
        <Link href="/search" className="text-uppercase">
          search your giphy
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
