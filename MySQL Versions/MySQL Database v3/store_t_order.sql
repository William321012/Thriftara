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
-- Table structure for table `t_order`
--

DROP TABLE IF EXISTS `t_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_order` (
  `oid` int NOT NULL AUTO_INCREMENT,
  `cid` int DEFAULT NULL,
  `receiver_name` varchar(255) DEFAULT NULL,
  `receiver_phone` varchar(255) DEFAULT NULL,
  `receiver_address` varchar(255) DEFAULT NULL,
  `receiver_city` varchar(255) DEFAULT NULL,
  `receiver_state` varchar(255) DEFAULT NULL,
  `receiver_zip` int DEFAULT NULL,
  `total_price` bigint DEFAULT NULL,
  `status` int DEFAULT NULL,
  `order_time` datetime DEFAULT NULL,
  `pay_time` datetime DEFAULT NULL,
  `created_user` varchar(255) DEFAULT NULL,
  `created_time` datetime DEFAULT NULL,
  `modified_user` varchar(255) DEFAULT NULL,
  `modified_time` datetime DEFAULT NULL,
  PRIMARY KEY (`oid`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_order`
--

LOCK TABLES `t_order` WRITE;
/*!40000 ALTER TABLE `t_order` DISABLE KEYS */;
INSERT INTO `t_order` VALUES (30,4,'chaocheng zhu','3159752753','77777','Cedar Rapids','IA',11204,900,1,'2023-03-14 19:20:15','2023-03-14 19:20:35','sb2','2023-03-14 19:20:15','sb2','2023-03-14 19:20:35'),(31,4,'chaocheng zhu','3159752753','6666','New York','NY',11204,40,1,'2023-03-14 19:32:33','2023-03-14 19:33:05','sb2','2023-03-14 19:32:33','sb2','2023-03-14 19:33:05'),(32,4,'chaocheng zhu','3159752753','77777','Cedar Rapids','IA',11204,90,1,'2023-03-14 19:47:11','2023-03-14 19:47:17','sb2','2023-03-14 19:47:11','sb2','2023-03-14 19:47:17'),(33,4,'chaocheng zhu','3159752753','6666','New York','NY',11204,50,1,'2023-03-14 19:51:53','2023-03-14 19:51:59','sb2','2023-03-14 19:51:53','sb2','2023-03-14 19:51:59'),(34,4,'chaocheng zhu','3159752753','6666','New York','NY',11204,700,1,'2023-03-14 19:52:57','2023-03-14 19:53:03','sb2','2023-03-14 19:52:57','sb2','2023-03-14 19:53:03'),(35,4,'chaocheng zhu','3159752753','6666','New York','NY',11204,8,1,'2023-03-14 22:09:03','2023-03-14 22:09:09','sb2','2023-03-14 22:09:03','sb2','2023-03-14 22:09:09'),(36,4,'chaocheng zhu','3159752753','6666','New York','NY',11204,15,1,'2023-03-16 20:50:54','2023-03-16 20:51:02','sb2','2023-03-16 20:50:54','sb2','2023-03-16 20:51:02'),(37,4,'chaocheng zhu','3159752753','1729 65th St','Cedar Rapids','IA',11204,10,1,'2023-03-17 12:15:12','2023-03-17 12:15:21','sb2','2023-03-17 12:15:12','sb2','2023-03-17 12:15:21'),(38,4,'chaocheng zhu','3159752753','5555555','New York','NY',11204,1776,1,'2023-03-21 21:02:08','2023-03-21 21:02:14','sb2','2023-03-21 21:02:08','sb2','2023-03-21 21:02:14');
/*!40000 ALTER TABLE `t_order` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-17 22:52:55
