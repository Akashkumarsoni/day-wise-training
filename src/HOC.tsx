import {
  FlexLayout,
  PageFooter,
  PageHeader,
  TextStyles,
} from "@cedcommerce/ounce-ui";
import { Children, ComponentType, FC, useState } from "react";

const HOC = (Children: any) => {
  
    const DummyComp=(props: any) => {
    const [pageName,setPageName] = useState("Login")

    return (
      <>
        <PageHeader
          sticky
          title="Welcome to Cedcommerce"
          action={
            <FlexLayout valign="center" halign="around">
              <TextStyles content={<a href="/home">Home</a>} textcolor="dark" />
              <TextStyles
                content={<a href="/contact">Contact us</a>}
                textcolor="dark"
              />
              <TextStyles
                content={<a href="/about">About us</a>}
                textcolor="dark"
              />
            </FlexLayout>
          }
        />
        <Children name={pageName}/>
        <PageFooter>
          <TextStyles>Cedcommerce @ 2020</TextStyles>
        </PageFooter>
      </>
    );
  };
  return DummyComp
};
export default HOC;
