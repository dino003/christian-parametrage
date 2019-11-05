-- --------------------------------------------------------
-- Hôte :                        localhost
-- Version du serveur:           5.7.24 - MySQL Community Server (GPL)
-- SE du serveur:                Win32
-- HeidiSQL Version:             9.5.0.5337
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Listage de la structure de la base pour param
CREATE DATABASE IF NOT EXISTS `param` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `param`;

-- Listage de la structure de la table param. coords
CREATE TABLE IF NOT EXISTS `coords` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `taux_horraire` smallint(4) unsigned NOT NULL,
  `montant_heure_100` smallint(7) NOT NULL,
  `montant_heure_115` smallint(7) NOT NULL,
  `montant_heure_175` smallint(7) NOT NULL,
  `montant_heure_200` smallint(7) NOT NULL,
  `montant_heure_150` smallint(1) NOT NULL DEFAULT '0',
  `avantage_acquis` smallint(5) NOT NULL DEFAULT '0',
  `prime_precarite` smallint(5) NOT NULL DEFAULT '0',
  `panier_salissure_mouille` smallint(5) NOT NULL DEFAULT '1038',
  `indemnite_transport` smallint(5) NOT NULL DEFAULT '1100',
  `brut_imposable` smallint(5) NOT NULL DEFAULT '0',
  `tranche_id` smallint(2) unsigned NOT NULL,
  `categorie` smallint(2) unsigned NOT NULL,
  `brut_total` smallint(5) NOT NULL DEFAULT '0',
  `provis_conge_gratis` smallint(5) NOT NULL DEFAULT '0',
  `frais_bureau` smallint(5) NOT NULL DEFAULT '0',
  `frais_centre_medical` smallint(5) NOT NULL DEFAULT '0',
  `tva_frais_fonctionnement` smallint(5) NOT NULL DEFAULT '0',
  `prestation_familliales` smallint(5) NOT NULL DEFAULT '186',
  `accident_travail` smallint(5) NOT NULL DEFAULT '129',
  `c_r_t_c_i` smallint(5) NOT NULL DEFAULT '0',
  `impot_sal` smallint(5) NOT NULL DEFAULT '0',
  `taxe_fpc` smallint(5) NOT NULL DEFAULT '0',
  `taxe_apprenti` smallint(5) NOT NULL DEFAULT '0',
  `total_montant_heure` smallint(5) NOT NULL DEFAULT '0',
  `total_cout` smallint(5) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `tranche` (`tranche_id`),
  CONSTRAINT `tranche` FOREIGN KEY (`tranche_id`) REFERENCES `tranches` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=latin1;

