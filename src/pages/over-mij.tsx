import { Box, Grid, Typography, useTheme } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Helmet } from 'react-helmet';
import { DefaultContainer } from '../components/pagelayout/DefaultContainer';
import { Layout } from '../components/pagelayout/Layout';
import useIsMobile from '../hooks/useMobile';

export const aboutme = (props: any) => {
    const theme = useTheme();
    const { isMobile, isTabletOrSmaller } = useIsMobile();

    return (
        <>
            <Helmet>
                <title>Over mij - Balanced Lifestyle</title>
            </Helmet>
            <Layout location={props.location}>
                <Box sx={{ position: 'relative', background: theme.palette.grey[100], pt: isMobile ? 10 : 20, pb: 0 }}>
                    <DefaultContainer maxWidth="lg" sx={{ mb: isTabletOrSmaller ? 0 : 0 }}>
                        <Grid container spacing={5}>
                            <Grid item xs={12} md={8} sx={{ textAlign: isMobile ? 'center' : 'left' }}>
                                <Box sx={{ color: 'white' }}>
                                    <Typography variant="h1" component="h1" sx={{ mb: 3 }}>
                                        Over mij
                                    </Typography>
                                    <Typography variant="subtitle2" sx={{ mb: 3, color: theme.palette.secondary.main }}>
                                        Mijn naam is Sem van de Griendt. Oprichter van <b>Balanced lifestyle</b>.
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4} sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                                <Box
                                    sx={{
                                        borderRadius: '100%',
                                        overflow: 'hidden',
                                        position: isTabletOrSmaller ? 'inherit' : 'absolute',
                                        bottom: isTabletOrSmaller ? '0' : '-200px',
                                        border: isTabletOrSmaller ? 'none' : '5px solid white',
                                    }}
                                >
                                    <StaticImage
                                        width={300}
                                        height={300}
                                        src="../images/aboutme.jpg"
                                        alt="Sem van de Griendt"
                                        placeholder="blurred"
                                        loading="eager"
                                        style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </DefaultContainer>
                </Box>

                <DefaultContainer maxWidth="lg">
                    <Box sx={{ maxWidth: isTabletOrSmaller ? '100%' : '70%' }}>
                        <Typography variant="body1">
                            Balanced lifestyle in ontstaan uit een persoonlijk verhaal. Ik heb jaren met extreme huidklachten rondgelopen. De milde
                            huidklachten ontstonden toen ik 14 was. In het begin maakte ik mij weinig zorgen en was ik ervan overtuigd dat de
                            pubertijd de veroorzaker was van mijn huidproblemen. 3 Jaar later, tientallen doktersbezoeken en antibioticakuren verder
                            werden mijn problemen niet minder, maar juist erger. Mijn milde huidklachten ontwikkelden zich tot zeer ernstige
                            huidklachten. De angst voor chronische klachten nam toe. Evengoed als mijn onzekerheid in mijn dagelijks leven. Afgezien
                            van fysieke klachten leed ik voornamelijk mentale klachten, zoals onzekerheid en een vertekend zelfbeeld.
                            <br />
                            <br />
                            De mentale klachten ontstonden door onwetendheid. Keer op keer falen zonder enige vooruitgang te boeken. Ik leefde in een
                            vicieuze cirkel. Waar ik 4 jaar voor nodig heb gehad om uit te komen. Op eigen kracht zonder enige hulp van de medische
                            wereld kreeg ik kennis van uitweg. Een duurzame, diervriendelijke uitweg En daarnaast ook bijdraagt aan jouw gezondheid,
                            fysiek en mentaal. De kans op hart -en vaatziektes, alzheimer en diabetes type 2 doet verlagen. Balans creëert in jouw
                            hormoonregeling. En jouw lichaam meer energie gaat geven dan je ooit zou kunnen voorstellen.
                            <br />
                            <br />
                            Na 3 weken plantaardig te hebben gegeten werd ik op een zaterdagochtend wakker. De wekker ging en ik sprong uit bed. Ik
                            voelde een bepaalde vorm van energie die ik nog nooit eerder had gevoeld. Het voelde goed, maar ook gek. Het voelde alsof
                            mijn lichaam op een andere vorm van energie was overgegaan. Ik ben na het ontbijt naar de sportschool gegaan en was
                            sterker dan ooit tevoren. Ik was niet te stoppen die dag. Zelfs aan het einde van die dag voelde ik deze bron van energie
                            nog. Ik sliep die nacht perfect. Ik werd de volgende ochtend wakker. Het was een herhaling van de dag ervoor. Deze cyclus
                            is nooit meer opgehouden. Tot op de dag van vandaag.
                            <br />
                            <br />
                            Naast de enorme mentale switch boekte mijn huid ook enorm voortuitgang. Na een maand waren de resultaten al beter dan de 4
                            jaar ervoor. Na een 18 maanden was ik verlost van mijn ernstige onverklaarbare huidproblemen (SOLK). Ik realiseerde mij
                            dat het fundamentele probleem van binnenuit kwam. En opgelost moest worden van binnenuit. Oftewel door voeding. Mijn dieet
                            bestond voornamelijk uit dierlijke producten en weinig vezels. Sinds ik dit heb omgegooid stond mijn leven binnen no-time
                            op zijn kop. In de meest positieve zin. Ik zou jou graag ook dit gevoel laten ervaren. En laten inzien dat een plantaardig
                            bestaan, het beste bestaan is.
                            <br />
                            <br />
                            Na 3 jaar vegan te zijn geweest heb ik vlees van een goede oorsprong toegevoegd aan mijn voedingspatroon. De beweegrede
                            komt voor uit de overtuiging dat goed vlees het gezondste product op de planeet is en boordevol hoogkwalitatief eiwitten,
                            vitamines en mineralen zit. Mijn huid reageerde hier zelfs goed en ik voelde dat de kwaliteit van mijn leven vooruitging
                            evengoed als mijn sportprestaties.
                            <br />
                            <br />
                            <Box sx={{ color: theme.palette.secondary.main }}>
                                Mijn droom is om mensen fitter, sterker en blijer te maken door hen de handvaten te geven van een bewuster en gezond
                                bestaan. Met minder dierlijke producten, van slechte oorsprong en met meer plantaardige producten en dierlijke
                                producten van goede oorsprong. Mijn missie is niet om jou 100% te laten leven zoals ik dat doe, maar mijn missie is om
                                jou bewust te maken van wat je eet en je goede gewoontes aan te leren, zodat jij jezelf kan redden in de toekomst en
                                positief terug kan kijken op je eigen keuzes en acties.
                            </Box>
                            <br />
                            <br />
                            <b>Waar wacht je nog op?</b>
                        </Typography>
                    </Box>
                </DefaultContainer>
            </Layout>
        </>
    );
};

export default aboutme;
