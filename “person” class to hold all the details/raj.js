// Write a “person” class to hold all the details.

class Person{
    constructor(name,age,village,district,state,country){
        this.name=name;
        this.age=age;
        this.town=village;
        this.district=district;
        this.state=state;
        this.country=country;
    }
    getDetails(){
        return `Name:${this.name} Age:${this.age} Town:${this.town} District is ${this.district} State:${this.state} Country:${this.country}`
    }
}
var main1=new Person("Raj",30,"Rasipuram","Namakkal","TamilNadu","India")
var main2=new Person("Kumar",30,"Thirusenkodu","Namakkal","TamilNadu","India")
var main3=new Person("Vishnu",30,"Sendhamangalam","Namakkal","TamilNadu","India")
console.log(main1.getDetails())
console.log(main2.getDetails())
console.log(main3.getDetails())