'use client' // if using Next.js App Router, otherwise skip this line

import { Agent, getAgents } from '@/api/agentsApi'
import { useEffect } from 'react'

export default function Debug() {
    useEffect(() => {
        async function getData() {
            const data = await getAgents();
            console.log(data);
        }

        getData()
    }, [])

    return (
        <div style={{ padding: 20 }}>
            <h1>Debug Page</h1>
            <p>Check console for blog data.</p>
        </div>
    )
}
