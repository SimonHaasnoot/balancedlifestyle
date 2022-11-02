import React from 'react';
import { Box, Button, List, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme } from '@mui/material';
import { SimpleSchema } from '../../types/Schema';
import useIsMobile from '../../hooks/useMobile';
import { useInView } from 'react-intersection-observer';

export interface SchemaTableProps {
    title: string;
    description?: string;
    schema: SimpleSchema[];
    tableHead: string[];
    id?: string;
}

export const SchemaTable: React.FC<SchemaTableProps> = (props) => {
    const { title, schema, tableHead } = props;
    const theme = useTheme();
    const { isMobile } = useIsMobile();
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.5,
    });

    return (
        <Box sx={{ pb: isMobile ? 5 : 10, textAlign: 'center', maxWidth: tableHead.length > 2 ? '100%' : isMobile ? '100%' : '80%', margin: 'auto' }}>
            <Typography
                variant="h3"
                component="h2"
                sx={{ color: theme.palette.secondary.main, transition: 'transform 0.5s ease-in-out', transform: inView ? 'scale(1.05)' : 'scale(1)' }}
                id={props.id}
            >
                {title}
            </Typography>
            {props.description && (
                <Typography variant="body2" sx={{ color: theme.palette.primary.main, mb: 3 }}>
                    {props.description}
                </Typography>
            )}
            <TableContainer component={Paper} ref={ref}>
                <Table aria-label={title}>
                    <TableHead>
                        <TableRow>
                            {tableHead.map((head, key) => {
                                return (
                                    <TableCell key={key} align={key !== 0 ? 'right' : 'inherit'}>
                                        {head}
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {schema.map((row, index) => (
                            <TableRow key={`${row.name} + ${index}`}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                {row.time && <TableCell align="right">{row.time}</TableCell>}
                                {row.quantity && <TableCell align="right">{row.time}</TableCell>}
                                <TableCell align="right">{row.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};
