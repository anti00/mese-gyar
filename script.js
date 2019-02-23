var a = 0;
var szoveg = ["A három kő",

"Egyszer volt, hol nem volt, *orsz emberei nagy bánatban voltak.",

"Szomorúak voltak a hercegnőjük miatt, *jn",

"*gon ki a hegyen él bezárta a *jn egy *hely" ,

"*jf a *jfsz meg akarta menteni a *jn mert szerelmes volt belé.",

"Úgy tudta csak megmenteni a *jn a gonosztól, ha összegyűjti a három várzskövet és segítségükkel győzheti le a *gon" ,

"Az első követ, úgy tudta megszerezni ha végig úszta a Végtelen folyót." ,

"Három napba és három éjszakába telt neki, de végül megtalálta a végét, így szerezte meg a rubintot." ,

"Szerencsére nála volt a Láthatatlan köpeny így végig tudott sétálni az erdőn és a fenevadak nem találták meg. így szerezte meg az emeráldot." ,

"A kettő kő megszerzése után egy lovaggal harcolt meg egy szigeten mit ő uralt.",

"A *jf hosszú ideig harcolt a zsarnok lovaggal de végül nyert és övé lett a gyémánt is." ,

"Az összes kő megszerzése után, *jf alig tudta megmenteni *jn a gonosztól a köveket használva.",

"De végül *jf és *jn boldogan éltek míg meg nem haltak.",

"Vége!"]

var jn = ["hercegnő","parasztlány"];
var orsz = ["Meseország", "Tündérhon","Seholország"];
var jf =["herceg", "juhász", "pásztor"];
var gon = ["boszorka","sárkány","gonosz varázsló"];
var hely = ["hegyen","erdőben","toronyban"]
var jna = jn[Math.floor(Math.random()*jn.length)];
var orsza = orsz[Math.floor(Math.random()*orsz.length)];
var jfa = jf[Math.floor(Math.random()*jf.length)];
var gona = gon[Math.floor(Math.random()*gon.length)];
var helya = hely[Math.floor(Math.random()*hely.length)];
for (var i = 0; i < szoveg.length; i++) {
  szoveg[i] = szoveg[i].replace("*jn",jna);
  szoveg[i] = szoveg[i].replace("*jf",jfa);
  szoveg[i] = szoveg[i].replace("*jfsz",jfa);
  szoveg[i] = szoveg[i].replace("*gon",gona);
  szoveg[i] = szoveg[i].replace("*orsz",orsza);
  szoveg[i] = szoveg[i].replace("*hely",helya);
}


function next() {
  var elem = document.getElementById('konyv');
  if (a < szoveg.length) {
    elem.innerHTML = szoveg[a];
    a++;
  } else {
    a = 0;
    elem.innerHTML = szoveg[a];
      a++;
  }
}
//generate funkció meg lesz csinálva a replace paranccsal szóval több struktúra kell majd pl jó fiú = *jf
function prev() {
  var elem = document.getElementById('konyv');
  if (a != 0) {
    a--;
    elem.innerHTML = szoveg[a];
  } else {
    elem.innerHTML = szoveg[a];
  }
}
