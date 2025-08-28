import { createTheme, PaletteMode } from '@mui/material'

const LIGHT_HOVER_BG = '#18497a'
const DARK_HOVER_BG = '#baddfb'

export const getTheme = (mode: PaletteMode) =>
    createTheme({
        palette: {
            mode,
            ...(mode === 'light'
                ? {
                      primary: { main: '#1976d2' },
                      secondary: { main: '#9c27b0' },
                      background: { default: '#f5f5f5', paper: '#ffffff' },
                      divider: '#e0e0e0',
                  }
                : {
                      primary: { main: '#90caf9' },
                      secondary: { main: '#ce93d8' },
                      background: { default: '#121212', paper: '#1e1e1e' },
                      divider: '#333',
                  }),
        },
        typography: {
            fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        },
        components: {
            MuiButton: {
                defaultProps: {
                    disableElevation: true,
                },
                styleOverrides: {
                    root: {
                        '&:hover': {
                            backgroundColor:
                                mode === 'light'
                                    ? LIGHT_HOVER_BG
                                    : DARK_HOVER_BG,
                        },
                    },
                },
            },
            MuiIconButton: {
                styleOverrides: {
                    root: {
                        '&:hover': {
                            backgroundColor:
                                mode === 'light'
                                    ? LIGHT_HOVER_BG
                                    : DARK_HOVER_BG,
                        },
                    },
                },
            },
            MuiChip: {
                styleOverrides: {
                    root: {
                        fontWeight: 500,
                        fontSize: '0.75rem',
                        minHeight: 24,
                        height: 24,
                    },
                },
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        borderRadius: 12,
                    },
                },
            },
            MuiCardHeader: {
                styleOverrides: {
                    root: {
                        paddingBottom: 0,
                    },
                    title: {
                        fontWeight: 600,
                        fontSize: '1.1rem',
                    },
                },
            },
            MuiCardContent: {
                styleOverrides: {
                    root: {
                        paddingTop: 12,
                    },
                },
            },
        },
    })
