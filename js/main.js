// ===== VARIABLES GLOBALES =====
let currentCharacter = null;
let isLoading = true;

// ===== INITIALISATION =====
document.addEventListener('DOMContentLoaded', function() {
    // Reveal on scroll (no lib)
    const io = new IntersectionObserver(es => es.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('is-visible');
    }), {threshold:.15});
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    
    initializeApp();
});

function initializeApp() {
    // Démarrer l'écran de chargement
    startLoadingScreen();
    
    // Initialiser les événements
    initializeEventListeners();
    buildHistoricalFilters();
    const btnFS = document.getElementById('btn-timeline-fullscreen');
    if(btnFS) btnFS.addEventListener('click', openTimelineOverlay);
    const btnClose = document.getElementById('btn-timeline-close');
    if(btnClose) btnClose.addEventListener('click', closeTimelineOverlay);
    
    
    // Générer les cartes de personnages
    generateCharacterCards();
    
    // Générer les événements historiques
    generateHistoricalEvents();
    
    // Terminer le chargement après 3 secondes
    setTimeout(() => {
        finishLoading();
    }, 3000);
}

// ===== ÉCRAN DE CHARGEMENT =====
function startLoadingScreen() {
    const progressBar = document.getElementById('progress-bar');
    let progress = 0;
    
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 100) progress = 100;
        
        progressBar.style.width = progress + '%';
        
        if (progress >= 100) {
            clearInterval(interval);
        }
    }, 200);
}

function finishLoading() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.opacity = '0';
    
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        isLoading = false;
        
        // Animer l'apparition du contenu
        animateContentAppearance();
    }, 500);
}

function animateContentAppearance() {
    const elements = document.querySelectorAll('.character-card');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('fade-in');
        }, index * 100);
    });
}

// ===== GÉNÉRATION DES CARTES DE PERSONNAGES =====
function generateCharacterCards() {
    const grid = document.getElementById('characters-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    characters.forEach(character => {
        const card = createCharacterCard(character);
        grid.appendChild(card);
    });
}

function createCharacterCard(character) {
    const card = document.createElement('div');
    card.className = 'character-card tilt-lg reveal';
    card.onclick = () => openCharacterModal(character.id);
    
    // Générer les badges de compétences (limité à 2 pour l'affichage)
    const skillsHtml = character.competences.slice(0, 2).map(skill => 
        `<span class="skill-badge">${skill}</span>`
    ).join('');
    
    // Ajouter +X si plus de compétences
    const moreSkills = character.competences.length > 2 ? 
        `<span class="skill-badge">+ ${character.competences.length - 2}</span>` : '';
    
    card.innerHTML = `
        <div class="character-image-container">
            <img src="${character.image}" 
                 alt="${character.name}" 
                 class="character-image"
                 onerror="this.src='images/placeholder.jpg'">
            
            <div class="character-type-badge">${character.type}</div>
            <div class="character-emoji-badge">${character.emoji}</div>
        </div>
        
        <div class="character-content">
            <h3 class="character-name">${character.name}</h3>
            <p class="character-title">${character.title}</p>
            <p class="character-description">${character.description}</p>
            
            <div class="character-skills">
                ${skillsHtml}
                ${moreSkills}
            </div>
            
            <div class="character-stats">
                <div class="stat-bar">
                    <span class="stat-label">Pouvoir</span>
                    <div class="stat-progress">
                        <div class="stat-fill" style="width: ${character.stats.pouvoir}%"></div>
                    </div>
                    <span class="stat-value">${character.stats.pouvoir}</span>
                </div>
                <div class="stat-bar">
                    <span class="stat-label">Charisme</span>
                    <div class="stat-progress">
                        <div class="stat-fill" style="width: ${character.stats.charisme}%"></div>
                    </div>
                    <span class="stat-value">${character.stats.charisme}</span>
                </div>
            </div>
        </div>
    `;
    
    return card;
}

