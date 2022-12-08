import { Button, Card, TextField, TextStyles } from "@cedcommerce/ounce-ui";
import { useState } from "react";

export const ObjTask = () => {
  const [inp, setInp] = useState<string>("");
  const [opt, setOpt] = useState<string>("");
  const inpFunc = (str:string) => {
    let sortedStr = str.split("");
    let count = 1;
    let op = [];
    for (let i = 0; i < sortedStr.length; i++) {
      if (sortedStr[i] === sortedStr[i + 1]) {
        count = count + 1;
      } else {
        let res = sortedStr[i] + "" + count;
        op.push(res);
        count = 1;
      }
    }
    let k = "";
    op.map((i) => {
      k = k + i;
    });
    setOpt(k);
  };
  return (
    <>
      <Card>
        <TextField
          name="Enter a string"
          onChange={function noRefCheck(e) {
            setInp(e);
          }}
          strength
          type="text"
          value={inp}
        />
        <Button
          onClick={function noRefCheck() {
            inpFunc(inp);
          }}
        >
          Submit
        </Button>
        <Card>
        <TextStyles>Output : {opt}</TextStyles>
        </Card>
      </Card>
    </>
  );
};
