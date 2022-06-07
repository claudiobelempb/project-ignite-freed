import axios from "axios";

export const api = axios.create({
  baseURL: "https://mercado.carrefour.com.br/api/catalog_system/pub/products",
});

//  fetch("https://dspesquisa.herokuapp.com/records", {
//   "headers": {
//     "accept": "*/*",
//     "accept-language": "en-US,en;q=0.9,pt-BR;q=0.8,pt;q=0.7",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "cross-site"
//   },
//   "referrer": "http://localhost:3000/records",
//   "referrerPolicy": "no-referrer-when-downgrade",
//   "body": null,
//   "method": "GET",
//   "mode": "cors",
//   "credentials": "omit"
// });
