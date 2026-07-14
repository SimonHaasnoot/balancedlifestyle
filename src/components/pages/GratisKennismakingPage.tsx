import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Container,
    FormControl,
    GridLegacy as Grid,
    Link,
    TextField,
    Typography,
    keyframes,
} from '@mui/material';
import React from 'react';
import useIsMobile from '../../hooks/useMobile';
import { projectVariables } from '../../project';
import theme from '../../theme';
import { OptimizedImage } from '../atoms/OptimizedImage';
import { Star } from '../atoms/Star';
import { AppShell } from '../shell/AppShell';

const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
`;

const accent = theme.palette.secondary.main;
const phoneHref = (phone: string) => `tel:+31${phone.replace(/\s/g, '').slice(1)}`;

// wa.me verwacht een internationaal nummer zonder + of leidende 0 (bijv. 31612345678)
const whatsappHref = (phone: string, message: string) =>
    `https://wa.me/31${phone.replace(/\s/g, '').slice(1)}?text=${encodeURIComponent(message)}`;

const WHATSAPP_MESSAGE =
    'Hoi! Ik zag jullie pagina en wil graag een gratis kennismaking plannen. Wanneer kan dat?';

// Conversie-tracking: pusht events naar Google Analytics (gtag) en Meta Pixel (fbq) indien aanwezig.
const trackLead = (method: 'form' | 'whatsapp' | 'phone') => {
    if (typeof window === 'undefined') return;
    if (method === 'form') {
        sessionStorage.setItem('lead-method', 'kennismaking_form');
        sessionStorage.removeItem('lead-tracked');
        return;
    }
    const w = window as unknown as {
        gtag?: (...args: unknown[]) => void;
        fbq?: (...args: unknown[]) => void;
    };
    w.gtag?.('event', 'generate_lead', { method, page: 'gratis-kennismaking' });
    w.fbq?.('track', 'Lead', { method });
};

const heroUsps = [
    'Persoonlijk plan op maat: beweging, voeding én rust',
    'Trainen in een rustige, eigen studio — geen drukke sportschool',
    'Persoonlijke begeleiding door Sem & Tim',
    '100% resultaatgarantie',
];

const stats = [
    { value: '9,4', label: 'Gemiddelde klantscore' },
    { value: '100+', label: 'Tevreden klanten' },
    { value: '5+', label: 'Jaar ervaring' },
    { value: '100%', label: 'Resultaatgarantie' },
];

const steps = [
    {
        number: '01',
        title: 'Gratis kennismaking',
        body: 'We bespreken jouw doelen, wensen en huidige leefstijl onder het genot van een kop koffie. Je krijgt een rondleiding door onze studio. Volledig vrijblijvend — jij beslist daarna in alle rust.',
    },
    {
        number: '02',
        title: 'Persoonlijk plan',
        body: 'Geen standaard schema\'s. Wij stellen een plan op dat past bij jouw doelen, niveau en agenda. Inclusief voedingsadvies in samenwerking met een diëtist & orthomoleculair therapeut.',
    },
    {
        number: '03',
        title: 'Duurzaam resultaat',
        body: 'Samen bouwen we aan gewoontes die blijven. We meten voortgang, sturen bij waar nodig en zorgen dat jij fitter, sterker en energieker wordt — en blijft.',
    },
];

const testimonials = [
    {
        name: 'Wiebe Palstra',
        result: '20 kg afgevallen in 18 maanden',
        text: '"Dat uurtje sporten met Sem is een uurtje voor mijzelf, die ik in mijzelf investeer, om mij goed te laten voelen! Twee jaar verder: ik heb meer energie, zit lekkerder in mijn vel, verleg mijn grenzen en voel mij sterk! En gestopt met roken!"',
    },
    {
        name: 'Miron Jansen',
        result: '8 kg spiermassa in 12 maanden',
        text: '"Sem heeft mij zeer goed op weg geholpen met mijn fitness journey! Door hem heb ik de juiste motivatie gekregen en hij heeft een gepersonaliseerd schema opgesteld met de juiste voeding. Heel tevreden dus!"',
    },
    {
        name: 'Nathan Bakhuyzen',
        result: '5 kg vet eraf, 3 kg spiermassa erbij in 6 maanden',
        text: '"Na zelfstandig trainen in de sportschool, zocht ik professionele begeleiding. Lifestyle Personal Training heeft mij geholpen mijn doelen te verfijnen en te bereiken. Zeer tevreden over de begeleiding en de kennis die mij is bijgebracht. Top!"',
    },
];

