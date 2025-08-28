export class Main {

    emailValidator(email) {
        
        //1. pas vide ?
        if(email.length === 0 || email === null){ {
            return false;
        }
        //2. contient @
        //3. contient . apres @
        //4. pas d'espaces
        //5. contient du texte avant @
        //6. contient du texte entre @ et .

       
        
        return true;
    }
}
}