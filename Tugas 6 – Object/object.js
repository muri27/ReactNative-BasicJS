//SOAL 1
function arrayToObject(arr) {
    var person = {}
    var now = new Date()
    var thisYear = now.getFullYear()

    for(var i = 0, l1 = arr.length; i < l1; i++){
        for(var j = 0, l2 = arr[i].length; j < l2; j++){
            if (j == 0){
                person.firstName = arr[i][j]; 
            }else if (j == 1){
                person.lastName = arr[i][j];
            }else if (j == 2){
                person.gender = arr[i][j];
            }else{
                if(arr[i][j] < thisYear){
                    person.age = thisYear - arr[i][j];
                }else{
                    person.age = "Invalid Birth Year";
                }
            }
        }
        if(l2 == 3){
            person.age = "Invalid Birth Year";
        }
        console.log(i+1 + ". ", person.firstName, person.lastName + ":", person) 
        console.log()
    }
}

// TEST CASES
var people = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ]
arrayToObject(people)
var people2 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023] ]
arrayToObject(people2)
// Error case 
arrayToObject([])

console.log("------------------------------------------------------------------------")

//SOAL 2
function shoppingTime(memberId, money) {
    var stacattu = 1500000;
    var zoro = 500000;
    var hn = 250000;
    var uniklooh = 175000;
    var casing = 50000;

    var shopping = {};
    var daftarBelanja = [];

    if (memberId == null || memberId.length == 0){
        return "Mohon maaf, toko X hanya berlaku untuk member saja"
    }else if(money < 50000){
        return "Mohon maaf, uang tidak cukup"
    }
    else{
        shopping.memberId = memberId;
        shopping.money = money;
        if(money >= stacattu){
            money -= stacattu;
            daftarBelanja.push("Sepatu Stacattu");
        }if(money >= zoro){
            money -= zoro;
            daftarBelanja.push("Baju Zoro");
        }if(money >= hn){
            money -= hn;
            daftarBelanja.push("Baju H&N");
        }if(money >= uniklooh){
            money -= uniklooh;
            daftarBelanja.push("Sweater Uniklooh");
        }if(money >= casing){
            money -= casing;
            daftarBelanja.push("Casing Handphone");
        }
        change = money;

        shopping.listPurchased = daftarBelanja;
        shopping.changeMoney = change;
        
        return shopping;
    }
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
console.log(shoppingTime('82Ku8Ma742', 170000));
console.log(shoppingTime('', 2475000));
console.log(shoppingTime('234JdhweRxa53', 15000));
console.log(shoppingTime());

console.log("------------------------------------------------------------------------")

//SOAL 3
function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var akhir = [];
    for(var i = 0, l1 = arrPenumpang.length; i < l1; i++){
        var akhirObj = {};
        for(var j = 0, l2 = arrPenumpang[i].length; j < l2; j++){
            akhirObj.penumpang = arrPenumpang[i][0];
            akhirObj.naikDari = arrPenumpang[i][1];
            akhirObj.tujuan = arrPenumpang[i][2];        
        }

        for(var k = 0, l3 = rute.length; k < l3; k++){
            if(rute[k] == akhirObj.naikDari){
                var berangkat = k;
            }else if(rute[k] == akhirObj.tujuan){
                var sampai = k;
            }
        }

        var jarak = sampai - berangkat;
        var harga = jarak * 2000;
        akhirObj.bayar = harga;
        akhir.push(akhirObj);
    }

    return akhir;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
console.log(naikAngkot([]));