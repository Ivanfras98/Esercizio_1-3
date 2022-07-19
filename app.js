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
    let img= document.createElement('img');
    img.src = finalAnimal.image_link;
   img.style.height = "500px";
   img.style.width = "500px";
   img.dataset.time = finalAnimal.active_time === `Diurnal` ? "Diurnal" : "Nocturnal";
   document.querySelector("div").appendChild(img);

  }
  console.log(diurnal);
  console.log(nocturnal);
}

let select = document.querySelector("select");
select.addEventListener("change", () => {
document.querySelectorAll("[data-time]").forEach(item => item.style.display= "inline-block")
if(select.value === "Nocturnal"){
document.querySelectorAll("[data-time=Diurnal]").forEach(item => item.style.display= "none")
} else if(select.value === "Diurnal"){
  document.querySelectorAll("[data-time=Nocturnal]").forEach(item => item.style.display= "none")
}
})

Animal()
