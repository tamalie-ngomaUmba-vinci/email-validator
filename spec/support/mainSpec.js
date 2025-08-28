import { Main } from '../../src/main.js';

const main = new Main();

describe('Email Validator', () => {
    it("reponse attendue : true", function() {
        expect(main.emailValidator("trea@faoiu.be")).toBe(true);
});
});
