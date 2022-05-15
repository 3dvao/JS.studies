let nameSpaceship = prompt ("Informe o nome da sua nave: ")

let velocity = 0

let chosenOption 

function showMenu(){
    let option
    while (option != "1" && option != "2" && option != "3" && option != "4"){
        option = prompt ("Seja bem-vindo a nave " + nameSpaceship + " Para começarmos, escolha uma opção:" +
                            "\n1- Acelerar a nave em 5km/s" + 
                            "\n2- Desacelerar em 5km/s" + 
                            "\n3- Imprimir dados de bordo" +
                            "\n4- Sair do programa.")
    }

    return option
}

function speedUp(veloc) {
    let newVelocity = veloc + 5
    return newVelocity
}


function slowDown(veloc) {
    let newVelocity = veloc - 5
    if(newVelocity < 0) {
        newVelocity = 0
    }
    return newVelocity
}

function printBoardData(name, veloc) {
    alert("Espaçonave: " + nameSpaceship + "\nVelocidade: " + veloc + "km/s")

}
do {
    chosenOption = showMenu()
    switch(chosenOption) {
        case "1":
            velocity = speedUp(velocity)
            break
        case "2":
            velocity = slowDown(velocity)
            break
        case "3":
            printBoardData (nameSpaceship, velocity)
            break
        default:
            alert("Encerrando programa de bordo.")
        
    }
} while(chosenOption != "4")
