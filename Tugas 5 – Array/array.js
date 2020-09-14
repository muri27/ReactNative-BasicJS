//SOAL 1
function range(startNum, finishNum){
    var angka = [];
    if (startNum <= finishNum){
        for(var angka2 = startNum; angka2 <= finishNum; angka2++){
            angka.push(angka2); 
        }
    return angka;
    }else if (startNum >= finishNum){
        for(var angka1 = startNum; angka1 >= finishNum; angka1--){
            angka.push(angka1); 
        }
    return angka;
    }else{
        return -1;
    }
}

console.log(range(1, 10))
console.log(range(1))
console.log(range(11,18))
console.log(range(54, 50))
console.log(range())

console.log("-------------------------------------------------");

//SOAL 2
function rangeWithStep(startNum, finishNum, step){
    var angkaStep = [];
    if (step>0){
        if (startNum <= finishNum){
            for(var angka2 = startNum; angka2 <= finishNum; angka2 += step){
            angkaStep.push(angka2); 
        }
        return angkaStep;
        }else if (startNum >= finishNum){
            for(var angka1 = startNum; angka1 >= finishNum; angka1 -= step){
            angkaStep.push(angka1); 
        }
        return angkaStep;
        }
    }else{
        return range(startNum, finishNum);
    }
}
 
console.log(rangeWithStep(1, 10, 2))
console.log(rangeWithStep(11, 23, 3))
console.log(rangeWithStep(5, 2, 1))
console.log(rangeWithStep(29, 2, 4))

console.log("-------------------------------------------------");

//SOAL 3
function sum(startNum = 0, finishNum, step){
    var deret = 0;
    if (step > 0){
        var jumlah = rangeWithStep(startNum, finishNum, step);
        for(var i in jumlah){
            deret += jumlah[i];
        }
    return deret;
    }
    else{
        if(finishNum > 0){
        var jumlah2 = range(startNum, finishNum);
            for(var j in jumlah2){
                deret += jumlah2[j]
            }return deret;
        }else{
            return startNum;
        }
    }
}

console.log(sum(1,10))
console.log(sum(5, 50, 2))
console.log(sum(15,10))
console.log(sum(20, 10, 2))
console.log(sum(1))
console.log(sum())

console.log("-------------------------------------------------");

//SOAL 4

function dataHandling(data){
    for(var i = 0, l1 = data.length; i < l1; i++){
        for(var j = 0, l2 = data[i].length; j < l2; j++){
            if(j == 0){
                console.log("Nomor ID: " + data[i][j]);
            }else if(j == 1){
                console.log("Nama Lengkap: " + data[i][j]);
            }else if(j == 2){
                var ttl = data[i][j];
            }else if(j == 3){
                console.log("TTL: " + ttl + " " + data[i][j]);
            }else{
                console.log("Hobi: " + data[i][j])
            }
        }console.log("")
    }
}


var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

dataHandling(input);

console.log("-------------------------------------------------");

//SOAL 5
function balikKata(kata){
    var kata1 = kata;
    var kata2 = "";

    for(var i = kata.length-1; i >= 0; i--){
        kata2 += kata1[i];
    }
    return kata2;
}
 
console.log(balikKata("Kasur Rusak"))
console.log(balikKata("SanberCode"))
console.log(balikKata("Haji Ijah"))
console.log(balikKata("racecar"))
console.log(balikKata("I am Sanbers"))

console.log("-------------------------------------------------");

//SOAL 6
function dataHandling2(data2){
    //Output 1
    data2.splice(2,0,"Elsharawy")
    var nama = data2[1].concat(data2[2])
    data2.splice(1,1)
    data2.splice(1,1)
    data2.splice(1,0, nama)
    data2.splice(2,0,"Provinsi ")
    var provinsi = data2[2].concat(data2[3])
    data2.splice(2,2)
    data2.splice(2,0, provinsi)
    data2.splice(4,4)
    data2.splice(6,0,"Pria")
    data2.splice(7,0,"SMA Internasional Metro")
    console.log(data2);

    //Output 2
    var tanggal = data2[3].split("/");
    switch(tanggal[1]){
        case "01": console.log("Januari");break;
        case "02": console.log("Februari");break;
        case "03": console.log("Maret");break;
        case "04": console.log("April");break;
        case '05': console.log("Mei");break;
        case "06": console.log("Juni");break;
        case "07": console.log("Juli");break;
        case "08": console.log("Agustus");break;
        case "09": console.log("September");break;
        case "10": console.log("Oktober");break;
        case "11": console.log("November");break;
        case "12": console.log("Desember");break;
    }
    
    //Output 3
    tanggal.sort(function(value1 , value2){
        return value2 - value1
    });
    console.log(tanggal);

    //Output 4
    var tanggalBaru = data2[3].split("/");
    var tanggalJoin = tanggalBaru.join("-");
    console.log(tanggalJoin);

    //Output 5
    var namaBaru = String(data2[1]);
    var namaSlice = namaBaru.slice(0,15);
    console.log(namaSlice);
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);