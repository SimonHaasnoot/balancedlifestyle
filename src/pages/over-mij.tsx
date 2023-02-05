import { Box, Button, Grid, Typography, useTheme } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Divider } from '../components/molecules/Divider';
import { DefaultContainer } from '../components/pagelayout/DefaultContainer';
import { Layout } from '../components/pagelayout/Layout';
import useIsMobile from '../hooks/useMobile';
import { getRouteUrl, HeaderRoutesEnum } from '../types/HeaderRoute';

export const aboutme = (props: any) => {
    const theme = useTheme();
    const { isMobile, isTabletOrSmaller } = useIsMobile();
    const [readMore, setReadMore] = useState(false);

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
                                        width: '300px',
                                        height: '300px',
                                    }}
                                >
                                    <StaticImage
                                        src="../images/aboutme3.webp"
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
                            <div>
                                <span>Balanced lifestyle</span> is ontstaan uit een persoonlijk verhaal. Ik heb jaren met extreme huidklachten
                                rondgelopen. De milde huidklachten ontstonden toen ik 15 was. In het begin maakte ik mij weinig zorgen en was ik ervan
                                overtuigd dat de pubertijd de oorzaak was van mijn huidproblemen. 4 jaar later, tal van doktersbezoeken en
                                antibioticakuren verder werden mijn problemen niet minder, maar juist erger. Mijn milde huidklachten ontwikkelden zich
                                tot zeer ernstige huidklachten. De angst voor chronische klachten nam toe. Evengoed als mijn onzekerheid in het
                                dagelijks leven. Naast fysieke klachten ging ik er mentaal ook aan onder door. Het werd een obsessie, waardoor mijn
                                zelfbeeld met tijd snel achteruit ging.
                                <br /> <br />
                                De mentale klachten ontstonden door onwetendheid. Keer op keer falen zonder enige vooruitgang te boeken. Ik leefde in
                                een vicieuze cirkel waar ik 4 jaar voor nodig heb gehad om uit te komen. Op eigen kracht zonder enige hulp van de
                                medische wereld kreeg ik kennis van een uitweg. Mij werd verteld van een duurzame, diervriendelijke uitweg wat
                                daarnaast ook zou bijdragen aan je fysieke en mentale gezondheid. Klinkt bijna te mooi om waard te zijn.
                                <br /> <br />
                            </div>
                            <Box
                                sx={
                                    readMore
                                        ? {
                                              maxHeight: '100%',
                                              overflow: 'visible',
                                              transition: 'max-height 0.5s ease-in-out',
                                          }
                                        : {
                                              'maxHeight': '100px',
                                              'position': 'relative',
                                              'overflow': 'hidden',
                                              'transition': 'max-height 0.5s ease-in-out',
                                              ':after': {
                                                  content: '""',
                                                  position: 'absolute',
                                                  bottom: 0,
                                                  left: 0,
                                                  right: 0,
                                                  height: '100px',
                                                  background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0), #fff 100%)',
                                              },
                                          }
                                }
                            >
                                Na 3 weken plantaardig (vegan) te hebben gegeten werd ik op een zaterdagochtend wakker. De wekker ging en ik sprong
                                uit bed. Ik voelde een bepaalde vorm van energie die ik nog nooit eerder had gevoeld. Het voelde goed, maar ook gek.
                                Het voelde alsof mijn lichaam op een andere vorm van energie was overgegaan. Ik ben na het ontbijt naar de sportschool
                                gegaan en was sterker dan ooit tevoren. Ik was niet te stoppen die dag. Zelfs aan het einde van die dag voelde ik deze
                                bron van energie nog. Ik sliep die nacht perfect. Ik werd de volgende ochtend wakker. Het was een herhaling van de dag
                                ervoor. Deze cyclus is nooit meer opgehouden tot op de dag van vandaag.
                                <br /> <br />
                                Naast de enorme mentale switch boekte mijn huid ook enorm voortuitgang. Na 3 maanden waren de resultaten al beter dan
                                de 4 jaar ervoor. 2 Jaar later was ik verlost van mijn ernstige onverklaarbare huidproblemen (SOLK). Ik realiseerde
                                mij dat het fundamentele probleem van binnenuit kwam, en opgelost moest worden van binnenuit i.p.v. door een pilletje
                                of een zalfje.
                                <br /> <br />
                                <span>
                                    Na 3 jaar vegan te zijn geweest en deze hoek compleet te hebben uitgepluisd ben ik tot de volgende overtuiging
                                    gekomen:
                                </span>{' '}
                                Er bestaat geen perfect dieet. Het beste dieet is hetgeen waar jij de meeste energie uithaalt, je comfortabel bij
                                voelt en je het lekkerst vindt. Sluit geen voedingsgroepen uit, maar zorg dat oorsprong van de voedingsgroepen van zo
                                hoog mogelijk kwaliteit zijn. Zoek voor jezelf waar je intolerant voor bent en probeer de consumptie van deze
                                producten te beperken tot minimaal. Voor mij was dit bijvoorbeeld lactose en varkensvlees.
                                <br /> <br />
                                Mijn dieet bestond voornamelijk uit dierlijke producten uit de supermarkt, een hoop zuivel en weinig groente en fruit.
                                Sinds ik dit heb omgegooid en op de juiste manier ben gaan eten stond mijn leven binnen no-time op zijn kop. In de
                                meest positieve zin. Ik zou jou graag willen laten zien dat het gaat om een leefstijl, waarin balans centraal staat
                                tussen goed vlees en gezonde plantaardige producten, zoals fruit, groenten en noten. Ik zou jou graag ook dit gevoel
                                laten ervaren. En laten inzien dat een gebalanceerd bestaan, het beste bestaan is.
                            </Box>

                            <Box sx={{ mt: 2 }}>
                                <Button variant="outlined" onClick={() => setReadMore(!readMore)} sx={{ color: theme.palette.primary.main }}>
                                    Klik hier om meer te lezen
                                </Button>
                            </Box>
                        </Typography>
                    </Box>
                    <Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: isTabletOrSmaller ? 'column' : 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                mt: isMobile ? 5 : 10,
                                gap: isMobile ? 5 : 0
                            }}
                        >
                            <Box sx={{ width: isTabletOrSmaller ? '100%' : '50%' }}>
                                <Typography variant="h5" sx={{ color: theme.palette.primary.main, textAlign: 'center' }}>
                                    Resultaat voorkant
                                </Typography>
                                <Box sx={{ mt: 2, maxHeight: '500px' }}>
                                    <StaticImage src="../images/Sem/beforeafter1.jpg" alt="Before after foto 1" height={500}/>
                                </Box>
                            </Box>
                            <Box sx={{ width: isTabletOrSmaller ? '100%' : '50%' }}>
                                <Typography variant="h5" sx={{ color: theme.palette.primary.main, textAlign: 'center' }}>
                                    Resultaat achterkant
                                </Typography>
                                <Box sx={{ mt: 2, maxHeight: '500px' }}>
                                    <StaticImage src="../images/Sem/beforeafter2.jpg" alt="Before after foto 2" height={500}/>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </DefaultContainer>

                <Box sx={{ backgroundColor: theme.palette.grey[100], padding: '50px 0' }}>
                    <DefaultContainer maxWidth="lg">
                        <Box sx={{ maxWidth: isTabletOrSmaller ? '100%' : '70%', m: 'auto' }}>
                            <Typography variant="body1" sx={{ color: theme.palette.common.white, lineHeight: 2, textAlign: 'center' }}>
                                "Mijn missie is om mensen fitter, sterker en gelukkiger te maken door hen de handvaten te geven van een gebalanceerde
                                leefstijl. Waarin gezonde voeding centraal staat in combinatie met een vast slaapritme en dagelijkse beweging en
                                ontspanning. Mijn missie is niet om jou 100% te laten leven zoals ik dat doe. Mijn missie is om mijn kennis aan jou
                                over te dragen en jou bewust te laten worden van hetgeen wat jij in jouw lichaam stopt, zodat je jezelf zelfstandig in
                                de toekomst gezond en fit kan houden en positief terug kan kijken op je eigen keuzes en acties."
                            </Typography>
                            <Divider />
                            <Typography variant="h3" sx={{ color: theme.palette.common.white, textAlign: 'center', mt: 5 }}>
                                Waar wacht je nog op?
                            </Typography>
                            {/* // contact button */}
                            <Box sx={{ textAlign: 'center', mt: 5 }}>
                                <Button
                                    variant="outlined"
                                    href={getRouteUrl(HeaderRoutesEnum.CONTACT)}
                                    sx={{ textTransform: 'none', fontSize: '1.2rem' }}
                                >
                                    Neem contact op
                                </Button>
                            </Box>
                        </Box>
                    </DefaultContainer>
                </Box>
            </Layout>
        </>
    );
};

export default aboutme;
