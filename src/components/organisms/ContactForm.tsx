import React from 'react';
import { Button, FormControl, TextField, useTheme } from '@mui/material';

export const ContactForm = () => {
    const theme = useTheme();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData as any).toString(),
        })
            .then(() => {
                window.location.href = '/bedankt';
            })
            .catch(() => alert('Er ging iets fout, probeer het later opnieuw.'));
    };

    return (
        <form name="contact" method="POST" data-netlify="true" netlify-honeypot="gender" onSubmit={handleSubmit}>
            <input type="hidden" name="gender" />
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
