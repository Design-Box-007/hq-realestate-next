const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
};

// utils/formatShortDate.ts

export function formatShortDate(dateString: string): string {
    const [day, month, year] = dateString.split('/');

    if (!day || !month || !year) {
        return '';
    }

    const shortYear = year.slice(2); // Take last two digits of year
    return `${month}/${shortYear}`;
}


export default formatDate
