import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import { DefaultContainer } from '../pagelayout/DefaultContainer';
import { Divider } from '../molecules/Divider';
import { Cards } from './Cards';

export const SuccessStories: React.FC = () => {
    const theme = useTheme();

    return (
        <Box py={5}>
            <DefaultContainer>
                <Typography variant="h2" sx={{ color: theme.palette.primary.main, textAlign: 'center' }} id="succesverhalen">
                    Succesverhalen
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography variant="body1" sx={{ color: theme.palette.secondary.main, textAlign: 'center' }}>
                        Hieronder vind je een aantal voorbeelden van deelnemers die ik (heb) begeleid.
                    </Typography>
                </Box>

                <Divider />

                <Cards
                    cards={[
                        {
                            title: 'Miron Jansen',
                            subtitle: '8kg spiermassa aangekomen in 12 maanden',
                            image: <StaticImage src="../../images/growth/mirron.jpg" alt="Mirron progressie" />,
                            package: 'online coaching',
                            text: '"Sem van Balanced Lifestyle heeft mij zeer goed op weg geholpen met mijn fitness journey! Door hem heb ik de juiste motivatie gekregen en hij heeft een gepersonaliseerd schema opgesteld met de juiste voeding. Heel tevreden dus!"',
                        },
                        {
                            title: 'Wiebe Palstra',
                            subtitle: '20 kg afgevallen in 18 maanden',
                            image: <StaticImage src="../../images/growth/wiebe.png" alt="Wiebe progressie" />,
                            package: 'personal training',
                            text: '"Dat uurtje sporten met Sem is een uurtje voor mijzelf, die ik in mijzelf investeer, om mij goed te laten voelen! Twee jaar verder: Ik heb meer energie, zit lekkerder in mijn vel, verleg mijn grenzen en voel mij sterk! En gestopt met roken!"',
                        },
                    ]}
                />
            </DefaultContainer>
        </Box>
    );
};