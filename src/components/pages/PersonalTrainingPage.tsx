import { Box, Button, Link, List, ListItem, Typography } from '@mui/material';
import { AppShell } from '../shell/AppShell';
import { DefaultContainer } from '../pagelayout/DefaultContainer';
import { Layout } from '../pagelayout/Layout';
import useIsMobile from '../../hooks/useMobile';
import { getRouteUrl, HeaderRoutesEnum } from '../../types/HeaderRoute';
import { SmallHero } from '../organisms/SmallHero';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PsychologyIcon from '@mui/icons-material/Psychology';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Grid from '@mui/material/Grid';
import { SuccessStories } from '../organisms/SuccessStories';
import { OptimizedImage } from '../atoms/OptimizedImage';

import theme from '../../theme';
export const PersonalTrainingPage = (props: any) => {
    const { isMobile, isTabletOrSmaller } = useIsMobile();

    return (
        <AppShell>
            <Layout>
                <SmallHero
                    image={
                        <OptimizedImage src="/images/2026/2026-18.jpg" alt="Personal training bij Lifestyle & Personal Training Zeist" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.4)' }} />
                    }
                    title="Personal training"
                    subtitle="Investeer in jezelf. Wij begeleiden je 1-op-1 naar een sterker, fitter en gezonder lichaam — met een aanpak die volledig op jou is afgestemd."
                    linkTo={{
                        link: '#succesverhalen',
                        text: 'Bekijk succesverhalen',
                    }}
                />

                {/* Photo strip */}
                <Box component="section" sx={{ overflow: 'hidden' }}>
                    <Grid container spacing={0} sx={{ ...(!isMobile && { height: 350 }) }}>
                        {[
                            { src: '/images/2026/2026-pt-1.jpg', alt: 'Personal training begeleiding', ratio: '2 / 3' },
                            { src: '/images/2026/2026-pt-2.jpg', alt: 'Krachttraining sessie', ratio: '3 / 2' },
                            { src: '/images/2026/2026-pt-3.jpg', alt: 'Training op maat', ratio: '3 / 2' },
                            { src: '/images/2026/2026-pt-4.jpg', alt: 'Resultaten bereiken', ratio: '3 / 2' },
                        ].map((img) => (
                            <Grid size={{ xs: 12, md: 3 }} key={img.src} sx={{ ...(!isMobile && { height: '100%' }) }}>
                                <Box sx={{ aspectRatio: isMobile ? img.ratio : undefined, height: isMobile ? undefined : '100%', overflow: 'hidden' }}>
                                    <OptimizedImage src={img.src} alt={img.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Onze aanpak */}
                <Box sx={{ background: theme.palette.primary.main, position: 'relative' }} component="section">
                    <DefaultContainer maxWidth="lg">
                        <Grid container spacing={isMobile ? 4 : 8} alignItems="center">
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main }}>
                                    Onze aanpak
                                </Typography>
                                <Typography variant="h4" component="h2" sx={{ color: theme.palette.common.white, mb: 3 }}>
                                    Persoonlijk, professioneel & resultaatgericht
                                </Typography>
                                <Typography variant="body1" sx={{ color: theme.palette.common.white, lineHeight: 2, mb: 4 }}>
                                    Geen standaard schema's of drukke sportschool. Bij ons train je 1-op-1 in een rustige, professionele studio.
                                    Elke sessie is volledig afgestemd op jouw doelen, niveau en lichaam. Wij combineren krachttraining,
                                    conditie en mobiliteit met persoonlijke aandacht voor voeding, herstel en mindset.
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    {[
                                        { icon: <FitnessCenterIcon />, text: 'Gevarieerde trainingen op maat' },
                                        { icon: <RestaurantIcon />, text: 'Persoonlijk voedingsadvies' },
                                        { icon: <PsychologyIcon />, text: 'Mentale begeleiding & mindset' },
                                        { icon: <TrendingUpIcon />, text: 'Meetbare progressie & resultaten' },
                                    ].map((item) => (
                                        <Box key={item.text} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                            <Box sx={{ color: theme.palette.secondary.main, display: 'flex' }}>{item.icon}</Box>
                                            <Typography variant="body1" sx={{ color: theme.palette.common.white }}>{item.text}</Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </Grid>
                            {!isMobile && (
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Box sx={{ borderRadius: 3, overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.3)' }}>
                                        <OptimizedImage src="/images/2026/2026-pt-1.jpg" alt="Personal training begeleiding" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                                    </Box>
                                </Grid>
                            )}
                        </Grid>
                    </DefaultContainer>
                </Box>

                {/* Wat je kan verwachten */}
                <Box sx={{ background: theme.palette.grey[100], position: 'relative' }} component="section">
                    <DefaultContainer maxWidth="lg">
                        <Grid container spacing={isMobile ? 4 : 8} alignItems="center">
                            {!isMobile && (
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Box sx={{ borderRadius: 3, overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.3)' }}>
                                        <OptimizedImage src="/images/2026/2026-pt-2.jpg" alt="Training resultaten" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                                    </Box>
                                </Grid>
                            )}
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main }}>
                                    Wat je kan verwachten
                                </Typography>
                                <Typography variant="h4" component="h2" sx={{ color: theme.palette.common.white, mb: 3 }}>
                                    Meer dan alleen sporten
                                </Typography>
                                <Typography variant="body1" sx={{ color: theme.palette.common.white, lineHeight: 2, mb: 3 }}>
                                    Onze trainingen bestaan uit kracht, conditie en mobiliteitsoefeningen in combinatie met kickboksen en technieklessen.
                                    Maar we gaan verder dan alleen bewegen:
                                </Typography>
                                <List sx={{ p: 0 }}>
                                    {[
                                        'Gezondere eetgewoontes aanleren',
                                        'Beter slaapritme creëren',
                                        'Stressniveau verlagen',
                                        'Bewuste keuzes maken — ook buitenshuis',
                                        'Positieve verandering in mindset',
                                    ].map((item) => (
                                        <ListItem key={item} sx={{ px: 0, py: 0.5 }}>
                                            <CheckCircleIcon sx={{ color: theme.palette.secondary.main, mr: 1.5, fontSize: 20 }} />
                                            <Typography variant="body1" sx={{ color: theme.palette.common.white }}>{item}</Typography>
                                        </ListItem>
                                    ))}
                                </List>
                            </Grid>
                        </Grid>
                    </DefaultContainer>
                </Box>

                {/* Starten */}
                <Box sx={{ backgroundColor: theme.palette.primary.main, py: isMobile ? 5 : 10 }} component="section">
                    <DefaultContainer maxWidth="lg">
                        <Grid container spacing={isMobile ? 4 : 8} alignItems="center">
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main, mb: 1 }}>
                                    Hoe je start
                                </Typography>
                                <Typography variant="h4" component="h2" sx={{ color: theme.palette.common.white, mb: 3 }}>
                                    In 3 stappen aan de slag
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                    {[
                                        { step: '01', title: 'Kennismaking', desc: 'We plannen een vrijblijvend kennismakingsgesprek om jouw doelen en wensen te bespreken.' },
                                        { step: '02', title: 'Intake & 0-meting', desc: 'Een uitgebreide intake en lichamelijke meting zodat we jouw startpunt vastleggen.' },
                                        { step: '03', title: 'Training op maat', desc: 'We starten met een persoonlijk trainingsplan dat volledig aansluit op jouw leven.' },
                                    ].map((item) => (
                                        <Box key={item.step} sx={{ display: 'flex', gap: 2.5 }}>
                                            <Typography variant="h4" sx={{ color: theme.palette.secondary.main, fontWeight: 700, minWidth: 45 }}>
                                                {item.step}
                                            </Typography>
                                            <Box>
                                                <Typography variant="h6" sx={{ color: theme.palette.common.white, mb: 0.5 }}>
                                                    {item.title}
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: theme.palette.common.white, opacity: 0.8 }}>
                                                    {item.desc}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    ))}
                                </Box>
                                <Typography variant="body2" sx={{ color: theme.palette.common.white, opacity: 0.7, mt: 3 }}>
                                    Intake bedraagt eenmalig €50 · Inschrijfkosten €30
                                </Typography>
                            </Grid>
                            {!isMobile && (
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Box sx={{ borderRadius: 3, overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.3)' }}>
                                        <OptimizedImage src="/images/2026/2026-pt-3.jpg" alt="Personal training sessie" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                                    </Box>
                                </Grid>
                            )}
                        </Grid>
                    </DefaultContainer>
                </Box>

                {/* CTA sectie */}
                <Box
                    component="section"
                    sx={{
                        position: 'relative',
                        overflow: 'hidden',
                        py: isMobile ? 10 : 12,
                        minHeight: isMobile ? 300 : 400,
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: '#000',
                    }}
                >
                    <Box sx={{ position: 'absolute', inset: 0, '& img, & picture': { width: '100%', height: '100%', objectFit: 'cover', display: 'block' } }}>
                        <OptimizedImage src="/images/2026/2026-pt-4.jpg" alt="Start met personal training" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    </Box>
                    <Box sx={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.65)' }} />
                    <DefaultContainer maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                        <Typography variant="h4" component="h2" sx={{ color: theme.palette.common.white, mb: 2 }}>
                            Klaar om te beginnen?
                        </Typography>
                        <Typography variant="body1" sx={{ color: theme.palette.common.white, mb: 4, maxWidth: 500, mx: 'auto', opacity: 0.9 }}>
                            Neem vrijblijvend contact op en ontdek wat personal training voor jou kan betekenen.
                        </Typography>
                        <Button
                            variant="contained"
                            size="large"
                            href={getRouteUrl(HeaderRoutesEnum.CONTACT)}
                            sx={{ px: 5, py: 1.5 }}
                        >
                            Neem contact op
                        </Button>
                    </DefaultContainer>
                </Box>

                <SuccessStories />
            </Layout>
        </AppShell>
    );
};

export default PersonalTrainingPage;
