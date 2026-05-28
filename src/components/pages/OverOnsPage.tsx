import { Box, Button, GridLegacy as Grid, Typography, keyframes } from '@mui/material';
import { AppShell } from '../shell/AppShell';
import { DefaultContainer } from '../pagelayout/DefaultContainer';
import { Layout } from '../pagelayout/Layout';
import useIsMobile from '../../hooks/useMobile';
import { getRouteUrl, HeaderRoutesEnum } from '../../types/HeaderRoute';
import { OptimizedImage } from '../atoms/OptimizedImage';
import { Divider } from '../molecules/Divider';
import { SmallHero } from '../organisms/SmallHero';
import { useInView } from 'react-intersection-observer';
import theme from '../../theme';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import GroupsIcon from '@mui/icons-material/Groups';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FavoriteIcon from '@mui/icons-material/Favorite';

const fadeInUp = keyframes`
    from { opacity: 0; transform: translateY(30px); }
    to   { opacity: 1; transform: translateY(0); }
`;

const values = [
    {
        icon: FitnessCenterIcon,
        title: 'Op maat',
        description: 'Geen standaard schema\'s, maar begeleiding die aansluit op jouw doelen, niveau en levensstijl.',
    },
    {
        icon: GroupsIcon,
        title: 'Persoonlijk',
        description: 'Een betrokken en vast klantenbestand dat bewust kiest voor onze begeleiding.',
    },
    {
        icon: TrendingUpIcon,
        title: 'Resultaat',
        description: 'Duurzame resultaten, zowel fysiek als mentaal, door consistentie en duidelijke afspraken.',
    },
    {
        icon: FavoriteIcon,
        title: 'Gewoontes',
        description: 'Door goede gewoontes ga jij op lange termijn jouw gezondheidsdoelen behalen.',
    },
];

