module.exports = {
  siteMetadata: {
    title: `avlindfors`,
    description: `Personal website and resume of Software Engineer Alexander Lindfors`,
    author: `Alexander Lindfors`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `poppins\:300,300i,400,400i,500,600,700`,
          `source sans pro\:300,300i,,400,500,600,700`,
        ],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "avlindfors",
        short_name: "avlindfors",
        start_url: "/",
        background_color: "#FFFFFF",
        theme_color: "#FFFFFF",
        display: "standalone",
        icon: "src/images/icon.png",
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
