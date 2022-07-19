const API = "https://zoo-animal-api.herokuapp.com/animals/rand";
const container = [];
async function Animal() {
  for (let i = 0; i < 20; i++) {
    let animal = await fetch(API);
    let finalAnimal = await animal.json();
    container.push(finalAnimal)
    console.log(container) 
  }
}

Animal();

