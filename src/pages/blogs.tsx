import { useTheme } from '@mui/material';
import React from 'react';
import { Heading } from '../components/molecules/Heading';
import { Layout } from '../components/pagelayout/Layout';
import useIsMobile from '../hooks/useMobile';

export const BlogPage = (props: any) => {
    const theme = useTheme();
    const { isMobile, isTabletOrSmaller } = useIsMobile();

    return (
        <>
            <Layout location={props.location}>
                <Heading
                    title="Blogs"
                    subtitle="Elke maand wordt er een blog geüpload over belangrijke vraagstukken, feitjes, fabels en de nieuwste informatie betreft
                                een gebalanceerde leefstijl."
                />

            </Layout>
        </>
    );
};

export default BlogPage;
