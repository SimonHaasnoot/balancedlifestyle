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
                            image: <StaticImage src="../images/growth/mirron.jpg" alt="Mirron progressie" />,
                            package: 'online coaching',
                            text: '"Sem van Balanced Lifestyle heeft mij zeer goed op weg geholpen met mijn fitness journey! Door hem heb ik de juiste motivatie gekregen en hij heeft een gepersonaliseerd schema opgesteld met de juiste voeding. Heel tevreden dus!"',
                        },
                        {
                            title: 'Wiebe',
                            subtitle: '20 kg afgevallen in 18 maanden',
                            image: <StaticImage src="../images/growth/wiebe.png" alt="Wiebe progressie" />,
                            package: 'personal training',
                            text: '"In de afgelopen periode heb ik samen met Sem erg veel stappen gemaakt. Ik ben sterker geworden en meer dan 20kg afgevallen."',
                        },
                    ]}
                />
            </DefaultContainer>
        </Box>
    );
};