// ===== MODAL DES PERSONNAGES =====
function openCharacterModal(characterId) {
    const character = getCharacterById(characterId);
    if (!character) return;
    
    currentCharacter = character;
    const modal = document.getElementById('character-modal');
    const modalBody = document.getElementById('modal-body');
    
    // Générer toutes les compétences
    const allSkillsHtml = character.competences.map(skill => 
        `<span class="skill-badge">${skill}</span>`
    ).join('');
    
    modalBody.innerHTML = `
        <div class="relative">
            <!-- Image de fond avec overlay -->
            <div class="h-64 bg-cover bg-top relative rounded-t-2xl overflow-hidden" 
                 style="background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('${character.image}')">
                
                <!-- Badge emoji -->
                <div class="absolute top-4 right-4 bg-white/90 rounded-full w-16 h-16 flex items-center justify-center text-2xl shadow-lg">
                    ${character.emoji}
                </div>
                
                <!-- Nom et titre -->
                <div class="absolute bottom-4 left-4 text-white">
                    <h2 class="text-3xl font-bold mb-2">${character.name}</h2>
                    <p class="text-xl text-amber-200">${character.title}</p>
                    <div class="flex gap-2 mt-2">
                        <span class="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            ${character.type}
                        </span>
                    </div>
                </div>
            </div>
            
            <!-- Contenu de la modal -->
            <div class="p-6 space-y-6">
                
                <!-- Description -->
                <div class="bg-white/80 rounded-xl p-4">
                    <h3 class="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                        🛡️ Description
                    </h3>
                    <p class="text-gray-700 leading-relaxed">${character.description}</p>
                </div>
                
                <!-- Statistiques -->
                <div class="bg-white/80 rounded-xl p-4">
                    <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        ⚡ Statistiques
                    </h3>
                    <div class="grid grid-cols-2 gap-4">
                        ${Object.entries(character.stats).map(([stat, value]) => `
                            <div class="stat-bar">
                                <span class="stat-label capitalize text-sm font-medium text-gray-600">${stat}</span>
                                <div class="stat-progress mt-1">
                                    <div class="stat-fill bg-gradient-to-r ${getStatColor(stat)}" style="width: ${value}%"></div>
                                </div>
                                <span class="stat-value text-sm font-bold">${value}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <!-- Compétences -->
                <div class="bg-white/80 rounded-xl p-4">
                    <h3 class="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                        🎯 Compétences
                    </h3>
                    <div class="flex flex-wrap gap-2">
                        ${allSkillsHtml}
                    </div>
                </div>
                
                <!-- Pouvoir Spécial -->
                <div class="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-xl p-4 border-2 border-amber-200">
                    <h3 class="text-xl font-bold text-amber-800 mb-3 flex items-center gap-2">
                        ⚡ Pouvoir Spécial
                    </h3>
                    <h4 class="text-lg font-semibold text-amber-700 mb-2">"${character.pouvoirSpecial.nom}"</h4>
                    <p class="text-amber-700 italic">${character.pouvoirSpecial.description}</p>
                </div>
                
                <!-- Citation -->
                <div class="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl p-4 border-2 border-blue-200">
                    <h3 class="text-xl font-bold text-blue-800 mb-3 flex items-center gap-2">
                        💬 Citation
                    </h3>
                    <blockquote class="text-blue-700 italic text-lg">
                        "${character.citation}"
                    </blockquote>
                </div>
                
                <!-- Faiblesse -->
                <div class="bg-gradient-to-r from-red-100 to-pink-100 rounded-xl p-4 border-2 border-red-200">
                    <h3 class="text-xl font-bold text-red-800 mb-3 flex items-center gap-2">
                        ❌ Faiblesse
                    </h3>
                    <p class="text-red-700 font-medium">${character.faiblesse}</p>
                </div>
                
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('character-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    currentCharacter = null;
}

function getStatColor(stat) {
    const colors = {
        pouvoir: 'from-red-400 to-red-600',
        charisme: 'from-pink-400 to-pink-600',
        intelligence: 'from-blue-400 to-blue-600',
        amour: 'from-purple-400 to-purple-600'
    };
    return colors[stat] || 'from-gray-400 to-gray-600';
}

// ===== NAVIGATION =====
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offset = 80; // Hauteur de la navbar
        const elementPosition = element.offsetTop - offset;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
    
    // Fermer le menu mobile si ouvert
    closeMobileMenu();
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    // Fermer le menu mobile si ouvert
    closeMobileMenu();
}

// ===== MENU MOBILE =====
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const hamburger = document.querySelector('.hamburger-icon');
    
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

function closeMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const hamburger = document.querySelector('.hamburger-icon');
    
    menu.classList.remove('active');
    hamburger.classList.remove('active');
}

