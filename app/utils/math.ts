/**
 * Adds two numbers.
 * @param a - The first number.
 * @param b - The second number.
 * @returns The sum of the two numbers.
 */
function add(a: number, b: number): number {
    return a + b
}

/**
 * Subtracts two numbers.
 * @param a - The first number.
 * @param b - The second number.
 * @returns The difference between the two numbers.
 */
function subtract(a: number, b: number): number {
    return a - b
}

/**
 * Multiplies two numbers.
 * @param a - The first number.
 * @param b - The second number.
 * @returns The product of the two numbers.
 */
function multiply(a: number, b: number): number {
    return a * b
}

/**
 * Divides two numbers.
 * @param a - The dividend.
 * @param b - The divisor.
 * @returns The quotient of the two numbers.
 * @throws {Error} If the divisor is zero.
 */
function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error('Cannot divide by zero')
    }
    return a / b
}

export { add, subtract, multiply, divide }
