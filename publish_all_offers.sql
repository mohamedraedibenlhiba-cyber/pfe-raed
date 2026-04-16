-- Script pour publier TOUTES les offres DRAFT
UPDATE job_offers SET status = 'PUBLISHED' WHERE status = 'DRAFT';

-- Vérifier le résultat
SELECT COUNT(*) as total_published FROM job_offers WHERE status = 'PUBLISHED';
SELECT id, title, status FROM job_offers ORDER BY created_at DESC;
