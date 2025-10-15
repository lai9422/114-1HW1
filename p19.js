//1、引入http模組
const http = require('http');
//2、創建http伺服器
const server = http.createServer(function (request, response) {
    const url = request.url; //獲取請求位址
    console.log(url)
    var answer = ''; //設置回應內容
switch (url) {
    case '/':
    answer = '歡迎訪問首頁';
    break;
    case '/login':
    answer = '歡迎來到登錄頁';
    break;
    default:
    answer = '非法闖入';
    break;
}
response.setHeader('Content-Type', 'text/plain;charset=utf-8'); //設置回應頭編碼為utf-8，避免中文亂碼
response.end(answer);
});
//3、啟動伺服器監聽8888埠
server.listen('8888', function () {
    console.log("伺服器啟動成功，訪問：http://127.0.0.1:8888")
})