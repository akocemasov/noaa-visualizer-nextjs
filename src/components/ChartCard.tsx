'use client'

import * as React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    Typography,
    useTheme,
    Box,
    Stack,
    Chip,
} from '@mui/material'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    ReferenceLine,
    Dot,
} from 'recharts'

export interface KpData {
    time_tag: string
    kp_index: number
    estimated_kp: number
    kp: string
}

interface ChartCardProps {
    title: string
    data: KpData[]
}

const kpThresholds = [
    { y1: 0, y2: 5, label: 'Quiet (Kp<5)', color: '#6b9127' },
    { y1: 5, y2: 6, label: 'G1 Minor Storm (Kp=5)', color: '#8f8805' },
    { y1: 6, y2: 7, label: 'G2 Moderate Storm (Kp=6)', color: '#997800' },
    { y1: 7, y2: 8, label: 'G3 Strong Storm (Kp=7)', color: '#cc7800' },
    { y1: 8, y2: 9, label: 'G4 Severe Storm (Kp=8)', color: '#cc0000' },
    { y1: 9, y2: 10, label: 'G5 Extreme Storm (Kp=9)', color: '#a00000' },
]

function getKpColor(kp: number) {
    for (const t of kpThresholds) {
        if (kp >= t.y1 && kp < t.y2) return t.color
    }
    return '#000'
}

function formatTimeUTC(time: string) {
    const d = new Date(time)
    const month = String(d.getUTCMonth() + 1).padStart(2, '0')
    const day = String(d.getUTCDate()).padStart(2, '0')
    const hours = String(d.getUTCHours()).padStart(2, '0')
    const minutes = String(d.getUTCMinutes()).padStart(2, '0')
    return `${month}-${day} ${hours}:${minutes}`
}

// Helper for X-axis ticks at each full hour
function generateHourlyTicks(data: KpData[]) {
    return data
        .filter((d) => new Date(d.time_tag).getMinutes() === 0)
        .map((d) => d.time_tag)
}

export default function ChartCard({ title, data }: ChartCardProps) {
    const theme = useTheme()
    const lastUpdate =
        data && data.length > 0 ? data[data.length - 1].time_tag : null

    const xTicks = data ? generateHourlyTicks(data) : []

    return (
        <Card sx={{ height: '100%' }}>
            <CardHeader title={title} />
            <CardContent>
                {data && data.length > 0 ? (
                    <>
                        <Box mb={1}>
                            <Typography variant='body2' color='text.secondary'>
                                Last update:{' '}
                                {lastUpdate ? formatTimeUTC(lastUpdate) : 'N/A'}
                            </Typography>
                        </Box>
                        <ResponsiveContainer width='100%' height={300}>
                            <LineChart data={data}>
                                <CartesianGrid
                                    strokeDasharray='2 2'
                                    stroke={theme.palette.divider}
                                    vertical={false}
                                />
                                <XAxis
                                    dataKey='time_tag'
                                    tickFormatter={formatTimeUTC}
                                    tick={{ fontSize: 10 }}
                                    ticks={xTicks}
                                    label={{
                                        value: 'Time (UTC)',
                                        position: 'insideBottom',
                                        offset: -5,
                                    }}
                                />
                                <YAxis
                                    ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
                                    interval={0}
                                    label={{
                                        value: 'Kp Index',
                                        angle: -90,
                                        position: 'insideLeft',
                                        offset: 10,
                                    }}
                                />

                                {kpThresholds.map((t, i) => (
                                    <ReferenceLine
                                        key={i}
                                        y={t.y1}
                                        stroke={t.color}
                                        strokeDasharray='3 3'
                                        strokeWidth={1}
                                        ifOverflow='extendDomain'
                                    />
                                ))}

                                <Tooltip
                                    labelFormatter={(value) =>
                                        formatTimeUTC(value as string)
                                    }
                                    formatter={(val: number) => [
                                        `Estimated Kp: ${val.toFixed(2)}`,
                                    ]}
                                    contentStyle={{
                                        backgroundColor:
                                            theme.palette.bgTooltip,
                                        color: theme.palette.textTooltip,
                                        border: `1px solid ${theme.palette.divider}`,
                                        borderRadius: 4,
                                    }}
                                    itemStyle={{
                                        color: theme.palette.textTooltip,
                                    }}
                                />

                                <Line
                                    type='monotone'
                                    dataKey='estimated_kp'
                                    stroke={theme.palette.primary.main}
                                    strokeWidth={2}
                                    dot={(props) => {
                                        const { cx, cy, payload } = props
                                        return (
                                            <Dot
                                                key={payload.time_tag}
                                                cx={cx}
                                                cy={cy}
                                                r={4}
                                                fill={getKpColor(
                                                    payload.estimated_kp
                                                )}
                                                stroke='#333'
                                                strokeWidth={0.5}
                                            />
                                        )
                                    }}
                                    activeDot={{ r: 6 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>

                        <Box mt={2}>
                            <Typography variant='subtitle2' gutterBottom>
                                NOAA Geomagnetic Storm Scale
                            </Typography>
                            <Stack direction='row' spacing={1} flexWrap='wrap'>
                                {kpThresholds.map((t, i) => (
                                    <Chip
                                        key={i}
                                        label={t.label}
                                        size='small'
                                        sx={{
                                            bgcolor: t.color,
                                            color:
                                                theme.palette.getContrastText(
                                                    t.color
                                                ) || 'white',
                                        }}
                                    />
                                ))}
                            </Stack>
                        </Box>
                    </>
                ) : (
                    <Typography variant='body2' color='text.secondary'>
                        No data available.
                    </Typography>
                )}
            </CardContent>
        </Card>
    )
}
