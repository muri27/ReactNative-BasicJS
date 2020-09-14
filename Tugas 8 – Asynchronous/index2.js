var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
var waktu = 10000;
var i = 0;

function bacaBuku(){
    readBooksPromise(waktu, books[i])
    .then(function(fulfilled){
        waktu = fulfilled;
        if(i < books.length-1){
            i++;
            bacaBuku();
        }else{
            
        }
    })
    .catch(function (error) {
    });
}

bacaBuku();