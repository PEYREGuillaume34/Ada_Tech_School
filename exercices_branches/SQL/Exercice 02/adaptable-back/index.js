import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {Pool} from "pg";

// Charger les variables d'environnement depuis le fichier .env
dotenv.config();

// Création d'un pool de connexion à PostgreSQL via la variable d'environnement DATABASE_URL
// Neon fournit une URL de connexion prête à l'emploi
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {rejectUnauthorized: false}, // recommandé pour Neon afin de sécuriser la connexion
});

const app = express();
const PORT = process.env.PORT || 3000;

// Autoriser les appels depuis un front (CORS activé)
app.use(cors());

// Permet de récuperer le body des requêtes en json
app.use(express.json());

// Exemple de route GET sur /todos
app.get("/edusign", async (req, res) => {
    try {
        // On fait une requête SQL simple pour récupérer toutes les lignes de la table edusign
        const result = await pool.query("SELECT * FROM edusign");

        // On renvoie le résultat sous forme de tableau JSON
        res.json(result.rows);
    } catch (error) {
        console.error("Erreur lors de la récupération des recettes:", error);
        res.status(500).json({error: "Erreur serveur"});
    }
});

// Route PATCH pour modifier la complétude d'une todo
// On attend un body JSON avec completed = true/false
app.patch("/todos/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const {completed} = req.body;
        // Mise à jour de la todo par son ID
        const result = await pool.query("UPDATE todos SET completed = $1 WHERE id = $2 RETURNING *", [completed, id]);

        if (result.rowCount === 0) {
            return res.status(404).json({error: "Todo non trouvée"});
        }

        // On renvoie la todo mise à jour
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Erreur serveur", details: error?.message});
    }
});

// Démarrage du serveur Express
app.listen(PORT, () => {
    console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});

// Exemple de route GET sur /todos
app.get("/users", async (req, res) => {
    try {
        // On fait une requête SQL simple pour récupérer toutes les lignes de la table edusign
        const result = await pool.query("SELECT * FROM users");

        // On renvoie le résultat sous forme de tableau JSON
        res.json(result.rows);
    } catch (error) {
        console.error("Erreur lors de la récupération des recettes:", error);
        res.status(500).json({error: "Erreur serveur"});
    }
});