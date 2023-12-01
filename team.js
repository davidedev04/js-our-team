
// creazione dell'array con le persone e le relative informazioni
const team = [

    {
        "nome": "Wayne",
        "cognome": "Barnett",
        "ruolo": "Founder & CEO",
        "img": "wayne-barnett-founder-ceo.jpg"
    },
    {
        "nome": "Angela",
        "cognome": "Caroll",
        "ruolo": "Chief Editor",
        "img": "angela-caroll-chief-editor.jpg"
    },
    {
        "nome": "Walter",
        "cognome": "Gordon",
        "ruolo": "Office Manager",
        "img": "walter-gordon-office-manager.jpg"
    },
    {
        "nome": "Angela",
        "cognome": "Lopez",
        "ruolo": "Social Media Manager",
        "img": "angela-lopez-social-media-manager.jpg"
    },
    {
        "nome": "Scott",
        "cognome": "Estrada",
        "ruolo": "Developer",
        "img": "scott-estrada-developer.jpg"
    },
    {
        "nome": "Barbara",
        "cognome": "Ramos",
        "ruolo": "Graphic Designer",
        "img": "barbara-ramos-graphic-designer.jpg"
    }

];

console.log(team);

for (i = 0; i < team.length; i++) {

    let teamIesimo = team[i];
    const nomeTeam = teamIesimo.nome;
    const cognomeTeam = teamIesimo.cognome;
    const ruoloTeam = teamIesimo.ruolo;
    const imgTeam = teamIesimo.img;

    console.log(nomeTeam, cognomeTeam, ruoloTeam, imgTeam);

}

