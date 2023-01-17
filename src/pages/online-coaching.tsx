import { Box, Link, List, ListItem, Typography, useTheme } from '@mui/material';
import Grid from '@mui/system/Unstable_Grid';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Divider } from '../components/molecules/Divider';
import { SmallHero } from '../components/organisms/SmallHero';
import { DefaultContainer } from '../components/pagelayout/DefaultContainer';
import { Layout } from '../components/pagelayout/Layout';
import useIsMobile from '../hooks/useMobile';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { getRouteUrl, HeaderRoutesEnum } from '../types/HeaderRoute';
import { Cards } from '../components/organisms/Cards';

export const onlinecoaching = () => {
    const theme = useTheme();
    const { isMobile } = useIsMobile();

    return (
        <Layout>
            <SmallHero
                image={
                    <StaticImage
                        src="../images/pages/stairs.jpg"
                        alt="Hero"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.2)' }}
                    />
                }
                title="Online coaching"
                subtitle="Ga zelfstandig aan de slag met het <span>verbeteren van je gezondheid</span>, vergroten van spiermassa en/of het reduceren van je vetmassa."
                linkTo={{
                    link: '#succesverhalen',
                    text: 'Of, ga naar succesverhalen',
                }}
            />

            <Box sx={{ backgroundColor: theme.palette.grey[100] }}>
                <DefaultContainer maxWidth="lg" sx={{ textAlign: 'center' }} doublePadding>
                    <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main }}>
                        First things first
                    </Typography>
                    <Typography variant="h4" component="h2" sx={{ color: theme.palette.common.white, mb: 5 }}>
                        Waarom eigenlijk online coaching?
                    </Typography>
                    <Typography variant="body1" sx={{ color: theme.palette.common.white, mb: 5 }}>
                        Wil jij graag zelfstandig aan de slag met het verbeteren van je gezondheid, het vergroten van jouw spiermassa en het reduceren
                        van vetmassa, maar weet jij zelf niet hoe je dit op de meest effectief mogelijke manier kan behalen en woon je te ver uit de
                        buurt van Utrecht? Dan is online coaching de oplossing voor jou!
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: theme.palette.common.white,
                            mb: 5,
                            display: 'flex',
                            alignItems: isMobile ? 'inherit' : 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <TrendingFlatIcon sx={{ color: theme.palette.secondary.main, mr: 1 }} />
                        Doelgroep: geschikt voor beginners en gevorderden
                    </Typography>

                    <Divider />

                    <Grid container spacing={isMobile ? 0 : 5} sx={{ py: isMobile ? 5 : 10, textAlign: 'left' }}>
                        <Grid xs={12} md={6}>
                            <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main, mb: 2 }}>
                                Wat je krijgt
                            </Typography>
                            <Typography variant="body1" sx={{ color: theme.palette.common.white, mb: 5 }}>
                                Je krijgt een <span>op maat gemaakt voedings-en trainingsschema</span>. Door de tijd heen zullen deze schema's
                                meegroeien met jouw progressie, zodat je uiteindelijk met de best mogelijke schema's kan werken wat aansluit op jouw
                                doelen en wensen.
                                <br />
                                <br />
                                Wij gaan gezamenlijk het traject aan, waarin ik jou de <span>handvaten</span> geef van de belangrijkste elementen,
                                zodat jij zelfstandig aan de slag kan en mij achter de hand hebt voor als je er niet meer uitkomt of behoefte hebt aan
                                een stukje coaching.
                                <br />
                                <br />
                                <span>Belangrijke elementen zijn bijvoorbeeld:</span>
                                <br />
                                <b>1.</b> experimenteren met gezonde en lekkere voedingsbronnen.
                                <br />
                                <b>2.</b> Consistent een trainingsschema volgen en je progressie bijhouden.
                                <br />
                                <b>3.</b> Het creëren van een vast slaapritme en opzoek gaan naar een dagelijks stuk ontspanning.
                            </Typography>
                            <Typography variant="body1" sx={{ color: theme.palette.common.white, mb: 2 }}>
                                Als je met deze elementen een tijdje actief mee bezig bent ga je <span>regelmaat</span> creëren. Hier komt een ritme
                                uit voor wat uiteindelijk evalueert naar goede gewoontes.
                            </Typography>
                        </Grid>
                        <Grid xs={12} md={6}>
                            <StaticImage src="../images/schemes/foodscheme.jpg" alt="Voedingsschema" style={{ margin: '40px' }} />
                        </Grid>
                    </Grid>

                    <Divider />

                    <Box sx={{ color: theme.palette.common.white, pt: isMobile ? 5 : 10 }}>
                        <Grid container spacing={isMobile ? 0 : 5} sx={{ textAlign: 'left' }}>
                            <Grid xs={12} md={6}>
                                <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main, mb: 1 }}>
                                    Nog even alles op een rijtje
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 5 }}>
                                    <List sx={{ listStyleType: isMobile ? '' : 'decimal' }}>
                                        <ListItem sx={{ display: 'list-item' }}>Hulp bij het creëren en realiseren van jouw doelen.</ListItem>
                                        <ListItem sx={{ display: 'list-item' }}>
                                            Zelfstandig aan de slag met jouw doelen onder professioneel begeleiding.
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item' }}>Persoonlijk voedingsschema</ListItem>
                                        <ListItem sx={{ display: 'list-item' }}>Persoonlijk trainingsschema</ListItem>
                                        <ListItem sx={{ display: 'list-item' }}>Programmering van jouw training</ListItem>
                                        <ListItem sx={{ display: 'list-item' }}>Check-ups</ListItem>
                                        <ListItem sx={{ display: 'list-item' }}>Whatsapp/mail contact</ListItem>
                                        <ListItem sx={{ display: 'list-item' }}>Feedback op ingestuurde techniek video's</ListItem>
                                    </List>
                                </Typography>
                            </Grid>
                            <Grid xs={12} md={6}>
                                <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main, mb: 1 }}>
                                    Na inschrijving
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 5 }}>
                                    Op het moment dat je een online coaching pakket afneemt zal er contact opgenomen worden door middel van
                                    videobellen. Als beide partijen groen licht geven krijg je een vragenlijst opgestuurd en op basis hiervan zal er
                                    een online kennismakingsgesprek (intake) plaatsvinden. De intake bedraagt eenmalig €50. Inschrijfkosten zijn €30.
                                </Typography>
                                <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main, mb: 1 }}>
                                    Extra info
                                </Typography>
                                Bekijk <Link href={getRouteUrl(HeaderRoutesEnum.PACKAGES) + '#online-coaching'}>hier</Link> de prijzen of{' '}
                                <Link href={getRouteUrl(HeaderRoutesEnum.CONTACT)}>neem contact op.</Link>
                            </Grid>
                        </Grid>
                    </Box>
                </DefaultContainer>
            </Box>

            <Box py={5}>
                <DefaultContainer>
                    <Typography variant="h2" sx={{ color: theme.palette.primary.main, textAlign: 'center' }} id="succesverhalen">
                        Succesverhalen
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography variant="body1" sx={{ color: theme.palette.secondary.main, textAlign: 'center' }}>
                            Hieronder vind je een aantal voorbeelden van deelnemers die ik (heb) begeleid.
                        </Typography>
                    </Box>

                    <Divider />

                    <Cards
                        cards={[
                            {
                                title: 'Mirron',
                                subtitle: 'Starter van het programma',
                                image: <StaticImage src="../images/growth/mirron.jpg" alt="Mirron progressie" />,
                                package: 'online coaching',
                                text: '"Sem van Balanced Lifestyle heeft mij zeer goed op weg geholpen met mijn fitness journey! Door hem heb ik de juiste motivatie gekregen en hij heeft een gepersonaliseerd schema opgesteld met de juiste voeding. Heel tevreden dus!"',
                            },
                            {
                                title: 'Wiebe',
                                subtitle: 'Meer dan 1 jaar lid',
                                image: <StaticImage src="../images/growth/wiebe.png" alt="Wiebe progressie" />,
                                package: 'personal training',
                                text: '"In de afgelopen periode heb ik samen met Sem erg veel stappen gemaakt. Ik ben sterker geworden en meer dan 20kg afgevallen."',
                            },
                        ]}
                    />
                </DefaultContainer>
            </Box>
        </Layout>
    );
};

export default onlinecoaching;
