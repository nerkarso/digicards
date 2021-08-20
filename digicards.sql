--
-- Drop all tables
--
DROP TABLE IF EXISTS `designs`;
DROP TABLE IF EXISTS `accounts`;

--
-- Create accounts table
--
CREATE TABLE `accounts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(200) NOT NULL,
  `last_name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL UNIQUE,
  `password` varchar(200) NOT NULL,
  `image_url` text,
  `role` int(1) NOT NULL DEFAULT 1, /* 0 = admin, 1 = customer */
  `created` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

--
-- Create designs table
--
CREATE TABLE `designs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uuid` varchar(100) NOT NULL,
  `title` varchar(200) DEFAULT 'Untitled',
  `data` longtext,
  `thumbnail` blob,
  `account_id` int(11),
  `created` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`account_id`) REFERENCES `accounts`(`id`)
    ON UPDATE CASCADE
    ON DELETE SET NULL
);

--
-- Delete all rows
--
DELETE FROM `designs`;
DELETE FROM `accounts`;

--
-- Reset tables increment count
--
ALTER TABLE `accounts` AUTO_INCREMENT = 1;
ALTER TABLE `designs` AUTO_INCREMENT = 1;

--
-- Insert records into accounts table
--
INSERT INTO `accounts`
  (`first_name`, `last_name`, `email`, `password`, `image_url`, `role`)
VALUES
  ('Dan', 'Xie', 'admin@gmail.com', '123', '/img/owner.png', 0),
  ('Hugh', 'Jackman', 'customer@gmail.com', '123', 'https://images.forbes.com/media/people/starcurrency/hugh-jackman_195x195.jpg', 1);
