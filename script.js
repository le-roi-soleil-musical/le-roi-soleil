// LOADER - Soleil Levant
setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
    document.getElementById('nav').classList.add('visible');
    initHero();
}, 5000);

// Particules dorées pour le loader
const sunContainer = document.querySelector('.sun-container');
for (let i = 0; i < 40; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';

    // Position aléatoire autour du soleil
    const angle = Math.random() * Math.PI * 2;
    const distance = 60 + Math.random() * 40;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    particle.style.left = `calc(50% + ${x}px)`;
    particle.style.top = `calc(50% + ${y}px)`;
    particle.style.setProperty('--drift', `${Math.random() * 100 - 50}px`);
    particle.style.animationDelay = `${Math.random() * 4}s`;
    particle.style.animationDuration = `${3 + Math.random() * 2}s`;

    sunContainer.appendChild(particle);
}

// HERO CARDS CIRCLE
function initHero() {
    const circle = document.getElementById('cardsCircle');
    const numCards = 12;
    const radius = 400;

    for (let i = 0; i < numCards; i++) {
        const angle = (i / numCards) * 2 * Math.PI;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        const card = document.createElement('div');
        card.className = 'floating-card';
        card.style.left = `calc(50% + ${x}px)`;
        card.style.top = `calc(50% + ${y}px)`;
        card.style.transform = 'translate(-50%, -50%)';
        card.style.animationDelay = `${i * 0.2}s`;
        card.innerHTML = `<svg viewBox="0 0 708 952"><image href="Carte_vierge.webp" width="708" height="952"/></svg>`;
        card.onclick = () => document.getElementById('galerie').scrollIntoView({behavior: 'smooth'});
        circle.appendChild(card);
    }
}

