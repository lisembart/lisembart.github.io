module.exports = {
  siteMetadata: {
    siteTitle: "Bartosz Lis Portfolio",
    siteTitleAlt: "Portfolio | Bartosz Lis",
    siteHeadline: "Portfolio – Bartosz Lis",
    siteUrl: "https://lisbartosz.com", // Zmień na własną domenę jeśli masz
    siteDescription:
      "Unity Developer specializing in VR/AR with 5+ years of experience. GameDev, Team Leader, XR enthusiast.",
    siteLanguage: "en",
    author: "@bartosz-lis-dev",
    contact: {
      email: "bartosz.lis@icloud.com",
      linkedin: "https://www.linkedin.com/in/bartosz-lis-dev",
    },
  },
  plugins: [
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        siteUrl: "https://bartoszlis.dev", // Zmień na swoją domenę
        manifestSettings: {
          favicon: "../../images//Faviconv2.ico", // Upewnij się, że plik istnieje
          siteName: "Bartosz Lis Portfolio",
          shortName: "Portfolio",
          startUrl: "/",
          backgroundColor: "#ffffff",
          themeColor: "#10b981", // Zielony akcent, możesz zmienić
          display: "minimal-ui",
        },
        contentDirectory: "./content",
        blogSettings: {
          path: "/blog",
          usePathPrefixForArticles: false,
        },
        // googleAnalytics: {
        //   trackingId: "UA-XXXXXX-X",
        //   anonymize: true,
        //   environments: ["production", "development"],
        // },
      },
    },
  ],
};