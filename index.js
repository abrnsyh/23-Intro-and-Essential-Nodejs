const http = require("http");
const fs = require("fs");

http
	.createServer((req, res) => {
		res.writeHead(200, { "Content-Type": "text/html" });
		if (req.url === "/about") {
			fs.readFile("./about.html", (err, data) => {
				if (err) {
					console.log(err);
					return res.end;
				} else {
					res.write(data);
					return res.end();
				}
			});
		}
		if (req.url === "/contact") {
			fs.readFile("./contact.html", (err, data) => {
				if (err) {
					console.log(err);
					return res.end();
				} else {
					res.write(data);
					res.end();
				}
			});
		}
		fs.readFile("./index.html", (err, data) => {
			if (err) {
				console.log(err);
				return res.end();
			} else {
				res.write(data);
				return res.end();
			}
		});
	})
	.listen(8080);
