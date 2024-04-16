let animals = [
    "fennec fox",
    "lobster",
    "frog",
    "crocodile",
    "dog",
    "monkey",
    "manta ray",
    "horse",
    "red panda",
    "conure",
    "lizard",
    "koala bear",
    "drop bear",
    "whale shark",
    "lion",
    "turtle",
    "otter"
];

function createAnimalList(){
    animals.forEach((animal) => {
        console.log("animal: " + animal);

        let newList = document.createElement("li")
        newList.textContent = animal
        newList.id = animal

        // add a button to remove the element form the list
        let removeItemButton = document.createElement("button")

        removeItemButton.onclick = (() => removeAnimalFromList(animal))

        removeItemButton.textContent = "Remove Animal";

        newList.appendChild(removeItemButton)

        let oList = document.querySelector("ol")
        oList.appendChild(newList)
    });
}

function removeAnimalFromList(targetAnimalId){
    // find element in list with matching ID
    let targetListItem = document.getElementById(targetAnimalId)
    targetListItem.remove()
    // check if ID is in array of animals
    let isAnimalInList = animals.includes(targetAnimalId)
    if (isAnimalInList) return;

    // remove teh animal from the array
    animals = animals.filter(animal => {
        if (targetAnimalId == animal){
            return false;
        }else{
            return true;
        }
    })
    // update or wipe & 
}

// createAnimalList();
console.log("Hello from the imported code file")