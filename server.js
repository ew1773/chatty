var messages = ["this sucks", "just a little"]

var onRequest = function(req, res) {
	  if (req.method == 'POST') {
       var postData = '';
       req.on('data', function(chunk) {
           postData += chunk.toString();
        });    
        req.on('end', function() {
            console.log("Got POST data:");
//            console.log(JSON.parse(postData));
		        messages.push(postData);
       });
	   res.end(JSON.stringify(messages));
	  }else if (req.method === 'GET')
	res.writeHead(200, {
		'Connection': 'close',
		'Content-Type': 'application/json'
	});
	res.end(JSON.stringify(messages));
};

var http = require('http')
http.createServer(onRequest).listen(8081);