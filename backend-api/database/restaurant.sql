-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 11, 2024 lúc 04:16 AM
-- Phiên bản máy phục vụ: 10.4.32-MariaDB
-- Phiên bản PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `restaurant`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `food`
--

CREATE TABLE `food` (
  `food_id` int(10) UNSIGNED NOT NULL,
  `food_name` varchar(255) DEFAULT NULL,
  `food_price` varchar(255) DEFAULT NULL,
  `food_discount` varchar(255) DEFAULT NULL,
  `food_desc` varchar(255) DEFAULT NULL,
  `food_status` varchar(255) DEFAULT NULL,
  `food_type` varchar(255) DEFAULT NULL,
  `food_src` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `food`
--

INSERT INTO `food` (`food_id`, `food_name`, `food_price`, `food_discount`, `food_desc`, `food_status`, `food_type`, `food_src`) VALUES
(93, 'Banh Tieu', '15000', '300', 'Crispy Vietnamese donut with a sweet and fluffy texture.', 'available', 'snack', 'uploads/banhtieu.jpg'),
(94, 'Pho Bo', '40000', '5000', 'Traditional beef pho with savory broth and tender noodles.', 'available', 'main', 'uploads/phobo.jpg'),
(95, 'Bun Cha', '35000', '2000', 'Grilled pork served with vermicelli noodles and tangy dipping sauce.', 'available', 'main', 'uploads/buncha.jpg'),
(96, 'Banh Mi', '20000', '1000', 'Crispy Vietnamese baguette sandwich filled with pork, pate, and veggies.', 'available', 'snack', 'uploads/banhmi.jpg'),
(97, 'Goi Cuon', '25000', '500', 'Fresh spring rolls with shrimp, pork, vermicelli, and herbs wrapped in rice paper.', 'available', 'snack', 'uploads/goicuon.jpg'),
(98, 'Com Tam', '45000', '3000', 'Broken rice with grilled pork chop, fried egg, and pickled vegetables.', 'available', 'main', 'uploads/comtam.jpg'),
(99, 'Banh Xeo', '30000', '1000', 'Vietnamese crispy pancake filled with shrimp, pork, and bean sprouts.', 'available', 'main', 'uploads/banhxeo.jpg'),
(100, 'Cha Gio', '18000', '500', 'Fried spring rolls stuffed with ground pork, shrimp, and vegetables.', 'available', 'snack', 'uploads/chagio.jpg'),
(101, 'Hu Tieu', '35000', '2000', 'Rice noodle soup with shrimp, pork, and a light, savory broth.', 'available', 'main', 'uploads/hutieu.jpg'),
(102, 'Bun Bo Hue', '40000', '3000', 'Spicy beef noodle soup from Hue, rich in flavor with lemongrass and chili.', 'available', 'main', 'uploads/bunbohue.jpg'),
(103, 'Mi Quang', '38000', '1500', 'Turmeric-infused noodles with pork, shrimp, peanuts, and fresh herbs.', 'available', 'main', 'uploads/miquang.jpg'),
(104, 'Ca Kho To', '50000', '4000', 'Braised fish in a clay pot with caramelized sauce and black pepper.', 'available', 'main', 'uploads/cakhoto.jpg'),
(105, 'Banh Cuon', '25000', '1000', 'Steamed rice rolls filled with minced pork and mushrooms, served with fish sauce.', 'available', 'snack', 'uploads/banhcuon.jpg'),
(106, 'Xoi Man', '20000', '500', 'Savory sticky rice topped with pork floss, sausage, and quail egg.', 'available', 'snack', 'uploads/xoiman.jpg'),
(107, 'Lau Thai', '70000', '5000', 'Spicy Thai-style hotpot with seafood, mushrooms, and vegetables.', 'available', 'main', 'uploads/laubai.jpg'),
(108, 'Ca Phe Trung', '30000', '1000', 'Vietnamese egg coffee with creamy whipped egg yolk and rich espresso.', 'available', 'beverage', 'uploads/caphetrung.jpg'),
(109, 'Che Ba Mau', '18000', '500', 'Colorful three-layered dessert with beans, jelly, and coconut milk.', 'available', 'dessert', 'uploads/chebamau.jpg'),
(110, 'Sua Dau Nanh', '10000', '500', 'Fresh soybean milk, a healthy and popular drink in Vietnam.', 'available', 'beverage', 'uploads/suadaunanh.jpg'),
(111, 'Nem Nuong', '35000', '1500', 'Grilled pork skewers served with fresh veggies and dipping sauce.', 'available', 'main', 'uploads/nemnuong.jpg'),
(112, 'Bo La Lot', '40000', '2000', 'Grilled beef wrapped in betel leaves, full of fragrant herbs and spices.', 'available', 'main', 'uploads/bolalot.jpg'),
(113, 'nem', '20000', '1000', 'nem', 'active', 'dessert', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `knex_migrations`
--

CREATE TABLE `knex_migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `batch` int(11) DEFAULT NULL,
  `migration_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `knex_migrations`
--

INSERT INTO `knex_migrations` (`id`, `name`, `batch`, `migration_time`) VALUES
(1, '20240910134901_create_food_table.js', 1, '2024-09-10 13:50:09'),
(2, '20240921142250_create_user_table.js', 2, '2024-09-21 14:26:15'),
(3, '20241004032639_create_promotions_table.js', 3, '2024-10-04 03:27:40'),
(4, '20241004134229_create_table_info.js', 4, '2024-10-04 13:46:50'),
(6, '20241004152012_create_orders_table.js', 5, '2024-10-04 15:44:59');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `knex_migrations_lock`
--

CREATE TABLE `knex_migrations_lock` (
  `index` int(10) UNSIGNED NOT NULL,
  `is_locked` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `knex_migrations_lock`
--

INSERT INTO `knex_migrations_lock` (`index`, `is_locked`) VALUES
(1, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `order_id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `table_number` varchar(255) NOT NULL,
  `order_total` decimal(10,2) NOT NULL,
  `order_status` enum('pending','completed','cancelled') DEFAULT 'pending',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `food_id` int(10) UNSIGNED NOT NULL,
  `food_name` varchar(255) NOT NULL,
  `order_quantity` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `orders`
--

INSERT INTO `orders` (`order_id`, `user_id`, `table_number`, `order_total`, `order_status`, `created_at`, `updated_at`, `food_id`, `food_name`, `order_quantity`) VALUES
(14, 1, '4', 20.00, 'pending', '2024-10-05 04:03:19', '2024-10-05 04:03:19', 1, 'Hu t1i2eu', '2'),
(15, 1, '4', 20.00, 'pending', '2024-10-05 04:12:13', '2024-10-05 04:12:13', 1, 'Hu t1i2eu', '2'),
(16, 18, '1', 35000.00, 'pending', '2024-10-05 04:41:46', '2024-10-05 04:41:46', 74, 'Pho Bo', '1'),
(17, 18, '3', 35000.00, 'pending', '2024-10-05 05:03:26', '2024-10-05 05:03:26', 74, 'Pho Bo', '1'),
(18, 18, '2', 35000.00, 'pending', '2024-10-05 05:04:02', '2024-10-05 05:04:02', 74, 'Pho Bo', '1'),
(19, 18, '4', 35000.00, 'pending', '2024-10-05 05:08:13', '2024-10-05 05:08:13', 74, 'Pho Bo', '1'),
(22, 18, '1', 28000.00, 'pending', '2024-10-05 05:59:47', '2024-10-05 05:59:47', 74, 'Pho Bo', '1'),
(23, 22, '1', 28000.00, 'pending', '2024-10-05 06:21:54', '2024-10-05 06:21:54', 94, 'Pho Bo', '1'),
(24, 22, '2', 28000.00, 'pending', '2024-10-06 15:40:15', '2024-10-06 15:40:15', 94, 'Pho Bo', '1'),
(27, 22, '5', 35000.00, 'pending', '2024-10-07 07:28:59', '2024-10-07 07:28:59', 94, 'Pho Bo', '1'),
(28, 75, '2', 2.00, 'pending', '2024-10-09 04:07:11', '2024-10-09 04:07:11', 20, 'Pho Bo', '2'),
(29, 75, '2', 2.00, 'pending', '2024-10-09 04:10:58', '2024-10-09 04:10:58', 20, 'Pho Bo', '2'),
(30, 22, '1', 35000.00, 'pending', '2024-10-09 08:15:43', '2024-10-09 08:15:43', 94, 'Pho Bo', '1'),
(31, 22, '1', 35000.00, 'pending', '2024-10-09 08:25:14', '2024-10-09 08:25:14', 94, 'Pho Bo', '1');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `promotions`
--

CREATE TABLE `promotions` (
  `promo_id` int(10) UNSIGNED NOT NULL,
  `promo_code` varchar(255) NOT NULL,
  `discount_percentage` decimal(5,2) NOT NULL,
  `start_date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  `status` enum('active','inactive') DEFAULT 'active',
  `description` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `promotions`
--

INSERT INTO `promotions` (`promo_id`, `promo_code`, `discount_percentage`, `start_date`, `end_date`, `status`, `description`, `created_at`, `updated_at`) VALUES
(11, 'SUMMER2024', 20.00, '2024-06-01 00:00:00', '2024-08-31 23:59:59', 'active', 'Summer promotion with 20% off on all items.', '2024-10-05 06:10:00', '2024-10-05 06:10:00'),
(12, 'WINTER2024', 15.00, '2024-12-01 00:00:00', '2024-12-31 23:59:59', 'active', 'Winter promotion with 15% off on selected items.', '2024-10-05 06:10:00', '2024-10-05 06:10:00'),
(13, 'BLACKFRIDAY', 50.00, '2024-11-25 00:00:00', '2024-11-25 23:59:59', 'active', 'Black Friday special: 50% off on everything!', '2024-10-05 06:10:00', '2024-10-05 06:10:00'),
(14, 'NEWYEAR2025', 25.00, '2024-12-31 00:00:00', '2025-01-02 23:59:59', 'active', 'New Year promotion with 25% off site-wide.', '2024-10-05 06:10:00', '2024-10-05 06:10:00'),
(15, 'SPRINGSALE', 10.00, '2024-04-01 00:00:00', '2024-04-30 23:59:59', 'active', 'Spring sale: 10% off on all items.', '2024-10-05 06:10:00', '2024-10-05 06:10:00'),
(16, 'FALLSALE2024', 30.00, '2024-09-01 00:00:00', '2024-09-30 23:59:59', 'active', 'Fall sale: 30% off on selected items.', '2024-10-05 06:10:00', '2024-10-05 06:10:00'),
(17, 'VALENTINE2024', 20.00, '2024-02-14 00:00:00', '2025-02-19 23:59:59', 'active', 'Valentine\'s Day special: 20% off on all gifts.', '2024-10-05 06:10:00', '2024-10-05 06:10:00'),
(18, 'CYBERMONDAY', 40.00, '2024-12-02 00:00:00', '2024-12-02 23:59:59', 'active', 'Cyber Monday: 40% off on all electronics.', '2024-10-05 06:10:00', '2024-10-05 06:10:00'),
(19, 'BACKTOSCHOOL', 15.00, '2024-08-01 00:00:00', '2024-08-31 23:59:59', 'active', 'Back to School: 15% off on school supplies.', '2024-10-05 06:10:00', '2024-10-05 06:10:00'),
(20, 'HALLOWEEN2024', 35.00, '2024-10-31 00:00:00', '2024-10-31 23:59:59', 'active', 'Halloween special: 35% off on costumes and candies.', '2024-10-05 06:10:00', '2024-10-05 06:10:00'),
(21, 'LABORDAY', 18.00, '2024-09-02 00:00:00', '2024-09-02 23:59:59', 'active', 'Labor Day: 18% off on all items.', '2024-10-05 06:10:00', '2024-10-05 06:10:00'),
(22, 'sdfgdfg', 20.00, '2024-10-05 13:17:00', '2024-10-05 13:17:00', 'active', 'mã giảm cho tết 2025', '2024-10-05 06:17:35', '2024-10-05 06:17:35');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `table_info`
--

CREATE TABLE `table_info` (
  `table_id` int(10) UNSIGNED NOT NULL,
  `table_number` varchar(255) NOT NULL,
  `table_status` enum('available','occupied') DEFAULT 'available',
  `table_capacity` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `table_info`
--

INSERT INTO `table_info` (`table_id`, `table_number`, `table_status`, `table_capacity`, `created_at`, `updated_at`) VALUES
(6, '1', 'available', 4, '2024-10-05 06:10:00', '2024-10-09 08:25:04'),
(7, '2', 'occupied', 2, '2024-10-05 06:10:00', '2024-10-06 15:40:15'),
(8, '3', 'occupied', 6, '2024-10-05 06:10:00', '2024-10-05 06:10:00'),
(9, '4', 'occupied', 4, '2024-10-05 06:10:00', '2024-10-07 05:56:10'),
(11, '5', 'occupied', 5, '2024-10-07 07:22:00', '2024-10-07 07:28:59'),
(12, '5', 'occupied', 5, '2024-10-07 07:22:01', '2024-10-07 07:28:59');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `user_id` int(10) UNSIGNED NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `user_phone` varchar(255) DEFAULT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_birth` varchar(255) DEFAULT NULL,
  `user_gender` varchar(255) DEFAULT NULL,
  `user_type` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_email`, `user_phone`, `user_password`, `user_birth`, `user_gender`, `user_type`) VALUES
(19, 'John Doe', 'john.doe@example.com', '123456789', 'password', '1990-01-01', 'Male', 1),
(20, 'Jane Smith', 'jane.smith@example.com', '987654321', 'securepassword', '1992-05-12', 'Female', 1),
(21, 'Admin User', 'admin@example.com', '555444333', 'adminpassword', '1985-10-20', 'Female', 2),
(22, 'Justin', 'pdanh2335@gmail.com', '12345678', '$2b$10$hegpPgZRnRkTYuJgnhXws.dNPcpUwi49lXAlp4Kt4To99xqq0.u8G', '2024-10-11', 'Nam', 1),
(23, 'Diddy', 'diddy@gmail.com', '123456789', '$2b$10$YLQG89lq7Pqz6DWoXtqQhOoeZDB3MbO2jJoS7HJVlKEtWUarHkrli', '2024-10-07', 'Male', 1),
(24, 'danh', 'danhB2111917@gmail.com', '12345678', '$2b$10$NJE8XMT4SBcqo2qFxLJ25.GlaABTFMFJYRXgcL99kMaQsioD8zDLW', '2024-10-09', 'Male', 1);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `food`
--
ALTER TABLE `food`
  ADD PRIMARY KEY (`food_id`);

--
-- Chỉ mục cho bảng `knex_migrations`
--
ALTER TABLE `knex_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `knex_migrations_lock`
--
ALTER TABLE `knex_migrations_lock`
  ADD PRIMARY KEY (`index`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`);

--
-- Chỉ mục cho bảng `promotions`
--
ALTER TABLE `promotions`
  ADD PRIMARY KEY (`promo_id`);

--
-- Chỉ mục cho bảng `table_info`
--
ALTER TABLE `table_info`
  ADD PRIMARY KEY (`table_id`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `user_user_email_unique` (`user_email`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `food`
--
ALTER TABLE `food`
  MODIFY `food_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=117;

--
-- AUTO_INCREMENT cho bảng `knex_migrations`
--
ALTER TABLE `knex_migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `knex_migrations_lock`
--
ALTER TABLE `knex_migrations_lock`
  MODIFY `index` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT cho bảng `promotions`
--
ALTER TABLE `promotions`
  MODIFY `promo_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT cho bảng `table_info`
--
ALTER TABLE `table_info`
  MODIFY `table_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
