import fetch from "node-fetch";

const respnse = await fetch("https://api.escuelajs.co/api/v1/products");
const products = await respnse.json();
export {products};