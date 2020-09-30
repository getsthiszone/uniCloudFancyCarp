
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/tab/index/index","pages/tab/mine/mine","pages/coupon/list/list","pages/login/login","pages/coupon/info/info","pages/serve/binding/binding","pages/serve/Verifications/Verifications","pages/adminPort/adminPort","pages/adminPort/categories/categories","pages/adminPort/categories/list/list","pages/adminPort/categories/info/info"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"app","navigationBarBackgroundColor":"#ffffff","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#777","selectedColor":"#ff6c13","borderStyle":"black","backgroundColor":"#fff","list":[{"pagePath":"pages/tab/index/index","iconPath":"static/tab/coupon.png","selectedIconPath":"static/tab/coupon_cur.png","text":"领券中心"},{"pagePath":"pages/tab/mine/mine","iconPath":"static/tab/mine.png","selectedIconPath":"static/tab/mine_cur.png","text":"个人中心"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"uniCloudFancyCarp","compilerVersion":"2.8.11","entryPagePath":"pages/tab/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/tab/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"优惠券"}},{"path":"/pages/tab/mine/mine","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarBackgroundColor":"#ff8b36","navigationBarTextStyle":"white","navigationBarTitleText":"个人中心"}},{"path":"/pages/coupon/list/list","meta":{},"window":{"navigationBarTitleText":"我的优惠券"}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"登录","navigationBarBackgroundColor":"#ff8b36","navigationBarTextStyle":"white"}},{"path":"/pages/coupon/info/info","meta":{},"window":{"navigationBarTitleText":"优惠券详情"}},{"path":"/pages/serve/binding/binding","meta":{},"window":{"navigationBarTitleText":"身份验证"}},{"path":"/pages/serve/Verifications/Verifications","meta":{},"window":{"navigationBarTitleText":"核销记录"}},{"path":"/pages/adminPort/adminPort","meta":{},"window":{}},{"path":"/pages/adminPort/categories/categories","meta":{},"window":{}},{"path":"/pages/adminPort/categories/list/list","meta":{},"window":{}},{"path":"/pages/adminPort/categories/info/info","meta":{},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
