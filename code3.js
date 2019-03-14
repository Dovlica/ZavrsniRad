var kadrovsko={
    kandidati:[],
    kandidat:{},
    unos_jednog:function(ime,prezime,datum,jmbg,password,pol,obrazovanje,prog_vest,kontakt,email,text){
        this.kandidat.ime=ime; this.kandidat.prezime=prezime; this.kandidat.datum=datum;
        this.kandidat.JMBG=jmbg; this.kandidat.password=password; this.kandidat.pol=pol;
        this.kandidat.obrazovanje=obrazovanje; this.kandidat.programske_vestine=prog_vest;
        this.kandidat.kontakt=kontakt; this.kandidat.email=email; this.kandidat.opis_kandidata=text;
    },
    obrisi_jednog:function(arg){
        alert("Obrisati unos?");
        kadrovsko.kandidati.splice(arg,1);
        console.log(kadrovsko.kandidati);
    },
}    

var temp=JSON.parse(localStorage.getItem("kadrovsko"));
if(temp!==null)
    kadrovsko.kandidati=temp;
var izabran=kadrovsko.kandidati[localStorage.getItem("kadrovsko_ind")];

document.querySelector(".prik").innerHTML= izabran.ime+" "+izabran.prezime+", "+"JMBG: "+izabran.JMBG+"<br>"+
izabran.datum+"<br>"+izabran.password+"<br>"+izabran.pol+"<br>"+izabran.obrazovanje+"<br>"+izabran.programske_vestine
+"<br>"+izabran.kontakt+"<br>"+izabran.email+"<br>"+izabran.opis_kandidata;

console.log("Kandidati su",kadrovsko.kandidati);
console.log(localStorage);

document.querySelector("#brisi").onclick=function(){
    kadrovsko.obrisi_jednog(localStorage.getItem("kadrovsko_ind"));
    localStorage.setItem("kadrovsko", JSON.stringify(kadrovsko.kandidati));
};
