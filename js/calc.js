function sum() {
    const numbers = [...arguments]
    return numbers.reduce(function (sum, atual) {
        return sum + atual
    }, 0)
}

export function avarege() {
    return sum(...arguments) / arguments.length
}