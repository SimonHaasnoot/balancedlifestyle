import { Box, Divider, Grid, Typography, useTheme } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Block } from '../components/molecules/Block';
import { SmallHero } from '../components/organisms/SmallHero';
import { DefaultContainer } from '../components/pagelayout/DefaultContainer';
import { Layout } from '../components/pagelayout/Layout';
import useIsMobile from '../hooks/useMobile';

export const MeatPage = (props: any) => {
    const theme = useTheme();
    const { isMobile, isTabletOrSmaller } = useIsMobile();

    return (
        <>
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

                <Box sx={{ background: theme.palette.grey[100] }} component="section">
                    <DefaultContainer maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography variant="subtitle1" sx={{ mb: 5, color: theme.palette.secondary.main }}>
                            Mijn visie uitgelegd
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: 2, mb: 5, color: theme.palette.common.white }}>
                            <StaticImage
                                src="../images/meat/koe3.jpg"
                                alt="Vlees"
                                placeholder="blurred"
                                style={{ width: '100%', height: 'auto', maxWidth: '50%', float: 'right', margin: isMobile ? '8px' : '20px' }}
                            />
                            Tal van nieuwe extreme diëten die de oplossing zouden moeten zijn voor jouw gezondheid. Koolhydraat/vet arm, keto, vegan,
                            paleo, carnivoor en ga zo maar door. Het probleem met deze nieuwe en hippe dieetvormen is dat er bepaalde voedingsgroepen
                            worden uitgesloten, waardoor de kans toeneemt op het missen van belangrijke voedingsstoffen en kwalitatief hoog eiwit.
                            <br />
                            <br />
                            Bij <span>Balanced lifestyle</span> staan we voor balans en sluiten we geen enkele voedingsgroep uit. Plantaardige
                            producten worden gekocht bij de supermarkt en dierlijke producten bij een lokale (bio) boerderij die niets van doen heeft
                            met de intensieve veehouderij. Vlees van een goede afkomst staat centraal in een gezond en bewust voedingspatroon. Al het
                            vlees los van een bedrijf wat staat voor goed vlees wordt niet gekocht en geconsumeerd, waardoor er niet wordt bijgedragen
                            aan de veeteelt industrie en de productie ervan. Zoek naar "gras gevoerd"! Als dit niet op de verpakking staat, is het
                            bijna zeker vlees uit de massa productie.
                        </Typography>
                    </DefaultContainer>
                </Box>

                <Block
                    title="Vlees van biologische boerderij"
                    subtitle="Biologisch"
                    body="
                    De Beekhoeve in Kamerik is een biologische boerderij waar je hoog kwalitatief vlees kan kopen voor een eerlijke
                    prijs. Noem gerust Balanced lifestyle bij een bezoek aan de boerderij! (Van Teylingenweg 172, 3471 GK Kamerik -
                    0348 401 254"
                    button={{
                        link: 'https://beekhoeve.eu/?ref=balanced-lifestyle',
                        text: 'Neem gerust een kijkje!',
                    }}
                    staticImage={
                        <StaticImage src="../images/meat/koe1.jpg" alt="Hero" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    }
                />
            </Layout>
        </>
    );
};

export default MeatPage;
