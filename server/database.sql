-- Active: 1711641097871@@localhost@3306@protojam1
-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Jeu 26 Octobre 2017 à 13:53
-- Version du serveur :  5.7.19-0ubuntu0.16.04.1
-- Version de PHP :  7.0.22-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `simple-mvc`
--

-- --------------------------------------------------------

--
-- Structure de la table `item`
--

CREATE TABLE `item` (
  `id` int(11) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `item`
--

INSERT INTO `item` (`id`, `title`) VALUES
(1, 'Stuff'),
(2, 'Doodads');

-- Index pour la table `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour la table `item`
--
ALTER TABLE `item`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


CREATE TABLE tree (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `picture` VARCHAR(255) NOT NULL
);

INSERT INTO tree (`name`, `picture`) VALUES
('Saule saltimbanque', 'Placeholder 1'),
('Chêne cosmique', 'Placeholder 2'),
('Erable enigmatique', 'Placeholder 3'),
('Pin paradoxal', 'Placeholder 4'),
('Sylvain Duriff', 'Placeholder 5');


CREATE TABLE summary (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  text TEXT NOT NULL,
  tree_id INT NOT NULL,
  FOREIGN KEY (tree_id)
  REFERENCES tree(id)
); 

CREATE TABLE questions (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  question TEXT NOT NULL,
  reponse1 TEXT NOT NULL, 
  reponse2 TEXT NOT NULL, 
  reponse3 TEXT NOT NULL, 
  reponse4 TEXT NOT NULL 
); 

INSERT INTO summary (`text`, `tree_id`) VALUES
('Vous êtes le Saule Saltimbanque ! Vous avez une nature mélancolique mais avec une touche de fantaisie, et vous êtes toujours prêt à danser avec les éléments.', 1),
('Vous êtes le Chêne Comique ! Solide et majestueux à l\'extérieur, mais avec un cœur de comédien et une passion pour l\'absurde qui ne connaît pas de limites. ', 2),
('Vous êtes l\'Érable Énigmatique ! Mystérieux et plein de surprises, vous avez une approche ludique de la vie et un sens de l\'humour aussi coloré que vos feuilles en automne ! ', 3),
('Vous êtes le Pin Paradoxal ! Vous avez un mélange unique de robustesse et d\'excentricité, et votre esprit créatif apporte une touche de magie à chaque saison.', 4),
('Vous êtes Sylvain Duriff ! Le seul, l\'unique ! Orianna ! Le Christ Cosmique !', 5);

INSERT INTO questions (`question`, `reponse1`, `reponse2`, `reponse3`, `reponse4`) VALUES
('Quelle est votre réaction face à une tempête ?', 'Je me laisse emporter par le vent en dansant la valse avec les feuilles.', 'Je demande aux oiseaux de m\'emmener en sécurité dans leur nid.', 'Je défie le tonnerre à un concours de claquettes.', 'Je compose une chanson de rock avec le bruit du vent comme fond sonore.'),
('Quelle serait votre activité idéale un jour de pluie ?', 'Faire des bulles de savon géantes et regarder les gouttes de pluie les éclater.', 'Organiser un concert de grenouilles avec des instruments de cuisine.', 'Jouer aux échecs avec les vers de terre pour décider qui contrôle le prochain rayon de soleil. ', 'Construire un bateau en feuilles pour naviguer sur les flaques.'),
('Quelle est votre opinion sur les écureuils ?', 'Ils sont mes compagnons de jeu préférés, surtout quand ils cachent mes clés.', 'J\'admire leur agilité et leur capacité à jongler avec des noix.', 'Je les invite à mes soirées pyjama pour qu\'ils racontent des histoires de la forêt.', 'Je les persuade de former une équipe de football acrobatique pour le prochain tournoi inter-espèces.'),
('Quel serait votre cri de guerre s\'il fallait défendre votre territoire ?', '"Feuilles en avant, branchés en arrière, nous ne reculerons pas !"', '"Par la racine de Groot, je vous défie, intrus !"', 'En avant, mes branches ! À l\'attaque !"', 'Avec la force de la chlorophylle, nous repousserons l\'envahisseur !"'),
('Quelle est votre réplique préférée en cas de sécheresse ?', '"Je vais faire la danse de la pluie jusqu\'à ce que même les nuages se fatiguent !"', '"Quelqu\'un a un abonnement premium à la météo ? Nous avons besoin d\'un arrosage express !"', '"C\'est l\'occasion parfaite pour une sieste à l\'ombre, n\'est-ce pas ?', 'Je vais distribuer des glaçons à tous les insectes en détresse, c\'est ma contribution à la lutte contre la canicule !"'),
('Quelle est votre réaction face à une invasion de papillons ?', 'Je les accueille avec une fête à thème "Papillon Disco" et je danse avec eux toute la nuit.', ' J\'essaie de négocier un accord de paix en échange de quelques cookies à la lavande. ', 'Je les convaincs de former une troupe de ballet aérien pour divertir les autres arbres.', 'e prépare des mini-capes pour qu\'ils se transforment en papillons super-héros.'),
('Quel serait votre passe-temps favori en automne ?', 'Rassembler toutes les feuilles tombées pour créer un tapis de couleurs et sauter dedans comme un enfant.', 'Organiser des soirées cinéma en plein air pour regarder des films d\'horreur avec les chauves-souris.', 'Jouer à cache-cache avec les écureuils et les champignons sous la lune.', 'Organiser une compétition de sculptures de citrouilles avec les sorcières du coin. '),
('Quelle est votre opinion sur les vents violents ?', 'Je les prends comme une opportunité de faire du kite-surf sur les rafales. ', 'J\'essaie de les convaincre de faire une pause pour que je puisse terminer mon livre tranquillement.', 'Je les défie à une bataille de blagues pour voir qui est le plus venté. ', 'Je les invite à une danse endiablée pour créer un ballet éolien spectaculaire.'),
('Quel serait votre message à un arbre nouvellement planté ?', '"Bienvenue dans le club des êtres éthérés ! Prépare-toi à une vie remplie d\'aventures folles !" ', '"Ne t\'inquiète pas, les premiers siècles sont les plus difficiles. Accroche-toi, ça va devenir racinéalement génial !"', ' "Fais attention aux oiseaux farceurs, ils ont tendance à se moquer des jeunes pousses comme toi. Mais ne te laisse pas détourner de ton chemin vers la grandeur arboricole !"', '"N\'aie pas peur de grandir et d\'étendre tes branches vers le ciel. Tu es destiné à de grandes choses, petit arbre !"'),
('Quelle serait votre réaction si vous étiez choisi comme arbre de Noël ?', '"Je vais me parer de guirlandes et de boules avec autant de grâce qu\'un paon en parade !" ', '"Je demanderai aux lutins de me raconter des blagues pour égayer l\'atmosphère festive."', '"Je vais inviter tous les animaux de la forêt à une fête sous mes branches pour célébrer ensemble." ', '"Je vais distribuer des cadeaux de bien-être et des souhaits de paix à tous ceux qui passent près de moi."');
