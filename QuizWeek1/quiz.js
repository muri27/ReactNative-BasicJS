//SOAL 1
function balikString(kata){
    var kata1 = kata;
    var kata2 = "";

    for(var i = kata.length-1; i >= 0; i--){
        kata2 += kata1[i];
    }
    return kata2;
}

//TEST CASE
console.log(balikString("abcde")) // edcba
console.log(balikString("rusak")) // kasur
console.log(balikString("racecar")) // racecar
console.log(balikString("haji")) // ijah

console.log("-------------------------------------")

//SOAL 2
function palindrome(kata) {
    var len = kata.length;
    for (var i = 0; i < len/2; i++) {
      if (kata[i] !== kata[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }


/*CARA ALTERNATIF
var kata2 = balikString(kata);
for (var i = 0; i <= kata.length; i++) {
    if (kata[i] !== kata2[i]) {
        return false;
    }
*/
//TEST CASE
console.log(palindrome("kasur rusak"))
console.log(palindrome("haji ijah"))
console.log(palindrome("nabasan"))
console.log(palindrome("nababan"))
console.log(palindrome("jakarta"))

console.log("-------------------------------------")

//SOAL 3
function bandingkan(num1 = -1, num2){
    if(num2 != null){
        if (num1 >= 0 && num2 >= 0){
            if (num1 === num2){
                return -1
            }else if(num1 > num2){
                return num1
                
            }else{
                return num2
            }
        }else{
            return -1
        }
    }else{
        return num1
    }

}

//TEST CASE
console.log(bandingkan(10, 15));
console.log(bandingkan(12, 12));
console.log(bandingkan(-1, 10));
console.log(bandingkan(112, 121));
console.log(bandingkan(1));
console.log(bandingkan());
console.log(bandingkan("15", "18"))

console.log("-------------------------------------")

//SOAL 4
function DescendingTen(num){
    akhir = "";
    if (num != null){
    for(i = num; i >= num-9; i--){
        akhir += i;
        akhir += " ";
    }
    return akhir;
    }else{
        return "-1";
    }
}

//TEST CASE
console.log(DescendingTen(100))
console.log(DescendingTen(10))
console.log(DescendingTen())
