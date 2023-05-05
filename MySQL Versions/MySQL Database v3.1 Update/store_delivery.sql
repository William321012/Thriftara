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
-- Table structure for table `delivery`
--

DROP TABLE IF EXISTS `delivery`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `delivery` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pid` int DEFAULT NULL,
  `cid` int DEFAULT NULL,
  `oid` int DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `zip` int DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `total` bigint DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `num` int DEFAULT NULL,
  `unit` bigint DEFAULT NULL,
  `statue` int DEFAULT NULL,
  `OrderTime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `delivery`
--

LOCK TABLES `delivery` WRITE;
/*!40000 ALTER TABLE `delivery` DISABLE KEYS */;
INSERT INTO `delivery` VALUES (1,1,1,1,'1','1','1',1,'1',1,'1',1,1,1,NULL),(2,1,1,1,'1','1','1',1,'1',1,'1',1,1,1,NULL),(3,1,1,1,'1','1','1',1,'1',1,'1',1,1,1,NULL),(4,1,1,1,'1','1','1',1,'1',1,'1',1,1,1,NULL),(5,1,1,1,'1','1','1',1,'1',1,'1',1,1,1,NULL),(6,1,1,1,'1','1','1',1,'1',1,'1',1,1,1,NULL),(7,1,1,1,'1','1','1',1,'1',1,'1',1,1,1,NULL),(8,20,4,44,'1729 65th St','Buffalo','NY',11204,'chaocheng zhu',2664,'/images/839CA23D-0BD7-4A59-96EE-50CF0085D6BD',3,888,0,NULL),(9,19,4,45,'1729 65th St','Buffalo','NY',11204,'chaocheng zhu',13332,'/images/29335658-1789-48AB-8259-AD4C98386869',2,6666,0,NULL),(10,19,4,46,'1729 65th St','Buffalo','NY',11204,'chaocheng zhu',6666,'/images/29335658-1789-48AB-8259-AD4C98386869',1,6666,0,NULL),(11,1,1,1,'1','1','1',1,'1',1,'1',1,1,1,'2023-05-05 15:31:25'),(12,22,4,48,'1729 65th St','Buffalo','NY',11204,'chaocheng zhu',666,'/images/E9E6BCC6-F19F-4AA6-918A-62B7B2F05F8F',1,666,0,'2023-05-05 15:44:12');
/*!40000 ALTER TABLE `delivery` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-05 16:00:16
