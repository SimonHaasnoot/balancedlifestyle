import { Box, Button, Typography } from '@mui/material';
import { AppShell } from '../shell/AppShell';
import { SmallHero } from '../organisms/SmallHero';
import { DefaultContainer } from '../pagelayout/DefaultContainer';
import { Layout } from '../pagelayout/Layout';
import useIsMobile from '../../hooks/useMobile';
import Grid from '@mui/material/Grid';
import { Divider } from '../molecules/Divider';
import { OptimizedImage } from '../atoms/OptimizedImage';
import { getRouteUrl, HeaderRoutesEnum } from '../../types/HeaderRoute';

import theme from '../../theme';
export const FoodPage = (props: any) => {
    const { isMobile } = useIsMobile();

    return (
        <AppShell>
            <Layout>
                <SmallHero
                    sideImage
                    image={
                        <OptimizedImage
                            src="/images/2026/2026-5.jpg"
                            alt="Leefstijl coaching Zeist"
                            loading="eager"
                            fetchPriority="high"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.4)' }}
                        />
                    }
                    title="Leefstijl"
                    subtitle="Een gebalanceerde leefstijl is de basis voor een gezond en gelukkig leven. Wij begeleiden je op het gebied van beweging, voeding, slaap en mentale rust — zodat jij duurzaam resultaat behaalt zonder extreme keuzes."
                />

                <Box sx={{ background: theme.palette.grey[100] }} component="section">
                    <DefaultContainer maxWidth="lg" sx={{ textAlign: 'center' }} doublePadding>
                        <Typography
                            variant="overline"
                            sx={{ color: theme.palette.secondary.main, fontSize: '0.8rem', letterSpacing: 4, display: 'block', mb: 1 }}
                        >
                            Onze aanpak
                        </Typography>
                        <Typography variant="h4" component="h2" sx={{
                            background: `linear-gradient(135deg, ${theme.palette.common.white} 0%, ${theme.palette.secondary.main} 100%)`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            mb: 1,
                        }}>
                            Balans in alles wat je doet
                        </Typography>
                        <Box sx={{ width: 60, height: 3, backgroundColor: theme.palette.secondary.main, mx: 'auto', mb: 5, borderRadius: 2 }} />

                        <Grid container spacing={isMobile ? 3 : 6} sx={{ textAlign: 'left', alignItems: 'center' }}>
                            <Grid size={{ xs: 12, md: 7 }} >
                                <Box sx={{ borderLeft: `3px solid ${theme.palette.secondary.main}`, pl: 3 }}>
                                    <Typography variant="body1" sx={{ lineHeight: 2, color: theme.palette.common.white }}>
                                        Bij <span>Lifestyle & Personal Training Zeist</span> geloven we niet in extreme diëten of kortetermijnoplossingen.
                                        Wij streven naar een <span>gebalanceerde leefstijl</span> waarin beweging, voeding, rust en mentale gezondheid
                                        hand in hand gaan.
                                        <br /><br />
                                        Samen kijken we naar jouw dagelijkse gewoontes en maken we <span>kleine, haalbare aanpassingen</span> die
                                        grote impact hebben op je welzijn. Geen strenge regels, maar een duurzame aanpak die bij jou past.
                                        <br /><br />
                                        Van <span>krachttraining</span> en bewuste voedingskeuzes tot <span>slaapoptimalisatie</span> en
                                        stressmanagement — wij begeleiden je op elk vlak zodat jij de beste versie van jezelf kunt worden.
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 12, md: 5 }} >
                                <Box sx={{ borderRadius: 3, overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.3)', height: 600, position: 'relative', '&:hover .img-zoom': { transform: 'scale(1.06)' } }}>
                                    <Box className="img-zoom" sx={{ position: 'absolute', inset: 0, transition: 'transform 0.5s ease' }}>
                                        <OptimizedImage src="/images/2026/2026-42.jpg" alt="Leefstijl" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>

                        <Box sx={{ py: isMobile ? 5 : 8 }}>
                            <Divider />
                        </Box>

                        {/* Pijlers sectie */}
                        <Typography
                            variant="overline"
                            sx={{ color: theme.palette.secondary.main, fontSize: '0.8rem', letterSpacing: 4, display: 'block', mb: 1 }}
                        >
                            De pijlers
                        </Typography>
                        <Typography variant="h4" component="h2" sx={{ color: theme.palette.common.white, mb: 5 }}>
                            Vier fundamenten van een gezonde leefstijl
                        </Typography>

                        <Grid container spacing={isMobile ? 2 : 3}>
                            {[
                                { title: 'Beweging', desc: 'Krachttraining, conditie en mobiliteit — afgestemd op jouw lichaam en doelen.' },
                                { title: 'Voeding', desc: 'Geen extreme diëten maar bewuste keuzes. Natuurlijke producten, in balans.' },
                                { title: 'Rust & Herstel', desc: 'Slaap, ontspanning en ademhaling als onmisbare basis voor vooruitgang.' },
                                { title: 'Mentale kracht', desc: 'Mindset coaching, stressmanagement en het bouwen van gezonde gewoontes.' },
                            ].map((pijler, i) => (
                                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={pijler.title}>
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
                                            boxShadow: `0 8px 30px rgba(90, 183, 219, 0.15)`,
                                        },
                                    }}>
                                        <Typography variant="overline" sx={{
                                            color: theme.palette.secondary.main,
                                            fontSize: '0.65rem',
                                            letterSpacing: 3,
                                        }}>
                                            0{i + 1}
                                        </Typography>
                                        <Typography variant="subtitle1" sx={{ color: theme.palette.common.white, mb: 1, fontSize: '1.1rem' }}>
                                            {pijler.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: theme.palette.common.white, opacity: 0.75, lineHeight: 1.7 }}>
                                            {pijler.desc}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>

                        {/* Mid-page CTA */}
                        <Box sx={{ mt: isMobile ? 4 : 6, mb: isMobile ? 5 : 8 }}>
                            <Button
                                variant="outlined"
                                size="large"
                                href={getRouteUrl(HeaderRoutesEnum.CONTACT)}
                                sx={{
                                    px: 4,
                                    py: 1.5,
                                    borderColor: theme.palette.secondary.main,
                                    color: 'white',
                                    fontWeight: 600,
                                    '&:hover': {
                                        backgroundColor: 'rgba(90, 183, 219, 0.1)',
                                        borderColor: theme.palette.secondary.main,
                                        transform: 'translateY(-2px)',
                                    },
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                Vraag een vrijblijvend gesprek aan
                            </Button>
                        </Box>

                        <Divider />

                        {/* Foto galerij */}
                        <Typography
                            variant="overline"
                            sx={{ color: theme.palette.secondary.main, fontSize: '0.8rem', letterSpacing: 4, display: 'block', mb: 1 }}
                        >
                            Sfeerimpressie
                        </Typography>
                        <Typography variant="h4" component="h2" sx={{ color: theme.palette.common.white, mb: 2 }}>
                            Een kijkje in onze aanpak
                        </Typography>
                        <Typography variant="body1" sx={{ color: theme.palette.common.white, opacity: 0.8, maxWidth: 600, mx: 'auto', mb: 5, lineHeight: 1.9 }}>
                            Van krachttraining en voedingsadvies tot mentale begeleiding — een impressie van hoe wij samen werken aan jouw gebalanceerde leefstijl.
                        </Typography>

                        <Grid container spacing={2}>
                            {/* Landscape foto full width — 3:2 ratio */}
                            <Grid size={12}>
                                <Box sx={{ borderRadius: 3, overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.3)', aspectRatio: '3 / 2', '&:hover img': { transform: 'scale(1.05)' } }}>
                                    <OptimizedImage src="/images/2026/2026-23.jpg" alt="Leefstijl coaching" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }} />
                                </Box>
                            </Grid>

                            {/* Twee portrait foto's naast elkaar — 2:3 ratio */}
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Box sx={{ borderRadius: 3, overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.3)', aspectRatio: '2 / 3', '&:hover img': { transform: 'scale(1.05)' } }}>
                                    <OptimizedImage src="/images/2026/2026-40.jpg" alt="Leefstijl training" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }} />
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Box sx={{ borderRadius: 3, overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.3)', aspectRatio: '2 / 3', '&:hover img': { transform: 'scale(1.05)' } }}>
                                    <OptimizedImage src="/images/2026/2026-41.jpg" alt="Leefstijl resultaat" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }} />
                                </Box>
                            </Grid>

                            {/* Landscape foto full width — 3:2 ratio */}
                            <Grid size={12}>
                                <Box sx={{ borderRadius: 3, overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.3)', aspectRatio: '3 / 2', '&:hover img': { transform: 'scale(1.05)' } }}>
                                    <OptimizedImage src="/images/2026/2026-30.jpg" alt="Leefstijl beweging" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }} />
                                </Box>
                            </Grid>
                        </Grid>

                        {/* Quote onderaan */}
                        <Box sx={{
                            mt: isMobile ? 5 : 8,
                            mb: 2,
                            py: 4,
                            px: isMobile ? 3 : 6,
                            maxWidth: '700px',
                            mx: 'auto',
                            background: 'rgba(90, 183, 219, 0.06)',
                            borderRadius: 3,
                            border: '1px solid rgba(90, 183, 219, 0.15)',
                            backdropFilter: 'blur(8px)',
                            textAlign: 'center',
                        }}>
                            <Typography variant="body1" sx={{ color: theme.palette.common.white, lineHeight: 1.9, fontStyle: 'italic' }}>
                                "De juiste leefstijl vormt de basis voor een lichaam en geest in balans. Het gaat niet om perfectie, maar om <span>consistentie</span>."
                            </Typography>
                        </Box>

                    </DefaultContainer>
                </Box>

                {/* CTA sectie */}
                <Box
                    component="section"
                    sx={{
                        background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, #3a8fb8 100%)`,
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    <Box sx={{ position: 'absolute', top: -50, right: -50, width: 200, height: 200, borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
                    <Box sx={{ position: 'absolute', bottom: -30, left: '15%', width: 120, height: 120, borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }} />
                    <DefaultContainer maxWidth="md" sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                        <Typography variant="h4" component="h2" sx={{ color: theme.palette.common.white, mb: 2, fontWeight: 700 }}>
                            Klaar voor een gebalanceerd leven?
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 4, maxWidth: 500, mx: 'auto', lineHeight: 1.8 }}>
                            Plan een vrijblijvend kennismakingsgesprek en ontdek hoe wij jou kunnen begeleiden naar duurzame gezondheid.
                        </Typography>
                        <Button
                            variant="contained"
                            size="large"
                            href={getRouteUrl(HeaderRoutesEnum.CONTACT)}
                            sx={{
                                px: 5,
                                py: 1.5,
                                backgroundColor: theme.palette.common.white,
                                color: theme.palette.secondary.main,
                                fontWeight: 600,
                                fontSize: '1rem',
                                '&:hover': {
                                    backgroundColor: 'rgba(255,255,255,0.9)',
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                                },
                                transition: 'all 0.3s ease',
                            }}
                        >
                            Plan een kennismaking
                        </Button>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mt: 2, fontSize: '0.8rem' }}>
                            Eerste gesprek is altijd vrijblijvend
                        </Typography>
                    </DefaultContainer>
                </Box>
            </Layout>
        </AppShell>

    );
};

export default FoodPage;
