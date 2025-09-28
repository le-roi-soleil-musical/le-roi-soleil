// ===== PERSONNAGES HISTORIQUES POUR MODALES =====
const historicalCharacters = {
    "Louis XIV": {
        id: "louis_xiv",
        name: "Louis XIV",
        title: "Le Roi-Soleil",
        period: "1638-1715",
        emoji: "👑",
        color: "#d4af37",
        description: "Roi de France de 1643 à 1715, Louis XIV incarne l'absolutisme royal français. Surnommé le Roi-Soleil, il fait de la France la première puissance européenne.",
        keyFacts: [
            "Règne de 72 ans, le plus long de l'histoire de France",
            "Créateur du château de Versailles",
            "Instaure l'étiquette de cour la plus raffinée d'Europe",
            "Mène de nombreuses guerres pour étendre le territoire français"
        ],
        historicalRole: "Monarque absolu qui centralise le pouvoir royal et fait rayonner la culture française en Europe.",
        legacy: "Modèle de l'absolutisme royal, créateur de Versailles, symbole de la grandeur française."
    },
    
    "Anne d'Autriche": {
        id: "anne_autriche",
        name: "Anne d'Autriche",
        title: "La Reine Mère",
        period: "1601-1666",
        emoji: "👸",
        color: "#8b5cf6",
        description: "Reine de France, épouse de Louis XIII et mère de Louis XIV. Elle assure la régence du royaume pendant la minorité de son fils.",
        keyFacts: [
            "Régente de France de 1643 à 1651",
            "S'appuie sur Mazarin pour gouverner",
            "Défend l'autorité royale pendant la Fronde",
            "Éduque Louis XIV dans l'idée de l'absolutisme royal"
        ],
        historicalRole: "Régente courageuse qui préserve l'autorité royale et prépare le règne personnel de Louis XIV.",
        legacy: "Mère protectrice du futur Roi-Soleil, garante de la continuité monarchique."
    },
    
    "Mazarin": {
        id: "mazarin",
        name: "Jules Mazarin",
        title: "L'Éminence",
        period: "1602-1661",
        emoji: "🎯",
        color: "#dc2626",
        description: "Cardinal italien, Premier ministre de France sous Louis XIV. Successeur de Richelieu, il achève l'œuvre de centralisation royale.",
        keyFacts: [
            "Premier ministre de 1643 à 1661",
            "Mentor et éducateur politique de Louis XIV",
            "Négocie les traités de Westphalie (1648)",
            "Accumule une fortune considérable"
        ],
        historicalRole: "Architecte de la grandeur française, il forme Louis XIV à l'art de gouverner.",
        legacy: "Stratège politique génial, créateur de la diplomatie française moderne."
    },
    
    "Le Nôtre": {
        id: "le_notre",
        name: "André Le Nôtre",
        title: "L'Architecte des Jardins",
        period: "1613-1700",
        emoji: "🌳",
        color: "#059669",
        description: "Architecte paysagiste français, créateur des jardins de Versailles. Il révolutionne l'art des jardins à la française.",
        keyFacts: [
            "Créateur des jardins de Versailles",
            "Invente le style des jardins à la française",
            "Aménage aussi Vaux-le-Vicomte et les Tuileries",
            "Anobli par Louis XIV en reconnaissance de son génie"
        ],
        historicalRole: "Génie créateur qui donne à Versailles sa splendeur paysagère unique au monde.",
        legacy: "Maître incontesté de l'art paysager, ses créations inspirent l'Europe entière."
    },
    
    "Mansart": {
        id: "mansart",
        name: "Jules Hardouin-Mansart",
        title: "L'Architecte du Roi",
        period: "1646-1708",
        emoji: "🏛️",
        color: "#7c3aed",
        description: "Architecte français, il transforme Versailles en palais somptueux. Premier architecte du roi, il crée le style architectural français classique.",
        keyFacts: [
            "Architecte principal de Versailles",
            "Créateur de la Galerie des Glaces",
            "Construit les Invalides et la place Vendôme",
            "Développe le style architectural français classique"
        ],
        historicalRole: "Architecte génial qui donne à Versailles sa magnificence architecturale.",
        legacy: "Créateur du style français classique, ses œuvres marquent Paris et Versailles."
    },
    
    "Turenne": {
        id: "turenne",
        name: "Henri de Turenne",
        title: "Le Grand Capitaine",
        period: "1611-1675",
        emoji: "⚔️",
        color: "#dc2626",
        description: "Maréchal de France, l'un des plus grands stratèges militaires français. Il mène les armées de Louis XIV à la victoire.",
        keyFacts: [
            "Maréchal général des camps et armées du roi",
            "Vainqueur de nombreuses batailles décisives",
            "Réforme l'art militaire français",
            "Meurt au combat en 1675, pleuré par toute la France"
        ],
        historicalRole: "Stratège militaire de génie qui assure la supériorité militaire française en Europe.",
        legacy: "Modèle du parfait général, ses tactiques révolutionnent l'art de la guerre."
    },
    
    "Condé": {
        id: "conde",
        name: "Louis II de Condé",
        title: "Le Grand Condé",
        period: "1621-1686",
        emoji: "🛡️",
        color: "#059669",
        description: "Prince du sang et maréchal de France. Héros militaire de la guerre de Trente Ans, il devient l'un des plus grands généraux de Louis XIV.",
        keyFacts: [
            "Vainqueur de la bataille de Rocroi à 22 ans",
            "Participe à la Fronde contre le pouvoir royal",
            "Se réconcilie avec Louis XIV et devient son général",
            "Protecteur des arts et des lettres"
        ],
        historicalRole: "Génie militaire qui contribue à la gloire des armes françaises.",
        legacy: "Héros légendaire, symbole du courage et de l'honneur militaire français."
    },
    
    "Madame de Maintenon": {
        id: "mme_maintenon",
        name: "Françoise de Maintenon",
        title: "L'Épouse Secrète",
        period: "1635-1719",
        emoji: "📚",
        color: "#8b5cf6",
        description: "Gouvernante des enfants légitimés de Louis XIV, elle devient son épouse secrète. Influence discrète mais puissante sur le roi vieillissant.",
        keyFacts: [
            "Épouse secrète de Louis XIV vers 1683",
            "Fonde la Maison royale de Saint-Cyr",
            "Influence la politique religieuse du roi",
            "Encourage la révocation de l'Édit de Nantes"
        ],
        historicalRole: "Conseillère influente qui oriente la politique religieuse de Louis XIV.",
        legacy: "Éducatrice dévouée, elle marque la fin du règne par sa piété et sa sagesse."
    },
    
    "Bossuet": {
        id: "bossuet",
        name: "Jacques-Bénigne Bossuet",
        title: "L'Aigle de Meaux",
        period: "1627-1704",
        emoji: "⛪",
        color: "#dc2626",
        description: "Évêque et théologien français, précepteur du Dauphin. Grand orateur sacré, il théorise l'absolutisme royal de droit divin.",
        keyFacts: [
            "Précepteur du Grand Dauphin",
            "Théoricien de l'absolutisme de droit divin",
            "Auteur d'oraisons funèbres célèbres",
            "Défenseur de l'orthodoxie catholique"
        ],
        historicalRole: "Théologien qui légitime religieusement l'absolutisme royal de Louis XIV.",
        legacy: "Grand orateur sacré, ses écrits justifient théologiquement le pouvoir royal."
    },
    
    "Luxembourg": {
        id: "luxembourg",
        name: "François-Henri de Luxembourg",
        title: "Le Tapissier de Notre-Dame",
        period: "1628-1695",
        emoji: "🏆",
        color: "#059669",
        description: "Maréchal de France, surnommé le 'Tapissier de Notre-Dame' pour ses nombreuses victoires. L'un des plus grands généraux de Louis XIV.",
        keyFacts: [
            "Vainqueur de Fleurus, Steenkerque et Landen",
            "Surnommé le 'Tapissier de Notre-Dame' pour ses drapeaux pris à l'ennemi",
            "Stratège redoutable de la guerre de la Ligue d'Augsbourg",
            "Respecté par ses ennemis pour sa loyauté chevaleresque"
        ],
        historicalRole: "Général victorieux qui maintient la supériorité militaire française malgré les coalitions.",
        legacy: "Tacticien génial, ses victoires sauvent la France de l'encerclement européen."
    },
    
    "Vauban": {
        id: "vauban",
        name: "Sébastien Le Prestre de Vauban",
        title: "Le Maître des Fortifications",
        period: "1633-1707",
        emoji: "🏰",
        color: "#7c3aed",
        description: "Ingénieur militaire et maréchal de France. Il révolutionne l'art de la fortification et de la poliorcétique.",
        keyFacts: [
            "Créateur du système de fortifications français",
            "Fortifie plus de 300 places fortes",
            "Invente de nouvelles techniques de siège",
            "Théoricien de la guerre de siège moderne"
        ],
        historicalRole: "Génie militaire qui protège les frontières françaises par ses fortifications.",
        legacy: "Ses fortifications protègent la France, ses méthodes révolutionnent l'art militaire."
    },
    
    "Philippe d'Anjou": {
        id: "philippe_anjou",
        name: "Philippe d'Anjou",
        title: "Le Roi d'Espagne",
        period: "1683-1746",
        emoji: "👑",
        color: "#d4af37",
        description: "Petit-fils de Louis XIV, il devient Philippe V d'Espagne. Son accession au trône déclenche la guerre de Succession d'Espagne.",
        keyFacts: [
            "Petit-fils de Louis XIV",
            "Devient Philippe V d'Espagne en 1700",
            "Son règne déclenche une guerre européenne",
            "Fonde la dynastie des Bourbons d'Espagne"
        ],
        historicalRole: "Prince français qui unit les couronnes de France et d'Espagne, bouleversant l'équilibre européen.",
        legacy: "Fondateur de la dynastie espagnole des Bourbons, son règne transforme l'Espagne."
    },
    
    "Marlborough": {
        id: "marlborough",
        name: "John Churchill de Marlborough",
        title: "Le Général Anglais",
        period: "1650-1722",
        emoji: "🇬🇧",
        color: "#dc2626",
        description: "Général anglais, principal adversaire militaire de Louis XIV. Ses victoires affaiblissent la puissance française en Europe.",
        keyFacts: [
            "Vainqueur de Blenheim, Ramillies et Malplaquet",
            "Chef de la coalition anti-française",
            "Stratège redoutable et diplomate habile",
            "Contraint Louis XIV à négocier la paix"
        ],
        historicalRole: "Principal adversaire militaire de Louis XIV, il limite l'expansion française.",
        legacy: "Général légendaire, ses victoires marquent le déclin de l'hégémonie française."
    }
};

// Fonction pour obtenir un personnage historique par ID
function getHistoricalCharacterById(id) {
    return Object.values(historicalCharacters).find(character => character.id === id);
}

// Fonction pour obtenir un personnage historique par nom
function getHistoricalCharacterByName(name) {
    return historicalCharacters[name];
}

// Fonction pour obtenir tous les personnages historiques
function getAllHistoricalCharacters() {
    return historicalCharacters;
}
