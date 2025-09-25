# Le Roi Soleil - Version Éditable

## 🎯 **ENFIN UNE VERSION MODIFIABLE !**

Cette version vous permet de **modifier facilement** tous les aspects du site sans compilation !

## 📁 **Structure du Projet**

```
roi-soleil-editable/
├── index.html              # Page principale
├── css/
│   └── style.css           # Styles personnalisés (MODIFIABLE)
├── js/
│   ├── characters.js       # Données des personnages (MODIFIABLE)
│   └── main.js            # Logique principale (MODIFIABLE)
├── images/
│   └── personnages/       # Photos des 24 personnages
├── favicon.ico            # Icône du site
└── README.md             # Ce fichier
```

## ✏️ **MODIFICATIONS FACILES**

### **1. Modifier les Cartes de Personnages**

**Fichier :** `css/style.css` (lignes 150-300)

```css
/* HAUTEUR DES CARTES - MODIFIABLE ICI */
.character-card {
    height: 450px; /* Changer cette valeur */
}

/* HAUTEUR DES IMAGES - MODIFIABLE ICI */
.character-image-container {
    height: 200px; /* Changer cette valeur */
}

/* PADDING DU CONTENU - MODIFIABLE ICI */
.character-content {
    padding: 16px; /* Changer cette valeur */
}
```

### **2. Modifier les Images pour qu'elles Touchent les Bords**

**Fichier :** `css/style.css` (lignes 200-250)

```css
/* SUPPRESSION MARGES/PADDING - MODIFIABLE ICI */
.character-image-container {
    margin: 0 !important;
    padding: 0 !important;
}

.character-image {
    margin: 0 !important;
    padding: 0 !important;
    border-radius: var(--card-radius) var(--card-radius) 0 0;
}
```

### **3. Ajouter/Modifier des Personnages**

**Fichier :** `js/characters.js`

```javascript
// Ajouter un nouveau personnage
{
    id: 25,
    name: "Nouveau Personnage",
    title: "Son Titre",
    description: "Sa description...",
    image: "images/personnages/nouveau.jpg",
    emoji: "🎭",
    type: "Son Type",
    // ... autres propriétés
}
```

### **4. Modifier les Couleurs**

**Fichier :** `css/style.css` (lignes 1-15)

```css
:root {
    --primary-gold: #d4af37;     /* Couleur or principale */
    --primary-amber: #f59e0b;    /* Couleur ambre */
    --primary-orange: #ea580c;   /* Couleur orange */
    --card-radius: 12px;         /* Rayon des coins */
}
```

### **5. Modifier les Textes**

**Fichier :** `index.html`

Recherchez et modifiez directement les textes dans le HTML.

## 🎨 **CORRECTIONS SPÉCIFIQUES APPLIQUÉES**

### ✅ **Images Parfaitement Alignées**
- Suppression de tous les paddings/marges sur les images
- Coins arrondis coordonnés avec les cartes
- Images qui touchent parfaitement les bords

### ✅ **Hauteur Fixe des Cartes**
- Toutes les cartes font exactement 450px de haut
- Descriptions limitées à 3 lignes
- Statistiques alignées en bas

### ✅ **Menu Mobile Intégré**
- Menu hamburger pour la navigation mobile
- Design royal avec dégradé doré
- Fermeture automatique après navigation

### ✅ **24 Personnages Complets**
- Tous les personnages avec leurs vraies données
- Images liées correctement
- Modals détaillées pour chaque personnage

## 🚀 **UTILISATION**

1. **Ouvrez** `index.html` dans votre navigateur
2. **Modifiez** les fichiers CSS/JS selon vos besoins
3. **Rechargez** la page pour voir les changements
4. **Aucune compilation** nécessaire !

## 📸 **IMAGES**

Placez vos images dans `images/personnages/` avec les noms exacts :
- `louis_xiv.jpg`
- `marie_mancini.jpg`
- `madame_montespan.jpg`
- etc.

## 🎯 **AVANTAGES DE CETTE VERSION**

- ✅ **Code source visible** et modifiable
- ✅ **Aucune compilation** nécessaire
- ✅ **Modifications instantanées**
- ✅ **Structure claire** et documentée
- ✅ **Même rendu magnifique** que la version React
- ✅ **Compatible** avec tous les hébergeurs

## 🔧 **DÉPANNAGE**

**Images qui ne s'affichent pas ?**
- Vérifiez les noms de fichiers dans `js/characters.js`
- Assurez-vous que les images sont dans `images/personnages/`

**Cartes pas alignées ?**
- Modifiez la hauteur dans `.character-card` (CSS ligne ~160)

**Menu mobile ne fonctionne pas ?**
- Vérifiez que `js/main.js` est bien chargé

## 💡 **CONSEILS**

- Utilisez les **commentaires CSS** pour vous repérer
- Testez sur **mobile et desktop**
- Sauvegardez avant de modifier
- Les **variables CSS** facilitent les changements globaux

**Maintenant vous pouvez modifier votre site facilement ! 🎉**
