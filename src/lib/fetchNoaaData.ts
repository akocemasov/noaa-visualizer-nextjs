const NOAA_URL = 'https://services.swpc.noaa.gov/json/planetary_k_index_1m.json'

function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function fetchNoaaData(retries = 3): Promise<any[]> {
    try {
        const res = await fetch(NOAA_URL, {
            next: { revalidate: 60 },
        })

        if (!res.ok) {
            throw new Error(`NOAA fetch failed: ${res.statusText}`)
        }

        return res.json()
    } catch (err) {
        if (retries > 0) {
            console.warn(
                `NOAA fetch failed, retrying in 1 minute... (${retries} retries left)`
            )
            await delay(60_000) // wait 1 minute before retry
            return fetchNoaaData(retries - 1)
        }
        throw new Error('Failed to fetch NOAA data after multiple retries.')
    }
}
