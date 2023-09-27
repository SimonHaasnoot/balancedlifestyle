import * as React from 'react';
import { Helmet } from 'react-helmet';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../src/theme';
import '../../src/css/app.css';
import 'tippy.js/dist/tippy.css'; // optional

export default function TopLayout(props) {
    return (
        <React.Fragment>
            <Helmet>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <meta name="keywords" content="Personal Training, Zeist, Sem van de Griendt, Lifestyle, Sport, Training, Fitness" />
                <title>Balanced Lifestyle</title>
                <link href="https://fonts.googleapis.com/css2?family=Exo:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Numans:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
            </Helmet>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                {props.children}
            </ThemeProvider>
        </React.Fragment>
    );
}
