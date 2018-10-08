import express      		from 'express';
import path         		from 'path';
import bodyParser           from 'body-parser';
import mongoose 			from 'mongoose';
import fs  			         from 'fs';
import webpack               from 'webpack';
import webpackDevMiddleware  from 'webpack-dev-middleware';
import webpackHotMiddleware  from 'webpack-hot-middleware';
import expressReactViews     from 'express-react-views';
import configDev             from './webpack.config.js';
import chunkhash 			 from './chunkhash.json';


import router from './routes/index';

// const privateKey  = fs.readFileSync('/root/.acme.sh/academy.ceosoftware.vn/academy.ceosoftware.vn.key', 'utf8');
// const certificate = fs.readFileSync('/root/.acme.sh/academy.ceosoftware.vn/academy.ceosoftware.vn.cer', 'utf8');

const PORT   = process.env.PORT || 8080;
const app    = express();
const server = require('http').createServer( app);


	const compiler = webpack(configDev);
  	app.use(webpackDevMiddleware(compiler, {
      	publicPath: configDev.output.publicPath,
      	stats: { colors: true },
  	}));
  	app.use(webpackHotMiddleware(compiler));



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(express.static('client'));

app.use('/api', router);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('*', function (req, res) {
    res.render('template', chunkhash);
});



server.listen(PORT, function(err, connect) {
    if(err) throw err;
    console.log('App listening to http://localhost:'+PORT+'...');
});