const faqs = [
    {
        question: 'Wat kost het kennismakingsgesprek?',
        answer: 'Helemaal niets. Het gesprek is gratis én vrijblijvend. We drinken een kop koffie, bespreken jouw doelen en je krijgt een rondleiding door de studio. Daarna beslis jij in alle rust of het bij je past.',
    },
    {
        question: 'Moet ik al fit zijn om te beginnen?',
        answer: 'Nee, absoluut niet. Wij begeleiden mensen van elk niveau — van complete beginners tot gevorderde sporters. Het plan wordt volledig afgestemd op jouw huidige situatie en tempo.',
    },
    {
        question: 'Zit ik ergens aan vast na de kennismaking?',
        answer: 'Nee. De kennismaking is 100% vrijblijvend. Je krijgt van ons een eerlijk advies, ook als dat betekent dat iets anders beter bij je past.',
    },
    {
        question: 'Hoe verschilt dit van een gewone sportschool?',
        answer: 'Bij ons train je in een rustige, persoonlijke studio zonder wachtrijen of afleiding — altijd onder begeleiding. We kijken verder dan alleen training: ook voeding, herstel en leefstijl nemen we mee voor een duurzaam resultaat.',
    },
    {
        question: 'Waar vind ik de studio?',
        answer: `Onze studio zit aan de ${projectVariables.COMPANY_ADDRESS}. Goed bereikbaar vanuit Zeist, Driebergen, Bunnik en De Bilt, met parkeergelegenheid voor de deur.`,
    },
];

const LeadForm: React.FC<{ id?: string; dark?: boolean }> = ({ id }) => (
    <Box
        id={id}
        sx={{
            background: 'rgba(255,255,255,0.98)',
            borderRadius: 3,
            p: { xs: 3, md: 4 },
            boxShadow: `0 20px 60px rgba(0,0,0,0.45), 0 0 40px ${accent}20`,
            border: `1px solid ${accent}30`,
        }}
    >
        <Typography
            component="h3"
            sx={{ fontFamily: 'Exo', fontWeight: 700, fontSize: '1.4rem', color: '#111', mb: 0.5 }}
        >
            Plan jouw gratis kennismaking
        </Typography>
        <Typography sx={{ color: 'rgba(0,0,0,0.6)', fontSize: '0.9rem', mb: 2 }}>
            Vrijblijvend en zonder verplichtingen. Wij nemen binnen 24 uur contact met je op.
        </Typography>

        <form
            name="kennismaking"
            method="post"
            action="/bedankt"
            data-netlify="true"
            netlify-honeypot="gender"
            onSubmit={() => trackLead('form')}
        >
            <input type="hidden" name="gender" />
            <input type="hidden" name="form-name" value="kennismaking" />
            <FormControl fullWidth sx={{ ['> div']: { mb: 2 } }}>
                <TextField name="name" id={`${id}-name`} label="Naam" variant="standard" required autoComplete="name" />
                <TextField name="celphone" id={`${id}-celphone`} label="Telefoonnummer" variant="standard" required autoComplete="tel" />
                <TextField name="email" id={`${id}-email`} label="E-mail" variant="standard" required autoComplete="email" />
                <TextField
                    name="goal"
                    id={`${id}-goal`}
                    label="Wat is jouw doel?"
                    variant="standard"
                    select
                    SelectProps={{ native: true }}
                    defaultValue=""
                >
                    <option value=""></option>
                    <option value="Afvallen">Afvallen</option>
                    <option value="Spieropbouw / sterker worden">Spieropbouw / sterker worden</option>
                    <option value="Meer energie & betere leefstijl">Meer energie & betere leefstijl</option>
                    <option value="Fitter oud worden / vitaliteit">Fitter oud worden / vitaliteit</option>
                    <option value="Anders / weet ik nog niet">Anders / weet ik nog niet</option>
                </TextField>
                <Button
                    variant="outlined"
                    type="submit"
                    sx={{
                        mt: 1,
                        fontWeight: 700,
                        fontSize: '1rem',
                        background: `linear-gradient(135deg, ${accent} 0%, #3a8fb8 100%)`,
                        boxShadow: `0 4px 20px ${accent}50`,
                        '&:hover': {
                            boxShadow: `0 8px 30px ${accent}70`,
                        },
                    }}
                >
                    Plan mijn gratis kennismaking
                </Button>
            </FormControl>
        </form>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, my: 2 }}>
            <Box sx={{ flex: 1, height: '1px', background: 'rgba(0,0,0,0.12)' }} />
            <Typography sx={{ color: 'rgba(0,0,0,0.45)', fontSize: '0.78rem' }}>of direct</Typography>
            <Box sx={{ flex: 1, height: '1px', background: 'rgba(0,0,0,0.12)' }} />
        </Box>

        <Button
            fullWidth
            href={whatsappHref(projectVariables.COMPANY_PHONE, WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLead('whatsapp')}
            startIcon={<WhatsAppIcon />}
            sx={{
                py: 1.1,
                fontWeight: 700,
                fontSize: '0.95rem',
                textTransform: 'none',
                color: '#fff',
                borderRadius: 2,
                background: '#25D366',
                boxShadow: '0 4px 16px rgba(37,211,102,0.4)',
                '&:hover': { background: '#1ebe5b', boxShadow: '0 8px 24px rgba(37,211,102,0.55)' },
            }}
        >
            Stuur een WhatsApp
        </Button>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mt: 1.5, flexWrap: 'wrap' }}>
            <Box sx={{ display: 'flex', gap: 0.3 }}>
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} color="#FFC107" />
                ))}
            </Box>
            <Typography sx={{ color: 'rgba(0,0,0,0.55)', fontSize: '0.78rem' }}>
                Gewaardeerd met een 9,4 door 100+ klanten
            </Typography>
        </Box>
    </Box>
);

