-- MySQL dump 10.16  Distrib 10.1.21-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: localhost
-- ------------------------------------------------------
-- Server version	10.1.21-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `kalevala_collections`
--

DROP TABLE IF EXISTS `kalevala_collections`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `kalevala_collections` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `public` tinyint(4) NOT NULL,
  `featured` tinyint(4) NOT NULL,
  `added` timestamp NOT NULL DEFAULT '1999-12-31 22:00:00',
  `modified` timestamp NOT NULL DEFAULT '1999-12-31 22:00:00',
  `owner_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `public` (`public`),
  KEY `featured` (`featured`),
  KEY `owner_id` (`owner_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kalevala_collections`
--

LOCK TABLES `kalevala_collections` WRITE;
/*!40000 ALTER TABLE `kalevala_collections` DISABLE KEYS */;
/*!40000 ALTER TABLE `kalevala_collections` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kalevala_element_sets`
--

DROP TABLE IF EXISTS `kalevala_element_sets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `kalevala_element_sets` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `record_type` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `record_type` (`record_type`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kalevala_element_sets`
--

LOCK TABLES `kalevala_element_sets` WRITE;
/*!40000 ALTER TABLE `kalevala_element_sets` DISABLE KEYS */;
INSERT INTO `kalevala_element_sets` VALUES (1,NULL,'Dublin Core','The Dublin Core metadata element set is common to all Omeka records, including items, files, and collections. For more information see, http://dublincore.org/documents/dces/.'),(3,'Item','Item Type Metadata','The item type metadata element set, consisting of all item type elements bundled with Omeka and all item type elements created by an administrator.');
/*!40000 ALTER TABLE `kalevala_element_sets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kalevala_element_texts`
--

DROP TABLE IF EXISTS `kalevala_element_texts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `kalevala_element_texts` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `record_id` int(10) unsigned NOT NULL,
  `record_type` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `element_id` int(10) unsigned NOT NULL,
  `html` tinyint(4) NOT NULL,
  `text` mediumtext COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `record_type_record_id` (`record_type`,`record_id`),
  KEY `element_id` (`element_id`),
  KEY `text` (`text`(20))
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kalevala_element_texts`
--

LOCK TABLES `kalevala_element_texts` WRITE;
/*!40000 ALTER TABLE `kalevala_element_texts` DISABLE KEYS */;
INSERT INTO `kalevala_element_texts` VALUES (1,1,'Item',50,0,'Aino-runon 4. runo');
/*!40000 ALTER TABLE `kalevala_element_texts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kalevala_elements`
--

DROP TABLE IF EXISTS `kalevala_elements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `kalevala_elements` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `element_set_id` int(10) unsigned NOT NULL,
  `order` int(10) unsigned DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci,
  `comment` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_element_set_id` (`element_set_id`,`name`),
  UNIQUE KEY `order_element_set_id` (`element_set_id`,`order`),
  KEY `element_set_id` (`element_set_id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kalevala_elements`
--

LOCK TABLES `kalevala_elements` WRITE;
/*!40000 ALTER TABLE `kalevala_elements` DISABLE KEYS */;
INSERT INTO `kalevala_elements` VALUES (1,3,NULL,'Text','Any textual data included in the document',NULL),(2,3,NULL,'Interviewer','The person(s) performing the interview',NULL),(3,3,NULL,'Interviewee','The person(s) being interviewed',NULL),(4,3,NULL,'Location','The location of the interview',NULL),(5,3,NULL,'Transcription','Any written text transcribed from a sound',NULL),(6,3,NULL,'Local URL','The URL of the local directory containing all assets of the website',NULL),(7,3,NULL,'Original Format','The type of object, such as painting, sculpture, paper, photo, and additional data',NULL),(10,3,NULL,'Physical Dimensions','The actual physical size of the original image',NULL),(11,3,NULL,'Duration','Length of time involved (seconds, minutes, hours, days, class periods, etc.)',NULL),(12,3,NULL,'Compression','Type/rate of compression for moving image file (i.e. MPEG-4)',NULL),(13,3,NULL,'Producer','Name (or names) of the person who produced the video',NULL),(14,3,NULL,'Director','Name (or names) of the person who produced the video',NULL),(15,3,NULL,'Bit Rate/Frequency','Rate at which bits are transferred (i.e. 96 kbit/s would be FM quality audio)',NULL),(16,3,NULL,'Time Summary','A summary of an interview given for different time stamps throughout the interview',NULL),(17,3,NULL,'Email Body','The main body of the email, including all replied and forwarded text and headers',NULL),(18,3,NULL,'Subject Line','The content of the subject line of the email',NULL),(19,3,NULL,'From','The name and email address of the person sending the email',NULL),(20,3,NULL,'To','The name(s) and email address(es) of the person to whom the email was sent',NULL),(21,3,NULL,'CC','The name(s) and email address(es) of the person to whom the email was carbon copied',NULL),(22,3,NULL,'BCC','The name(s) and email address(es) of the person to whom the email was blind carbon copied',NULL),(23,3,NULL,'Number of Attachments','The number of attachments to the email',NULL),(24,3,NULL,'Standards','',NULL),(25,3,NULL,'Objectives','',NULL),(26,3,NULL,'Materials','',NULL),(27,3,NULL,'Lesson Plan Text','',NULL),(28,3,NULL,'URL','',NULL),(29,3,NULL,'Event Type','',NULL),(30,3,NULL,'Participants','Names of individuals or groups participating in the event',NULL),(31,3,NULL,'Birth Date','',NULL),(32,3,NULL,'Birthplace','',NULL),(33,3,NULL,'Death Date','',NULL),(34,3,NULL,'Occupation','',NULL),(35,3,NULL,'Biographical Text','',NULL),(36,3,NULL,'Bibliography','',NULL),(37,1,8,'Contributor','An entity responsible for making contributions to the resource',NULL),(38,1,15,'Coverage','The spatial or temporal topic of the resource, the spatial applicability of the resource, or the jurisdiction under which the resource is relevant',NULL),(39,1,4,'Creator','An entity primarily responsible for making the resource',NULL),(40,1,7,'Date','A point or period of time associated with an event in the lifecycle of the resource',NULL),(41,1,3,'Description','An account of the resource',NULL),(42,1,11,'Format','The file format, physical medium, or dimensions of the resource',NULL),(43,1,14,'Identifier','An unambiguous reference to the resource within a given context',NULL),(44,1,12,'Language','A language of the resource',NULL),(45,1,6,'Publisher','An entity responsible for making the resource available',NULL),(46,1,10,'Relation','A related resource',NULL),(47,1,9,'Rights','Information about rights held in and over the resource',NULL),(48,1,5,'Source','A related resource from which the described resource is derived',NULL),(49,1,2,'Subject','The topic of the resource',NULL),(50,1,1,'Title','A name given to the resource',NULL),(51,1,13,'Type','The nature or genre of the resource',NULL);
/*!40000 ALTER TABLE `kalevala_elements` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kalevala_files`
--

DROP TABLE IF EXISTS `kalevala_files`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `kalevala_files` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `item_id` int(10) unsigned NOT NULL,
  `order` int(10) unsigned DEFAULT NULL,
  `size` bigint(20) unsigned NOT NULL,
  `has_derivative_image` tinyint(1) NOT NULL,
  `authentication` char(32) COLLATE utf8_unicode_ci DEFAULT NULL,
  `mime_type` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `type_os` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `filename` text COLLATE utf8_unicode_ci NOT NULL,
  `original_filename` text COLLATE utf8_unicode_ci NOT NULL,
  `modified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `added` timestamp NOT NULL DEFAULT '1999-12-31 22:00:00',
  `stored` tinyint(1) NOT NULL DEFAULT '0',
  `metadata` text COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `item_id` (`item_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kalevala_files`
--

LOCK TABLES `kalevala_files` WRITE;
/*!40000 ALTER TABLE `kalevala_files` DISABLE KEYS */;
INSERT INTO `kalevala_files` VALUES (1,1,NULL,1834566,1,'9d32a80f1d0a85f83345435171069cd1','image/jpeg','JPEG image data, JFIF standard 1.01, aspect ratio, density 1x1, segment length 16, baseline, precision 8, 4606x2952, frames 3','fbd516afc35d1e2d9fe44b213089ac21.jpg','lna038_022_f.jpg','2017-11-28 10:40:16','2017-11-28 10:40:14',1,'{\"mime_type\":\"image\\/jpeg\",\"video\":{\"dataformat\":\"jpg\",\"lossless\":false,\"bits_per_sample\":24,\"pixel_aspect_ratio\":1,\"resolution_x\":4606,\"resolution_y\":2952,\"compression_ratio\":0.044975064926507}}'),(2,1,NULL,1875337,1,'ebe50ca2a4d87803ca0b38fa387b68aa','image/jpeg','JPEG image data, JFIF standard 1.01, aspect ratio, density 1x1, segment length 16, baseline, precision 8, 4606x2952, frames 3','f0a29f7b3fbfbccbcf3cd645d0558b77.jpg','lna038_059_f.jpg','2017-11-28 10:40:18','2017-11-28 10:40:17',1,'{\"mime_type\":\"image\\/jpeg\",\"video\":{\"dataformat\":\"jpg\",\"lossless\":false,\"bits_per_sample\":24,\"pixel_aspect_ratio\":1,\"resolution_x\":4606,\"resolution_y\":2952,\"compression_ratio\":0.045974581091158}}'),(3,1,NULL,1916727,1,'8b61f4eabd2cc00808e4292fce384c50','image/jpeg','JPEG image data, JFIF standard 1.01, aspect ratio, density 1x1, segment length 16, baseline, precision 8, 4606x2952, frames 3','224f5c550eb70fee4244ab554ff4f419.jpg','lna038_060_f.jpg','2017-11-28 10:40:20','2017-11-28 10:40:18',1,'{\"mime_type\":\"image\\/jpeg\",\"video\":{\"dataformat\":\"jpg\",\"lossless\":false,\"bits_per_sample\":24,\"pixel_aspect_ratio\":1,\"resolution_x\":4606,\"resolution_y\":2952,\"compression_ratio\":0.046989272270057}}'),(4,1,NULL,5080,0,'166ee84c12f11c4b59fcc3ddb33f6750','application/xml','XML 1.0 document, UTF-8 Unicode text','be89eefb21cac33ad2ea0fb53ea519ed.xml','aino-demo.xml','2017-11-28 10:40:20','2017-11-28 10:40:20',1,'[]');
/*!40000 ALTER TABLE `kalevala_files` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kalevala_item_types`
--

DROP TABLE IF EXISTS `kalevala_item_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `kalevala_item_types` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kalevala_item_types`
--

LOCK TABLES `kalevala_item_types` WRITE;
/*!40000 ALTER TABLE `kalevala_item_types` DISABLE KEYS */;
INSERT INTO `kalevala_item_types` VALUES (1,'Text','A resource consisting primarily of words for reading. Examples include books, letters, dissertations, poems, newspapers, articles, archives of mailing lists. Note that facsimiles or images of texts are still of the genre Text.'),(3,'Moving Image','A series of visual representations imparting an impression of motion when shown in succession. Examples include animations, movies, television programs, videos, zoetropes, or visual output from a simulation.'),(4,'Oral History','A resource containing historical information obtained in interviews with persons having firsthand knowledge.'),(5,'Sound','A resource primarily intended to be heard. Examples include a music playback file format, an audio compact disc, and recorded speech or sounds.'),(6,'Still Image','A static visual representation. Examples include paintings, drawings, graphic designs, plans and maps. Recommended best practice is to assign the type Text to images of textual materials.'),(7,'Website','A resource comprising of a web page or web pages and all related assets ( such as images, sound and video files, etc. ).'),(8,'Event','A non-persistent, time-based occurrence. Metadata for an event provides descriptive information that is the basis for discovery of the purpose, location, duration, and responsible agents associated with an event. Examples include an exhibition, webcast, conference, workshop, open day, performance, battle, trial, wedding, tea party, conflagration.'),(9,'Email','A resource containing textual messages and binary attachments sent electronically from one person to another or one person to many people.'),(10,'Lesson Plan','A resource that gives a detailed description of a course of instruction.'),(11,'Hyperlink','A link, or reference, to another resource on the Internet.'),(12,'Person','An individual.'),(13,'Interactive Resource','A resource requiring interaction from the user to be understood, executed, or experienced. Examples include forms on Web pages, applets, multimedia learning objects, chat services, or virtual reality environments.'),(14,'Dataset','Data encoded in a defined structure. Examples include lists, tables, and databases. A dataset may be useful for direct machine processing.'),(15,'Physical Object','An inanimate, three-dimensional object or substance. Note that digital representations of, or surrogates for, these objects should use Moving Image, Still Image, Text or one of the other types.'),(16,'Service','A system that provides one or more functions. Examples include a photocopying service, a banking service, an authentication service, interlibrary loans, a Z39.50 or Web server.'),(17,'Software','A computer program in source or compiled form. Examples include a C source file, MS-Windows .exe executable, or Perl script.');
/*!40000 ALTER TABLE `kalevala_item_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kalevala_item_types_elements`
--

DROP TABLE IF EXISTS `kalevala_item_types_elements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `kalevala_item_types_elements` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `item_type_id` int(10) unsigned NOT NULL,
  `element_id` int(10) unsigned NOT NULL,
  `order` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `item_type_id_element_id` (`item_type_id`,`element_id`),
  KEY `item_type_id` (`item_type_id`),
  KEY `element_id` (`element_id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kalevala_item_types_elements`
--

LOCK TABLES `kalevala_item_types_elements` WRITE;
/*!40000 ALTER TABLE `kalevala_item_types_elements` DISABLE KEYS */;
INSERT INTO `kalevala_item_types_elements` VALUES (1,1,7,NULL),(2,1,1,NULL),(3,6,7,NULL),(6,6,10,NULL),(7,3,7,NULL),(8,3,11,NULL),(9,3,12,NULL),(10,3,13,NULL),(11,3,14,NULL),(12,3,5,NULL),(13,5,7,NULL),(14,5,11,NULL),(15,5,15,NULL),(16,5,5,NULL),(17,4,7,NULL),(18,4,11,NULL),(19,4,15,NULL),(20,4,5,NULL),(21,4,2,NULL),(22,4,3,NULL),(23,4,4,NULL),(24,4,16,NULL),(25,9,17,NULL),(26,9,18,NULL),(27,9,20,NULL),(28,9,19,NULL),(29,9,21,NULL),(30,9,22,NULL),(31,9,23,NULL),(32,10,24,NULL),(33,10,25,NULL),(34,10,26,NULL),(35,10,11,NULL),(36,10,27,NULL),(37,7,6,NULL),(38,11,28,NULL),(39,8,29,NULL),(40,8,30,NULL),(41,8,11,NULL),(42,12,31,NULL),(43,12,32,NULL),(44,12,33,NULL),(45,12,34,NULL),(46,12,35,NULL),(47,12,36,NULL);
/*!40000 ALTER TABLE `kalevala_item_types_elements` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kalevala_items`
--

DROP TABLE IF EXISTS `kalevala_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `kalevala_items` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `item_type_id` int(10) unsigned DEFAULT NULL,
  `collection_id` int(10) unsigned DEFAULT NULL,
  `featured` tinyint(4) NOT NULL,
  `public` tinyint(4) NOT NULL,
  `modified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `added` timestamp NOT NULL DEFAULT '1999-12-31 22:00:00',
  `owner_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `item_type_id` (`item_type_id`),
  KEY `collection_id` (`collection_id`),
  KEY `public` (`public`),
  KEY `featured` (`featured`),
  KEY `owner_id` (`owner_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kalevala_items`
--

LOCK TABLES `kalevala_items` WRITE;
/*!40000 ALTER TABLE `kalevala_items` DISABLE KEYS */;
INSERT INTO `kalevala_items` VALUES (1,NULL,NULL,0,1,'2017-11-28 10:40:14','2017-11-28 10:40:14',1);
/*!40000 ALTER TABLE `kalevala_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kalevala_keys`
--

DROP TABLE IF EXISTS `kalevala_keys`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `kalevala_keys` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) unsigned NOT NULL,
  `label` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `key` char(40) COLLATE utf8_unicode_ci NOT NULL,
  `ip` varbinary(16) DEFAULT NULL,
  `accessed` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `key` (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kalevala_keys`
--

LOCK TABLES `kalevala_keys` WRITE;
/*!40000 ALTER TABLE `kalevala_keys` DISABLE KEYS */;
/*!40000 ALTER TABLE `kalevala_keys` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kalevala_options`
--

DROP TABLE IF EXISTS `kalevala_options`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `kalevala_options` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `value` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kalevala_options`
--

LOCK TABLES `kalevala_options` WRITE;
/*!40000 ALTER TABLE `kalevala_options` DISABLE KEYS */;
INSERT INTO `kalevala_options` VALUES (1,'omeka_version','2.5.1'),(2,'administrator_email','mr.wisty@gmail.com'),(3,'copyright',''),(4,'site_title','Avoin Kalevala'),(5,'author',''),(6,'description',''),(7,'thumbnail_constraint','200'),(8,'square_thumbnail_constraint','200'),(9,'fullsize_constraint','800'),(10,'per_page_admin','20'),(11,'per_page_public','20'),(12,'show_empty_elements','0'),(13,'path_to_convert','/usr/bin'),(14,'admin_theme','default'),(15,'public_theme','default'),(20,'display_system_info','1'),(24,'tag_delimiter',','),(26,'search_record_types','a:3:{s:4:\"Item\";s:4:\"Item\";s:4:\"File\";s:4:\"File\";s:10:\"Collection\";s:10:\"Collection\";}'),(27,'api_enable',''),(28,'api_per_page','50'),(29,'show_element_set_headings','1'),(30,'use_square_thumbnail','1'),(31,'disable_default_file_validation','0'),(32,'file_extension_whitelist','aac,aif,aiff,asf,asx,avi,bmp,c,cc,class,css,divx,doc,docx,exe,gif,gz,gzip,h,ico,j2k,jp2,jpe,jpeg,jpg,m4a,m4v,mdb,mid,midi,mov,mp2,mp3,mp4,mpa,mpe,mpeg,mpg,mpp,odb,odc,odf,odg,odp,ods,odt,ogg,opus,pdf,png,pot,pps,ppt,pptx,qt,ra,ram,rtf,rtx,swf,tar,tif,tiff,txt,wav,wax,webm,wma,wmv,wmx,wri,xla,xls,xlsx,xlt,xlw,zip,xml'),(33,'file_mime_type_whitelist','application/msword,application/ogg,application/pdf,application/rtf,application/vnd.ms-access,application/vnd.ms-excel,application/vnd.ms-powerpoint,application/vnd.ms-project,application/vnd.ms-write,application/vnd.oasis.opendocument.chart,application/vnd.oasis.opendocument.database,application/vnd.oasis.opendocument.formula,application/vnd.oasis.opendocument.graphics,application/vnd.oasis.opendocument.presentation,application/vnd.oasis.opendocument.spreadsheet,application/vnd.oasis.opendocument.text,application/x-ms-wmp,application/x-ogg,application/x-gzip,application/x-msdownload,application/x-shockwave-flash,application/x-tar,application/zip,audio/aac,audio/aiff,audio/mid,audio/midi,audio/mp3,audio/mp4,audio/mpeg,audio/mpeg3,audio/ogg,audio/wav,audio/wma,audio/x-aac,audio/x-aiff,audio/x-m4a,audio/x-midi,audio/x-mp3,audio/x-mp4,audio/x-mpeg,audio/x-mpeg3,audio/x-mpegaudio,audio/x-ms-wax,audio/x-realaudio,audio/x-wav,audio/x-wma,image/bmp,image/gif,image/icon,image/jpeg,image/pjpeg,image/png,image/tiff,image/x-icon,image/x-ms-bmp,text/css,text/plain,text/richtext,text/rtf,video/asf,video/avi,video/divx,video/mp4,video/mpeg,video/msvideo,video/ogg,video/quicktime,video/webm,video/x-m4v,video/x-ms-wmv,video/x-msvideo,application/xml'),(34,'recaptcha_public_key',''),(35,'recaptcha_private_key',''),(36,'html_purifier_is_enabled','1'),(37,'html_purifier_allowed_html_elements','p,br,strong,em,span,div,ul,ol,li,a,h1,h2,h3,h4,h5,h6,address,pre,table,tr,td,blockquote,thead,tfoot,tbody,th,dl,dt,dd,q,small,strike,sup,sub,b,i,big,small,tt'),(38,'html_purifier_allowed_html_attributes','*.style,*.class,a.href,a.title,a.target'),(39,'theme_default_options','a:17:{s:10:\"text_color\";s:7:\"#444444\";s:16:\"background_color\";s:7:\"#FFFFFF\";s:10:\"link_color\";s:7:\"#888888\";s:12:\"button_color\";s:7:\"#000000\";s:17:\"button_text_color\";s:7:\"#FFFFFF\";s:18:\"header_title_color\";s:7:\"#000000\";s:4:\"logo\";N;s:17:\"header_background\";N;s:11:\"footer_text\";s:0:\"\";s:24:\"display_footer_copyright\";s:1:\"0\";s:21:\"display_featured_item\";s:1:\"0\";s:27:\"display_featured_collection\";s:1:\"0\";s:24:\"display_featured_exhibit\";s:1:\"0\";s:21:\"homepage_recent_items\";s:1:\"5\";s:13:\"homepage_text\";s:0:\"\";s:17:\"item_file_gallery\";s:1:\"1\";s:19:\"use_advanced_search\";s:1:\"1\";}'),(40,'public_navigation_main','[{\"uid\":\"\\/kalevala\\/items\\/browse\",\"can_delete\":false,\"label\":\"Selaa aineistoja\",\"fragment\":null,\"id\":null,\"class\":null,\"title\":null,\"target\":null,\"accesskey\":null,\"rel\":[],\"rev\":[],\"customHtmlAttribs\":[],\"order\":1,\"resource\":null,\"privilege\":null,\"active\":false,\"visible\":false,\"type\":\"Omeka_Navigation_Page_Uri\",\"pages\":[],\"uri\":\"\\/kalevala\\/items\\/browse\"},{\"uid\":\"\\/kalevala\\/collections\\/browse\",\"can_delete\":false,\"label\":\"Selaa kokoelmia\",\"fragment\":null,\"id\":null,\"class\":null,\"title\":null,\"target\":null,\"accesskey\":null,\"rel\":[],\"rev\":[],\"customHtmlAttribs\":[],\"order\":2,\"resource\":null,\"privilege\":null,\"active\":false,\"visible\":false,\"type\":\"Omeka_Navigation_Page_Uri\",\"pages\":[],\"uri\":\"\\/kalevala\\/collections\\/browse\"}]'),(41,'homepage_uri','/'),(43,'simple_pages_filter_page_content','0'),(47,'solr_search_facet_limit','25'),(48,'solr_search_facet_sort','count'),(49,'solr_search_hl','1'),(50,'solr_search_hl_snippets','1'),(51,'solr_search_hl_fragsize','250'),(52,'solr_search_hl_max_analyzed_chars','51200'),(53,'solr_search_display_private_items','1'),(64,'universalviewer_append_collections_show','1'),(65,'universalviewer_append_items_show','1'),(66,'universalviewer_max_dynamic_size','50000000'),(67,'universalviewer_licence','http://www.example.org/license.html'),(68,'universalviewer_attribution','Provided by Example Organization'),(69,'universalviewer_class',''),(70,'universalviewer_width','95%'),(71,'universalviewer_height','600px'),(72,'universalviewer_locale','en-GB:English (GB),fr-FR:French'),(73,'universalviewer_iiif_creator','Auto'),(74,'solr_search_host','localhost'),(75,'solr_search_port','8080'),(76,'solr_search_core','/solr/kalevala/');
/*!40000 ALTER TABLE `kalevala_options` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kalevala_plugins`
--

DROP TABLE IF EXISTS `kalevala_plugins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `kalevala_plugins` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `active` tinyint(4) NOT NULL,
  `version` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `active_idx` (`active`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kalevala_plugins`
--

LOCK TABLES `kalevala_plugins` WRITE;
/*!40000 ALTER TABLE `kalevala_plugins` DISABLE KEYS */;
INSERT INTO `kalevala_plugins` VALUES (1,'SimplePages',1,'3.0.8'),(2,'SolrSearch',1,'2.3.0'),(3,'UniversalViewer',1,'2.2.1');
/*!40000 ALTER TABLE `kalevala_plugins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kalevala_processes`
--

DROP TABLE IF EXISTS `kalevala_processes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `kalevala_processes` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `class` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `user_id` int(10) unsigned NOT NULL,
  `pid` int(10) unsigned DEFAULT NULL,
  `status` enum('starting','in progress','completed','paused','error','stopped') COLLATE utf8_unicode_ci NOT NULL,
  `args` text COLLATE utf8_unicode_ci NOT NULL,
  `started` timestamp NOT NULL DEFAULT '1999-12-31 22:00:00',
  `stopped` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `pid` (`pid`),
  KEY `started` (`started`),
  KEY `stopped` (`stopped`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kalevala_processes`
--

LOCK TABLES `kalevala_processes` WRITE;
/*!40000 ALTER TABLE `kalevala_processes` DISABLE KEYS */;
/*!40000 ALTER TABLE `kalevala_processes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kalevala_records_tags`
--

DROP TABLE IF EXISTS `kalevala_records_tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `kalevala_records_tags` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `record_id` int(10) unsigned NOT NULL,
  `record_type` varchar(50) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `tag_id` int(10) unsigned NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tag` (`record_type`,`record_id`,`tag_id`),
  KEY `tag_id` (`tag_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kalevala_records_tags`
--

LOCK TABLES `kalevala_records_tags` WRITE;
/*!40000 ALTER TABLE `kalevala_records_tags` DISABLE KEYS */;
/*!40000 ALTER TABLE `kalevala_records_tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kalevala_schema_migrations`
--

DROP TABLE IF EXISTS `kalevala_schema_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `kalevala_schema_migrations` (
  `version` varchar(16) COLLATE utf8_unicode_ci NOT NULL,
  UNIQUE KEY `unique_schema_migrations` (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kalevala_schema_migrations`
--

LOCK TABLES `kalevala_schema_migrations` WRITE;
/*!40000 ALTER TABLE `kalevala_schema_migrations` DISABLE KEYS */;
INSERT INTO `kalevala_schema_migrations` VALUES ('20100401000000'),('20100810120000'),('20110113000000'),('20110124000001'),('20110301103900'),('20110328192100'),('20110426181300'),('20110601112200'),('20110627223000'),('20110824110000'),('20120112100000'),('20120220000000'),('20120221000000'),('20120224000000'),('20120224000001'),('20120402000000'),('20120516000000'),('20120612112000'),('20120623095000'),('20120710000000'),('20120723000000'),('20120808000000'),('20120808000001'),('20120813000000'),('20120914000000'),('20121007000000'),('20121015000000'),('20121015000001'),('20121018000001'),('20121110000000'),('20121218000000'),('20130422000000'),('20130426000000'),('20130429000000'),('20130701000000'),('20130809000000'),('20140304131700'),('20150211000000'),('20150310141100'),('20150814155100'),('20151118214800'),('20151209103299'),('20151209103300'),('20161209171900'),('20170331084000'),('20170405125800');
/*!40000 ALTER TABLE `kalevala_schema_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kalevala_search_texts`
--

DROP TABLE IF EXISTS `kalevala_search_texts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `kalevala_search_texts` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `record_type` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `record_id` int(10) unsigned NOT NULL,
  `public` tinyint(1) NOT NULL,
  `title` mediumtext COLLATE utf8_unicode_ci,
  `text` longtext COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `record_name` (`record_type`,`record_id`),
  FULLTEXT KEY `text` (`text`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kalevala_search_texts`
--

LOCK TABLES `kalevala_search_texts` WRITE;
/*!40000 ALTER TABLE `kalevala_search_texts` DISABLE KEYS */;
INSERT INTO `kalevala_search_texts` VALUES (1,'SimplePagesPage',1,1,'About','About <p>This is an example page. Feel free to replace this content, or delete the page and start from scratch.</p> '),(2,'Item',1,1,'Aino-runon 4. runo','Aino-runon 4. runo ');
/*!40000 ALTER TABLE `kalevala_search_texts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kalevala_sessions`
--

DROP TABLE IF EXISTS `kalevala_sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `kalevala_sessions` (
  `id` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `modified` bigint(20) DEFAULT NULL,
  `lifetime` int(11) DEFAULT NULL,
  `data` blob,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kalevala_sessions`
--

LOCK TABLES `kalevala_sessions` WRITE;
/*!40000 ALTER TABLE `kalevala_sessions` DISABLE KEYS */;
INSERT INTO `kalevala_sessions` VALUES ('2m6gfdbhjdtm2hc6d2gue9to67',1511872921,1209600,'Default|a:1:{s:8:\"redirect\";s:1:\"/\";}Zend_Auth|a:1:{s:7:\"storage\";i:1;}__ZF|a:5:{s:41:\"Zend_Form_Element_Hash_salt_security_csrf\";a:2:{s:4:\"ENNH\";i:1;s:3:\"ENT\";i:1511876123;}s:41:\"Zend_Form_Element_Hash_salt_settings_csrf\";a:2:{s:4:\"ENNH\";i:1;s:3:\"ENT\";i:1511876151;}s:45:\"Zend_Form_Element_Hash_salt_theme_config_csrf\";a:2:{s:4:\"ENNH\";i:1;s:3:\"ENT\";i:1511876197;}s:43:\"Zend_Form_Element_Hash_salt_navigation_csrf\";a:2:{s:4:\"ENNH\";i:1;s:3:\"ENT\";i:1511876224;}s:14:\"FlashMessenger\";a:1:{s:4:\"ENNH\";i:1;}}Zend_Form_Element_Hash_salt_security_csrf|a:1:{s:4:\"hash\";s:32:\"5b56ab10e16a6679cd21204ff5f763f9\";}Zend_Form_Element_Hash_salt_settings_csrf|a:1:{s:4:\"hash\";s:32:\"9a84f3ce9c1eda5c76691aadaf7c5dee\";}OmekaSessionCsrfToken|a:1:{s:5:\"token\";s:32:\"a2d6d3b251cd858671295171b273a0f6\";}Zend_Form_Element_Hash_salt_theme_config_csrf|a:1:{s:4:\"hash\";s:32:\"18004ac8561f9b03a07e8ca2726faa8b\";}Zend_Form_Element_Hash_salt_navigation_csrf|a:1:{s:4:\"hash\";s:32:\"e38dabeaad8368a742e3251988bc6cfa\";}');
/*!40000 ALTER TABLE `kalevala_sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kalevala_simple_pages_pages`
--

DROP TABLE IF EXISTS `kalevala_simple_pages_pages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `kalevala_simple_pages_pages` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `modified_by_user_id` int(10) unsigned NOT NULL,
  `created_by_user_id` int(10) unsigned NOT NULL,
  `is_published` tinyint(1) NOT NULL,
  `title` tinytext COLLATE utf8_unicode_ci NOT NULL,
  `slug` tinytext COLLATE utf8_unicode_ci NOT NULL,
  `text` mediumtext COLLATE utf8_unicode_ci,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `inserted` timestamp NOT NULL DEFAULT '1999-12-31 22:00:00',
  `order` int(10) unsigned NOT NULL,
  `parent_id` int(10) unsigned NOT NULL,
  `template` tinytext COLLATE utf8_unicode_ci NOT NULL,
  `use_tiny_mce` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `is_published` (`is_published`),
  KEY `inserted` (`inserted`),
  KEY `updated` (`updated`),
  KEY `created_by_user_id` (`created_by_user_id`),
  KEY `modified_by_user_id` (`modified_by_user_id`),
  KEY `order` (`order`),
  KEY `parent_id` (`parent_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kalevala_simple_pages_pages`
--

LOCK TABLES `kalevala_simple_pages_pages` WRITE;
/*!40000 ALTER TABLE `kalevala_simple_pages_pages` DISABLE KEYS */;
INSERT INTO `kalevala_simple_pages_pages` VALUES (1,1,1,1,'About','about','<p>This is an example page. Feel free to replace this content, or delete the page and start from scratch.</p>','2017-11-28 10:38:39','2017-11-28 10:38:39',0,0,'',0);
/*!40000 ALTER TABLE `kalevala_simple_pages_pages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kalevala_solr_search_excludes`
--

DROP TABLE IF EXISTS `kalevala_solr_search_excludes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `kalevala_solr_search_excludes` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `collection_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kalevala_solr_search_excludes`
--

LOCK TABLES `kalevala_solr_search_excludes` WRITE;
/*!40000 ALTER TABLE `kalevala_solr_search_excludes` DISABLE KEYS */;
/*!40000 ALTER TABLE `kalevala_solr_search_excludes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kalevala_solr_search_fields`
--

DROP TABLE IF EXISTS `kalevala_solr_search_fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `kalevala_solr_search_fields` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `element_id` int(10) unsigned DEFAULT NULL,
  `slug` tinytext COLLATE utf8_unicode_ci NOT NULL,
  `label` tinytext COLLATE utf8_unicode_ci NOT NULL,
  `is_indexed` tinyint(3) unsigned DEFAULT '0',
  `is_facet` tinyint(3) unsigned DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kalevala_solr_search_fields`
--

LOCK TABLES `kalevala_solr_search_fields` WRITE;
/*!40000 ALTER TABLE `kalevala_solr_search_fields` DISABLE KEYS */;
INSERT INTO `kalevala_solr_search_fields` VALUES (1,NULL,'tag','Tag',1,1),(2,NULL,'collection','Kokoelma',1,1),(3,NULL,'itemtype','Aineistotyyppi',1,1),(4,NULL,'resulttype','Result Type',1,1),(5,NULL,'featured','Nostettu etusivulle',1,1),(6,1,'1','Text',NULL,NULL),(7,2,'2','Interviewer',NULL,NULL),(8,3,'3','Interviewee',NULL,NULL),(9,4,'4','Location',NULL,NULL),(10,5,'5','Transcription',NULL,NULL),(11,6,'6','Local URL',NULL,NULL),(12,7,'7','Original Format',NULL,NULL),(13,10,'10','Physical Dimensions',NULL,NULL),(14,11,'11','Duration',NULL,NULL),(15,12,'12','Compression',NULL,NULL),(16,13,'13','Producer',NULL,NULL),(17,14,'14','Director',NULL,NULL),(18,15,'15','Bit Rate/Frequency',NULL,NULL),(19,16,'16','Time Summary',NULL,NULL),(20,17,'17','Email Body',NULL,NULL),(21,18,'18','Subject Line',NULL,NULL),(22,19,'19','From',NULL,NULL),(23,20,'20','To',NULL,NULL),(24,21,'21','CC',NULL,NULL),(25,22,'22','BCC',NULL,NULL),(26,23,'23','Number of Attachments',NULL,NULL),(27,24,'24','Standards',NULL,NULL),(28,25,'25','Objectives',NULL,NULL),(29,26,'26','Materials',NULL,NULL),(30,27,'27','Lesson Plan Text',NULL,NULL),(31,28,'28','URL',NULL,NULL),(32,29,'29','Event Type',NULL,NULL),(33,30,'30','Participants',NULL,NULL),(34,31,'31','Birth Date',NULL,NULL),(35,32,'32','Birthplace',NULL,NULL),(36,33,'33','Death Date',NULL,NULL),(37,34,'34','Occupation',NULL,NULL),(38,35,'35','Biographical Text',NULL,NULL),(39,36,'36','Bibliography',NULL,NULL),(40,37,'37','Contributor',NULL,NULL),(41,38,'38','Coverage',NULL,NULL),(42,39,'39','Creator',NULL,NULL),(43,40,'40','Date',NULL,NULL),(44,41,'41','Description',1,NULL),(45,42,'42','Format',NULL,NULL),(46,43,'43','Identifier',NULL,NULL),(47,44,'44','Language',NULL,NULL),(48,45,'45','Publisher',NULL,NULL),(49,46,'46','Relation',NULL,NULL),(50,47,'47','Rights',NULL,NULL),(51,48,'48','Source',NULL,NULL),(52,49,'49','Subject',NULL,NULL),(53,50,'50','Title',1,NULL),(54,51,'51','Type',NULL,NULL);
/*!40000 ALTER TABLE `kalevala_solr_search_fields` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kalevala_tags`
--

DROP TABLE IF EXISTS `kalevala_tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `kalevala_tags` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kalevala_tags`
--

LOCK TABLES `kalevala_tags` WRITE;
/*!40000 ALTER TABLE `kalevala_tags` DISABLE KEYS */;
/*!40000 ALTER TABLE `kalevala_tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kalevala_users`
--

DROP TABLE IF EXISTS `kalevala_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `kalevala_users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `name` text COLLATE utf8_unicode_ci NOT NULL,
  `email` text COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(40) COLLATE utf8_unicode_ci DEFAULT NULL,
  `salt` varchar(16) COLLATE utf8_unicode_ci DEFAULT NULL,
  `active` tinyint(4) NOT NULL,
  `role` varchar(40) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'default',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  KEY `active_idx` (`active`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kalevala_users`
--

LOCK TABLES `kalevala_users` WRITE;
/*!40000 ALTER TABLE `kalevala_users` DISABLE KEYS */;
INSERT INTO `kalevala_users` VALUES (1,'maniku','Super User','mr.wisty@gmail.com','2ee2776ff5386f7ca9d69481812ab98abf036c15','21482fe3aa248390',1,'super');
/*!40000 ALTER TABLE `kalevala_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kalevala_users_activations`
--

DROP TABLE IF EXISTS `kalevala_users_activations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `kalevala_users_activations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `url` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `added` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kalevala_users_activations`
--

LOCK TABLES `kalevala_users_activations` WRITE;
/*!40000 ALTER TABLE `kalevala_users_activations` DISABLE KEYS */;
/*!40000 ALTER TABLE `kalevala_users_activations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-11-28 14:47:38
