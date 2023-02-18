import React, { useEffect, useState } from "react";

import { Card, WrapperGift } from "../component";

import api from "../utils/api";

const IronManPage = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const { data: { data = {} } = {} } =
        (await api.get(
          `/search?api_key=${process.env.REACT_APP_API_KEY}&q=iron+man&limit=9&offset=0&rating=g&lang=en`
        )) || {};
      setData(data);
    } catch (e) {
      throw e;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1 className="text-uppercase text-center fw-bold m-4">iron man giphy</h1>
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

export default IronManPage;
