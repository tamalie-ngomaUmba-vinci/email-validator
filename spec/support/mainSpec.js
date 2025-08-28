import { Main } from '../../src/main.js';

const main = new Main();

describe('Email Validator', () => {
    it("test email vides", function() {
        expect(main.emailValidator("")).toBe(false);
        expect(main.emailValidator(null)).toBe(false);
    });

    it("test email avec des caracteres", function() {
        expect(main.emailValidator("plainaddress")).toBe(true);
        expect(main.emailValidator("#@%^%#$@#$@#.com")).toBe(true);
        expect(main.emailValidator("@example.com")).toBe(true);
    });

    
});
