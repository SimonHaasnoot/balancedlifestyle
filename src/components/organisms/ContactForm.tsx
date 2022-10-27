import React from 'react';
import { Button, FormControl, TextField, Typography } from '@mui/material';

export const ContactForm = () => {
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
                    borderRadius: '12px',
                    background: '#f7f7f7',
                }}
            >
                <Typography sx={{ pb: 3 }}>
                    Vragen, offerte of in contact komen? Vul onderstaand formulier in en wij nemen contact met je op. Bellen of WhatsApp ook mogelijk.
                </Typography>
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
                <Button variant="outlined" type="submit" >
                    Versturen
                </Button>
            </FormControl>
        </form>
    );
};
