import { useEffect, useState } from 'react';
import useIsMobile from '../../hooks/useMobile';
import { Box, Typography } from '@mui/material';
import React from 'react';
import theme from '../../theme';

type CountdownProps = {
    date: string;
    title?: string;
};

export const Countdown: React.FC<CountdownProps> = (props: CountdownProps) => {
    const { isMobile } = useIsMobile();
    const [timeLeft, setTimeLeft] = useState<any>(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return function cleanup() {
            clearTimeout(timer);
        };
    });

    function calculateTimeLeft() {
        const difference = +new Date(props.date) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                dagen: Math.floor(difference / (1000 * 60 * 60 * 24)),
                uren: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minuten: Math.floor((difference / 1000 / 60) % 60),
                seconden: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    }

    return (
        <Box
            sx={{
                display: 'flex',
                gap: isMobile ? 1 : 2,
                textAlign: 'center',
            }}
        >
            {Object.keys(timeLeft).map((interval, index) => {
                return (
                    <Box key={index}>
                        <Typography
                            variant="h3"
                            component="h3"
                            sx={{
                                background: theme.palette.warning.main,
                                color: 'white',
                                padding: isMobile ? '0.8rem' : '1rem',
                                borderRadius: '0.5rem',
                                mb: 1,
                            }}
                        >
                            {timeLeft[interval] < 10 ? `0${timeLeft[interval]}` : timeLeft[interval]}
                        </Typography>
                        <Typography
                            variant="caption"
                            sx={{
                                color: 'white',
                            }}
                        >
                            {interval}
                        </Typography>
                    </Box>
                );
            })}
        </Box>
    );
};
