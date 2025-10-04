// LOADER
setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
    document.getElementById('nav').classList.add('visible');
    initHero();
}, 3000);

// Particles for loader
const maskLoader = document.querySelector('.mask-loader');
for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.setProperty('--tx', `${Math.random() * 200 - 100}px`);
    particle.style.setProperty('--ty', `${Math.random() * 200 - 100}px`);
    particle.style.animationDelay = `${Math.random() * 2}s`;
    maskLoader.appendChild(particle);
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
