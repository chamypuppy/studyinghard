//function practice (1)
function plus(a, b) {
  console.log(a + b)
}

plus(5,5);

function minus(a, b) {
  console.log(a - b);
}

minus(5, 5);


//object function pratice (1)
const otherPersonsName = {
  name : "nico",
  helloSay : function(myName) {
    console.log("Hello my name is " + myName + " and I love food!");
  },
};

console.log(otherPersonsName.name);
otherPersonsName.helloSay("Boyoung");


//object function pratice (2)
const dessert = {
  favorite: "hobbang",
  loveDessert: function(tasteGood) {
    console.log(tasteGood + " is very delicious food" + " I love " + tasteGood);
  },
}

console.log(dessert.favorite);
dessert.loveDessert("hobbang");