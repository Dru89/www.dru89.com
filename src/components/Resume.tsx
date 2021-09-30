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
  "@media (min-width: 1200px)": {
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

  "@media screen and (max-width: 599.95px)": {
    display: "block",
  },
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

  "@media screen and (max-width: 599.95px)": {
    display: "block",
    margin: "10px 0",
  },
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
            <dd>
              {redacted || !email ? (
                <ContactLink />
              ) : (
                <a href={`mailto:${email}`}>{email}</a>
              )}
            </dd>
          </div>
          {!redacted && phone ? (
            <div>
              <dt>
                <FontAwesomeIcon icon={faPhone} fixedWidth />
              </dt>
              <dd>
                <a href={`tel:${phone.replace(/[^\d+]/g, "")}`}>{phone}</a>
              </dd>
            </div>
          ) : null}
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
              <p>
                Since August 2020, I have led a team of developers focused on
                unifying the development experience for the web organization.
                The team focused on building common tools, platforms, and
                libraries to simplify the development needs on other teams.
                Projects include libraries like a unified design system built
                with React components, tools for simplifying the release
                process, and migrating all of our core services to a Kubernetes
                ecosystem. This team also improved and simplified Web‘s core
                infrastructure, including our CDN layer, nginx-based routing
                system, and services like a dynamic configuration service.
              </p>
              <p>
                In the last few years, I used my role as architect to mentor
                developers across the organization. Spending time diving in and
                understanding Hulu‘s tech stack and teaching others how it works
                as well. We also covered a wider variety of web fundamentals,
                including HTTP requests, cookies, caches (both CDN and browser),
                network requests, and more. Finally, I helped create a forum for
                developers to regularly meet and discuss interesting things in
                the tech space. The group welcomes members from across the
                company to find topics that are interesting to them and host
                discussions.
              </p>
              <p>
                I was the technical lead for many cross-company projects at
                Hulu. I helped lead the initiative for unifying Hulu and Disney
                Streaming‘s Web tech stacks. I also worked on cross-client
                initiatives such as coordinating the development of Hulu‘s Live
                Guide feature, from the design of the API to the client
                architecture across Android, iOS, Web, tvOS, Roku, and Hulu‘s
                browser-based devices.
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
              <p>
                I worked as a software developer on Amazon‘s Marketplace
                services for third-party sellers, focusing on services and
                experiences around managing a merchant‘s active orders and
                returns, as well as integrating with third-party shipping
                companies to provide integrated shipping labels directly in the
                merchant portal. The position focused primarily on building Java
                services and a Perl-based frontend infrastructure.
              </p>
              <p>
                I designed and led several initiatives for Amazon Marketplace. I
                built a service and seller-facing API that would allow merchants
                to process returns in bulk. I also worked on several compliance
                features including enforcing KYC policies and GDPR for European
                merchants.
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
                I developed software to test cables, wrote APIs and drivers for
                other engineers to write their own software for test machines,
                and developed a partitioned global database that synchronizes
                serial numbers and test information across multiple facilities
                using the .NET framework.
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
