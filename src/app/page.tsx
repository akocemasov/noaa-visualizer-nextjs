import ChartCard from '../components/ChartCard'
import { fetchNoaaData } from '../lib/fetchNoaaData'

export default async function Home() {
    const data = await fetchNoaaData()

    return <ChartCard title='Geomagnetic Activity' data={data} />
}
