import { Helmet } from "react-helmet";

import Container from "../components/Container";
import Resume from "../components/Resume";

const ResumePage = (): JSX.Element => {
  return (
    <Container>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Resume
        redacted={false}
        email={process.env.GATSBY_EMAIL_ADDRESS}
        phone={process.env.GATSBY_PHONE_NUMBER}
      />
    </Container>
  );
};

export default ResumePage;
