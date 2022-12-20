import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Heading } from '../components/molecules/Heading';
import { DefaultContainer } from '../components/pagelayout/DefaultContainer';
import { Layout } from '../components/pagelayout/Layout';

export const onlinecoaching = () => {
    return (
        <Layout>
            <Heading
                title="Online coaching"
                subtitle="Wil jij graag zelfstandig aan de slag met het verbeteren van je gezondheid, het vergroten van jouw spiermassa en het reduceren van vetmassa, maar weet jij zelf niet hoe je dit op de meest effectief mogelijke manier kan behalen en woon je te ver uit de buurt van Utrecht? Dan is online coaching de oplossing voor jou!"
            />
            <DefaultContainer maxWidth="lg">
                <StaticImage src="../images/growth/mirron.jpg" alt="Mirron progressie"  />
            </DefaultContainer>
        </Layout>
    );
};

export default onlinecoaching;