-- Listage des données de la table param.coords : ~30 rows (environ)
DELETE FROM `coords`;
/*!40000 ALTER TABLE `coords` DISABLE KEYS */;
INSERT INTO `coords` (`id`, `taux_horraire`, `montant_heure_100`, `montant_heure_115`, `montant_heure_175`, `montant_heure_200`, `montant_heure_150`, `avantage_acquis`, `prime_precarite`, `panier_salissure_mouille`, `indemnite_transport`, `brut_imposable`, `tranche_id`, `categorie`, `brut_total`, `provis_conge_gratis`, `frais_bureau`, `frais_centre_medical`, `tva_frais_fonctionnement`, `prestation_familliales`, `accident_travail`, `c_r_t_c_i`, `impot_sal`, `taxe_fpc`, `taxe_apprenti`, `total_montant_heure`, `total_cout`) VALUES
	(1, 371, 2968, 1707, 0, 0, 0, 191, 142, 1038, 1100, 5008, 1, 2, 7146, 1489, 1295, 432, 311, 186, 129, 500, 78, 78, 26, 4675, 11669),
	(2, 382, 3056, 1757, 0, 0, 0, 207, 146, 1038, 1100, 5166, 1, 3, 7304, 1522, 1324, 441, 318, 186, 129, 515, 80, 80, 27, 4813, 11926),
	(3, 394, 3152, 1812, 0, 0, 0, 227, 151, 1038, 1100, 5342, 1, 4, 7480, 1558, 1356, 452, 325, 186, 129, 531, 83, 83, 28, 4964, 12211),
	(4, 411, 3288, 1891, 0, 0, 0, 251, 157, 1038, 1100, 5587, 1, 5, 7725, 1609, 1400, 467, 336, 186, 129, 554, 86, 86, 29, 5179, 12608),
	(5, 422, 3536, 2033, 0, 0, 0, 274, 169, 1038, 1100, 6012, 1, 6, 8150, 1698, 1477, 492, 355, 186, 129, 594, 93, 93, 31, 5569, 13297),
	(6, 677, 5416, 3114, 0, 0, 0, 419, 259, 1038, 1100, 9208, 1, 7, 11346, 2364, 2056, 685, 494, 186, 129, 891, 139, 139, 46, 8530, 18476),
	(7, 371, 2968, 0, 2597, 0, 0, 819, 142, 1038, 1100, 6526, 2, 2, 8664, 1805, 1570, 523, 377, 186, 129, 641, 100, 100, 33, 5565, 14129),
	(8, 382, 3056, 0, 2674, 0, 0, 888, 146, 1038, 1100, 6764, 2, 3, 8902, 1855, 1614, 538, 387, 186, 129, 664, 103, 103, 34, 5730, 14515),
	(9, 394, 3152, 0, 2758, 0, 0, 972, 151, 1038, 1100, 7033, 2, 4, 9171, 1911, 1662, 554, 399, 186, 129, 689, 107, 107, 36, 5910, 14951),
	(10, 411, 3288, 0, 2877, 0, 0, 1077, 157, 1038, 1100, 7399, 2, 5, 9537, 1987, 1729, 576, 415, 186, 129, 723, 113, 113, 38, 6165, 15544),
	(11, 442, 3536, 0, 3094, 0, 0, 1173, 169, 1038, 1100, 7972, 2, 6, 10110, 2106, 1832, 611, 440, 186, 129, 776, 121, 121, 40, 6630, 16473),
	(12, 677, 5416, 0, 4739, 0, 0, 1797, 259, 1038, 1100, 12211, 2, 7, 14349, 2989, 2601, 867, 624, 186, 129, 1170, 182, 182, 61, 10155, 23341),
	(13, 371, 2968, 0, 2597, 0, 0, 1570, 142, 1038, 1100, 7277, 3, 2, 9415, 1961, 1706, 569, 410, 186, 129, 711, 111, 111, 37, 5565, 15346),
	(14, 382, 3056, 0, 2674, 0, 0, 1702, 146, 1038, 1100, 7578, 3, 3, 9716, 2024, 1761, 587, 423, 186, 129, 739, 115, 115, 38, 5730, 15834),
	(15, 394, 3152, 0, 2758, 0, 0, 1863, 151, 1038, 1100, 7924, 3, 4, 10062, 2096, 1824, 608, 438, 186, 129, 772, 120, 120, 40, 5910, 16394),
	(16, 411, 3288, 0, 2877, 0, 0, 2064, 157, 1038, 1100, 8386, 3, 5, 10524, 2193, 1908, 636, 458, 186, 129, 815, 127, 127, 42, 6165, 17144),
	(17, 442, 3536, 0, 3094, 0, 0, 2248, 169, 1038, 1100, 9047, 3, 6, 11185, 2330, 2027, 676, 487, 186, 129, 876, 137, 137, 46, 6630, 18215),
	(18, 677, 5416, 0, 4739, 0, 0, 3444, 259, 1038, 1100, 13858, 3, 7, 15996, 3332, 2899, 966, 696, 186, 129, 1324, 206, 206, 69, 10155, 26010),
	(19, 371, 2968, 0, 0, 2968, 0, 1160, 142, 1038, 1100, 7238, 5, 2, 9376, 1953, 1699, 566, 408, 186, 129, 708, 110, 110, 37, 5936, 15283),
	(20, 382, 3056, 0, 0, 3056, 0, 1258, 146, 1038, 1100, 7516, 5, 3, 9654, 2011, 1750, 583, 420, 186, 129, 734, 114, 114, 38, 6112, 15734),
	(21, 394, 3152, 0, 0, 3152, 0, 1377, 151, 1038, 1100, 7832, 5, 4, 9970, 2077, 1807, 602, 434, 186, 129, 763, 119, 119, 40, 6304, 16245),
	(22, 411, 3288, 0, 0, 3288, 0, 1526, 157, 1038, 1100, 8259, 5, 5, 10397, 2166, 1884, 628, 452, 186, 129, 803, 125, 125, 42, 6576, 16938),
	(23, 442, 3536, 0, 0, 3536, 0, 1662, 169, 1038, 1100, 8903, 5, 6, 11041, 2300, 2001, 667, 480, 186, 129, 863, 134, 134, 45, 7072, 17981),
	(24, 677, 5416, 0, 0, 5416, 0, 2546, 259, 1038, 1100, 13637, 5, 7, 15775, 3286, 2859, 953, 686, 186, 129, 1303, 203, 203, 68, 10932, 25652),
	(25, 371, 2968, 0, 2597, 0, 0, 1638, 142, 1038, 1100, 7345, 4, 2, 9483, 1976, 1719, 573, 413, 186, 129, 718, 112, 112, 37, 5565, 15456),
	(26, 382, 3056, 0, 2674, 0, 0, 1776, 146, 1038, 1100, 7652, 4, 3, 9790, 2040, 1774, 591, 426, 186, 129, 746, 116, 116, 39, 5730, 15954),
	(27, 394, 3152, 0, 2758, 0, 0, 1944, 151, 1038, 1100, 8005, 4, 4, 10143, 2113, 1838, 613, 441, 186, 129, 779, 121, 121, 40, 5910, 16256),
	(28, 411, 3288, 0, 2877, 0, 0, 2154, 157, 1038, 1100, 8476, 4, 5, 10614, 2211, 1924, 641, 462, 186, 129, 823, 128, 128, 43, 6165, 17290),
	(29, 442, 3536, 0, 3094, 0, 0, 2346, 169, 1038, 1100, 9145, 4, 6, 11283, 2351, 2045, 682, 491, 186, 129, 885, 138, 138, 46, 6630, 18373),
	(30, 677, 5416, 0, 4739, 0, 0, 3594, 259, 1038, 1100, 14008, 4, 7, 16146, 3364, 2926, 975, 702, 186, 129, 1338, 208, 208, 69, 10155, 26253);
/*!40000 ALTER TABLE `coords` ENABLE KEYS */;

-- Listage de la structure de la table param. tranches
CREATE TABLE IF NOT EXISTS `tranches` (
  `id` smallint(2) unsigned NOT NULL AUTO_INCREMENT,
  `type_tranche` varchar(100) NOT NULL,
  `numero_tranche` smallint(1) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- Listage des données de la table param.tranches : ~5 rows (environ)
DELETE FROM `tranches`;
/*!40000 ALTER TABLE `tranches` DISABLE KEYS */;
INSERT INTO `tranches` (`id`, `type_tranche`, `numero_tranche`) VALUES
	(1, '(7H30 - 19H30) Du LUNDI AU SAMEDI', 1),
	(2, '(19H30 - 7H30) Du LUNDI AU VENDREDI', 2),
	(3, '(19H30 - 7H30) SAMEDI', 3),
	(4, '(7H30 - 19H30) DIMANCHE ET JOURS FERIES', 4),
	(5, '(19H30 - 7H30) DIMANCHE ET JOURS FERIES', 5);
/*!40000 ALTER TABLE `tranches` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
