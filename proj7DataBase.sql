-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 06, 2023 at 09:40 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `proj7DataBase`
--

-- --------------------------------------------------------

--
-- Table structure for table `contactMessage`
--

CREATE TABLE `contactMessage` (
  `contactID` int(11) NOT NULL,
  `cxUserID` int(11) NOT NULL,
  `cxFullName` text NOT NULL,
  `cxEmail` text NOT NULL,
  `cxPPhone` text NOT NULL,
  `cxContactMessage` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `cxUserID` int(11) NOT NULL,
  `cxFirstName` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `cxLastName` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `cxEmail` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `cxPPhone` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `cxBPhone` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `cxAddress` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `cxCity` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `cxProv` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `cxCountry` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `cxPostalCode` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `cxPassword` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contactMessage`
--
ALTER TABLE `contactMessage`
  ADD PRIMARY KEY (`contactID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`cxUserID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contactMessage`
--
ALTER TABLE `contactMessage`
  MODIFY `contactID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `cxUserID` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
