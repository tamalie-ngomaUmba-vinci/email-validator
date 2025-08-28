import { Main } from '../../src/main.js';

const main = new Main();

describe('Email Validator', () => {
    it("test email vides", function() {
        expect(main.emailValidator("")).toBeFalse();
        expect(main.emailValidator(null)).toBeFalse();
    });

    it("pas d'espace", function() {
        expect(main.emailValidator("   ")).toBeFalse();
        expect(main.emailValidator(" rg ")).toBeFalse();
        expect(main.emailValidator(" gzeg")).toBeFalse();

        /*expect(main.emailValidator("iugaoirug")).toBeTrue();
        //expect(main.emailValidator("iugaoi125rug")).toBeTrue();*/

    });

    it("test contient @", function() {
        expect(main.emailValidator("testemail.com")).toBe(false);
        expect(main.emailValidator("te")).toBe(false);

        expect(main.emailValidator("test@emai.com")).toBe(true);
        expect(main.emailValidator("test@emai@com")).toBe(false);
    });


    it("test contient . apres @", function() {
       // expect(main.emailValidator("testemail.@com")).toBe(false);
        expect(main.emailValidator("test@emai@com")).toBe(false);

        expect(main.emailValidator("test@emai.com")).toBe(true);
        
    });
   


});
