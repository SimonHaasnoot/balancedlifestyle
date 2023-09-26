import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Heading } from '../../components/molecules/Heading';
import { DefaultContainer } from '../../components/pagelayout/DefaultContainer';
import { Layout } from '../../components/pagelayout/Layout';
import { graphql } from 'gatsby';
import { allMarkdownRemark } from '../../types/markdownRemark';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

type BlogPageProps = {
    data: {
        allMarkdownRemark: allMarkdownRemark;
    };
    location: Location;
};

export default function BlogPage(props: BlogPageProps) {
    const blogs = props.data?.allMarkdownRemark?.nodes || [];

    return (
        <>
            <Layout location={props.location}>
                <Heading
                    title="Blogs"
                    subtitle="Elke maand wordt er een blog geüpload over belangrijke vraagstukken, feitjes, fabels en de nieuwste informatie betreft
                                een gebalanceerde leefstijl."
                />
                <DefaultContainer maxWidth="lg">
                    <Grid2 container spacing={2}>
                        {blogs.map((node, index) => {
                            return (
                                <Grid2 xs={12} md={4} key={index}>
                                    <Card>
                                        <CardActionArea href={node.frontmatter.path}>
                                            <CardMedia sx={{ height: 200 }} image={node.frontmatter.image} title={node.frontmatter.title} />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {node.frontmatter.title}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {node.frontmatter.date}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button size="small" href={node.frontmatter.path}>
                                                    Lezen
                                                </Button>
                                            </CardActions>
                                        </CardActionArea>
                                    </Card>
                                </Grid2>
                            );
                        })}
                    </Grid2>
                </DefaultContainer>
            </Layout>
        </>
    );
}

// export const pageQuery = graphql`
//     query IndexPageQuery {
//         allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(blog)/" } }) {
//             nodes {
//                 frontmatter {
//                     path
//                     date(formatString: "MMMM DD, YYYY")
//                     title
//                     image
//                 }
//             }
//         }
//     }
// `;
