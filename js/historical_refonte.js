// Faits historiques pour la section histoire avec le nouveau design
const historicalFacts = [
    {
        id: 1,
        title: "La Fronde",
        period: "1648-1653",
        emoji: "⚔️",
        description: "Série de guerres civiles contre l'autorité royale et Mazarin. Cette révolte marque profondément le jeune Louis XIV et forge sa volonté d'absolutisme.",
        details: "La Fronde est une période de troubles civils qui oppose une partie de la haute noblesse, du Parlement et du peuple parisien à l'autorité royale. Le jeune Louis XIV, alors âgé de 10 ans, doit fuir Paris avec sa mère. Cette expérience traumatisante le marquera à vie et renforcera sa détermination à ne jamais laisser quiconque défier l'autorité royale.",
        impact: "Renforce la volonté d'absolutisme royal",
        keyPersons: ["Louis XIV", "Anne d'Autriche", "Mazarin", "Cardinal de Retz"]
    },
    {
        id: 2,
        title: "L'Amour avec Marie Mancini",
        period: "1656-1659",
        emoji: "💕",
        description: "La passion du jeune roi pour Marie Mancini, nièce de Mazarin, représente le conflit entre l'amour personnel et la raison d'État.",
        details: "Marie Mancini arrive à la cour en 1653. Le jeune Louis XIV, alors âgé de 18 ans, tombe éperdument amoureux de cette jeune italienne spirituelle et cultivée. Leur relation passionnée dure trois ans, mais Mazarin et Anne d'Autriche s'opposent fermement à cette union, privilégiant un mariage politique avec l'Infante d'Espagne.",
        impact: "Première grande épreuve sentimentale du roi",
        keyPersons: ["Louis XIV", "Marie Mancini", "Mazarin", "Anne d'Autriche"]
    },
    {
        id: 3,
        title: "Début du Règne Personnel",
        period: "1661",
        emoji: "👑",
        description: "À la mort de Mazarin, Louis XIV décide de gouverner seul, sans Premier ministre. C'est le début de l'absolutisme royal.",
        details: "Le 9 mars 1661, Mazarin meurt. Le lendemain, Louis XIV convoque ses ministres et leur annonce qu'il gouvernera désormais seul. Cette décision marque le début du règne personnel du Roi-Soleil, qui durera 54 ans. Il centralise tous les pouvoirs et fait de la monarchie française un modèle pour l'Europe.",
        impact: "Naissance de la monarchie absolue moderne",
        keyPersons: ["Louis XIV", "Colbert", "Le Tellier", "Lionne"]
    },
    {
        id: 4,
        title: "Construction de Versailles",
        period: "1661-1710",
        emoji: "🏰",
        description: "Transformation d'un pavillon de chasse en palais somptueux. Versailles devient le symbole de la grandeur française et de l'art de vivre à la française.",
        details: "Louis XIV transforme le modeste château de chasse de son père en un palais grandiose. Versailles devient le centre du pouvoir politique et artistique de l'Europe. Le roi y installe sa cour en 1682, contrôlant ainsi la noblesse par l'étiquette et les fastes de la vie de cour.",
        impact: "Centralisation du pouvoir et rayonnement culturel",
        keyPersons: ["Louis XIV", "Le Vau", "Le Nôtre", "Mansart"]
    },
    {
        id: 5,
        title: "Mariage avec Marie-Thérèse",
        period: "1660",
        emoji: "💒",
        description: "Le mariage politique avec l'Infante d'Espagne scelle la paix entre la France et l'Espagne, mais le cœur du roi reste marqué par son premier amour.",
        details: "Le 9 juin 1660, Louis XIV épouse Marie-Thérèse d'Autriche, Infante d'Espagne, dans la cathédrale de Saint-Jean-de-Luz. Ce mariage, prévu par le traité des Pyrénées, met fin à la guerre franco-espagnole. Bien que respectueux envers son épouse, le roi garde le souvenir douloureux de Marie Mancini.",
        impact: "Paix avec l'Espagne et alliance dynastique",
        keyPersons: ["Louis XIV", "Marie-Thérèse d'Autriche", "Philippe IV d'Espagne"]
    },
    {
        id: 6,
        title: "L'Affaire Fouquet",
        period: "1661",
        emoji: "⚖️",
        description: "L'arrestation du surintendant des finances Nicolas Fouquet marque la volonté du roi de contrôler totalement les finances du royaume.",
        details: "Nicolas Fouquet, surintendant des finances, organise une fête somptueuse dans son château de Vaux-le-Vicomte en l'honneur du roi. Cette démonstration de richesse irrite Louis XIV qui y voit une provocation. Fouquet est arrêté le 5 septembre 1661 et jugé pour malversations. Cet événement permet au roi d'affirmer son autorité.",
        impact: "Contrôle royal sur les finances",
        keyPersons: ["Louis XIV", "Nicolas Fouquet", "Colbert", "D'Artagnan"]
    }
];

