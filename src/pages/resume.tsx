import Container from "../components/Container";
import Resume from "../components/Resume";

const ResumePage = (): JSX.Element => {
  return (
    <Container>
      <Resume email={process.env.GATSBY_RESUME_EMAIL_ADDRESS} />
    </Container>
  );
};

export default ResumePage;
