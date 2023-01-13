import styled from "@emotion/styled";
import {
  faGithub,
  faTwitter,
  faInstagram,
  faLinkedin,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type SocialLink = { url: string; service: string; icon: IconDefinition };

const links: SocialLink[] = [
  { url: "https://github.com/dru89", icon: faGithub, service: "GitHub" },
  { url: "https://twitter.com/dru89", icon: faTwitter, service: "Twitter" },
  {
    url: "https://instagram.com/dru89",
    icon: faInstagram,
    service: "Instagram",
  },
  {
    url: "https://linkedin.com/in/ashays",
    icon: faLinkedin,
    service: "LinkedIn",
  },
];

const SocialLinks = styled.ul({
  display: "flex",
  listStyleType: "none",
  justifyContent: "center",
  margin: 0,
  padding: 0,
  li: {
    display: "inline-block",
    margin: 0,
    padding: 0,
  },
  a: {
    color: "#f5f5f5",
  },
});

const IconWrapper = styled.span({
  display: "inline-block",
  width: "1em",
  height: "1em",
});

const SocialIcon = styled.a({
  display: "block",
  textAlign: "center",
  fontSize: "1.75rem",
  padding: 8,
  margin: 2,
  lineHeight: 1,
  borderRadius: "50%",
  color: "#f5f5f5",
  "&:hover": {
    backgroundColor: "#e1e6fa36",
  },
});

function SocialIcons(): JSX.Element {
  return (
    <SocialLinks>
      {links.map(({ url, icon, service }) => (
        <li key={url}>
          <SocialIcon href={url} target="_blank" rel="noreferrer">
            <IconWrapper>
              <FontAwesomeIcon icon={icon} role="img" aria-label={service} />
            </IconWrapper>
          </SocialIcon>
        </li>
      ))}
    </SocialLinks>
  );
}

export default SocialIcons;
