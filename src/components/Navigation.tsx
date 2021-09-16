import styled from "@emotion/styled";
import { Link } from "gatsby";

import SocialIcons from "./SocialIcons";

const Links = styled.ul({
  listStyleType: "none",

  "@media screen and (min-width: 1200px)": {
    margin: "0 0 10px 0",
  },

  padding: 0,
  li: {
    margin: 10,
    padding: 0,

    "@media screen and (max-width: 1199.95px)": {
      display: "inline-block",
    },
  },
  a: {
    color: "#f5f5f5",
    textDecoration: "none",
    "&:hover, &:focus": {
      textDecoration: "underline",
    },
  },
});

const Nav = styled.nav({
  display: "flex",
  alignItems: "center",

  "@media screen and (min-width: 1200px)": {
    flexDirection: "column",
  },
});

const SocialIconsWrapper = styled.div({
  "@media screen and (max-width: 1200px)": {
    display: "none",
  },
});

const Navigation = (): JSX.Element => {
  return (
    <Nav>
      <Links>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </Links>
      <SocialIconsWrapper>
        <SocialIcons />
      </SocialIconsWrapper>
    </Nav>
  );
};

export default Navigation;
