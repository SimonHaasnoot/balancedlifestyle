import * as React from 'react';
import { graphql } from 'gatsby';
import { Blog } from '../../components/organisms/Blog';
import { Layout } from '../../components/pagelayout/Layout';
import { DefaultContainer } from '../../components/pagelayout/DefaultContainer';
import { Grid } from '@mui/material';
import { Helmet } from 'react-helmet';

export default function BlogPostTemplate({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data; // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark;

    return (
        <Layout disableHeaderTransition={true}>
            <Helmet>
                <title>{frontmatter.title} - Lifestyle & Personal Training Zeist</title>
            </Helmet>
            <DefaultContainer maxWidth="lg" sx={{ mt: 10 }}>
                <Grid container>
                    <Grid item xs={12} md={9}>
                        <Blog title={frontmatter.title} date={frontmatter.date} keywords={frontmatter.tags} content={html} />
                    </Grid>
                    <Grid item xs={12} md={3}></Grid>
                </Grid>
            </DefaultContainer>
        </Layout>
    );
}

export const pageQuery = graphql`
    query($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                path
                image
                date(formatString: "MMMM DD, YYYY")
                tags
                title
            }
        }
    }
`;
