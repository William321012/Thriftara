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
-- Table structure for table `t_customer`
--

DROP TABLE IF EXISTS `t_customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_customer` (
  `c_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(32) NOT NULL,
  `salt` char(36) DEFAULT NULL,
  `phone` varchar(10) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `gender` int DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `is_delete` int DEFAULT NULL,
  `created_user` varchar(255) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `modified_user` varchar(20) DEFAULT NULL,
  `modified_time` datetime DEFAULT NULL,
  PRIMARY KEY (`c_id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_customer`
--

LOCK TABLES `t_customer` WRITE;
/*!40000 ALTER TABLE `t_customer` DISABLE KEYS */;
INSERT INTO `t_customer` VALUES (1,'sb','sb','0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2,'sb0','sb0','0',NULL,NULL,NULL,NULL,0,'sb0','2023-02-16 17:27:24','sb0','2023-02-16 17:27:24'),(3,'sb1','B4C121EFCA9B9AFBC5B32D63CBB6DC1F','0',NULL,NULL,NULL,NULL,0,'sb1','2023-02-16 17:54:50','sb1','2023-02-16 17:54:50'),(4,'sb2','5DE2C19BF569E31B519E07DED1A6EDB7','B52FC779-48AE-4F57-9794-A99787714C46','555555','555555',1,'/images/F8EB0418-BB1C-449F-8F48-432A48262D18.png',0,'sb2','2023-02-16 18:07:03','sb2','2023-03-16 18:41:50'),(5,'sb555','BB256AD459A4A78DF3A194BE42B6D6B7','28484CE9-EFBA-4065-970C-098D5224CC73',NULL,NULL,NULL,NULL,0,'sb555','2023-02-16 18:38:13','sb555','2023-02-16 18:38:13'),(6,'sb5','CDAA4913CD93DA5D19F8A8AE5786D8E6','B6FEC2B2-F040-402A-9EE7-BD4716E7FD02',NULL,NULL,NULL,NULL,0,'sb5','2023-02-16 20:41:25','sb5','2023-02-16 20:41:25'),(7,'joe','859C9A70E8C9CE025656C6A8C98BCECB','C0156A89-8E86-4561-8B44-AB7C9CDAEA53',NULL,NULL,NULL,NULL,0,'joe','2023-02-16 23:27:43','joe','2023-02-16 23:27:43'),(8,'114514','B89DC7476748966E12658B5654F225A8','770E27DD-A6A1-4ECC-B883-132686CEEF40',NULL,NULL,NULL,NULL,0,'114514','2023-02-28 20:53:01','114514','2023-02-28 20:53:54'),(9,'666','084D185B42340F4683189FA169EFF3FD','1FF2BEB8-DC2B-457C-AA1A-8DD7F8BF0138',NULL,NULL,NULL,NULL,0,'666','2023-03-10 19:35:41','666','2023-03-10 19:35:41'),(10,'idk','82D9B85984F880867337D0C479FC6A03','352CDA09-3C3E-494D-9C00-7080F577F730',NULL,NULL,NULL,NULL,0,'idk','2023-03-17 13:00:11','idk','2023-03-17 13:00:11'),(11,'222','921BA81A8B1DF9D6A1A6690BCA7A3E5F','37B8648F-02A6-4BCB-B0D7-7420254E549B',NULL,NULL,NULL,NULL,0,'222','2023-03-17 13:25:37','222','2023-03-17 13:25:37'),(12,'test6','AC4214F24C35047B297EA7E7C7DC0B57','C8F4D370-2F14-4EE8-9126-EC68D9D61EDB',NULL,'chaochengzhu@gmail.com',NULL,NULL,0,'test6','2023-03-31 12:50:02','test6','2023-03-31 12:50:02');
/*!40000 ALTER TABLE `t_customer` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-17 22:52:54