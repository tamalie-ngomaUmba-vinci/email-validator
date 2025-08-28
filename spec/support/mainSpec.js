import { Main } from '../../src/main.js';

const main = new Main();

describe('Email Validator', () => {
    it("test email vides", function() {
        expect(main.emailValidator("")).toBe(false);
});
});
