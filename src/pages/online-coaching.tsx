import { Box } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Block } from '../components/molecules/Block';
import { Heading } from '../components/molecules/Heading';
import { SmallHero } from '../components/organisms/SmallHero';
import { Teaser } from '../components/organisms/Teaser';
import { DefaultContainer } from '../components/pagelayout/DefaultContainer';
import { Layout } from '../components/pagelayout/Layout';

export const onlinecoaching = () => {
    return (
        <Layout>
            <SmallHero
                image={
                    <StaticImage
                        src="../images/pages/stairs.jpg"
                        alt="Hero"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.5)' }}
                    />
                }
                title="Online coaching"
                subtitle="Ga zelfstandig aan de slag met het verbeteren van je gezondheid, vergroten van spiermassa en/of het reduceren van je vetmassa."
            />
            <Box py={5}>
                <Block
                    staticImage={<StaticImage src="../images/growth/mirron.jpg" alt="Mirron progressie" />}
                    title="Mirron"
                    subtitle="Starter van het programma"
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl eu nunc. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl eu nunc. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl eu nunc. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl eu nunc. "
                    maxWidth="lg"
                    disableScale
                />
            </Box>
        </Layout>
    );
};

export default onlinecoaching;
