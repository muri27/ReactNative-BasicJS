//SOAL 1
//RELEASE 0
class Animal {
    constructor(name){
        this.name = name;
        this.legs = 4;
        this.cold_blooded = false;
    }

    get animalname(){
        return this.animalname;
    }

    set animalname(x){
        this.animalname = x;
    }
}
 
var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

//RELEASE 1
class Frog extends Animal{
    constructor(name,legs,cold_blooded){
        super(name,legs,cold_blooded);
    }
    
    jump(){
        console.log("hop hop");
    }

}

class Ape extends Animal{
    constructor(name, cold_blooded){
        super(name, cold_blooded);        
        this.legs = 2;
    }

    yell() {
        console.log("Auooo");
    }

}
 
var sungokong = new Ape("kera sakti")
sungokong.yell()

var kodok = new Frog("buduk")
kodok.jump()

console.log("--------------------------------------")

//SOAL 2
// //CARA 1
// class Clock {
//     constructor({template}){
//         this.template = template;
//     }

    
//     render(){
//         var date = new Date();

//         var hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;

//         var mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;

//         var secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;

//         var output = clock.template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs);
//         console.log(output);

        
//     }
//     stop(){
//         clearInterval(this.timer);
//     }

//     start(){
//         this.render();
//         this.timer = setInterval(this.render, 1000);
//     }

// }

// //CARA 2
// class Clock {
//     constructor({template}){
//         this.template = template;
//     }

    
//     render(){
//         var date = new Date();

//         var hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;

//         var mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;

//         var secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;

//         var output = this.template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs);
//         console.log(output);

        
//     }
//     stop(){
//         clearInterval(this.timer);
//     }

//     start(){
//         this.render();
//         this.timer = setInterval(this.render.bind(this), 1000);
//     }

// }

// //CARA 3
// class Clock {
//     constructor({template}){
//         this.template = template;
//     }

    
//     render(){
//         var date = new Date();

//         var hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;

//         var mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;

//         var secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;

//         var output = this.template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs);
//         console.log(output);

        
//     }
//     stop(){
//         clearInterval(this.timer);
//     }

//     start(){
//         this.render();
//         this.timer = setInterval(() => {this.render()}, 1000);
//     }

// }

//CARA 4
class Clock {
    constructor(model){
        this.model = model;
    }

    
    render(){
        this.model = {template: 'h:m:s'}
        var date = new Date();

        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        var output = this.model.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);
        console.log(output);

        
    }
    stop(){
        clearInterval(this.timer);
    }

    start(){
        this.render();
        this.timer = setInterval(this.render, 1000);
    }

}

var clock = new Clock({template: 'h:m:s'});
clock.start();