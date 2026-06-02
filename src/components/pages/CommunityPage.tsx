import { Box, Button, GridLegacy as Grid, Typography } from '@mui/material';
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
import GroupsIcon from '@mui/icons-material/Groups';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CelebrationIcon from '@mui/icons-material/Celebration';

const pillars = [
    {
        icon: GroupsIcon,
        title: 'Samen trainen',
        description: 'Onze community bestaat uit mensen met dezelfde mindset: werken aan jezelf, fysiek én mentaal.',
    },
    {
        icon: FavoriteIcon,
        title: 'Support & saamhorigheid',
        description: 'We investeren bewust in een sterke, betrokken groep waarin support en saamhorigheid vanzelfsprekend is.',
    },
    {
        icon: EmojiEventsIcon,
        title: 'Samen groeien',
        description: 'Er is ruimte voor een grap, maar ook voor groei, focus en discipline. Juist die combinatie maakt ons uniek.',
    },
    {
        icon: CelebrationIcon,
        title: 'Events & verbinding',
        description: 'Van gezellige kerstborrels tot gezamenlijke sportevents — momenten waarop de community echt tot leven komt.',
    },
];

export const CommunityPage = () => {
    const { isMobile, isTabletOrSmaller } = useIsMobile();
    const { ref: pillarsRef, inView: pillarsInView } = useInView({ threshold: 0.2, triggerOnce: true });
    const { ref: ctaRef, inView: ctaInView } = useInView({ threshold: 0.3, triggerOnce: true });

    return (
        <AppShell>
            <Layout>
                {/* Hero */}
                <SmallHero
                    image={
                        <OptimizedImage
                            src="/images/2026/2026-community-1.jpg"
                            alt="De community van Lifestyle & Personal Training Zeist"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    }
                    title="Community"
                    subtitle="Samen trainen, samen groeien. Dat is onze kracht."
                    nextSectionColor="#ffffff"
                />

                {/* Intro */}
                <DefaultContainer maxWidth="lg" component="section">
                    <Box sx={{ py: isMobile ? 5 : 10, maxWidth: isTabletOrSmaller ? '100%' : '75%' }}>
                        <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main }}>
                            Meer dan een sportschool
                        </Typography>
                        <Typography variant="h4" component="h2" sx={{ color: theme.palette.common.black, mb: 5 }}>
                            Bij ons draait het om samen groeien
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: 2.2, color: theme.palette.common.black }}>
                            Bij ons draait het niet alleen om trainen, maar om samen groeien. We bouwen aan een omgeving waar
                            iedereen zich welkom en thuis voelt, elkaar motiveert en het beste in elkaar naar boven haalt.
                            Of je nu net begint of al jaren traint — je staat er nooit alleen voor. We doen het samen!
                        </Typography>
                        <Divider />
                        <Typography variant="body1" sx={{ lineHeight: 2.2, color: theme.palette.common.black }}>
                            Onze community bestaat uit mensen met dezelfde mindset: werken aan jezelf, fysiek én mentaal.
                            Er is ruimte voor een grap, maar ook voor groei, focus en discipline. Juist die combinatie maakt
                            dat mensen zich hier thuis voelen en blijven terugkomen.
                        </Typography>
                    </Box>
                </DefaultContainer>

                {/* Full-width community foto met parallax-achtig reveal effect */}
                <Box
                    sx={{
                        position: 'relative',
                        overflow: 'hidden',
                        aspectRatio: isMobile ? '3 / 2' : '2.5 / 1',
                        '&:hover .community-img': {
                            transform: 'scale(1.05)',
                        },
                        '&:hover .community-overlay': {
                            opacity: 0.1,
                        },
                    }}
                >
                    <Box
                        className="community-img"
                        sx={{ position: 'absolute', inset: 0, transition: 'transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                    >
                        <OptimizedImage
                            src="/images/2026/2026-community-4.jpg"
                            alt="Community sfeer bij Lifestyle & Personal Training Zeist"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }}
                        />
                    </Box>
                    <Box
                        className="community-overlay"
                        sx={{
                            position: 'absolute',
                            inset: 0,
                            background: `linear-gradient(135deg, rgba(28,29,31,0.4) 0%, transparent 50%, rgba(90,183,219,0.2) 100%)`,
                            transition: 'opacity 0.8s ease',
                        }}
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '40%',
                            background: 'linear-gradient(0deg, rgba(28,29,31,0.7) 0%, transparent 100%)',
                        }}
                    />
                    <Typography
                        variant="h3"
                        sx={{
                            position: 'absolute',
                            bottom: isMobile ? 20 : 40,
                            left: isMobile ? 20 : 60,
                            color: theme.palette.common.white,
                            textShadow: '0 2px 20px rgba(0,0,0,0.5)',
                            fontWeight: 600,
                            zIndex: 1,
                        }}
                    >
                        Samen sterker
                    </Typography>
                </Box>

                {/* Pillars */}
                <Box sx={{ backgroundColor: theme.palette.grey[100], py: isMobile ? 5 : 10 }} component="section">
                    <DefaultContainer maxWidth="lg" sx={{ textAlign: 'center' }}>
                        <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main }}>
                            Wat maakt onze community bijzonder?
                        </Typography>
                        <Typography variant="h4" component="h2" sx={{ color: theme.palette.common.white, mb: isMobile ? 4 : 6 }}>
                            De kracht van samen
                        </Typography>
                        <Grid container spacing={isMobile ? 3 : 5} ref={pillarsRef}>
                            {pillars.map((pillar, index) => (
                                <Grid item xs={12} sm={6} key={pillar.title}>
                                    <Box
                                        sx={{
                                            p: 4,
                                            borderRadius: 3,
                                            border: '1px solid rgba(255,255,255,0.08)',
                                            transition: 'all 0.4s ease',
                                            opacity: pillarsInView ? 1 : 0,
                                            transform: pillarsInView ? 'translateY(0)' : 'translateY(30px)',
                                            transitionDelay: `${index * 0.15}s`,
                                            '&:hover': {
                                                transform: 'translateY(-6px)',
                                                borderColor: theme.palette.secondary.main,
                                                boxShadow: '0 12px 30px rgba(90,183,219,0.15)',
                                            },
                                        }}
                                    >
                                        <pillar.icon sx={{ fontSize: 40, color: theme.palette.secondary.main, mb: 2 }} />
                                        <Typography variant="h5" sx={{ color: theme.palette.common.white, mb: 1.5, fontWeight: 600 }}>
                                            {pillar.title}
                                        </Typography>
                                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                                            {pillar.description}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </DefaultContainer>
                </Box>

                {/* Photo + Text Block */}
                <Grid container spacing={0} component="section">
                    <Grid item xs={12} md={6} sx={{ position: 'relative', aspectRatio: '3 / 2' }}>
                        <OptimizedImage
                            src="/images/2026/2026-community-3.jpg"
                            alt="Community momenten bij Lifestyle & Personal Training Zeist"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ p: isMobile ? 5 : 10 }}>
                            <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main }}>
                                Meer dan trainen
                            </Typography>
                            <Typography variant="h4" component="h3" sx={{ color: theme.palette.common.black, mb: 4 }}>
                                Verbinding buiten de studio
                            </Typography>
                            <Typography variant="body1" sx={{ lineHeight: 2.2, color: theme.palette.common.black, mb: 3 }}>
                                We geloven dat resultaat niet alleen komt door wat je doet in de training, maar ook door de mensen
                                om je heen. Daarom investeren we bewust in een sterke, betrokken groep waarin support en
                                saamhorigheid vanzelfsprekend is.
                            </Typography>
                            <Typography variant="body1" sx={{ lineHeight: 2.2, color: theme.palette.common.black, mb: 3 }}>
                                Daarnaast organiseren we momenten buiten de trainingen om de band binnen de community te
                                versterken. Denk aan een gezellige kerstborrel en gezamenlijke sportevents waar we elkaar
                                uitdagen en waar plezier en verbinding centraal staan.
                            </Typography>
                            <Typography variant="body1" sx={{ lineHeight: 2.2, color: theme.palette.common.black }}>
                                Dit zijn de momenten waarop je elkaar op een andere manier leert kennen en waar de community
                                echt tot leven komt.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                {/* CTA */}
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
                                Word onderdeel van onze community
                            </Typography>
                            <Typography variant="h4" component="h2" sx={{ color: theme.palette.common.white, mb: 3 }}>
                                Samen trainen, samen groeien
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 2, mb: 5 }}>
                                Bij ons ben je niet alleen lid van een personal training studio, maar onderdeel van een sportieve
                                en sociale groep. Neem contact op en ontdek wat onze community voor jou kan betekenen.
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

export default CommunityPage;
