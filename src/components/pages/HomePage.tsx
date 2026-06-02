import { FitnessCenter, MenuBook, SupervisorAccount, ArrowRight } from '@mui/icons-material';
import { Box, Button, GridLegacy as Grid, Icon, Typography } from '@mui/material';
import { AppShell } from '../shell/AppShell';
import { Block } from '../molecules/Block';
import { Rating } from '../molecules/Rating';
import { Usp } from '../molecules/Usp';
import { Hero } from '../organisms/Hero';
import { DefaultContainer } from '../pagelayout/DefaultContainer';
import { Layout } from '../pagelayout/Layout';
import useIsMobile from '../../hooks/useMobile';
import { HeaderRoutesEnum, getRouteUrl } from '../../types/HeaderRoute';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import { Star } from '../atoms/Star';
import { OptimizedImage } from '../atoms/OptimizedImage';
import theme from '../../theme';
export const index = (props: any) => {
    const { isMobile } = useIsMobile();

    const generateFlowBackground = () => {
        const colors = [theme.palette.secondary.main];
        const color = colors[Math.floor(Math.random() * colors.length)];
        return (
            <div>
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 1440 320"
                    fill="none"
                    opacity={0.2}
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    style={{ position: 'absolute', top: 0, left: 0 }}
                >
                    <path
                        fill={color}
                        fillOpacity="0.2"
                        d="M0,128L48,133.3C96,139,192,149,288,154.7C384,160,480,160,576,154.7C672,149,768,139,864,138.7C960,139,1056,149,1152,149.3C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                    <path
                        fill={color}
                        fillOpacity="0.4"
                        d="M0,224L48,229.3C96,235,192,245,288,234.7C384,224,480,192,576,170.7C672,149,768,139,864,138.7C960,139,1056,149,1152,160C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                </svg>
            </div>
        );
    };

    return (
        <AppShell>
            <Layout>
                <Hero />

                <Box sx={{ backgroundColor: theme.palette.grey[100] }} component="section">
                    <DefaultContainer maxWidth="lg" sx={{ textAlign: 'center' }} doublePadding>
                        <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main }}>
                            Waarom?
                        </Typography>
                        <Typography variant="h4" component="h2" sx={{ color: theme.palette.common.white, mb: 5 }}>
                            Jouw gezondheid staat centraal
                        </Typography>
                        <Grid container spacing={isMobile ? 5 : 10} justifyContent="center" display="flex">
                            <Grid item xs={12} md={4}>
                                <Usp
                                    title="Persoonlijke trainingen"
                                    body={{ text: 'Personal training in onze moderne studio. wij begeleiden je naar een gezonde en bewuste leefstijl door aandacht te geven aan beweging, voeding en herstel.' }}
                                    icon={FitnessCenter}
                                />
                            </Grid>
                            <Grid item xs={12} md={4} sx={{ mt: isMobile ? 0 : 10 }}>
                                <Usp
                                    title="Persoonlijk voedingsplan"
                                    body={{ text: 'Persoonlijk voedingsplan. Afgestemd op jouw doelen en wensen. In samenwerking met Dietist & Orthomoleculair Therapeut.' }}
                                    icon={MenuBook}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Usp
                                    title="Compleet aanbod"
                                    body={{
                                        text: 'Klik hier voor ons gehele gezondheidsaanbod',
                                        link: getRouteUrl(HeaderRoutesEnum.COMMUNITY),
                                    }}
                                    icon={SupervisorAccount}
                                />
                            </Grid>
                        </Grid>
                        <Box sx={{ mt: isMobile ? 5 : 10, display: 'flex', justifyContent: 'center' }}>
                            <Button
                                variant="text"
                                href={getRouteUrl(HeaderRoutesEnum.PERSONAL_TRAINING)}
                                sx={{ color: theme.palette.secondary.main, display: 'flex', alignItems: 'center' }}
                            >
                                <Icon component={ArrowRight} />
                                Lees hier meer over personal training
                            </Button>
                        </Box>
                    </DefaultContainer>
                </Box>
                <Block
                    title="Over ons"
                    subtitle="Wie zijn wij?"
                    body="Bij Lifestyle & Personal Training Zeist geloven wij dat krachttraining meer is dan alleen bewegen. Het is een investering in jezelf.<br /><br /> In een persoonlijke, rustige en hoogwaardige omgeving werken wij samen aan duurzame resultaten, zowel fysiek als mentaal. Onze aanpak is volledig op maat. Geen standaard schema's, maar begeleiding die aansluit op jouw doelen, niveau en levensstijl."
                    button={{
                        text: 'Lees hier verder',
                        link: getRouteUrl(HeaderRoutesEnum.ABOUT_ME),
                    }}
                    staticImage={
                        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '100%', gap: 0 }}>
                            <OptimizedImage src="/images/2026/2026-3.jpg" alt="Het team van Lifestyle & Personal Training Zeist" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <OptimizedImage src="/images/2026/2026-80.jpg" alt="Het team van Lifestyle & Personal Training Zeist" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </Box>
                    }
                />
                {/* Missie sectie — activerend & opvallend */}
                <Box
                    component="section"
                    sx={{
                        position: 'relative',
                        overflow: 'hidden',
                        background: `linear-gradient(165deg, #0a0a0a 0%, #1a1a2e 40%, #16213e 100%)`,
                    }}
                >
                    {/* Glow effect achtergrond */}
                    <Box sx={{
                        position: 'absolute',
                        top: '20%',
                        left: '-10%',
                        width: '50%',
                        height: '60%',
                        background: `radial-gradient(ellipse, ${theme.palette.secondary.main}15 0%, transparent 70%)`,
                        filter: 'blur(60px)',
                    }} />
                    <Box sx={{
                        position: 'absolute',
                        bottom: '10%',
                        right: '-5%',
                        width: '40%',
                        height: '50%',
                        background: `radial-gradient(ellipse, ${theme.palette.secondary.main}10 0%, transparent 70%)`,
                        filter: 'blur(80px)',
                    }} />

                    <DefaultContainer maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                        <Grid container spacing={isMobile ? 4 : 8} alignItems="center">
                            {/* Foto kolom */}
                            <Grid item xs={12} md={5}>
                                <Box sx={{
                                    position: 'relative',
                                    borderRadius: isMobile ? 2 : 4,
                                    overflow: 'hidden',
                                    boxShadow: `0 20px 60px rgba(0,0,0,0.5), 0 0 40px ${theme.palette.secondary.main}15`,
                                    aspectRatio: isMobile ? '3 / 4' : '2 / 3',
                                    maxHeight: isMobile ? 'none' : 550,
                                    width: '100%',
                                    '&:hover .mission-img': { transform: 'scale(1.04)' },
                                }}>
                                    <Box className="mission-img" sx={{ position: 'absolute', inset: 0, transition: 'transform 0.8s ease' }}>
                                        <OptimizedImage
                                            src="/images/2026/2026-54.jpg"
                                            alt="Personal training begeleiding"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </Box>
                                    {/* Gradient overlay onderin */}
                                    <Box sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        height: '30%',
                                        background: 'linear-gradient(0deg, rgba(0,0,0,0.6) 0%, transparent 100%)',
                                    }} />
                                    {/* Accent border */}
                                    <Box sx={{
                                        position: 'absolute',
                                        inset: 0,
                                        border: `1px solid rgba(90,183,219,0.2)`,
                                        borderRadius: 4,
                                    }} />
                                </Box>
                            </Grid>

                            {/* Content kolom */}
                            <Grid item xs={12} md={7}>
                                <Box sx={{ pl: isMobile ? 0 : 3 }}>
                                    <Typography
                                        variant="overline"
                                        sx={{
                                            color: theme.palette.secondary.main,
                                            fontSize: '0.75rem',
                                            letterSpacing: 5,
                                            display: 'block',
                                            mb: 1,
                                        }}
                                    >
                                        Onze missie
                                    </Typography>

                                    <Typography
                                        variant="h3"
                                        component="h2"
                                        sx={{
                                            color: theme.palette.common.white,
                                            fontWeight: 700,
                                            mb: 3,
                                            lineHeight: 1.2,
                                            fontSize: isMobile ? '1.8rem' : '2.5rem',
                                        }}
                                    >
                                        Wij maken jou de
                                        <Box component="span" sx={{
                                            display: 'block',
                                            background: `linear-gradient(90deg, ${theme.palette.secondary.main}, #7dd3fc)`,
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                        }}>
                                            beste versie van jezelf
                                        </Box>
                                    </Typography>

                                    <Typography variant="body1" sx={{
                                        color: 'rgba(255,255,255,0.8)',
                                        lineHeight: 2,
                                        mb: 4,
                                        fontSize: isMobile ? '0.95rem' : '1.05rem',
                                    }}>
                                        Geen vluchtige resultaten, maar duurzame verandering. Wij combineren professionele
                                        begeleiding met een persoonlijke aanpak die écht werkt. Beweging, voeding en mentale
                                        kracht — in balans, op jouw tempo.
                                    </Typography>

                                    {/* Statistieken */}
                                    <Grid container spacing={isMobile ? 2 : 3} sx={{ mb: 4 }}>
                                        {[
                                            { value: '100+', label: 'Tevreden klanten' },
                                            { value: '9,4', label: 'Gemiddelde score' },
                                            { value: '5+', label: 'Jaar ervaring' },
                                        ].map((stat) => (
                                            <Grid item xs={4} key={stat.label}>
                                                <Box sx={{
                                                    textAlign: 'center',
                                                    p: isMobile ? 1.5 : 2.5,
                                                    borderRadius: 2,
                                                    background: 'rgba(90,183,219,0.06)',
                                                    border: '1px solid rgba(90,183,219,0.15)',
                                                    transition: 'all 0.3s ease',
                                                    height: '100%',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'center',
                                                    '&:hover': {
                                                        background: 'rgba(90,183,219,0.12)',
                                                        borderColor: theme.palette.secondary.main,
                                                        transform: 'translateY(-3px)',
                                                    },
                                                }}>
                                                    <Typography sx={{
                                                        color: theme.palette.secondary.main,
                                                        fontWeight: 800,
                                                        fontSize: isMobile ? '1.4rem' : '2rem',
                                                        lineHeight: 1,
                                                        fontFamily: 'Exo',
                                                        mb: 0.5,
                                                    }}>
                                                        {stat.value}
                                                    </Typography>
                                                    <Typography variant="caption" sx={{
                                                        color: 'rgba(255,255,255,0.6)',
                                                        letterSpacing: 0.5,
                                                        fontSize: isMobile ? '0.6rem' : '0.75rem',
                                                        textTransform: 'uppercase',
                                                    }}>
                                                        {stat.label}
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        ))}
                                    </Grid>

                                    {/* CTA */}
                                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                                        <Button
                                            variant="contained"
                                            size="large"
                                            href={getRouteUrl(HeaderRoutesEnum.CONTACT)}
                                            sx={{
                                                px: 4,
                                                py: 1.5,
                                                background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, #3a8fb8 100%)`,
                                                color: '#fff',
                                                fontWeight: 600,
                                                fontSize: '0.95rem',
                                                boxShadow: `0 4px 20px ${theme.palette.secondary.main}40`,
                                                '&:hover': {
                                                    boxShadow: `0 8px 30px ${theme.palette.secondary.main}60`,
                                                    transform: 'translateY(-2px)',
                                                },
                                                transition: 'all 0.3s ease',
                                            }}
                                        >
                                            Start jouw transformatie
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            size="large"
                                            href={getRouteUrl(HeaderRoutesEnum.REVIEWS)}
                                            sx={{
                                                px: 3,
                                                py: 1.5,
                                                borderColor: 'rgba(255,255,255,0.25)',
                                                color: theme.palette.common.white,
                                                '&:hover': {
                                                    borderColor: theme.palette.secondary.main,
                                                    background: 'rgba(90,183,219,0.08)',
                                                },
                                            }}
                                        >
                                            Bekijk reviews
                                        </Button>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </DefaultContainer>
                </Box>

                <Box sx={{ backgroundColor: theme.palette.primary.main }} component="section">
                    <DefaultContainer maxWidth="xl" sx={{ textAlign: 'center' }}>
                        <Box>
                            <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main, py: 5, mb: isMobile ? 0 : 10 }}>
                                Waarmee kunnen wij jou van dienst zijn?
                            </Typography>
                        </Box>
                        <Grid container spacing={isMobile ? 2 : 4} justifyContent="center">
                            {[
                                { src: '../images/2026/2026-17.jpg', label: 'Personal training', href: getRouteUrl(HeaderRoutesEnum.PERSONAL_TRAINING), imgNode: <OptimizedImage src="/images/2026/2026-17.jpg" alt="Personal training" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> },
                                { src: '../images/2026/2026-4.jpg', label: 'Groepstraining', href: getRouteUrl(HeaderRoutesEnum.GROEPSTRAINING), imgNode: <OptimizedImage src="/images/2026/2026-4.jpg" alt="Groepstraining" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> },
                                { src: '../images/2026/2026-5.jpg', label: 'Leefstijl', href: getRouteUrl(HeaderRoutesEnum.LEEFSTIJL), imgNode: <OptimizedImage src="/images/2026/2026-5.jpg" alt="Leefstijl" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> },
                                { src: '../images/2026/2026-6.jpg', label: 'Community', href: getRouteUrl(HeaderRoutesEnum.COMMUNITY), imgNode: <OptimizedImage src="/images/2026/2026-6.jpg" alt="Community" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> },
                            ].map((card) => (
                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    md={3}
                                    key={card.label}
                                    sx={{ position: 'relative' }}
                                >
                                    <Box
                                        component="a"
                                        href={card.href}
                                        sx={{
                                            display: 'block',
                                            position: 'relative',
                                            borderRadius: 3,
                                            overflow: 'hidden',
                                            height: isMobile ? 220 : 350,
                                            boxShadow: '0 8px 30px rgba(0,0,0,0.25)',
                                            transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                                            textDecoration: 'none',
                                            ':hover': {
                                                transform: 'translateY(-6px)',
                                                boxShadow: '0 16px 40px rgba(0,0,0,0.35)',
                                                '& .card-overlay': {
                                                    background: 'linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.15) 100%)',
                                                },
                                                '& .card-label': {
                                                    letterSpacing: '3px',
                                                },
                                            },
                                        }}
                                    >
                                        <Box sx={{ position: 'absolute', inset: 0 }}>
                                            {card.imgNode}
                                        </Box>
                                        <Box
                                            className="card-overlay"
                                            sx={{
                                                position: 'absolute',
                                                inset: 0,
                                                background: 'linear-gradient(0deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.05) 60%)',
                                                transition: 'background 0.4s ease',
                                            }}
                                        />
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                right: 0,
                                                p: 3,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <Typography
                                                className="card-label"
                                                variant="subtitle2"
                                                sx={{
                                                    color: theme.palette.common.white,
                                                    fontWeight: 600,
                                                    fontSize: isMobile ? '0.95rem' : '1.05rem',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '2px',
                                                    transition: 'letter-spacing 0.4s ease',
                                                    textShadow: '0 2px 8px rgba(0,0,0,0.4)',
                                                }}
                                            >
                                                {card.label}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                        <Typography variant="subtitle2" sx={{ color: theme.palette.common.white, my: 10 }}>
                            100% resultaatgarantie!
                        </Typography>
                    </DefaultContainer>
                </Box>
                <DefaultContainer sx={{ textAlign: 'center' }} component="section">
                    <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main }}>
                        Reviews
                    </Typography>
                    <Typography variant="h4" component="h3" sx={{ mb: 5, textAlign: 'center' }}>
                        Ervaring van de klant
                    </Typography>
                    <Box>
                        <Grid container spacing={isMobile ? 1 : 3} justifyContent="center" display="flex">
                            <Grid item xs={12} md={4} display="flex">
                                <Rating
                                    rating={5}
                                    reviewerText="Door Sem heb ik de juiste motivatie gekregen en hij heeft een gepersonaliseerd schema opgesteld met de juiste voeding. Heel tevreden dus!"
                                    reviewerName="Miron Jansen"
                                    isMale={true}
                                />
                            </Grid>
                            <Grid item xs={12} md={4} display="flex">
                                <Rating
                                    rating={4}
                                    reviewerText="Ik heb genoten en veel geleerd. Ik ben blij dat ik de stap heb genomen."
                                    reviewerName="Wiebe Palstra"
                                    isMale={true}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </DefaultContainer>
                <Box
                    sx={{
                        background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, #3a8fb8 100%)`,
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                    component="section"
                >
                    {/* Decorative circles */}
                    <Box sx={{
                        position: 'absolute',
                        top: -40,
                        right: -40,
                        width: 160,
                        height: 160,
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.06)',
                    }} />
                    <Box sx={{
                        position: 'absolute',
                        bottom: -30,
                        left: '20%',
                        width: 100,
                        height: 100,
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.04)',
                    }} />
                    <DefaultContainer maxWidth="lg" sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: isMobile ? 2 : 5,
                        }}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                            }}>
                                <Typography component="span" sx={{ color: theme.palette.common.white, fontWeight: 700, fontSize: isMobile ? '2.5rem' : '3.5rem', lineHeight: 1, fontFamily: 'Exo' }}>
                                    9,4
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 0.3 }}>
                                    <Box sx={{ display: 'flex', gap: 0.3 }}>
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={16} color="#FFC107" />
                                        ))}
                                    </Box>
                                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.75rem', letterSpacing: 1 }}>
                                        GEMIDDELDE SCORE
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={{
                                width: isMobile ? 40 : '1px',
                                height: isMobile ? '1px' : 40,
                                backgroundColor: 'rgba(255,255,255,0.25)',
                                flexShrink: 0,
                            }} />

                            <Typography variant="subtitle2" sx={{ color: theme.palette.common.white, lineHeight: 1.6, fontSize: isMobile ? '0.9rem' : '1rem' }}>
                                Onze klanten waarderen de <strong>persoonlijke aanpak</strong> en <strong>resultaatgerichte begeleiding</strong>
                            </Typography>
                        </Box>
                    </DefaultContainer>
                </Box>
            </Layout>
        </AppShell>

    );
};

export default index;
