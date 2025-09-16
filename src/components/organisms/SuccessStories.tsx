import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import { DefaultContainer } from '../pagelayout/DefaultContainer';
import { Divider } from '../molecules/Divider';
import { Cards } from './Cards';

export type SuccessStoriesProps = {
    title?: string;
    subtitle?: string;
};

export const SuccessStories: React.FC<SuccessStoriesProps> = (props) => {
    const theme = useTheme();

    return (
        <Box py={5} component="section">
            <DefaultContainer id='succesverhalen'>
                {props.title && (
                    <Typography variant="h2" sx={{ color: theme.palette.primary.main, textAlign: 'center' }} id="succesverhalen">
                        Persoonlijke successen
                    </Typography>
                )}
                {props.subtitle && (
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography variant="body1" sx={{ color: theme.palette.secondary.main, textAlign: 'center' }}>
                            Hieronder vind je een aantal voorbeelden van deelnemers die wij hebben begeleid.
                        </Typography>
                    </Box>
                )}

                {props.subtitle || props.title ? <Divider /> : null}

                <Cards
                    cards={[
                        {
                            title: 'Miron Jansen',
                            subtitle: '8kg spiermassa aangekomen in 12 maanden',
                            image: <StaticImage src="../../images/growth/mirron.jpg" alt="Mirron progressie" />,
                            package: 'online coaching',
                            text:
                                '"Sem van Lifestyle Personal Training heeft mij zeer goed op weg geholpen met mijn fitness journey! Door hem heb ik de juiste motivatie gekregen en hij heeft een gepersonaliseerd schema opgesteld met de juiste voeding. Heel tevreden dus!"',
                        },
                        {
                            title: 'Wiebe Palstra',
                            subtitle: '20kg afgevallen in 18 maanden',
                            image: <StaticImage src="../../images/growth/wiebe.png" alt="Wiebe progressie" />,
                            package: 'personal training',
                            text:
                                '"Dat uurtje sporten met Sem is een uurtje voor mijzelf, die ik in mijzelf investeer, om mij goed te laten voelen! Twee jaar verder: Ik heb meer energie, zit lekkerder in mijn vel, verleg mijn grenzen en voel mij sterk! En gestopt met roken!"',
                        },
                        {
                            title: 'Nathan Bakhuyzen',
                            subtitle: '5kg vet afgevallen en 3kg spiermassa aangekomen in 6 maanden',
                            image: <StaticImage src="../../images/growth/nathan.jpg" alt="Nathan progressie" />,
                            package: 'online coaching',
                            text: `"Na zelfstandig trainen in de sportschool, zocht ik professionele begeleiding. Lifestyle Personal Training heeft mij geholpen mijn doelen te verfijnen en te bereiken. Dankzij zijn voeding- en trainingsadvies en constante beschikbaarheid voor vragen, ben ik zeer tevreden over Sem's begeleiding en de kennis die hij me heeft bijgebracht. Top!"`,
                        },
                    ]}
                />
            </DefaultContainer>
        </Box>
    );
};
