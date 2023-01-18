import React from 'react';
import { Button, FormControl, TextField, useTheme } from '@mui/material';
import { navigate } from 'gatsby';

export const ContactForm = () => {
    const theme = useTheme();

    // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();

    //     const form = event.currentTarget;
    //     const formData = new FormData(form);

    //     fetch('/', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //         body: new URLSearchParams(formData as any).toString(),
    //     })
    //         .then(() => {
    //             window.location.href = '/bedankt';
    //         })
    //         .catch(() => alert('Er ging iets fout, probeer het later opnieuw.'));
    // };

    function encode(data: any) {
        return Object.keys(data)
          .map(
            (key) =>
              encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
          )
          .join("&");
      }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': event.target.getAttribute('name'),
                ...name as any,
            }),
        })
            .then(() => navigate('/bedankt/'))
            .catch((error) => alert(error));
    };

    return (
        <form name="contact" method="post" action="/bedankt" data-netlify="true" netlify-honeypot="gender">
            <input type="hidden" name="gender" />
            <input type="hidden" name="form-name" value="contact" />
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
