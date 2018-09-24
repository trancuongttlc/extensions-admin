import express  from 'express';
import Router   from 'router';
import multer   from 'multer';

import ctrl_extensions from '../http/controller/ctrl_extensions';
let storage	=	multer.diskStorage({
	destination: function (req, file, callback) {
	    callback(null, './public');
	},
	filename: function (req, file, callback) {
	    callback(null, Date.now() + file.originalname);
	}
});

let upload = multer({ storage: storage });

const router   = Router();

router

	.get('/detailPage/:_id', ctrl_extensions.detailPage)
	.get('/showAllFile', ctrl_extensions.showAllFile)
	.post('/register', ctrl_extensions.register)
	.post('/login', ctrl_extensions.login)
	.post('/uploadFile', upload.single('file'), ctrl_extensions.uploadFile)
	.delete('/remove/:_id', ctrl_extensions.removeFile)
	.use(function(err, req, res, next) {
	  	res.json({status: false, data: [], messge: 'Error '+ err});
	});
export default router;