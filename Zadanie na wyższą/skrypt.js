function oblicz(){
    var liczba=parseFloat(document.getElementById("liczba").value);
    var wynik=(document.getElementById("wynik").value);
    for(var liczbaA=liczba; liczbaA>=0; liczbaA++)
        if(liczbe>0){
            var modulo=liczba%2;
            wynik = wynik+modulo;
            liczba = liczba/2;
        }else{
            document.getElementById("wynik").value=wynik;
    }

}
