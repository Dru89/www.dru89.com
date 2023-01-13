import styled from "@emotion/styled";
import React from "react";

import SocialIcons from "./SocialIcons";

const FooterEl = styled.footer({
  backgroundColor: "#132842",
  color: "#f5f5f5",
  padding: "10px 0",

  "@media screen and (min-width: 1200px)": {
    display: "none",
  },

  "@media print": {
    display: "none",
  },
});

function Footer(): JSX.Element {
  return (
    <FooterEl>
      <SocialIcons />
    </FooterEl>
  );
}

export default Footer;
