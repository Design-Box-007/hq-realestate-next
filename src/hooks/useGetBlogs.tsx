import { useState, useEffect } from "react";
import { getBlogs } from "@/api/blogsApi"; // Update with the correct path to your blogApi
import { IBlog } from "@/types"; // Assuming your blog type is IBlog

export function useGetBlogs() {
    const [blogs, setBlogs] = useState<IBlog[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<null | string>(null);

    useEffect(() => {
        async function fetchBlogs() {
            try {
                const data = await getBlogs(); // Fetch blogs using the function you defined
                setBlogs(data);
            } catch (e: unknown) {
                setError((e as Error).message || "Something went wrong");
            } finally {
                setLoading(false);
            }
        }

        fetchBlogs();
    }, []);

    return { blogs, loading, error };
}
