import React from 'react';
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme } from '@mui/material';
import { SimpleSchema } from '../../types/Schema';

export interface SchemaTableProps {
    title: string;
    schema: SimpleSchema[];
    tableHead: string[];
}

export const SchemaTable: React.FC<SchemaTableProps> = (props) => {
    const { title, schema, tableHead } = props;

    return (
        <Box sx={{ py: 10 }}>
            <Typography variant="h2" component="h2">
                {title}
            </Typography>
            <TableContainer component={Paper}>
                <Table aria-label="Voedingsschema tabel">
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
                        {schema.map((row) => (
                            <TableRow key={row.name}>
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
