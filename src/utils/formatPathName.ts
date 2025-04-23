const formatToHyphenated = (input: string): string => {
    return input
        .trim() // Remove leading/trailing spaces
        .replace(/[^a-zA-Z0-9\s]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-') // Ensure no consecutive hyphens
        .toLowerCase(); // turn into lower case
}

export default formatToHyphenated;
