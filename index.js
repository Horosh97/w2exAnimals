const animalA = {
  id: 1,
  name: "Firulais",
  age: 12,
  weight: 8,
  specie: "Perro",
  extinc: true,
};
const animalB = {
  id: 2,
  name: "Mickey Mouse",
  age: 40,
  weight: 1,
  specie: "Ratón",
  extinc: false,
};

const getAnimalSpecie = (animal) => animal.specie;
console.log(getAnimalSpecie(animalB));

const isAnimalextinc = (animal) => animal.extinc;
console.log(isAnimalextinc(animalA));

const animalInfo = (animal) =>
  `El animal ${animal.name} es un ${animal.specie} de ${animal.age} años de edad y pesa ${animal.weight} kg.`;
console.log(animalInfo(animalB));
