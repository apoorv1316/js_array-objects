let myPenguin={
    name: "Misha",
    origin:"Death and the Penguin",
    author:"Andrey Kurkov"
    sayHello: function () {
        console.log("CHIRP CHIRP! Is this what penguins sound like?");
    }
};
myPenguin.outfit = {
    hat: "baseball cap",
    shirt: "Hawaiian shirt",
    pants: "cargo shorts",
    shoes: "flip-flops",
};
var penguinHatType = myPenguin.outfit.hat;
console.log(penguinHatType);

myPenguin.outfit["accessory"] = "pocket watch";
myPenguin.outfit.hat = "top hat";
delete myPenguin.outfit.pants;
for(let value in myPenguin.outfit)
{
    console.log(`${value} : ${myPenguin.outfit[value]}`);
}