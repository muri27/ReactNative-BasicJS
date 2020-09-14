//SOAL 1
class Score{
    constructor(data){
        this.data = data;
    }

    get subject(){
        return subject;
    }

    get email(){
        return email;
    }

    get points(){
        return points;
    }

    set points(nilai){
        this.nilai = nilai;
    }

    average(){
        if (this.points.length > 1){
            let total = 0
            for(var i = 0; i < this.points.length-1; i++){
                total += this.points[i] 
            }
            let rata2 = total/this.points.length
        }
    console.log(rata2)
    }
}

//SOAL 2

var data =
  [
    ["email", "quiz-1", "quiz-2", "quiz-3"],
    ["abduh@mail.com", 78, 89, 90],
    ["khairun@mail.com", 95, 85, 88]
  ]

var subject = "quiz-1"


const viewScore = (arr, subjek) =>{
    var arr_1 = [];
    for(var i = 0; i < arr.length; i++){
        var obj = {}
        for(var j = 0; j < arr[i].length; j++){
            if(arr[i][j] != arr[0][j]){
                obj.email = arr[i][0];
                if(subjek == arr[0][j]){
                    obj.subject = arr[0][j];
                    obj.points = arr[i][j];
                    arr_1.push(obj)
                }
            }
        }
    }
    console.log(arr_1)
}

viewScore(data, 'quiz-1')
viewScore(data, 'quiz-2')
viewScore(data, 'quiz-3')

//SOAL 3

const recapScore = (data) => {
    var data_1 = {};
    var point = []
    for(var i = 0; i<data.length; i++){
        for(var j = 0; j < data[i].length; j++){
            if(arr[i][j] != arr[0][j]){
                data_1.email = arr[i][0];
                var points = arr[i+1][j];
                point.push(points);
            } 
        }
    }
    var total_1 = 0;
    for(var j in point){
        total_1 += j;
        var rata2 = total_1/point.length
    }
    console.log(rata2)
}