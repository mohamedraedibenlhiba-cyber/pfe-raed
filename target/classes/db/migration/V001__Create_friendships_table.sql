-- Migration: Create friendships table
-- Date: 2026-04-16

CREATE TABLE IF NOT EXISTS `friendships` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `user1_id` BIGINT NOT NULL,
  `user2_id` BIGINT NOT NULL,
  `status` VARCHAR(20) NOT NULL DEFAULT 'ACCEPTED',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_friendship_normalized` (`user1_id`, `user2_id`),
  CONSTRAINT `fk_friendship_user1` FOREIGN KEY (`user1_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_friendship_user2` FOREIGN KEY (`user2_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  INDEX `idx_user1_id` (`user1_id`),
  INDEX `idx_user2_id` (`user2_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Verify table was created
SELECT 'Friendships table created successfully' as status;
DESCRIBE friendships;
