import React from 'react';
import { Box, Typography, useTheme, keyframes } from '@mui/material';
import { DefaultContainer } from '../pagelayout/DefaultContainer';
import { Cards } from './Cards';
import { OptimizedImage } from '../atoms/OptimizedImage';

const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
`;

export type SuccessStoriesProps = {
    title?: string;
    subtitle?: string;
    hideHeader?: boolean;
};

export const SuccessStories: React.FC<SuccessStoriesProps> = (props) => {
    const theme = useTheme();
    const accent = theme.palette.secondary.main;

    return (
        <Box
            component="section"
            sx={{
                background: props.hideHeader
                    ? 'transparent'
                    : `linear-gradient(180deg, ${theme.palette.grey[100]} 0%, #0c0c0c 100%)`,
                py: props.hideHeader ? { xs: 4, md: 6 } : { xs: 8, md: 12 },
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Subtle background glow */}
            {!props.hideHeader && (
            <Box sx={{
                position: 'absolute',
                top: '20%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: 600,
                height: 600,
                borderRadius: '50%',
                background: `radial-gradient(circle, rgba(90,183,219,0.06) 0%, transparent 70%)`,
                pointerEvents: 'none',
            }} />
            )}

            <DefaultContainer id="succesverhalen" maxWidth="lg">
                {/* Section header */}
                {!props.hideHeader && (
                <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}>
                    <Typography
                        sx={{
                            color: accent,
                            fontSize: '0.75rem',
                            fontWeight: 500,
                            letterSpacing: 5,
                            textTransform: 'uppercase',
                            mb: 1.5,
                        }}
                    >
                        Resultaten
                    </Typography>

                    <Typography
                        variant="h3"
                        component="h2"
                        sx={{
                            color: theme.palette.common.white,
                            fontWeight: 700,
                            mb: 2,
                            fontSize: { xs: '1.8rem', md: '2.4rem' },
                        }}
                    >
                        Persoonlijke successen
                    </Typography>

                    <Box sx={{
                        width: 60,
                        height: 2,
                        background: accent,
                        borderRadius: 1,
                        mx: 'auto',
                        mb: 3,
                    }} />

                    {props.subtitle && (
                        <Typography
                            sx={{
                                color: 'rgba(255,255,255,0.6)',
                                fontSize: '0.95rem',
                                maxWidth: 500,
                                mx: 'auto',
                                lineHeight: 1.7,
                            }}
                        >
                            Hieronder vind je een aantal voorbeelden van deelnemers die wij hebben begeleid.
                        </Typography>
                    )}
                </Box>
                )}

                <Cards
                    cards={[
                        {
                            title: 'Miron Jansen',
                            subtitle: '8kg spiermassa aangekomen in 12 maanden',
                            image: <OptimizedImage src="/images/growth/mirron.jpg" alt="Mirron progressie" />,
                            package: 'Online coaching',
                            text:
                                '"Sem van Lifestyle Personal Training heeft mij zeer goed op weg geholpen met mijn fitness journey! Door hem heb ik de juiste motivatie gekregen en hij heeft een gepersonaliseerd schema opgesteld met de juiste voeding. Heel tevreden dus!"',
                        },
                        {
                            title: 'Wiebe Palstra',
                            subtitle: '20kg afgevallen in 18 maanden',
                            image: <OptimizedImage src="/images/growth/wiebe.png" alt="Wiebe progressie" />,
                            package: 'Personal training',
                            text:
                                '"Dat uurtje sporten met Sem is een uurtje voor mijzelf, die ik in mijzelf investeer, om mij goed te laten voelen! Twee jaar verder: Ik heb meer energie, zit lekkerder in mijn vel, verleg mijn grenzen en voel mij sterk! En gestopt met roken!"',
                        },
                        {
                            title: 'Nathan Bakhuyzen',
                            subtitle: '5kg vet afgevallen en 3kg spiermassa aangekomen in 6 maanden',
                            image: <OptimizedImage src="/images/growth/nathan.jpg" alt="Nathan progressie" />,
                            package: 'Online coaching',
                            text: `"Na zelfstandig trainen in de sportschool, zocht ik professionele begeleiding. Lifestyle Personal Training heeft mij geholpen mijn doelen te verfijnen en te bereiken. Dankzij zijn voeding- en trainingsadvies en constante beschikbaarheid voor vragen, ben ik zeer tevreden over Sem's begeleiding en de kennis die hij me heeft bijgebracht. Top!"`,
                        },
                    ]}
                />
            </DefaultContainer>
        </Box>
    );
};
