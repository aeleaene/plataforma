<!DOCTYPE html>
    <html>

    <head>
        <meta charset=utf-8>
        <meta name=viewport content="width=device-width,initial-scale=0.5">
        <title>dealer</title>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-143525254-1"></script>
        <script>window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'UA-143525254-1');

            var domain = document.domain.split(".");
            if (domain[0] == 'www') {
                domain.splice(0, 1);
            }
            domain = domain.join(".");
            document.write('<link type="/image/x-icon" rel="icon" href="/local/' + domain + '/images/fav.ico">');</script>
        <script>//百度统计
            var _hmt = _hmt || [];
            (function () {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?5bfe020eaccf36a9f0bfa1014334e417";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
            })();
            var versionPage = "1639641342305";
            var getVersion = function () {
                var request = new XMLHttpRequest();
                request.open("get", '/version.json'); /* 设置请求方法与路径 */
                request.send(null); /* 不发送数据到服务器 */
                request.onload = function () {  /* XHR对象获取到返回信息后执行 */
                    if (request.status == 200) {  /* 返回状态为200，即为数据获取成功 */
                        var res = JSON.parse(request.responseText);
                        versionPage = res.version;
                    }
                }
            };
            getVersion();

            var getCookie = function (name) {
                if (document.cookie.length > 0) {
                    var c_start = document.cookie.indexOf(name + "=")
                    if (c_start != -1) {
                        c_start = c_start + name.length + 1
                        var c_end = document.cookie.indexOf(";", c_start)
                        if (c_end == -1) c_end = document.cookie.length
                        return unescape(document.cookie.substring(c_start, c_end))
                    }
                }
                return ""
            };
            var getUrlParam = function (url, name) {
                var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
                var r = typeof url.split('?')[1] != "undefined" ? url.split('?')[1].substr(0).match(reg) : null; //匹配目标参数
                if (r != null) return unescape(r[2]);
                return null; //返回参数值
            };

            //判断链接上是否有token,如有则设置cookie
            var urlToken = getUrlParam(document.location.href, "token");
            if (urlToken) {
                document.cookie = "token=" + urlToken + "; expires=" + new Date().setTime(Date.now() + 3650 * 24 * 60 * 60 * 1000) + "; path=/";
            }
            var lang = getCookie("lang") || 'en-us';
            var token = getCookie("token");
            if (!token) {
                location.href = "/";   //跳转到登录页
            }
            document.write('<script src="/js/comm/' + lang + '.js?version=' + versionPage + '"><\/script>');
            document.write('<script src="/js/elementUI/lang/' + lang + '.js?version=' + versionPage + '"><\/script>');
            if (!window.Promise) {
                document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.min.js" crossorigin><\/script>');
            }

            //获取uuid 逻辑
            var uin = getCookie("uuid");
            if (!uin) {//如果不存在，则
                uin = generateUUID();
                document.cookie = "uuid=" + uin + "; expires=" + new Date().setTime(Date.now() + 3650 * 24 * 60 * 60 * 1000) + "; path=/";
            }
            function generateUUID() { //获取uid
                var d = new Date().getTime();
                if (window.performance && typeof window.performance.now === "function") {
                    d += performance.now(); //use high-precision timer if available
                }
                var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                    var r = (d + Math.random() * 16) % 16 | 0;
                    d = Math.floor(d / 16);
                    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
                });
                return uuid;
            }

            //设置title
            var webtitle = localStorage.getItem("webtitle");
            if (webtitle) {
                var titleArr = webtitle.split("-");
                if (titleArr.length > 0) titleArr.splice(titleArr.length - 1, 1);
                webtitle = titleArr.join("-");
                document.title = webtitle;
            }</script>
        <style type=text /css>
            .tip-box{background - color: #ffffcf;color: #333333;border:1px solid #929200;line-height: 30px; padding:0 6px;z-index: 99999; position: fixed;left: 100px;top: 100px;width: auto;display: inline-block;transform: all .5s;white-space: nowrap; font-size: 14px;}
        </style>
        <link href=/dealer2/static/css/app.f0293e4bf57ff158cf577a6c43f40a65.css rel=stylesheet>
    </head>

    <body><span id=tips class=tip-box style="display: none"></span>
        <div id=app></div>
        <script type=text /javascript src=/js/badjs/bj-report-tryjs.min.js></script>
        <script type=text /javascript>BJ_REPORT.init({
        id: 4,    //指定项目id
    uin: uin,
    //url: 'http://192.168.0.22:8088/badjs',     //dev
    url: 'http://badjs.protrack365.com/badjs',    //pro
      }).tryJs().spyModules();</script>
        <script type=text /javascript src=/dealer2/static/js/manifest.43b20fea0b86ab5858d1.js></script>
        <script type=text /javascript src=/dealer2/static/js/vendor.a50abdb0d23f2b2e758b.js></script>
        <script type=text /javascript src=/dealer2/static/js/app.3e9529d29900580eaa43.js></script>
    </body>

    </html>