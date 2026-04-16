# 🧪 GUIDE COMPLET DE TEST DES NOUVEAUX ENDPOINTS

## 📋 ENDPOINTS CRÉÉS

### 1️⃣ **Tableau de Bord Entreprise** ⭐ NOUVEAU
```
GET /api/applications/enterprise/dashboard
Authentification: ROLE_ENTERPRISE
Retourne: Statistiques complètes de l'entreprise
```

**Réponse attendue:**
```json
{
  "totalOffers": 5,
  "activeOffers": 4,
  "draftOffers": 1,
  "totalApplications": 42,
  "pendingApplications": 28,
  "rejectedApplications": 5,
  "averageScore": 72.5,
  "offerStats": [
    {
      "offerId": 1,
      "offertitle": "Senior Backend Developer",
      "applicationsCount": 15,
      "pendingCount": 10,
      "acceptedCount": 3,
      "rejectedCount": 2,
      "averageScore": 78.2,
      "topCandidate": {
        "id": 123,
        "fullName": "Ahmed Ben",
        "email": "ahmed@example.com",
        "skills": "Java, Spring, Kubernetes",
        "yearsExperience": 5,
        "aiScore": 92.0
      }
    }
  ]
}
```

---

### 2️⃣ **Candidatures par Offre avec Profil Complet** ⭐ NOUVEAU
```
GET /api/applications/offer/{offerId}/with-details?page=0&size=20
Authentification: ROLE_ENTERPRISE
Retourne: Liste paginée des candidatures avec profil du candidat
```

**Réponse attendue:**
```json
{
  "content": [
    {
      "id": 1,
      "applicationId": 1,
      "candidate": {
        "id": 123,
        "fullName": "Ahmed Ben",
        "email": "ahmed@example.com",
        "phoneNumber": "+33612345678",
        "skills": "Java,Spring,Kubernetes,Docker",
        "yearsExperience": 5,
        "headline": "Senior Backend Developer",
        "summary": "10+ years in software development",
        "city": "Paris",
        "country": "France",
        "linkedinUrl": "https://linkedin.com/in/ahmedben",
        "githubUrl": "https://github.com/ahmedben",
        "profilePicture": "https://..."
      },
      "cv": {
        "id": 456,
        "fileName": "cv_ahmed_2024.pdf",
        "fileUrl": "https://...",
        "fileSize": "2.5MB",
        "isDefault": true
      },
      "jobOffer": {
        "id": 1,
        "title": "Senior Backend Developer",
        "description": "...",
        "location": "Paris",
        "remote": false,
        "contractType": "CDI",
        "salaryMin": 50000,
        "salaryMax": 70000,
        "requiredSkills": "Java,Spring,Kubernetes",
        "experienceLevel": "SENIOR",
        "experienceRequired": 5
      },
      "status": "AI_ANALYZED",
      "aiScore": 92.5,
      "aiSummary": "Candidat : Ahmed Ben | Compétences : Java,Spring,Kubernetes",
      "aiFeedback": "🎯 Profil EXCELLENT - Très forte adéquation...",
      "recruiterNotes": "Excellent profil, à convoquer",
      "recruiterRating": 5,
      "appliedAt": "2026-04-10T10:15:00",
      "updatedAt": "2026-04-10T10:20:00"
    }
  ],
  "pageable": {"pageNumber": 0, "pageSize": 20},
  "totalElements": 15,
  "totalPages": 1
}
```

---

### 3️⃣ **Candidatures Triées par Score IA** ⭐ AMÉLIORÉ
```
GET /api/applications/offer/{offerId}/ranked/with-details
Authentification: ROLE_ENTERPRISE
Retourne: Liste des candidatures triées par score IA (meilleur d'abord)
```

**Réponse:** Même format que #2, mais triée par `aiScore DESC`

---

### 4️⃣ **Détails Candidature Complète** ⭐ NOUVEAU
```
GET /api/applications/{id}/detail
Authentification: ROLE_ENTERPRISE
Retourne: Un seul objet avec tous les détails
```

**Réponse:** Même format que dans #2, pour une seule candidature

---

## 🧪 TESTS PRATIQUES

### **Via Swagger UI**

1. Allez sur http://localhost:8080/swagger-ui.html
2. Cherchez **"Candidatures"**
3. Cliquez sur chaque endpoint et testez :

#### Test #1 - Dashboard
```
Cliquez sur: GET /api/applications/enterprise/dashboard
- Pas de paramètres
- Appuyez sur "Try it out"
- Response code doit être 200
- Vérifiez que totalOffers > 0 et offerStats n'est pas vide
```

#### Test #2 - Candidatures par Offre
```
Cliquez sur: GET /api/applications/offer/{offerId}/with-details
- offerId = 1 (ou un vrai ID)
- page = 0
- size = 20
- Appuyez sur "Try it out"
- Vérifiez que: candidate.fullName, cv.fileName, aiScore sont présents
```

