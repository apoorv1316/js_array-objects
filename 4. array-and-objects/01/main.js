let myPenguin={
    name: "Misha",
    origin:"Death and the Penguin",
    author:"Andrey Kurkov"
};
myPenguin.favoriteFoods=['fish','marshmallow','crustaceans'];
console.log(myPenguin.favoriteFoods[1]);
var firstFavFood = myPenguin.favoriteFoods[0];
myPenguin.favoriteFoods.push('squid');
console.log(myPenguin.favoriteFoods.length);
myPenguin.favoriteFoods[myPenguin.favoriteFoods.length-1] = "pineapples";
var lastFavFood = myPenguin.favoriteFoods[myPenguin.favoriteFoods.length-1];
for(var i = 0; i < myPenguin.favoriteFoods.length; i++) {
    console.log(myPenguin.favoriteFoods[i]);
}