var express	=	require("express");
var multer	=	require('multer');
var app	=	express();
app.use('/node_modules', express.static('node_modules'));
app.use('/app', express.static('app'));
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/img', express.static('img'));
app.use('/uploads', express.static('uploads'));
var storage	=	multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    console.log("file",file);
    callback(null,file.originalname);
    
  }
});
var upload = multer({ storage : storage}).single('file');

app.get('/',function(req,res){
      res.sendFile(__dirname + "/index.html");
});

app.post('/upload',function(req,res){
	upload(req,res,function(err) {
		console.log(req);
		if(err) {
			return res.end((JSON.stringify(err)));
		}
		res.end("ok");
	});
});

app.listen(3000,function(){
    console.log("Working on port 3000");
});