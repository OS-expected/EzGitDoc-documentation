module.exports = {
  title: 'EzGitDoc',
  tagline: 'documentation',
  url: 'https://trolit.github.io',
  baseUrl: '/EzGitDoc-documentation/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.png',
  organizationName: 'trolit', // Usually your GitHub org/user name.
  projectName: 'EzGitDoc-documentation', // Usually your repo name.
  plugins: ['docusaurus-plugin-sass'],
  themeConfig: {
    announcementBar: {
      id: 'support_us', // Any value that will identify this message.
      content:
        'If you like EzGitDoc, leave ⭐️ on <a target="_blank" rel="noopener noreferrer" href="https://github.com/trolit/EzGitDoc">GitHub</a> 😄',
      backgroundColor: '#fafbfc', // Defaults to `#fff`.
      textColor: '#091E42', // Defaults to `#000`.
      isCloseable: false, // Defaults to `true`.
    },
    sidebarCollapsible: false,
    navbar: {
      title: 'EzGitDoc',
      logo: {
        alt: 'Site Logo',
        src: 'img/logo.svg',
        href: '/', // Default to `siteConfig.baseUrl`.
        target: '_self', // the external link will open in a new tab, all others in the current one.
      }, 
      items: [
        {
          label: 'Docs',
          position: 'left',
          to: 'docs/'
        },
        {
          label: 'Projects',
          position: 'left',
          href: 'https://github.com/trolit/EzGitDoc/projects'
        },
        {
          label: 'Development',
          position: 'left',
          href: 'https://github.com/trolit/EzGitDoc/projects'
        },
        {
          position: 'right',
          className: 'header-github-link',
          href: 'https://github.com/trolit/EzGitDoc',
          'aria-label': 'GitHub repository'
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `EzGitDoc documentation built with <a target="_blank" rel="noopener noreferrer" href="https://v2.docusaurus.io/">Docusaurus2</a>`,
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
