import React from 'react';
import { Button, FormControl, TextField, Typography, useTheme } from '@mui/material';

export const ContactForm = () => {
    const theme = useTheme();

    return (
        <form name="Contactformulier" method="POST" data-netlify="true" netlify-honeypot="gender">
            <input type="hidden" name="gender" />
            <input type="hidden" name="form-name" value="Contactformulier" />
            <FormControl
                fullWidth={true}
                margin="normal"
                sx={{
                    ['> div']: { marginBottom: '20px' },
                    padding: '32px',
                    background: theme.palette.common.white,
                }}
            >
                <TextField name="name" id="name" label="Naam" variant="standard" required={true} autoComplete="name" />
                <TextField name="celphone" id="celphone" label="Telefoonnummer" variant="standard" required={true} autoComplete="tel" />
                <TextField name="email" id="email" label="E-mail" variant="standard" required={true} autoComplete="email" />
                <TextField name="company" id="company" label="Bedrijf (optioneel)" variant="standard" />
                <TextField
                    name="description"
                    id="description"
                    label="Omschrijving"
                    variant="outlined"
                    multiline={true}
                    rows={5}
                    sx={{ background: 'white' }}
                />
                <Button variant="outlined" type="submit">
                    Versturen
                </Button>
            </FormControl>
        </form>
    );
};
