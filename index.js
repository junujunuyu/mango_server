let http=require('http');
const hostname='127.0.0.1';
const port="8080";

//서버생성(요청:request,응답:responsive)로 써준다.
const server=http.createServer(function(req,res){
    const path=req.url;
    const method=req.method;
    if(path==="/products"){
        if(method==="GET"){
            res.writeHead(200,{"Content-Type":"application/json"});
            const products=JSON.stringify([
                {
                    name:"배변패드",
                    price:50000,
                }
            ]);
            res.end(products);
        }else if(method==="POST"){
            res.end("생성되었습니다.");
        }
    }else{res.end('Good bye.')};
});

//서버요청하면 대기상태로 만든다(port,hostname)
server.listen(port, hostname);
console.log('server on')

/* function hello(){

}
export default hello;

import hello from './hello.js' (es6버전이다.)*/
/* (node에서 쓰는방법) function hello(){

}
module.export=hello;

var hello=requite('./hello.js')
hello(); */