import {Client} from "pg";
import { writeFile } from "fs/promises";
console.log("Recherche : ", process.argv[2]);


// // Exemple de connectionString
// const connectionString = 'postgresql://neondb_owner:npg_IQltBZJK72Vs@ep-rough-resonance-a23ubz21-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require';

// // Création du client
// const client = new Client({
//     connectionString,
// });

// async function run() {
//     try {
//         // Connexion
//         await client.connect();

//         // Exemple de requête SELECT
//         const result = await client.query(`SELECT * FROM topics where name ='${process.argv[2]}';`);

//         console.log("Résultats :", result.rows);
//     } catch (err) {
//         console.error("Erreur :", err);
//     } finally {
//         // Déconnexion
//         await client.end();
//     }
// }

// run();



// Exemple de connectionString
const connectionString = 'postgresql://neondb_owner:npg_IQltBZJK72Vs@ep-rough-resonance-a23ubz21-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require';

// Création du client
const client = new Client({
    connectionString,
});

async function run() {
    try {
        // Connexion
        await client.connect();

        // Exemple de requête SELECT
        const result = await client.query(`SELECT * FROM exercises JOIN topics ON exercises.topic_id = topics.id where name ='${process.argv[2]}';`);
        writeFile('test.txt', 'coucou')
        console.log("Résultats :", result.rows);
    } catch (err) {
        console.error("Erreur :", err);
    } finally {
        // Déconnexion
        await client.end();
    }
}

run();