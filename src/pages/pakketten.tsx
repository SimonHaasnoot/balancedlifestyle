import { Box, Button, Typography, useTheme } from '@mui/material';
import React, { useEffect } from 'react';
import { Heading } from '../components/molecules/Heading';
import { SchemaTable } from '../components/molecules/SchemaTable';
import { DefaultContainer } from '../components/pagelayout/DefaultContainer';
import { Layout } from '../components/pagelayout/Layout';
import { combiSchema, dietSchema, onlineCoachingSchema, personalTrainingSchema, trainingSchema } from '../data/schema';
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
            <Heading align="center" title="Pakketten" subtitle="Kies een pakket dat bij jou past en start vandaag nog met je nieuwe levensstijl!" />
            <Box
                sx={{
                    background: theme.palette.common.black,
                }}
            >
                <DefaultContainer maxWidth="lg">
                    <Typography variant="subtitle2" sx={{ textAlign: 'center', mb: 3, color: theme.palette.common.white }}>
                        Ik ben op zoek naar
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: isTabletOrSmaller ? 3 : 1 }}>
                        <Button variant="outlined" href={`#voedingsschema`} sx={{ mr: 2, width: isMobile ? '80%' : 'inherit'}}>
                            Voedingsschema
                        </Button>
                        <Button variant="outlined" href="#trainingsschema" sx={{ mr: 2, width: isMobile ? '80%' : 'inherit'}}>
                            Trainingsschema
                        </Button>
                        <Button variant="outlined" href="#combi-schema" sx={{ mr: 2, width: isMobile ? '80%' : 'inherit'}}>
                            Combi schema
                        </Button>
                        <Button variant="outlined" href="#personal-training" sx={{ mr: 2, width: isMobile ? '80%' : 'inherit'}}>
                            Personal training
                        </Button>
                        <Button variant="outlined" href="#online-coaching" sx={{ mr: 2, width: isMobile ? '80%' : 'inherit'}}>
                            Online coaching
                        </Button>
                    </Box>
                </DefaultContainer>
            </Box>
            <Box>
                <DefaultContainer maxWidth="lg">
                    <SchemaTable
                        title="Voedingsschema's"
                        description="Bij het opstellen van een voedingsschema houden we rekening met: geslacht, leeftijd, gewicht & lengte, aankomen/afvallen en de duur ( 3 - 6 - 9 - 12 maanden)."
                        schema={dietSchema}
                        tableHead={['Voedingsschema', 'Prijs']}
                        id="voedingsschema"
                    />
                    <SchemaTable
                        title="Trainingsschema's"
                        description="
                        Bij het opstellen van een trainingsschema houden we rekening met: geslacht, leeftijd, gewicht & lengte, aantal x per week, duur (3 - 6 - 9 - 12 maanden), full body, upper/lower, push/pull/legs, bro split.
                        "
                        schema={trainingSchema}
                        tableHead={['Trainingsschema', 'Prijs']}
                        id="trainingsschema"
                    />
                </DefaultContainer>
            </Box>

            <Box sx={{ background: theme.palette.grey[100] }}>
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

            <Box>
                <DefaultContainer maxWidth="lg">
                    <SchemaTable title="Combi schema's" schema={combiSchema} tableHead={['Schema', 'Prijs']} id="combi-schema" />
                    <SchemaTable
                        title="Personal training"
                        schema={personalTrainingSchema}
                        tableHead={['Dienst', 'Traject', 'Aantal', 'Prijs']}
                        id="personal-training"
                    />
                    <SchemaTable
                        title="Online coaching"
                        schema={onlineCoachingSchema}
                        tableHead={['Aangeboden', 'Totale duur', 'Contact', 'Prijs']}
                        id="online-coaching"
                        isMountedCallback={setScrollElementsMounted}
                    />
                </DefaultContainer>
            </Box>
        </Layout>
    );
};

export default packages;
