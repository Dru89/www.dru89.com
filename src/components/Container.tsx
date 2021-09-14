import styled from "@emotion/styled";
import { ReactNode } from "react";

import GlobalStyles from "./GlobalStyles";
import Metatags, { MetatagsProps } from "./Metatags";
import Sidebar from "./Sidebar";

const ContainerDiv = styled.div({
  display: "flex",
  backgroundColor: "#ABC8E2",

  main: {
    "@media screen": {
      margin: "50px 100px",
      flex: 1,
    },
  },
});

export interface ContainerProps {
  meta?: MetatagsProps;
  children: ReactNode;
  className?: string;
}

const Container = ({
  meta = {},
  children,
  className,
}: ContainerProps): JSX.Element => {
  return (
    <ContainerDiv className={className}>
      <GlobalStyles />
      <Metatags {...meta} />
      <Sidebar />
      <main>{children}</main>
    </ContainerDiv>
  );
};

export default Container;
