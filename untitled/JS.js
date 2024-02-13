
//nombreCache = SetRDMNumber();
// const listeChoix=[0]

/*
********************************/
const nBC = [Math.floor(Math.random() * 101)];
let nombreEssais =1;
const choixDuJoueur= document.getElementById("choixDuJoueur").value;
const listeDejaEntrer= [0]

/*************************************************/
function Demmarrer() {
//https://java2blog.com/create-array-from-1-to-100-javascript/#Use_Arrayfrom_with_fill_Method
    let numSelect = [0]
    for (let i = 1; i <= 100; i++)
    {
        numSelect.push(i);
        document.getElementById("Visuel").appendChild()
    }
    console.log(numSelect + "  " +"nBC:  " + nBC)
}
function Verifier()
{
    if (nBC !== document.getElementById("choixDuJoueur").value && nombreEssais < 10)
    {
        $("#nombreEssais").append(choixDuJoueur);
        $("déjaChoisi").append(choixDuJoueur)
        nombreEssais++;
        return false;
    }
    if(choixDuJoueur < 0 || choixDuJoueur > 100 || choixDuJoueur === listeDejaEntrer ){  }
    if (nBC === document.getElementById("choixDuJoueur").value )
    {
        return true;
    }
    if(nombreEssais >= 10) return alert("vous avez perdu!")
    $("choixDuJoueur").push()
}

console.log("Vos essais "+ nombreEssais)
console.log("Vos choix "+ choixDuJouer)
