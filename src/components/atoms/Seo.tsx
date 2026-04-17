import React from 'react';
import { Helmet } from 'react-helmet';
import { projectVariables } from '../../project';

interface SeoProps {
    title: string;
    description: string;
    pathname?: string;
    noIndex?: boolean;
}

const localBusinessJsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    name: 'Lifestyle & Personal Training Zeist',
    description: projectVariables.COMPANY_DESCRIPTION,
    url: projectVariables.COMPANY_URL,
    telephone: `+31${projectVariables.COMPANY_PHONE}`,
    email: projectVariables.COMPANY_EMAIL,
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Korte Steynlaan 22',
        addressLocality: 'Zeist',
        postalCode: '3701 EX',
        addressCountry: 'NL',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: 52.0893,
        longitude: 5.2332,
    },
    aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '9.4',
        bestRating: '10',
        ratingCount: '50',
    },
    priceRange: '€€',
    openingHoursSpecification: [
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '07:00',
            closes: '21:00',
        },
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '08:00',
            closes: '14:00',
        },
    ],
    sameAs: [
        projectVariables.COMPANY_LINKEDIN,
    ],
});

export const Seo: React.FC<SeoProps> = ({ title, description, pathname, noIndex }) => {
    const siteUrl = projectVariables.COMPANY_URL;
    const fullTitle = `${title} - ${projectVariables.COMPANY_NAME}`;
    const canonical = pathname ? `${siteUrl}${pathname}` : undefined;
    const isHomepage = pathname === '/';

    return (
        <Helmet htmlAttributes={{ lang: 'nl' }}>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonical || siteUrl} />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonical || siteUrl} />
            <meta property="og:site_name" content={projectVariables.COMPANY_NAME} />
            <meta property="og:locale" content="nl_NL" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />

            {/* Extra */}
            <meta name="geo.region" content="NL-UT" />
            <meta name="geo.placename" content="Zeist" />
            {noIndex && <meta name="robots" content="noindex,nofollow" />}

            {/* JSON-LD only on homepage */}
            {isHomepage && (
                <script type="application/ld+json">{localBusinessJsonLd}</script>
            )}
        </Helmet>
    );
};
