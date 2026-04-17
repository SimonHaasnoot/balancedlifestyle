import { Box, Typography } from '@mui/material';
import { AppShell } from '../shell/AppShell';
import { Divider } from '../molecules/Divider';
import { SmallHero } from '../organisms/SmallHero';
import { DefaultContainer } from '../pagelayout/DefaultContainer';
import { Layout } from '../pagelayout/Layout';
import useIsMobile from '../../hooks/useMobile';
import { SuccessStories } from '../organisms/SuccessStories';
import Grid from '@mui/material/Grid';
import { OptimizedImage } from '../atoms/OptimizedImage';

import theme from '../../theme';
export const onlinecoaching = (props: any) => {
    const { isMobile } = useIsMobile();

    return (
        <AppShell>
            <Layout>
            <SmallHero
                sideImage
                image={
                    <OptimizedImage
                        src="/images/2026/2026-07.jpg"
                        alt="Personal training studio Zeist"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.2)' }}
                    />
                }
                title="Onze studio"
                subtitle="Bij Lifestyle & Personal Training Zeist draait alles om jouw persoonlijke groei. In onze exclusieve, professionele trainingsruimte bieden wij een plek waar jouw doelen centraal staan. Geen overvolle sportscholen, maar een veilige ruimte waar we jouw grenzen kunnen verleggen."
                linkTo={{
                    link: '#succesverhalen',
                    text: 'Of, ga naar succesverhalen',
                }}
            />

            <Box sx={{ backgroundColor: theme.palette.grey[100] }} component="section">
                <DefaultContainer maxWidth="lg" sx={{ textAlign: 'center' }} doublePadding={true}>
                    <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main }}>
                        Wat heeft onze studio te bieden
                    </Typography>
                    <Typography variant="h4" component="h2" sx={{ color: theme.palette.common.white, mb: 5 }}>
                        Jouw tweede thuis
                    </Typography>
                    <Typography variant="body1" sx={{ color: theme.palette.common.white, mb: 5 }}>
                        Een studio waar jouw vitaliteit centraal staat – zowel fysiek als mentaal. Samen werken we aan een sterkere en fittere versie
                        van jezelf door middel van krachttraining en conditietraining. Daarnaast hechten we ook waarde aan jouw mentale welzijn, omdat
                        fysieke en mentale kracht hand in hand gaan.
                    </Typography>

                    <Divider />

                    <Grid container spacing={isMobile ? 3 : 5} sx={{ py: isMobile ? 5 : 10, textAlign: 'left', alignItems: 'center' }}>
                        <Grid size={{ xs: 12, md: 6 }} sx={{ order: isMobile ? 2 : 1 }}>
                            <Box sx={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: 2,
                            }}>
                                <Box sx={{ borderRadius: 3, overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.3)' }}>
                                    <OptimizedImage
                                        src="/images/2026/2026-08.jpg"
                                        alt="Training in de studio"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </Box>
                                <Box sx={{ borderRadius: 3, overflow: 'hidden', mt: 4, boxShadow: '0 8px 30px rgba(0,0,0,0.3)' }}>
                                    <OptimizedImage
                                        src="/images/2026/2026-09.jpg"
                                        alt="Training in de studio"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }} sx={{ order: isMobile ? 1 : 2 }}>
                            <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main, mb: 2 }}>
                                Persoonlijk verhaal van Kim
                            </Typography>
                            <Box
                                sx={{
                                    borderLeft: `3px solid ${theme.palette.secondary.main}`,
                                    pl: 3,
                                    mb: 4,
                                }}
                            >
                                <Typography variant="body1" sx={{ color: theme.palette.common.white, lineHeight: 1.9 }}>
                                    Kim is in <span>twee jaar</span> tijd <span>20 kg</span> afgevallen en heeft haar mindset volledig veranderd. Van
                                    onzeker en te zwaar naar <span>zelfverzekerd</span> en <span>sportief</span>.
                                    <br />
                                    <br />
                                    Met <span>krachttraining</span> en <span>persoonlijke begeleiding</span> ontdekte ze de impact van een{' '}
                                    <span>gezonde levensstijl</span>. Door balans in haar <span>mentale</span> en <span>fysieke</span> gesteldheid haalt
                                    ze nu wekelijks het maximale uit haar leven.
                                    <br />
                                    <br />
                                    Sporten helpt haar om <span>negatieve gevoelens</span> en <span>gedachten</span> te overwinnen. Ze is de baas over
                                    haar lichaam en maakt keuzes waar ze <span>trots</span> op is.
                                    <br />
                                    <br />
                                    Ook nu ze haar doelen heeft bereikt, blijft ze terugkomen, omdat ze de <span>waarde</span> ervan inziet. Op goede én
                                    slechte dagen krijgt ze dat <span>zetje</span> in de juiste richting.
                                </Typography>
                            </Box>
                            <Typography variant="body1" sx={{ color: theme.palette.common.white, opacity: 0.8, fontStyle: 'italic' }}>
                                Als je met deze elementen een tijdje actief bezig bent ga je <span>regelmaat</span> creëren. Uit regelmaat ontstaat
                                een ritme wat uiteindelijk ontwikkeld naar gewoontes.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Divider />

                    <Box sx={{ color: theme.palette.common.white, pt: isMobile ? 5 : 10 }}>
                        <Grid container spacing={isMobile ? 3 : 5} sx={{ textAlign: 'left' }}>
                            <Grid size={12} textAlign={'center'}>
                                <Typography
                                    variant="overline"
                                    sx={{
                                        color: theme.palette.secondary.main,
                                        fontSize: '0.8rem',
                                        letterSpacing: 4,
                                        display: 'block',
                                        mb: 1,
                                    }}
                                >
                                    Succesverhaal
                                </Typography>
                                <Typography variant="h3" sx={{
                                    background: `linear-gradient(135deg, ${theme.palette.common.white} 0%, ${theme.palette.secondary.main} 100%)`,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    mb: 1,
                                }}>
                                    Kim's transformatie
                                </Typography>
                                <Box sx={{ width: 60, height: 3, backgroundColor: theme.palette.secondary.main, mx: 'auto', mb: 4, borderRadius: 2 }} />
                            </Grid>

                            {/* Transformatie foto's */}
                            <Grid size={{ xs: 12, md: 6 }} >
                                <Box sx={{
                                    borderRadius: 3,
                                    overflow: 'hidden',
                                    boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                                    position: 'relative',
                                    height: isMobile ? 350 : 500,
                                    '&:hover .transform-img': { transform: 'scale(1.05)' },
                                }}>
                                    <Box className="transform-img" sx={{ position: 'absolute', inset: 0, transition: 'transform 0.5s ease' }}>
                                        <img
                                            src="/images/klanten/kim2.png"
                                            alt="Kim's transformatie"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }} >
                                <Box sx={{
                                    borderRadius: 3,
                                    overflow: 'hidden',
                                    boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                                    position: 'relative',
                                    height: isMobile ? 350 : 500,
                                    '&:hover .transform-img': { transform: 'scale(1.05)' },
                                }}>
                                    <Box className="transform-img" sx={{ position: 'absolute', inset: 0, transition: 'transform 0.5s ease' }}>
                                        <img
                                            src="/images/klanten/kim3.png"
                                            alt="Kim's transformatie"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </Box>
                                </Box>
                            </Grid>

                            {/* Tekst onder de foto's */}
                            <Grid size={12} sx={{ textAlign: 'center', pt: 2 }}>
                                <Box sx={{
                                    maxWidth: '700px',
                                    mx: 'auto',
                                    py: 4,
                                    px: isMobile ? 2 : 5,
                                    background: 'rgba(90, 183, 219, 0.06)',
                                    borderRadius: 3,
                                    border: `1px solid rgba(90, 183, 219, 0.15)`,
                                    backdropFilter: 'blur(8px)',
                                }}>
                                    <Typography variant="body1" sx={{ color: theme.palette.common.white, lineHeight: 1.9 }}>
                                        Door het behouden van een gebalanceerde levensstijl voelt Kim zich <span>vrijer dan ooit</span> en is ze gelukkig met haar
                                        lichaam. Laat haar jou inspireren om ook de eerste stap te zetten naar een gezonder en gelukkiger bestaan.
                                    </Typography>
                                    <Box sx={{ width: 40, height: 2, backgroundColor: theme.palette.secondary.main, mx: 'auto', my: 3, borderRadius: 2 }} />
                                    <Typography variant="body2" sx={{ color: theme.palette.common.white, opacity: 0.7, fontStyle: 'italic', lineHeight: 1.8 }}>
                                        Kleine aanpassingen kunnen grote veranderingen hebben op je leven.
                                    </Typography>
                                </Box>
                            </Grid>

                            <Grid size={12} sx={{ pt: isMobile ? 3 : 6 }}>
                                <Divider />
                            </Grid>

                            <Grid size={12} sx={{ textAlign: 'center', pb: 4 }}>
                                <Typography variant="body1" sx={{ color: theme.palette.common.white, maxWidth: '750px', mx: 'auto', lineHeight: 1.9 }}>
                                    Bij Lifestyle & Personal Training Zeist, een paramedisch centrum, draait het om een holistische benadering van gezondheid. Niet alleen
                                    sporten, maar je gehele levensstijl staat centraal.
                                    <br />
                                    <br />
                                    We creëren een veilige en vertrouwde omgeving, zodat jij zonder druk kunt werken aan de beste versie van jezelf.
                                    <br />
                                    <br />
                                    Naast krachttraining en coaching bieden we begeleiding van een orthomoleculair diëtist. Iedereen is uniek – wat voor
                                    de één werkt, is anders voor de ander.
                                    <br />
                                    <br />
                                    Waar een wil is, is een weg. Wij helpen jou die te vinden.
                                </Typography>
                            </Grid>
                            <Grid size={12} >
                                <Box sx={{
                                    display: 'grid',
                                    gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
                                    gap: 0,
                                    borderRadius: 3,
                                    overflow: 'hidden',
                                    boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
                                }}>
                                    <Box sx={{
                                        position: 'relative',
                                        height: isMobile ? 220 : 400,
                                        overflow: 'hidden',
                                        ...(!isMobile && { borderRight: '2px solid rgba(90,183,219,0.25)' }),
                                        '&:hover .seq-img': { transform: 'scale(1.08)' },
                                        '&:hover .seq-overlay': { opacity: 0 },
                                    }}>
                                        <Box className="seq-img" sx={{ position: 'absolute', inset: 0, transition: 'transform 0.5s ease' }}>
                                            <OptimizedImage src="/images/2026/2026-10.jpg" alt="Hammer training 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </Box>
                                        <Box className="seq-overlay" sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(0,0,0,0.5) 0%, transparent 50%)', transition: 'opacity 0.4s ease' }} />
                                        <Typography variant="overline" sx={{ position: 'absolute', bottom: 12, left: 0, right: 0, textAlign: 'center', color: theme.palette.secondary.main, fontSize: '0.7rem', letterSpacing: 3, textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>1 / 4</Typography>
                                    </Box>
                                    <Box sx={{
                                        position: 'relative',
                                        height: isMobile ? 220 : 400,
                                        overflow: 'hidden',
                                        ...(!isMobile && { borderRight: '2px solid rgba(90,183,219,0.25)' }),
                                        '&:hover .seq-img': { transform: 'scale(1.08)' },
                                        '&:hover .seq-overlay': { opacity: 0 },
                                    }}>
                                        <Box className="seq-img" sx={{ position: 'absolute', inset: 0, transition: 'transform 0.5s ease' }}>
                                            <OptimizedImage src="/images/2026/2026-11.jpg" alt="Hammer training 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </Box>
                                        <Box className="seq-overlay" sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(0,0,0,0.5) 0%, transparent 50%)', transition: 'opacity 0.4s ease' }} />
                                        <Typography variant="overline" sx={{ position: 'absolute', bottom: 12, left: 0, right: 0, textAlign: 'center', color: theme.palette.secondary.main, fontSize: '0.7rem', letterSpacing: 3, textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>2 / 4</Typography>
                                    </Box>
                                    <Box sx={{
                                        position: 'relative',
                                        height: isMobile ? 220 : 400,
                                        overflow: 'hidden',
                                        ...(!isMobile && { borderRight: '2px solid rgba(90,183,219,0.25)' }),
                                        '&:hover .seq-img': { transform: 'scale(1.08)' },
                                        '&:hover .seq-overlay': { opacity: 0 },
                                    }}>
                                        <Box className="seq-img" sx={{ position: 'absolute', inset: 0, transition: 'transform 0.5s ease' }}>
                                            <OptimizedImage src="/images/2026/2026-12.jpg" alt="Hammer training 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </Box>
                                        <Box className="seq-overlay" sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(0,0,0,0.5) 0%, transparent 50%)', transition: 'opacity 0.4s ease' }} />
                                        <Typography variant="overline" sx={{ position: 'absolute', bottom: 12, left: 0, right: 0, textAlign: 'center', color: theme.palette.secondary.main, fontSize: '0.7rem', letterSpacing: 3, textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>3 / 4</Typography>
                                    </Box>
                                    <Box sx={{
                                        position: 'relative',
                                        height: isMobile ? 220 : 400,
                                        overflow: 'hidden',
                                        '&:hover .seq-img': { transform: 'scale(1.08)' },
                                        '&:hover .seq-overlay': { opacity: 0 },
                                    }}>
                                        <Box className="seq-img" sx={{ position: 'absolute', inset: 0, transition: 'transform 0.5s ease' }}>
                                            <OptimizedImage src="/images/2026/2026-13.jpg" alt="Hammer training 4" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </Box>
                                        <Box className="seq-overlay" sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(0,0,0,0.5) 0%, transparent 50%)', transition: 'opacity 0.4s ease' }} />
                                        <Typography variant="overline" sx={{ position: 'absolute', bottom: 12, left: 0, right: 0, textAlign: 'center', color: theme.palette.secondary.main, fontSize: '0.7rem', letterSpacing: 3, textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>4 / 4</Typography>
                                    </Box>
                                </Box>
                            </Grid>

                            <Grid size={{ xs: 12, md: 4 }} >
                                <Box sx={{ borderRadius: 3, overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.3)', height: isMobile ? 250 : 350, position: 'relative', '&:hover .seq-img': { transform: 'scale(1.08)' } }}>
                                    <Box className="seq-img" sx={{ position: 'absolute', inset: 0, transition: 'transform 0.5s ease' }}>
                                        <OptimizedImage src="/images/2026/2026-14.jpg" alt="Studio sfeer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }} >
                                <Box sx={{ borderRadius: 3, overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.3)', height: isMobile ? 250 : 350, position: 'relative', '&:hover .seq-img': { transform: 'scale(1.08)' } }}>
                                    <Box className="seq-img" sx={{ position: 'absolute', inset: 0, transition: 'transform 0.5s ease' }}>
                                        <OptimizedImage src="/images/2026/2026-15.jpg" alt="Studio sfeer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }} >
                                <Box sx={{ borderRadius: 3, overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.3)', height: isMobile ? 250 : 350, position: 'relative', '&:hover .seq-img': { transform: 'scale(1.08)' } }}>
                                    <Box className="seq-img" sx={{ position: 'absolute', inset: 0, transition: 'transform 0.5s ease' }}>
                                        <OptimizedImage src="/images/2026/2026-16.jpg" alt="Studio sfeer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </Box>
                                </Box>
                            </Grid>

                            <Grid size={12} >
                                <Box sx={{ borderRadius: 3, overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.3)', height: isMobile ? 250 : 400, position: 'relative', '&:hover .seq-img': { transform: 'scale(1.05)' } }}>
                                    <Box className="seq-img" sx={{ position: 'absolute', inset: 0, transition: 'transform 0.5s ease' }}>
                                        <OptimizedImage src="/images/2026/2026-17.jpg" alt="Studio overzicht" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </DefaultContainer>
            </Box>

            <SuccessStories />
        </Layout>
    </AppShell>
);
};

export default onlinecoaching;
