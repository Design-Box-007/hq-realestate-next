// /lib/api/agentsApi.ts

export interface Agent {
    id: number;
    title: { rendered: string };
    acf: AgentACF
}

// Only return the ACF part
export interface AgentACF {
    name: string;
    designation: string;
    phone: string;
    email: string;
    image: string;
}

// Fetch all agents and return only acf fields
export async function getAgents(): Promise<AgentACF[]> {
    const res = await fetch('https://uzq.bth.mybluehostin.me/wp-json/wp/v2/agent');
    if (!res.ok) {
        throw new Error('Failed to fetch agents');
    }
    const data: Agent[] = await res.json();
    const acfData = acfExtractor(data);
    return acfData;
}

// Helper to extract ACF fields
const acfExtractor = (data: Agent[]): AgentACF[] => {
    return data.map((d) => d.acf);
}
