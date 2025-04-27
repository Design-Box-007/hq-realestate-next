'use client' // if using Next.js App Router, otherwise skip this line

import { useGetAgents } from '@/hooks/useGetAgents'

export default function Debug() {

    const { agents } = useGetAgents();

    console.log(agents);

    return (
        <div style={{ padding: 20 }}>
            <h1>Debug Page</h1>
            <p>Check console for blog data.</p>
        </div>
    )
}