// ===== ÉVÉNEMENTS =====
function initializeEventListeners() {
    // Délégation de clic pour les personnages des fiches historiques
    document.addEventListener('click', (e) => {
        const chip = e.target.closest('.clickable-person');
        if (chip) {
            const name = chip.getAttribute('data-name');
            if (name) openHistoricalCharacterModal(name);
        }
    });
    // Bouton retour en haut
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    // Fermer la modal en cliquant à l'extérieur
    window.addEventListener('click', (event) => {
        const modal = document.getElementById('character-modal');
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Fermer la modal avec Échap
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
            closeMobileMenu();
        }
    });
    
    // Fermer le menu mobile en cliquant à l'extérieur
    document.addEventListener('click', (event) => {
        const menu = document.getElementById('mobile-menu');
        const button = document.querySelector('.mobile-menu-button');
        
        if (!menu.contains(event.target) && !button.contains(event.target)) {
            closeMobileMenu();
        }
    });
}

// ===== GÉNÉRATION DES ÉVÉNEMENTS HISTORIQUES =====
function generateHistoricalEvents() {
    const grid = document.getElementById('historical-events-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    historicalEvents.forEach(event => {
        const card = createHistoricalEventCard(event);
        grid.appendChild(card);
    });
}

function createHistoricalEventCard(event) {
    const card = document.createElement('div');
    card.className = 'historical-event-card tilt-lg reveal bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden';
    

    
    card.innerHTML = `
        <div class="p-6">
            <!-- Header avec période et emoji -->
            <div class="flex items-center justify-between mb-4">
                <span class="text-3xl">${event.emoji}</span>
                <div class="text-right">
                    <span class="period-pill">
                        ${event.period}
                    </span>
                    <p class="text-sm text-gray-500 mt-1">${event.category}</p>
                </div>
            </div>
            
            <!-- Titre -->
            <h3 class="text-xl font-bold text-gray-800 mb-3">${event.title}</h3>
            
            <!-- Description -->
            <p class="text-gray-600 mb-4 text-sm leading-relaxed">${event.description}</p>
            
            <!-- Impact -->
            <div class="mb-4">
                <h4 class="text-sm font-semibold text-blue-600 mb-2">Impact :</h4>
                <p class="text-sm text-gray-600 italic">${event.impact}</p>
            </div>
            
            <!-- Conséquences -->
            <div class="mb-4">
                <h4 class="text-sm font-semibold text-green-600 mb-2">Conséquences :</h4>
                <ul class="consequences-list">
                    ${event.consequences.map(consequence => `<li>${consequence}</li>`).join('')}
                </ul>
            </div>
            
            <!-- Personnages clés -->
            <div class="mb-4">
                <h4 class="text-sm font-semibold text-amber-600 mb-2">Personnages clés :</h4>
                <div class="flex flex-wrap gap-1">
                    ${event.keyPersons.map(person => `
                        <span class="person-chip clickable-person" data-name="${person}">
                            ${person}
                        </span>
                    `).join('')}
                </div>
            </div>
            

        </div>
    `;
    
    return card;
}

// ===== UTILITAIRES =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===== ANIMATIONS AU SCROLL =====
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observer tous les éléments à animer
    document.querySelectorAll('.character-card').forEach(card => {
        observer.observe(card);
    });
}

// Initialiser les animations au scroll après le chargement
window.addEventListener('load', () => {
    setTimeout(initializeScrollAnimations, 1000);
});

// ===== GESTION DES ERREURS D'IMAGES =====
function handleImageError(img) {
    img.src = 'images/placeholder.jpg';
    img.alt = 'Image non disponible';
}

// ===== RECHERCHE DE PERSONNAGES (optionnel) =====
function searchCharacters(query) {
    const filteredCharacters = characters.filter(character => 
        character.name.toLowerCase().includes(query.toLowerCase()) ||
        character.title.toLowerCase().includes(query.toLowerCase()) ||
        character.description.toLowerCase().includes(query.toLowerCase())
    );
    
    displayFilteredCharacters(filteredCharacters);
}

function displayFilteredCharacters(filteredCharacters) {
    const grid = document.getElementById('characters-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    filteredCharacters.forEach(character => {
        const card = createCharacterCard(character);
        grid.appendChild(card);
    });
    
    // Réanimer les cartes
    setTimeout(() => {
        document.querySelectorAll('.character-card').forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('fade-in');
            }, index * 50);
        });
    }, 100);
}


