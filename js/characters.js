// ===== DONNÉES DES PERSONNAGES - FACILEMENT MODIFIABLE =====

const characters = [
    {
        id: 1,
        name: "Louis XIV",
        title: "Le Roi Soleil",
        description: "Le monarque absolu de France, maître de Versailles et incarnation du pouvoir royal.",
        image: "images/personnages/louis_xiv.jpg",
        emoji: "👑",
        type: "Royauté",
        typeClass: "royaute",
        competences: ["Règne Absolu", "Éclat Royal", "Majesté Divine", "Vision d'Empire"],
        stats: {
            pouvoir: 95,
            charisme: 100,
            intelligence: 90,
            amour: 85
        },
        pouvoirSpecial: {
            nom: "Éclat du Soleil",
            description: "Éblouit tous ses adversaires par sa magnificence royale"
        },
        citation: "L'État, c'est moi !",
        faiblesse: "Orgueil"
    },
    {
        id: 2,
        name: "Marie Mancini",
        title: "Premier Amour",
        description: "Nièce de Mazarin, premier grand amour du Roi Soleil. Son charme italien a conquis le cœur royal.",
        image: "images/personnages/marie_mancini.jpg",
        emoji: "💕",
        type: "Courtisane",
        typeClass: "courtisane",
        competences: ["Charme Italien", "Poésie Romantique", "Séduction Fatale", "Mélancolie"],
        stats: {
            pouvoir: 70,
            charisme: 95,
            intelligence: 85,
            amour: 100
        },
        pouvoirSpecial: {
            nom: "Cœur Brisé",
            description: "Son amour impossible inspire une mélancolie profonde"
        },
        citation: "Je vous aimerai toujours, Sire, mais la raison d'État nous sépare.",
        faiblesse: "Amour Impossible"
    },
    {
        id: 3,
        name: "Madame de Montespan",
        title: "La Sultane",
        description: "Maîtresse sulfureuse du roi, elle règne sur Versailles par sa beauté et son esprit.",
        image: "images/personnages/madame_montespan.jpg",
        emoji: "🌹",
        type: "Dame de cour",
        typeClass: "dame-de-cour",
        competences: ["Séduction fatale", "Intrigue de Cour", "Beauté Ensorcelante", "Esprit Vif"],
        stats: {
            pouvoir: 85,
            charisme: 90,
            intelligence: 80,
            amour: 75
        },
        pouvoirSpecial: {
            nom: "Charme Vénéneux",
            description: "Ensorcelle ses ennemis par sa beauté fatale"
        },
        citation: "Le roi m'aime pour mon esprit autant que pour ma beauté.",
        faiblesse: "Jalousie"
    },
    {
        id: 4,
        name: "Monsieur (Frère du Roi)",
        title: "Philippe d'Orléans",
        description: "Frère cadet de Louis XIV, homme raffiné et guerrier courageux malgré les apparences.",
        image: "images/personnages/philippe_orleans.jpg",
        emoji: "🎭",
        type: "Royauté",
        typeClass: "royaute",
        competences: ["Élégance Raffinée", "Courage militaire", "Art de Vivre", "Diplomatie"],
        stats: {
            pouvoir: 75,
            charisme: 85,
            intelligence: 80,
            amour: 70
        },
        pouvoirSpecial: {
            nom: "Grâce Martiale",
            description: "Allie élégance et bravoure sur le champ de bataille"
        },
        citation: "Je sers le roi avec autant de courage que d'élégance.",
        faiblesse: "Ombre du Roi"
    },
    {
        id: 5,
        name: "Molière",
        title: "Le Génie Comique",
        description: "Dramaturge de génie, miroir satirique de la société de son temps.",
        image: "images/personnages/moliere.jpg",
        emoji: "🎪",
        type: "Les gens",
        typeClass: "les-gens",
        competences: ["Génie Dramatique", "Satire Brillante", "Comédie Humaine", "Vérité Sociale"],
        stats: {
            pouvoir: 70,
            charisme: 95,
            intelligence: 100,
            amour: 65
        },
        pouvoirSpecial: {
            nom: "Miroir de la Société",
            description: "Révèle les vices et vertus de son époque par le rire"
        },
        citation: "Il faut manger pour vivre et non pas vivre pour manger.",
        faiblesse: "Santé Fragile"
    },
    {
        id: 6,
        name: "Le Duc de Beaufort",
        title: "Roi des Halles",
        description: "Noble frondeur devenu héros du peuple, incarnation de la bravoure française.",
        image: "images/personnages/duc_beaufort.jpg",
        emoji: "⚔️",
        type: "Les gens",
        typeClass: "les-gens",
        competences: ["Bravoure Légendaire", "Charisme Populaire", "Art de la Guerre", "Honneur"],
        stats: {
            pouvoir: 85,
            charisme: 90,
            intelligence: 75,
            amour: 80
        },
        pouvoirSpecial: {
            nom: "Cri de Guerre",
            description: "Galvanise ses troupes par son courage exemplaire"
        },
        citation: "Pour la France et l'honneur !",
        faiblesse: "Impétuosité"
    },
    {
        id: 7,
        name: "Madame de Maintenon",
        title: "L'Épouse Secrète",
        description: "Gouvernante des enfants royaux devenue épouse secrète du roi, influence discrète mais puissante.",
        image: "images/personnages/mme_maintenon.jpg",
        emoji: "📚",
        type: "Dame de cour",
        typeClass: "dame-de-cour",
        competences: ["Sagesse Politique", "Éducation Noble", "Influence Discrète", "Piété"],
        stats: {
            pouvoir: 80,
            charisme: 75,
            intelligence: 95,
            amour: 85
        },
        pouvoirSpecial: {
            nom: "Conseil Avisé",
            description: "Guide le roi par sa sagesse et sa discrétion"
        },
        citation: "La vraie grandeur consiste à être maître de soi-même.",
        faiblesse: "Austérité"
    },
    {
        id: 8,
        name: "Anne d'Autriche",
        title: "La Reine Mère",
        description: "Mère de Louis XIV, régente courageuse qui a préservé le trône pour son fils.",
        image: "images/personnages/anne_autriche.jpg",
        emoji: "👸",
        type: "Royauté",
        typeClass: "royaute",
        competences: ["Autorité Maternelle", "Courage Royal", "Diplomatie", "Protection"],
        stats: {
            pouvoir: 85,
            charisme: 80,
            intelligence: 85,
            amour: 90
        },
        pouvoirSpecial: {
            nom: "Protection Maternelle",
            description: "Défend farouchement les intérêts de son fils"
        },
        citation: "Mon fils régnera, quoi qu'il en coûte.",
        faiblesse: "Surprotection"
    },
    {
        id: 9,
        name: "Mazarin",
        title: "L'Éminence",
        description: "Cardinal italien, mentor de Louis XIV et architecte de la grandeur française.",
        image: "images/personnages/mazarin.jpg",
        emoji: "🎯",
        type: "Premier Ministre",
        typeClass: "premier-ministre",
        competences: ["Stratégie politique", "Diplomatie Subtile", "Vision d'État", "Manipulation"],
        stats: {
            pouvoir: 90,
            charisme: 80,
            intelligence: 100,
            amour: 60
        },
        pouvoirSpecial: {
            nom: "Maître du Jeu",
            description: "Orchestre les événements depuis l'ombre"
        },
        citation: "La politique est l'art du possible.",
        faiblesse: "Méfiance Générale"
    },
    {
        id: 10,
        name: "Colbert",
        title: "Le Grand Ministre",
        description: "Ministre des Finances du génie, architecte de la prospérité française.",
        image: "images/personnages/colbert.jpg",
        emoji: "💰",
        type: "Les gens",
        typeClass: "les-gens",
        competences: ["Génie Financier", "Vision économique", "Organisation", "Rigueur"],
        stats: {
            pouvoir: 80,
            charisme: 70,
            intelligence: 95,
            amour: 65
        },
        pouvoirSpecial: {
            nom: "Prospérité Royale",
            description: "Transforme les finances du royaume par son génie"
        },
        citation: "Il faut que l'argent du roi fructifie pour la grandeur de la France.",
        faiblesse: "Austérité Excessive"
    },
    {
        id: 11,
        name: "L'enfant Roi",
        title: "Louis XV",
        description: "Le jeune Louis XV, orphelin devenu roi à 5 ans, apprenant les responsabilités du trône sous la régence.",
        image: "images/personnages/enfant_roi.jpg",
        emoji: "👶",
        type: "Royauté",
        typeClass: "royaute",
        competences: ["Innocence Royale", "Apprentissage Rapide", "Charme Enfantin", "Destinée"],
        stats: {
            pouvoir: 60,
            charisme: 75,
            intelligence: 70,
            amour: 85
        },
        pouvoirSpecial: {
            nom: "Espoir du Royaume",
            description: "Incarne l'avenir et l'espoir de la France"
        },
        citation: "Je ferai de mon mieux pour être digne du trône.",
        faiblesse: "Jeunesse"
    },
    {
        id: 12,
        name: "Ninon de l'Enclos",
        title: "La Libre Penseuse",
        description: "Courtisane philosophe, symbole de liberté et d'indépendance féminine.",
        image: "images/personnages/ninon_enclos.jpg",
        emoji: "🦋",
        type: "Courtisane",
        typeClass: "courtisane",
        competences: ["Liberté d'Esprit", "Philosophie", "Charme Naturel", "Indépendance"],
        stats: {
            pouvoir: 65,
            charisme: 90,
            intelligence: 95,
            amour: 80
        },
        pouvoirSpecial: {
            nom: "Esprit Libre",
            description: "Inspire la liberté de pensée et d'action"
        },
        citation: "La beauté sans esprit est un hameçon sans appât.",
        faiblesse: "Scandale Social"
    },
    {
        id: 13,
        name: "Mademoiselle de Lisieux",
        title: "La Mystérieuse",
        description: "Dame de compagnie aux secrets bien gardés, observatrice silencieuse de la cour.",
        image: "images/personnages/mlle_lisieux.jpg",
        emoji: "🕊️",
        type: "Dame de cour",
        typeClass: "dame-de-cour",
        competences: ["Discrétion", "Observation", "Secrets de Cour", "Loyauté"],
        stats: {
            pouvoir: 60,
            charisme: 70,
            intelligence: 85,
            amour: 75
        },
        pouvoirSpecial: {
            nom: "Gardienne des Secrets",
            description: "Connaît tous les mystères de la cour"
        },
        citation: "Les murs ont des oreilles, mais moi j'ai des yeux.",
        faiblesse: "Trop de Secrets"
    },
    {
        id: 14,
        name: "La Voisin",
        title: "La Sorcière",
        description: "Célèbre empoisonneuse au cœur de l'Affaire des Poisons, maîtresse des arts occultes.",
        image: "images/personnages/la_voisin.jpg",
        emoji: "🔮",
        type: "Les gens",
        typeClass: "les-gens",
        competences: ["Arts occultes", "Poisons mortels", "Manipulation", "Terreur"],
        stats: {
            pouvoir: 90,
            charisme: 70,
            intelligence: 85,
            amour: 40
        },
        pouvoirSpecial: {
            nom: "Poison Fatal",
            description: "Élimine ses ennemis par des moyens occultes"
        },
        citation: "La mort n'est qu'un passage vers un autre monde.",
        faiblesse: "Folie"
    },
    {
        id: 15,
        name: "Isabelle",
        title: "La Bergère",
        description: "Simple bergère au cœur pur, représente l'innocence et la beauté naturelle.",
        image: "images/personnages/isabelle.jpg",
        emoji: "🌸",
        type: "Les gens",
        typeClass: "les-gens",
        competences: ["Pureté d'Âme", "Beauté Naturelle", "Simplicité", "Bonté"],
        stats: {
            pouvoir: 60,
            charisme: 85,
            intelligence: 70,
            amour: 95
        },
        pouvoirSpecial: {
            nom: "Cœur Pur",
            description: "Touche les âmes par sa sincérité naturelle"
        },
        citation: "La vraie beauté vient du cœur.",
        faiblesse: "Naïveté"
    },
    {
        id: 16,
        name: "Paul Scarron",
        title: "L'Écrivain Burlesque",
        description: "Poète et dramaturge, premier époux de Madame de Maintenon, maître de l'humour.",
        image: "images/personnages/paul_scarron.jpg",
        emoji: "✍️",
        type: "Les gens",
        typeClass: "les-gens",
        competences: ["Génie Littéraire", "Humour Mordant", "Satire Sociale", "Courage"],
        stats: {
            pouvoir: 65,
            charisme: 80,
            intelligence: 90,
            amour: 75
        },
        pouvoirSpecial: {
            nom: "Rire Libérateur",
            description: "Libère les esprits par l'humour et la satire"
        },
        citation: "Il faut rire de tout, surtout de soi-même.",
        faiblesse: "Handicap Physique"
    },
    {
        id: 17,
        name: "Courtisane",
        title: "La Séductrice",
        description: "Dame de la cour experte en séduction, navigue avec habileté dans les intrigues.",
        image: "images/personnages/courtisane.jpg",
        emoji: "💋",
        type: "Courtisane",
        typeClass: "courtisane",
        competences: ["Art de la Séduction", "Intrigues de Cour", "Charme Fatal", "Manipulation"],
        stats: {
            pouvoir: 75,
            charisme: 95,
            intelligence: 80,
            amour: 70
        },
        pouvoirSpecial: {
            nom: "Charme Irrésistible",
            description: "Ensorcelle tous ceux qui croisent son regard"
        },
        citation: "Un sourire peut ouvrir toutes les portes.",
        faiblesse: "Vanité"
    },
    {
        id: 18,
        name: "Femme de Chambre",
        title: "La Confidente",
        description: "Servante dévouée, témoin privilégié des secrets les plus intimes de la cour.",
        image: "images/personnages/femme_chambre.jpg",
        emoji: "🤫",
        type: "Les gens",
        typeClass: "les-gens",
        competences: ["Discrétion Absolue", "Fidélité", "Connaissance Intime", "Service"],
        stats: {
            pouvoir: 50,
            charisme: 65,
            intelligence: 75,
            amour: 85
        },
        pouvoirSpecial: {
            nom: "Confiance Totale",
            description: "Inspire une confiance absolue à ses maîtres"
        },
        citation: "Je sais tout, mais ne dis rien.",
        faiblesse: "Condition Sociale"
    },
    {
        id: 19,
        name: "Dame de Cour",
        title: "L'Aristocrate",
        description: "Noble dame de la haute société, gardienne des traditions et de l'étiquette.",
        image: "images/personnages/dame_cour.jpg",
        emoji: "👑",
        type: "Dame de cour",
        typeClass: "dame-de-cour",
        competences: ["Étiquette Parfaite", "Noblesse d'Âme", "Tradition", "Raffinement"],
        stats: {
            pouvoir: 70,
            charisme: 85,
            intelligence: 80,
            amour: 75
        },
        pouvoirSpecial: {
            nom: "Grâce Aristocratique",
            description: "Impose le respect par sa noblesse naturelle"
        },
        citation: "La noblesse oblige.",
        faiblesse: "Rigidité Sociale"
    },
    {
        id: 20,
        name: "Soldat",
        title: "Le Brave",
        description: "Militaire courageux au service du roi, incarnation de l'honneur et du sacrifice.",
        image: "images/personnages/soldat.jpg",
        emoji: "🛡️",
        type: "Les gens",
        typeClass: "les-gens",
        competences: ["Courage au Combat", "Fidélité Royale", "Art Militaire", "Sacrifice"],
        stats: {
            pouvoir: 80,
            charisme: 75,
            intelligence: 70,
            amour: 85
        },
        pouvoirSpecial: {
            nom: "Bravoure Héroïque",
            description: "Inspire le courage à ses compagnons d'armes"
        },
        citation: "Pour le roi et la patrie !",
        faiblesse: "Obéissance Aveugle"
    },
    {
        id: 21,
        name: "Danseuse",
        title: "L'Artiste",
        description: "Ballerine gracieuse des spectacles royaux, incarnation de la beauté en mouvement.",
        image: "images/personnages/danseuse.jpg",
        emoji: "💫",
        type: "Les gens",
        typeClass: "les-gens",
        competences: ["Grâce Divine", "Art de la Danse", "Beauté en Mouvement", "Expression"],
        stats: {
            pouvoir: 60,
            charisme: 95,
            intelligence: 75,
            amour: 80
        },
        pouvoirSpecial: {
            nom: "Danse Ensorcelante",
            description: "Hypnotise par la beauté de ses mouvements"
        },
        citation: "La danse est la poésie du mouvement.",
        faiblesse: "Fragilité Physique"
    },
    {
        id: 22,
        name: "Médecin",
        title: "Le Guérisseur",
        description: "Praticien de l'art médical, gardien de la santé royale et des secrets du corps.",
        image: "images/personnages/medecin.jpg",
        emoji: "⚕️",
        type: "Les gens",
        typeClass: "les-gens",
        competences: ["Art Médical", "Connaissance du Corps", "Discrétion Médicale", "Sagesse"],
        stats: {
            pouvoir: 70,
            charisme: 75,
            intelligence: 95,
            amour: 80
        },
        pouvoirSpecial: {
            nom: "Guérison Miraculeuse",
            description: "Soigne les maux du corps et parfois de l'âme"
        },
        citation: "Primum non nocere - D'abord, ne pas nuire.",
        faiblesse: "Limites de la Science"
    },
    {
        id: 23,
        name: "Évêque",
        title: "L'Homme de Dieu",
        description: "Prélat influent, guide spirituel de la cour et gardien de la morale chrétienne.",
        image: "images/personnages/eveque.jpg",
        emoji: "⛪",
        type: "Les gens",
        typeClass: "les-gens",
        competences: ["Autorité Spirituelle", "Éloquence Sacrée", "Morale Chrétienne", "Influence"],
        stats: {
            pouvoir: 85,
            charisme: 90,
            intelligence: 90,
            amour: 75
        },
        pouvoirSpecial: {
            nom: "Bénédiction Divine",
            description: "Apporte la protection et la guidance spirituelle"
        },
        citation: "Dieu reconnaîtra les siens.",
        faiblesse: "Rigidité Morale"
    },
    {
        id: 24,
        name: "Femme du Peuple",
        title: "La Survivante",
        description: "Représentante du peuple français, témoin des difficultés et des espoirs du royaume.",
        image: "images/personnages/femme_peuple.jpg",
        emoji: "🌾",
        type: "Les gens",
        typeClass: "les-gens",
        competences: ["Survie", "Courage Populaire", "Solidarité", "Résistance"],
        stats: {
            pouvoir: 55,
            charisme: 70,
            intelligence: 75,
            amour: 90
        },
        pouvoirSpecial: {
            nom: "Force du Peuple",
            description: "Puise sa force dans l'amour de sa famille et de sa patrie"
        },
        citation: "Nous sommes le peuple de France, et nous survivrons.",
        faiblesse: "Pauvreté"
    }
];

// ===== FONCTIONS UTILITAIRES =====

// Obtenir un personnage par son ID
function getCharacterById(id) {
    return characters.find(char => char.id === id);
}

// Obtenir tous les personnages
function getAllCharacters() {
    return characters;
}

// Filtrer les personnages par type
function getCharactersByType(type) {
    return characters.filter(char => char.type === type);
}

// Rechercher des personnages par nom
function searchCharacters(query) {
    const lowerQuery = query.toLowerCase();
    return characters.filter(char => 
        char.name.toLowerCase().includes(lowerQuery) ||
        char.title.toLowerCase().includes(lowerQuery) ||
        char.description.toLowerCase().includes(lowerQuery)
    );
}
