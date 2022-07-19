const API = "https://zoo-animal-api.herokuapp.com/animals/rand";
const container = [];
const diurnal = [];
const nocturnal = [];
async function Animal() {
  for (let i = 0; i < 20; i++) {
    let animal = await fetch(API);
    let finalAnimal = await animal.json();
    container.push(finalAnimal)
    if (finalAnimal.active_time === `Diurnal`){
      diurnal.push(finalAnimal);
    } else {
      nocturnal.push(finalAnimal);
    }
  }
  console.log(diurnal);
  console.log(nocturnal);
}

Animal();


