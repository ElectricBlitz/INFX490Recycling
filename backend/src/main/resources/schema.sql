CREATE TABLE locations (
    id INTEGER  NOT NULL AUTO_INCREMENT,
    name    VARCHAR(50) NOT NULL,
    address VARCHAR(128) NOT NULL,
    phoneNumber VARCHAR(12) NOT NULL,
    latitude DECIMAL,
    longitude DECIMAL,
    PRIMARY KEY (id)
);