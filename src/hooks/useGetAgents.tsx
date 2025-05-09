import { useState, useEffect } from "react";
import { getAgents } from "@/api/agentsApi";
import { IAgent } from "@/types";


export function useGetAgents() {
    const [agents, setAgents] = useState<IAgent[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<null | string>(null);

    useEffect(() => {
        async function fetchAgents() {
            try {
                const data = await getAgents();
                setAgents(data);
            } catch (e: unknown) {
                setError((e as Error).message || "Something went wrong");
            } finally {
                setLoading(false);
            }
        }

        fetchAgents();
    }, []);

    return { agents, loading, error };
}
