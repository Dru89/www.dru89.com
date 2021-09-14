import { Helmet } from "react-helmet";

export interface MetatagsProps {
  title?: string;
  description?: string;
}

const DEFAULT_DESCRIPTION =
  "Drew Hays: Principal Software Developer & Software Architect in Seattle.";

const Metatags = ({
  title = "",
  description = DEFAULT_DESCRIPTION,
}: MetatagsProps): JSX.Element => {
  const titleString = `${title} // drew hays`.trim();
  return (
    <Helmet>
      <title>{titleString}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta name="theme-color" content="#183152" />

      {/* Twitter Stuff */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={titleString} />
      <meta name="twitter:creator" content="@dru89" />
      <meta name="twitter:image" content="https://www.dru89.com/img/me.jpg" />

      {/* OpenGraph Stuff */}
      <meta property="og:title" content={titleString} />
      <meta property="og:url" content="https://www.dru89.com/" />
      <meta property="og:image" content="https://www.dru89.com/img/me.jpg" />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Drew Hays" />

      {/* TODO: favicon stuff */}
      {/* 
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/img/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        href="/img/favicon-32x32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="/img/favicon-16x16.png"
        sizes="16x16"
      />
      <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#24d05a" />
      <link rel="shortcut icon" href="/img/favicon.ico" />
      */}

      {/* TODO: manifest stuff */}
      {/*
      <link rel="manifest" href="/img/manifest.json" />
      */}
    </Helmet>
  );
};

export default Metatags;
