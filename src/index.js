
// You should implement your task here.

module.exports = function towelSort (matrix) {
    return Array.isArray(matrix) ? matrix.map((array, i) => i % 2 ? array.reverse() : array).flat() : [];
}
