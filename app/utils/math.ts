/**
 * Adds two numbers.
 *
 * @param {number} a - The first number to add.
 * @param {number} b - The second number to add.
 * @returns {number} The sum of the two numbers.
 */
function add(a: number, b: number): number {
    return a + b
}

function subtract(a: number, b: number): number {
    return a - b
}

function multiply(a: number, b: number): number {
    return a * b
}

function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error('Cannot divide by zero')
    }
    return a / b
}

export { add, subtract, multiply, divide }
