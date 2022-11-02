import { useTheme } from '@mui/material';
import React from 'react';
import { Heading } from '../components/molecules/Heading';
import { Layout } from '../components/pagelayout/Layout';
import useIsMobile from '../hooks/useMobile';

export const MeatPage = (props: any) => {
    const theme = useTheme();
    const { isMobile, isTabletOrSmaller } = useIsMobile();

    return (
        <>
            <Layout location={props.location}>
                <Heading title="Vlees" subtitle="Wat een blije koe wel niet allemaal kan doen." />
            </Layout>
        </>
    );
};

export default MeatPage;
