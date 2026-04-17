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
                        d="M0,224L48,229.3C96,235,192,245,288,234.7C384,224,480,192,576,170.7C672,149,768,139,864,138.7C960,139,1056,149,1152,160C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320"
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
                                        link: getRouteUrl(HeaderRoutesEnum.SPECIALISATIES),
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
                    title="Iets over mij"
                    subtitle="Terug naar het begin"
                    body="Welkom, mijn naam is Sem van de Griendt. Oprichter van Lifestyle & Personal Training Zeist.<br /><br /> Lifestyle & Personal Training Zeist is ontstaan uit een persoonlijk verhaal. Ik heb jaren met extreme huidklachten rondgelopen. De
                    milde huidklachten ontstonden toen ik 14 was. In het begin maakte ik mij weinig zorgen en was ik ervan overtuigd
                    dat de pubertijd de veroorzaker was van mijn huidproblemen. 3 Jaar later, tientallen doktersbezoeken en
                    antibioticakuren verder werden mijn problemen niet minder, maar juist erger."
                    button={{
                        text: 'Lees hier verder',
                        link: getRouteUrl(HeaderRoutesEnum.ABOUT_ME),
                    }}
                    staticImage={
                        <OptimizedImage src="/images/workouts/workout5.jpg" alt="Personal trainer Sem van de Griendt in actie" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    }
                />
                <Box sx={{ backgroundColor: theme.palette.grey[100], position: 'relative' }} component="section">
                    <DefaultContainer maxWidth="lg" sx={{ textAlign: 'center' }}>
                        <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main }}>
                            Onze missie
                        </Typography>
                        <Typography variant="h4" component="h2" sx={{ color: theme.palette.common.white, mb: 2 }}>
                            Jouw gezondheid terug in balans
                        </Typography>
                        <AllInclusiveIcon sx={{ color: theme.palette.common.white, fontSize: 40, mb: 2 }} />

                        <Typography
                            variant="body1"
                            sx={{ color: theme.palette.common.white, lineHeight: 2, maxWidth: isMobile ? '100%' : '60%', margin: 'auto' }}
                        >
                            Onze missie is het coachen in het creëren van een gebalanceerde leefstijl door jou de juiste handvatten te geven in
                            bewegen, voeding en rust.
                        </Typography>
                    </DefaultContainer>

                    {generateFlowBackground()}
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
                                { src: '../images/2026/2026-6.jpg', label: 'Mentale coaching', href: getRouteUrl(HeaderRoutesEnum.SPECIALISATIES), imgNode: <OptimizedImage src="/images/2026/2026-6.jpg" alt="Mentale coaching" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> },
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
