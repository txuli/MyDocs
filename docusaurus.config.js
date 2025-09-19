// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'txuli', // Usually your GitHub org/user name.
  projectName: 'txuli-docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'React',
        path: 'React',
        routeBasePath: 'React',
        sidebarPath: require.resolve('./sidebarsReact.js'),
        // ... other options
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'MySql',
        path: 'MySql',
        routeBasePath: 'MySql',
        sidebarPath: require.resolve('./sidebarsMySql.js'),
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'php',
        path: 'php',
        routeBasePath: 'php',
        sidebarPath: require.resolve('./sidebarsPhp.js'),
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'JS',
        path: 'JS',
        routeBasePath: 'JS',
        sidebarPath: require.resolve('./sidebarsjs.js'),
        // ... other options
      },
    ],
  ],
  
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
         
          // Please change this to your repo.

        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.

        },
        theme: {
          customCss: './src/css/custom.css',
          
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'My Docs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Information',
          },

          {

            to: '/React/intro', // To highlight the navbar item, you must link to a document, not a top-level directory
            position: 'left',
            label: 'React',
            activeBaseRegex: `/React/`,
          },
          {

            to: '/MySql/intro', // To highlight the navbar item, you must link to a document, not a top-level directory
            position: 'left',
            label: 'MySql',
            activeBaseRegex: `/MySql/`,
          },
          {

            to: '/php/init', // To highlight the navbar item, you must link to a document, not a top-level directory
            position: 'left',
            label: 'Php',
            activeBaseRegex: `/php/`,
          },
          {
            href: 'https://github.com/txuli',
            label: 'My GitHub',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          
          
          
        ],
        copyright: `Copyright © ${new Date().getFullYear()} .`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['php'],
      },
    }),
};

export default config;
