import { Container, Typography, Link, Paper } from '@mui/material'

export default function AboutPage() {
    return (
        <Container maxWidth='md' sx={{ py: 4 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant='h5' gutterBottom>
                    About NOAA Data Visualizer
                </Typography>

                <Typography variant='body1' paragraph>
                    This project is a demo web application built with{' '}
                    <strong>Next.js 15</strong>, <strong>React 19</strong>,{' '}
                    <strong>TypeScript</strong>, and{' '}
                    <strong>Material UI</strong>. It visualizes real-time{' '}
                    <strong>geomagnetic K-index data</strong> from the{' '}
                    <Link
                        href='https://www.swpc.noaa.gov/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        NOAA Space Weather Prediction Center (SWPC)
                    </Link>
                    .
                </Typography>

                <Typography variant='body1' paragraph>
                    The goal of the project is to learn the following
                    development practices:
                </Typography>

                <ul>
                    <li>Server-Side Rendering (SSR) with revalidation</li>
                    <li>Responsive UI with Material UI</li>
                    <li>Light/Dark theming support</li>
                    <li>Reusable chart components (Recharts)</li>
                    <li>Extensible app structure for future datasets</li>
                </ul>
            </Paper>
        </Container>
    )
}
