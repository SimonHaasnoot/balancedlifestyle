import React from 'react';
import { Button, FormControl, TextField, useTheme } from '@mui/material';

export type ContactFormProps = {
    description?: string;
};

export const ContactForm: React.FC<ContactFormProps> = (props) => {
    const theme = useTheme();

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
                {props.description && (
                    <TextField
                        name="subject"
                        id="subject"
                        label="Onderwerp"
                        variant="standard"
                        required={true}
                        value={props.description}
                        sx={{
                            visibility: 'hidden',
                            position: 'absolute',
                            opacity: 0,
                        }}
                    />
                )}
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
