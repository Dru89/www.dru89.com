import React, { useEffect, useState } from "react";

export interface MetatagsProps {
  title?: string;
  description?: string;
}

const DEFAULT_DESCRIPTION = "Drew Hays: Software Developer in Seattle.";

const getMediaQuery = () => window.matchMedia?.("(prefers-color-scheme: dark)");
const getTheme = () => (getMediaQuery()?.matches ? "dark" : "light");

const addListener = (
  mq: MediaQueryList,
  setTheme: (theme: "dark" | "light" | null) => void
): ((e: MediaQueryListEvent) => void) => {
  const cb = (e: MediaQueryListEvent) => {
    setTheme(e.matches ? "dark" : "light");
  };
  if (mq.addEventListener) {
    mq.addEventListener("change", cb);
  } else {
    mq.addListener(cb);
  }
  return cb;
};

const removeListener = (
  mq: MediaQueryList,
  cb: (e: MediaQueryListEvent) => void
): void => {
  if (mq.removeEventListener) {
    mq.removeEventListener("change", cb);
  } else {
    mq.removeListener(cb);
  }
};

const useBrowserTheme = () => {
  const [theme, setTheme] = useState<"dark" | "light" | null>(null);
  useEffect(() => {
    if (theme === null) {
      setTheme(getTheme());
    }

    const mq = getMediaQuery();
    if (mq) {
      const cb = addListener(mq, setTheme);
      return () => removeListener(mq, cb);
    }
    return undefined;
  }, [theme, setTheme]);
  return theme;
};

function Metatags({
  title = "",
  description = DEFAULT_DESCRIPTION,
}: MetatagsProps): JSX.Element {
  const titleString = `${title} // drew hays`.trim();
  const theme = useBrowserTheme();
  return (
    <>
      <title>{titleString}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta
        name="theme-color"
        content={theme === "dark" ? "#132842" : "#C4D7ED"}
      />

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
    </>
  );
}

export default Metatags;
