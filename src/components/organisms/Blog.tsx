import { ArrowLeft } from '@mui/icons-material';
import { Box, Button, Chip, Typography, Icon } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import useIsMobile from '../../hooks/useMobile';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

export type BlogProps = {
    title: string;
    subtitle?: string;
    image?: string;
    content: string;
    keywords: string[];
    date: string;
};

export const Blog: React.FC<BlogProps> = (props) => {
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
                        return <Chip label={keyword} key={index} sx={{ ['> *']: { color: 'black' } }} />;
                    })}
                </Box>
            )}
            <ReactMarkdown linkTarget="_blank" rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]} children={props.content}></ReactMarkdown>

            <Box sx={{ mt: isMobile ? 5 : 10 }}>
                <Button variant="contained" color="primary" href={'/blogs'}>
                    <Icon component={ArrowLeft} sx={{ mr: 1 }} />
                    Ga terug
                </Button>
            </Box>
        </Box>
    );
};
