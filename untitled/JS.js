
//nombreCache = SetRDMNumber();
// const listeChoix=[0]


function makeTable() {
    //declaring vars to hold the html code
    //spaces are so the html is nicely indented on the page
    let rowOpen = "    <tr>\n";
    let rowClose = "    </tr>\n";
    let cellOpen = "        <td>\n";
    let cellClose = "        </td>\n";
    let tableOpen = "<table>\n";
    let tableClose = "</table>\n";
    let tableContainer = "";

    //tableContainer contains all the generated code, then is printed at the end
    tableContainer += tableOpen;

    //loops generate each row and fill with cells
    for (let i=1; i<=10; i++) {
        tableContainer += rowOpen;
        for(let j=1; j<=10; j++) {
            //finding the squares to boldface them
            if(i === j) {
                tableContainer += cellOpen + " <span style='font-weight: bold; color: #00f'>" + (i * j) + "</span>\n" + cellClose;
            }
            else {
                tableContainer += cellOpen + " " + (i * j) + "\n" + cellClose;
            }
        }
        tableContainer += rowClose;
    }
    tableContainer += tableClose;

    //write tableContainer to the page and that is all!
    //using console.log for now but of course you will want to do something
    //else with it when you actually use it
    console.log(tableContainer);
    //return;
}

/**********************************************************************/
const nBC= Math.floor(Math.random() * 101);
function Verifier()
{
    if (nBC !== document.getElementById("choixDuJoueur").value && nombreEssais < 10)
    {
        $("#nombreEssais").append("<p>Un nouveau paragraphe</p>");
        nombreEssais++;
        return false;

    }
    if (nBC === document.getElementById("choixDuJoueur").value )
    {
        return true;
    }
    if(nombreEssais >= 10) return alert("vous avez perdu!")
    $("choixDuJoueur").push()
}
let nombreEssais =0
let choixDuJouer=[0]
console.log("Vos essais "+ nombreEssais)
console.log("Vos choix "+ choixDuJouer)
