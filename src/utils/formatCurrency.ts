export function formatNumber(num: number): string {
    if (num >= 1_000_000) {
        return (num / 1_000_000) + 'M';
    } else if (num >= 1_000) {
        return (num / 1_000) + 'K';
    } else {
        return num.toString();
    }
}