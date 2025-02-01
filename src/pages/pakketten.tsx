import { Box, Button, Link, Typography, useTheme } from '@mui/material';
import React, { useEffect } from 'react';
import { Divider } from '../components/molecules/Divider';
import { Heading } from '../components/molecules/Heading';
import { SchemaTable } from '../components/molecules/SchemaTable';
import { DefaultContainer } from '../components/pagelayout/DefaultContainer';
import { Layout } from '../components/pagelayout/Layout';
import { balancedLifestyleSchema, combiSchema, dietSchema, onlineCoachingSchema, personalTrainingSchema, trainingSchema } from '../data/schema';
import useIsMobile from '../hooks/useMobile';
import { getRouteUrl, HeaderRoutesEnum } from '../types/HeaderRoute';

export const packages = (props: any) => {
    const theme = useTheme();
    const { isMobile, isTabletOrSmaller } = useIsMobile();
    const [scrollElementsMounted, setScrollElementsMounted] = React.useState(false);

    useEffect(() => {
        const hashElement = props.location.hash && document.querySelector(props.location.hash);

        if (hashElement) {
            hashElement.scrollIntoView();
        }
    }, [scrollElementsMounted]);

    return (
        <Layout location={props.location}>
            <Heading
                align="center"
                title="Pakketten"
                subtitle="Kies een pakket dat aansluit op jouw doelen en start vandaag met het verbeteren van jouw leefstijl."
            />
            <Box
                sx={{
                    background: theme.palette.common.black,
                }}
            >
                <DefaultContainer maxWidth="lg" component="section">
                    <Typography variant="subtitle2" sx={{ textAlign: 'center', mb: 3, color: theme.palette.common.white }}>
                        Ik ben op zoek naar
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                            variant="outlined"
                            href={`#balanced-lifestyle`}
                            sx={{ width: isMobile ? '80%' : 'inherit', boxShadow: '0 0 20px 2px #b2c138', textAlign: 'center' }}
                        >
                            🏆 Balanced Lifestyle challenge
                        </Button>
                    </Box>

                    <Divider />

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: isTabletOrSmaller ? 3 : 1 }}>
                        <Button variant="outlined" href="#personal-training" sx={{ width: isMobile ? '80%' : 'inherit' }}>
                            Personal training
                        </Button>
                        <Button variant="outlined" href={`#voedingsschema`} sx={{ width: isMobile ? '80%' : 'inherit' }}>
                            Voedingsschema
                        </Button>
                        <Button variant="outlined" href="#trainingsschema" sx={{ width: isMobile ? '80%' : 'inherit' }}>
                            Trainingsschema
                        </Button>
                        <Button variant="outlined" href="#combi-schema" sx={{ width: isMobile ? '80%' : 'inherit' }}>
                            Combi schema
                        </Button>
                    </Box>
                </DefaultContainer>
            </Box>
            <Box component="section">
                <DefaultContainer maxWidth="lg">
                    {/* <PackageTabs theme={theme} /> */}

                    <SchemaTable
                        title="Personal training (óók aan huis)"
                        schema={personalTrainingSchema}
                        tableHead={['Dienst', 'Traject', 'Trainingsduur', 'Aantal']}
                        id="personal-training"
                        afterElement={
                            <Typography variant="body2" sx={{ mt: 3, color: theme.palette.primary.main }}>
                                <i>Bij een tweede training in de week geldt een korting van 20%.</i>
                            </Typography>
                        }
                    >
                        <Typography variant="body2" sx={{ mb: 3, color: theme.palette.primary.main }}>
                            Meer weten over personal training? klik dan <Link href={getRouteUrl(HeaderRoutesEnum.PERSONAL_TRAINING)}>hier</Link>.
                        </Typography>
                    </SchemaTable>
                </DefaultContainer>
            </Box>

            <Box sx={{ background: theme.palette.grey[100] }} component="section">
                <DefaultContainer maxWidth="lg">
                    <Typography variant="h2" component="h2" sx={{ textAlign: 'center', mb: 3, color: theme.palette.common.white }}>
                        Contact opnemen
                    </Typography>
                    <Typography variant="subtitle2" sx={{ textAlign: 'center', mb: 3, color: theme.palette.secondary.main }}>
                        Heb je vragen over de pakketten of wil je een afspraak maken? Neem dan contact met ons op.
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            gap: isTabletOrSmaller ? 3 : 1,
                        }}
                    >
                        <Button variant="outlined" href={getRouteUrl(HeaderRoutesEnum.CONTACT)} sx={{ mr: 2, width: isMobile ? '80%' : 'inherit' }}>
                            Neem contact op
                        </Button>
                    </Box>
                </DefaultContainer>
            </Box>

            <Box component="section">
                <DefaultContainer maxWidth="lg">
                    <SchemaTable
                        title="Voedingsschema's"
                        description="Bij het opstellen van een voedingsschema houden we rekening met: geslacht, leeftijd, gewicht en lengte."
                        schema={dietSchema}
                        tableHead={['Voedingsschema']}
                        id="voedingsschema"
                    />
                    <SchemaTable
                        title="Trainingsschema's"
                        description="
                        Bij het opstellen van een trainingsschema houden we rekening met: geslacht, leeftijd, gewicht en lengte.
                        "
                        schema={trainingSchema}
                        tableHead={['Trainingsschema']}
                        id="trainingsschema"
                    />
                    <SchemaTable title="Combi schema's" schema={combiSchema} tableHead={['Schema']} id="combi-schema" />
                </DefaultContainer>
            </Box>
        </Layout>
    );
};

export default packages;
