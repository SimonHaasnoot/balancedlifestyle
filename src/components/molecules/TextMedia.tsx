import React from 'react';
import { Box, Button, Icon, Typography, useTheme } from '@mui/material';
import useIsMobile from '../../hooks/useMobile';
import { DefaultContainer } from '../pagelayout/DefaultContainer';

export type TextMediaProps = {
    background?: string;
    title?: string;
    headline?: {
        text: string;
        icon?: any;
    };
    text?: string;
    image?: {
        src: string;
        alt: string;
    };
    titleColor?: string;
    textSx?: {};
    containerSx?: {};
    reverse?: boolean; // reverse content
    children?: React.ReactNode;
    id?: string;
    cta?: {
        text: string;
        href: string;
        icon?: any;
    };
};

export const TextMedia: React.FC<TextMediaProps> = (props) => {
    const { isMobile } = useIsMobile();
    const theme = useTheme();
    let background = props.background || 'white';
    let titleColor = props.titleColor || theme.palette.primary.main;

    return (
        <Box sx={{ background, ...props.containerSx }} id={props.id}>
            <DefaultContainer maxWidth="lg">
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: isMobile ? 2 : 5 }}>
                    <Box sx={{ maxWidth: isMobile ? '100%' : '80%', margin: 'auto', textAlign: 'center' }}>
                        {props.title && (
                            <Typography variant="h2" component="h2" color={titleColor}>
                                {props.title}
                            </Typography>
                        )}
                        {props.headline?.text && (
                            <Box sx={{ position: 'relative' }}>
                                {props.headline.icon && (
                                    <Icon
                                        component={props.headline.icon}
                                        sx={{
                                            position: 'absolute',
                                            left: isMobile ? '-10px' : '-40px',
                                            top: '-40px',
                                            fontSize: '50px',
                                            color: titleColor,
                                        }}
                                    />
                                )}
                                <Typography
                                    variant="subtitle1"
                                    component="p"
                                    dangerouslySetInnerHTML={{ __html: props.headline.text }}
                                    sx={{ color: props.background ? 'white' : 'black' }}
                                />
                            </Box>
                        )}
                    </Box>

                    {(props.text || props.image) && (
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: isMobile ? 'column' : props.reverse ? 'row-reverse' : 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                gap: 5,
                                padding: '40px 0',
                            }}
                        >
                            {props.text && (
                                <Box
                                    sx={{
                                        flex: 1,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        flexWrap: 'wrap',
                                    }}
                                >
                                    <Typography
                                        variant="subtitle2"
                                        component="p"
                                        sx={props.textSx}
                                        dangerouslySetInnerHTML={{ __html: props.text }}
                                    />
                                    {props.cta && (
                                        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginRight: 'auto' }}>
                                            <Button variant="outlined" color="primary" href={props.cta.href}>
                                                {props.cta.text}

                                                {props.cta.icon && <Icon component={props.cta.icon} sx={{ marginLeft: '10px' }} />}
                                            </Button>
                                        </Box>
                                    )}
                                </Box>
                            )}

                            {props.image && (
                                <Box
                                    sx={{
                                        flex: 1,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                    }}
                                >
                                    <img
                                        src={props.image.src}
                                        alt={props.image.alt}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', maxWidth: isMobile ? '100%' : '80%', borderRadius: '40px' }}
                                    />
                                </Box>
                            )}
                        </Box>
                    )}
                </Box>
                {props.children ? props.children : null}
            </DefaultContainer>
        </Box>
    );
};
