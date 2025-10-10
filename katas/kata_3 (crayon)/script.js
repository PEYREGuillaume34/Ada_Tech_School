
function drawMyPen() {
    const calendrierDuCrayon = {
        septembre: 10,
        octobre: 9,
        novembre: 8,
        decembre: 7,
        janvier: 6,
        fevrier: 5,
        mars: 4,
        avril: 3,
        mai: 2,
        juin: 1,
    };

    for (const mois in calendrierDuCrayon) {
        const taille = calendrierDuCrayon[mois];
        console.log(`\nCrayon du mois de ${mois} (taille ${taille}):`);

        // Afficher le sommet du crayon
        console.log(" /\\");
        console.log("/__\\");
        
        // Afficher le corps du crayon selon la taille
        for (let i = 1; i <= taille; i++) {
            console.log("||||");
        }

        if (taille <= 4)  console.log("|__|") ; 
        else {
        console.log("|__|"); console.log("|__|");
        }
    }
}


drawMyPen();