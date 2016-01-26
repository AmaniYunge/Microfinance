-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 26, 2016 at 02:39 PM
-- Server version: 5.5.43-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `microfinance`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE IF NOT EXISTS `accounts` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `value` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `created_by` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=2 ;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`id`, `type`, `name`, `value`, `date`, `created_by`, `created_at`, `updated_at`) VALUES
(1, 'Expenses', 'Umeme', '200000', '2015-04-30', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `applicants`
--

CREATE TABLE IF NOT EXISTS `applicants` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `middle_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `gender` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `birth_date` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `postal_address` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `marital_status` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `residence` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `family_size` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_by` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=25 ;

--
-- Dumping data for table `applicants`
--

INSERT INTO `applicants` (`id`, `first_name`, `middle_name`, `last_name`, `gender`, `birth_date`, `phone`, `postal_address`, `marital_status`, `residence`, `family_size`, `created_by`, `created_at`, `updated_at`) VALUES
(21, 'Leonard', 'Constantine', 'Mpande', 'Male', '1988-08-27', '0654298240', '567', 'Single', 'Dar es salaam', '5', 0, '2015-11-21 03:38:42', '2015-11-21 03:38:42'),
(22, 'Isack', 'Nicodemus', 'Maganga', 'Male', '1989-01-27', '0654298240', '4657', 'Single', 'Bagamoyo', '1', 0, '2015-11-23 08:54:42', '2015-11-23 08:54:42'),
(23, 'Nathan', 'Nasha', 'Kitego', 'Male', '1990-04-02', '0654785678', '78967', 'Single', 'Msata', '1', 0, '2015-11-24 17:04:03', '2015-11-24 17:04:03'),
(24, 'James', 'Joseph', 'Joas', 'Male', '2015-12-09', '0765874212', '89970', 'Married', 'Arusha', '5', 0, '2015-12-06 12:45:32', '2015-12-06 12:45:32');

-- --------------------------------------------------------

--
-- Table structure for table `applications`
--

CREATE TABLE IF NOT EXISTS `applications` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `applicant_id` int(11) NOT NULL,
  `loan_id` int(11) NOT NULL,
  `sponsor_id` int(11) NOT NULL,
  `applied_amount` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `amount_granted` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `application_fee` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `comments` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `collateral` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `collateral_value` int(11) DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=13 ;

--
-- Dumping data for table `applications`
--

INSERT INTO `applications` (`id`, `applicant_id`, `loan_id`, `sponsor_id`, `applied_amount`, `amount_granted`, `application_fee`, `status`, `comments`, `collateral`, `collateral_value`, `created_by`, `created_at`, `updated_at`) VALUES
(7, 21, 2, 13, '5000000', NULL, '10000', 'granted', 'No comments', 'Car ,Toyota IST 2015', 7000000, '1', '2015-11-21 03:46:18', '2015-11-24 16:50:38'),
(8, 22, 2, 19, '3000000', NULL, '50000', 'granted', 'none', 'gari', 35000, '1', '2015-11-23 09:05:34', '2015-11-23 12:08:03'),
(11, 23, 2, 22, '9000000', NULL, '50000', 'granted', 'none', 'car', 12000, '1', '2015-11-24 17:28:08', '2015-11-24 17:29:47'),
(12, 24, 2, 23, '9800000', NULL, '6700', 'pending', 'none', 'House', 80000000, '1', '2015-12-06 12:47:32', '2015-12-06 12:47:32');

-- --------------------------------------------------------

--
-- Table structure for table `application_details`
--

CREATE TABLE IF NOT EXISTS `application_details` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `dafault_user` int(11) NOT NULL,
  `application_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `loan_type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=2 ;

--
-- Dumping data for table `application_details`
--

INSERT INTO `application_details` (`id`, `dafault_user`, `application_name`, `loan_type`, `created_at`, `updated_at`) VALUES
(1, 1, 'Microfinance', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `assets`
--

CREATE TABLE IF NOT EXISTS `assets` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `value` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `date` datetime NOT NULL,
  `created_by` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=14 ;

--
-- Dumping data for table `assets`
--

INSERT INTO `assets` (`id`, `name`, `type`, `value`, `date`, `created_by`, `created_at`, `updated_at`) VALUES
(9, 'Lap Top', 'Fixed Asset', '1000000', '2015-11-21 00:00:00', 0, '2015-11-21 05:13:30', '2015-11-23 06:01:15'),
(10, 'Office Desk', 'Fixed Asset', '50000', '2015-11-26 00:00:00', 0, '2015-11-21 05:14:45', '2015-11-23 06:00:46'),
(12, 'Bank', 'Current Asset', '50000', '2015-11-23 00:00:00', 0, '2015-11-23 06:47:22', '2015-11-23 06:47:22'),
(13, 'Accounts Receivable', 'Current Asset', '15000000', '2015-11-23 00:00:00', 0, '2015-11-23 06:47:44', '2015-11-23 06:47:44');

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE IF NOT EXISTS `company` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `company_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `physiscal_address` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `landline` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `mobile` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `website` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `company_capital` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_by` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=2 ;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`id`, `company_name`, `physiscal_address`, `landline`, `mobile`, `email`, `website`, `company_capital`, `created_by`, `created_at`, `updated_at`) VALUES
(1, 'FLOURISH MICROFINANCING CO.LTD', 'Mbezi Africa Sana', '+255 6786 737 594', '+255 0654 673 739 432', 'innovation@leompande.com', 'www.leompande.com', '1000000', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `company_profit`
--

CREATE TABLE IF NOT EXISTS `company_profit` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `source_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `source_type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `amount` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_by` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=5 ;

--
-- Dumping data for table `company_profit`
--

INSERT INTO `company_profit` (`id`, `source_id`, `source_type`, `amount`, `created_by`, `created_at`, `updated_at`) VALUES
(1, '1', 'Company Start Capital', '200000', '1', '2015-11-01 00:06:04', '0000-00-00 00:00:00'),
(2, '', 'Accumulated Capital', '670000000', '1', '2015-11-20 02:16:15', '2015-12-31 05:19:18'),
(3, '', 'Cash', '45000', '', '2015-11-25 00:21:39', '2015-11-25 00:21:39'),
(4, '', 'Loan', '60000000', '', '2015-11-25 01:16:33', '2015-11-25 01:16:33');

-- --------------------------------------------------------

--
-- Table structure for table `expenses`
--

CREATE TABLE IF NOT EXISTS `expenses` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_by` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=22 ;

--
-- Dumping data for table `expenses`
--

INSERT INTO `expenses` (`id`, `name`, `created_by`, `created_at`, `updated_at`) VALUES
(19, 'Electricity Bills', 0, '2015-11-21 05:16:26', '2015-11-21 05:16:26'),
(20, 'Water Bills', 0, '2015-11-21 05:16:31', '2015-11-21 05:16:31'),
(21, 'Rent', 0, '2015-11-21 05:16:42', '2015-11-21 05:16:42');

-- --------------------------------------------------------

--
-- Table structure for table `financial_transactions`
--

CREATE TABLE IF NOT EXISTS `financial_transactions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `transaction_type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `expens_id` int(11) DEFAULT NULL,
  `liab_id` int(11) DEFAULT NULL,
  `amount` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_by` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=15 ;

--
-- Dumping data for table `financial_transactions`
--

INSERT INTO `financial_transactions` (`id`, `transaction_type`, `expens_id`, `liab_id`, `amount`, `created_by`, `created_at`, `updated_at`) VALUES
(8, 'Expenses', 19, NULL, '5000', '', '2015-11-21 05:17:41', '2015-11-21 05:17:41'),
(9, 'Expenses', 20, NULL, '15000', '', '2015-11-21 05:18:05', '2015-11-21 05:18:05'),
(10, 'Liabilities', NULL, 7, '1500000', '', '2015-11-21 05:18:25', '2015-11-21 05:18:25'),
(11, 'Liabilities', NULL, 7, '89000', '', '2015-12-06 12:43:04', '2015-12-06 12:43:04'),
(12, 'Expenses', 19, NULL, '1000000', '', '2015-12-06 12:43:28', '2015-12-06 12:43:28'),
(13, 'Expenses', 19, NULL, '56000', '', '2016-01-25 15:50:19', '2016-01-25 15:50:19'),
(14, 'Expenses', 19, NULL, '56000', '', '2016-01-25 15:50:21', '2016-01-25 15:50:21');

-- --------------------------------------------------------

--
-- Table structure for table `granted_loans`
--

CREATE TABLE IF NOT EXISTS `granted_loans` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `applicant_id` int(11) NOT NULL,
  `application_id` int(11) NOT NULL,
  `return_interval` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `interval_type` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `loaned_amount` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `profit_percent` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `amount_to_return` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `amount_per_return` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `loan_actual_due_date` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `loan_expected_due_date` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `loan_duration` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=19 ;

--
-- Dumping data for table `granted_loans`
--

INSERT INTO `granted_loans` (`id`, `applicant_id`, `application_id`, `return_interval`, `interval_type`, `loaned_amount`, `profit_percent`, `amount_to_return`, `amount_per_return`, `loan_actual_due_date`, `loan_expected_due_date`, `loan_duration`, `created_by`, `created_at`, `updated_at`) VALUES
(16, 22, 8, '1', 'month', '3000000', NULL, '[1300000,1200000,1100000]', NULL, '2016-03-31', NULL, '3', '1', '2015-11-23 12:08:03', '2015-11-23 12:08:03'),
(17, 21, 7, '1', 'month', '5000000', NULL, '[1500000,1400000,1300000,1200000,1100000]', NULL, '2016-05-31', NULL, '5', '1', '2015-11-24 16:50:38', '2015-11-24 16:50:38'),
(18, 23, 11, '3', 'months', '9000000', NULL, '[3900000,3600000,3300000]', NULL, '2016-08-24', NULL, '9', '1', '2015-11-24 17:29:47', '2015-11-24 17:29:47');

-- --------------------------------------------------------

--
-- Table structure for table `liabilities`
--

CREATE TABLE IF NOT EXISTS `liabilities` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_by` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=8 ;

--
-- Dumping data for table `liabilities`
--

INSERT INTO `liabilities` (`id`, `name`, `created_by`, `created_at`, `updated_at`) VALUES
(7, 'Salaries', 0, '2015-11-21 05:16:14', '2015-11-21 05:16:14');

-- --------------------------------------------------------

--
-- Table structure for table `loans`
--

CREATE TABLE IF NOT EXISTS `loans` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `minimum_amount` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `maximum_amount` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `min_return_time` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `max_return_time` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `profit_percent` int(11) NOT NULL,
  `comments` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `collateral` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_by` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=3 ;

--
-- Dumping data for table `loans`
--

INSERT INTO `loans` (`id`, `name`, `minimum_amount`, `maximum_amount`, `min_return_time`, `max_return_time`, `profit_percent`, `comments`, `collateral`, `created_by`, `created_at`, `updated_at`) VALUES
(2, 'Small Loan', '60000', '500000', '1', '3', 10, 'no comment', 'any', '1', '2015-11-21 04:36:03', '2015-11-21 04:36:03');

-- --------------------------------------------------------

--
-- Table structure for table `loan_returns`
--

CREATE TABLE IF NOT EXISTS `loan_returns` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `application_id` int(11) NOT NULL,
  `applicant_id` int(11) NOT NULL,
  `granted_id` int(11) NOT NULL,
  `amount` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `received_profit` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `next_amount_to_return` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `interval_count` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `comment` text COLLATE utf8_unicode_ci,
  `date` date DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=16 ;

--
-- Dumping data for table `loan_returns`
--

INSERT INTO `loan_returns` (`id`, `application_id`, `applicant_id`, `granted_id`, `amount`, `received_profit`, `next_amount_to_return`, `interval_count`, `comment`, `date`, `created_by`, `created_at`, `updated_at`) VALUES
(4, 8, 22, 16, '1300000', '300000', '1200000', '0', 'none', NULL, '1', '2015-11-23 12:57:48', '2015-11-23 12:57:48'),
(6, 8, 22, 16, '1200000', '200000', '1100000', '1', 'none', NULL, '1', '2015-11-23 13:07:46', '2015-11-23 13:07:46'),
(7, 8, 22, 16, '1100000', '100000', '0', '2', 'none', NULL, '1', '2015-11-24 16:28:21', '2015-11-24 16:28:21'),
(8, 7, 21, 17, '1500000', '500000', '1400000', '0', 'none', NULL, '1', '2015-11-24 16:52:12', '2015-11-24 16:52:12'),
(9, 7, 21, 17, '1400000', '400000', '1300000', '1', 'mome', NULL, '1', '2015-11-24 16:52:50', '2015-11-24 16:52:50'),
(10, 7, 21, 17, '1300000', '300000', '1200000', '2', 'none', NULL, '1', '2015-11-24 16:53:40', '2015-11-24 16:53:40'),
(11, 7, 21, 17, '1200000', '200000', '1100000', '3', 'none', NULL, '1', '2015-11-24 16:54:16', '2015-11-24 16:54:16'),
(12, 7, 21, 17, '1100000', '100000', '0', '4', 'none', NULL, '1', '2015-11-24 16:55:11', '2015-11-24 16:55:11'),
(13, 11, 23, 18, '3900000', '900000', '3600000', '0', 'none', NULL, '1', '2015-11-24 17:30:51', '2015-11-24 17:30:51'),
(14, 11, 23, 18, '3600000', '600000', '3300000', '1', 'none', NULL, '1', '2015-11-24 17:32:04', '2015-11-24 17:32:04'),
(15, 11, 23, 18, '3300000', '300000', '0', '2', 'none', NULL, '1', '2015-11-24 17:33:13', '2015-11-24 17:33:13');

-- --------------------------------------------------------

--
-- Table structure for table `logs`
--

CREATE TABLE IF NOT EXISTS `logs` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `action` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_by` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=2 ;

--
-- Dumping data for table `logs`
--

INSERT INTO `logs` (`id`, `action`, `created_by`, `created_at`, `updated_at`) VALUES
(1, 'add new user', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE IF NOT EXISTS `migrations` (
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`migration`, `batch`) VALUES
('2014_10_12_000000_create_users_table', 1),
('2014_10_12_100000_create_password_resets_table', 1),
('2015_11_13_013132_create_application_details_table', 1),
('2015_11_13_013545_create_company_table', 1),
('2015_11_13_013818_create_expenses_table', 1),
('2015_11_13_014006_create_liabilities_table', 1),
('2015_11_13_014216_create_assets_table', 1),
('2015_11_13_014555_create_applicants_table', 1),
('2015_11_13_014934_create_sponsors_table', 1),
('2015_11_13_015212_create_applications_table', 1),
('2015_11_13_015645_create_loans_table', 1),
('2015_11_13_081417_create_financial_transactions_table', 1),
('2015_11_13_083350_create_company_profit_table', 1),
('2015_11_13_084015_create_logs_table', 1),
('2015_11_13_084403_create_granted_loans_table', 2),
('2015_11_13_084505_create_accounts_table', 2),
('2015_11_13_090235_create_loan_returns_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  KEY `password_resets_email_index` (`email`),
  KEY `password_resets_token_index` (`token`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sponsors`
--

CREATE TABLE IF NOT EXISTS `sponsors` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `middle_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `gender` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `birth_date` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `postal_address` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `residence` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `occupation` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_by` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=24 ;

--
-- Dumping data for table `sponsors`
--

INSERT INTO `sponsors` (`id`, `first_name`, `middle_name`, `last_name`, `gender`, `birth_date`, `phone`, `postal_address`, `residence`, `occupation`, `created_by`, `created_at`, `updated_at`) VALUES
(13, 'Christian', 'Elias', 'Wambura', 'Male', '1986-07-06', '0765 746 343 344', '678', 'Dar es Salaam', 'Lawyer', '', '2015-11-21 03:46:18', '2015-11-21 03:46:18'),
(14, 'lupita', 'chirstopher', 'nyongo', 'Female', '1987-08-09', '47864786', '578', 'kenya', 'actress', '', '2015-11-21 04:39:28', '2015-11-21 04:39:28'),
(15, 'zdfv', 'zdfv', 'zdfv', 'Male', '2015-11-23', 'zdfv', 'zdfv', 'zdfv', 'zdfv', '', '2015-11-21 04:41:25', '2015-11-21 04:41:25'),
(16, 'zdfv', 'zdfv', 'zdfv', 'Male', '2015-11-23', 'zdfv', 'zdfv', 'zdfv', 'zdfv', '', '2015-11-21 04:41:40', '2015-11-21 04:41:40'),
(17, 'cxvb', 'xcv', 'xgb', 'Male', '2015-11-30', 'xgb', 'xfgb', 'x', 'xbg', '', '2015-11-21 04:44:02', '2015-11-21 04:44:02'),
(18, 'zdf', 'zdfb', 'zdfg', 'Male', '2015-11-30', 'zdf', 'zdfg', 'zdfg', 'zdfg', '', '2015-11-21 04:45:34', '2015-11-21 04:45:34'),
(19, 'James', 'Jordan', 'James', 'Male', '2015-11-24', '065478987', '7893', 'Bagamoyo', 'Driver', '', '2015-11-23 09:05:34', '2015-11-23 09:05:34'),
(22, 'Laonard', 'C', 'Mpande', 'Male', '2015-11-24', '89657', '3545', 'Bagamoyo', 'Developer', '', '2015-11-24 17:28:08', '2015-11-24 17:28:08'),
(23, 'Christina', 'Wilhelmo', 'Enock', 'Male', '2015-12-07', '0675738293', '7623', 'Dar es salaam', 'Clerk', '', '2015-12-06 12:47:32', '2015-12-06 12:47:32');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `middle_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `gender` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `birth_date` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `postal_address` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `role` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `created_by` int(11) NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=2 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `middle_name`, `last_name`, `gender`, `birth_date`, `phone`, `postal_address`, `role`, `status`, `email`, `password`, `created_by`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Leonard', 'Constantine', 'Mpande', 'Male', '0000-00-00 00:00:00', '0654 298 240', '7568', 'Admin', 'active', 'leo@gmail.com', 'mpande', 0, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
