import { add, subtract, multiply, divide } from '../../app/utils/math'

describe('Math functions', () => {
    test('add() should return the sum of two numbers', () => {
        expect(add(1, 2)).toBe(3)
        expect(add(-1, -1)).toBe(-2)
        expect(add(0, 0)).toBe(0)
    })

    test('subtract() should return the difference between two numbers', () => {
        expect(subtract(2, 1)).toBe(1)
        expect(subtract(-1, -1)).toBe(0)
        expect(subtract(0, 0)).toBe(0)
    })

    test('multiply() should return the product of two numbers', () => {
        expect(multiply(2, 3)).toBe(6)
        expect(multiply(-1, -1)).toBe(1)
        expect(multiply(0, 5)).toBe(0)
    })

    test('divide() should return the quotient of two numbers', () => {
        expect(divide(6, 3)).toBe(2)
        expect(divide(-4, -2)).toBe(2)
        expect(divide(0, 1)).toBe(0)
    })

    test('divide() should throw an error when dividing by zero', () => {
        expect(() => divide(1, 0)).toThrow('Cannot divide by zero')
    })
})
