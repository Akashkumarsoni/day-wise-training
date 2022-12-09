import { Select } from "@shopify/polaris";
import { useState } from "react";
import "./App.css";
import { dataTaxonomy } from "./data";

function GoogleTaxonomy() {
  const txttoarr = dataTaxonomy.split("\n");
  const d2arr = txttoarr.map((item) => item.split(" > "));
  const a = d2arr.filter((item) => item.length === 1);
  const [print, setPrint] = useState([a]);
  let arr = [];
  for (let i = 0; i < d2arr.length; i++) {
    for (let j = 0; j < d2arr[i].length; j++) {
      let curr = d2arr[i][j];
      if (arr[curr] === undefined) arr[curr] = [];
    }
  }
  for (let i = 0; i < d2arr.length; i++) {
    for (let j = 1; j < d2arr[i].length; j++) {
      let curr = d2arr[i][j - 1];
      if (!arr[curr].includes(d2arr[i][j])) arr[curr].push(d2arr[i][j]);
    }
  }

  const childrenHandler = (val, i) => {
    let arr1 = print.slice(0, i + 1);
    if (arr[val].length > 0) setPrint([...arr1, arr[val]]);
  };
  return (
    <div className="app">
      <h1>Google Taxonomy</h1>
     <div className="selectbox">
     {print.map((item, i) => (
        <select
          onChange={(event) => childrenHandler(event.target.value, i)}
          key={i}
        >
          <option disabled>select</option>
          {item.map((it, k) => (
            <>
              <option value={it} key={k * 100}>
                {it}
              </option>
            </>
          ))}
        </select>
      ))}
     </div>
    </div>

  );
}

export default GoogleTaxonomy;
