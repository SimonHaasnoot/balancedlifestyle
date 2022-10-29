import React from 'react';
import { Box, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme } from '@mui/material';
import { Layout } from '../components/pagelayout/Layout';
import { Helmet } from 'react-helmet';
import { DefaultContainer } from '../components/pagelayout/DefaultContainer';
import useIsMobile from '../hooks/useMobile';

export const packages = (props: any) => {
    const theme = useTheme();
    const { isMobile } = useIsMobile();

    return (
        <>
            <Helmet>
                <title>Pakketten - Balanced Lifestyle</title>
            </Helmet>
            <Layout location={props.location}>
                <Box sx={{ background: theme.palette.grey[100] }}>
                    <DefaultContainer maxWidth="lg">
                        <TableContainer component={Paper}>
                            <Table aria-label="Prijs tabel">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Schema</TableCell>
                                        <TableCell align="right">Prijs</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row">
                                            Voedingsschema standaard
                                        </TableCell>
                                        <TableCell align="right">€ 40 excl. btw</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </DefaultContainer>
                </Box>
            </Layout>
        </>
    );
};

export default packages;