#### Test #3 - Triées par Score
```
Cliquez sur: GET /api/applications/offer/{offerId}/ranked/with-details
- offerId = 1
- Appuyez sur "Try it out"
- Vérifiez que le premier candidat a le score IA le plus élevé
- Feedback IA doit avoir des émojis (🎯, ✅, 👍, ⚠️, ⛔)
```

#### Test #4 - Détail Candidature
```
Cliquez sur: GET /api/applications/{id}/detail
- id = 1 (ou un vrai ID)
- Appuyez sur "Try it out"
- Vérifiez que candidate.yearsExperience, skills sont remplis
```

---

### **Via cURL**

```bash
# 1. Obtenez votre JWT token d'abord
JWT_TOKEN=$(curl -s -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"enterprise@example.com","password":"password123"}' | jq -r '.data.token')

echo "Token: $JWT_TOKEN"

# 2. Test Dashboard
curl -s -X GET http://localhost:8080/api/applications/enterprise/dashboard \
  -H "Authorization: Bearer $JWT_TOKEN" | jq '.data'

# 3. Test Candidatures avec Profil
curl -s -X GET "http://localhost:8080/api/applications/offer/1/with-details?page=0&size=20" \
  -H "Authorization: Bearer $JWT_TOKEN" | jq '.data.content[0]'

# 4. Test Triées par Score
curl -s -X GET "http://localhost:8080/api/applications/offer/1/ranked/with-details" \
  -H "Authorization: Bearer $JWT_TOKEN" | jq '.data[0] | {id, candidate: .candidate.fullName, aiScore, aiFeedback}'

# 5. Test Détail
curl -s -X GET http://localhost:8080/api/applications/1/detail \
  -H "Authorization: Bearer $JWT_TOKEN" | jq '.data'
```

---

## 🎯 CHECKLIST DE VÉRIFICATION

Pour chaque endpoint, vérifiez que:

### ✅ **Score IA**
- [ ] `aiScore` est un nombre entre 0-100
- [ ] Feedback commence par un emoji (🎯, ✅, 👍, ⚠️, ⛔)
- [ ] Score personnel > score général = bon algorithme

### ✅ **Profil Candidat complet**
- [ ] `candidate.fullName` est rempli
- [ ] `candidate.skills` contient une liste de compétences
- [ ] `candidate.yearsExperience` est un nombre
- [ ] `candidate.email` et `candidate.phoneNumber` sont présents
- [ ] `candidate.city` et `candidate.country` sont remplis

### ✅ **CV**
- [ ] Si CV uploadé: `cv.fileName` et `cv.fileUrl` présents
- [ ] Si pas de CV: `cv` est `null`

### ✅ **Statut Candidature**
- [ ] `status` est l'une des valeurs : PENDING, AI_ANALYZED, ACCEPTED, REJECTED

### ✅ **Offre d'emploi**
- [ ] `jobOffer.title` est rempli
- [ ] `jobOffer.requiredSkills` correspond à ce qui a été créé

### ✅ **Tri par Score**
- [ ] Premier candidat a le `aiScore` le plus élevé
- [ ] Scores vont du plus haut au plus bas

---

## 🐛 DÉPANNAGE

### ❌ Erreur 401 Unauthorized
```
→ Votre JWT token n'est pas valide
→ Reconnectez-vous avec une entreprise
→ Utilisez le nouveau token
```

### ❌ Erreur 404 Not Found
```
→ L'offre ou candidature n'existe pas
→ Vérifiez les IDs
→ Utilisez une offre/candidature réelle
```

### ❌ `aiScore` est null
```
→ L'analyse IA n'a pas fini
→ Attendez 2-3 secondes
→ Rechargez
```

### ❌ `candidate` est incomplet
```
→ Les données du candidat ne sont pas toutes remplies
→ C'est normal, les champs optionnels peuvent être vides
→ Vérifiez au moins fullName, email, skills
```

---

## 📊 RÉSUMÉ DES AMÉLIORATIONS

| Aspect | Avant | Après |
|--------|-------|-------|
| **Scoring IA** | Basique (skills + 10 pts) | Intelligent (40% skills, 15% tech, 15% level, 15% years, 10% location, 5% contract) |
| **Vue Entreprise** | Aucune | Dashboard complet avec stats par offre |
| **Profil Candidat** | Caché | Visible dans chaque candidature |
| **CV** | Caché | Affichage complet avec URL |
| **Feedback IA** | Basique | Détaillé avec émojis et contexte |
| **Tri Candidats** | Par score | Par score AVEC profil complet |

---

## 💡 PROCHAINES ÉTAPES

1. **Tester tous les endpoints** dans Swagger
2. **Vérifier les scores IA** - sont-ils réalistes ?
3. **Améliorer le feedback** - ajouter du contexte personnalisé
4. **Frontend Angular** - créer les pages pour afficher ces données
5. **Notifications** - notifier l'entreprise quand nouveaux candidats arrivent

Bonne chance! 🚀
