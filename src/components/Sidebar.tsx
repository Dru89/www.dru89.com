import styled from "@emotion/styled";

import Navigation from "./Navigation";
import ProfilePhoto from "./ProfilePhoto";

const Aside = styled.aside({
  flexBasis: "220px",
  padding: "24px 40px",
  backgroundColor: "#183152",
  color: "#f5f5f5",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: 24,
  position: "sticky",
  top: 0,

  "@media print": {
    display: "none",
  },
});

const Sidebar = (): JSX.Element => {
  return (
    <Aside>
      <ProfilePhoto />
      <h1>Drew Hays</h1>
      <Navigation />
    </Aside>
  );
};

export default Sidebar;
