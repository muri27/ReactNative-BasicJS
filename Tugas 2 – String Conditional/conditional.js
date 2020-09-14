// IF/ELSE CASE
var nama = "Juned"
var peran = "Werewolf"

if(nama.length == 0 && peran.length == 0){
    console.log("Nama harus diisi!");
}else if(nama.length != 0 && peran.length == 0){
    console.log("Halo " + nama + ", Pilih peranmu untuk memulai game!")
}else{
    if(peran == 'Penyihir'){
        console.log("Selamat datang di Dunia Werewolf,", nama, "\n" +
        "Halo Penyihir " + nama + ", kamu dapat melihat siapa yang menjadi werewolf!")
    }else if(peran == 'Guard'){
        console.log("Selamat datang di Dunia Werewolf,", nama, "\n" +
        "Halo Guard " + nama + ", kamu akan membantu melindungi temanmu dari serangan werewolf.")
    }else if(peran == 'Werewolf'){
        console.log("Selamat datang di Dunia Werewolf,", nama, "\n" +
        "Halo Werewolf " + nama + ", Kamu akan memakan mangsa setiap malam!")
    }else{
        console.log("Pilih peran antara Penyihir, Guard, atau Werewolf")
    }
}

console.log("---------------------------------------------------------------");

//SWITCH CASE
var tanggal = 28;
var bulan = 2;
var tahun = 2001;

if(tanggal >=1 && tanggal <= 31){
    if(bulan >=1 && bulan <= 12){
        if(tahun >= 1900 && tahun <= 2200){
            switch(bulan){
                case 1 : {console.log(tanggal, "Januari", tahun); break;}
                case 2 : {  if(tahun % 400 == 0){
                                if(tanggal >= 1 && tanggal <= 29){
                                    console.log(tanggal, "Februari", tahun);}
                                else{
                                    console.log("Masukkan tanggal antara 1 - 29");
                                }
                            }else if (tahun % 400 != 0 && tahun % 100 == 0){
                                if(tanggal >= 1 && tanggal <= 28){
                                    console.log(tanggal, "Februari", tahun);}
                                else{
                                    console.log("Masukkan tanggal antara 1 - 28");
                                }
                            }else if (tahun % 400 != 0 && tahun % 100 != 0 && tahun % 4 ==0){
                                if(tanggal >= 1 && tanggal <= 29){
                                    console.log(tanggal, "Februari", tahun);}
                                else{
                                    console.log("Masukkan tanggal antara 1 - 29");
                                }
                            }else{
                                if(tanggal >= 1 && tanggal <= 28){
                                    console.log(tanggal, "Februari", tahun);}
                                else{
                                    console.log("Masukkan tanggal antara 1 - 28");
                                }
                            }
                        break;}
                case 3 : {console.log(tanggal, "Maret", tahun); break;}
                case 4 : {console.log(tanggal, "April", tahun); break;}
                case 5 : {console.log(tanggal, "Mei", tahun); break;}
                case 6 : {console.log(tanggal, "Juni", tahun); break;}
                case 7 : {console.log(tanggal, "Juli", tahun); break;}
                case 8 : {console.log(tanggal, "Agustus", tahun); break;}
                case 9 : {console.log(tanggal, "September", tahun); break;}
                case 10 : {console.log(tanggal, "Oktober", tahun); break;}
                case 11 : {console.log(tanggal, "November", tahun); break;}
                case 12 : {console.log(tanggal, "Desember", tahun); break;}
            }
        }else{console.log("Masukkan tahun antara 1900 - 2200")};
    }else(console.log("Masukkan bulan antara 1 - 12"));
}else(console.log("Masukkan tanggal antara 1 - 31"));