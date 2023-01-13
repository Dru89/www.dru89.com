import styled from "@emotion/styled";
import React, { ReactNode } from "react";

import Footer from "./Footer";
import GlobalStyles from "./GlobalStyles";
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
  children: ReactNode;
  className?: string;
}

function Container({ children, className }: ContainerProps): JSX.Element {
  return (
    <ContainerDiv className={className}>
      <GlobalStyles />
      <Sidebar />
      <main>{children}</main>
      <Footer />
    </ContainerDiv>
  );
}

export default Container;
