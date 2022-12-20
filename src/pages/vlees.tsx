import { Box, Divider, Grid, Typography, useTheme } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Block } from '../components/molecules/Block';
import { Heading } from '../components/molecules/Heading';
import { SmallHero } from '../components/organisms/SmallHero';
import { DefaultContainer } from '../components/pagelayout/DefaultContainer';
import { Layout } from '../components/pagelayout/Layout';
import useIsMobile from '../hooks/useMobile';

export const MeatPage = (props: any) => {
    const theme = useTheme();
    const { isMobile, isTabletOrSmaller } = useIsMobile();

    return (
        <>
            <Helmet>
                <title>Vlees - Balanced Lifestyle</title>
            </Helmet>
            <Layout location={props.location}>
                <SmallHero
                    image={
                        <StaticImage
                            src="../images/meat/koe2.jpg"
                            alt="Hero"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.5)' }}
                        />
                    }
                    title="Goed vlees"
                    subtitle="Tegenwoordig zie je door de bomen het bos niet meer als het aankomt op gezonde voeding."
                />

                <Box sx={{ maxWidth: '1000px', mx: 'auto' }}>
                    <DefaultContainer maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography variant="body1" sx={{ lineHeight: 2 }}>
                            Tal van nieuwe extreme diëten die de oplossing zouden moeten zijn voor jouw gezondheid. Koolhydraat/vet arm, keto, vegan,
                            paleo, carnivoor en ga zo maar door. Het probleem met deze nieuwe en hippe dieetvormen is dat het bepaalde voedingsgroepen
                            worden uitgesloten, waardoor de kans wordt vergroot voor het missen van belangrijke voedingsstoffen en kwalitatief hoog
                            eiwit.
                        </Typography>

                        <br />
                        <br />

                        <Typography variant="body1" sx={{ lineHeight: 2 }}>
                            <StaticImage
                                src="../images/meat/koe3.jpg"
                                alt="Vlees"
                                placeholder="blurred"
                                style={{ marginBottom: '16px', width: '100%', height: 'auto', maxWidth: '50%', float: 'right', margin: '20px' }}
                            />
                            <b>
                                Bij Balanced lifestyle staan we voor balans en sluiten we geen enkele voedingsgroep uit. Plantaardig producten worden
                                gekocht bij de supermarkt en dierlijke producten bij een lokale (bio) boerderij. Deze staat los van de veeteelt
                                industrie. Vlees van een goede afkomst staan centraal in een gezond en bewust voedingspatroon. Supermarkt vlees wordt
                                niet gekocht en geconsumeerd, waardoor er niet wordt bijgedragen aan de veeteelt industrie en de productie ervan.
                            </b>
                        </Typography>
                    </DefaultContainer>
                </Box>

                <Box>
                    <Block
                        title="Vlees van biologische boerderij"
                        subtitle="Biologisch"
                        body="
                    De Beekhoeve in Kamerik is een biologische boerderij waar je hoog kwalitatief vlees kan kopen voor een eerlijke
                    prijs. Noem gerust Balanced lifestyle bij een bezoek aan de boerderij! (Van Teylingenweg 172, 3471 GK Kamerik -
                    0348 401 254"
                        staticImage={
                            <StaticImage src="../images/meat/koe1.jpg" alt="Hero" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        }
                    />
                </Box>
            </Layout>
        </>
    );
};

export default MeatPage;
