// Variables globales pour les personnages
let charactersData = {};

// Fonction pour afficher les personnages avec le nouveau design
function displayCharacters() {
    const charactersGrid = document.getElementById('characters-grid');
    if (!charactersGrid) return;

    // Sélection des personnages principaux pour l'affichage
    const mainCharacters = [
        {
            id: 1,
            name: "Louis XIV",
            title: "Le Roi Soleil",
            description: "Le monarque absolu de France, maître de Versailles et incarnation du pouvoir royal. Un jeune roi en quête de grandeur et d'amour.",
            image: "images/personnages/louis_xiv.jpg",
            skills: ["Règne Absolu", "Éclat Royal", "Majesté Divine", "Vision d'Empire"],
            stats: { pouvoir: 95, charisme: 100, intelligence: 90, amour: 85 },
            citation: "L'État, c'est moi !",
            histoire: "Louis XIV, dit le Roi-Soleil, est né en 1638 et devient roi de France à l'âge de cinq ans. Sous la régence de sa mère Anne d'Autriche et la tutelle du cardinal Mazarin, il apprend les rouages du pouvoir. Son règne personnel commence en 1661 et durera 54 ans, faisant de lui l'un des monarques ayant régné le plus longtemps dans l'histoire de France."
        },
        {
            id: 2,
            name: "Marie Mancini",
            title: "Premier Amour",
            description: "Nièce de Mazarin, premier grand amour du Roi Soleil. Son charme italien a conquis le cœur royal dans une passion impossible.",
            image: "images/personnages/marie_mancini.jpg",
            skills: ["Charme Italien", "Poésie Romantique", "Séduction Fatale", "Mélancolie"],
            stats: { pouvoir: 70, charisme: 95, intelligence: 85, amour: 100 },
            citation: "Je vous aimerai toujours, Sire, mais la raison d'État nous sépare.",
            histoire: "Marie Mancini (1639-1715) est la nièce du cardinal Mazarin. Elle arrive en France en 1653 et devient rapidement l'objet de la passion du jeune Louis XIV. Leur amour, bien que sincère et profond, est impossible en raison des exigences politiques du royaume."
        },
        {
            id: 3,
            name: "Cardinal Mazarin",
            title: "Premier Ministre",
            description: "Mentor du jeune roi et homme d'État redoutable. Il guide la France vers sa grandeur tout en protégeant ses propres intérêts.",
            image: "images/personnages/mazarin.jpg",
            skills: ["Diplomatie", "Stratégie Politique", "Manipulation", "Vision d'État"],
            stats: { pouvoir: 90, charisme: 80, intelligence: 95, amour: 60 },
            citation: "La politique est l'art du possible.",
            histoire: "Jules Mazarin (1602-1661) est un cardinal et homme d'État français d'origine italienne. Premier ministre de 1643 à 1661, il succède à Richelieu et devient le mentor du jeune Louis XIV, lui transmettant l'art de gouverner."
        },
        {
            id: 4,
            name: "Anne d'Autriche",
            title: "Reine Mère",
            description: "Mère de Louis XIV et régente du royaume. Femme forte qui a su préserver la couronne pour son fils.",
            image: "images/personnages/anne_autriche.jpg",
            skills: ["Autorité Maternelle", "Sagesse Royale", "Diplomatie", "Protection"],
            stats: { pouvoir: 85, charisme: 85, intelligence: 80, amour: 90 },
            citation: "Mon fils sera le plus grand roi de France.",
            histoire: "Anne d'Autriche (1601-1666) est reine de France comme épouse de Louis XIII et mère de Louis XIV. Régente de 1643 à 1651, elle gouverne le royaume avec Mazarin pendant la minorité de son fils."
        },
        {
            id: 5,
            name: "Jean-Baptiste Colbert",
            title: "Ministre des Finances",
            description: "Architecte de la grandeur économique française. Il transforme les finances royales et développe l'industrie du royaume.",
            image: "images/personnages/colbert.jpg",
            skills: ["Génie Financier", "Organisation", "Développement", "Rigueur"],
            stats: { pouvoir: 80, charisme: 70, intelligence: 95, amour: 65 },
            citation: "Il faut que l'argent du roi serve à la grandeur de la France.",
            histoire: "Jean-Baptiste Colbert (1619-1683) est le principal ministre de Louis XIV. Contrôleur général des finances, il réorganise l'économie française et développe le commerce et l'industrie, contribuant à la prospérité du règne."
        },
        {
            id: 6,
            name: "Madame de Montespan",
            title: "Favorite Royale",
            description: "Maîtresse officielle du roi, femme d'esprit et de beauté qui règne sur la cour de Versailles.",
            image: "images/personnages/madame_montespan.jpg",
            skills: ["Beauté Éclatante", "Esprit Brillant", "Influence Courtisane", "Jalousie"],
            stats: { pouvoir: 75, charisme: 90, intelligence: 85, amour: 80 },
            citation: "À Versailles, tout passe par moi.",
            histoire: "Françoise-Athénaïs de Rochechouart de Mortemart, marquise de Montespan (1640-1707), est la maîtresse en titre de Louis XIV de 1667 à 1680. Femme d'esprit et de beauté, elle domine la cour et influence les décisions royales."
        }
    ];

    // Stocker les données des personnages globalement
    mainCharacters.forEach(character => {
        charactersData[character.id] = character;
    });

    charactersGrid.innerHTML = mainCharacters.map(character => `
        <div class="character-card" onclick="openCharacterModal(${character.id})">
            <img src="${character.image}" alt="${character.name}" class="character-image" onerror="this.src='images/placeholder.jpg'">
            <div class="character-content">
                <h3 class="character-name">${character.name}</h3>
                <p class="character-title">${character.title}</p>
                <p class="character-description">${character.description}</p>
            </div>
        </div>
    `).join('');
}

