CREATE TABLE locations (
    id INTEGER  NOT NULL AUTO_INCREMENT,
    name    VARCHAR(75) NOT NULL,
    address VARCHAR(128) NOT NULL,
    phoneNumber VARCHAR(12) NOT NULL,
    latitude DOUBLE,
    longitude DOUBLE,
    PRIMARY KEY (id)
);