function deafGrandma(){
    let check = true
    let userInput = window.prompt("HEY KID!")
    let goodbyes = 0
    while (check == true ) {
        
        if ( userInput == "GOODBYE!" ) {
            goodbyes ++    
            if ( goodbyes == 1 ) {
                userInput = prompt("LEAVING SO SOON?")
            }
            else if ( goodbyes == 2 ) {
                alert("LATER, SKATER!")
                check = false
                }  
        }
        else if ( userInput == "" ) {
        userInput= prompt("WHAT!?")
        }
        else if ( userInput.toUpperCase() != userInput ) {
            userInput= prompt("SPEAK UP, KID!")
        }
        else if ( userInput.toUpperCase() == userInput ) {
            userInput= prompt('NO, NOT SINCE 1946!')
        }
    }
}
deafGrandma()
