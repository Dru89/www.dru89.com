import styled from "@emotion/styled";
import { Link } from "gatsby";

import SocialIcons from "./SocialIcons";

const Links = styled.ul({
  listStyleType: "none",
  margin: "0 0 10px 0",
  padding: 0,
  li: {
    margin: 10,
    padding: 0,
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
  flexDirection: "column",
  alignItems: "center",
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
      <SocialIcons />
    </Nav>
  );
};

export default Navigation;
