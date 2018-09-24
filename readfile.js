import express      		from 'express';
import path         		from 'path';

var fs = require('fs');

var find = require('find');

const PORT   = process.env.PORT || 4000;
const app    = express();
const server = require('http').createServer( app);

app.use(express.static('unzip'));

app.get('/:_id', function(req, res) {
	let {_id} = req.params;
	var pathUrl = path.join(__dirname +'/unzip/'+_id);
	fromDir(pathUrl ,/\.html$/,function(filename){
	    res.sendFile(path.join(filename));
	});
});

function fromDir(startPath,filter,callback){

    if (!fs.existsSync(startPath)){
        console.log("no dir ",startPath);
        return;
    }
    var files=fs.readdirSync(startPath);
    for(var i=0;i<1;i++){
        var filename=path.join(startPath,files[i]);
        var stat = fs.lstatSync(filename);
        if (stat.isDirectory()){
            fromDir(filename,filter,callback); //recurse
        }
        else if (filter.test(filename)) callback(filename);
    };
};

server.listen(PORT, function(err, connect) {
    if(err) throw err;
    console.log('App listening to http://localhost:'+PORT+'...');
});