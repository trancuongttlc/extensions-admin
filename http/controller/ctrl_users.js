import bcrypt from 'bcrypt';
import {Users, File} from '../../model';

class ExtensionsController {

	async register(req, res) {
		try {
			let {email, password} = req.params;
			let validEmail = await Users.find({email});

			if (!validEmail) {
				res.json({status: false, data: [], messge: "Email is valid"});
				return;
			}

			let bcryptPassword = await new Promise((resolve, reject) => {
			    bcrypt.genSalt(password, function(err, hash) {
			      	if (err) reject(err)
			      	resolve(hash)
			    });
			})

			let result = await Users.create({"email": email, "password": bcryptPassword});
			res.json({status: false, data: result, messge: "Register success"});
		} catch(e) {
			res.json({status: false, data: [], messge: 'Error '+ e.message});
		}
	}

	async login(req, res) {


	}

}
export default new ExtensionsController();
