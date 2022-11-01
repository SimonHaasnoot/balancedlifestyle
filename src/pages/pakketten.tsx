import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet';
import { DefaultContainer } from '../components/pagelayout/DefaultContainer';
import { Layout } from '../components/pagelayout/Layout';
import useIsMobile from '../hooks/useMobile';
import { dietSchema, trainingSchema, combiSchema, personalTrainingSchema, onlineCoachingSchema } from '../data/schema';
import { SchemaTable } from '../components/molecules/SchemaTable';

export const packages = (props: any) => {
    const theme = useTheme();
    const { isMobile, isTabletOrSmaller } = useIsMobile();

    return (
        <>
            <Helmet>
                <title>Pakketten - Balanced Lifestyle</title>
            </Helmet>
            <Layout location={props.location}>
                <Box sx={{ background: theme.palette.grey[100], pt: isMobile ? 10 : 20 }}>
                    <DefaultContainer maxWidth="lg">
                        <Typography variant="h1" component="h1" sx={{ textAlign: 'center', mb: 3 }}>
                            Pakketten
                        </Typography>
                        <Typography variant="subtitle2" sx={{ textAlign: 'center', mb: 3, color: theme.palette.secondary.main }}>
                            Kies een pakket dat bij jou past en start vandaag nog met je nieuwe levensstijl!
                        </Typography>
                    </DefaultContainer>
                </Box>
                <Box
                    sx={{
                        background: theme.palette.common.black,
                    }}
                >
                    <DefaultContainer maxWidth="lg">
                        <Typography variant="subtitle2" sx={{ textAlign: 'center', mb: 3, color: theme.palette.common.white }}>
                            Ik ben op zoek naar
                        </Typography>
                        <Box
                            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: isTabletOrSmaller ? 3 : 1 }}
                        >
                            <Button variant="outlined" sx={{ mr: 2, width: isMobile ? '80%' : 'inherit' }}>
                                Voedingsschema
                            </Button>
                            <Button variant="outlined" sx={{ mr: 2, width: isMobile ? '80%' : 'inherit' }}>
                                Trainingsschema
                            </Button>
                            <Button variant="outlined" sx={{ mr: 2, width: isMobile ? '80%' : 'inherit' }}>
                                Combi schema
                            </Button>
                            <Button variant="outlined" sx={{ mr: 2, width: isMobile ? '80%' : 'inherit' }}>
                                Personal training
                            </Button>
                            <Button variant="outlined" sx={{ mr: 2, width: isMobile ? '80%' : 'inherit' }}>
                                Online coaching
                            </Button>
                        </Box>
                    </DefaultContainer>
                </Box>
                <Box>
                    <DefaultContainer maxWidth="lg">
                        <SchemaTable title="Voedingsschema's" schema={dietSchema} tableHead={['Voedingsschema', 'Prijs']} />
                        <SchemaTable title="Trainingsschema's" schema={trainingSchema} tableHead={['Trainingsschema', 'Prijs']} />
                        <SchemaTable title="Combi schema's" schema={combiSchema} tableHead={['Schema', 'Prijs']} />
                        <SchemaTable title="Personal training" schema={personalTrainingSchema} tableHead={['Dienst', 'Traject', 'Aantal', 'Prijs']} />
                        <SchemaTable
                            title="Online coaching"
                            schema={onlineCoachingSchema}
                            tableHead={['Aangeboden', 'Totale duur', 'Aantal', 'Prijs']}
                        />
                    </DefaultContainer>
                </Box>
            </Layout>
        </>
    );
};

export default packages;
