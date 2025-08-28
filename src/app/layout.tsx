import type { Metadata } from 'next'
import ThemeProviderWrapper from '../components/ThemeProviderWrapper'

export const metadata: Metadata = {
    title: 'NOAA Data Visualizer',
    description: 'Visualize NOAA space weather data with charts',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en'>
            <body>
                <ThemeProviderWrapper>
                    <main>{children}</main>
                </ThemeProviderWrapper>
            </body>
        </html>
    )
}
