import React, { useEffect } from 'react';
import { Box, Button, List, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme } from '@mui/material';
import { SimpleSchema } from '../../types/Schema';
import useIsMobile from '../../hooks/useMobile';
import { useInView } from 'react-intersection-observer';
import Tippy from '@tippyjs/react';
import { Tooltip } from '../atoms/Tooltip';

export interface SchemaTableProps {
    title: string;
    description?: string;
    schema: SimpleSchema[];
    tableHead: string[];
    id?: string;
    isMountedCallback?: (isMounted: boolean) => void;
}

export const SchemaTable: React.FC<SchemaTableProps> = (props) => {
    const { title, schema, tableHead } = props;
    const theme = useTheme();
    const { isMobile } = useIsMobile();
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.5,
    });

    useEffect(() => {
        if (props.isMountedCallback) {
            props.isMountedCallback(true);
        }
    }, []);

    return (
        <Box sx={{ pb: isMobile ? 5 : 10, maxWidth: isMobile ? '100%' : '80%', margin: 'auto' }}>
            <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                    color: theme.palette.secondary.main,
                    transition: 'transform 0.5s ease-in-out',
                    transform: inView ? 'scale(1.05)' : 'scale(1)',
                    mb: 1
                }}
                id={props.id}
            >
                {title}
            </Typography>
            {props.description && (
                <Typography variant="body2" sx={{ color: theme.palette.primary.main }}>
                    {props.description}
                </Typography>
            )}
            <Box
                sx={{
                    width: 100,
                    height: 5,
                    mb: 5,
                    mt: 2,
                    backgroundColor: theme.palette.warning.main,
                }}
            />
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
                                <TableCell component="th" scope="row" sx={{ position: 'relative' }}>
                                    {row.name}
                                    {row.tooltip && <Tooltip text={row.tooltip}/>}
                                </TableCell>
                                {row.time && <TableCell align="right">{row.time}</TableCell>}
                                {row.quantity && <TableCell align="right">{row.quantity}</TableCell>}
                                <TableCell align="right">{row.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};
