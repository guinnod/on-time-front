export default function calculateProgress(value, max) {
    let result = value / max;
    if (result.toString() === NaN.toString()) {
        result = 0;
    }
    return Math.round(result * 100);
}