var querystring = require('querystring');


function handle(resq, resp){
  var body = '';

 resp.writeHead(200,{
  'Content-Type':'text/html'
 });

 resq.on('data',function (data) {
   body += data.toString();
});

resq.on('end', function () {
 var decode = querystring.parse(body);
        console.log(decode);
});

resp.write("<!DOCTYPE html>");
resp.write("<html>");
resp.write("<head> <title>Http Module</title></head>");
resp.write("<body>");
resp.write("<h1>Test Module Http</h1>");
resp.write("</body>");
resp.write("</html>");
resp.end();

}
module.exports = handle;
