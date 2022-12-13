import {
  FlexLayout,
  PageFooter,
  PageHeader,
  TextStyles
} from "@cedcommerce/ounce-ui";
import { ComponentType, FC } from "react";

const HOC = (IProps: ComponentType<any>) => {
  return (props: any) => {
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
        <IProps/>
        <PageFooter>
          <TextStyles>Cedcommerce @ 2020</TextStyles>
        </PageFooter>
      </>
    );
  };
};
export default HOC;
