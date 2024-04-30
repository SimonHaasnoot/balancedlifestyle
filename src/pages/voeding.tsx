import { Box, Typography, useTheme } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Block } from '../components/molecules/Block';
import { SmallHero } from '../components/organisms/SmallHero';
import { DefaultContainer } from '../components/pagelayout/DefaultContainer';
import { Layout } from '../components/pagelayout/Layout';
import useIsMobile from '../hooks/useMobile';

export const FoodPage = (props: any) => {
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
                    title="Voeding"
                    subtitle="Een persoonlijk voedingsplan gebaseerd op jouw doelen en leefstijl.
                    Geen Jojo effect meer, maar een blijvend en makkelijke manier voor een uitgebalanceerd eetpatroon.
                    Dit alles in onze eigen app!"
                />

                <Box sx={{ background: theme.palette.grey[100] }} component="section">
                    <DefaultContainer maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography variant="subtitle1" sx={{ mb: 5, color: theme.palette.secondary.main }}>
                            Onze visie
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: 2, mb: 5, color: theme.palette.common.white }}>
                            <StaticImage
                                src="../images/meat/koe3.jpg"
                                alt="Vlees"
                                placeholder="blurred"
                                style={{ width: '100%', height: 'auto', maxWidth: '50%', float: 'right', margin: isMobile ? '8px' : '20px' }}
                            />
                            Tal van nieuwe extreme diëten die worden gepresenteerd als dé oplossing voor een betere gezondheid: koolhydraatarm,
                            vetarm, keto, veganistisch, paleo, carnivoor, en ga zo maar door. Het probleem van deze moderne dieetvormen is het
                            uitsluiten van voedingsgroepen, wat het risico vergroot op het missen van essentiële voedingsstoffen en hoogwaardige
                            eiwitten.
                            <br />
                            <br />
                            Bij <span>Balanced lifestyle</span> streven we naar balans. Wij sluiten geen enkele voedingsgroep uit en streven naar
                            voeding van moeder natuur. Producten, zoals vlees, noten, groenten en fruit worden bij voorkeur gekocht van een lokale
                            (bio)boerderij die los staan van de intensieve veehouderij. Hierdoor dragen wij niet bij aan de veeteeltindustrie en de
                            massaproductie.
                            <br />
                            <br />
                            Hetzelfde geldt voor zuivelproducten, zoals kaas en melk. Zuivel uit de supermarkt is gepasteuriseerd, waardoor
                            belangrijke bacteriën worden vernietigd en het moeilijker verteerbaar is voor het lichaam. Als gevolg daarvan ontstaat er
                            een hormonale disbalans. Eet afsluitend vlees van een gras gevoerde koeien, met een natuurlijke levensduur en vrij van
                            antibiotica. Overige producten worden bij de supermarkt gekocht van biologische oorsprong.
                            <br />
                            De juiste voeding vormt de basis voor een lichaam in balans!
                        </Typography>
                    </DefaultContainer>
                </Box>

                {/* <Block
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
                /> */}
            </Layout>
        </>
    );
};

export default FoodPage;
