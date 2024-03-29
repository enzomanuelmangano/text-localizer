// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const theme = require('prism-react-renderer/themes/palenight');
const darkTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Text Localizer',
  tagline: 'A lightweight, fast and flexible way to handle localized strings',
  url: 'https://enzomanuelmangano.github.io',
  baseUrl: '/text-localizer/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'enzomanuelmangano',
  projectName: 'text-localizer',
  trailingSlash: false,
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Text Localizer',
        logo: {
          alt: 'Text Localizer Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction/motivation',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/enzomanuelmangano/text-localizer',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Installation',
                to: '/docs/introduction/installation',
              },
            ],
          },
          {
            title: 'Tutorials',
            items: [
              {
                label: 'React',
                to: '/docs/basic-tutorial/react/setup',
              },
              {
                label: 'React Native',
                to: '/docs/basic-tutorial/react-native',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/enzomanuelmangano/text-localizer',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Text Localizer, Built with Docusaurus.`,
      },
      prism: {
        theme: theme,
        darkTheme: darkTheme,
      },
    }),
};

module.exports = config;
