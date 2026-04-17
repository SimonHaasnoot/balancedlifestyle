import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { AppShell } from '../shell/AppShell';
import { Heading } from '../molecules/Heading';
import { DefaultContainer } from '../pagelayout/DefaultContainer';
import { Layout } from '../pagelayout/Layout';
import Grid from '@mui/material/Grid';

export type BlogSummary = {
    slug: string;
    title: string;
    image?: string;
    date: string;
};

type Props = { blogs: BlogSummary[] };

export default function BlogsListPage({ blogs }: Props) {
    return (
        <AppShell>
        <Layout>
            <Heading
                title="Blogs"
                subtitle="Elke maand wordt er een blog geüpload over belangrijke vraagstukken, feitjes, fabels en de nieuwste informatie betreft een gebalanceerde leefstijl."
            />
            <DefaultContainer maxWidth="lg">
                <Grid container spacing={2}>
                    {blogs.map((node) => {
                        const href = `/blogs/${node.slug}/`;
                        return (
                            <Grid size={{ xs: 12, md: 4 }} key={node.slug}>
                                <Card>
                                    <CardActionArea href={href}>
                                        {node.image && <CardMedia sx={{ height: 200 }} image={node.image} title={node.title} />}
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {node.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {node.date}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" href={href}>
                                                Lezen
                                            </Button>
                                        </CardActions>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </DefaultContainer>
        </Layout>
        </AppShell>
    );
}
