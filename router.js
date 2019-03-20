var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
	var options = {
		title: 'Index',
		content: 'index',
	};
	// if a callback is specified, the rendered HTML string has to be sent explicitly
	res.render('index.html', options, (err, html) => {
		if(err){
			send404(res);
		}else{
			res.send(html);
		}
	});
});

router.get('/home', (req, res) => {
	var options = {
		title: 'Home',
		content: 'home',
	};
	res.render('home.html', options, (err, html) => {
		if(err){
			send404(res);
		}else{
			res.send(html);
		}
	});
});

router.get('/about', (req, res) => {
	var options = {
		title: 'About',
		content: 'about',
	};
	res.render('about.html', options, (err, html) => {
		if(err){
			send404(res);
		}else{
			res.send(html);
		}
	});
});

function send404(res){
	res.sendFile(__dirname + '/public/404.html');
}

module.exports = router;