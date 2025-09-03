'use client'

import { ThemeProvider, CssBaseline } from '@mui/material'
import { ReactNode, useMemo, useState } from 'react'
import { getTheme } from '../theme'
import NavBar from './NavBar'

export default function ThemeProviderWrapper({
    children,
}: {
    children: ReactNode
}) {
    const [mode, setMode] = useState<'light' | 'dark'>('light')

    const toggleColorMode = () =>
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'))

    const theme = useMemo(() => getTheme(mode), [mode])

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavBar toggleColorMode={toggleColorMode} mode={mode} />
            {children}
        </ThemeProvider>
    )
}
