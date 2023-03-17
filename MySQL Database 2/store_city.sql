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
-- Table structure for table `city`
--

DROP TABLE IF EXISTS `city`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `city` (
  `c_id` int NOT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state_code` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`c_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `city`
--

LOCK TABLES `city` WRITE;
/*!40000 ALTER TABLE `city` DISABLE KEYS */;
INSERT INTO `city` VALUES (1,'New York','NY'),(2,'Los Angeles','CA'),(3,'Chicago','IL'),(4,'Houston','TX'),(5,'Phoenix','AZ'),(6,'Philadelphia','PA'),(7,'San Antonio','TX'),(8,'San Diego','CA'),(9,'Dallas','TX'),(10,'San Jose','CA'),(11,'Detroit','MI'),(12,'Jacksonville','FL'),(13,'Indianapolis','IN'),(14,'San Francisco','CA'),(15,'Columbus','OH'),(16,'Austin','TX'),(17,'Memphis','TN'),(18,'Fort Worth','TX'),(19,'Baltimore','MD'),(20,'Charlotte','NC'),(21,'El Paso','TX'),(22,'Milwaukee','WI'),(23,'Boston','MA'),(24,'Seattle','WA'),(25,'Washington','WA'),(26,'Denver','CO'),(27,'Louisville','KY'),(28,'Las Vegas','NV'),(29,'Nashville','TN'),(30,'Oklahoma City','OK'),(31,'Portland','OR'),(32,'Tucson','AZ'),(33,'Albuquerque','NM'),(34,'Atlanta','GA'),(35,'Long Beach','CA'),(36,'Fresno','CA'),(37,'Sacramento','CA'),(38,'Mesa','AZ'),(39,'Kansas City','MO'),(40,'Cleveland','OH'),(41,'Virginia Beach','VA'),(42,'Omaha','NE'),(43,'Miami','FL'),(44,'Oakland','CA'),(45,'Tulsa','OK'),(46,'Honolulu','HI'),(47,'Minneapolis','MN'),(48,'Colorado Springs','CO'),(49,'Arlington','TX'),(50,'Wichita','KS'),(51,'Raleigh','NC'),(52,'St. Louis','MO'),(53,'Santa Ana','CA'),(54,'Anaheim','CA'),(55,'Tampa','FL'),(56,'Cincinnati','OH'),(57,'Pittsburgh','PA'),(58,'Bakersfield','CA'),(59,'Aurora','CO'),(60,'Toledo','OH'),(61,'Riverside','CA'),(62,'Stockton','CA'),(63,'Corpus Christi','TX'),(64,'Newark','NJ'),(65,'Anchorage','AK'),(66,'Buffalo','NY'),(67,'St. Paul','MN'),(68,'Lexington','KY'),(69,'Plano','TX'),(70,'Fort Wayne','IN'),(71,'St. Petersburg','FL'),(72,'Glendale','AZ'),(73,'Jersey City','NJ'),(74,'Lincoln','NE'),(75,'Henderson','NV'),(76,'Chandler','AZ'),(77,'Norfolk','VA'),(78,'Greensboro','NC'),(79,'Scottsdale','AZ'),(80,'Baton Rouge','LA'),(81,'Birmingham','AL'),(82,'Madison','WI'),(83,'New Orleans','LA'),(84,'Chesapeake','VA'),(85,'Orlando','FL'),(86,'Garland','TX'),(87,'Hialeah','FL'),(88,'Laredo','TX'),(89,'Chula Vista','CA'),(90,'Lubbock','TX'),(91,'Reno','NV'),(92,'Akron','OH'),(93,'Durham','NC'),(94,'Rochester','NY'),(95,'Modesto','CA'),(96,'Montgomery','AL'),(97,'Fremont','CA'),(98,'Shreveport','LA'),(99,'Arlington','VA'),(100,'Glendale','CA'),(101,'San Bernardino','CA'),(102,'Boise','ID'),(103,'Spokane','WA'),(104,'Yonkers','NY'),(105,'North Las Vegas','NV'),(106,'Winston-Salem','NC'),(107,'Tacoma','WA'),(108,'Irving','TX'),(109,'Huntington Beach','CA'),(110,'Irvine','CA'),(111,'Des Moines','IA'),(112,'Great Rapids','MI'),(113,'Richmond','VA'),(114,'Mobile','AL'),(115,'Gilbert','AZ'),(116,'Augusta','GA'),(117,'Columbus','GA'),(118,'Fort Lauderdale','FL'),(119,'Amarillo','TX'),(120,'Oxnard','CA'),(121,'Little Rock','AR'),(122,'Moreno Valley','CA'),(123,'Knoxville','TN'),(124,'Salt Lake City','UT'),(125,'Newport News','VA'),(126,'Jackson','MS'),(127,'Worcester','MA'),(128,'Providence','RI'),(129,'Ontario','CA'),(130,'Brownsville','TX'),(131,'Rancho Cucamonga','CA'),(132,'Aurora','IL'),(133,'Fontana','CA'),(134,'Tempe','AZ'),(135,'Rockford','IL'),(136,'Huntsville','AL'),(137,'Fayetteville','NC'),(138,'Santa Clarita','CA'),(139,'Overland Park','KS'),(140,'Garden Grove','CA'),(141,'Oceanside','CA'),(142,'Tallahassee','FL'),(143,'Vancouver','WA'),(144,'Dayton','OH'),(145,'Chattanooga','TN'),(146,'Pomona','CA'),(147,'Santa Rosa','CA'),(148,'Grand Prairie','TX'),(149,'Salem','OR'),(150,'Cape Coral','FL'),(151,'Springfield','MA'),(152,'Springfield','MO'),(153,'Corona','CA'),(154,'Pembroke Pines','FL'),(155,'Paterson','NJ'),(156,'Eugene','OR'),(157,'Hollywood','FL'),(158,'Salinas','CA'),(159,'Hampton','VA'),(160,'Pasadena','TX'),(161,'Pasadena','CA'),(162,'Port St. Lucie','FL'),(163,'Kansas City','KS'),(164,'Naperville','IL'),(165,'Joliet','IL'),(166,'Sioux Falls','SD'),(167,'Torrance','CA'),(168,'Peoria','AZ'),(169,'Lancaster','CA'),(170,'Syracuse','NY'),(171,'Hayward','CA'),(172,'Lakewood','CO'),(173,'Palmdale','CA'),(174,'Alexandria','VA'),(175,'Bridgeport','CT'),(176,'Orange','CA'),(177,'Warren','MI'),(178,'Escondido','CA'),(179,'Fullerton','CA'),(180,'Mesquite','TX'),(181,'Sunnyvale','CA'),(182,'Coral Springs','FL'),(183,'Fort Collins','CO'),(184,'Elk Grove','CA'),(185,'Sterling Heights','MI'),(186,'Savannah','GA'),(187,'McAllen','TX'),(188,'Elizabeth','NJ'),(189,'Hartford','CT'),(190,'Cedar Rapids','IA'),(191,'Thousand Oaks','CA'),(192,'New Haven','CT'),(193,'El Monte','CA'),(194,'Concord','CA'),(195,'Topeka','KS'),(196,'Carrollton','TX'),(197,'Waco','TX'),(198,'Simi Valley','CA'),(199,'West Valley','UT'),(200,'Columbia','SC'),(201,'Stamford','CT'),(202,'Bellevue','WA'),(203,'Flint','MI'),(204,'Vallejo','CA'),(205,'Springfield','IL'),(206,'Evansville','IN'),(207,'Inglewood','CA'),(208,'Abilene','TX'),(209,'Olathe','KS'),(210,'Lansing','MI'),(211,'Lafayette','LA'),(212,'Provo','UT'),(213,'Visalia','CA'),(214,'Ann Arbor','MI'),(215,'Clarksville','TN'),(216,'Peoria','IL'),(217,'Cary','NC'),(218,'Athens','GA'),(219,'Beaumont','TX'),(220,'Costa Mesa','CA'),(221,'Denton','TX'),(222,'Manchester','SH'),(223,'Independence','MO'),(224,'Downey','CA'),(225,'Thornton','CO'),(226,'Gainesville','FL'),(227,'Santa Clara','CA'),(228,'Miramar','FL'),(229,'Charleston','SC'),(230,'West Covina','CA'),(231,'Clearwater','FL'),(232,'McKinney','TX'),(233,'Allentown','PA'),(234,'Waterbury','CT'),(235,'Roseville','CA'),(236,'Westminster','CO'),(237,'Norwalk','CA'),(238,'South Bend','IN'),(239,'Fairfield','CA'),(240,'Arvada','CO'),(241,'Pompano Beach','FL'),(242,'Burbank','CA'),(243,'San Buenaventura','CA'),(244,'Pueblo','CO'),(245,'Lowell','MA'),(246,'Norman','OK'),(247,'Richmond','CA'),(248,'Midland','TX'),(249,'Erie','PA'),(250,'Killeen','TX'),(251,'Elgin','IL'),(252,'Berkeley','CA'),(253,'Portsmouth','VA'),(254,'Cambridge','MA'),(255,'Daly City','CA'),(256,'Antioch','CA'),(257,'Green Bay','WI'),(258,'West Jordan','UT'),(259,'Billings','MT');
/*!40000 ALTER TABLE `city` ENABLE KEYS */;
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
