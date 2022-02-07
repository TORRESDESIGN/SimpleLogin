//data connection pool
const pool = require('../models/database');
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {
	try {
		const {user_name, password} = req.body;
	    const hashedPassword = await bcrypt.hash(password, 10);
	    console.log(hashedPassword);

	    let sql = `SELECT * FROM userdb WHERE (user_name = ?)`;

	    let result = await pool.query(sql, [user_name]);
	    
	    console.log("data: ", result[0]);

	    const user = await result.find( user => user['user_name'] === user_name);
    	if (user == null) {
      		return res.status(400).send('Cannot find user');
    	}

    	const isValidPsw = await bcrypt.compare(password, user['password']);
	    if (!isValidPsw) {
	      console.log("same?  : ", isValidPsw);
	      return res.status(400).send('Incrorrect Pasword Comrade');
	    }
	     
	    res.status(200).send("Success Comrad!");

    } catch (error) {
		res.status(400).send(error.message);
	}
	
}//module.export end