//SOAL 1
var i = 1;
console.log("LOOPING PERTAMA")
while(i <= 20){
    if(i % 2 == 0){
    console.log(i + " - I love coding")}
    i++
}
console.log("LOOPING KEDUA")
while(i >= 2){
    if(i % 2 == 0){
    console.log(i + " - I will become a mobile developer")}
    i--
}

console.log("---------------------------")

//SOAL 2
for (var j = 1; j <= 20; j++){
    if (j % 3 == 0 && j % 2 != 0){
        console.log(j + " - I Love Coding")
    }else if (j % 2 != 0){
        console.log(j + " - Santai")
    }else if (j % 2 == 0){
        console.log(j + " - Berkualitas")
    }
}

console.log("---------------------------")

//SOAL 3
for (var baris = 0; baris <= 3; baris++){
    for(var kolom = 0; kolom <= 7; kolom++){
        process.stdout.write("#");
    }
    console.log("")
}

console.log("---------------------------")

//SOAL 4
for (var baris_1 = 0; baris_1 <= 6; baris_1++){
    for(var kolom_1 = 0; kolom_1 <= 6; kolom_1++){
        if(kolom_1 <= baris_1){
            process.stdout.write("#");
        }
    }
    console.log("")
}

console.log("---------------------------")

//SOAL 5
for (var baris_2 = 0; baris_2 <= 7; baris_2++){
    for(var kolom_2 = 0; kolom_2 <= 7; kolom_2++){
        if(baris_2 % 2 == 0){
            if(kolom_2 % 2 == 0){
                process.stdout.write(" ");
            }else{
                process.stdout.write("#");
            }
        }else{
            if(kolom_2 % 2 == 0){
                process.stdout.write("#");
            }else{
                process.stdout.write(" ");
            }
        }
    }
    console.log("")
}

function myApp(){
    var total = 5;
    var output = ' ';
    for(var i = 1; i <= total; i ++){
        for(var j = 1; j <= i; j ++){
            output += j + ' ';
        }
        console.log(output);
        output = '';
    }
}

myApp();