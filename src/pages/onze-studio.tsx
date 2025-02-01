import { Box, Link, List, ListItem, Typography, useTheme } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Divider } from '../components/molecules/Divider';
import { SmallHero } from '../components/organisms/SmallHero';
import { DefaultContainer } from '../components/pagelayout/DefaultContainer';
import { Layout } from '../components/pagelayout/Layout';
import useIsMobile from '../hooks/useMobile';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { getRouteUrl, HeaderRoutesEnum } from '../types/HeaderRoute';
import { SuccessStories } from '../components/organisms/SuccessStories';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

export const onlinecoaching = () => {
    const theme = useTheme();
    const { isMobile } = useIsMobile();

    return (
        <Layout>
            <SmallHero
                image={
                    <StaticImage
                        src="../images/studio/studio-binnen1.jpg"
                        alt="Hero"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.2)' }}
                    />
                }
                title="Onze studio"
                subtitle="Bij Balanced Lifestyle draait alles om jouw persoonlijke groei. In onze exclusieve, professionele trainingsruimte bieden wij een plek waar jouw doelen centraal staan. Geen overvolle sportscholen, maar een veilige ruimte waar we jouw grenzen kunnen verleggen."
                linkTo={{
                    link: '#succesverhalen',
                    text: 'Of, ga naar succesverhalen',
                }}
            />

            <Box sx={{ backgroundColor: theme.palette.grey[100] }} component="section">
                <DefaultContainer maxWidth="lg" sx={{ textAlign: 'center' }} doublePadding={true}>
                    <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main }}>
                        Wat heeft onze studio te bieden
                    </Typography>
                    <Typography variant="h4" component="h2" sx={{ color: theme.palette.common.white, mb: 5 }}>
                        Jouw tweede thuis
                    </Typography>
                    <Typography variant="body1" sx={{ color: theme.palette.common.white, mb: 5 }}>
                        Een studio waar jouw vitaliteit centraal staat – zowel fysiek als mentaal. Samen werken we aan een sterkere en fittere versie
                        van jezelf door middel van krachttraining en conditietraining. Daarnaast hechten we ook waarde aan jouw mentale welzijn, omdat
                        fysieke en mentale kracht hand in hand gaan.
                    </Typography>

                    <Divider />

                    <Grid2 container spacing={isMobile ? 0 : 5} sx={{ py: isMobile ? 5 : 10, textAlign: 'left' }}>
                        <Grid2 xs={12} md={6}>
                            <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main, mb: 2 }}>
                                Persoonlijk verhaal van Kim
                            </Typography>
                            <Typography variant="body1" sx={{ color: theme.palette.common.white, mb: 5 }}>
                                Kim is in <span>twee jaar</span> tijd <span>20 kg</span> afgevallen en heeft haar mindset volledig veranderd. Van
                                onzeker en te zwaar naar <span>zelfverzekerd</span> en <span>sportief</span>.
                                <br />
                                <br />
                                Met <span>krachttraining</span> en <span>persoonlijke begeleiding</span> ontdekte ze de impact van een{' '}
                                <span>gezonde levensstijl</span>. Door balans in haar <span>mentale</span> en <span>fysieke</span> gesteldheid haalt
                                ze nu wekelijks het maximale uit haar leven.
                                <br />
                                <br />
                                Sporten helpt haar om <span>negatieve gevoelens</span> en <span>gedachten</span> te overwinnen. Ze is de baas over
                                haar lichaam en maakt keuzes waar ze <span>trots</span> op is.
                                <br />
                                <br />
                                Ook nu ze haar doelen heeft bereikt, blijft ze terugkomen, omdat ze de <span>waarde</span> ervan inziet. Op goede én
                                slechte dagen krijgt ze dat <span>zetje</span> in de juiste richting.
                            </Typography>
                            <Typography variant="body1" sx={{ color: theme.palette.common.white, mb: 2 }}>
                                Als je met deze elementen een tijdje actief bezig bent ga je <span>regelmaat</span> creëren. Uit regelmaat ontstaat
                                een ritme wat uiteindelijk ontwikkeld naar gewoontes.
                            </Typography>
                        </Grid2>
                        <Grid2 xs={12} md={6}>
                            <StaticImage src="../images/klanten/kim.png" alt="Kim" style={{ margin: '40px' }} />
                        </Grid2>
                    </Grid2>

                    <Divider />

                    <Box sx={{ color: theme.palette.common.white, pt: isMobile ? 5 : 10 }}>
                        <Grid2 container spacing={isMobile ? 0 : 5} sx={{ textAlign: 'left' }}>
                            <Grid2 xs={12} textAlign={'center'}>
                                <Typography variant="h3" sx={{ color: theme.palette.secondary.main, mb: 3 }}>
                                    Kim's transformatie
                                </Typography>
                                <Typography variant="body1" sx={{ color: theme.palette.common.white, mb: 2 }}>
                                    Door het behouden van een gebalanceerde levensstijl voelt Kim zich vrijer dan ooit en is ze gelukkig met haar
                                    lichaam. Laat haar jou inspireren om ook de eerste stap te zetten naar een gezonder en gelukkiger bestaan. Meld je
                                    nu aan en ontdek wat een gebalanceerde levensstijl voor jou kan betekenen. Laat je verrassen; kleine aanpassingen
                                    kunnen grote veranderingen hebben op je leven.
                                </Typography>
                            </Grid2>
                            <Grid2 xs={12} md={6}>
                                <StaticImage
                                    src="../images/klanten/kim2.png"
                                    alt="Hero"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </Grid2>
                            <Grid2 xs={12} md={6}>
                                <StaticImage
                                    src="../images/klanten/kim3.png"
                                    alt="Hero"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </Grid2>
                            <Divider />
                            <Typography variant="body1" textAlign={'center'} sx={{ color: theme.palette.common.white, mb: 2 }}>
                                Bij Balanced Lifestyle, een paramedisch centrum, draait het om een holistische benadering van gezondheid. Niet alleen
                                sporten, maar je gehele levensstijl staat centraal.
                                <br />
                                <br />
                                We creëren een veilige en vertrouwde omgeving, zodat jij zonder druk kunt werken aan de beste versie van jezelf.
                                <br />
                                <br />
                                Naast krachttraining en coaching bieden we begeleiding van een orthomoleculair diëtist. Iedereen is uniek – wat voor
                                de één werkt, is anders voor de ander.
                                <br />
                                <br />
                                Waar een wil is, is een weg. Wij helpen jou die te vinden.
                            </Typography>
                            <Grid2 xs={12} md={6}>
                                <StaticImage
                                    src="../images/studio/studio-binnen2.jpg"
                                    alt="Hero"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </Grid2>
                            <Grid2 xs={12} md={6}>
                                <StaticImage
                                    src="../images/studio/studio-binnen3.jpg"
                                    alt="Hero"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </Grid2>
                        </Grid2>
                    </Box>
                </DefaultContainer>
            </Box>

            <SuccessStories />
        </Layout>
    );
};

export default onlinecoaching;
