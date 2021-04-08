const http = require('http');
const fs = require('fs');
const pug = require('pug');

let restaurants=[];
let orderHistory = [];

const renderStatsPage = pug.compileFile("./pages/statistics.pug");

fs.readdir('./restaurants',(err,items) =>{
    if(err){
        console.log("no data found");
    }
    for (let i =0; i  <items.length; i++ ) {
        restaurants.push(require('./restaurants/' + items[i]));
        orderHistory.push( {name: restaurants[i].name , orders: [{name: "", price: 0 ,quantity: 0 }], totalOrders: 0, totalRevenue: 0});
    }
    //console.log(restaurants);
});

const server = http.createServer(function (req,res) {
    if(req.method === 'GET'){
       if(req.url === '/client.js'){
            fs.readFile('./client.js',function(err, data) {
                if (err) {
                    res.writeHead(404, { 'Content-Type': 'text/plain' });
                    res.write('Error 404: Resource not found.');
                    res.end();
                } else {
                    res.writeHead(200, {'Content-Type': 'application/javascript'});
                    res.end(data);
                }
            });
        }
       else if(req.url === '/'){
           fs.readFile('./homePage.html',function(err, data) {
               if(err){
                   res.writeHead(404, { 'Content-Type': 'text/plain' });
                   res.write('Error 404: Resource not found.');
                   res.end();
               }
               res.writeHead(200, {'Content-Type': 'text/html'});
               res.write(data);
               res.end();
            })
       }
       else if(req.url === '/order.html'){
           fs.readFile('./order.html', function (err,data){

           if (err){
               res.writeHead(404, { 'Content-Type': 'text/plain' });
               res.write('Error 404: Resource not found.');
               res.end();
           }
           res.writeHead(200,{'Content-Type': 'text/html'});
           res.write(data);
           res.end();
           });
       }
       else if(req.url === '/stats'){
           const stats = renderStatsPage({orderHistory});
           res.writeHead(200,{'Content-Type': 'text/html'} );
           res.end(stats);
       }

       else if(req.url === '/rest'){
           res.writeHead(200, {'Content-Type':  "application/json"});
           res.write(JSON.stringify(restaurants));
           //console.log(JSON.stringify(restaurants[0]));
           res.end();
       }
       else if(req.url === '/assets/add'){
           res.writeHead(200, {'Content-Type':  "image/jpeg",});
           fs.readFile("./assets/add.jpg", function (err, data) {
               if (err){
                   throw err;
               }
               res.write(data);
               res.end();
           });
       }
       else if(req.url === '/assets/remove'){
           res.writeHead(200, {'Content-Type':  "image/jpeg",});
           fs.readFile("./assets/remove.jpg", function (err, data) {
               if (err){
                   throw err;
               }
               res.write(data);
               res.end();
           });
       }
    }
    else if(req.method === 'POST'){
        if(req.url === '/order'){
            let body = "";
            req.on('data', function (chunk) {
                body += chunk;
            });

            req.on('end', () =>{
               let rest =  body.split("!")[1];
               let order = JSON.parse(body.split("!")[0]);
               console.log(order);
               console.log(rest);
               orderHistory.forEach((item) =>{
                   console.log(item.name);
                   console.log(rest);
                   if(item.name === rest){
                       order.forEach((cartItem) =>{
                           let found = false;
                           item.orders.forEach((orderItem) =>{
                               if(orderItem.name === cartItem.name ) {
                                   orderItem.quantity += cartItem.quantity;
                                   item.totalOrders += cartItem.quantity;
                                   item.totalRevenue += cartItem.quantity * cartItem.price * 0.1;

                                   found= true;
                               }
                           });
                           if(!found){
                               item.orders.push({
                                   name:cartItem.name,
                                   quantity: cartItem.quantity,
                                   price: cartItem.price,
                               });
                               item.totalOrders += cartItem.quantity;
                               item.totalRevenue += cartItem.quantity * cartItem.price + (cartItem.quantity * cartItem.price * 0.1)  ;
                           }
                       });
                   }
               });
                res.writeHead(200,{'Content-Type':  "plain/text",} );
                res.write("order placed");
                res.end();
            });

        }

    }
});

server.listen(3000);
console.log('server running on localhost port 3000');
