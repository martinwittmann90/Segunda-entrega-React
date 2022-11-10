import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import "../assets/css/ItemCounter.css";

const ItemCounter = ({ stock, initial, AddCart }) => {
  const [cont, setCont] = useState(parseInt(initial));
  const sumar = () => {
    setCont(cont + 1);
  };
  const restar = () => {
    setCont(cont - 1);
  };

  useEffect(() => {
    setCont(parseInt(initial));
  }, [initial]);

  return (
    <div>
      <Button disabled={cont <= 0} sx={{ background: "#ddd" }} onClick={restar}>
        -
      </Button>
      <span>{cont}</span>
      <Button
        disabled={cont >= stock}
        sx={{ background: "#ddd" }}
        onClick={sumar}
      >
        +
      </Button>
      <Button
        disabled={cont >= stock || cont <= 0}
        sx={{ background: "#ddd" }}
        onClick={() => AddCart(cont)}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default ItemCounter;
