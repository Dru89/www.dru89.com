import React from "react";

import Container from "../components/Container";
import Metatags from "../components/Metatags";
import Resume from "../components/Resume";

export function Head(): JSX.Element {
  return <Metatags />;
}

function ResumePage(): JSX.Element {
  return (
    <Container>
      <Resume email={process.env.GATSBY_RESUME_EMAIL_ADDRESS} />
    </Container>
  );
}

export default ResumePage;