// ===== MODALES PERSONNAGES HISTORIQUES =====
function openHistoricalCharacterModal(characterName) {
    const character = getHistoricalCharacterByName(characterName);
    if (!character) {
        console.warn(`Personnage historique non trouvé: ${characterName}`);
        return;
    }
    
    const modal = document.getElementById('historical-character-modal');
    const content = document.getElementById('historical-character-content');
    
    content.innerHTML = `
        <div class="historical-character-header" style="background: linear-gradient(135deg, ${character.color}, ${adjustColor(character.color, -20)});">
            <span class="historical-character-emoji">${character.emoji}</span>
            <h2 class="historical-character-name">${character.name}</h2>
            <p class="historical-character-title">${character.title}</p>
            <span class="historical-character-period">${character.period}</span>
        </div>
        
        <div class="historical-character-body">
            <p class="historical-character-description">${character.description}</p>
            
            <div class="historical-character-section">
                <h4>Faits Marquants</h4>
                <ul class="historical-facts-list">
                    ${character.keyFacts.map(fact => `<li>${fact}</li>`).join('')}
                </ul>
            </div>
            
            <div class="historical-role">
                <strong>Rôle Historique :</strong> ${character.historicalRole}
            </div>
            
            <div class="historical-legacy">
                <strong>Héritage :</strong> ${character.legacy}
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeHistoricalCharacterModal() {
    const modal = document.getElementById('historical-character-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Fonction utilitaire pour ajuster la couleur
function adjustColor(color, amount) {
    const usePound = color[0] === '#';
    const col = usePound ? color.slice(1) : color;
    const num = parseInt(col, 16);
    let r = (num >> 16) + amount;
    let g = (num >> 8 & 0x00FF) + amount;
    let b = (num & 0x0000FF) + amount;
    r = r > 255 ? 255 : r < 0 ? 0 : r;
    g = g > 255 ? 255 : g < 0 ? 0 : g;
    b = b > 255 ? 255 : b < 0 ? 0 : b;
    return (usePound ? '#' : '') + (r << 16 | g << 8 | b).toString(16).padStart(6, '0');
}

// Fermer la modale historique en cliquant à l'extérieur
window.addEventListener('click', (event) => {
    const modal = document.getElementById('historical-character-modal');
    if (event.target === modal) {
        closeHistoricalCharacterModal();
    }
});

// Fermer la modale historique avec Échap
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeHistoricalCharacterModal();
    }
});


// ===== Frise chronologique : filtres & plein écran =====
let currentEventFilter = null;

function uniqueEventCategories(){
    const cats = new Set(historicalEvents.map(e => e.category));
    return Array.from(cats);
}

function buildHistoricalFilters(prefix = ''){
    const container = document.getElementById(prefix + 'historical-filters') || document.getElementById(prefix + 'timeline-overlay-filters');
    if(!container) return;
    const cats = ['Tous', ...uniqueEventCategories()];
    container.innerHTML = cats.map(cat => 
        `<button data-cat="${cat}" class="px-3 py-1 rounded-full border border-indigo-200 text-indigo-700 bg-indigo-50 hover:bg-indigo-100 transition ${currentEventFilter===cat?'ring-2 ring-indigo-400':''}">${cat}</button>`
    ).join('');
    container.querySelectorAll('button').forEach(btn=>{
        btn.addEventListener('click', ()=>{
            currentEventFilter = btn.dataset.cat === 'Tous' ? null : btn.dataset.cat;
            generateHistoricalEvents();
            buildHistoricalFilters('timeline-overlay-');
            if(document.getElementById('timeline-overlay') && !document.getElementById('timeline-overlay').classList.contains('hidden')){
                renderTimelineOverlay();
            }
        });
    });
}

// Override generateHistoricalEvents to support filtering
const _generateHistoricalEvents = generateHistoricalEvents;
generateHistoricalEvents = function(){
    const grid = document.getElementById('historical-events-grid');
    if (!grid) return;
    grid.innerHTML = '';
    const events = currentEventFilter ? historicalEvents.filter(e => e.category === currentEventFilter) : historicalEvents;
    events.forEach(event => {
        const card = createHistoricalEventCard(event);
        grid.appendChild(card);
    });
}

// Fullscreen overlay
function openTimelineOverlay(){
    const ov = document.getElementById('timeline-overlay');
    if(!ov) return;
    ov.classList.remove('hidden');
    renderTimelineOverlay();
    window.scrollTo({top:0, behavior:'smooth'});
}
function closeTimelineOverlay(){
    const ov = document.getElementById('timeline-overlay');
    if(!ov) return;
    ov.classList.add('hidden');
}
function renderTimelineOverlay(){
    const grid = document.getElementById('timeline-overlay-grid');
    if(!grid) return;
    grid.innerHTML = '';
    const events = currentEventFilter ? historicalEvents.filter(e => e.category === currentEventFilter) : historicalEvents;
    events.forEach(event => grid.appendChild(createHistoricalEventCard(event)));
}
