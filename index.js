var numberOfDogs = 12;
var numberOfCats = 5;
var numberOfEmployees = 3;


///a) stiind ca hotelul poate primi maxim 15 caini, implementati o conditie care verifica daca mai sunt locuri disponibile pentru caini si afisati in consola mesaje corespunzatoare


var maxNrCaini = 15;

function checkDogAvailability() {
    if (numberOfDogs < maxNrCaini) {
      var availableDogSpots = maxNrCaini - numberOfDogs;
      console.log("Mai sunt disponibile " + availableDogSpots + " locuri pentru câini.");
    } else {
      console.log("Nu mai sunt locuri disponibile pentru câini.");
    }
  }
  checkDogAvailability();


  ///b) stiind ca hotelul poate primi maxim 30 de animale in acelasi timp, implementati o conditie care verifica daca hotelul este supra-aglomerat

  var maxNumberOfAnimals = 30;

function checkHotelOccupancy() {
  var totalNumberOfAnimals = numberOfDogs + numberOfCats;
  
  if (totalNumberOfAnimals > maxNumberOfAnimals) {
    console.log("Hotelul este supra-aglomerat.");
  } else {
    console.log("Hotelul nu este supra-aglomerat.");
  }
}

checkHotelOccupancy();


///c) pentru fiecare pisica trebuie sa fie disponibile cate 3 jucarii, iar pentru fiecare caine cate 5. Calculati si afisati cate jucarii trebuie sa cumpere cei de la hotel pentru animale.

var jucariiPerPisica = 3;
var jucariiPerCaini = 5;

function calculTotalJucarii() {
  var totalJucariiPisici = numberOfCats * jucariiPerPisica;
  var totalJucariiCaini = numberOfDogs * jucariiPerCaini;
  var totalToysNeeded = totalJucariiPisici + totalJucariiCaini;
  
  console.log("Cei de la hotelul pentru animale trebuie să cumpere un număr total de " + totalToysNeeded + " jucării.");
}

calculTotalJucarii();


///d) daca numarul total al animalelor este mai mic de 20 sau sunt mai multi de 5 angajati, consideram ca animalele sunt bine ingrijite, implementati o conditie care sa verifice si sa afiseze in consola mesaje corespunzatoare
function checkAnimalCare() {
    var totalNumarAnimale = numberOfDogs + numberOfCats;
  
    if (totalNumarAnimale < 20 || numberOfEmployees > 5) {
      console.log("Animalele sunt bine îngrijite.");
    } else {
      console.log("Animalele nu sunt bine îngrijite.");
    }
  }
  
  checkAnimalCare();


  ///e) numarul norocos al patronului este 7. Daca la orice moment cand viziteaza hotelul (este si el acolo!) numarul total al fiintelor din interior este multiplu de 7, fiecare angajat va primi un bonus de 100 de lei. Calculati si afisati in consola cati bani il va costa o astfel de vizita.

  var numarNorocos = 7;
  var bonusAngajati = 100;

function calculateVisitCost() {
  var totalNumberOfAnimals = numberOfDogs + numberOfCats;
  var totalBeingsInside = totalNumberOfAnimals + numberOfEmployees + 1; 

  if (totalBeingsInside % numarNorocos === 0) {
    var totalBonusAmount = numberOfEmployees * bonusAngajati;
    console.log("Vizita patronului va costa " + totalBonusAmount + " lei pentru acordarea bonusurilor angajaților.");
  } else {
    console.log("Nu se acordă bonusuri pentru vizita patronului.");
  }
}

calculateVisitCost();

///f) daca avem un numar impar de caini si un numar impar de pisici, afisam "Paritate SI"

function checkParity() {
    if (numberOfDogs % 2 !== 0 && numberOfCats % 2 !== 0) {
      console.log("Paritate SI");
    }
  }
  
  checkParity();


  ///g) daca avem un numar impar de caini sau un numar impar de pisici, afisam "Paritate Sau"

  function checkParity() {
    if (numberOfDogs % 2 !== 0 || numberOfCats % 2 !== 0) {
      console.log("Paritate Sau");
    }
  }
  
  checkParity();

