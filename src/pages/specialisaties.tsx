import { Box, Button, Link, List, ListItem, Typography, useTheme } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Divider } from '../components/molecules/Divider';
import { SmallHero } from '../components/organisms/SmallHero';
import { DefaultContainer } from '../components/pagelayout/DefaultContainer';
import { Layout } from '../components/pagelayout/Layout';
import useIsMobile from '../hooks/useMobile';
import { getRouteUrl, HeaderRoutesEnum } from '../types/HeaderRoute';
import { SuccessStories } from '../components/organisms/SuccessStories';

export const SpecialisatiesPage = () => {
    const theme = useTheme();
    const { isMobile, isTabletOrSmaller } = useIsMobile();

    return (
        <Layout>
            <SmallHero
                image={
                    <StaticImage
                        src="../images/pages/specialisaties.jpg"
                        alt="Hero"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.2)' }}
                    />
                }
                title="Specialisaties"
                subtitle="Wij bieden naast personal training ook specialisaties aan om u volledig te ondersteunen. Bekijk hieronder de mogelijkheden."
            />

            <Box sx={{ backgroundColor: theme.palette.grey[100] }} component="section">
                <DefaultContainer maxWidth="lg" doublePadding={true}>
                    <Box maxWidth={'1000px'}>
                        <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main, mb: 2 }}>
                            Samenwerking met Ruth Vis – Dietist & Orthomoleculair Therapeut
                        </Typography>
                        <Typography variant="body1" sx={{ color: theme.palette.common.white, mb: 5 }}>
                            Bij Lifestyle & Personal Training Zeist geloven we in een holistische benadering van gezondheid, waarbij voeding, beweging en mindset hand
                            in hand gaan. Daarom werken we samen met Ruth Vis, dietist en orthomoleculair therapeut van Gezondheidspraktijk Vision for
                            Health. Ruth is gespecialiseerd in darmklachten en hormonale disbalans, en kijkt met behulp van bloed- en
                            ontlastingsonderzoek naar onderliggende verstoringen en tekorten.
                            <br />
                            <br />
                            Of je nu wilt focussen op afvallen, spiergroei of het verbeteren van je conditie, voeding is altijd de basis voor het
                            behalen van je doelen. Ruth helpt je om je voedingspatroon optimaal af te stemmen op jouw behoeften, zodat je het beste
                            uit je training haalt. Waar nodig kunnen supplementen als aanvulling dienen op een gezonde voeding, om tekorten aan te
                            vullen en je lichaam optimaal te ondersteunen.
                            <br />
                            <br />
                            Wil je meer weten of heb je vragen? Bezoek de website van Ruth voor meer informatie op{' '}
                            <Link href="https://www.visionforhealth.nl">www.visionforhealth.nl</Link>, of vraag ernaar tijdens je training. We helpen
                            je graag verder naar een gezondere, energiekere versie van jezelf!
                        </Typography>
                    </Box>

                    <Divider />

                    <Box maxWidth={'700px'}>
                        <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main, mb: 2 }}>
                            Bewegingswetenschap
                        </Typography>
                        <Typography variant="body1" sx={{ color: theme.palette.common.white, mb: 5 }}>
                            Wil jij graag zelfstandig (onder aan het aanzien van een coach) aan de slag met het verbeteren van jouw gezondheid, het
                            vergroten van jouw spiermassa en het verlagen van jouw vetmassa, maar woon je hiervoor te ver uit de buurt van Utrecht?
                            Dan is online coaching de oplossing voor jou!
                        </Typography>
                    </Box>

                    <Divider />

                    <Box maxWidth={'700px'}>
                        <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main, mb: 2 }}>
                            Revalidatie
                        </Typography>
                        <Typography variant="body1" sx={{ color: theme.palette.common.white, mb: 5 }}>
                            Blessurepreventie door een een specialist. Verminder (chronische) pijnklachten met de juiste visie een aanpak. Voorkomen
                            is beter dan genezen.
                        </Typography>
                    </Box>

                    <Divider />

                    <Box maxWidth={'700px'}>
                        <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main, mb: 2 }}>
                            Leefstijl coaches
                        </Typography>
                        <Typography variant="body1" sx={{ color: theme.palette.common.white, mb: 5 }}>
                            Breed onderlegde trainers met een passie voor het vak. Gespecialiseerd in leefstijl optimalisatie en het coachen van leden
                            om ongezonde patronen te doorbreken door mentale coaching.
                        </Typography>
                    </Box>
                </DefaultContainer>
            </Box>

            <Box sx={{ background: theme.palette.secondary.main }} component="section">
                <DefaultContainer maxWidth="lg">
                    <Typography variant="h4" component="h3" sx={{ textAlign: 'center', mb: 3, color: theme.palette.common.white }}>
                        Contact opnemen
                    </Typography>
                    <Typography variant="subtitle2" sx={{ textAlign: 'center', mb: 3, color: theme.palette.common.white }}>
                        Heb je vragen over de specialiteiten of wil je een afspraak maken? Neem dan contact met ons op.
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            gap: isTabletOrSmaller ? 3 : 1,
                        }}
                    >
                        <Button variant="contained" href={getRouteUrl(HeaderRoutesEnum.CONTACT)} sx={{ mr: 2, width: isMobile ? '80%' : 'inherit' }}>
                            Neem contact op
                        </Button>
                    </Box>
                </DefaultContainer>
            </Box>

            <SuccessStories />
        </Layout>
    );
};

export default SpecialisatiesPage;
