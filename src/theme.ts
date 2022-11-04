import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const color01 = '#000000'; // Black
export const color02 = '#5ab7db'; // Blue
export const color03 = '#fcfcfc'; // White
export const color04 = '#90cee6'; // Less Blue
export const color05 = '#c6e5f1'; // Less less Blue

let theme = createTheme();

// A custom theme for this app
theme = createTheme({
    palette: {
        primary: {
            main: color01,
        },
        secondary: {
            main: color02,
        },
        info: {
            main: color04,
        },
        error: {
            main: red.A400,
        },
        grey: {
            100: '#151515',
        },
    },
    typography: {
        fontFamily: ['Exo', 'Nunito', 'Numans'].join(','),
        h1: {
            // background: `linear-gradient(to right, ${color03}, ${color02})`,
            // WebkitBackgroundClip: 'text',
            // WebkitTextFillColor: 'transparent',
            // textShadow: '4px 3px rgba(255 255 255 / 15%)',
            lineHeight: 1,
            fontWeight: 700,
            color: color03,
            fontSize: '5.2em',
            fontFamily: 'Exo',
            textTransform: 'uppercase',
            [theme.breakpoints.between('xs', 'sm')]: {
                fontSize: 48,
            },
            [theme.breakpoints.between('sm', 'lg')]: {
                fontSize: 64,
            },
            wordBreak: 'break-word',
        },
        h2: {
            marginBottom: 24,
            fontWeight: 'normal',
            fontSize: 64,
            color: color01,
            fontFamily: 'Nunito',
            letterSpacing: '2px',
            [theme.breakpoints.between('xs', 'sm')]: {
                fontSize: 40,
            },
            [theme.breakpoints.between('sm', 'lg')]: {
                fontSize: 56,
            },
            wordBreak: 'break-word',
        },
        h3: {
            marginBottom: 24,
            fontWeight: 'normal',
            fontSize: 56,
            color: color01,
            fontFamily: 'Nunito',
            letterSpacing: '2px',
            [theme.breakpoints.between('xs', 'sm')]: {
                fontSize: 32,
            },
            [theme.breakpoints.between('sm', 'lg')]: {
                fontSize: 48,
            },
            wordBreak: 'break-word',
        },
        h4: {
            marginBottom: 24,
            fontWeight: 'normal',
            fontSize: 48,
            color: color01,
            fontFamily: 'Nunito',
            letterSpacing: '2px',
            [theme.breakpoints.between('xs', 'sm')]: {
                fontSize: 24,
            },
            [theme.breakpoints.between('sm', 'lg')]: {
                fontSize: 40,
            },
            wordBreak: 'break-word',
        },
        subtitle1: {
            lineHeight: 1.3,
            textTransform: 'uppercase',
            fontSize: 24,
            fontFamily: 'Numans',
            [theme.breakpoints.between('xs', 'sm')]: {
                fontSize: 18,
            },
        },
        subtitle2: {
            lineHeight: 1,
            fontSize: 22,
            fontFamily: 'Numans',
            [theme.breakpoints.between('xs', 'sm')]: {
                fontSize: 16,
            },
        },
        body1: {
            fontWeight: 500,
            fontSize: 18,
            fontFamily: 'Numans',
        },
        body2: {
            fontWeight: 400,
            fontSize: 16,
            fontFamily: 'Numans',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                outlined: {
                    'background': color02,
                    'color': 'white',
                    'padding': '16px 32px',
                    'border': 0,
                    '&:hover': {
                        border: 0,
                        background: color04,
                        transform: 'translateY(-2px)',
                        transition: 'all 0.2s ease-in-out',
                    },
                },
                contained: {
                    'background': '#ffffff',
                    'color': color04,
                    'padding': '16px 32px',
                    'border': `2px solid ${color04}`,
                    'boxShadow': 'none',
                    '&:hover': {
                        background: color04,
                        color: '#ffffff',
                        transition: 'all 0.2s ease-in-out',
                    },
                },
                containedSecondary: {
                    background: '#5ab7db91',
                    color: '#ffffff',
                },
            },
        },
        MuiImageListItem: {
            styleOverrides: {
                masonry: {
                    borderRadius: 12,
                    overflow: 'hidden',
                    [':hover img']: {
                        transform: 'scale(1.2)',
                        transition: '.3s ease-in-out',
                    },
                },
            },
        },
        MuiIcon: {
            styleOverrides: {
                root: {
                    ':hover': {
                        color: color04,
                    },
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    [theme.breakpoints.between('xs', 'sm')]: {
                        fontSize: 13,
                    },
                },
            },
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    th: {
                        fontWeight: 700,
                    },
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    background: color02,
                    color: color03,
                },
            },
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        color: color02,
                    },
                },
            },
        },
    },
});

export default theme;
