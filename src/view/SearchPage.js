import React, { useEffect, useState } from "react";

import { Card, WrapperGift } from "../component";
import SearchBar from "../component/SearchBar";

import api from "../utils/api";

const SearchPage = () => {
  const [data, setData] = useState([]);
  const [searchKey, setSeachKey] = useState("iron+man");

  const fetchData = async () => {
    try {
      const { data: { data = {} } = {} } =
        (await api.get(
          `/search?api_key=${process.env.REACT_APP_API_KEY}&q=${searchKey}&limit=9&offset=0&rating=g&lang=en`
        )) || {};
      setData(data);
    } catch (e) {
      throw e;
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchKey]);

  const onSubmit = (value) => {
    setSeachKey(value);
  };

  return (
    <div className="container">
      <h1 className="text-uppercase text-center fw-bold m-4">
        search your giphy
      </h1>
      <div className="d-flex justify-content-center">
        <SearchBar placeholder="Search Giphy" onSubmit={onSubmit} />
      </div>
      <WrapperGift>
        {data.map((item, index) => {
          return (
            <Card
              key={index}
              className="col-8 col-sm-6 col-lg-4"
              url={item.images.fixed_width_still.url}
            />
          );
        })}
      </WrapperGift>
    </div>
  );
};

export default SearchPage;
