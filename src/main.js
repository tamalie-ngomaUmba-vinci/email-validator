export class Main {

    emailValidator(email) {
        
        if (email.includes('@') && email.includes('.')) {
            return true;
        }
        

    }
}