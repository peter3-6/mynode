let type = 3000;
if (type == 3000) {
    // 引入http、fs(文件系统)、url(网址)模块
    const http = require('http'),
        fs = require('fs'),
        url = require('url');
    // 创建http服务器
    const server = http.createServer((req, res) => {
        // 获取web客户端请求路径
        const pathname = url.parse(req.url).pathname;
        // 打印客户端请求req对象中的url、method、headers属性
        console.log(req.url);
        console.log(req.method);
        console.log(req.headers);
        // 根据pathname，路由调用不同处理逻辑
        switch (pathname) {
            case '/index': resIndex(res);//响应HTML页面到web客户端
                break;
            case 'img': resImage(res);//响应图片信息到web客户端
                break;
            default: resDefault(res);//响应默认文字到web客户端
                break;
        };
        /**
         * @desc 创建resIndex响应首页html函数
         * @parameters res HTTP 响应对象
         **/ 
        function resIndex(res){
            // res.end('22222222222');
            // 获取当前index.html的路径
            let readPath = __dirname + '/' + url.parse('index.html').pathname;
            let indexPage = fs.readFileSync('readPath');
            res.writeHead(200,{
                'Content-Type':'text/html'
            });
            res.end(indexPage);
        }
    });
    server.listen(type,()=>{
        console.log('open http://localhost:3000')
    })
};
if (type == undefined) {
    const http = require('http');
    const url = require('url');
    const querystring = require('querystring');
    const port = 3000;
    const jsonData = [
        {
            'name': 'peter',
            'job': 'web全栈'
        },
        {
            'name': '王效辉',
            'job': 'web前端'
        }
    ];
    const server = http.createServer((req, res) => {
        var body = "";
        req.on('data', function (chunk) {
            body += chunk;
        });
        req.on('end', () => {
            res.writeHead(200, {
                'Content-Type': 'application/json;charset=utf-8',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': '*',
            });
            const type = req.method;
            if (type == 'GET') {
                res.end(JSON.stringify(jsonData));
            };
            if (type == 'POST') {
                const str = '';
                req.on('data', function (chunk) {
                    str += chunk;
                });
                req.on('end', function () {
                    var data = querystring.parse(str);
                    console.log(data);
                    if (data.name == "" || data.job == "") {
                        res.end(JSON.stringify({
                            'success': true,
                            msg: '填写有误',
                        }));
                    } else {
                        res.end(JSON.stringify({
                            'success': false,
                            msg: '添加成功',
                        }));
                    };

                });
            };
        });
    });
    server.listen(port, () => {
        console.log(2222222222222222)
        console.log('server is runing at port ' + port)
        if (port == 3000) {
            console.log(port, 3333333333333)
        }
    });
};