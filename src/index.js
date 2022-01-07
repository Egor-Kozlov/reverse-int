module.exports = function reverse (n) {
    n = n.toString().split('').reverse()
    if (n[n.length - 1] === '-') {
        n.splice(-1)
    }
    return Number(n.join(''))
}