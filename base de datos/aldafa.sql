-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-07-2022 a las 01:45:21
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `aldafa`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `nTrabajador` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `fechaEntrada` date NOT NULL,
  `privilegios` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`nTrabajador`, `nombre`, `fechaEntrada`, `privilegios`) VALUES
(11, 'Javier', '2022-07-08', 'Administrador'),
(34, 'Enrique', '2022-07-20', 'Root'),
(100, 'Roberto', '2013-07-12', 'Sistemas\r\nRoot\r\nRh'),
(101, 'Gerardo', '2014-08-25', 'Contabilidad\r\nAdmin'),
(102, 'Maria', '2015-08-03', 'Sistemas\r\nRH'),
(103, 'Mariana', '2017-05-05', 'Root\r\nAdministrador'),
(104, 'Angel', '2018-09-17', 'Contabilidad'),
(105, 'Guadalupe', '2019-08-19', 'RH\r\nSistemas'),
(106, 'Rocio', '2020-07-20', 'root'),
(107, 'Santiago', '2020-07-27', 'Sistemas'),
(109, 'Andres', '2022-07-25', 'Sistemas'),
(350, 'busta Rhymes', '2022-07-20', 'Root');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`nTrabajador`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
