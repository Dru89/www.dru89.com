import styled from "@emotion/styled";
import { ReactNode } from "react";

import Footer from "./Footer";
import GlobalStyles from "./GlobalStyles";
import Metatags, { MetatagsProps } from "./Metatags";
import Sidebar from "./Sidebar";

const ContainerDiv = styled.div({
  display: "flex",

  "@media screen and (max-width: 1199.95px)": {
    flexDirection: "column",
    height: "100%",
  },

  "@media print": {
    margin: "0.333in 0.333in",
  },

  main: {
    "@media screen": {
      margin: "50px 100px",
      flex: 1,
      maxWidth: 800,
    },

    "@media screen and (max-width: 599.95px)": {
      margin: 50,
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
      <Footer />
    </ContainerDiv>
  );
};

export default Container;
