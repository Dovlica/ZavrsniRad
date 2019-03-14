var kadrovsko={
    kandidati:[],
    kandidat:{},
    unos_jednog:function(ime,prezime,datum,jmbg,password,pol,obrazovanje,prog_vest,kontakt,email,text){
        this.kandidat.ime=ime; this.kandidat.prezime=prezime; this.kandidat.datum=datum;
        this.kandidat.JMBG=jmbg; this.kandidat.password=password; this.kandidat.pol=pol;
        this.kandidat.obrazovanje=obrazovanje; this.kandidat.programske_vestine=prog_vest;
        this.kandidat.kontakt=kontakt; this.kandidat.email=email; this.kandidat.opis_kandidata=text;
    },
}

var temp=JSON.parse(localStorage.getItem("kadrovsko"));
if(temp!==null)
    kadrovsko.kandidati=temp;
console.log("Kandidati su",kadrovsko.kandidati);
console.log(localStorage);
var k=kadrovsko.kandidati[localStorage.getItem("kadrovsko_ind")];

document.getElementById("pass").value=k.password;
document.getElementById("ime").value=k.ime;
document.getElementById("prezime").value=k.prezime;
document.getElementById("datum").value=k.datum;
document.getElementById("jmbg").value=k.JMBG;

var vred= k.pol;
document.querySelector('input[name="r1"][value="'+vred+'"]').checked = true;

document.querySelector("#obr").value=k.obrazovanje;

if(k.programske_vestine[0]=="JavaScript")
var js=document.querySelector("#js").checked=true;
if(k.programske_vestine[1]=="PHP")
var php=document.querySelector("#php").checked=true;
if(k.programske_vestine[2]=="Python")
var py=document.querySelector("#py").checked=true;

document.getElementById("kon").value=k.kontakt;
document.getElementById("email").value=k.email;
document.getElementById("text").value=k.opis_kandidata;

document.querySelector("#bt1").onclick=function(event){
    k.password=document.getElementById("pass").value;
    var ppass=document.getElementById("ppass").value;
    if(k.password==ppass)
        var password=pass;
    else{
        alert("Lozinke se ne poklapaju");
    event.preventDefault();  //ako ne koristim "form" tag, tada mi nije neophodna ova linija code-a. U function se upise "event"
        return;
    }
    k.ime=document.getElementById("ime").value;
    k.prezime=document.getElementById("prezime").value;
    k.datum=document.getElementById("datum").value;
    k.JMBG=document.getElementById("jmbg").value;
    if(k.JMBG.length!=13){
        alert("JMBG nije ispravan")
    event.preventDefault();
        return;
    }

    
    var x=[];
    var r1;
        if(document.querySelector("input[name='r1']:checked") !==null){
            r1 =  document.querySelector("input[name='r1']:checked").value;
            x.push(r1);
        }
    var r2;
        if(document.querySelector("input[name='r2']:checked") !==null){
            r2 =  document.querySelector("input[name='r2']:checked").value;
            x.push(r2);
        }
    var r3;
        if(document.querySelector("input[name='r3']:checked") !==null){
            r3 =  document.querySelector("input[name='r3']:checked").value;
            x.push(r3);
        }
    k.pol=x[0];

    k.obrazovanje=document.querySelector("#obr").value;
    if(k.obrazovanje.value==""){
        alert("Unesite nivo vaseg obrazovanja")
    event.preventDefault();
        return;
    }

    var js=document.querySelector("#js").checked;
    var php=document.querySelector("#php").checked;
    var py=document.querySelector("#py").checked;
    var y=[];
    if(js) y.push("JavaScript");
    if(php) y.push("PHP");
    if(py) y.push("Python");
    k.programske_vestine=y;

    var kontakt=document.getElementById("kon").value;
    if(kontakt.length<9 || kontakt==String){
        alert("Neispravan unos telefona")
    event.preventDefault();
        return;
    }
    var xk=kontakt.split("");
    var l=xk.length;
    for(var i=0;i<l;i++){
        if(xk[i]=="-" || xk[i]==" ")
        xk.splice(i,1);
    }
    k.kontakt=xk.join("");

    var email=document.getElementById("email").value;
    var emailniz=email.split(""), s=0;
    console.log(emailniz);
    for(var i=0;i<emailniz.length;i++){
        if(emailniz[i]=="@")
            s++;
        
    }
    if(s!=1){
            alert("Neispravna email adresa")
        event.preventDefault();
            return;
        }
    k.email=email;
    k.opis_kandidata=document.getElementById("text").value;

    localStorage.setItem("kadrovsko", JSON.stringify(kadrovsko.kandidati));
}