// GALLERY
const rectoSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 708 952" width="708" height="952">
<image href="marie_mancini.webp" x="28.32" y="145.32" width="651.36" height="651.36" preserveAspectRatio="xMidYMid slice"/>
<image href="Carte_vierge.webp" x="0" y="0" width="708" height="952"/>
<text x="354" y="118" text-anchor="middle" dominant-baseline="middle" font-family="Cinzel, serif" font-size="34" font-weight="800" fill="#6a4d24">MARIE MANCINI</text>
<text x="86" y="722" text-anchor="start" dominant-baseline="middle" font-family="Cinzel, serif" font-size="22" font-weight="700" fill="#3a2a13">ATT : 450</text>
<text x="215" y="722" text-anchor="start" dominant-baseline="middle" font-family="Cinzel, serif" font-size="22" font-weight="700" fill="#3a2a13">DEF : 600</text>
<text x="401" y="722" text-anchor="start" dominant-baseline="middle" font-family="Cinzel, serif" font-size="22" font-weight="700" fill="#3a2a13">HP : 750</text>
<text x="528" y="722" text-anchor="start" dominant-baseline="middle" font-family="Cinzel, serif" font-size="22" font-weight="700" fill="#3a2a13">MP : 900</text>
<text x="354" y="774" text-anchor="middle" dominant-baseline="middle" font-family="Cinzel, serif" font-size="16" font-weight="600" fill="#3a2a13"><tspan x="354" dy="0">Nièce du cardinal Mazarin, Marie Mancini arrive en France</tspan><tspan x="354" dy="19.2">en 1653. Belle et cultivée, elle devient le premier grand amour</tspan><tspan x="354" dy="19.2">de Louis XIV. Leur romance passionnée se heurte à la raison</tspan><tspan x="354" dy="19.2">d'État : le roi doit épouser l'Infante d'Espagne pour sceller la</tspan><tspan x="354" dy="19.2">paix. Leur séparation en 1659 marque profondément le jeune</tspan><tspan x="354" dy="19.2">roi et inspire de nombreuses œuvres artistiques.</tspan></text>
<text x="354" y="918" text-anchor="middle" dominant-baseline="middle" font-family="Cinzel, serif" font-size="16" font-weight="700" fill="#3a2a13">Classe : Dame de Cœur / Faction : Courtisane</text>
</svg>`;

const versoSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 708 952" width="708" height="952">
<image href="images/cartes/verso/carte_vierge_verso.webp" x="0" y="0" width="708" height="952"/>
<g transform="translate(142 320) rotate(0)" opacity="1"><image href="images/cartes/verso/mancini_c1.webp" x="-40" y="-40" width="80" height="80"/></g>
<g transform="translate(284 320) rotate(0)" opacity="1"><image href="images/cartes/verso/mancini_c2.webp" x="-40" y="-40" width="80" height="80"/></g>
<g transform="translate(425 320) rotate(0)" opacity="1"><image href="images/cartes/verso/mancini_c3.webp" x="-40" y="-40" width="80" height="80"/></g>
<g transform="translate(567 320) rotate(0)" opacity="1"><image href="images/cartes/verso/mancini_c4.webp" x="-40" y="-40" width="80" height="80"/></g>
<g transform="translate(600 600) rotate(0)" opacity="1"><image href="images/cartes/verso/mancini_objet.webp" x="-44" y="-44" width="88" height="88"/></g>
<text x="354" y="120" text-anchor="middle" dominant-baseline="middle" font-family="Cinzel, serif" font-size="34" font-weight="800" fill="#6a4d24">PREMIER AMOUR</text>
<text x="354" y="193" text-anchor="middle" dominant-baseline="middle" font-family="Cinzel, serif" font-size="16" font-weight="800" fill="#3a2a13">COMPÉTENCES</text>
<text x="143" y="252.4" text-anchor="middle" dominant-baseline="middle" font-family="Cinzel, serif" font-size="16" font-weight="600" fill="#3a2a13"><tspan x="143" dy="0">Charme</tspan><tspan x="143" dy="19.2">italien</tspan></text>
<text x="283" y="252.4" text-anchor="middle" dominant-baseline="middle" font-family="Cinzel, serif" font-size="16" font-weight="600" fill="#3a2a13"><tspan x="283" dy="0">Poésie</tspan><tspan x="283" dy="19.2">romantique</tspan></text>
<text x="425" y="252.4" text-anchor="middle" dominant-baseline="middle" font-family="Cinzel, serif" font-size="16" font-weight="600" fill="#3a2a13"><tspan x="425" dy="0">Séduction</tspan><tspan x="425" dy="19.2">fatale</tspan></text>
<text x="566" y="252.4" text-anchor="middle" dominant-baseline="middle" font-family="Cinzel, serif" font-size="16" font-weight="600" fill="#3a2a13"><tspan x="566" dy="0">Mélancolie</tspan></text>
<text x="351" y="407" text-anchor="middle" dominant-baseline="middle" font-family="Cinzel, serif" font-size="16" font-weight="800" fill="#3a2a13">POUVOIR ULTIME</text>
<text x="354" y="441" text-anchor="middle" dominant-baseline="middle" font-family="Cinzel, serif" font-size="15" font-weight="600" fill="#3a2a13"><tspan x="354" dy="0">◈ CŒUR BRISÉ ◈</tspan><tspan x="354" dy="18">"Son amour interdit touche l'âme de tous ceux qui l'entendent"</tspan></text>
<text x="329" y="546" text-anchor="middle" dominant-baseline="middle" font-family="Cinzel, serif" font-size="16" font-weight="800" fill="#3a2a13">CITATION</text>
<text x="315" y="600" text-anchor="middle" dominant-baseline="middle" font-family="Cinzel, serif" font-size="22" font-weight="600" fill="#3a2a13">"Où ça mène quand on s'aime..."</text>
<text x="354" y="721" text-anchor="middle" dominant-baseline="middle" font-family="Cinzel, serif" font-size="22" font-weight="800" fill="#3a2a13">✦ RELATIONS ✦</text>
<text x="149" y="774.6" text-anchor="middle" dominant-baseline="middle" font-family="Cinzel, serif" font-size="16" font-weight="600" fill="#3a2a13"><tspan x="149" dy="0">✨ ALLIÉS ✨</tspan><tspan x="149" dy="19.2"> </tspan><tspan x="149" dy="19.2">Mazarin</tspan><tspan x="149" dy="19.2">Ninon de l'Enclos</tspan><tspan x="149" dy="19.2">Molière</tspan></text>
<text x="354" y="774.6" text-anchor="middle" dominant-baseline="middle" font-family="Cinzel, serif" font-size="16" font-weight="600" fill="#3a2a13"><tspan x="354" dy="0">✠ RIVAUX ✠</tspan><tspan x="354" dy="19.2"> </tspan><tspan x="354" dy="19.2">Anne d'Autriche</tspan><tspan x="354" dy="19.2">Mme de Montespan</tspan></text>
<text x="552" y="774.6" text-anchor="middle" dominant-baseline="middle" font-family="Cinzel, serif" font-size="16" font-weight="600" fill="#3a2a13"><tspan x="552" dy="0">❤ AMOURS ❤</tspan><tspan x="552" dy="19.2"> </tspan><tspan x="552" dy="19.2">Louis XIV</tspan></text>
<text x="354" y="918" text-anchor="middle" dominant-baseline="middle" font-family="Cinzel, serif" font-size="16" font-weight="700" fill="#3a2a13">Classe : Dame de Cœur / Faction : Courtisane</text>
</svg>`;

const cardsGrid = document.getElementById('cardsGrid');
const modal = document.getElementById('cardModal');
const closeModal = document.getElementById('closeModal');
const cardContainer = document.getElementById('cardContainer');
const cardFront = document.getElementById('cardFront');
const cardBack = document.getElementById('cardBack');

for (let i = 0; i < 24; i++) {
    const thumbnail = document.createElement('div');
    thumbnail.className = 'card-thumbnail';
    thumbnail.innerHTML = rectoSVG;
    thumbnail.onclick = () => openCard();
    cardsGrid.appendChild(thumbnail);
}

