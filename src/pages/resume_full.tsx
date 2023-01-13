import React from "react";

import Container from "../components/Container";
import Metatags from "../components/Metatags";
import Resume from "../components/Resume";

export function Head(): JSX.Element {
  return (
    <>
      <Metatags />
      <meta name="robots" content="noindex" />
    </>
  );
}

function ResumePage(): JSX.Element {
  return (
    <Container>
      <Resume
        email={process.env.GATSBY_PRIVATE_EMAIL_ADDRESS}
        phone={process.env.GATSBY_PHONE_NUMBER}
      />
    </Container>
  );
}

export default ResumePage;
