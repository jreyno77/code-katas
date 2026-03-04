import { ok } from 'assert/strict';
import { isLeapYear } from '../src/leapYear.ts'

describe('Leap year Unit tests', () => {
    it('should work for number types of the correct format', () => {
        const year: number = 2025;
        ok(isLeapYear(year));
    });

    it('should work for string types of the correct format', () => {
        const year: string = '2025';
        ok(isLeapYear(year));
    });
    
    it('should work for string types of the correct format', () => {
        const year: Date = new Date(2025);
        ok(isLeapYear(year));
    });
});