export class Main {

    emailValidator(email) {
        
         //1. pas vide ?
        if(email === null){ 
            return false;
        }

        if(email.length === 0) {
            return false;
        }

        //2. contient que des caractères
        /*if(!email.includes(String||Number)) {
            return false;
        }*/

        
        //3. contient @
        if(!email.includes("@")) {
            return false;
        }
        
        //3. contient . apres @        
        if(!email.includes(".") && (email.indexOf(".") < email.indexOf("@"))) {
            return false;
        }

        
        //4. pas d'espaces
        //5. contient du texte avant @
        if(email.indexOf("@") < 1 ) {
            return false;
        }

        // pas de @ en fin de mail
        if(email.indexOf("@") === email.length -1 ) {
            return false;
        }

        //6. contient du texte entre @ et .  */  
        if(email.indexOf(".") - email.indexOf("@") < 2 ) {
            return false;
        }
        
        return true;
    }
}
