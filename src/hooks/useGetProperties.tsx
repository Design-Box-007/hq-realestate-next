// hooks/useGetProperties.ts

import { useState, useEffect } from "react";
import { getProperties } from "@/api/propertiesApi"; // Update with the correct path to your properties API
import { IProperty } from "@/types"; // Assuming your property type is IProperty

export function useGetProperties() {
    const [properties, setProperties] = useState<IProperty[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<null | string>(null);

    useEffect(() => {
        async function fetchProperties() {
            try {
                const data = await getProperties(); // Fetch properties using the function you defined
                setProperties(data);
            } catch (e: unknown) {
                setError((e as Error).message || "Something went wrong");
            } finally {
                setLoading(false);
            }
        }

        fetchProperties();
    }, []);

    return { properties, loading, error };
}
