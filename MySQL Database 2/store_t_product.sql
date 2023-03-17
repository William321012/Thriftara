-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: store
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `t_product`
--

DROP TABLE IF EXISTS `t_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_id` int DEFAULT NULL,
  `item_type` varchar(255) DEFAULT NULL,
  `item_description` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `num` int DEFAULT NULL,
  `image` varchar(500) DEFAULT NULL,
  `item_status` int DEFAULT '1',
  `priority` int DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `size` varchar(255) DEFAULT NULL,
  `item_condition` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `gender` int DEFAULT NULL,
  `created_time` datetime DEFAULT NULL,
  `modified_time` datetime DEFAULT NULL,
  `created_user` varchar(255) DEFAULT NULL,
  `modified_user` varchar(255) DEFAULT NULL,
  `price` bigint DEFAULT NULL,
  `cid` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_product`
--

LOCK TABLES `t_product` WRITE;
/*!40000 ALTER TABLE `t_product` DISABLE KEYS */;
INSERT INTO `t_product` VALUES (1,NULL,NULL,'item1','clothes1',9983,'img1',1,10,'aa',NULL,'new','red',1,NULL,'2023-03-14 19:53:03','admin','sb2',100,NULL),(2,NULL,NULL,'item2','clothes2',9990,'img2',1,9,'aa',NULL,'new','red',2,NULL,'2023-03-14 19:20:35','admin','sb2',50,NULL),(3,NULL,NULL,'item3','clothes3',9975,'img3',1,9,'aa',NULL,'new','white',1,NULL,'2023-03-14 19:51:59','admin','sb2',10,NULL),(4,NULL,NULL,NULL,'clothes4',9999,'img4',1,9,'bb',NULL,'new','white',2,NULL,'2023-03-14 19:51:59','admin',NULL,1,NULL),(5,NULL,NULL,NULL,'clothes5',9999,'img5',1,9,'bb',NULL,'new','white',1,NULL,'2023-03-14 19:51:59','admin',NULL,1,NULL),(6,NULL,NULL,NULL,'clothes6',9991,'img6',1,8,'cc',NULL,'new','white',1,NULL,'2023-03-14 22:09:09','admin','sb2',1,NULL),(12,NULL,'skirt','555','555',5550,'/images/878CA7E2-BDD3-47E2-B614-3390ACB5DC0F',1,8,'555','555','2','555',1,NULL,'2023-03-17 12:15:21',NULL,'sb2',5,4),(13,NULL,'skirt','5555','55',555,'/images/49AEB526-1683-4154-BCED-0A80C8B739C6',1,8,'555','555','1','55',1,NULL,NULL,NULL,NULL,NULL,4);
/*!40000 ALTER TABLE `t_product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-17 12:24:25
