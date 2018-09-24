import unzip 	from 'unzip';
import fs 		from 'fs';  
import path 	from'path';
import rimraf 	from'rimraf';
import bcrypt 	from 'bcrypt';
import jwt 		from'jsonwebtoken';

const exec = require('child_process').exec;

import {Users, File} from '../../model';

class ExtensionsController {

	async detailPage(req, res) {
		try {
			let {_id} = req.params;
			let result = await File.findById({_id});
			res.json({status: true, data: result, messge: "Get file success"});
		} catch(e) {
			res.json({status: false, data: [], messge: 'Error '+ e.message});
		}
	}

	async showAllFile(req, res) {
		try {
			let result = await File.find();
			res.json({status: true, data: result, messge: "Get all file success"});
		} catch(e) {
			res.json({status: false, data: [], messge: 'Error '+ e.message});
		}
	}

	async createNewUser(req, res) {
		try {
			let email = req.body.email;
			let validUsers = await Users.findOne({email});
			if (validUsers) {
				res.json({status: false, data: validUsers, messge: "Email already exists"});
				return;
			}
			let result = await Users.create({email});
			res.json({status: true, data: result, messge: "Register account success"});
		} catch(e) {
			res.json({status: false, data: [], messge: 'Error '+ e.message});
		}
	}

	async uploadFile(req, res) {
		try {
			let {tag, link, text} = req.body;
			let file     = req.file ? req.file.filename : '';
			let result   = await File.create({file, text, tag, link});
			if (req.file) {
				let pathZip   = path.join(__dirname, '../../public/'+result.file);
				fs.createReadStream(req.file.path).pipe(unzip.Extract({ path: './unzip/'+result._id })).on('finish', function() {
					rimraf(pathZip, function(e) {
						console.log("SUCCESS");
					});
				})
			}
			res.json({status: true, data: result, messge: "Upload file success"});
		} catch(e) {
			res.json({status: false, data: [], messge: 'Error '+ e.message});
		}
	}

	async removeFile(req, res) {
		try {
			let {_id} = req.params;
			let result = await File.delete({_id});
			let pathFile = path.join(__dirname, '../../unzip/'+_id);
			rimraf(pathFile, function(e) {
				console.log("SUCCESS");
			});
			res.json({status: true, messge: "Delete file success"});
		} catch(e) {
			res.json({status: false, data: [], messge: 'Error '+ e.message});
		}
	}

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
		let {email, password} = req.body;
		try {
			let info = await Users.findOne({email});
			// let oldPass = info[0].password;
			return;
			if (!info) {
				res.json({status: false, data: [], messge: "Your email or password wrong !"});
				return;
			}
			if (!bcrypt.compareSync(password, oldPass)) {
				res.json({status: false, data: [], messge: "Your password or email wrong !"});
				return;
			}
			let token = jwt.sign(info, 'readnews', {
				expiresIn: '30 days'
			});
			res.json({status: false, data: {auth: info, token: token}, messge: "Your password or email wrong !"});
		} catch(e) {
			res.json({status: false, data: [], messge: 'Error '+ e.message});
		}
	}

}
export default new ExtensionsController();
