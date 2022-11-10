import React, { useEffect, useState } from "react";
import { getProduct } from "../data/data";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { iditem } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    const getShoes = new Promise((res, rej) => {
      res(getProduct());
    });
    getShoes.then((res) => {
      setData(res.find((item) => item.id === parseInt(iditem)));
    });
    getShoes
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("finish");
      });
  }, [iditem]);

  return (
    <div>
      <ItemDetail productos={data} />
    </div>
  );
};

export default ItemDetailContainer;
