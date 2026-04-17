import { Box, Typography } from '@mui/material';
import { AppShell } from '../shell/AppShell';
import { SmallHero } from '../organisms/SmallHero';
import { DefaultContainer } from '../pagelayout/DefaultContainer';
import { Layout } from '../pagelayout/Layout';
import useIsMobile from '../../hooks/useMobile';
import Grid from '@mui/material/Grid';
import { Divider } from '../molecules/Divider';
import { OptimizedImage } from '../atoms/OptimizedImage';

import theme from '../../theme';
export const FoodPage = (props: any) => {
    const { isMobile } = useIsMobile();

    return (
        <AppShell>
            <Layout>
                <SmallHero
                    sideImage
                    image={
                        <img
                            src="/images/2026/2026-5.jpg"
                            alt="Leefstijl coaching Zeist"
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
                                <Box sx={{ borderRadius: 3, overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.3)', height: isMobile ? 250 : 400, position: 'relative', '&:hover .img-zoom': { transform: 'scale(1.06)' } }}>
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

                        <Box sx={{ py: isMobile ? 5 : 8 }}>
                            <Divider />
                        </Box>

                        {/* Foto galerij */}
                        <Typography
                            variant="overline"
                            sx={{ color: theme.palette.secondary.main, fontSize: '0.8rem', letterSpacing: 4, display: 'block', mb: 1 }}
                        >
                            Sfeerimpressie
                        </Typography>
                        <Typography variant="h4" component="h2" sx={{ color: theme.palette.common.white, mb: 5 }}>
                            Een kijkje in onze aanpak
                        </Typography>

                        <Box sx={{
                            display: 'grid',
                            gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
                            gridTemplateRows: isMobile ? 'auto' : '280px 280px 320px',
                            gap: 2,
                        }}>
                            {/* Rij 1: portrait links (2 rijen), 2x landscape, portrait rechts (2 rijen) */}

                            {/* 2026-40 — portrait, rij 1+2 kolom 1 */}
                            <Box sx={{
                                gridColumn: isMobile ? '1' : '1',
                                gridRow: isMobile ? 'auto' : '1 / 3',
                                borderRadius: 3,
                                overflow: 'hidden',
                                boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                                position: 'relative',
                                height: isMobile ? 350 : '100%',
                                '&:hover .gallery-img': { transform: 'scale(1.05)' },
                            }}>
                                <Box className="gallery-img" sx={{ position: 'absolute', inset: 0, transition: 'transform 0.6s ease' }}>
                                    <OptimizedImage src="/images/2026/2026-40.jpg" alt="Leefstijl training" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </Box>
                                <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(0,0,0,0.4) 0%, transparent 40%)' }} />
                            </Box>

                            {/* 2026-23 — landscape, rij 1 kolom 2 */}
                            <Box sx={{
                                borderRadius: 3,
                                overflow: 'hidden',
                                boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                                position: 'relative',
                                height: isMobile ? 200 : '100%',
                                '&:hover .gallery-img': { transform: 'scale(1.05)' },
                            }}>
                                <Box className="gallery-img" sx={{ position: 'absolute', inset: 0, transition: 'transform 0.6s ease' }}>
                                    <OptimizedImage src="/images/2026/2026-23.jpg" alt="Leefstijl coaching" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </Box>
                            </Box>

                            {/* 2026-30 — landscape, rij 1 kolom 3 */}
                            <Box sx={{
                                borderRadius: 3,
                                overflow: 'hidden',
                                boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                                position: 'relative',
                                height: isMobile ? 200 : '100%',
                                '&:hover .gallery-img': { transform: 'scale(1.05)' },
                            }}>
                                <Box className="gallery-img" sx={{ position: 'absolute', inset: 0, transition: 'transform 0.6s ease' }}>
                                    <OptimizedImage src="/images/2026/2026-30.jpg" alt="Leefstijl beweging" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </Box>
                            </Box>

                            {/* 2026-41 — portrait, rij 1+2 kolom 4 */}
                            <Box sx={{
                                gridColumn: isMobile ? '2' : '4',
                                gridRow: isMobile ? 'auto' : '1 / 3',
                                borderRadius: 3,
                                overflow: 'hidden',
                                boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                                position: 'relative',
                                height: isMobile ? 350 : '100%',
                                '&:hover .gallery-img': { transform: 'scale(1.05)' },
                            }}>
                                <Box className="gallery-img" sx={{ position: 'absolute', inset: 0, transition: 'transform 0.6s ease' }}>
                                    <OptimizedImage src="/images/2026/2026-41.jpg" alt="Leefstijl resultaat" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </Box>
                                <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(0,0,0,0.4) 0%, transparent 40%)' }} />
                            </Box>

                            {/* 2026-20 — landscape, rij 2 kolom 2+3 (breed midden) */}
                            <Box sx={{
                                gridColumn: isMobile ? '1 / 3' : '2 / 4',
                                borderRadius: 3,
                                overflow: 'hidden',
                                boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                                position: 'relative',
                                height: isMobile ? 200 : '100%',
                                '&:hover .gallery-img': { transform: 'scale(1.05)' },
                            }}>
                                <Box className="gallery-img" sx={{ position: 'absolute', inset: 0, transition: 'transform 0.6s ease' }}>
                                    <OptimizedImage src="/images/2026/2026-20.jpg" alt="Leefstijl voeding" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </Box>
                            </Box>

                            {/* Rij 3: 2026-19 portrait links, 2026-34 breed midden+rechts */}

                            {/* 2026-19 — portrait, rij 3 kolom 1 */}
                            <Box sx={{
                                borderRadius: 3,
                                overflow: 'hidden',
                                boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                                position: 'relative',
                                height: isMobile ? 300 : '100%',
                                '&:hover .gallery-img': { transform: 'scale(1.05)' },
                            }}>
                                <Box className="gallery-img" sx={{ position: 'absolute', inset: 0, transition: 'transform 0.6s ease' }}>
                                    <OptimizedImage src="/images/2026/2026-19.jpg" alt="Leefstijl training" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </Box>
                            </Box>

                            {/* 2026-34 — landscape, rij 3 kolom 2+3+4 (breed) */}
                            <Box sx={{
                                gridColumn: isMobile ? '2' : '2 / 5',
                                borderRadius: 3,
                                overflow: 'hidden',
                                boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                                position: 'relative',
                                height: isMobile ? 300 : '100%',
                                '&:hover .gallery-img': { transform: 'scale(1.05)' },
                            }}>
                                <Box className="gallery-img" sx={{ position: 'absolute', inset: 0, transition: 'transform 0.6s ease' }}>
                                    <OptimizedImage src="/images/2026/2026-34.jpg" alt="Leefstijl balans" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </Box>
                                <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(0,0,0,0.4) 0%, transparent 40%)' }} />
                            </Box>
                        </Box>

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
            </Layout>
        </AppShell>

    );
};

export default FoodPage;
