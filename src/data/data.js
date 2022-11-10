// import React from "react";
import Alemania from "../assets/images/camisetaAlemania.jpg";
import Croacia from "../assets/images/camisetaCroacia.jpg";
import Argentina from "../assets/images/camisetaArgentina.jpg";
import España from "../assets/images/camisetaEspaña.jpg";
import Francia from "../assets/images/camisetaFrancia.jpg";
import Holanda from "../assets/images/camisetaHolanda.jpg";
import Portugal from "../assets/images/camisetaPortugal.jpg";
import Brasil from "../assets/images/camisetasBrasil.jpg";

const shoes = [
  {
    id: 1,
    title: "Camiseta Alemania",
    size: "S/M/L/XL",
    color: "Blanca/Negra",
    price: "90 U$S",
    pictureURL: Alemania,
    category: "Europa",
  },
  {
    id: 2,
    title: "Camiseta Argentina",
    size: "S/M/L/XL",
    color: "Azul",
    price: "120 U$S",
    pictureURL: Argentina,
    category: "America",
  },
  {
    id: 3,
    title: "Camiseta Croacia",
    size: "S/M/L/XL",
    color: "Roja/Blanca",
    price: "60 U$S",
    pictureURL: Croacia,
    category: "Europa",
  },
  {
    id: 4,
    title: "Camiseta España",
    size: "S/M/L/XL",
    color: "Roja",
    price: "80 U$S",
    pictureURL: España,
    category: "Europa",
  },
  {
    id: 5,
    title: "Camiseta Francia",
    size: "S/M/L/XL",
    color: "Azul",
    price: "80 U$S",
    pictureURL: Francia,
    category: "Europa",
  },
  {
    id: 6,
    title: "Camiseta Paises Bajos",
    size: "S/M/L/XL",
    color: "Naranja",
    price: "70 U$S",
    pictureURL: Holanda,
    category: "Europa",
  },
  {
    id: 7,
    title: "Camiseta Portugal",
    size: "S/M/L/XL",
    color: "Roja/Verde",
    price: "80 U$S",
    pictureURL: Portugal,
    category: "Europa",
  },
  {
    id: 8,
    title: "Camiseta Brasil",
    size: "S/M/L/XL",
    color: "Amarilla",
    price: "100 U$S",
    pictureURL: Brasil,
    category: "America",
  },
];

export const getProduct = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(shoes);
    }, 2000);
  });
};
