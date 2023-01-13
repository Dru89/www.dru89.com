import React from "react";

import Container from "../components/Container";
import Metatags from "../components/Metatags";

export function Head(): JSX.Element {
  return <Metatags />;
}

function IndexPage(): JSX.Element {
  return (
    <Container>
      <h1>Hello, there! 👋</h1>
      <p>My name is Drew Hays, and I make stuff on the internet.</p>
      <p>
        I’m currently a Staff Engineer at{" "}
        <a href="https://stripe.com">Stripe</a>. I’ve previously worked at{" "}
        <a href="https://disneyplus.com">Disney Streaming</a>,{" "}
        <a href="https://www.hulu.com">Hulu</a>, and{" "}
        <a href="https://www.amazon.com">Amazon</a>. I was born and raised in{" "}
        <a href="https://goo.gl/maps/hpp1stFCEtJE5HgQ6">Little Rock, AR</a> and
        graduated from the{" "}
        <a href="https://ualr.edu">University of Arkansas at Little Rock</a> in
        2012.
      </p>
      <p>
        In my spare time, I like to cook, watch TV, play video games, and spend
        time with my wife and cat. I also listen to a <i>lot</i> of podcasts.
        I’m a bit obsessive with Apple products and home automation.
      </p>
      <p>
        I primarily like building Web applications and sticking “closer to the
        client” in areas like the application itself, CDNs, and the applications
        and services that live closest to the edge. In the past, though, I’ve
        built more “backend-focused” services. I also probably have half a book
        written on basic networking stuff and nginx that I want to publish on
        this site at some point.
      </p>
      <p>
        You can find me on the internet in a bunch of places, but I’m not as
        “online” as I used to be. If you want to see my half-finished projects
        or open source contributions, you can check out{" "}
        <a href="https://github.com/dru89">GitHub</a>. I’m also on{" "}
        <a href="https://instagram.com/dru89">Instagram</a>,{" "}
        <a href="https://twitter.com/dru89">Twitter</a>, and{" "}
        <a href="https://linkedin.com/in/ashays">LinkedIn</a>. Or if you just
        want to reach me directly, you can{" "}
        <a href="mailto:contact@dru89.com">send me an email</a>.
      </p>
    </Container>
  );
}

export default IndexPage;
