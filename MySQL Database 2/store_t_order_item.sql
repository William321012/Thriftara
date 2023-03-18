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
-- Table structure for table `t_order_item`
--

DROP TABLE IF EXISTS `t_order_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_order_item` (
  `id` int NOT NULL AUTO_INCREMENT,
  `oid` int DEFAULT NULL,
  `pid` int DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `unit_price` bigint DEFAULT NULL,
  `num` int DEFAULT NULL,
  `created_user` varchar(255) DEFAULT NULL,
  `created_time` datetime DEFAULT NULL,
  `modified_user` varchar(255) DEFAULT NULL,
  `modified_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_order_item`
--

LOCK TABLES `t_order_item` WRITE;
/*!40000 ALTER TABLE `t_order_item` DISABLE KEYS */;
INSERT INTO `t_order_item` VALUES (51,23,2,'clothes2','img2',50,8,'sb2','2023-03-14 18:52:46','sb2','2023-03-14 18:52:46'),(52,23,3,'clothes3','img3',10,7,'sb2','2023-03-14 18:52:46','sb2','2023-03-14 18:52:46'),(53,23,1,'clothes1','img1',100,8,'sb2','2023-03-14 18:52:46','sb2','2023-03-14 18:52:46'),(54,24,2,'clothes2','img2',50,8,'sb2','2023-03-14 18:54:41','sb2','2023-03-14 18:54:41'),(55,24,3,'clothes3','img3',10,7,'sb2','2023-03-14 18:54:41','sb2','2023-03-14 18:54:41'),(56,24,1,'clothes1','img1',100,8,'sb2','2023-03-14 18:54:41','sb2','2023-03-14 18:54:41'),(57,25,3,'clothes3','img3',10,6,'sb2','2023-03-14 18:57:08','sb2','2023-03-14 18:57:08'),(58,25,1,'clothes1','img1',100,7,'sb2','2023-03-14 18:57:08','sb2','2023-03-14 18:57:08'),(59,25,2,'clothes2','img2',50,7,'sb2','2023-03-14 18:57:08','sb2','2023-03-14 18:57:08'),(60,26,1,'clothes1','img1',100,8,'sb2','2023-03-14 18:59:12','sb2','2023-03-14 18:59:12'),(61,26,2,'clothes2','img2',50,7,'sb2','2023-03-14 18:59:12','sb2','2023-03-14 18:59:12'),(62,27,1,'clothes1','img1',100,8,'sb2','2023-03-14 19:00:29','sb2','2023-03-14 19:00:29'),(63,27,2,'clothes2','img2',50,7,'sb2','2023-03-14 19:00:29','sb2','2023-03-14 19:00:29'),(64,28,2,'clothes2','img2',50,6,'sb2','2023-03-14 19:15:09','sb2','2023-03-14 19:15:09'),(65,28,1,'clothes1','img1',100,6,'sb2','2023-03-14 19:15:09','sb2','2023-03-14 19:15:09'),(66,29,2,'clothes2','img2',50,6,'sb2','2023-03-14 19:19:04','sb2','2023-03-14 19:19:04'),(67,29,1,'clothes1','img1',100,6,'sb2','2023-03-14 19:19:04','sb2','2023-03-14 19:19:04'),(68,30,2,'clothes2','img2',50,6,'sb2','2023-03-14 19:20:15','sb2','2023-03-14 19:20:15'),(69,30,1,'clothes1','img1',100,6,'sb2','2023-03-14 19:20:15','sb2','2023-03-14 19:20:15'),(70,31,3,'clothes3','img3',10,4,'sb2','2023-03-14 19:32:33','sb2','2023-03-14 19:32:33'),(71,32,3,'clothes3','img3',10,9,'sb2','2023-03-14 19:47:11','sb2','2023-03-14 19:47:11'),(72,33,3,'clothes3','img3',10,5,'sb2','2023-03-14 19:51:53','sb2','2023-03-14 19:51:53'),(73,34,1,'clothes1','img1',100,7,'sb2','2023-03-14 19:52:57','sb2','2023-03-14 19:52:57'),(74,35,6,'clothes6','img6',1,8,'sb2','2023-03-14 22:09:03','sb2','2023-03-14 22:09:03'),(75,36,12,'555','/images/878CA7E2-BDD3-47E2-B614-3390ACB5DC0F',5,3,'sb2','2023-03-16 20:50:54','sb2','2023-03-16 20:50:54'),(76,37,12,'555','/images/878CA7E2-BDD3-47E2-B614-3390ACB5DC0F',5,2,'sb2','2023-03-17 12:15:12','sb2','2023-03-17 12:15:12');
/*!40000 ALTER TABLE `t_order_item` ENABLE KEYS */;
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
