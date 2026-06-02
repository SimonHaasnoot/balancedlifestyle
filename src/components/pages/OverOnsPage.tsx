import { Box, Button, GridLegacy as Grid, Typography, keyframes } from '@mui/material';
import Grid2 from '@mui/material/Grid';
import { AppShell } from '../shell/AppShell';
import { DefaultContainer } from '../pagelayout/DefaultContainer';
import { Layout } from '../pagelayout/Layout';
import useIsMobile from '../../hooks/useMobile';
import { getRouteUrl, HeaderRoutesEnum } from '../../types/HeaderRoute';
import { OptimizedImage } from '../atoms/OptimizedImage';
import { Divider } from '../molecules/Divider';
import { SmallHero } from '../organisms/SmallHero';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
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

                {/* Team Storylines */}
                <Box component="section" sx={{ py: 6}}>
                    <DefaultContainer maxWidth="lg">
                        <Box sx={{ textAlign: 'center', mb: isMobile ? 5 : 8 }}>
                            <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main }}>
                                Het team
                            </Typography>
                            <Typography variant="h4" component="h2" sx={{ color: theme.palette.common.black, mb: 2 }}>
                                Maak kennis met je trainers
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'rgba(0,0,0,0.6)', maxWidth: 600, mx: 'auto', lineHeight: 1.8 }}>
                                Twee bevlogen trainers met een gedeelde passie: jou helpen de beste versie van jezelf te worden.
                            </Typography>
                        </Box>

                        <Grid2 container spacing={isMobile ? 5 : 6}>
                            {/* Sem */}
                            <Grid2 size={{ xs: 12, md: 6 }}>
                                <Box sx={{
                                    borderRadius: 4,
                                    overflow: 'hidden',
                                    border: '1px solid rgba(0,0,0,0.08)',
                                    transition: 'all 0.4s ease',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    '&:hover': {
                                        boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
                                        transform: 'translateY(-4px)',
                                    },
                                }}>
                                    {/* Hoofdfoto */}
                                    <Box sx={{ position: 'relative', aspectRatio: '4 / 5', overflow: 'hidden' }}>
                                        <OptimizedImage
                                            src="/images/2026/2026-sem-1.jpg"
                                            alt="Sem - Oprichter & Personal Trainer"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                        <Box sx={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            background: 'linear-gradient(0deg, rgba(0,0,0,0.7) 0%, transparent 100%)',
                                            p: 3,
                                            pt: 6,
                                        }}>
                                            <Typography variant="h5" sx={{ color: '#fff', fontWeight: 700 }}>
                                                Sem
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: theme.palette.secondary.main, fontWeight: 500, letterSpacing: 1, textTransform: 'uppercase', fontSize: '0.75rem' }}>
                                                Oprichter & Head Trainer
                                            </Typography>
                                        </Box>
                                    </Box>

                                    {/* Content */}
                                    <Box sx={{ p: isMobile ? 3 : 4, flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <Typography variant="body1" sx={{ lineHeight: 1.9, color: 'rgba(0,0,0,0.75)', mb: 3 }}>
                                            Als oprichter van Lifestyle & Personal Training Zeist combineert Sem zijn passie voor
                                            krachttraining met een diepgaande kennis van leefstijl en voeding. Met jarenlange ervaring
                                            helpt hij klanten duurzame resultaten bereiken.
                                        </Typography>
                                        <Typography variant="body2" sx={{ lineHeight: 1.9, color: 'rgba(0,0,0,0.6)' }}>
                                            "Ik geloof dat echte verandering begint bij de juiste gewoontes. Mijn doel is om mensen
                                            niet alleen fysiek sterker te maken, maar ook mentaal weerbaarder."
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid2>

                            {/* Tim */}
                            <Grid2 size={{ xs: 12, md: 6 }}>
                                <Box sx={{
                                    borderRadius: 4,
                                    overflow: 'hidden',
                                    border: '1px solid rgba(0,0,0,0.08)',
                                    transition: 'all 0.4s ease',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    '&:hover': {
                                        boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
                                        transform: 'translateY(-4px)',
                                    },
                                }}>
                                    {/* Hoofdfoto */}
                                    <Box sx={{ position: 'relative', aspectRatio: '4 / 5', overflow: 'hidden' }}>
                                        <OptimizedImage
                                            src="/images/2026/2026-tim-1.jpg"
                                            alt="Tim - Mede-eigenaar & Personal Trainer"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                        <Box sx={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            background: 'linear-gradient(0deg, rgba(0,0,0,0.7) 0%, transparent 100%)',
                                            p: 3,
                                            pt: 6,
                                        }}>
                                            <Typography variant="h5" sx={{ color: '#fff', fontWeight: 700 }}>
                                                Tim
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: theme.palette.secondary.main, fontWeight: 500, letterSpacing: 1, textTransform: 'uppercase', fontSize: '0.75rem' }}>
                                                Mede-eigenaar & Trainer
                                            </Typography>
                                        </Box>
                                    </Box>

                                    {/* Content */}
                                    <Box sx={{ p: isMobile ? 3 : 4, flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <Typography variant="body1" sx={{ lineHeight: 1.9, color: 'rgba(0,0,0,0.75)', mb: 3 }}>
                                            Tim is als mede-eigenaar de drijvende kracht achter de groepstrainingen en brengt
                                            energie en structuur in elke sessie. Zijn sportieve achtergrond en oog voor detail
                                            zorgen ervoor dat iedere klant veilig en effectief traint.
                                        </Typography>
                                        <Typography variant="body2" sx={{ lineHeight: 1.9, color: 'rgba(0,0,0,0.6)' }}>
                                            "Samen trainen creëert een band die je alleen niet kunt evenaren. De energie van een
                                            groep is aanstekelijk — dat is wat mij elke dag motiveert."
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid2>
                        </Grid2>
                    </DefaultContainer>
                </Box>

                {/* Intro Section */}
                <DefaultContainer maxWidth="lg" component="section">
                    <Box sx={{ py: isMobile ? 4 : 6, maxWidth: isTabletOrSmaller ? '100%' : '75%', mx: 'auto' }}>
                        <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main }}>
                            Wie zijn wij?
                        </Typography>
                        <Typography variant="h4" component="h2" sx={{ color: theme.palette.common.black, mb: 3 }}>
                            Meer dan bewegen
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: 2.2, color: theme.palette.common.black, mb: 3 }}>
                            Bij Lifestyle & Personal Training Zeist geloven wij dat krachttraining meer is dan alleen bewegen.
                            Het is een investering in jezelf. In een persoonlijke, rustige en hoogwaardige omgeving werken wij
                            samen aan duurzame resultaten, zowel fysiek als mentaal.
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: 2.2, color: theme.palette.common.black }}>
                            Onze aanpak is volledig op maat. Geen standaard schema's, maar begeleiding die aansluit op jouw
                            doelen, niveau en levensstijl. Of je nu wilt afvallen, sterker wilt worden of fitter in het leven
                            wilt staan — wij bieden structuur, regelmaat en resultaat.
                        </Typography>
                    </Box>
                </DefaultContainer>

                {/* Interactive trainer carousel */}
                <Box component="section" sx={{
                    py: isMobile ? 4 : 8,
                    backgroundColor: theme.palette.grey[100],
                    '& .swiper-pagination-bullet': {
                        backgroundColor: '#fff',
                        opacity: 0.4,
                        width: 10,
                        height: 10,
                    },
                    '& .swiper-pagination-bullet-active': {
                        backgroundColor: theme.palette.secondary.main,
                        opacity: 1,
                    },
                }}>
                    <DefaultContainer maxWidth="lg">
                        {isMobile ? (
                            /* Mobile: vertikale stack */
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                {[
                                    { src: '/images/2026/2026-sem-2.jpg', name: 'Sem', role: 'Oprichter & Head Trainer', quote: '"Echte verandering begint bij de juiste gewoontes."', ratio: '3 / 2' },
                                    { src: '/images/2026/2026-tim-2.jpg', name: 'Tim', role: 'Mede-eigenaar & Trainer', quote: '"De energie van samen trainen is aanstekelijk."', ratio: '2 / 3' },
                                    { src: '/images/2026/2026-sem-3.jpg', name: 'Sem', role: 'Oprichter & Head Trainer', quote: '"Niet alleen fysiek sterker, maar ook mentaal weerbaarder."', ratio: '2 / 3' },
                                    { src: '/images/2026/2026-tim-3.jpg', name: 'Tim', role: 'Mede-eigenaar & Trainer', quote: '"Fitness is meer dan gewichten tillen — het is een levensstijl."', ratio: '2 / 3' },
                                ].map((slide) => (
                                    <Box key={slide.src} sx={{ position: 'relative', aspectRatio: slide.ratio, borderRadius: 3, overflow: 'hidden' }}>
                                        <OptimizedImage src={slide.src} alt={slide.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        <Box sx={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            p: 2.5,
                                            background: 'linear-gradient(0deg, rgba(0,0,0,0.8) 0%, transparent 100%)',
                                        }}>
                                            <Typography variant="subtitle2" sx={{ color: '#fff', fontWeight: 700 }}>{slide.name}</Typography>
                                            <Typography variant="caption" sx={{ color: theme.palette.secondary.main, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: 1.5 }}>{slide.role}</Typography>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        ) : (
                            /* Desktop: Swiper carousel met creative effect */
                            <Swiper
                                modules={[EffectCreative, Autoplay, Pagination]}
                                effect="creative"
                                creativeEffect={{
                                    prev: {
                                        shadow: true,
                                        translate: ['-20%', 0, -1],
                                    },
                                    next: {
                                        translate: ['100%', 0, 0],
                                    },
                                }}
                                autoplay={{
                                    delay: 4500,
                                    disableOnInteraction: true,
                                    pauseOnMouseEnter: true,
                                }}
                                pagination={{ clickable: true }}
                                loop
                                grabCursor
                                style={{ borderRadius: 16, overflow: 'hidden' }}
                            >
                                {/* Slide 1: Sem — landscape foto, full-bleed */}
                                <SwiperSlide>
                                    <Box sx={{ position: 'relative', height: 550, cursor: 'grab', '&:hover .slide-img': { transform: 'scale(1.03)' } }}>
                                        <Box className="slide-img" sx={{ position: 'absolute', inset: 0, transition: 'transform 0.8s ease' }}>
                                            <OptimizedImage src="/images/2026/2026-sem-2.jpg" alt="Sem" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </Box>
                                        <Box sx={{
                                            position: 'absolute', bottom: 0, left: 0, right: 0, p: 4,
                                            background: 'linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
                                            display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
                                        }}>
                                            <Box>
                                                <Typography variant="h4" sx={{ color: '#fff', fontWeight: 700 }}>Sem</Typography>
                                                <Typography variant="body2" sx={{ color: theme.palette.secondary.main, fontWeight: 500, letterSpacing: 1.5, textTransform: 'uppercase', fontSize: '0.75rem' }}>Oprichter & Head Trainer</Typography>
                                            </Box>
                                            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.85)', fontStyle: 'italic', maxWidth: 400, textAlign: 'right', lineHeight: 1.7 }}>
                                                "Echte verandering begint bij de juiste gewoontes. Mijn doel is om mensen niet alleen fysiek sterker te maken, maar ook mentaal weerbaarder."
                                            </Typography>
                                        </Box>
                                    </Box>
                                </SwiperSlide>

                                {/* Slide 2: Tim — portrait foto, split layout */}
                                <SwiperSlide>
                                    <Box sx={{ display: 'flex', height: 550, cursor: 'grab', backgroundColor: '#0a0a0a' }}>
                                        <Box sx={{ width: '45%', height: '100%', overflow: 'hidden', '&:hover img, &:hover picture': { transform: 'scale(1.03)' } }}>
                                            <OptimizedImage src="/images/2026/2026-tim-2.jpg" alt="Tim" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease' }} />
                                        </Box>
                                        <Box sx={{ width: '55%', display: 'flex', flexDirection: 'column', justifyContent: 'center', p: 6 }}>
                                            <Typography variant="h4" sx={{ color: '#fff', fontWeight: 700, mb: 1 }}>Tim</Typography>
                                            <Typography variant="body2" sx={{ color: theme.palette.secondary.main, fontWeight: 500, letterSpacing: 1.5, textTransform: 'uppercase', fontSize: '0.75rem', mb: 4 }}>Mede-eigenaar & Trainer</Typography>
                                            <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.85)', fontStyle: 'italic', lineHeight: 1.7, fontWeight: 400 }}>
                                                "De energie van samen trainen is aanstekelijk. Ik wil mensen laten zien dat fitness meer is dan gewichten tillen — het is een levensstijl."
                                            </Typography>
                                        </Box>
                                    </Box>
                                </SwiperSlide>

                                {/* Slide 3: Sem — portrait foto, split layout (reversed) */}
                                <SwiperSlide>
                                    <Box sx={{ display: 'flex', height: 550, cursor: 'grab', backgroundColor: '#0a0a0a' }}>
                                        <Box sx={{ width: '55%', display: 'flex', flexDirection: 'column', justifyContent: 'center', p: 6 }}>
                                            <Typography variant="h4" sx={{ color: '#fff', fontWeight: 700, mb: 1 }}>Sem</Typography>
                                            <Typography variant="body2" sx={{ color: theme.palette.secondary.main, fontWeight: 500, letterSpacing: 1.5, textTransform: 'uppercase', fontSize: '0.75rem', mb: 4 }}>Oprichter & Head Trainer</Typography>
                                            <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.85)', fontStyle: 'italic', lineHeight: 1.7, fontWeight: 400 }}>
                                                "Het gaat niet om perfectie, maar om consistentie. Elke dag een klein beetje beter dan gisteren."
                                            </Typography>
                                        </Box>
                                        <Box sx={{ width: '45%', height: '100%', overflow: 'hidden', '&:hover img, &:hover picture': { transform: 'scale(1.03)' } }}>
                                            <OptimizedImage src="/images/2026/2026-sem-3.jpg" alt="Sem" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease' }} />
                                        </Box>
                                    </Box>
                                </SwiperSlide>

                                {/* Slide 4: Tim — portrait foto, split layout */}
                                <SwiperSlide>
                                    <Box sx={{ display: 'flex', height: 550, cursor: 'grab', backgroundColor: '#0a0a0a' }}>
                                        <Box sx={{ width: '45%', height: '100%', overflow: 'hidden', '&:hover img, &:hover picture': { transform: 'scale(1.03)' } }}>
                                            <OptimizedImage src="/images/2026/2026-tim-3.jpg" alt="Tim" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease' }} />
                                        </Box>
                                        <Box sx={{ width: '55%', display: 'flex', flexDirection: 'column', justifyContent: 'center', p: 6 }}>
                                            <Typography variant="h4" sx={{ color: '#fff', fontWeight: 700, mb: 1 }}>Tim</Typography>
                                            <Typography variant="body2" sx={{ color: theme.palette.secondary.main, fontWeight: 500, letterSpacing: 1.5, textTransform: 'uppercase', fontSize: '0.75rem', mb: 4 }}>Mede-eigenaar & Trainer</Typography>
                                            <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.85)', fontStyle: 'italic', lineHeight: 1.7, fontWeight: 400 }}>
                                                "Bij ons word je gezien. Geen nummers, maar mensen met een doel."
                                            </Typography>
                                        </Box>
                                    </Box>
                                </SwiperSlide>
                            </Swiper>
                        )}
                    </DefaultContainer>
                </Box>

                {/* Overtuiging sectie */}
                <DefaultContainer maxWidth="lg" component="section">
                    <Box sx={{ py: isMobile ? 5 : 10, maxWidth: isTabletOrSmaller ? '100%' : '75%', mx: 'auto' }}>
                        <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main }}>
                            Onze overtuiging
                        </Typography>
                        <Typography variant="h5" component="h3" sx={{ color: theme.palette.common.black, mb: 3 }}>
                            Jij staat centraal
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: 2.2, color: theme.palette.common.black, mb: 3 }}>
                            Wat ons onderscheidt, is de combinatie van persoonlijke aandacht met scherp advies op basis van
                            jouw context. Wij werken met een betrokken en vast klantenbestand dat bewust kiest voor onze
                            begeleiding.
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: 2.2, color: theme.palette.common.black }}>
                            Geen massale sportschool, maar een plek waar jij centraal staat en continuïteit, progressie en
                            plezier vooropstaan. Wij zijn ervan overtuigd dat echte verandering ontstaat door consistentie,
                            duidelijke afspraken en een veilige omgeving waarin jij het beste uit jezelf kunt halen.
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
