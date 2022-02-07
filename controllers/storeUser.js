//data connection pool
const pool = require('../models/database');
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {
	try {
		const {user_name, password, email} = req.body;
	    const hashedPassword = await bcrypt.hash(password, 10);
	    console.log(hashedPassword);

	    let sql = `INSERT INTO userdb (user_name, password, email)
	    SELECT ?, ?, ? 
	    WHERE NOT EXISTS (SELECT 1 FROM userdb WHERE email = ? OR user_name = ?);
	    SHOW WARNINGS;`;

	    let result = await pool.query(sql, [user_name, hashedPassword, email, email, user_name]);
	    
	    console.log(result);
	    console.log("the id: ", result[0].insertId);
	    res.status(200).send("Success Comrad!");

	    } catch (error) {
		res.status(400).send(error.message);
	}
	
}//module.export end