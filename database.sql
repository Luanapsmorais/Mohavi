-- MySQL Script generated by MySQL Workbench
-- qua 25 mai 2022 22:14:58
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`alunos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`alunos` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(30) NOT NULL,
  `sobrenome` VARCHAR(30) NOT NULL,
  `matricula` INT NOT NULL,
  `email` VARCHAR(25) NOT NULL,
  `telefone` VARCHAR(15) NOT NULL,
  `data_nascimento` DATE NOT NULL,
  `altura` DECIMAL(3,2) NOT NULL,
  `peso` DECIMAL(5,2) NOT NULL,
  `cadastro_dt` DATETIME NULL,
  `alteracao_dt` DATETIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`personais`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`personais` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(30) NOT NULL,
  `sobrenome` VARCHAR(30) NOT NULL,
  `especialidade` VARCHAR(30) NOT NULL,
  `registro_cresf` INT NOT NULL,
  `cadastro_dt` DATETIME NULL,
  `alteracao_dt` DATETIME NULL,
  `telefone` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`turnos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`turnos` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`aulas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`aulas` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `cadastro_dt` DATETIME NULL,
  `alteracao_dt` DATETIME NULL,
  `turnos_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_aulas_turnos1_idx` (`turnos_id` ASC) VISIBLE,
  CONSTRAINT `fk_aulas_turnos1`
    FOREIGN KEY (`turnos_id`)
    REFERENCES `mydb`.`turnos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`turmas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`turmas` (
  `aulas_id` INT UNSIGNED NOT NULL,
  `personais_id` INT UNSIGNED NOT NULL,
  `alunos_id` INT UNSIGNED NOT NULL,
  INDEX `fk_turmas_aulas1_idx` (`aulas_id` ASC) VISIBLE,
  INDEX `fk_turmas_personais1_idx` (`personais_id` ASC) VISIBLE,
  INDEX `fk_turmas_alunos1_idx` (`alunos_id` ASC) VISIBLE,
  CONSTRAINT `fk_turmas_aulas1`
    FOREIGN KEY (`aulas_id`)
    REFERENCES `mydb`.`aulas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_turmas_personais1`
    FOREIGN KEY (`personais_id`)
    REFERENCES `mydb`.`personais` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_turmas_alunos1`
    FOREIGN KEY (`alunos_id`)
    REFERENCES `mydb`.`alunos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
