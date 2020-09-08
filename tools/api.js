import siteinfo from '../config';
var _api_root = siteinfo.base_url + 'api/';


var api = { 
	user: {
		mini_app_auth: _api_root + "user/mini_app_auth", 
	},
	demo:{
		 getMemberInfo: _api_root + "demo/getMemberInfo",
	},
	 coupons:{
		 getCouponsList: _api_root + "coupons/getCouponsList",
		 save_ticket: _api_root + "coupons/save_ticket",
		 ticket_detail: _api_root + "coupons/ticket_detail",
		 validate_ma: _api_root + "coupons/validate_ma",
		 my_coupons_list: _api_root + "coupons/my_coupons_list",
		 validate_identity: _api_root + "coupons/validate_identity",
		 hexiao_list: _api_root + "coupons/hexiao_list", 
	 },
	 sms: {
	 	send: _api_root + 'sms/send'
	 }
};

module.exports = api;
