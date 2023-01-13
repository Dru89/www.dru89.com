import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: "https://www.dru89.com",
    title: "www.dru89.com",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-emotion",
    "gatsby-plugin-google-gtag",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "// drew hays",
        short_name: "dru89.com",
        start_url: "/",
        background_color: "#C4D7ED",
        theme_color: "#132842",
        display: "standalone",
        icon: "src/images/logo.svg",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};

export default config;
