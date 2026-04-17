import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../../theme';

const cache = createCache({ key: 'css', prepend: true });

type AppShellProps = {
    children: React.ReactNode;
};

export const AppShell: React.FC<AppShellProps> = ({ children }) => {
    return (
        <CacheProvider value={cache}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </CacheProvider>
    );
};
