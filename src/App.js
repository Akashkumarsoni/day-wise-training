import { Card, FlexLayout, Select, Tag } from "@cedcommerce/ounce-ui";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [options, setOptions] = useState([]);
  const [highlights, setHighlights] = useState([]);
  const [selectedOption, setSelectedOption] = useState("Select");
  const [selectedArr, setSelectedArr] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1/todos")
      .then((res) => res.json())
      .then((res) => {
        let opt = [];
        let hlt = [];
        res.map((i) => {
          let row = { label: i.title, value: i.title };
          opt = [...opt, row];
          if (hlt.length < 5) {
            hlt = [...hlt, row];
          }
        });
        setOptions(opt);
        setHighlights(hlt);
      });
  }, []);
  const changeHighlights = (e) => {
    setSelectedOption(e);
    const found = highlights.some((el) => {
      if (el.label === e) {
        return true;
      }
      return false;
    });
    const foundTag = selectedArr.some((el) => {
      if (el === e) {
        return true;
      }
      return false;
    });
    const element = options.find((el) => el.label === e);
    if (!found) {
      let temp = [...highlights];
      temp.splice(4, 1);
      temp = [element, ...temp];
      setHighlights(temp);
    }
    if (!foundTag) {
      setSelectedArr([...selectedArr, e]);
    }
  };
  const removeTag = (e) => {
    let tempArray = [...selectedArr];
    tempArray.splice(e, 1);
    setSelectedArr(tempArray);
  };
  return (
    <Card className="App">
      <Select
        dropDownheight={200}
        name="Name"
        onChange={function noRefCheck(e) {
          changeHighlights(e);
        }}
        options={[
          {
            group: highlights,
            label: "Highlights : Most selected options by you",
          },
          {
            group: options,
            label: "Your options",
          },
        ]}
        placeholder="Select"
        popoverContainer="body"
        selectHelp={
          selectedOption === "Select" ? "" : "Last selected : " + selectedOption
        }
        thickness="thick"
      />
      <FlexLayout halign="start" order="Order" wrap="wrap">
        {selectedArr.map((i, index) => {
          return (
            <div className="m-20" key={index}>
              <Tag
                destroy={function noRefCheck() {
                  removeTag(index);
                }}
              >
                {i}
              </Tag>
            </div>
          );
        })}
      </FlexLayout>
    </Card>
  );
}

export default App;
