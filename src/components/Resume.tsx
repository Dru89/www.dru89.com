import styled from "@emotion/styled";
import {
  faEnvelope,
  faGlobe,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import { ReactNode } from "react";

export interface ResumeProps {
  redacted?: boolean;
  email?: string;
  phone?: string;
}

export interface ContactLinkProps {
  to?: string;
}

export const ContactLink = ({
  to = "/contact",
}: ContactLinkProps): JSX.Element => {
  return <Link to={to}>https://www.dru89.com{to}</Link>;
};

export interface ContactProps {
  children: ReactNode;
}

const Contact = styled.dl({
  div: {
    margin: 2,
  },
  a: {
    color: "inherit",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

const Header = styled.header({
  "@media screen": {
    display: "flex",
  },
  dl: { margin: 0 },
  "dt, dd": {
    margin: 0,
    display: "inline-block",
  },
  dt: {
    paddingRight: 6,
  },
});

const Lite = styled.span({
  opacity: 0.58,
});

const Title = styled.div({
  marginBottom: 20,
  h1: {
    margin: 0,
  },
  flexGrow: 1,
});

const Section = styled.section({
  margin: "10px 0",
  h1: {
    margin: "1em 0 0.5em",
    fontSize: "1.5rem",
  },
  breakInside: "avoid-page",
});

const Jobs = styled.dl({
  margin: 0,
});

const Job = styled.div({
  ":not(:first-of-type)": {
    marginTop: 25,
  },
  breakInside: "avoid-page",
});

const Company = styled.dt({
  display: "flex",
  fontWeight: "bold",
  fontSize: "1.3rem",
  alignItems: "flex-end",
  marginBottom: 4,
});

const CompanyName = styled.div({
  flex: 1,
});

const CompanyLocation = styled.div({
  opacity: 0.58,
  fontSize: "0.9em",
});

const Position = styled.dd({
  display: "flex",
  fontWeight: 500,
  margin: 0,
  fontSize: "1.05rem",
});

const PositionTitle = styled.div({
  flex: 1,
});
const PositionTimeline = styled.div({
  opacity: 0.58,
  fontSize: "0.9em",
});

const JobDescription = styled.dd({
  margin: "10px 0",
});

const Resume = ({
  redacted = true,
  email,
  phone,
}: ResumeProps): JSX.Element => {
  return (
    <div>
      <Header>
        <Title>
          <h1>
            Andrew <Lite>“Drew”</Lite> Hays
          </h1>
          <dl>
            <dt>Pronouns:</dt>
            <dd>he/him</dd>
          </dl>
        </Title>
        <Contact>
          <div>
            <dt>
              <FontAwesomeIcon icon={faEnvelope} fixedWidth />
            </dt>
            <dd>{redacted || !email ? <ContactLink /> : email}</dd>
          </div>
          <div>
            <dt>
              <FontAwesomeIcon icon={faPhone} fixedWidth />
            </dt>
            <dd>{redacted || !phone ? <ContactLink /> : phone}</dd>
          </div>
          <div>
            <dt>
              <FontAwesomeIcon icon={faGlobe} fixedWidth />
            </dt>
            <dd>
              <ContactLink to="/" />
            </dd>
          </div>
        </Contact>
      </Header>
      <Section>
        <h1>Experience</h1>
        <Jobs>
          <Job>
            <Company>
              <CompanyName>Hulu, LLC</CompanyName>
              <CompanyLocation>Seattle, WA</CompanyLocation>
            </Company>
            <Position>
              <PositionTitle>
                Principal Software Developer, Architect
              </PositionTitle>
              <PositionTimeline>March 2019 – Present</PositionTimeline>
            </Position>
            <Position>
              <PositionTitle>Senior Software Developer</PositionTitle>
              <PositionTimeline>March 2016 – March 2019</PositionTimeline>
            </Position>
            <Position>
              <PositionTitle>Senior Software Developer</PositionTitle>
              <PositionTimeline>November 2014 – March 2016</PositionTimeline>
            </Position>
            <JobDescription>
              <p>TK Roles for this job</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                blandit scelerisque lorem vitae commodo. Duis sed suscipit
                neque. Nulla sem nisl, cursus non ipsum ac, venenatis posuere
                nibh. Etiam quis pellentesque dui, sit amet interdum risus. Sed
                ultrices ligula vel mauris euismod scelerisque. Curabitur eget
                pellentesque nunc. Donec maximus mauris odio, id rhoncus ipsum
                tincidunt non. Aliquam at lectus non enim molestie facilisis sit
                amet nec nisl. Sed a mattis mauris, id malesuada lacus.
              </p>
              <p>
                Nullam leo odio, dapibus nec lectus et, lacinia rutrum lectus.
                Nunc fermentum libero porttitor feugiat elementum. Fusce vel
                turpis ac nulla scelerisque aliquam. Nulla eu sapien est. Cras
                dignissim accumsan lacus, non hendrerit velit aliquam at. Proin
                efficitur lectus bibendum velit interdum volutpat. Nunc vel
                lacus id lectus scelerisque sodales vitae et diam. Nullam vitae
                urna a nisl viverra rutrum rutrum eget dolor. Fusce hendrerit
                ante felis, nec suscipit eros finibus eget. Suspendisse ac
                pellentesque mi, sed hendrerit sem.
              </p>
              <p>
                Pellentesque eget maximus nunc, vel finibus massa. Interdum et
                malesuada fames ac ante ipsum primis in faucibus. Mauris nec
                urna sit amet diam aliquam commodo. Aliquam convallis ut sem in
                sodales. Pellentesque vitae diam vitae leo fringilla volutpat
                dictum vitae sem. Suspendisse potenti. Nunc rhoncus, mi vel
                ullamcorper rutrum, erat velit sodales tellus, vitae blandit
                augue dui eu nisl. Praesent ornare odio ac interdum eleifend.
                Nam consectetur, nunc sed hendrerit sagittis, dolor ipsum
                pellentesque ante, eu laoreet nunc turpis sed justo. Nam non
                mollis elit. Quisque rutrum ac lorem a eleifend. Suspendisse
                quam metus, vulputate ut erat vel, luctus posuere metus. Sed
                pulvinar imperdiet libero et laoreet. Vestibulum ultrices
                vulputate porta. Nunc laoreet feugiat sem. Aliquam sed lectus id
                sapien porta pretium eu non quam.
              </p>
            </JobDescription>
          </Job>
          <Job>
            <Company>
              <CompanyName>Amazon</CompanyName>
              <CompanyLocation>Seattle, WA</CompanyLocation>
            </Company>
            <Position>
              <PositionTitle>Software Development Engineer</PositionTitle>
              <PositionTimeline>June 2012 – November 2014</PositionTimeline>
            </Position>
            <JobDescription>
              <p>TK Roles for this job</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                blandit scelerisque lorem vitae commodo. Duis sed suscipit
                neque. Nulla sem nisl, cursus non ipsum ac, venenatis posuere
                nibh. Etiam quis pellentesque dui, sit amet interdum risus. Sed
                ultrices ligula vel mauris euismod scelerisque. Curabitur eget
                pellentesque nunc. Donec maximus mauris odio, id rhoncus ipsum
                tincidunt non. Aliquam at lectus non enim molestie facilisis sit
                amet nec nisl. Sed a mattis mauris, id malesuada lacus.
              </p>
              <p>
                Nullam leo odio, dapibus nec lectus et, lacinia rutrum lectus.
                Nunc fermentum libero porttitor feugiat elementum. Fusce vel
                turpis ac nulla scelerisque aliquam. Nulla eu sapien est. Cras
                dignissim accumsan lacus, non hendrerit velit aliquam at. Proin
                efficitur lectus bibendum velit interdum volutpat. Nunc vel
                lacus id lectus scelerisque sodales vitae et diam. Nullam vitae
                urna a nisl viverra rutrum rutrum eget dolor. Fusce hendrerit
                ante felis, nec suscipit eros finibus eget. Suspendisse ac
                pellentesque mi, sed hendrerit sem.
              </p>
            </JobDescription>
          </Job>
          <Job>
            <Company>
              <CompanyName>Molex</CompanyName>
              <CompanyLocation>Little Rock, AR</CompanyLocation>
            </Company>
            <Position>
              <PositionTitle>Software Developer, Intern</PositionTitle>
              <PositionTimeline>September 2010 – May 2011</PositionTimeline>
            </Position>
            <JobDescription>
              <p>
                Pellentesque eget maximus nunc, vel finibus massa. Interdum et
                malesuada fames ac ante ipsum primis in faucibus. Mauris nec
                urna sit amet diam aliquam commodo. Aliquam convallis ut sem in
                sodales. Pellentesque vitae diam vitae leo fringilla volutpat
                dictum vitae sem. Suspendisse potenti. Nunc rhoncus, mi vel
                ullamcorper rutrum, erat velit sodales tellus, vitae blandit
                augue dui eu nisl. Praesent ornare odio ac interdum eleifend.
                Nam consectetur, nunc sed hendrerit sagittis, dolor ipsum
                pellentesque ante, eu laoreet nunc turpis sed justo. Nam non
                mollis elit. Quisque rutrum ac lorem a eleifend. Suspendisse
                quam metus, vulputate ut erat vel, luctus posuere metus. Sed
                pulvinar imperdiet libero et laoreet. Vestibulum ultrices
                vulputate porta. Nunc laoreet feugiat sem. Aliquam sed lectus id
                sapien porta pretium eu non quam.
              </p>
            </JobDescription>
          </Job>
        </Jobs>
      </Section>
      <Section>
        <h1>Education</h1>
        <Jobs>
          <Job>
            <Company>
              <CompanyName>University of Arkansas at Little Rock</CompanyName>
              <CompanyLocation>Little Rock, AR</CompanyLocation>
            </Company>
            <Position>
              <PositionTitle>Mathematics, B.S.</PositionTitle>
              <PositionTimeline>August 2008 – May 2012</PositionTimeline>
            </Position>
            <Position>
              <PositionTitle>Computer Science, B.S.</PositionTitle>
              <PositionTimeline>August 2008 – May 2012</PositionTimeline>
            </Position>
          </Job>
        </Jobs>
      </Section>
    </div>
  );
};

export default Resume;
