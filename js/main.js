// ===== VARIABLES GLOBALES =====
let currentCharacter = null;
let isLoading = true;

// ===== INITIALISATION =====
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Démarrer l'écran de chargement
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
    const card = document.createElement('div');
    card.className = 'character-card';
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
            <div class="h-64 bg-cover bg-center relative rounded-t-2xl overflow-hidden" 
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
    
    // Couleur selon l'importance
    const importanceColors = {
        'Majeure': 'bg-red-500',
        'Légendaire': 'bg-amber-500'
    };
    
    const importanceColor = importanceColors[event.importance] || 'bg-blue-500';
    
    card.innerHTML = `
        <div class="p-6">
            <!-- Header avec période et emoji -->
            <div class="flex items-center justify-between mb-4">
                <span class="text-3xl">${event.emoji}</span>
                <div class="text-right">
                    <span class="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
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
                <p class="text-sm text-blue-700 italic">${event.impact}</p>
            </div>
            
            <!-- Conséquences -->
            <div class="mb-4">
                <h4 class="text-sm font-semibold text-green-600 mb-2">Conséquences :</h4>
                <ul class="text-sm text-green-700">
                    ${event.consequences.map(consequence => `<li>• ${consequence}</li>`).join('')}
                </ul>
            </div>
            
            <!-- Personnages clés -->
            <div class="mb-4">
                <h4 class="text-sm font-semibold text-amber-600 mb-2">Personnages clés :</h4>
                <div class="flex flex-wrap gap-1">
                    ${event.keyPersons.map(person => `
                        <span class="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-medium">
                            ${person}
                        </span>
                    `).join('')}
                </div>
            </div>
            
            <!-- Badge d'importance -->
            <div class="flex justify-end">
                <span class="${importanceColor} text-white px-3 py-1 rounded-full text-xs font-bold">
                    ${event.importance}
                </span>
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
