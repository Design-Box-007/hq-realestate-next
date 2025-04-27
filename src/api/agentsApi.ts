// /lib/api/agentsApi.ts

import { IAgent } from "@/types";

export interface Agent {
    id: number;
    title: { rendered: string };
    acf: IAgent;
}

// Fetch all agents and return only acf fields, replacing profile_image ID with URL
export async function getAgents(): Promise<IAgent[]> {
    const res = await fetch(`https://uzq.bth.mybluehostin.me/wp-json/wp/v2/hq-agent?status=publish&_=${Date.now()}`, {
        cache: 'no-store'
    });


    if (!res.ok) {
        throw new Error('Failed to fetch agents');
    }
    const data: Agent[] = await res.json();
    const acfData = await acfExtractor(data);
    return acfData;
}

// Helper to extract ACF fields and replace image ID with URL
const acfExtractor = async (data: Agent[]): Promise<IAgent[]> => {
    return Promise.all(
        data.map(async (d) => {
            const acf = d.acf;
            return acf;
        })
    );
};
