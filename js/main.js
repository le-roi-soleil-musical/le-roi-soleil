// ===== VARIABLES GLOBALES =====
let currentCharacter = null;
let isLoading = true;

// ===== INITIALISATION =====
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

async function initializeApp() {
    // Démarrer l'écran de chargement
    if (window.dataReady) { try { await window.dataReady; } catch(e){} }
    startLoadingScreen();
    
    // Initialiser les événements
    initializeEventListeners();
    
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
    const tmpl = document.getElementById('character-card-template');
    if (tmpl) {
      const node = tmpl.content.cloneNode(true);
      const root = node.querySelector('.character-card');
      root.dataset.id = character.id;
      const img = node.querySelector('.character-image img');
      if (img) { img.src = character.image; img.alt = character.name; }
      node.querySelector('.character-name').textContent = character.name;
      node.querySelector('.character-title').textContent = character.title || '';
      node.querySelector('.character-description').textContent = character.description || '';
      const skills = node.querySelector('.character-skills');
      if (skills && Array.isArray(character.competences)) {
        character.competences.slice(0,4).forEach(s => { const span = document.createElement('span'); span.className='skill-badge'; span.textContent = s; skills.appendChild(span); });
      }
      const fills = node.querySelectorAll('.stat-fill');
      const stats = character.stats || {};
      if (fills[0]) fills[0].style.width = (stats.pouvoir||0) + '%';
      if (fills[1]) fills[1].style.width = (stats.charisme||0) + '%';
      if (fills[2]) fills[2].style.width = (stats.intelligence||0) + '%';
      if (fills[3]) fills[3].style.width = (stats.strategie||stats.stratégie||0) + '%';
      const btn = node.querySelector('[data-modal-open="character-modal"]');
      if (btn) btn.addEventListener('click', ()=>openCharacterModal(character.id));
      const wrapper = document.createElement('div');
      wrapper.className = "character-card-wrapper";
      wrapper.appendChild(node);
      return wrapper;
    }
    // Fallback to existing HTML builder (minimal)
    const div = document.createElement('div');
    div.textContent = character.name;
    div.addEventListener('click', ()=>openCharacterModal(character.id));
    return div;
}

// ===== MODAL DES PERSONNAGES =====
function openCharacterModal(characterId) {
    const character = getCharacterById(characterId);
    if (!character) return;
    currentCharacter = character;
    const modal = document.getElementById('character-modal');
    const modalBody = document.getElementById('modal-body');
    const tmpl = document.getElementById('character-modal-template');
    if (tmpl) {
        modalBody.innerHTML = "";
        const node = tmpl.content.cloneNode(true);
        // Fill fields
        const header = node.querySelector('.modal-header');
        if (header) {
          const h2 = header.querySelector('.modal-title'); if (h2) h2.textContent = character.name + (character.emoji ? ' ' + character.emoji : '');
          const sub = header.querySelector('.modal-subtitle'); if (sub) sub.textContent = character.title || '';
        }
        const bg = node.querySelector('[data-bg]');
        if (bg) {
          bg.setAttribute('style', "background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('"+character.image+"')");
        }
        const body = node.querySelector('.modal-body');
        if (body) {
          const desc = document.createElement('p'); desc.textContent = character.description || ''; body.appendChild(desc);
        }
        // Close buttons
        node.querySelectorAll('[data-modal-close], .close').forEach(btn => btn.addEventListener('click', closeModal));
        modalBody.appendChild(node);
    } else {
        // Fallback to previous innerHTML method (kept minimal)
        modalBody.innerHTML = '<h2>'+character.name+'</h2><p>'+ (character.description||'') +'</p>';
    }
    modal.style.display = "block";
    if (window.__a11yOpenModal) window.__a11yOpenModal(modal);
    if (window.__a11yOpenModal) window.__a11yOpenModal(modal);
}

function closeModal() {
    const modal = document.getElementById('character-modal');
    if (window.__a11yCloseModal) window.__a11yCloseModal(modal);
    else { modal.style.display = "none"; }
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
    card.className = 'historical-event-card bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden';
    

    
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
    if (window.__a11yCloseModal) window.__a11yCloseModal(modal);
    else { modal.style.display = "none"; }
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
