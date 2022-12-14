import {
  Button,
  Card,
  FlexLayout,
  FormElement,
  Loader,
  TextField,
  TextStyles,
} from "@cedcommerce/ounce-ui";
import React, { useState } from "react";
import { DangerAlert, SuccessAlert } from "./components/alerts";
import HOC from "./HOC";

interface IState {
  loading: boolean;
  message: string;
  loggedin: string;
}
interface IProps {
  name: string;
}
const Login = (props: IProps) => {
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
    let data = {
      username: username,
      password: password,
    };
    console.log(data);
    if (data.username !== "" && data.password !== "") {
      setState({
        ...state,
        loading: false,
        loggedin: "done",
      });
    } else {
      setState({
        ...state,
        loading: false,
        loggedin: "error",
      });
    }
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
            {props.name}
          </TextStyles>
          {state.loggedin === "done" && (
            <SuccessAlert responseMsg={state.message} />
          )}
          {state.loggedin === "error" && (
            <DangerAlert responseMsg={state.message} />
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
              <FlexLayout valign="center" halign="fill">
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
                <TextStyles
                  content={<a href="/signup">Have no any account?</a>}
                  textcolor="primary"
                />
              </FlexLayout>
            </FormElement>
          </Card>
          {state.loading && <Loader type="Loader2" />}
        </Card>
      </div>
  );
};

export default HOC(Login);