// Fonction pour afficher les faits historiques dans les cartes
function displayHistoricalFacts() {
    // Cette fonction peut être appelée pour enrichir la section histoire
    // avec des cartes cliquables qui ouvrent des modales détaillées
}

// Fonction pour ouvrir une modale de fait historique
function openHistoricalModal(fact) {
    const overlay = document.getElementById('historical-modal-overlay');
    const titleElement = document.getElementById('modal-historical-title');
    const contentElement = document.getElementById('modal-historical-content');
    
    if (!overlay || !titleElement || !contentElement) return;
    
    titleElement.textContent = fact.title;
    
    contentElement.innerHTML = `
        <div style="display: grid; gap: 2rem;">
            <div style="text-align: center;">
                <div style="font-size: 4rem; margin-bottom: 1rem;">${fact.emoji}</div>
                <div style="background: rgba(198, 166, 100, 0.1); padding: 0.5rem 1rem; border-radius: 20px; display: inline-block; border: 1px solid rgba(198, 166, 100, 0.3);">
                    <strong style="color: var(--primary-gold);">${fact.period}</strong>
                </div>
            </div>
            
            <div>
                <h4 style="color: var(--primary-gold); margin-bottom: 1rem; font-family: var(--title-font); font-size: 1.3rem;">Description</h4>
                <p style="line-height: 1.6; margin-bottom: 1.5rem; opacity: 0.9;">${fact.description}</p>
                
                <div style="background: rgba(198, 166, 100, 0.1); padding: 1.5rem; border-radius: 12px; border: 1px solid rgba(198, 166, 100, 0.2); margin-bottom: 1.5rem;">
                    <h5 style="color: var(--primary-gold); margin-bottom: 1rem; font-family: var(--title-font);">Contexte Historique</h5>
                    <p style="line-height: 1.6; opacity: 0.9;">${fact.details}</p>
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <h5 style="color: var(--primary-gold); margin-bottom: 1rem; font-family: var(--title-font);">Impact</h5>
                    <p style="line-height: 1.6; opacity: 0.9; font-style: italic;">${fact.impact}</p>
                </div>
                
                <div>
                    <h5 style="color: var(--primary-gold); margin-bottom: 1rem; font-family: var(--title-font);">Personnages Clés</h5>
                    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                        ${fact.keyPersons.map(person => `
                            <span style="background: rgba(198, 166, 100, 0.2); color: var(--primary-gold); padding: 0.4rem 0.8rem; border-radius: 15px; font-size: 0.9rem; border: 1px solid rgba(198, 166, 100, 0.3);">${person}</span>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    overlay.classList.add('active');
}

// Fonction pour fermer la modale historique
function closeHistoricalModal() {
    const overlay = document.getElementById('historical-modal-overlay');
    if (overlay) {
        overlay.classList.remove('active');
    }
}

// Ajouter des événements de clic aux cartes d'histoire pour ouvrir les modales
document.addEventListener('DOMContentLoaded', function() {
    // Ajouter des événements aux cartes existantes si nécessaire
    const historyCards = document.querySelectorAll('.card');
    historyCards.forEach((card, index) => {
        if (index < historicalFacts.length) {
            card.style.cursor = 'pointer';
            card.addEventListener('click', () => {
                openHistoricalModal(historicalFacts[index]);
            });
        }
    });
});
