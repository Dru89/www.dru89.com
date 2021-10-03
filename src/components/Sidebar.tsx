import styled from "@emotion/styled";

import Navigation from "./Navigation";
import ProfilePhoto from "./ProfilePhoto";

const Aside = styled.aside({
  padding: "24px 24px",
  backgroundColor: "#132842",
  color: "#f5f5f5",
  display: "flex",

  alignItems: "center",

  h1: {
    margin: "0 1.5em",
    flex: 1,
  },

  "@media screen and (min-width: 1200px)": {
    flexBasis: "220px",
    flexDirection: "column",
    position: "sticky",
    top: 0,
    height: "100vh",
    padding: "24px 40px",

    h1: {
      margin: "0.83em 0",
      flex: 0,
    },
  },

  "@media screen and (max-width: 599.95px)": {
    display: "grid",
    gridTemplateColumns: "100px auto",
    gridTemplateRows: "50px",
    flexDirection: "column",
    fontSize: "95%",

    ".profile-photo": {
      gridRow: "1 / span 2",
    },

    "h1, ul": {
      margin: "0 0 0 0.6rem",
    },

    "li:first-child": {
      marginLeft: 0,
    },
  },

  "@media print": {
    display: "none",
  },
});

const Sidebar = (): JSX.Element => {
  return (
    <Aside>
      <ProfilePhoto className="profile-photo" />
      <h1 className="title">Drew Hays</h1>
      <Navigation className="nav" />
    </Aside>
  );
};

export default Sidebar;