// Fonction pour ouvrir la modale de personnage avec le nouveau design
function openCharacterModal(characterId) {
    const character = charactersData[characterId];
    if (!character) return;
    const overlay = document.getElementById('character-modal-overlay');
    const nameElement = document.getElementById('modal-character-name');
    const contentElement = document.getElementById('modal-character-content');
    
    nameElement.textContent = character.name;
    
    const statsHtml = character.stats ? Object.entries(character.stats).map(([stat, value]) => `
        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 0.5rem;">
            <span style="width: 80px; font-size: 0.9rem; color: var(--accent-gold); text-transform: capitalize;">${stat}</span>
            <div style="flex: 1; height: 8px; background: rgba(198, 166, 100, 0.2); border-radius: 4px; overflow: hidden;">
                <div style="height: 100%; background: linear-gradient(90deg, var(--primary-gold), var(--accent-gold)); width: ${value}%; border-radius: 4px; transition: width 1s ease;"></div>
            </div>
            <span style="width: 30px; text-align: right; font-size: 0.9rem; font-weight: bold;">${value}</span>
        </div>
    `).join('') : '';
    
    const skillsHtml = character.skills ? `
        <div style="margin-top: 1.5rem;">
            <h5 style="color: var(--primary-gold); margin-bottom: 1rem; font-family: var(--title-font);">Compétences</h5>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                ${character.skills.map(skill => `
                    <span style="background: rgba(198, 166, 100, 0.2); color: var(--primary-gold); padding: 0.4rem 0.8rem; border-radius: 15px; font-size: 0.9rem; border: 1px solid rgba(198, 166, 100, 0.3);">${skill}</span>
                `).join('')}
            </div>
        </div>
    ` : '';
    
    contentElement.innerHTML = `
        <div style="display: grid; gap: 2rem;">
            <div style="text-align: center;">
                <img src="${character.image}" alt="${character.name}" 
                     style="width: 200px; height: 200px; object-fit: cover; border-radius: 50%; border: 3px solid var(--primary-gold); box-shadow: 0 8px 25px rgba(198, 166, 100, 0.3);"
                     onerror="this.src='images/placeholder.jpg'">
            </div>
            
            <div>
                <h4 style="color: var(--primary-gold); margin-bottom: 1rem; font-family: var(--title-font); font-size: 1.3rem;">${character.title}</h4>
                <p style="line-height: 1.6; margin-bottom: 1.5rem; opacity: 0.9;">${character.description}</p>
                
                ${character.histoire ? `
                    <div style="background: rgba(198, 166, 100, 0.1); padding: 1.5rem; border-radius: 12px; border: 1px solid rgba(198, 166, 100, 0.2); margin-bottom: 1.5rem;">
                        <h5 style="color: var(--primary-gold); margin-bottom: 1rem; font-family: var(--title-font);">Histoire</h5>
                        <p style="line-height: 1.6; opacity: 0.9;">${character.histoire}</p>
                    </div>
                ` : ''}
                
                ${character.citation ? `
                    <blockquote style="border-left: 3px solid var(--primary-gold); padding-left: 1rem; margin: 1.5rem 0; font-style: italic; opacity: 0.9;">
                        "${character.citation}"
                    </blockquote>
                ` : ''}
                
                ${character.stats ? `
                    <div style="margin-top: 1.5rem;">
                        <h5 style="color: var(--primary-gold); margin-bottom: 1rem; font-family: var(--title-font);">Caractéristiques</h5>
                        ${statsHtml}
                    </div>
                ` : ''}
                
                ${skillsHtml}
            </div>
        </div>
    `;
    
    overlay.classList.add('active');
}

// Initialiser l'affichage des personnages au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    displayCharacters();
});
