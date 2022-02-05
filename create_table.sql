CREATE TABLE demo_user.userdb (
	id INT auto_increment NOT NULL,
	user_name varchar(15) NOT NULL,
	password CHAR NOT NULL,
	email varchar(320) NULL,
	created_at DATETIME DEFAULT CURRENT_TIMESTAMP NULL,
	CONSTRAINT userdb_pk PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_general_ci;
