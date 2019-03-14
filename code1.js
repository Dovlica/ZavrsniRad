var kadrovsko={
    kandidati:[],
    kandidat:{},
    unos_jednog:function(ime,prezime,datum,jmbg,password,pol,obrazovanje,prog_vest,kontakt,email,text){
        this.kandidat.ime=ime; this.kandidat.prezime=prezime; this.kandidat.datum=datum;
        this.kandidat.JMBG=jmbg; this.kandidat.password=password; this.kandidat.pol=pol;
        this.kandidat.obrazovanje=obrazovanje; this.kandidat.programske_vestine=prog_vest;
        this.kandidat.kontakt=kontakt; this.kandidat.email=email; this.kandidat.opis_kandidata=text;
    },
    unos_kandidata:function(){
        this.kandidati.push(this.kandidat);
        
    },

}    

var temp=JSON.parse(localStorage.getItem("kadrovsko"));
if(temp!==null)
    kadrovsko.kandidati=temp;
console.log("Kandidati su",kadrovsko.kandidati);

document.querySelector("#bt1").onclick=function(event){
    var pass=document.getElementById("pass").value;
    var ppass=document.getElementById("ppass").value;
    if(pass==ppass)
        var password=pass;
    else{
        alert("Lozinke se ne poklapaju");
    event.preventDefault();  //ako ne koristim "form" tag, tada mi nije neophodna ova linija code-a. U function se upise "event"
        return;
    }
    var ime=document.getElementById("ime").value;
    var prezime=document.getElementById("prezime").value;
    var datum=document.getElementById("datum").value;
    var jmbg=document.getElementById("jmbg").value;
    if(jmbg.length!=13){
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
    var pol=x[0];

    var obrazovanje=document.querySelector("#obr").value;
    if(obrazovanje.value==""){
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
    var vestine=y;

    var kontakt=document.getElementById("kon").value;
    if(kontakt.length<9 || kontakt==String){
        alert("Neispravan unos telefona")
    event.preventDefault();
        return;
    }
    var xk=kontakt.split("");
    var l=xk.length;
    for(var i=0;i<l;i++){
        var z=[" ","/","-"]
        for(var j=0;j<z.length;j++){
            if(xk[i]==z[j])
            xk.splice(i,1);
        }
    }
    kontakt=xk.join("");

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
    var text=document.getElementById("text").value;

    kadrovsko.unos_jednog(ime,prezime,datum,jmbg,password,pol,obrazovanje,vestine,kontakt,email,text);
    kadrovsko.unos_kandidata();

    localStorage.setItem("kadrovsko", JSON.stringify(kadrovsko.kandidati));
    
}

