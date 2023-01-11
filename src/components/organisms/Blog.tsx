import { ArrowLeft } from '@mui/icons-material';
import { Box, Button, Chip, Typography, useTheme, Icon } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import useIsMobile from '../../hooks/useMobile';
import { getRouteUrl, HeaderRoutesEnum } from '../../types/HeaderRoute';

export type BlogProps = {
    title: string;
    subtitle?: string;
    image?: string;
    content: string;
    keywords: string[];
    date: string;
};

export const Blog: React.FC<BlogProps> = (props) => {
    const theme = useTheme();
    const { isMobile } = useIsMobile();

    return (
        <Box component={'section'}>
            <StaticImage src="../../images/pt/pt1.jpg" alt="Blog afbeelding" />

            <Typography
                variant="h4"
                component="h3"
                sx={{ fontWeight: 700, mb: 0, display: 'inline-block', padding: 3, mt: '-50px', position: 'relative', background: '#f5f5f5' }}
            >
                {props.title}
            </Typography>
            <Box sx={{ mb: 2 }}>
                <Typography variant="caption">{props.date}</Typography>
            </Box>

            {props.keywords?.length && (
                <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
                    {props.keywords.map((keyword, index) => {
                        return <Chip label={keyword} key={index} />;
                    })}
                </Box>
            )}
            <Typography variant="body1" sx={{ mb: 2 }} dangerouslySetInnerHTML={{ __html: props.content }}></Typography>

            <Box sx={{ mt: isMobile ? 5 : 10 }}>
                <Button variant="contained" color="primary" href={getRouteUrl(HeaderRoutesEnum.BLOGS)}>
                    <Icon component={ArrowLeft} sx={{ mr: 1 }} />
                    Ga terug
                </Button>
            </Box>
        </Box>
    );
};
