// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Subset | Documentation',
    tagline: 'Find anything, size it, track it, take action',
    url: 'https://subsetdata.com',
    baseUrl: '/',
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    customFields: {
        'PING_SERVER': process.env.PING_SERVER,
    },

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'subset-data', // Usually your GitHub org/user name.
    projectName: 'subset-docs', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    routeBasePath: '/',
                    sidebarPath: require.resolve('./sidebars.js'),
                },
                blog: {
                    showReadingTime: true,
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                }
            })
        ],
    ],
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'release',
                path: 'release',
                routeBasePath: 'release',
                async sidebarItemsGenerator({ defaultSidebarItemsGenerator, ...args }) {
                    const sidebarItems = await defaultSidebarItemsGenerator(args);
                    return reverseSidebarItems(sidebarItems);
                },
            }
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'learn',
                path: 'learn',
                routeBasePath: 'learn'
            }
        ],
        [
            require.resolve('docusaurus-gtm-plugin'),
            {
                id: 'GTM-KKZ5GGW', // GTM Container ID
            }
        ]
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                logo: {
                    alt: 'Subset',
                    src: 'img/Subset1700NewWithLogo.svg',
                    href: 'https://subsetdata.com'
                },
                items: [
                    {
                        // type: 'doc',
                        to: '/', 
                        type: 'custom-myAwesomeNavbarItem', 
                        docId: 'intro',
                        position: 'left',
                        label: 'Documentation',
                    },
                    { 
                        to: '/blog', 
                        label: 'Blog', 
                        position: 'left',
                        type: 'custom-myAwesomeNavbarItem', 
                    },
                    {
                        to: '/release',
                        label: 'Release Notes',
                        position: 'left',
                        type: 'custom-myAwesomeNavbarItem', 
                    },
                    {
                        to: '/learn',
                        label: 'Learn',
                        position: 'left',
                        type: 'custom-myAwesomeNavbarItem', 
                    }
                ],
            },
            colorMode: {
                defaultMode: 'light',
                disableSwitch: true,
                respectPrefersColorScheme: false,
            },
            // footer: {
            //   style: 'dark',
            //   links: [
            //     {
            //       title: 'Docs',
            //       items: [
            //         {
            //           label: 'Tutorial',
            //           to: '/docs/intro',
            //         },
            //       ],
            //     },
            //     {
            //       title: 'Community',
            //       items: [
            //         {
            //           label: 'Stack Overflow',
            //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            //         },
            //         {
            //           label: 'Discord',
            //           href: 'https://discordapp.com/invite/docusaurus',
            //         },
            //         {
            //           label: 'Twitter',
            //           href: 'https://twitter.com/docusaurus',
            //         },
            //       ],
            //     },
            //     {
            //       title: 'More',
            //       items: [
            //         {
            //           label: 'Blog',
            //           to: '/blog',
            //         },
            //         {
            //           label: 'GitHub',
            //           href: 'https://github.com/facebook/docusaurus',
            //         },
            //       ],
            //     },
            //   ],
            //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
            // },
            prism: {
                theme: lightCodeTheme,
                darkTheme: lightCodeTheme,
            },
            // <meta name="robots" content="max-image-preview:large">
            metadata: [{ name: 'robots', content: 'max-image-preview:large' }],
        }),
};

// https://docusaurus.io/docs/sidebar/autogenerated#customize-the-sidebar-items-generator
function reverseSidebarItems(items) {
    // Reverse items in categories
    const result = items.map((item) => {
        if (item.type === 'category') {
            return { ...item, items: reverseSidebarItems(item.items) };
        }
        return item;
    });
    result.reverse();
    return result.sort((a, b) => { return a.id == 'index' ? -1 : b.id == 'index' ? 1 : 0; });
}

module.exports = config;
