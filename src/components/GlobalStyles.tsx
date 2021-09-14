import { Global } from "@emotion/react";

const GlobalStyles = (): JSX.Element => {
  return (
    <Global
      styles={{
        "html, body, #___gatsby, #gatsby-focus-wrapper": {
          margin: 0,
          height: "100%",
          fontFamily:
            'system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
        },
        p: {
          lineHeight: 1.25,
        },
        "*": {
          boxSizing: "border-box",
        },
      }}
    />
  );
};

export default GlobalStyles;
