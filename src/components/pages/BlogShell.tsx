import { AppShell } from '../shell/AppShell';
import { Box, Chip, Typography } from '@mui/material';
import { Layout } from '../pagelayout/Layout';
import { DefaultContainer } from '../pagelayout/DefaultContainer';

type Props = {
    title: string;
    date: string;
    keywords: string[];
    image?: string;
};

export default function BlogShell({ title, date, keywords, image }: Props) {
    return (
        <AppShell>
            <Layout disableHeaderTransition>
                <DefaultContainer maxWidth="lg" sx={{ mt: 10 }}>
                    <Box component="section">
                        <img
                            src={image || '/images/pt/pt1.jpg'}
                            alt={title}
                            style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
                        />

                        <Typography
                            variant="h4"
                            component="h1"
                            sx={{
                                fontWeight: 700,
                                mb: 0,
                                display: 'inline-block',
                                padding: 3,
                                mt: '-50px',
                                position: 'relative',
                                background: '#f5f5f5',
                            }}
                        >
                            {title}
                        </Typography>
                        <Box sx={{ mb: 2 }}>
                            <Typography variant="caption">{date}</Typography>
                        </Box>

                        {keywords?.length > 0 && (
                            <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
                                {keywords.map((keyword) => (
                                    <Chip label={keyword} key={keyword} sx={{ ['> *']: { color: 'black' } }} />
                                ))}
                            </Box>
                        )}
                    </Box>
                </DefaultContainer>
            </Layout>
        </AppShell>
    );
}
