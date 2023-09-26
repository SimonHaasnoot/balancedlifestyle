import { projectVariables } from './src/project';

module.exports = {
    plugins: [
        'gatsby-plugin-top-layout',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-mui-emotion',
        'gatsby-plugin-react-helmet',
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        'gatsby-plugin-netlify',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-preload-fonts',
        'gatsby-plugin-pnpm',
        'gatsby-plugin-netlify-cms',
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: [
                    projectVariables.GOOGLE_ANALYTICS_KEY, // Google Analytics / GA
                ],
                pluginConfig: {
                    head: false,
                    respectDNT: true,
                    exclude: ['/preview/**', '/do-not-track/me/too/'],
                },
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/gatsby-icon.png',
            },
        },
        {
            resolve: 'gatsby-plugin-sitemap',
            options: {
                excludes: ['/404', '/bedankt'],
                output: '/',
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${__dirname}/blog`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            plugins: ['gatsby-remark-typescript'],
        },
    ],
    siteMetadata: {
        title: projectVariables.COMPANY_NAME,
        description: projectVariables.COMPANY_DESCRIPTION,
        author: projectVariables.AUTHOR,
        siteUrl: projectVariables.COMPANY_URL,
    },
};
