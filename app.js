var express = require('express');
var app = express();
var router = require('./router.js');
var path = require('path');
var template = require('express-art-template');

app.use('/public', express.static(__dirname + '/public'));//静态资源文件
app.set('views', path.join(__dirname, 'public'));//渲染路径
app.engine('.html', template);//设置渲染的模板引擎
app.use(router);

app.listen(8080, () => {
	console.log('server running at 8080');
});
