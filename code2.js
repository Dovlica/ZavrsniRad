var kadrovsko={
    kandidati:[],
    kandidat:{},
    unos_jednog:function(ime,prezime,datum,jmbg,password,pol,obrazovanje,prog_vest,kontakt,email,text){
        this.kandidat.ime=ime; this.kandidat.prezime=prezime; this.kandidat.datum=datum;
        this.kandidat.JMBG=jmbg; this.kandidat.password=password; this.kandidat.pol=pol;
        this.kandidat.obrazovanje=obrazovanje; this.kandidat.programske_vestine=prog_vest;
        this.kandidat.kontakt=kontakt; this.kandidat.email=email; this.kandidat.opis_kandidata=text;
    },
    prikaz_svih:function(){
        document.querySelector("#a1").innerHTML="";
        var i=0;
        while(i<this.kandidati.length){
            var k=kadrovsko.kandidati[i];
            document.querySelector("#a1").appendChild(this.prikazi_jednog(k, i));
            i++;
        }
    },
    pronadji_jednog: function (a) {
        document.querySelector("#a2").innerHTML = "";
        var i = 0;
        while (i < this.kandidati.length) {
            var k = this.kandidati[i];
            var d= k.ime.toLowerCase()+" "+k.prezime.toLowerCase();
            var e=k.prezime.toLowerCase()+" "+k.ime.toLowerCase();
            console.log(d,e);
            if (d.slice(0, a.length) == a || e.slice(0, a.length) == a) {
                //prikazi_jednog pravi isto ono sto i innerHTML, ali ubacuje preko appendChild
                document.querySelector("#a2").appendChild(this.prikazi_jednog(k, i));
            }
            i++;
        }
    },
    pronadji_kandidata:function(a,b){
        document.querySelector("#a2").innerHTML = "";
        var i=0;
        while(i<this.kandidati.length){
            var k = this.kandidati[i];
            var d= k.ime.toLowerCase();
            var e=k.prezime.toLowerCase();
            if(d==a && e==b){
                document.querySelector("#a2").appendChild(this.prikazi_jednog(k, i));
            }
            if(d==b && e==a){
                document.querySelector("#a2").appendChild(this.prikazi_jednog(k, i));
            }
            i++;
        }
    },
    //NOVO, ovde pravimo paragraf koji ima sve podatke jednog polaznika.
    prikazi_jednog: function(k, ind){
        var p = document.createElement('p');
        p.innerHTML = k.ime+" "+k.prezime+", JMBG: "+k.JMBG;
        p.onclick = function(){  //kad se klikne, upisujemo njegov index u local_storage da mozemo da citamo u formi3
            localStorage.setItem('kadrovsko_ind', ind);
        }
        return p;
    }
} 
var temp = JSON.parse(localStorage.getItem("kadrovsko"));
if (temp !== null)
    kadrovsko.kandidati = temp;
console.log("Kandidati su", kadrovsko.kandidati);
console.log(localStorage);
document.querySelector("#prikazi").onclick = function (event) {
    event.preventDefault();
    kadrovsko.prikaz_svih();
};
addEventListener("keydown", function () {
    var a = document.querySelector("#oj").value;
    kadrovsko.pronadji_jednog(a.toLowerCase());
});
document.querySelector("#odabir").onclick=function(event){
    // event.preventDefault();
    var x=[];
    var a=document.querySelector("#oj").value;
    x=a.split(" ");
    kadrovsko.pronadji_kandidata(x[0].toLowerCase(),x[1].toLowerCase());
};