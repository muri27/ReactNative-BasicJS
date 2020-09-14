var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

var waktu = 10000;
var i = 0;

readBooks(waktu, books[i], function time(sisaWaktu){
    waktu = sisaWaktu; 
    if(i < books.length-1){
        i++;
        readBooks(waktu, books[i], time)
    }else{

    }
})
