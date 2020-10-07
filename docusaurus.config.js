module.exports = {
  title: 'EzGitDoc',
  tagline: 'documentation',
  url: 'https://trolit.github.io',
  baseUrl: '/EzGitDoc-documentation/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.png',
  organizationName: 'trolit', // Usually your GitHub org/user name.
  projectName: 'EzGitDoc-documentation', // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: false,
    navbar: {
      title: 'EzGitDoc - docs'
    },
    footer: {
      style: 'dark',
      copyright: `EzGitDoc documentation built with Docusaurus`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/trolit/EzGitDoc-documentation/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