function openCard() {
    cardFront.innerHTML = rectoSVG;
    cardBack.innerHTML = versoSVG;
    cardContainer.classList.remove('flipped');
    modal.classList.add('active');
}

cardContainer.onclick = (e) => {
    e.stopPropagation();
    cardContainer.classList.toggle('flipped');
};

closeModal.onclick = (e) => {
    e.stopPropagation();
    modal.classList.remove('active');
};

modal.onclick = (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
};

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// CHARACTER MODALS
function openCharacterModal(characterId) {
    const modal = document.getElementById('modal-' + characterId);
    if (modal) {
        modal.classList.add('active');
    }
}

function closeCharacterModal(characterId) {
    const modal = document.getElementById('modal-' + characterId);
    if (modal) {
        modal.classList.remove('active');
    }
}

document.querySelectorAll('.character-modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
        }
    });
});

// HAMBURGER MENU
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fermer le menu quand on clique sur un lien
document.querySelectorAll('#navMenu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// DISTRIBUTION MODAL
const castData = [
    { role: "Louis XIV", actors: ["Matthieu DESROSIERS"], type: "principal" },
    { role: "Marie Mancini", actors: ["Valentine DELASSUS"], type: "principal" },
    { role: "Monsieur, Frère du Roi", actors: ["Emma RAYNAUD"], type: "principal" },
    { role: "Madame de Montespan", actors: ["Chloé RAMBAUD"], type: "principal" },
    { role: "Madame de Maintenon", actors: ["Mila LE NESTOUR"], type: "principal" },
    { role: "Le Duc de Beaufort", actors: ["Alice AUGEREAU"], type: "principal" },
    { role: "Isabelle", actors: ["Inès BERGER"], type: "principal" },
    { role: "Molière / Mazarin", actors: ["Baptiste DESROSIERS"], type: "principal" },
    { role: "Anne d'Autriche", actors: ["Léa DOUADY"], type: "principal" },
    { role: "Ninon de l'Enclos", actors: ["Inga Lee YESKOVA"], type: "principal" },
    { role: "Mademoiselle de Lisieux", actors: ["Eyleen DOUAT"], type: "principal" },
    { role: "La voisin", actors: ["Louise OZIÈS FOURNIER"], type: "C" },
    { role: "L'Enfant", actors: ["Leyton GUILLOT"], type: "P" },
    { role: "Colbert", actors: ["Arthur DEVAUX"], type: "P" },
    { role: "Paul Scarron", actors: ["Chloé ROUMANUS"], type: "P" },
    { role: "Courtisane", actors: ["Chloé WORINGER"], type: "C" },
    { role: "Femme de chambre", actors: ["Elise DEVAUX"], type: "P" },
    { role: "Danseur", actors: ["Madeline QUANTIN", "Manon ALLIAUME", "Lucas LIAUBET", "Juliette PEDRON", "Justine DOUADY", "Colette DISNEY", "Charlotte LESPETS", "Santina GRECH"], type: "Da" },
    { role: "Dame de cour", actors: ["Madeline QUANTIN", "Manon ALLIAUME", "Lucas LIAUBET", "Juliette PEDRON", "Justine DOUADY", "Colette DISNEY", "Charlotte LESPETS"], type: "D" }
];

const distributionModal = document.getElementById('distributionModal');
const openDistributionBtn = document.getElementById('openDistributionModal');
const closeDistributionBtn = document.getElementById('closeDistributionModal');
const castGrid = document.getElementById('castGrid');
const roleFilters = document.querySelectorAll('.role-filter');

// Ouvrir la modale
openDistributionBtn.addEventListener('click', () => {
    distributionModal.classList.add('active');
    displayCast('all');
});

// Fermer la modale
closeDistributionBtn.addEventListener('click', () => {
    distributionModal.classList.remove('active');
});

// Fermer en cliquant en dehors
distributionModal.addEventListener('click', (e) => {
    if (e.target === distributionModal) {
        distributionModal.classList.remove('active');
    }
});

// Filtres de rôles
roleFilters.forEach(filter => {
    filter.addEventListener('click', () => {
        roleFilters.forEach(f => f.classList.remove('active'));
        filter.classList.add('active');
        const roleType = filter.getAttribute('data-role');
        displayCast(roleType);
    });
});

// Afficher la distribution
function displayCast(filterType) {
    castGrid.innerHTML = '';

    const filteredCast = filterType === 'all'
        ? castData
        : castData.filter(cast => cast.type === filterType);

    filteredCast.forEach(cast => {
        const castCard = document.createElement('div');
        castCard.className = 'cast-card';

        const actorsList = cast.actors.map(actor =>
            `<span class="cast-card-actor-name">${actor}</span>`
        ).join('');

        castCard.innerHTML = `
            <div class="cast-card-role">${cast.role}</div>
            <div class="cast-card-actor">${actorsList}</div>
        `;

        castGrid.appendChild(castCard);
    });
}