export const GratisKennismakingPage = () => {
    const { isMobile, isTabletOrSmaller } = useIsMobile();

    return (
        <AppShell>
            {/* ── Minimale header: geen menu = geen afleiding ── */}
            <Box
                component="header"
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 10,
                    py: 2,
                }}
            >
                <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Link href="/" aria-label="Home">
                        <OptimizedImage
                            src="/images/logo-white-v2.png"
                            alt={projectVariables.COMPANY_NAME}
                            height={isMobile ? 34 : 44}
                            loading="eager"
                            style={{ display: 'block' }}
                        />
                    </Link>
                    <Button
                        href={phoneHref(projectVariables.COMPANY_PHONE)}
                        onClick={() => trackLead('phone')}
                        startIcon={<PhoneIcon />}
                        sx={{
                            color: '#fff',
                            border: '1.5px solid rgba(255,255,255,0.25)',
                            borderRadius: '50px',
                            px: { xs: 2, md: 3 },
                            py: 0.8,
                            fontSize: '0.85rem',
                            textTransform: 'none',
                            backdropFilter: 'blur(10px)',
                            background: 'rgba(255,255,255,0.05)',
                            '&:hover': { borderColor: accent, color: accent },
                        }}
                    >
                        {isMobile ? 'Bel ons' : projectVariables.COMPANY_PHONE}
                    </Button>
                </Container>
            </Box>

            {/* ── Hero met leadformulier ── */}
            <Box
                component="section"
                sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    minHeight: isTabletOrSmaller ? 'auto' : '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#0c0c0c',
                }}
            >
                <Box sx={{ position: 'absolute', inset: 0 }}>
                    <OptimizedImage
                        src="/images/2026/2026-1.jpg"
                        alt="Personal training studio in Zeist"
                        loading="eager"
                        fetchPriority="high"
                        sizes="100vw"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        background:
                            'linear-gradient(105deg, rgba(12,12,12,0.92) 0%, rgba(12,12,12,0.75) 45%, rgba(12,12,12,0.55) 100%)',
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 2,
                        background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
                    }}
                />

                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: { xs: 12, md: 14 } }}>
                    <Grid container spacing={isTabletOrSmaller ? 5 : 8} alignItems="center">
                        <Grid item xs={12} md={7}>
                            <Box sx={{ animation: `${fadeIn} 0.7s ease 0.1s both` }}>
                                <Typography
                                    sx={{
                                        color: accent,
                                        fontSize: '0.72rem',
                                        fontWeight: 500,
                                        letterSpacing: 5,
                                        textTransform: 'uppercase',
                                        mb: 1.5,
                                    }}
                                >
                                    Personal training & leefstijl — Zeist
                                </Typography>
                                <Typography
                                    variant="h1"
                                    component="h1"
                                    sx={{
                                        fontSize: isMobile ? '2.1rem !important' : '3.4rem',
                                        lineHeight: 1.05,
                                        mb: 2.5,
                                    }}
                                >
                                    Fitter, sterker en{' '}
                                    <Box
                                        component="span"
                                        sx={{
                                            background: `linear-gradient(90deg, ${accent}, #7dd3fc)`,
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                        }}
                                    >
                                        meer energie
                                    </Box>
                                </Typography>
                                <Typography
                                    sx={{
                                        color: 'rgba(255,255,255,0.78)',
                                        fontSize: isMobile ? '0.95rem' : '1.08rem',
                                        lineHeight: 1.8,
                                        maxWidth: 520,
                                        mb: 3.5,
                                    }}
                                >
                                    Geen vluchtige resultaten, maar duurzame verandering. Persoonlijke begeleiding in
                                    onze eigen studio in Zeist — met aandacht voor beweging, voeding en rust.
                                </Typography>

                                <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, mb: 4 }}>
                                    {heroUsps.map((usp) => (
                                        <Box
                                            component="li"
                                            key={usp}
                                            sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}
                                        >
                                            <CheckCircleIcon sx={{ color: accent, fontSize: 22, flexShrink: 0 }} />
                                            <Typography sx={{ color: 'rgba(255,255,255,0.9)', fontSize: isMobile ? '0.9rem' : '1rem' }}>
                                                {usp}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '2rem', fontFamily: 'Exo', lineHeight: 1 }}>
                                            9,4
                                        </Typography>
                                        <Box>
                                            <Box sx={{ display: 'flex', gap: 0.3 }}>
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} size={14} color="#FFC107" />
                                                ))}
                                            </Box>
                                            <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.7rem', letterSpacing: 1 }}>
                                                KLANTSCORE
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ width: '1px', height: 32, background: 'rgba(255,255,255,0.25)' }} />
                                    <Typography sx={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem' }}>
                                        100+ tevreden klanten gingen je voor
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={5}>
                            <Box sx={{ animation: `${fadeIn} 0.7s ease 0.35s both` }}>
                                <LeadForm id="kennismaking-form" />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* ── Statistieken strip ── */}
            <Box component="section" sx={{ background: '#151515', borderBottom: `1px solid ${accent}20` }}>
                <Container maxWidth="lg" sx={{ py: { xs: 4, md: 5 } }}>
                    <Grid container spacing={isMobile ? 3 : 4} justifyContent="center">
                        {stats.map((stat) => (
                            <Grid item xs={6} md={3} key={stat.label} sx={{ textAlign: 'center' }}>
                                <Typography
                                    sx={{
                                        color: accent,
                                        fontWeight: 800,
                                        fontFamily: 'Exo',
                                        fontSize: isMobile ? '1.8rem' : '2.4rem',
                                        lineHeight: 1,
                                        mb: 0.5,
                                    }}
                                >
                                    {stat.value}
                                </Typography>
                                <Typography
                                    sx={{
                                        color: 'rgba(255,255,255,0.6)',
                                        fontSize: '0.75rem',
                                        letterSpacing: 1,
                                        textTransform: 'uppercase',
                                    }}
                                >
                                    {stat.label}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* ── Onze aanpak: 3 stappen ── */}
            <Box component="section" sx={{ background: '#151515' }}>
                <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 }, textAlign: 'center' }}>
                    <Typography variant="subtitle1" sx={{ color: accent }}>
                        Onze aanpak
                    </Typography>
                    <Typography variant="h4" component="h2" sx={{ color: '#fff', mb: 2 }}>
                        Zo werken wij aan jouw resultaat
                    </Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.65)', maxWidth: 620, mx: 'auto', lineHeight: 1.8, mb: 7 }}>
                        Wij geloven dat echte verandering begint bij balans: beweging, voeding en rust. Daarom starten
                        we altijd met een goed gesprek — niet met een standaard schema.
                    </Typography>

                    <Grid container spacing={isMobile ? 3 : 4}>
                        {steps.map((step) => (
                            <Grid item xs={12} md={4} key={step.number}>
                                <Box
                                    sx={{
                                        height: '100%',
                                        textAlign: 'left',
                                        p: { xs: 3, md: 4 },
                                        borderRadius: 3,
                                        background: 'rgba(90,183,219,0.05)',
                                        border: '1px solid rgba(90,183,219,0.15)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            background: 'rgba(90,183,219,0.1)',
                                            borderColor: accent,
                                            transform: 'translateY(-4px)',
                                        },
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            color: accent,
                                            fontFamily: 'Exo',
                                            fontWeight: 800,
                                            fontSize: '2.2rem',
                                            opacity: 0.85,
                                            mb: 1,
                                        }}
                                    >
                                        {step.number}
                                    </Typography>
                                    <Typography sx={{ color: '#fff', fontFamily: 'Exo', fontWeight: 700, fontSize: '1.2rem', mb: 1.5 }}>
                                        {step.title}
                                    </Typography>
                                    <Typography sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, fontSize: '0.92rem' }}>
                                        {step.body}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>

                    <Button
                        href="#kennismaking-form"
                        sx={{
                            mt: 6,
                            px: 4,
                            py: 1.5,
                            borderRadius: '50px',
                            fontWeight: 700,
                            textTransform: 'none',
                            fontSize: '0.95rem',
                            color: '#0c0c0c',
                            background: `linear-gradient(135deg, ${accent} 0%, #3a9bc4 100%)`,
                            boxShadow: `0 4px 20px ${accent}40`,
                            '&:hover': {
                                boxShadow: `0 8px 30px ${accent}60`,
                                transform: 'translateY(-2px)',
                            },
                            transition: 'all 0.3s ease',
                        }}
                    >
                        Start met stap 1 — gratis kennismaking
                    </Button>
                </Container>
            </Box>

            {/* ── Cultuur: meer dan een sportschool ── */}
            <Box
                component="section"
                sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    background: 'linear-gradient(165deg, #0a0a0a 0%, #1a1a2e 40%, #16213e 100%)',
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '15%',
                        left: '-10%',
                        width: '50%',
                        height: '60%',
                        background: `radial-gradient(ellipse, ${accent}15 0%, transparent 70%)`,
                        filter: 'blur(60px)',
                    }}
                />
                <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 }, position: 'relative', zIndex: 1 }}>
                    <Grid container spacing={isMobile ? 4 : 8} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
                                <Box sx={{ borderRadius: 3, overflow: 'hidden', aspectRatio: '3 / 4', boxShadow: '0 16px 40px rgba(0,0,0,0.4)' }}>
                                    <OptimizedImage
                                        src="/images/2026/2026-54.jpg"
                                        alt="Persoonlijke begeleiding tijdens training"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </Box>
                                <Box sx={{ borderRadius: 3, overflow: 'hidden', aspectRatio: '3 / 4', mt: 4, boxShadow: '0 16px 40px rgba(0,0,0,0.4)' }}>
                                    <OptimizedImage
                                        src="/images/2026/2026-3.jpg"
                                        alt="Het team van Lifestyle & Personal Training Zeist"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography
                                variant="overline"
                                sx={{ color: accent, fontSize: '0.75rem', letterSpacing: 5, display: 'block', mb: 1 }}
                            >
                                Waarom onze klanten blijven
                            </Typography>
                            <Typography
                                variant="h3"
                                component="h2"
                                sx={{
                                    color: '#fff',
                                    fontWeight: 700,
                                    mb: 3,
                                    lineHeight: 1.2,
                                    fontSize: isMobile ? '1.8rem' : '2.4rem',
                                }}
                            >
                                Meer dan een sportschool
                            </Typography>
                            <Typography sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 2, mb: 3, fontSize: isMobile ? '0.95rem' : '1.02rem' }}>
                                Bij Lifestyle & Personal Training Zeist train je nooit anoniem tussen de massa. In onze
                                persoonlijke, rustige en hoogwaardige studio kennen we jouw naam, jouw verhaal en jouw
                                doelen. Krachttraining is bij ons een investering in jezelf — fysiek én mentaal.
                            </Typography>
                            <Typography sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 2, mb: 4, fontSize: isMobile ? '0.95rem' : '1.02rem' }}>
                                Sem en Tim begeleiden je persoonlijk, sturen bij waar nodig en zijn ook tussen de
                                trainingen door bereikbaar voor vragen. Zo bouw je niet alleen aan een sterker lichaam,
                                maar aan een leefstijl die blijft.
                            </Typography>

                            <Box
                                sx={{
                                    borderLeft: `3px solid ${accent}`,
                                    pl: 3,
                                    py: 1,
                                    background: 'rgba(90,183,219,0.05)',
                                    borderRadius: '0 12px 12px 0',
                                }}
                            >
                                <FormatQuoteIcon sx={{ color: accent, fontSize: 28, opacity: 0.7 }} />
                                <Typography sx={{ color: '#fff', fontStyle: 'italic', lineHeight: 1.7, mb: 1 }}>
                                    Echte verandering begint bij de juiste gewoontes.
                                </Typography>
                                <Typography sx={{ color: accent, fontSize: '0.8rem', letterSpacing: 1, textTransform: 'uppercase' }}>
                                    Sem — Oprichter & Head Trainer
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* ── Resultaten van klanten ── */}
            <Box component="section" sx={{ background: '#151515' }}>
                <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 }, textAlign: 'center' }}>
                    <Typography variant="subtitle1" sx={{ color: accent }}>
                        Resultaten
                    </Typography>
                    <Typography variant="h4" component="h2" sx={{ color: '#fff', mb: 7 }}>
                        Zij zetten de eerste stap al
                    </Typography>
                    <Grid container spacing={isMobile ? 3 : 4}>
                        {testimonials.map((review) => (
                            <Grid item xs={12} md={4} key={review.name} sx={{ display: 'flex' }}>
                                <Box
                                    sx={{
                                        textAlign: 'left',
                                        p: { xs: 3, md: 4 },
                                        borderRadius: 3,
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        transition: 'all 0.3s ease',
                                        '&:hover': { borderColor: `${accent}60`, transform: 'translateY(-4px)' },
                                    }}
                                >
                                    <Box sx={{ display: 'flex', gap: 0.4, mb: 2 }}>
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={16} color="#FFC107" />
                                        ))}
                                    </Box>
                                    <Typography sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, fontSize: '0.9rem', mb: 3, flex: 1 }}>
                                        {review.text}
                                    </Typography>
                                    <Typography sx={{ color: '#fff', fontWeight: 700, fontFamily: 'Exo' }}>{review.name}</Typography>
                                    <Typography sx={{ color: accent, fontSize: '0.8rem' }}>{review.result}</Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* ── FAQ ── */}
            <Box component="section" sx={{ background: '#0f0f0f' }}>
                <Container maxWidth="md" sx={{ py: { xs: 8, md: 12 } }}>
                    <Typography variant="subtitle1" sx={{ color: accent, textAlign: 'center' }}>
                        Veelgestelde vragen
                    </Typography>
                    <Typography variant="h4" component="h2" sx={{ color: '#fff', mb: 6, textAlign: 'center' }}>
                        Alles wat je wilt weten
                    </Typography>
                    {faqs.map((faq) => (
                        <Accordion
                            key={faq.question}
                            disableGutters
                            sx={{
                                background: 'rgba(255,255,255,0.03)',
                                color: '#fff',
                                border: '1px solid rgba(255,255,255,0.08)',
                                borderRadius: '12px !important',
                                mb: 2,
                                '&::before': { display: 'none' },
                                boxShadow: 'none',
                            }}
                        >
                            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: accent }} />}>
                                <Typography sx={{ fontWeight: 600, fontFamily: 'Exo', fontSize: '1rem' }}>{faq.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, fontSize: '0.92rem' }}>
                                    {faq.answer}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Container>
            </Box>

            {/* ── Laatste CTA ── */}
            <Box
                component="section"
                sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    background: `linear-gradient(135deg, ${accent} 0%, #3a8fb8 100%)`,
                }}
            >
                <Box sx={{ position: 'absolute', top: -40, right: -40, width: 180, height: 180, borderRadius: '50%', background: 'rgba(255,255,255,0.07)' }} />
                <Box sx={{ position: 'absolute', bottom: -50, left: '15%', width: 130, height: 130, borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
                <Container maxWidth="md" sx={{ py: { xs: 8, md: 10 }, textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <Typography
                        variant="h4"
                        component="h2"
                        sx={{ color: '#fff', fontWeight: 700, mb: 2, fontSize: isMobile ? '1.7rem' : undefined }}
                    >
                        Klaar om de eerste stap te zetten?
                    </Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, maxWidth: 560, mx: 'auto', mb: 4 }}>
                        Plan een gratis en vrijblijvende kennismaking. Een kop koffie, een goed gesprek en een
                        rondleiding door onze studio — daarna beslis jij.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Button
                            href="#kennismaking-form"
                            sx={{
                                px: 4,
                                py: 1.6,
                                borderRadius: '50px',
                                fontWeight: 700,
                                textTransform: 'none',
                                fontSize: '0.95rem',
                                color: accent,
                                background: '#fff',
                                boxShadow: '0 6px 24px rgba(0,0,0,0.2)',
                                '&:hover': { background: '#f0f9fd', transform: 'translateY(-2px)' },
                                transition: 'all 0.3s ease',
                            }}
                        >
                            Plan mijn gratis kennismaking
                        </Button>
                        <Button
                            href={phoneHref(projectVariables.COMPANY_PHONE)}
                            onClick={() => trackLead('phone')}
                            startIcon={<PhoneIcon />}
                            sx={{
                                px: 4,
                                py: 1.6,
                                borderRadius: '50px',
                                fontWeight: 600,
                                textTransform: 'none',
                                fontSize: '0.95rem',
                                color: '#fff',
                                border: '1.5px solid rgba(255,255,255,0.5)',
                                '&:hover': { borderColor: '#fff', background: 'rgba(255,255,255,0.1)' },
                            }}
                        >
                            Of bel Sem: {projectVariables.COMPANY_PHONE}
                        </Button>
                    </Box>
                </Container>
            </Box>

            {/* ── Compacte footer ── */}
            <Box component="footer" sx={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <Container maxWidth="lg" sx={{ py: 4 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: 2,
                            textAlign: isMobile ? 'center' : 'left',
                        }}
                    >
                        <OptimizedImage src="/images/logo-white-v2.png" alt={projectVariables.COMPANY_NAME} height={30} />
                        <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', lineHeight: 1.8 }}>
                            {projectVariables.COMPANY_ADDRESS} · {projectVariables.COMPANY_EMAIL} · KVK {projectVariables.COMPANY_KVK}
                        </Typography>
                        <Link href="/" sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', '&:hover': { color: accent } }}>
                            Naar de website →
                        </Link>
                    </Box>
                </Container>
            </Box>

            {/* ── Sticky CTA op mobiel ── */}
            {isTabletOrSmaller && (
                <Box
                    sx={{
                        position: 'fixed',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        zIndex: 1200,
                        background: 'rgba(0,0,0,0.92)',
                        backdropFilter: 'blur(10px)',
                        borderTop: `1px solid ${accent}30`,
                        p: 1.5,
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 1.5,
                    }}
                >
                    <Button
                        href="#kennismaking-form"
                        sx={{
                            flex: 1,
                            maxWidth: 320,
                            py: 1.2,
                            borderRadius: '50px',
                            fontWeight: 700,
                            textTransform: 'none',
                            color: '#0c0c0c',
                            background: `linear-gradient(135deg, ${accent} 0%, #3a9bc4 100%)`,
                            boxShadow: `0 4px 20px ${accent}40`,
                        }}
                    >
                        Plan kennismaking
                    </Button>
                    <Button
                        href={whatsappHref(projectVariables.COMPANY_PHONE, WHATSAPP_MESSAGE)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackLead('whatsapp')}
                        aria-label="Stuur een WhatsApp"
                        sx={{
                            minWidth: 0,
                            px: 2,
                            py: 1.2,
                            borderRadius: '50px',
                            color: '#fff',
                            background: '#25D366',
                            boxShadow: '0 4px 16px rgba(37,211,102,0.4)',
                            '&:hover': { background: '#1ebe5b' },
                        }}
                    >
                        <WhatsAppIcon />
                    </Button>
                </Box>
            )}
        </AppShell>
    );
};

export default GratisKennismakingPage;
