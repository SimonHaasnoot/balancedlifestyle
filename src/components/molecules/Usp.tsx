import { Box, Icon, Link, SvgIconTypeMap, Typography, useMediaQuery, useTheme } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import React from 'react';

export type UspProps = {
    title: string;
    body: {
        text: string;
        link?: string;
    };
    icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
    sx?: {};
    children?: any;
};

export const Usp: React.FC<UspProps> = (props) => {
    const theme = useTheme();

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box
                sx={{
                    height: '90px',
                    width: '90px',
                    borderRadius: '100%',
                    mb: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: theme.palette.primary.main,
                    [':hover']: {
                        backgroundColor: theme.palette.secondary.main,
                        ['svg']: {
                            color: theme.palette.common.white,
                        },
                    },
                }}
            >
                <Icon component={props.icon} sx={{ fontSize: '30px', color: theme.palette.secondary.main }} />
            </Box>
            <Box
                sx={{
                    width: 100,
                    height: 2,
                    backgroundColor: theme.palette.warning.main,
                    margin: 'auto',
                    mb: 2,
                }}
            />
            <Typography variant="subtitle1" sx={{ color: theme.palette.common.white, mb: 2 }}>
                {props.title}
            </Typography>

            <Typography variant="body2" sx={{ color: theme.palette.common.white }}>
                {props.body.link ? (
                    <Link href={props.body.link} sx={{ color: theme.palette.common.white }}>
                        {props.body.text}
                    </Link>
                ) : (
                    props.body.text
                )}
            </Typography>
        </Box>
    );
};
