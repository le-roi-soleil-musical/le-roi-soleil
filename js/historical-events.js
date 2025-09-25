// ===== ÉVÉNEMENTS HISTORIQUES =====
const historicalEvents = [
    {
        id: 1,
        title: "La Fronde",
        period: "1648-1653",
        category: "Guerre civile",
        emoji: "⚔️",
        description: "Série de guerres civiles contre l'autorité royale et Mazarin. Cette révolte marque profondément le jeune Louis XIV.",
        impact: "Renforce la volonté d'absolutisme royal",
        consequences: [
            "Méfiance envers Paris",
            "Volonté de contrôler la noblesse"
        ],
        keyPersons: ["Louis XIV", "Anne d'Autriche", "Mazarin"],
        importance: "Majeure"
    },
    {
        id: 2,
        title: "Construction de Versailles",
        period: "1661-1710",
        category: "Architecture",
        emoji: "🏰",
        description: "Transformation d'un pavillon de chasse en palais somptueux. Versailles devient le symbole de la grandeur française.",
        impact: "Centralisation du pouvoir et de la cour",
        consequences: [
            "Contrôle de la noblesse",
            "Rayonnement artistique"
        ],
        keyPersons: ["Louis XIV", "Le Nôtre", "Mansart"],
        importance: "Légendaire"
    },
    {
        id: 3,
        title: "Guerre de Hollande",
        period: "1672-1678",
        category: "Conflit militaire",
        emoji: "⚔️",
        description: "Guerre menée par Louis XIV contre les Provinces-Unies. Apogée de la puissance militaire française.",
        impact: "Affirmation de l'hégémonie française en Europe",
        consequences: [
            "Conquêtes territoriales",
            "Prestige militaire"
        ],
        keyPersons: ["Louis XIV", "Turenne", "Condé"],
        importance: "Majeure"
    },
    {
        id: 4,
        title: "Révocation de l'Édit de Nantes",
        period: "1685",
        category: "Décision religieuse",
        emoji: "⛪",
        description: "Louis XIV révoque l'édit de tolérance religieuse d'Henri IV. Les protestants perdent leurs droits.",
        impact: "Unification religieuse du royaume mais massif de l'exil",
        consequences: [
            "Exode des huguenots",
            "Affaiblissement économique"
        ],
        keyPersons: ["Louis XIV", "Madame de Maintenon", "Bossuet"],
        importance: "Majeure"
    },
    {
        id: 5,
        title: "Guerre de la Ligue d'Augsbourg",
        period: "1688-1697",
        category: "Guerre européenne",
        emoji: "🛡️",
        description: "Coalition européenne contre l'hégémonie française. Première grande défaite de Louis XIV.",
        impact: "Limites de la puissance française révélées",
        consequences: [
            "Épuisement financier",
            "Famines"
        ],
        keyPersons: ["Louis XIV", "Luxembourg", "Vauban"],
        importance: "Majeure"
    },
    {
        id: 6,
        title: "Guerre de Succession d'Espagne",
        period: "1701-1714",
        category: "Conflit dynastique",
        emoji: "⚔️",
        description: "Dernière grande guerre du règne pour placer Philippe d'Anjou sur le trône d'Espagne.",
        impact: "Épuisement du royaume mais victoire dynastique",
        consequences: [
            "Philippe V roi d'Espagne",
            "Traité d'Utrecht"
        ],
        keyPersons: ["Louis XIV", "Philippe d'Anjou", "Marlborough"],
        importance: "Majeure"
    }
];

// Fonction pour obtenir un événement par ID
function getHistoricalEventById(id) {
    return historicalEvents.find(event => event.id === id);
}

// Fonction pour obtenir tous les événements
function getAllHistoricalEvents() {
    return historicalEvents;
}

// Fonction pour obtenir les événements par catégorie
function getEventsByCategory(category) {
    return historicalEvents.filter(event => event.category === category);
}

// Fonction pour obtenir les événements par importance
function getEventsByImportance(importance) {
    return historicalEvents.filter(event => event.importance === importance);
}
