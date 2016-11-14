CREATE DATABASE FoodAllergyDB;

USE FoodAllergyDB;

CREATE TABLE User 
(
    UserNo INT NOT NULL AUTO_INCREMENT,
    FirstName varchar(20) NOT NULL,
   LastName varchar(25) NOT NULL,
   UserID varchar(50) NOT NULL,
   Password varchar(20) NOT NULL,
    PRIMARY KEY (UserNo)
);

CREATE TABLE Allergy 
(
    AllergyNo INT NOT NULL AUTO_INCREMENT,
    Category varchar(20) NOT NULL,
   FoodAllergy varchar(30) NOT NULL,
    PRIMARY KEY (AllergyNo)
);

CREATE TABLE AllergyCheckBox
(
    UserNo INT NOT NULL AUTO_INCREMENT,
    AllergyNo INT NOT NULL,
    AllergyCheckbox boolean,
    PRIMARY KEY (UserNo),
    FOREIGN KEY (AllergyNo) REFERENCES Allergy (AllergyNo)
);

CREATE TABLE RecipeCategory
(
    CategoryID INT NOT NULL AUTO_INCREMENT,
   RecipeCategory varchar(30) NOT NULL,
    PRIMARY KEY (CategoryID)
);

CREATE TABLE Recipe
(
    RecipeNo INT NOT NULL AUTO_INCREMENT,
   RecipeName varchar(50) NOT NULL,
   URL varchar(80) NOT NULL,
   CategoryID INT NOT NULL,
    AllergyNo INT NOT NULL,
    PRIMARY KEY (RecipeNo),
   FOREIGN KEY (CategoryID) REFERENCES RecipeCategory (CategoryID),
    FOREIGN KEY (AllergyNo) REFERENCES Allergy (AllergyNo)
);