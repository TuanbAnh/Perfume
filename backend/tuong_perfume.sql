-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: tuong
-- ------------------------------------------------------
-- Server version	8.4.3

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
-- Table structure for table `perfume`
--

DROP TABLE IF EXISTS `perfume`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `perfume` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `price` int DEFAULT NULL,
  `perfume_type` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `origin` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `img` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `perfume`
--

LOCK TABLES `perfume` WRITE;
/*!40000 ALTER TABLE `perfume` DISABLE KEYS */;
INSERT INTO `perfume` VALUES (1,'Nước hoa CIAGAR',0,'Nam','Pháp','https://www.thegioinuochoa.com.vn/uploads/item_product/thumb1200x200/202305/230503_200139_020216.png'),(2,'Nước hoa CIAGAR',1290000,'Nam','Pháp','https://www.thegioinuochoa.com.vn/uploads/item_product/thumb1200x200/202305/230503_200122_526408.png'),(3,'Nước hoa Dior Sauvage',2150000,'Nam','Pháp','https://www.thegioinuochoa.com.vn/uploads/item_product/thumb1200x200/202305/230503_200115_598936.png'),(4,'Nước hoa Chanel No.5',3200000,'Nữ','Pháp','https://www.thegioinuochoa.com.vn/uploads/item_product/thumb1200x200/202305/230503_200054_138146.png'),(5,'Nước hoa Gucci Bloom',1750000,'Nữ','Ý','https://www.thegioinuochoa.com.vn/uploads/item_product/thumb1200x200/202305/230503_200016_491179.png'),(6,'Nước hoa Versace Eros',2000000,'Nam','Ý','https://www.thegioinuochoa.com.vn/uploads/item_product/thumb1200x200/202305/230503_200222_444800.png'),(7,'Nước hoa Tom Ford Noir',2800000,'Nam','Mỹ','https://www.thegioinuochoa.com.vn/uploads/item_product/thumb1200x200/202305/230503_200222_444800.png'),(8,'Nước hoa YSL Libre',2900000,'Nữ','Pháp','https://www.thegioinuochoa.com.vn/uploads/item_product/thumb1200x200/202305/230503_194739_678940.png'),(9,'Nước hoa Marc Jacobs Daisy',2500000,'Nữ','Mỹ','https://www.thegioinuochoa.com.vn/uploads/item_product/thumb1200x200/202305/230503_200016_491179.png'),(10,'Nước hoa Calvin Klein CK One',1500000,'Nam','Mỹ','https://www.thegioinuochoa.com.vn/uploads/item_product/thumb1200x200/202305/230503_200115_111648.png'),(11,'Nước hoa Burberry Her',2200000,'Nữ','Anh','https://www.thegioinuochoa.com.vn/uploads/item_product/thumb1200x200/202305/230503_200016_491179.png'),(12,'Nước hoa Paco Rabanne 1 Million',2600000,'Nam','Tây Ban Nha','https://www.thegioinuochoa.com.vn/uploads/item_product/thumb1200x200/202305/230503_200222_444800.png'),(13,'Nước hoa Jo Malone Peony & Blush Suede',3500000,'Nữ','Anh','https://www.thegioinuochoa.com.vn/uploads/item_product/thumb1200x200/202305/230503_194836_826785.png'),(14,'Nước hoa Gucci Guilty',2750000,'Nam','Ý','https://www.thegioinuochoa.com.vn/uploads/item_product/thumb1200x200/202305/230503_200222_444800.png'),(15,'Nước hoa Lancome La Vie Est Belle',3000000,'Nữ','Pháp','https://www.thegioinuochoa.com.vn/uploads/item_product/thumb1200x200/202305/230503_200102_520758.png');
/*!40000 ALTER TABLE `perfume` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-30 11:43:14
