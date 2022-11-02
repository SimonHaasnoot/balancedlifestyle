import { useTheme } from '@mui/material';
import React from 'react';
import { Heading } from '../components/molecules/Heading';
import { Layout } from '../components/pagelayout/Layout';
import useIsMobile from '../hooks/useMobile';

export const PersonalTrainingPage = (props: any) => {
    const theme = useTheme();
    const { isMobile, isTabletOrSmaller } = useIsMobile();

    return (
        <>
            <Layout location={props.location}>
                <Heading title="Personal training" subtitle="Iets over personal training." />
            </Layout>
        </>
    );
};

export default PersonalTrainingPage;
