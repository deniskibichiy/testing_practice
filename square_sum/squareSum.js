export function square_sum(array) {
    return array.reduce((sum, current) => sum + current *current, 0)
};