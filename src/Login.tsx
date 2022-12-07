import {
  Alert,
  Button,
  Card,
  FormElement,
  Loader,
  TextField,
  TextStyles,
} from "@cedcommerce/ounce-ui";
import React, { useState } from "react";
import { fetching } from "./common/fetchData";
import { DangerAlert, SuccessAlert } from "./components/alerts";
import { ObjTask } from "./objTask";

interface IState {
  loading: boolean;
  message: string;
  loggedin: string;
}
interface IProps {}
let Login: React.FC<IProps> = () => {
  const [state, setState] = useState<IState>({
    loading: false,
    message: "",
    loggedin: "",
  });
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const submitDetails = () => {
    setState({
      ...state,
      loading: true,
    });
    let url = new URL("https://fbapi.sellernext.com/user/login");
    let data = {
      username: username,
      password: password,
    };
    console.log(data)
    let i: keyof typeof data;
    for (i in data) {
      url.searchParams.append(i, data[i]);
    }
    console.log(url)
    fetching(url).then((response) => {
      console.log(response)
      if (response.success === true) {
        setState({
          ...state,
          loading: false,
          message: response.message,
          loggedin: "done",
        });
      } else {
        setState({
          ...state,
          loading: false,
          message: response.message,
          loggedin: "error",
        });
      }
    });
  };
  return (
    <div className="form-page">
    <Card>
      <TextStyles
        alignment="left"
        fontweight="normal"
        textcolor="dark"
        type="Heading"
        utility="none"
      >
        Login
      </TextStyles>
      {state.loggedin === "done" && (
        <SuccessAlert responseMsg={state.message}/>
      )}
      {state.loggedin === "error" && (
        <DangerAlert responseMsg={state.message}/>
      )}
      <Card cardType="Bordered">
        <FormElement horizontal={false}>
          <TextField
            name="username"
            onChange={(e) => {
              setUsername(e);
            }}
            placeHolder="Enter username"
            value={username}
          />
          <TextField
            name="password"
            onChange={(e) => {
              setPassword(e);
            }}
            placeHolder="Enter password"
            value={password}
            type="password"
          />
          <Button
            content="Submit"
            halign="Equal"
            iconAlign="left"
            length="none"
            onAction={function noRefCheck() {
              submitDetails();
            }}
            onClick={function noRefCheck() {
              submitDetails();
            }}
            thickness="thin"
            type="Primary"
          />
        </FormElement>
      </Card>
      {state.loading && <Loader type="Loader2" />}
    </Card>
    <ObjTask />
    </div>
  );
};

export default Login;
