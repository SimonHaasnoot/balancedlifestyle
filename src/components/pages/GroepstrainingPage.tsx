import { Box, Link, List, ListItem, Typography } from '@mui/material';
import { AppShell } from '../shell/AppShell';
import { Divider } from '../molecules/Divider';
import { SmallHero } from '../organisms/SmallHero';
import { DefaultContainer } from '../pagelayout/DefaultContainer';
import { Layout } from '../pagelayout/Layout';
import useIsMobile from '../../hooks/useMobile';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { getRouteUrl, HeaderRoutesEnum } from '../../types/HeaderRoute';
import { SuccessStories } from '../organisms/SuccessStories';
import Grid from '@mui/material/Grid';
import { OptimizedImage } from '../atoms/OptimizedImage';
import { PhotoGallery } from '../organisms/PhotoGallery';
import type { GalleryPhoto } from '../organisms/PhotoGallery';

import theme from '../../theme';
export const GroupsTrainingPage = (props: any) => {
    const { isMobile } = useIsMobile();

    return (
        <AppShell>
            <Layout>
            <SmallHero
                sideImage
                image={
                    <OptimizedImage
                        src="/images/2026/2026-50.jpg"
                        alt="Groepstraining Zeist"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.3)' }}
                    />
                }
                title="Groepstraining"
                subtitle="Trainen in een kleine, hechte groep in onze moderne studio. Maximaal 6 personen, maximale aandacht. Samen sterker worden onder professionele begeleiding."
                linkTo={{
                    link: getRouteUrl(HeaderRoutesEnum.CONTACT),
                    text: 'Neem contact op',
                }}
            />

            {/* Intro sectie */}
            <Box sx={{ backgroundColor: theme.palette.grey[100] }} component="section">
                <DefaultContainer maxWidth="lg" sx={{ textAlign: 'center' }} doublePadding>
                    <Typography
                        variant="overline"
                        sx={{ color: theme.palette.secondary.main, fontSize: '0.8rem', letterSpacing: 4, display: 'block', mb: 1 }}
                    >
                        Wat is groepstraining?
                    </Typography>
                    <Typography variant="h4" component="h2" sx={{
                        background: `linear-gradient(135deg, ${theme.palette.common.white} 0%, ${theme.palette.secondary.main} 100%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        mb: 1,
                    }}>
                        Samen trainen, samen groeien
                    </Typography>
                    <Box sx={{ width: 60, height: 3, backgroundColor: theme.palette.secondary.main, mx: 'auto', mb: 5, borderRadius: 2 }} />

                    <Typography variant="body1" sx={{ color: theme.palette.common.white, mb: 4, maxWidth: 700, mx: 'auto', lineHeight: 1.9 }}>
                        Met maximaal <span>6 gemotiveerde deelnemers</span> werken we in een hechte groep aan jouw gezondheidsdoelen.
                        De energie van de groep motiveert, terwijl de professionele begeleiding ervoor zorgt dat elke oefening
                        veilig en effectief wordt uitgevoerd. Geen anonieme sportschool, maar een <span>vertrouwde omgeving</span> waar
                        iedereen elkaar kent en pusht.
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: isMobile ? 'flex-start' : 'center', justifyContent: 'center', gap: 1, mb: 5 }}>
                        <TrendingFlatIcon sx={{ color: theme.palette.secondary.main, flexShrink: 0, mt: isMobile ? 0.3 : 0 }} />
                        <Typography variant="body2" sx={{ color: theme.palette.common.white }}>
                            Geschikt voor zowel beginners als gevorderden
                        </Typography>
                    </Box>

                    <Divider />

                    {/* Wat kun je verwachten — tekst links, foto rechts */}
                    <Grid container spacing={isMobile ? 3 : 6} sx={{ py: isMobile ? 5 : 8, textAlign: 'left', alignItems: 'center' }}>
                        <Grid size={{ xs: 12, md: 7 }} >
                            <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main, mb: 2 }}>
                                Wat kun je verwachten?
                            </Typography>
                            <Box sx={{ borderLeft: `3px solid ${theme.palette.secondary.main}`, pl: 3, mb: 3 }}>
                                <Typography variant="body1" sx={{ color: theme.palette.common.white, lineHeight: 1.9 }}>
                                    Elke groepstraining wordt zorgvuldig samengesteld en afgestemd op de groep. We combineren
                                    <span> krachttraining</span>, <span>conditie</span> en <span>functionele oefeningen</span> in een
                                    gevarieerd programma dat je lichaam uitdaagt en sterker maakt.
                                    <br /><br />
                                    Vaste trainingsmomenten zorgen voor <span>routine en structuur</span> in je week. Daarnaast is
                                    voedingsadvies, leefstijl optimalisatie en toegang tot onze app inbegrepen — zodat je ook
                                    buiten de studio de juiste keuzes maakt.
                                    <br /><br />
                                    De sfeer is persoonlijk, motiverend en zonder druk. Of je nu net begint of al jarenlang
                                    traint — bij ons word je <span>gezien en begeleid</span>.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 5 }} >
                            <Box sx={{ borderRadius: 3, overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.3)', height: isMobile ? 280 : 400, position: 'relative', '&:hover .img-zoom': { transform: 'scale(1.05)' } }}>
                                <Box className="img-zoom" sx={{ position: 'absolute', inset: 0, transition: 'transform 0.5s ease' }}>
                                    <OptimizedImage src="/images/2026/2026-51.jpg" alt="Groepstraining sfeer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>

                    <Divider />

                    {/* USP kaarten */}
                    {/* <Box sx={{ py: isMobile ? 5 : 8 }}>
                        <Typography
                            variant="overline"
                            sx={{ color: theme.palette.secondary.main, fontSize: '0.8rem', letterSpacing: 4, display: 'block', mb: 1 }}
                        >
                            Voordelen
                        </Typography>
                        <Typography variant="h4" component="h2" sx={{ color: theme.palette.common.white, mb: 5 }}>
                            Waarom groepstraining?
                        </Typography>

                        <Grid container spacing={isMobile ? 2 : 3}>
                            {[
                                { title: 'Kleine groepen', desc: 'Maximaal 6 deelnemers per sessie. Persoonlijke aandacht gegarandeerd, alsof je een personal trainer deelt.' },
                                { title: 'Professioneel', desc: 'Elke training wordt begeleid door een ervaren coach die jouw techniek bewaakt en je veilig tot resultaat brengt.' },
                                { title: 'Motivatie', desc: 'De energie en dynamiek van samen trainen pusht je om het beste uit jezelf te halen. Samen is leuker én effectiever.' },
                                { title: 'Compleet pakket', desc: 'Inclusief voedingsadvies, leefstijl coaching en toegang tot onze app. Alles wat je nodig hebt voor een gebalanceerde aanpak.' },
                            ].map((item, i) => (
                                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.title}>
                                    <Box sx={{
                                        p: 3,
                                        height: '100%',
                                        borderRadius: 3,
                                        background: 'rgba(90, 183, 219, 0.06)',
                                        border: '1px solid rgba(90, 183, 219, 0.15)',
                                        backdropFilter: 'blur(8px)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            background: 'rgba(90, 183, 219, 0.12)',
                                            transform: 'translateY(-4px)',
                                            boxShadow: '0 8px 30px rgba(90, 183, 219, 0.15)',
                                        },
                                    }}>
                                        <Typography variant="overline" sx={{ color: theme.palette.secondary.main, fontSize: '0.65rem', letterSpacing: 3 }}>
                                            0{i + 1}
                                        </Typography>
                                        <Typography variant="subtitle1" sx={{ color: theme.palette.common.white, mb: 1, fontSize: '1.1rem' }}>
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: theme.palette.common.white, opacity: 0.75, lineHeight: 1.7 }}>
                                            {item.desc}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                    <Divider /> */}

                    {/* Foto galerij */}
                    <Box sx={{ py: isMobile ? 5 : 8 }}>
                        <Typography
                            variant="overline"
                            sx={{ color: theme.palette.secondary.main, fontSize: '0.8rem', letterSpacing: 4, display: 'block', mb: 1 }}
                        >
                            Sfeerimpressie
                        </Typography>
                        <Typography variant="h4" component="h2" sx={{ color: theme.palette.common.white, mb: 5 }}>
                            De energie van samen trainen
                        </Typography>

                        <PhotoGallery
                            photos={[
                                { src: '/images/2026/2026-53.jpg', width: 3600, height: 2400, alt: 'Groepstraining' },
                                { src: '/images/2026/2026-52.jpg', width: 2400, height: 3600, alt: 'Groepstraining' },
                                { src: '/images/2026/2026-54.jpg', width: 2400, height: 3600, alt: 'Groepstraining' },
                                { src: '/images/2026/2026-50.jpg', width: 3600, height: 2400, alt: 'Groepstraining' },
                                { src: '/images/2026/2026-55.jpg', width: 3600, height: 2400, alt: 'Groepstraining' },
                                { src: '/images/2026/2026-51.jpg', width: 3600, height: 2400, alt: 'Groepstraining' },
                            ]}
                        />
                    </Box>
                </DefaultContainer>
            </Box>

            <SuccessStories />
        </Layout>
    </AppShell>
);
};

export default GroupsTrainingPage;