export const OverOnsPage = () => {
    const { isMobile, isTabletOrSmaller } = useIsMobile();
    const { ref: valuesRef, inView: valuesInView } = useInView({ threshold: 0.2, triggerOnce: true });
    const { ref: ctaRef, inView: ctaInView } = useInView({ threshold: 0.3, triggerOnce: true });

    return (
        <AppShell>
            <Layout>
                {/* Hero Section */}
                <SmallHero
                    image={
                        <OptimizedImage
                            src="/images/2026/2026-1.jpg"
                            alt="Het team van Lifestyle & Personal Training Zeist"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    }
                    title="Over Ons"
                    subtitle="Investeer in jezelf. Wij investeren in jou."
                />

                {/* Intro Section */}
                <DefaultContainer maxWidth="lg" component="section">
                    <Box sx={{ py: isMobile ? 5 : 10, maxWidth: isTabletOrSmaller ? '100%' : '75%' }}>
                        <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main }}>
                            Wie zijn wij?
                        </Typography>
                        <Typography variant="h4" component="h2" sx={{ color: theme.palette.common.black, mb: 5 }}>
                            Meer dan bewegen
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: 2.2, color: theme.palette.common.black }}>
                            Bij Lifestyle & Personal Training Zeist geloven wij dat krachttraining meer is dan alleen bewegen.
                            Het is een investering in jezelf. In een persoonlijke, rustige en hoogwaardige omgeving werken wij
                            samen aan duurzame resultaten, zowel fysiek als mentaal.
                        </Typography>
                        <Divider />
                        <Typography variant="body1" sx={{ lineHeight: 2.2, color: theme.palette.common.black }}>
                            Onze aanpak is volledig op maat. Geen standaard schema's, maar begeleiding die aansluit op jouw
                            doelen, niveau en levensstijl. Of je nu wilt afvallen, sterker wilt worden of fitter in het leven
                            wilt staan — wij bieden structuur, regelmaat en resultaat.
                        </Typography>
                    </Box>
                </DefaultContainer>

                {/* Values Section */}
                <Box sx={{ backgroundColor: theme.palette.grey[100], py: isMobile ? 5 : 10 }} component="section">
                    <DefaultContainer maxWidth="lg" sx={{ textAlign: 'center' }}>
                        <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main }}>
                            Onze kernwaarden
                        </Typography>
                        <Typography variant="h4" component="h2" sx={{ color: theme.palette.common.white, mb: isMobile ? 4 : 6 }}>
                            Wat ons onderscheidt
                        </Typography>
                        <Grid container spacing={isMobile ? 3 : 5} ref={valuesRef}>
                            {values.map((value, index) => (
                                <Grid item xs={12} sm={6} key={value.title}>
                                    <Box
                                        sx={{
                                            p: 4,
                                            borderRadius: 3,
                                            border: '1px solid rgba(255,255,255,0.08)',
                                            transition: 'all 0.4s ease',
                                            opacity: valuesInView ? 1 : 0,
                                            transform: valuesInView ? 'translateY(0)' : 'translateY(30px)',
                                            transitionDelay: `${index * 0.15}s`,
                                            '&:hover': {
                                                transform: 'translateY(-6px)',
                                                borderColor: theme.palette.secondary.main,
                                                boxShadow: `0 12px 30px rgba(90,183,219,0.15)`,
                                            },
                                        }}
                                    >
                                        <value.icon sx={{ fontSize: 40, color: theme.palette.secondary.main, mb: 2 }} />
                                        <Typography variant="h5" sx={{ color: theme.palette.common.white, mb: 1.5, fontWeight: 600 }}>
                                            {value.title}
                                        </Typography>
                                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                                            {value.description}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </DefaultContainer>
                </Box>

                {/* Photo + Text Block */}
                <Grid container spacing={0} component="section">
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{ minHeight: isMobile ? '300px' : '500px', position: 'relative' }}
                    >
                        <OptimizedImage
                            src="/images/2026/2026-1.jpg"
                            alt="Lifestyle & Personal Training Zeist team"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ p: isMobile ? 5 : 10 }}>
                            <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main }}>
                                Onze overtuiging
                            </Typography>
                            <Typography variant="h4" component="h3" sx={{ color: theme.palette.common.black, mb: 4 }}>
                                Jij staat centraal
                            </Typography>
                            <Typography variant="body1" sx={{ lineHeight: 2.2, color: theme.palette.common.black, mb: 3 }}>
                                Wat ons onderscheidt, is de combinatie van persoonlijke aandacht met scherp advies op basis van
                                jouw context. Wij werken met een betrokken en vast klantenbestand dat bewust kiest voor onze
                                begeleiding.
                            </Typography>
                            <Typography variant="body1" sx={{ lineHeight: 2.2, color: theme.palette.common.black, mb: 3 }}>
                                Geen massale sportschool, maar een plek waar jij centraal staat en continuïteit, progressie en
                                plezier vooropstaan.
                            </Typography>
                            <Typography variant="body1" sx={{ lineHeight: 2.2, color: theme.palette.common.black }}>
                                Wij zijn ervan overtuigd dat echte verandering ontstaat door consistentie, duidelijke afspraken en
                                een veilige omgeving waarin jij het beste uit jezelf kunt halen.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                {/* CTA Section */}
                <Box sx={{ backgroundColor: theme.palette.grey[100], py: isMobile ? 6 : 10 }} component="section">
                    <DefaultContainer maxWidth="lg">
                        <Box
                            ref={ctaRef}
                            sx={{
                                maxWidth: isTabletOrSmaller ? '100%' : '70%',
                                m: 'auto',
                                textAlign: 'center',
                                opacity: ctaInView ? 1 : 0,
                                transform: ctaInView ? 'translateY(0)' : 'translateY(20px)',
                                transition: 'all 0.8s ease',
                            }}
                        >
                            <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main }}>
                                Klaar voor verandering?
                            </Typography>
                            <Typography variant="h4" component="h2" sx={{ color: theme.palette.common.white, mb: 3 }}>
                                Door middel van goede gewoontes
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 2, mb: 5 }}>
                                Door middel van goede gewoontes ga jij op lange termijn jouw gezondheidsdoelen behalen.
                                Echte verandering begint met één stap. Neem vandaag nog contact met ons op.
                            </Typography>
                            <Button
                                variant="outlined"
                                href={getRouteUrl(HeaderRoutesEnum.CONTACT)}
                                sx={{ textTransform: 'none', fontSize: '1.1rem' }}
                            >
                                Neem contact op
                            </Button>
                        </Box>
                    </DefaultContainer>
                </Box>
            </Layout>
        </AppShell>
    );
};

export default OverOnsPage;
