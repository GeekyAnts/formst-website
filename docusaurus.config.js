module.exports = {
  title: "Formst",
  tagline: "Model-driven Form Library for React",
  url: "https://formstjs.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon-light.png",
  ogImage: "/img/favicon-dark.png",
  organizationName: "geekyants", // Usually your GitHub org/user name.
  projectName: "formst", // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: false,
    navbar: {
      title: "Formst",
      logo: {
        alt: "Formst Logo",
        src: "/img/favicon-light.png",
        srcDark: "/img/favicon-dark.png",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "right",
        },
        {
          href: "https://github.com/formstjs/formst",
          label: "GitHub",
          target: "_blank",
          position: "right",
        },
        {
          href:
            "https://geekyants.com/hire?utm_source=Landing_Page&utm_medium=Hire_Us&utm_campaign=Formst",
          label: "Hire Us",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs/gettingStarted",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/formstjs/formst",
            },
            {
              label: "Contribution Guidelines",
              href:
                "https://github.com/formstjs/formst/blob/master/CONTRIBUTING.md",
            },
          ],
        },
        {
          title: " ",
          items: [
            {
              label: "Built with ❤️ at GeekyAnts ",
              href:
                "https://geekyants.com/?utm_source=Landing_Page&utm_medium=Built_with_love&utm_campaign=Formst",
            },
          ],
        },
      ],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/formstjs/formst-docs",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
