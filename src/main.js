export class Main {

    emailValidator(email) {
        
        emailValide = false;

        pasVide(email);{
            emailValide = emailValide && (email !== null && email !== undefined && email.length > 0);
        }
       /* aUnarobase(email){
            emailValide = e && email.includes('@');
        } */

        
        

    }
}