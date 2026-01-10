# Rapport de Migration WordPress → Webflow

**Date :** 9 janvier 2026
**Site actuel (WordPress) :** https://mobility-work.com/
**Site en cours (Webflow) :** https://staging-mobility-work.webflow.io/

---

## Résumé Exécutif

Le site Webflow actuel couvre bien la partie **commerciale/produit** mais il manque :
- **Tout le contenu CMS** (blog, podcasts, interviews, ressources)
- **Les pages légales**
- **Les pages support/documentation** (131 pages sur WordPress)
- **2 langues** (ES et DE présentes sur WordPress, absentes sur Webflow)

---

## 1. Comparaison des Langues

| Langue | WordPress | Webflow |
|--------|-----------|---------|
| Français (FR) | ✅ | ✅ |
| Anglais (EN) | ✅ | ✅ |
| Espagnol (ES) | ✅ | ❌ |
| Allemand (DE) | ✅ | ❌ |

**Action requise :** Décider si ES et DE seront migrés ou abandonnés.

---

## 2. Pages Statiques

### Présentes sur Webflow ✅
- Homepage (FR/EN)
- Personas (8 pages × 2 langues = 16 pages)
- Produits (9 pages × 2 langues = 18 pages)
- Solutions (6 pages × 2 langues = 12 pages)
- Industries (8 pages × 2 langues = 16 pages)
- Tarifs
- Contact

### Manquantes sur Webflow ❌

#### Pages Légales
- [ ] Conditions d'utilisation / Terms of Service
- [ ] Politique de confidentialité / Privacy Policy
- [ ] Mentions légales
- [ ] Sécurité & Conformité (Security Compliance Privacy)

#### Pages À Propos
- [ ] Qui sommes-nous / Team & Values
- [ ] Équipe / Team page

#### Pages Ressources
- [ ] Hub fournisseurs (FR/EN/ES/DE sur WordPress)
- [ ] Livres blancs (2 disponibles sur WordPress)
- [ ] Webinaires (page 404 sur WordPress - peut-être obsolète)

---

## 3. Contenu CMS Manquant (PRIORITAIRE)

C'est le gros du travail. WordPress a un **blog très fourni** qui n'existe pas du tout sur Webflow.

### 3.1 Blog / Articles

**Volume estimé :** ~150 articles (15 pages × ~10 articles)

**Catégories de contenu :**
| Catégorie | Description |
|-----------|-------------|
| GMAO | Articles sur la gestion de maintenance assistée par ordinateur |
| Maintenance industrielle | Guides et bonnes pratiques |
| Maintenance préventive | Stratégies et méthodologies |
| Industrie 4.0 et IoT | Transformation digitale, connectivité |
| Agroalimentaire | Contenu sectoriel |
| Cosmétiques | Contenu sectoriel |
| Pharmaceutique et santé | Contenu sectoriel |
| News / Actualités | Annonces et nouveautés |
| Mises à jour application | Release notes, nouvelles fonctionnalités |

### 3.2 Interviews / Témoignages Clients

**Volume :** ~40-50 interviews (10 par page × ~5 pages)

**Exemples de clients interviewés :**
- Danone (Opole, Le Molay-Littry)
- L'Oréal
- APTIV
- Unisto
- Pazzi
- Et bien d'autres dans l'industrie, l'éducation, le traitement des eaux...

**Format :** Articles longs (3-7 min de lecture), type case studies

### 3.3 Podcasts

**Volume :** 5 épisodes

**Thèmes couverts :**
- IoT et maintenance (avec RS Components, Wiboot)
- Reprise post-Covid
- Maintenance en période de crise sanitaire
- Introduction à la GMAO

### 3.4 Livres Blancs

**Volume :** 2 documents

1. **Norme 21 CFR Part 11** - Conformité FDA et GMAO
2. **Écologie industrielle** - Applications concrètes

---

## 4. Pages Support / Documentation

**Volume sur WordPress :** 131 pages

C'est une base de connaissances complète couvrant :

| Section | Contenu |
|---------|---------|
| Gestion équipements | Fiches équipement, arborescence, duplication |
| QR Codes & Géolocalisation | Gestion actifs, localisation machines |
| Documentation technique | Ajout docs, documentation constructeur |
| Maintenance | Plans préventifs, ordres de travail, checklists, calendrier |
| Gestion administrative | Compteurs, pièces détachées, prestataires, fournisseurs |
| Configuration | Paramétrage, multilinguisme, exports Excel/PDF, imports |
| Analytique | Tableaux de bord, rapports |

**Action requise :** Décider si cette documentation sera migrée sur Webflow ou hébergée ailleurs (Notion, GitBook, etc.)

---

## 5. Structure CMS Recommandée pour Webflow

Si vous migrez le contenu, voici les collections CMS à créer :

```
Collections CMS Webflow
├── Blog Posts
│   ├── Champs : titre, slug, contenu, catégorie, auteur, date, image
│   └── Catégories (référence) : GMAO, IoT, Maintenance, Secteurs...
├── Catégories Blog
│   └── Champs : nom, slug, description
├── Interviews / Case Studies
│   ├── Champs : titre, client, secteur, contenu, durée lecture, image
│   └── Lien avec Industries (référence)
├── Podcasts
│   └── Champs : titre, description, lien audio/vidéo, date, durée
├── Livres Blancs
│   └── Champs : titre, description, fichier PDF, image couverture
└── (Optionnel) Documentation Support
    └── Champs : titre, catégorie, contenu, ordre
```

---

## 6. Priorités de Migration Suggérées

### Phase 1 - Essentiel (Avant mise en prod)
1. [ ] Pages légales (obligatoire RGPD)
2. [ ] Page À propos / Équipe
3. [ ] Structure CMS Blog (même vide)

### Phase 2 - Contenu Prioritaire
4. [ ] Migration des interviews/témoignages clients (valeur commerciale haute)
5. [ ] Migration des articles blog les plus performants (SEO)
6. [ ] Livres blancs (lead generation)

### Phase 3 - Contenu Secondaire
7. [ ] Podcasts
8. [ ] Articles blog restants
9. [ ] Actualités / Mises à jour

### Phase 4 - À évaluer
10. [ ] Documentation support (peut rester externe)
11. [ ] Langues ES/DE (si marché pertinent)

---

## 7. Points d'Attention SEO

- **Redirections 301** : Toutes les anciennes URLs WordPress doivent rediriger vers les nouvelles URLs Webflow
- **URL Structure** : WordPress utilise `/fr/`, `/es/`, `/de/` - Webflow utilise `/en/` et racine pour FR
- **Canonical URLs** : Attention aux duplicatas FR/EN
- **Sitemap** : Regénérer après migration complète

---

## 8. Prochaines Étapes

1. **Valider le scope** : Quelles langues ? Quel contenu migrer ?
2. **Créer les collections CMS** sur Webflow
3. **Exporter le contenu WordPress** (via WP All Export ou API)
4. **Importer dans Webflow** (via CSV ou API)
5. **Créer les pages légales**
6. **Tester les redirections**
7. **Go live**

---

*Rapport généré automatiquement - À mettre à jour au fil de la migration*
