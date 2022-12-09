import { Select } from "@shopify/polaris";
import { useState } from "react";
import "./App.css";
import { dataTaxonomy } from "./data";

function GoogleTaxonomy() {
  const strArr = dataTaxonomy.split("\n");
  const updatedArr = strArr.map((item) => item.split(" > "));
  const a = updatedArr.filter((item) => item.length === 1);
  const [print, setPrint] = useState([a]);
  let arr = [];
  for (let i = 0; i < updatedArr.length; i++) {
    for (let j = 0; j < updatedArr[i].length; j++) {
      let current = updatedArr[i][j];
      if (arr[current] === undefined) arr[current] = [];
    }
  }
  for (let i = 0; i < updatedArr.length; i++) {
    for (let j = 1; j < updatedArr[i].length; j++) {
      let current = updatedArr[i][j - 1];
      if (!arr[current].includes(updatedArr[i][j])) arr[current].push(updatedArr[i][j]);
    }
  }

  const selectingEvent = (val, i) => {
    let arr1 = print.slice(0, i + 1);
    if (arr[val].length > 0) setPrint([...arr1, arr[val]]);
  };
  return (
    <div className="app">
      <h1>Google Taxonomy</h1>
     <div className="selectbox">
     {print.map((item, i) => (
        <select
          onChange={(event) => selectingEvent(event.target.value, i)}
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
