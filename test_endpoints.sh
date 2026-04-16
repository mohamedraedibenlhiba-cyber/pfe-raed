#!/bin/bash

# ============================================================
# TEST DES NOUVEAUX ENDPOINTS
# Remplacer les valeurs par les vôtres
# ============================================================

# Variables
BACKEND_URL="http://localhost:8080"
ENTERPRISE_TOKEN="YOUR_ENTERPRISE_JWT_TOKEN"  # À remplacer
OFFER_ID=1                                      # À remplacer
PAGE=0
SIZE=10

echo "🧪 TESTS DES ENDPOINTS CANDIDATURES AVEC PROFIL"
echo "=================================================="

# 1. TEST: Dashboard Entreprise (Statistiques complètes)
echo ""
echo "1️⃣  GET /api/applications/enterprise/dashboard"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
curl -s -X GET "$BACKEND_URL/api/applications/enterprise/dashboard" \
  -H "Authorization: Bearer $ENTERPRISE_TOKEN" \
  -H "Content-Type: application/json" | jq '.data'

# 2. TEST: Candidatures par offre avec profil (paginé)
echo ""
echo "2️⃣  GET /api/applications/offer/{offerId}/with-details"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
curl -s -X GET "$BACKEND_URL/api/applications/offer/$OFFER_ID/with-details?page=$PAGE&size=$SIZE" \
  -H "Authorization: Bearer $ENTERPRISE_TOKEN" \
  -H "Content-Type: application/json" | jq '.data'

# 3. TEST: Candidatures triées par score IA avec profil
echo ""
echo "3️⃣  GET /api/applications/offer/{offerId}/ranked/with-details"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
curl -s -X GET "$BACKEND_URL/api/applications/offer/$OFFER_ID/ranked/with-details" \
  -H "Authorization: Bearer $ENTERPRISE_TOKEN" \
  -H "Content-Type: application/json" | jq '.data[0]'

# 4. TEST: Détails d'une candidature (si APPLICATION_ID=1)
echo ""
echo "4️⃣  GET /api/applications/{id}/detail"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
curl -s -X GET "$BACKEND_URL/api/applications/1/detail" \
  -H "Authorization: Bearer $ENTERPRISE_TOKEN" \
  -H "Content-Type: application/json" | jq '.data'

echo ""
echo "✅ Tests terminés !"
echo ""
echo "💡 Comment tester :"
echo "1. Remplacez YOUR_ENTERPRISE_JWT_TOKEN par votre vrai token JWT"
echo "2. Remplacez OFFER_ID par l'ID réel d'une offre"
echo "3. Remplacez APPLICATION_ID par l'ID réel d'une candidature"
echo "4. Lancez : bash test_endpoints.sh"
echo ""
echo "📖 Vérifications à faire :"
echo "✓ aiScore doit être un nombre entre 0-100"
echo "✓ Candidate doit avoir fullName, email, skills, yearsExperience, etc."
echo "✓ CV doit avoir fileName, fileUrl"
echo "✓ Status doit être PENDING, AI_ANALYZED, ACCEPTED, ou REJECTED"
echo ""
