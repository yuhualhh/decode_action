#[disable:false]
# 2.1.2
# [rule: ^签到$]
# [rule: ^(积分.*|.*积分)$]
# [rule: ^(卡密.*|.*卡密)$]
# [rule: ^Y_.*$]
# [rule: ^猜拳.*$]
# [cron: 0 0 0 * * *]
# [router: /MaTrixActive]
# [method: post]
# [param: {"required":true,"key":"Yzyxmm_Reactor.Paymentmode","bool":false,"placeholder":"这里应该填些什么...","name":"支付模式","desc":"填Yzyxmm为http://yi100.top:3025丨cattle为https://zf.zzqq.top默认为Yzyxmm启用奥特曼内置支付请填写Aut"}]
# [param: {"required":true,"key":"Yzyxmm_Reactor.wxzsm","bool":false,"placeholder":"http://xxxx.jpg","name":"收款码","desc":"微信收款码或者赞赏码调用奥特曼的支付开启备用支付时必填项"}]
# [param: {"required":false,"key":"Yzyxmm_Reactor.ShopID","bool":false,"placeholder":"这里应该填些什么...","name":"ShopID","desc":"商铺ID，非必填，如果用奥特曼内置支付就不用填写！"}]
# [param: {"required":false,"key":"Yzyxmm_Reactor.ShopKey","bool":false,"placeholder":"这里应该填些什么...","name":"ShopKey","desc":"商铺密钥，非必填，如果用奥特曼内置支付就不用填写！"}]
# [param: {"required":false,"key":"Yzyxmm_Reactor.ShopApi","bool":false,"placeholder":"这里应该填些什么...","name":"shopApi","desc":"商户Api，非必填，如果用奥特曼内置支付就不用填写！"}]
# [param: {"required":false,"key":"Yzyxmm_Reactor.sign","bool":true,"placeholder":"","name":"积分娱乐","desc":"勾选开启积分系统，卡密系统，娱乐系统，如果需要签到功能请先前往 奥特曼的  用户管理-基本配置-禁用用户积分系统 打开这个开关"}]
# [param: {"required":false,"key":"Yzyxmm_Reactor.signcoin","bool":false,"placeholder":"默认:1-5 例:1-5","name":"积分区间","desc":"用户发送签到命令，每次签到的可以获得的积分区间"}]
# [param: {"required":false,"key":"Yzyxmm_Reactor.Magnification","bool":false,"placeholder":"默认为100","name":"积分抵扣","desc":"积分抵扣的倍率，假如1元需要100积分抵扣，输入100即可，如果输入200那么1元就是200积分，只能填整数不能填小数避免不必要的的bug这里最少填写100"}]
# [param: {"required":false,"key":"Yzyxmm_Reactor.DeductionThreshold","bool":false,"placeholder":"默认为10","name":"抵扣门槛","desc":"积分抵扣的门槛，即：当用户积分大于你所填写的数量后才会触发积分抵扣，否则不抵扣！"}]
# [param: {"required":false,"key":"Yzyxmm_Reactor.GameCoin","bool":false,"placeholder":"只能填写整数，默认1","name":"游戏积分","desc":"猜拳游戏胜利或失败获得或者减少的积分数量，用户使用 猜拳999  这个命令触发即代表本轮游戏单次押注999积分"}]
# [param: {"required":false,"key":"Yzyxmm_Reactor.Odds","bool":false,"placeholder":"只能填写整数，默认50","name":"游戏赔率","desc":"设置玩家的胜率这个是百分比，填100就是100%"}]
# [param: {"required":false,"key":"Yzyxmm_Reactor.Yezi","bool":false,"placeholder":"账号&密码","name":"椰子账号密码","desc":"你要用的东西有关椰子就填，无关就不填！椰子解码平台的账号密码 http://h5.yezi66.net:90"}]
# [param: {"required":false,"key":"Yzyxmm_Reactor.getbucket","bool":false,"placeholder":"随便写什么","name":"设置密码","desc":"用脚本获取数据时，或者用脚本推送消息时的密码，建议不要告诉别人  不然别人就能获取你的数据了"}]
_OO00OOOO0O0000OO0 ='sign_type'#line:1
_O00O0O0O0O00OO00O ='alipay'#line:2
_O0O0OOOO0OOOO00OO ='out_trade_no'#line:3
_O0O0O0OOO00OOOOOO ='sign'#line:4
_O00000000000OO000 ='%Y-%m-%d'#line:5
_OO0O0000OO00O0OOO ='输入错误！'#line:6
_O0OO0OO000000O0OO ='Bearer'#line:7
_OOOOO00O00O000O00 ='Content-Type'#line:8
_OOOO000OO000000O0 ='accept'#line:9
_O000OOO0000OOO0O0 ='token'#line:10
_O0O0OOO0OO0O0O000 ='Yzyxmm_Reactor'#line:11
_O00OO00O00000OOOO ='Yzyxmm_Cami_coin'#line:12
_OOOO0000000O0O00O ='Yzyxmm_Reactor_signst'#line:13
_OOOOO00O0000OO000 ='Magnification'#line:14
_O0000OO0OO0O0OO00 ='0.01'#line:15
_OO0OO000O00OOO00O ='money'#line:16
_OOOOOO00OOOO0OOO0 ='name'#line:17
_O00O00OOO0OO0OO00 ='remarks'#line:18
_OOOOO00000OOOOO0O ='Authorization'#line:19
_O00000OOO0O000O0O ='cattle'#line:20
_O00000OOO0OO00000 ='id'#line:21
_OO0O0O0OOOOO0OO0O ='application/json'#line:22
_OOOO00OO0O00OO00O ='Yzyxmm_sign_coin'#line:23
_O0000O000OO00OOOO ='code'#line:24
_OOO00OOO0O0O0O0OO ='data'#line:25
_OOO0OOOOOOOOO0O00 =True #line:26
_OOOOOO000O00000O0 ='message'#line:27
_O0O0O00O0OOO0OOO0 =False #line:28
_OOO00000O0O0000OO =None #line:29
import requests ,middleware ,hashlib #line:30
from urllib .parse import quote #line:31
import time #line:32
from decimal import Decimal #line:33
import socket ,json #line:34
from datetime import datetime ,timedelta #line:35
import random #line:36
ByYzyxmm =middleware .bucketAll (bucket =_O0O0OOO0OO0O0O000 )#line:37
senderID =middleware .getSenderID ()#line:38
sender =middleware .Sender (senderID )#line:39
userid =sender .getUserID ()#line:40
today_date =datetime .now ().date ()#line:41
today_time =str (today_date )#line:42
UserMassage =sender .getMessage ()#line:43
imtype =sender .getImtype ()#line:44
def hello ():#line:45
	OO0OOO00O00OO000O ='晚上好';OOOOO00OO00OOO0OO ='下午好';OOOOOOO00O0OO0000 ='早上好';OO0OO000OOOOO0O00 ='凌晨好';OOOO00OO00OO0O000 =datetime .now ().time ().hour ;OO0O0OO0O00O0OOO0 ='';O000OO00000OOOO00 ={0 :'午夜好',2 :OO0OO000OOOOO0O00 ,4 :OO0OO000OOOOO0O00 ,6 :OOOOOOO00O0OO0000 ,8 :OOOOOOO00O0OO0000 ,10 :'上午好',12 :'中午好',14 :OOOOO00OO00OOO0OO ,16 :OOOOO00OO00OOO0OO ,18 :'傍晚好',20 :OO0OOO00O00OO000O ,22 :OO0OOO00O00OO000O }#line:46
	for (O0O0O0O00OO0O0000 ,OO0O0OO0O00O0OOO0 )in O000OO00000OOOO00 .items ():#line:47
		if O0O0O0O00OO0O0000 <=OOOO00OO00OO0O000 <O0O0O0O00OO0O0000 +2 :print (OO0O0OO0O00O0OOO0 );break #line:48
	return OO0O0OO0O00O0OOO0 +'!\n'#line:49
class AutPlugins :#line:50
	def __init__ (A ,NamePlugin ,PluginsDataName ,Container =_OOO0OOOOOOOOO0O00 ):A .EnvName =_OOO00000O0O0000OO ;A .AllQinglong =_OOO00000O0O0000OO ;A .Container =Container ;A .PluginsDataName =PluginsDataName ;A .NamePlugin =NamePlugin ;A .YeziToken =_OOO00000O0O0000OO ;A .MonthlyFee ,A .PluginsDatas =A .PluginsData ();A .BasicInteraction =BasicInteraction ()#line:51
	def PluginsData (A ):#line:52
		OOOO000OO00O00OOO =middleware .bucketAll (bucket =A .PluginsDataName )#line:53
		if A .Container :#line:54
			O000000OOOO000000 =OOOO000OO00O00OOO .get ('Qinglong')#line:55
			if not O000000OOOO000000 :A .ErrorMessage (f"{A.NamePlugin}未填写插件对接的容器，请检查插件配参！")#line:56
			A .AllQinglong =A .FormatQinglong (O000000OOOO000000 );A .EnvName =OOOO000OO00O00OOO .get ('EnvName')#line:57
			if not A .EnvName :A .ErrorMessage (f"{A.NamePlugin}未填写青龙变量名信息，请检查插件配参！")#line:58
		OOO000O0000O0000O =OOOO000OO00O00OOO .get ('MonthlyFee')#line:59
		if not OOO000O0000O0000O :OOO000O0000O0000O =Decimal (0 )#line:60
		return OOO000O0000O0000O ,OOOO000OO00O00OOO #line:61
	def GetPluginsDatas (A ):return A .PluginsDatas #line:62
	def FormatQinglong (A ,qldata ):#line:63
		try :#line:64
			OO00O0O0OO00OO00O ={};O00OOO0OOO0OOOO00 =qldata .split ('&')#line:65
			for (OO0OO0000000OO000 ,O0OO0OOO0OO0OOO00 )in enumerate (O00OOO0OOO0OOOO00 ,start =1 ):#line:66
				try :#line:67
					O000OO000OOO0O0O0 =['丨','|','#','＃'];O00O0O0000000OO00 =next ((OO0OOOOO0O0OO00O0 for OO0OOOOO0O0OO00O0 in O000OO000OOO0O0O0 if OO0OOOOO0O0OO00O0 in O0OO0OOO0OO0OOO00 ),_OOO00000O0O0000OO )#line:68
					if O00O0O0000000OO00 :O0OOO000O0OOOOO00 =O0OO0OOO0OO0OOO00 .split (O00O0O0000000OO00 );OO0O00000O0000OO0 ,O00OOOOO0OOOOO0O0 ,O0OO0O000O0OO00O0 =O0OOO000O0OOOOO00 [0 ],O0OOO000O0OOOOO00 [1 ],O0OOO000O0OOOOO00 [2 ];OO000O0000O00OO0O =A .QLtoken (OO0O00000O0000OO0 ,O00OOOOO0OOOOO0O0 ,O0OO0O000O0OO00O0 );OO00O0O0OO00OO00O [OO0O00000O0000OO0 ]=OO000O0000O00OO0O #line:69
					else :A .ErrorMessage (f"第{OO0OO0000000OO000}个容器格式错误，未找到有效分隔符: {O0OO0OOO0OO0OOO00}")#line:70
				except Exception as O0O000000OOOOOOO0 :A .ErrorMessage (f"第{OO0OO0000000OO000}个容器无法链接: {O0OO0OOO0OO0OOO00} - 错误: {str(O0O000000OOOOOOO0)}")#line:71
			return OO00O0O0OO00OO00O #line:72
		except Exception :A .ErrorMessage (f"{A.NamePlugin}获取青龙token失败")#line:73
	def QLtoken (A ,QLurl ,ClientID ,ClientSecret ):#line:74
		OOO0O00O0O0O00OOO =QLurl #line:75
		try :#line:76
			OOO00O0O00O00000O =f"{OOO0O00O0O0O00OOO}/open/auth/token?client_id={ClientID}&client_secret={ClientSecret}";O0OO00OOOO0000OOO =requests .get (OOO00O0O00O00000O );O0OO00OOOO0000OOO .raise_for_status ()#line:77
			if _O000OOO0000OOO0O0 in O0OO00OOOO0000OOO .text :O00OO000OOOO00O00 =O0OO00OOOO0000OOO .json ();return O00OO000OOOO00O00 [_OOO00OOO0O0O0O0OO ][_O000OOO0000OOO0O0 ]#line:78
			else :A .ErrorMessage (f"{A.NamePlugin}{OOO0O00O0O0O00OOO}链接青龙失败，返回结果没有token字段")#line:79
		except Exception as O00OOO000O0O0O0OO :A .ErrorMessage (f"{A.NamePlugin}{OOO0O00O0O0O00OOO}请求失败: {str(O00OOO000O0O0O0OO)}")#line:80
	def GetEnvsId (A ,account ):#line:81
		OO0O0OO00O0O0OO0O ,OO00O0O0OO0OOOO0O ,O0OO0O00000O0OOO0 =_OOO00000O0O0000OO ,_OOO00000O0O0000OO ,_OOO00000O0O0000OO #line:82
		for (OO00O0O0OO0OOOO0O ,O0OO0O00000O0OOO0 )in A .AllQinglong .items ():#line:83
			O00OOO0OOO0OO0OOO =f"{OO00O0O0OO0OOOO0O}/open/envs";O0OO000O0O0OO0000 ={_OOOOO00000OOOOO0O :'Bearer '+O0OO0O00000O0OOO0 ,'Accept':_OO0O0O0OOOOO0OO0O }#line:84
			try :#line:85
				O00000O0OOO0OO00O =requests .get (url =O00OOO0OOO0OO0OOO ,headers =O0OO000O0O0OO0000 );O00000O0OOO0OO00O .raise_for_status ()#line:86
				if O00000O0OOO0OO00O .json ()[_O0000O000OO00OOOO ]==200 :#line:87
					O0OOOO0OOO0O0OOOO =O00000O0OOO0OO00O .json ()[_OOO00OOO0O0O0O0OO ]#line:88
					for O0OOOOOOOOO0O0O0O in O0OOOO0OOO0O0OOOO :#line:89
						if O0OOOOOOOOO0O0O0O .get (_O00O00OOO0OO0OO00 )and str (account )in O0OOOOOOOOO0O0O0O [_O00O00OOO0OO0OO00 ]and A .EnvName ==O0OOOOOOOOO0O0O0O [_OOOOOO00OOOO0OOO0 ]:OO0O0OO00O0O0OO0O =O0OOOOOOOOO0O0O0O [_O00000OOO0OO00000 ];break #line:90
					if OO0O0OO00O0O0OO0O is not _OOO00000O0O0000OO :break #line:91
				else :A .ErrorMessage (f"{A.NamePlugin}连接青龙获取变量失败，响应错误：{O00000O0OOO0OO00O.json()}")#line:92
			except Exception as O0O0000O0O00O0000 :A .ErrorMessage (f"请求青龙环境失败: {str(O0O0000O0O00O0000)}")#line:93
		return OO0O0OO00O0O0OO0O ,OO00O0O0OO0OOOO0O ,O0OO0O00000O0OOO0 #line:94
	def AddEnvs (B ,value ,account ,phone ):#line:95
		OO0OOOOO0OO000OO0 =value ;O00OO0O00O0O0OOO0 =account ;OOO0O0O00000O00O0 =phone ;OOO0O0O00000O00O0 =OOO0O0O00000O00O0 [:3 ]+'*'*4 +OOO0O0O00000O00O0 [7 :];O000OO000000O0O0O ,OO00OOOOOO00OOO0O ,OOO000O0O0O0OO0O0 =B .GetEnvsId (O00OO0O00O0O0OOO0 )#line:96
		if O000OO000000O0O0O is _OOO00000O0O0000OO :B .AddToEnv (OO00OOOOOO00OOO0O ,OOO000O0O0O0OO0O0 ,OO0OOOOO0OO000OO0 ,O00OO0O00O0O0OOO0 ,OOO0O0O00000O00O0 )#line:97
		else :B .Update (OO00OOOOOO00OOO0O ,OOO000O0O0O0OO0O0 ,OO0OOOOO0OO000OO0 ,O00OO0O00O0O0OOO0 ,O000OO000000O0O0O ,OOO0O0O00000O00O0 )#line:98
	def AddToEnv (A ,QLurl ,qltoken ,value ,account ,phone ):#line:99
		try :#line:100
			OO0O0O0O0O0O00OOO =f"{QLurl}/open/envs";OO0OOOOOO0OOO00O0 =[{'value':value ,_OOOOOO00OOOO0OOO0 :A .EnvName ,_O00O00OOO0OO0OO00 :f"账号:{account}丨用户:{userid}丨手机:{phone}丨{A.NamePlugin}"}];O0OO0000000O00OOO ={_OOOOO00000OOOOO0O :_O0OO0OO000000O0OO +' '+qltoken ,_OOOO000OO000000O0 :_OO0O0O0OOOOO0OO0O ,_OOOOO00O00O000O00 :_OO0O0O0OOOOO0OO0O };O00O0OOO000O0OOOO =requests .post (OO0O0O0O0O0O00OOO ,headers =O0OO0000000O00OOO ,data =json .dumps (OO0OOOOOO0OOO00O0 ));OOOO0O00O00OOOOO0 =O00O0OOO000O0OOOO .json ()#line:101
			if 'value must be unique'in O00O0OOO000O0OOOO .text :return #line:102
			else :OO0000O0O00OO0OO0 =OOOO0O00O00OOOOO0 [_OOO00OOO0O0O0O0OO ][0 ][_O00000OOO0OO00000 ];return #line:103
		except Exception :A .ErrorMessage ('添加青龙变量错误,请联系管理员处理')#line:104
	def Update (B ,QLurl ,qltoken ,value ,account ,qlid ,phone ):#line:105
		O0000O0OOOOO0OOOO =f"{QLurl}/open/envs";O0O0000OOO000O0OO ={'value':value ,_OOOOOO00OOOO0OOO0 :B .EnvName ,_O00O00OOO0OO0OO00 :f"账号:{account}丨用户:{userid}丨手机:{phone}丨{B.NamePlugin}",_O00000OOO0OO00000 :qlid };OOO0OOO0OOOO0OO00 ={_OOOOO00000OOOOO0O :_O0OO0OO000000O0OO +' '+qltoken ,_OOOO000OO000000O0 :_OO0O0O0OOOOO0OO0O ,_OOOOO00O00O000O00 :_OO0O0O0OOOOO0OO0O };O0OO00000OO00O000 =requests .put (O0000O0OOOOO0OOOO ,headers =OOO0OOO0OOOO0OO00 ,data =json .dumps (O0O0000OOO000O0OO ))#line:106
		if O0OO00000OO00O000 .status_code ==200 :#line:107
			OOOOO00O000000OOO =O0OO00000OO00O000 .json ();O0O0000OOO000O0OO =OOOOO00O000000OOO [_OOO00OOO0O0O0O0OO ]#line:108
			if O0O0000OOO000O0OO is _OOO00000O0O0000OO :exit (0 )#line:109
			O00O0OO0O0O00O000 =O0O0000OOO000O0OO [_O00000OOO0OO00000 ];O00O0OOOO00O000O0 =O0O0000OOO000O0OO ['createdAt'];return O00O0OO0O0O00O000 ,O00O0OOOO00O000O0 #line:110
		else :B .ErrorMessage ('更新变量失败,请联系管理员处理')#line:111
	def empower (D ,empowertime ,mes =1 ,inputs =_OOO0OOOOOOOOO0O00 ):#line:112
		OO00OOOOO0O0O00OO =mes ;O00O00OOO0OOO0OOO =empowertime #line:113
		if inputs :OO00OOOOO0O0O00OO =D .BasicInteraction .inputm (mes ='请问您需要授权几个月？\n(只回复数字！)',count =99 )#line:114
		if OO00OOOOO0O0O00OO in [0 ,'0']:sender .reply (_OO0O0000OO00O0OOO );exit (0 )#line:115
		OO000O0OOO00O0OOO =OO00OOOOO0O0O00OO *30 #line:116
		if O00O00OOO0OOO0OOO =='未授权'or O00O00OOO0OOO0OOO =='授权过期'or O00O00OOO0OOO0OOO <=str (today_time ):O00O00OO000O0O00O =today_date +timedelta (days =OO000O0OOO00O0OOO )#line:117
		elif O00O00OOO0OOO0OOO >today_time :OO0000OOOO0OO0OO0 =datetime .strptime (O00O00OOO0OOO0OOO ,_O00000000000OO000 );O00O00OO000O0O00O =OO0000OOOO0OO0OO0 +timedelta (days =OO000O0OOO00O0OOO );O00O00OO000O0O00O =O00O00OO000O0O00O .date ()#line:118
		else :D .ErrorMessage ('计算授权时间时发生错误！');exit (0 )#line:119
		return str (O00O00OO000O0O00O ),OO00OOOOO0O0O00OO ,D .MonthlyFee #line:120
	def DelEnvs (B ,account ):#line:121
		O0OOO0O00O0OOOOO0 ,O00000OO0OOOOO0O0 ,OO0O0OOO0OO00OO00 =B .GetEnvsId (account )#line:122
		if O0OOO0O00O0OOOOO0 is _OOO00000O0O0000OO :return #line:123
		O0OOO00OO0000O0O0 =f"{O00000OO0OOOOO0O0}/open/envs";OO0O0O00O0O0OOO00 ={_OOOOO00000OOOOO0O :_O0OO0OO000000O0OO +' '+OO0O0OOO0OO00OO00 ,_OOOO000OO000000O0 :_OO0O0O0OOOOO0OO0O ,_OOOOO00O00O000O00 :_OO0O0O0OOOOO0OO0O };OO0O00O0OOO0O00OO =[O0OOO0O00O0OOOOO0 ];O000000OO0O000O00 =requests .delete (O0OOO00OO0000O0O0 ,headers =OO0O0O00O0O0OOO00 ,json =OO0O00O0OOO0O00OO ).json ()#line:124
	def DayCalculation (D ,vip ):O000O00O0000OO000 =datetime .strptime (today_time ,_O00000000000OO000 );O00OO0OOOO00O0O0O =datetime .strptime (vip ,_O00000000000OO000 );OOO00O0O000O000OO =(O00OO0OOOO00O0O0O -O000O00O0000OO000 ).days ;return OOO00O0O000O000OO #line:125
	def YeziLogin (A ):#line:126
		OO000O0OO00OOO000 =middleware .bucketGet (bucket =_O0O0OOO0OO0O0O000 ,key ='Yezi')#line:127
		try :#line:128
			if len (OO000O0OO00OOO000 )==0 :A .ErrorMessage ('未填写椰子账号密码')#line:129
			OOO0OOO0O0O0OO000 =OO000O0OO00OOO000 .split ('&');O0O000O0O0OOOO000 =OOO0OOO0O0O0OO000 [0 ];OOOO00OO0O00OOOOO =OOO0OOO0O0O0OO000 [1 ]#line:130
		except Exception :A .ErrorMessage ('椰子账号密码填写不正确！')#line:131
		try :#line:132
			OOOOO0O0OOO0OO0O0 ='http://h5.yezi66.net:90/api/logins';O000O000OOOO00OOO =f"username={O0O000O0O0OOOO000};password={OOOO00OO0O00OOOOO}";OOOO00O0000O000O0 =requests .post (OOOOO0O0OOO0OO0O0 ,data =O000O000OOOO00OOO )#line:133
			if OOOO00O0000O000O0 .json ()[_OOOOOO000O00000O0 ]=='登录成功':#line:134
				A .YeziToken =OOOO00O0000O000O0 .json ()[_O000OOO0000OOO0O0 ];O00OO0OO0O0OOO000 =OOOO00O0000O000O0 .json ()[_OOO00OOO0O0O0O0OO ][0 ][_OO0OO000O00OOO00O ]#line:135
				if Decimal (O00OO0OO0O0OOO000 ).quantize (Decimal (_O0000OO0OO0O0OO00 ))<Decimal (.1 ):A .ErrorMessage ('Yezi余额不足，联系管理员充值')#line:136
			else :A .ErrorMessage (f"椰子登录失败：{OOOO00O0000O000O0.json()[_OOOOOO000O00000O0]}")#line:137
		except Exception as O00OOOO00000O0000 :A .ErrorMessage (f"椰子登录报错: {str(O00OOOO00000O0000)}")#line:138
	def GetYeziPhone (A ):#line:139
		OO0O0O000O0OO0O0O =0 #line:140
		while OO0O0O000O0OO0O0O <=3 :#line:141
			OO0O0O000O0OO0O0O +=1 #line:142
			try :#line:143
				O0OOO0000O0OO000O ='http://az1.yezi28.com:90/api/get_mobile';OO000OO0OO000OO00 =f"token={A.YeziToken};project_id=31570;project_type=1;operator=0;loop=1";OO00OO0OOOOOOO0OO =requests .post (O0OOO0000O0OO000O ,data =OO000OO0OO000OO00 ,timeout =10 )#line:144
				if OO00OO0OOOOOOO0OO .json ()[_OOOOOO000O00000O0 ]=='ok':O00OO0OOO00OO00O0 =OO00OO0OOOOOOO0OO .json ()['mobile'];return O00OO0OOO00OO00O0 #line:145
				else :A .ErrorMessage (f"获取椰子号码失败：{OO00OO0OOOOOOO0OO.json()[_OOOOOO000O00000O0]}")#line:146
			except Exception as O00O00O00000O0O00 :sender .reply (f"获取椰子号码报错: {str(O00O00O00000O0O00)}");continue #line:147
		A .ErrorMessage (f"获取椰子多次失败")#line:148
	def GetYeziSms (D ,mobile ):#line:149
		OOOO0OO0OO0OO0O0O =0 ;OOO0OO000OO0OO00O =_OOO00000O0O0000OO #line:150
		while OOOO0OO0OO0OO0O0O <80 :#line:151
			try :#line:152
				OOOO0OO0OO0OO0O0O +=1 ;time .sleep (1 );O0O0OO0O0O0O00O00 ='http://az1.yezi28.com:90/api/get_message';O00O0OO000OO0OO00 =f"token={D.YeziToken};phone_num={mobile};project_type=1;project_id=31570";O0O0OOOOO0O000OO0 =requests .post (O0O0OO0O0O0O00O00 ,data =O00O0OO000OO0OO00 )#line:153
				if O0O0OOOOO0O000OO0 .json ()[_OOOOOO000O00000O0 ]=='ok'or O0O0OOOOO0O000OO0 .json ()[_OOOOOO000O00000O0 ]=='短信还未到达,请继续获取':#line:154
					if len (O0O0OOOOO0O000OO0 .json ()[_OOO00OOO0O0O0O0OO ])==0 :continue #line:155
					OOO0OO000OO0OO00O =O0O0OOOOO0O000OO0 .json ()[_OOO00OOO0O0O0O0OO ][0 ]['modle'];return _OOO0OOOOOOOOO0O00 ,OOO0OO000OO0OO00O #line:156
			except Exception as O000O000O0OOO0O0O :continue #line:157
		return _O0O0O00O0OOO0OOO0 ,OOO0OO000OO0OO00O #line:158
	def ErrorMessage (A ,message ):'统一处理错误并退出程序';sender .reply (message );exit (0 )#line:159
class PaymentAPI :#line:160
	def __init__ (A ):#line:161
		A .truemoney =_OOO00000O0O0000OO ;A .CopeWith =_OOO00000O0O0000OO ;A .Interactive =BasicInteraction ();A .DeductionThreshold =ByYzyxmm .get ('DeductionThreshold',10 );A .Paymentmode =ByYzyxmm .get ('Paymentmode')#line:162
		if A .Paymentmode is _OOO00000O0O0000OO :sender .reply (f"未填写支付模式，请前往MaTrix核心配参填写写支付模式！");exit (0 )#line:163
		elif A .Paymentmode ==_O00000OOO0O000O0O or A .Paymentmode =='Yzyxmm':#line:164
			A .merchant_id =ByYzyxmm .get ('ShopID');A .merchant_key =ByYzyxmm .get ('ShopKey');A .Apiurl =ByYzyxmm .get ('ShopApi')#line:165
			if A .merchant_id is _OOO00000O0O0000OO :sender .reply (f"当前支付模式为{A.Paymentmode}，未填写商户ID，请前往MaTrix核心配参填写ShopID！");exit (0 )#line:166
			elif A .merchant_key is _OOO00000O0O0000OO :sender .reply (f"当前支付模式为{A.Paymentmode}，未填写商户Key，请前往MaTrix核心配参填写商户ShopKey！");exit (0 )#line:167
			elif A .Apiurl is _OOO00000O0O0000OO :sender .reply (f"当前支付模式为{A.Paymentmode}，未填写Api地址，请前往MaTrix核心配参填写ShopApi地址！");exit (0 )#line:168
			else :#line:169
				A .Apiurl =A .Apiurl .rstrip ('/');A .CreateOrderApi =f"{A.Apiurl}/mapi.php";A .OrderinquiryApi =f"{A.Apiurl}/api/pay/chaOrder"#line:170
				if A .Paymentmode ==_O00000OOO0O000O0O :A .CreateOrderApi =f"{A.Apiurl}/mapi.php";A .OrderinquiryApi =f"{A.Apiurl}/api.php"#line:171
		elif A .Paymentmode =='Aut':#line:172
			A .wx_zsm =ByYzyxmm .get ('wxzsm')#line:173
			if A .wx_zsm is _OOO00000O0O0000OO :sender .reply (f"当前支付模式为奥特曼内置支付模式，未填写微信赞赏码/收款码地址，请前往MaTrix核心配参填写微信赞赏码/收款码地址！");exit (0 )#line:174
		else :sender .reply (f"当前支付模式为{A.Paymentmode}，未收录的支付模式，请检查MaTrix核心支付模式配参填写！");exit (0 )#line:175
		OOO0O00OO000OOO00 =ByYzyxmm .get (_OOOOO00O0000OO000 ,100 )#line:176
		if int (OOO0O00OO000OOO00 )<100 :OOO0O00OO000OOO00 =100 #line:177
		A .Magnification =int (OOO0O00OO000OOO00 )#line:178
	def AutManPay (C ,money ):#line:179
		OOO000OOO0O0O0000 =money ;O00O0OOO000OOO000 =sender .atWaitPay ()#line:180
		if O00O0OOO000OOO000 :sender .reply ('当前有人正在支付,请稍后再试！');exit (0 )#line:181
		sender .replyImage (C .wx_zsm );O000O000O00OOO0O0 =sender .waitPay ('q',120000 )#line:182
		if O000O000O00OOO0O0 =='q':sender .reply (f"退出支付！");exit (0 )#line:183
		elif type (O000O000O00OOO0O0 )==dict :O000O000O00OOO0O0 =O000O000O00OOO0O0 #line:184
		elif type (O000O000O00OOO0O0 )==str :#line:185
			try :O000O000O00OOO0O0 =json .loads (O000O000O00OOO0O0 )#line:186
			except Exception :sender .reply (f"支付出现异常返回数据：{O000O000O00OOO0O0}");exit (0 )#line:187
		else :sender .reply (f"支付出现异常返回数据：{O000O000O00OOO0O0}");exit (0 )#line:188
		OO00O00OO0O0O00OO =O000O000O00OOO0O0 .get ('Money')#line:189
		if OO00O00OO0O0O00OO is _OOO00000O0O0000OO :OO00O00OO0O0O00OO =O000O000O00OOO0O0 .get (_OO0OO000O00OOO00O )#line:190
		if OO00O00OO0O0O00OO is _OOO00000O0O0000OO :sender .reply (f"支付出现异常返回数据：{O000O000O00OOO0O0}");exit (0 )#line:191
		C .truemoney =Decimal (OO00O00OO0O0O00OO ).quantize (Decimal (_O0000OO0OO0O0OO00 ))#line:192
		if Decimal (C .truemoney )>=Decimal (OOO000OOO0O0O0000 ):return _OOO0OOOOOOOOO0O00 #line:193
		else :sender .reply (f"支付金额错误\n应付:{OOO000OOO0O0O0000}元\n实付:{OO00O00OO0O0O00OO}元\n请联系管理员处理退款！");exit (0 )#line:194
	def pay (A ,money ,project ='商品',Message =_O0O0O00O0OOO0OOO0 ,quantity =1 ,Deduction =_OOO0OOOOOOOOO0O00 ):#line:195
		O0O000O0O0000000O ='qian';O00OO0OO0O00OO00O =quantity ;OOO00OO0000OO0OO0 =Message ;OO00O000O00OO00OO =project ;O000OO0OOO0OOOOOO =money ;OO0OOO000O0OO0000 =middleware .bucketGet (bucket =_OOOO00OO0O00OO00O ,key =f"{userid}")#line:196
		if O000OO0OOO0OOOOOO ==''or O000OO0OOO0OOOOOO is _OOO00000O0O0000OO :sender .reply (f"———《订单完成》———\n🎈名称:{OO00O000O00OO00OO}\n🎉应付:{O000OO0OOO0OOOOOO}元\n💰实付:0元");return #line:197
		O000OO0OOO0OOOOOO =Decimal (O000OO0OOO0OOOOOO ).quantize (Decimal (_O0000OO0OO0O0OO00 ))#line:198
		if O000OO0OOO0OOOOOO ==Decimal (0 ):sender .reply (f"———《订单完成》———\n🎈名称:{OO00O000O00OO00OO}\n🎉应付:{O000OO0OOO0OOOOOO}元\n💰实付:0元");return #line:199
		A .CopeWith =str (O000OO0OOO0OOOOOO *Decimal (f"{O00OO0OO0O00OO00O}"));OO0O00OOOOOOO000O =Decimal (A .CopeWith )*Decimal (A .Magnification );OOOO00000OO000O00 =_O0O0O00O0OOO0OOO0 #line:200
		if Deduction and len (OO0OOO000O0OO0000 )!=0 and int (OO0OOO000O0OO0000 )>10 :#line:201
			OOOO00000OO000O00 =_OOO0OOOOOOOOO0O00 #line:202
			if int (OO0OOO000O0OO0000 )>=int (OO0O00OOOOOOO000O ):OO0OOO000O0OO0000 =int (OO0OOO000O0OO0000 )-int (OO0O00OOOOOOO000O );middleware .bucketSet (bucket =_OOOO00OO0O00OO00O ,key =f"{userid}",value =f"{OO0OOO000O0OO0000}");sender .reply (f"———《订单完成》———\n🎈名称:{OO00O000O00OO00OO}\n🎉应付:{A.CopeWith}元\n💰实付:{OO0O00OOOOOOO000O}积分");return #line:203
			else :#line:204
				O0O0O0O0OOOOOO00O =A .CopeWith ;A .CopeWith =(int (OO0O00OOOOOOO000O )-int (OO0OOO000O0OO0000 ))/A .Magnification #line:205
				if not OOO00OO0000OO0OO0 :sender .reply (f"""———《订单信息》———
🎈商品名称:{OO00O000O00OO00OO}
🎉商品数量:{O00OO0OO0O00OO00O}
💲商品总价:{O0O0O0O0OOOOOO00O}元
🔥积分抵扣:{int(OO0OOO000O0OO0000)/A.Magnification}元
💰现在应付:{A.CopeWith}元""")#line:211
				else :sender .reply (f"———《订单信息》———\n{OOO00OO0000OO0OO0.replace(O0O000O0O0000000O,str(A.CopeWith))}\n🔥积分抵扣:{int(OO0OOO000O0OO0000)/A.Magnification}元")#line:212
		elif not OOO00OO0000OO0OO0 :sender .reply (f"———《订单信息》———\n🎈商品名称:{OO00O000O00OO00OO}\n🎉商品数量:{O00OO0OO0O00OO00O}\n💰现在应付:{A.CopeWith}元")#line:213
		else :sender .reply (f"———《订单信息》———\n{OOO00OO0000OO0OO0.replace(O0O000O0O0000000O,str(A.CopeWith))}")#line:214
		def OOOO0OO0O0000O0OO ():#line:215
			if OOOO00000OO000O00 :sender .reply (f"———《订单完成》———\n🎈商品名称:{OO00O000O00OO00OO}\n🔥积分抵扣:{int(OO0OOO000O0OO0000)/A.Magnification}元\n🎉订单应付:{A.CopeWith}元\n💰订单实付:{A.truemoney}元");middleware .bucketSet (bucket =_OOOO00OO0O00OO00O ,key =f"{userid}",value =f"0")#line:216
			else :sender .reply (f"———《订单完成》———\n🎈商品名称:{OO00O000O00OO00OO}\n🎉订单应付:{A.CopeWith}元\n💰订单实付:{A.truemoney}元")#line:217
		if A .Paymentmode =='Aut':#line:218
			try :#line:219
				if A .AutManPay (A .CopeWith ):OOOO0OO0O0000O0OO ();return #line:220
				exit (0 )#line:221
			except Exception :sender .reply ('支付超时！');exit (0 )#line:222
		O000OO000OO0OO000 ,OOO0O00O0O0O0000O =A .create_order (A .CopeWith ,OO00O000O00OO00OO ,_O00O0O0O0O00OO00O );sender .replyImage (f"https://api.pwmqr.com/qrcode/create/?url={quote(OOO0O00O0O0O0000O)}");sender .reply (f"请在240秒内完成支付宝支付\n不要修改金额！！！")#line:223
		for OO0O0OOO000OO0OOO in range (240 ):#line:224
			time .sleep (.7 );O0OOOOOOO00O0O0OO =A .check_order (O000OO000OO0OO000 )#line:225
			if O0OOOOOOO00O0O0OO :OOOO0OO0O0000O0OO ();return #line:226
		sender .reply ('支付超时！！');exit (0 )#line:227
	def GetIpAddress (C ):#line:228
		try :O0O00O0000OO00OOO =socket .gethostname ();O00OOO00OO00O0OOO =socket .gethostbyname (O0O00O0000OO00OOO );return O00OOO00OO00O0OOO #line:229
		except Exception :return '127.0.0.1'#line:230
	def create_sign (A ,params ):O0O000O0OOO0O0000 ={OO0OO0OO0OO0000O0 :str (OO00O0000000000OO )for (OO0OO0OO0OO0000O0 ,OO00O0000000000OO )in params .items ()if OO00O0000000000OO and OO0OO0OO0OO0000O0 !=_O0O0O0OOO00OOOOOO and OO0OO0OO0OO0000O0 !=_OO00OOOO0O0000OO0 };OOOOO00000OO0OO00 =dict (sorted (O0O000O0OOO0O0000 .items ()));OO0O00000000O0O00 ='&'.join ([f"{OO00OO0O0OO0OO0OO}={OO00OOOOO00O00OO0}"for (OO00OO0O0OO0OO0OO ,OO00OOOOO00O00OO0 )in OOOOO00000OO0OO00 .items ()]);return hashlib .md5 ((OO0O00000000O0O00 +A .merchant_key ).encode ('utf-8')).hexdigest ()#line:231
	def create_order (A ,amount ,product_name ,payment_type =_O00O0O0O0O00OO00O ):#line:232
		try :#line:233
			OOO0000O00O00O00O =time .strftime ('%Y%m%d%H%M%S')+str (int (time .time ()*1000 ))[-3 :];OOOOO0OO000O0OOOO ={'pid':A .merchant_id ,'type':payment_type ,_O0O0OOOO0OOOO00OO :OOO0000O00O00O00O ,'notify_url':f"{A.Apiurl}/notify_url.php",'return_url':f"{A.Apiurl}/return_url.php",_OOOOOO00OOOO0OOO0 :product_name ,_OO0OO000O00OOO00O :f"{float(amount):.2f}",_OO00OOOO0O0000OO0 :'MD5'}#line:234
			if A .Paymentmode ==_O00000OOO0O000O0O :OOOOO0OO000O0OOOO ['clientip']=A .GetIpAddress ()#line:235
			OOOOO0OO000O0OOOO [_O0O0O0OOO00OOOOOO ]=A .create_sign (OOOOO0OO000O0OOOO );O0000O00OO0O00O0O =requests .post (A .CreateOrderApi ,data =OOOOO0OO000O0OOOO );O0O0OO00O0O0OO0O0 =O0000O00OO0O00O0O .json ()#line:236
			if O0O0OO00O0O0OO0O0 [_O0000O000OO00OOOO ]==1 :return OOO0000O00O00O00O ,O0O0OO00O0O0OO0O0 ['qrcode']#line:237
			sender .reply (f"订单创建失败：{O0000O00OO0O00O0O.text}");exit (0 )#line:238
		except Exception as O0O00O00O0OOO0O0O :sender .reply (f"订单创建异常：{O0O00O00O0OOO0O0O}");exit (0 )#line:239
	def check_order (A ,order_no ):#line:240
		OO00OOO0000O000OO ='status';O000000O00O000O00 ='key';O0O00OO00000OO0OO =order_no #line:241
		try :#line:242
			OOO000000O00O0OOO ={_O0O0OOOO0OOOO00OO :O0O00OO00000OO0OO ,_O00000OOO0OO00000 :A .merchant_id ,O000000O00O000O00 :A .merchant_key };O000O0OO000O0OOO0 ={'server':'1'}#line:243
			if A .Paymentmode ==_O00000OOO0O000O0O :OOO000000O00O0OOO ={'act':'order','pid':A .merchant_id ,O000000O00O000O00 :A .merchant_key ,_O0O0OOOO0OOOO00OO :O0O00OO00000OO0OO };O0000OO000OOO000O =requests .get (A .OrderinquiryApi ,params =OOO000000O00O0OOO )#line:244
			else :O0000OO000OOO000O =requests .post (f"{A.OrderinquiryApi}",data =OOO000000O00O0OOO ,headers =O000O0OO000O0OOO0 )#line:245
			OOOOO00OO0OOO00OO =O0000OO000OOO000O .json ()#line:246
			if OOOOO00OO0OOO00OO .get (_O0000O000OO00OOOO )==1 :#line:247
				if A .Paymentmode ==_O00000OOO0O000O0O :#line:248
					if OOOOO00OO0OOO00OO .get (OO00OOO0000O000OO )=='1':A .truemoney =OOOOO00OO0OOO00OO .get (_OOO00OOO0O0O0O0OO )[_OO0OO000O00OOO00O ];return _OOO0OOOOOOOOO0O00 #line:249
					return _O0O0O00O0OOO0OOO0 #line:250
				if OOOOO00OO0OOO00OO .get (_OOO00OOO0O0O0O0OO )[OO00OOO0000O000OO ]==1 :A .truemoney =OOOOO00OO0OOO00OO .get (_OOO00OOO0O0O0O0OO )['truemoney'];return _OOO0OOOOOOOOO0O00 #line:251
				return _O0O0O00O0OOO0OOO0 #line:252
			else :return _O0O0O00O0OOO0OOO0 #line:253
		except Exception as O0OOOOOO00OOOO000 :return _O0O0O00O0OOO0OOO0 #line:254
class BasicInteraction :#line:255
	def CronPush (B ,user ,account ,accountVip ,RemainingDays ,acs ,InvalidBucket ,VipoverMes ,TokenoverMes ):#line:256
		OOO0OO0O0O0OO0O00 =InvalidBucket ;O000O0OO0O0OOO0OO =accountVip ;O00O0OO000O00OOO0 =account #line:257
		if O000O0OO0O0OOO0OO in ['未授权']:return _OOO0OOOOOOOOO0O00 #line:258
		elif O000O0OO0O0OOO0OO in ['授权过期']:#line:259
			if RemainingDays >-3 :B .push (user =user ,message =VipoverMes )#line:260
			return _OOO0OOOOOOOOO0O00 #line:261
		elif acs =='Token失效':#line:262
			OOOO000000000O0OO =middleware .bucketGet (bucket =OOO0OO0O0O0OO0O00 ,key =O00O0OO000O00OOO0 )#line:263
			if len (OOOO000000000O0OO )==0 :OOOO000000000O0OO =0 #line:264
			OOOO000000000O0OO =int (OOOO000000000O0OO )#line:265
			if OOOO000000000O0OO <3 :B .push (user =user ,message =TokenoverMes );middleware .bucketSet (bucket =OOO0OO0O0O0OO0O00 ,key =O00O0OO000O00OOO0 ,value =f"{OOOO000000000O0OO+1}")#line:266
			return _O0O0O00O0OOO0OOO0 #line:267
		return _O0O0O00O0OOO0OOO0 #line:268
	def push (C ,user ,message ):OO000OO00O0O0OOO0 =message ;OOOO0OOO0OOO0O00O =user ;middleware .push ('wb','',OOOO0OOO0OOO0O00O ,'',f"{OO000OO00O0O0OOO0}");middleware .push ('tg','',OOOO0OOO0OOO0O00O ,'',f"{OO000OO00O0O0OOO0}");middleware .push ('qq','',OOOO0OOO0OOO0O00O ,'',f"{OO000OO00O0O0OOO0}");middleware .push ('qb','',OOOO0OOO0OOO0O00O ,'',f"{OO000OO00O0O0OOO0}");middleware .push ('wx','',OOOO0OOO0OOO0O00O ,'',f"{OO000OO00O0O0OOO0}")#line:269
	def inputm (E ,mes ,long =1 ,count =0xde0b6b3a763ffff ,Overtime =120000 ):#line:270
		OOO000OO00O00O0OO ='输入错误，请重新输入:';O00O00000000OO0OO =count ;O00OO00000O00O00O =mes ;sender .reply (f"{O00OO00000O00O00O}")#line:271
		for O00OO0OO0000OO0O0 in range (4 ):#line:272
			O00OO00000O00O00O =sender .input (Overtime ,1 ,_O0O0O00O0OOO0OOO0 )#line:273
			if O00OO00000O00O00O is _OOO00000O0O0000OO :sender .reply ('输入超时！');exit (0 )#line:274
			elif O00OO00000O00O00O in ['q','Q','退出']:sender .reply ('退出！');exit (0 )#line:275
			elif len (O00OO00000O00O00O )<long :sender .reply ('输入错误,重新输入:');continue #line:276
			if O00OO00000O00O00O .startswith ('0')and len (O00OO00000O00O00O )>1 :return O00OO00000O00O00O #line:277
			if O00O00000000OO0OO !=0xde0b6b3a763ffff :#line:278
				try :#line:279
					O00OO00000O00O00O =int (O00OO00000O00O00O )#line:280
					if O00OO00000O00O00O >O00O00000000OO0OO :#line:281
						if O00OO0OO0000OO0O0 ==1 :sender .reply (f"提示：你输入的数字有点大！")#line:282
						elif O00OO0OO0000OO0O0 ==2 :sender .reply (f"提示：最大限制是{O00O00000000OO0OO}！")#line:283
						if O00OO0OO0000OO0O0 in [0 ,1 ,2 ]:sender .reply (OOO000OO00O00O0OO )#line:284
						continue #line:285
				except ValueError :#line:286
					if O00OO0OO0000OO0O0 ==1 :sender .reply ('提示：输入【】中的数字即可！')#line:287
					elif O00OO0OO0000OO0O0 ==2 :sender .reply (f"提示：你在输入些什么？{O00OO00000O00O00O}")#line:288
					if O00OO0OO0000OO0O0 in [0 ,1 ,2 ]:sender .reply (OOO000OO00O00O0OO )#line:289
					continue #line:290
			return O00OO00000O00O00O #line:291
		sender .reply ('输入错误次数超限！');exit (0 )#line:292
	def SingleChoiceQuestion (B ,Content ,Choose1 ,Choose2 ,Overtime =120000 ):#line:293
		sender .reply (f"{Content}");sender .reply (f"【y】丨{Choose1}\n【n】丨{Choose2}");O0O00OOO0OOOO0O00 =sender .input (Overtime ,1 ,_O0O0O00O0OOO0OOO0 )#line:294
		if O0O00OOO0OOOO0O00 is _OOO00000O0O0000OO :sender .reply ('输入超时！');exit (0 )#line:295
		elif O0O00OOO0OOOO0O00 =='y'or O0O00OOO0OOOO0O00 =='Y'or O0O00OOO0OOOO0O00 =='是':return _OOO0OOOOOOOOO0O00 #line:296
		elif O0O00OOO0OOOO0O00 =='n'or O0O00OOO0OOOO0O00 =='N'or O0O00OOO0OOOO0O00 =='否':return _O0O0O00O0OOO0OOO0 #line:297
		else :sender .reply (_OO0O0000OO00O0OOO );exit (0 )#line:298
class MaTrixFunction :#line:299
	def __init__ (A ):#line:300
		OOO0000O0OO0O00O0 ='signcoin';A .Interactive =BasicInteraction ()#line:301
		if UserMassage =='签到'or 'Y_'in UserMassage or '充值'in UserMassage or '猜拳'in UserMassage :#line:302
			A .PaymentAPI =PaymentAPI ()#line:303
			if ByYzyxmm .get (_O0O0O0OOO00OOOOOO )!='true':exit (0 )#line:304
			if ByYzyxmm .get (OOO0000O0OO0O00O0 )is _OOO00000O0O0000OO :OO00O000OOOO0O000 ='1-5'.split ('-');A .sm =int (OO00O000OOOO0O000 [0 ]);A .big =int (OO00O000OOOO0O000 [1 ])#line:305
			else :#line:306
				try :OO00O000OOOO0O000 =ByYzyxmm .get (OOO0000O0OO0O00O0 ).split ('-');A .sm =int (OO00O000OOOO0O000 [0 ]);A .big =int (OO00O000OOOO0O000 [1 ])#line:307
				except Exception :sender .reply ('签到积分区间配参填写不正确！');exit (0 )#line:308
			OO0OO0O000000000O =middleware .bucketGet (bucket =_OOOO00OO0O00OO00O ,key =f"{userid}")#line:309
			if len (OO0OO0O000000000O )==0 :A .UserCoin =0 #line:310
			elif OO0OO0O000000000O =='0':A .UserCoin =0 #line:311
			else :A .UserCoin =int (OO0OO0O000000000O )#line:312
	def PunchClock (A ):#line:313
		O000000OOOO00OOO0 =middleware .bucketGet (bucket =_OOOO0000000O0O00O ,key =f"{userid}")#line:314
		if len (O000000OOOO00OOO0 )==0 :O00O0O000OOO0OO00 =random .randint (A .sm ,A .big );A .UserCoin =O00O0O000OOO0OO00 +A .UserCoin ;sender .reply (f"{hello()}签到成功！\n获得{O00O0O000OOO0OO00}积分\n当前共{A.UserCoin}积分");middleware .bucketSet (bucket =_OOOO00OO0O00OO00O ,key =f"{userid}",value =f"{A.UserCoin}");middleware .bucketSet (bucket =_OOOO0000000O0O00O ,key =f"{userid}",value ='1')#line:315
		else :sender .reply (f"{hello()}今日已经签到过了！")#line:316
	def PointsInquiry (B ):#line:317
		OO00O0OO0OO0000O0 =middleware .bucketGet (bucket =_OOOO00OO0O00OO00O ,key =f"{userid}")#line:318
		if len (OO00O0OO0OO0000O0 )==0 :sender .reply (f"当前0积分")#line:319
		else :sender .reply (f"当前{OO00O0OO0OO0000O0}积分")#line:320
	def PasswordGeneration (J ):#line:321
		O0O000O0OOO00OO00 ='生成完成！';O000000OO0O00OOO0 =int (ByYzyxmm .get (_OOOOO00O0000OO000 ,100 ));OO0O0000OOO00O000 =BasicInteraction ().inputm (f"卡密可以提供积分\n当前{O000000OO0O00OOO0}积分等于1元\n请输入你需要的卡密的积分数量:",count =0x21e19e0c9bab2400000 );O0000O0O0O0O0OOO0 =BasicInteraction ().inputm ('请输入你需要多少张卡密：',count =0x21e19e0c9bab2400000 );O000OOOO0O0OOO0O0 =BasicInteraction ().inputm ('【1】一起发送\n【2】分开发送\n请选择：',count =2 )#line:322
		if O000OOOO0O0OOO0O0 ==1 :#line:323
			O00OOOO0O0O0OOOOO =''#line:324
			for O0O0O00O0O00O00OO in range (O0000O0O0O0O0OOO0 ):OOO0OOOO000OO00O0 =f"ads5bPa6FG6ahadWsfjCkgay1ds{str(int(time.time()))}BKaoDNsRgddd5a1d5g{str(int(time.time()))}3snzfaUhsrXl4g1affAgMSiu6Tdg7eE{str(int(time.time()))}55gxOssQfp3aqdZ8dwhvhm2{str(int(time.time()))}Jg3h4fL9Ycaf.4st0VH6sd64dsI2";OO0O0OOO0OO000O0O =''.join (random .choice (OOO0OOOO000OO00O0 )for OOO000000OO0O0OOO in range (11 ));middleware .bucketSet (bucket =_O00OO00O00000OOOO ,key =f"Y_{OO0O0OOO0OO000O0O}",value =f"{OO0O0000OOO00O000}");O00OOOO0O0O0OOOOO +=f"\nY_{OO0O0OOO0OO000O0O}"#line:325
			sender .reply (f"{O00OOOO0O0O0OOOOO}");sender .reply (O0O000O0OOO00OO00 )#line:326
		elif O000OOOO0O0OOO0O0 ==2 :#line:327
			for O0O0O00O0O00O00OO in range (O0000O0O0O0O0OOO0 ):OOO0OOOO000OO00O0 =f"ads5bPa6FG6ahadWsfjCkgay1ds{str(int(time.time()))}BKaoDNsRgddd5a1d5g{str(int(time.time()))}3snzfaUhsrXl4g1affAgMSiu6Tdg7eE{str(int(time.time()))}55gxOssQfp3aqdZ8dwhvhm2{str(int(time.time()))}Jg3h4fL9Ycaf.4st0VH6sd64dsI2";OO0O0OOO0OO000O0O =''.join (random .choice (OOO0OOOO000OO00O0 )for OO0OO0OO00000OOO0 in range (11 ));middleware .bucketSet (bucket =_O00OO00O00000OOOO ,key =f"Y_{OO0O0OOO0OO000O0O}",value =f"{OO0O0000OOO00O000}");sender .reply (f"Y_{OO0O0OOO0OO000O0O}")#line:328
			sender .reply (O0O000O0OOO00OO00 )#line:329
		else :sender .reply (_OO0O0000OO00O0OOO )#line:330
	def CardVerification (A ):#line:331
		OO0O0OOOO0O0O0000 =middleware .bucketGet (bucket =_O00OO00O00000OOOO ,key =f"{UserMassage}");middleware .bucketSet (bucket =_O00OO00O00000OOOO ,key =f"{UserMassage}",value =f"False")#line:332
		if len (OO0O0OOOO0O0O0000 )==0 :sender .reply ('卡密不存在！')#line:333
		elif OO0O0OOOO0O0O0000 =='False':sender .reply ('卡密已被使用！')#line:334
		else :A .UserCoin =int (OO0O0OOOO0O0O0000 )+A .UserCoin ;middleware .bucketSet (bucket =_OOOO00OO0O00OO00O ,key =f"{userid}",value =f"{A.UserCoin}");sender .reply (f"卡密兑换完成，获得积分{OO0O0OOOO0O0O0000}，当前共{A.UserCoin}积分")#line:335
	def RechargePoints (A ):O00O00000000OOO00 =int (ByYzyxmm .get (_OOOOO00O0000OO000 ,100 ));O0000OOO0O0O000O0 =A .Interactive .inputm (f"当前{O00O00000000OOO00}等于1元\n请输入你需要充值的积分数量：",count =0x21e19e0c9bab2400000 )/O00O00000000OOO00 ;A .PaymentAPI .pay (money =O0000OOO0O0O000O0 ,project ='积分充值',Deduction =_O0O0O00O0OOO0OOO0 );O0OOOOOO0000O0O0O =Decimal (_O0000OO0OO0O0OO00 );A .UserCoin =Decimal (O0000OOO0O0O000O0 ).quantize (O0OOOOOO0000O0O0O )*Decimal (O00O00000000OOO00 ).quantize (O0OOOOOO0000O0O0O )+Decimal (A .UserCoin ).quantize (O0OOOOOO0000O0O0O );middleware .bucketSet (bucket =_OOOO00OO0O00OO00O ,key =f"{userid}",value =f"{str(A.UserCoin).split('.')[0]}")#line:336
	def CronRun (C ):#line:337
		OOOO0O000000OO000 =middleware .bucketAllKeys (bucket =_OOOO0000000O0O00O )#line:338
		for OO00O000OOOO000O0 in OOOO0O000000OO000 :middleware .bucketDel (bucket =_OOOO0000000O0O00O ,key =f"{OO00O000OOOO000O0}")#line:339
	def ReqEvent (P ,types ,PostBody ):#line:340
		O00O00O000O0OOOOO ='success';OOO0OO000O0O0O000 ='bucket';OO000O00OO00OO0OO =types ;OOOOO0OOO0O0OO000 =PostBody #line:341
		if OO000O00OO00OO0OO =='GET'or OO000O00OO00OO0OO =='get':OO000OO0O00OO0O00 =OOOOO0OOO0O0OO000 .get (OOO0OO000O0O0O000 );OO0OO000OO00O00O0 =middleware .bucketAll (bucket =OO000OO0O00OO0O00 );OOOO0O00OO0OO00OO ={_O0000O000OO00OOOO :200 ,_OOOOOO000O00000O0 :O00O00O000O0OOOOO ,_OOO00OOO0O0O0O0OO :OO0OO000OO00O00O0 };sender .reply (json .dumps (OOOO0O00OO0OO00OO ,ensure_ascii =_O0O0O00O0OOO0OOO0 ))#line:342
		elif OO000O00OO00OO0OO =='VeriData':#line:343
			OO000OO00OO00O0O0 ={};OO000OO0O00OO0O00 =OOOOO0OOO0O0OO000 .get (OOO0OO000O0O0O000 );OOO0O00O0OO0OOO00 =OOOOO0OOO0O0OO000 .get ('Veribucket');O0O00O00OOOOOOOO0 =OOOOO0OOO0O0OO000 .get ('Tokenbucket');OO0OO000OO00O00O0 =middleware .bucketAll (bucket =OO000OO0O00OO0O00 );O0O0OO0OO00O000OO =middleware .bucketAll (bucket =OOO0O00O0OO0OOO00 );OOO00000000OO0O00 =middleware .bucketAll (bucket =O0O00O00OOOOOOOO0 )#line:344
			for (O00O000OO00OOO0OO ,OO0O0O0OO0000000O )in OO0OO000OO00O00O0 .items ():#line:345
				OOO0OOOO00O00OO00 =O0O0OO0OO00O000OO .get (O00O000OO00OOO0OO )#line:346
				if OOO0OOOO00O00OO00 is _OOO00000O0O0000OO :continue #line:347
				elif OOO0OOOO00O00OO00 >=today_time :OO000OO00OO00O0O0 [O00O000OO00OOO0OO ]=OO0O0O0OO0000000O #line:348
				continue #line:349
			OOOO0O00OO0OO00OO ={_O0000O000OO00OOOO :200 ,_OOOOOO000O00000O0 :O00O00O000O0OOOOO ,_OOO00OOO0O0O0O0OO :OO000OO00OO00O0O0 ,'Token':OOO00000000OO0O00 };sender .reply (json .dumps (OOOO0O00OO0OO00OO ,ensure_ascii =_O0O0O00O0OOO0OOO0 ))#line:350
		else :OOOO0O00OO0OO00OO ={_O0000O000OO00OOOO :400 ,_OOOOOO000O00000O0 :'未知的执行请求！',_OOO00OOO0O0O0O0OO :'error'};sender .reply (json .dumps (OOOO0O00OO0OO00OO ,ensure_ascii =_O0O0O00O0OOO0OOO0 ))#line:351
	def ReqPush (I ):#line:352
		try :#line:353
			O0O0OOO00OOO000O0 =sender .getRouterBody ();O0O0OOO00OOO000O0 =json .loads (O0O0OOO00OOO000O0 );OOO0OOO0OO00000OO =str (O0O0OOO00OOO000O0 .get ('User'));O00OO0O000OO0O0O0 =O0O0OOO00OOO000O0 .get ('type');O0OOO0O0O0000OO0O =O0O0OOO00OOO000O0 .get (_OOOOOO000O00000O0 );OOOOOOO00OO0OO00O =O0O0OOO00OOO000O0 .get ('password');OOOO00O0O0OOOOO00 =middleware .bucketGet (bucket =_O0O0OOO0OO0O0O000 ,key ='getbucket')#line:354
			if OOOOOOO00OO0OO00O is _OOO00000O0O0000OO :OOO0000O0OOOO0000 ={_O0000O000OO00OOOO :400 ,_OOOOOO000O00000O0 :'password不能为空！'};sender .reply (json .dumps (OOO0000O0OOOO0000 ,ensure_ascii =_O0O0O00O0OOO0OOO0 ))#line:355
			elif len (OOOO00O0O0OOOOO00 )==0 :OOO0000O0OOOO0000 ={_O0000O000OO00OOOO :400 ,_OOOOOO000O00000O0 :'请先设置推送密码！'};sender .reply (json .dumps (OOO0000O0OOOO0000 ,ensure_ascii =_O0O0O00O0OOO0OOO0 ))#line:356
			elif OOOOOOO00OO0OO00O !=OOOO00O0O0OOOOO00 :OOO0000O0OOOO0000 ={_O0000O000OO00OOOO :400 ,_OOOOOO000O00000O0 :'密码错误！'};sender .reply (json .dumps (OOO0000O0OOOO0000 ,ensure_ascii =_O0O0O00O0OOO0OOO0 ))#line:357
			OO0O000O00OO0OOO0 ={'qq':'QQ','tg':'TG','wb':'内置微信','qb':'QQ频道','wx':'微信'}#line:358
			if O00OO0O000OO0O0O0 not in OO0O000O00OO0OOO0 :I .ReqEvent (O00OO0O000OO0O0O0 ,O0O0OOO00OOO000O0 )#line:359
			else :middleware .push (O00OO0O000OO0O0O0 ,'',OOO0OOO0OO00000OO ,'',f"{O0OOO0O0O0000OO0O}");O0OOO0O0O0000OO0O =f"发送推送指令成功，消息推送到{OO0O000O00OO0OOO0[O00OO0O000OO0O0O0]}";O0O000000OOO00OO0 =200 #line:360
		except Exception as O00O000OOOO0O0O0O :O0O000000OOO00OO0 =400 ;O0OOO0O0O0000OO0O =f"推送失败，错误信息：{O00O000OOOO0O0O0O}"#line:361
		OOO0000O0OOOO0000 ={_O0000O000OO00OOOO :O0O000000OOO00OO0 ,_OOOOOO000O00000O0 :O0OOO0O0O0000OO0O };sender .reply (json .dumps (OOO0000O0OOOO0000 ,ensure_ascii =_O0O0O00O0OOO0OOO0 ))#line:362
	def FistGame (A ):#line:363
		O00O00OO0OOOO00O0 ='电脑';OOO00OOO00O0O00O0 ='玩家';O00O0O000000O0000 ='布';O00O0O0000OOO00OO ='剪刀';OO0O0OOOO0O0OO0OO ='石头'#line:364
		def OO0O00OO00OO0O0O0 (text ):#line:365
			O00000000OOOOO00O =''#line:366
			for O00O0O000O00O00OO in reversed (text ):#line:367
				if O00O0O000O00O00OO .isdigit ():O00000000OOOOO00O =O00O0O000O00O00OO +O00000000OOOOO00O #line:368
				else :break #line:369
			return O00000000OOOOO00O if O00000000OOOOO00O else _OOO00000O0O0000OO #line:370
		OOO0OO00OOOOO0000 =[OO0O0OOOO0O0OO0OO ,O00O0O0000OOO00OO ,O00O0O000000O0000 ];O0O0000OOO0OO0000 ={OOO00OOO00O0O00O0 :0 ,O00O00OO0OOOO00O0 :0 };O0OOO0OO000O00OO0 =0 ;OO0OO00OOO0000O0O =_OOO0OOOOOOOOO0O00 #line:371
		try :#line:372
			OO0OO00OOOO0O0OO0 =OO0O00OO00OO0O0O0 (UserMassage )#line:373
			if OO0OO00OOOO0O0OO0 is not _OOO00000O0O0000OO :OO0O0O0O0O00OOOO0 =int (OO0OO00OOOO0O0OO0 )#line:374
			else :OO0O0O0O0O00OOOO0 =int (ByYzyxmm .get ('GameCoin',1 ))#line:375
		except Exception :sender .reply ('游戏积分配参填写错误,请检查！');exit (0 )#line:376
		try :OO0OOO0OO000OO0O0 =int (ByYzyxmm .get ('Odds',50 ))/100 #line:377
		except Exception :sender .reply ('游戏配参填写错误,请检查！');exit (0 )#line:378
		try :#line:379
			while _OOO0OOOOOOOOO0O00 :#line:380
				if A .UserCoin <OO0O0O0O0O00OOOO0 :OO0OO00OOO0000O0O =_O0O0O00O0OOO0OOO0 ;sender .reply ('积分不足，无法进行游戏，可以发送‘签到’‘积分充值’获取积分');exit (0 )#line:381
				OOO00O0O0OOO0O00O ='';OOOOOOOO0OOO00OO0 =A .Interactive .inputm (mes =f"🔔请出招(石头/剪刀/布)\n输入q退出:")#line:382
				if OOOOOOOO0OOO00OO0 not in OOO0OO00OOOOO0000 :#line:383
					O0OOO0OO000O00OO0 +=1 #line:384
					if O0OOO0OO000O00OO0 ==3 :sender .reply ('输入错误次数过多，退出程序！');exit (0 )#line:385
					sender .reply ('输入错误，请重试!');continue #line:386
				if random .random ()<OO0OOO0OO000OO0O0 :#line:387
					if OOOOOOOO0OOO00OO0 ==OO0O0OOOO0O0OO0OO :O00OO0OO00O00O000 =O00O0O0000OOO00OO #line:388
					elif OOOOOOOO0OOO00OO0 ==O00O0O0000OOO00OO :O00OO0OO00O00O000 =O00O0O000000O0000 #line:389
					else :O00OO0OO00O00O000 =OO0O0OOOO0O0OO0OO #line:390
				elif OOOOOOOO0OOO00OO0 ==OO0O0OOOO0O0OO0OO :O00OO0OO00O00O000 =O00O0O000000O0000 #line:391
				elif OOOOOOOO0OOO00OO0 ==O00O0O0000OOO00OO :O00OO0OO00O00O000 =OO0O0OOOO0O0OO0OO #line:392
				else :O00OO0OO00O00O000 =O00O0O0000OOO00OO #line:393
				OOO00O0O0OOO0O00O +=f"🤖电脑出: {O00OO0OO00O00O000}\n";OOO00O0O0OOO0O00O +=f"🤪玩家出: {OOOOOOOO0OOO00OO0}\n"#line:394
				if OOOOOOOO0OOO00OO0 ==O00OO0OO00O00O000 :OOO00O0O0OOO0O00O +='平局!\n'#line:395
				elif OOOOOOOO0OOO00OO0 ==OO0O0OOOO0O0OO0OO and O00OO0OO00O00O000 ==O00O0O0000OOO00OO or OOOOOOOO0OOO00OO0 ==O00O0O0000OOO00OO and O00OO0OO00O00O000 ==O00O0O000000O0000 or OOOOOOOO0OOO00OO0 ==O00O0O000000O0000 and O00OO0OO00O00O000 ==OO0O0OOOO0O0OO0OO :OOO00O0O0OOO0O00O +='🔥你赢了!\n';O0O0000OOO0OO0000 [OOO00OOO00O0O00O0 ]+=1 ;A .UserCoin =A .UserCoin +OO0O0O0O0O00OOOO0 ;middleware .bucketSet (bucket =_OOOO00OO0O00OO00O ,key =f"{userid}",value =str (A .UserCoin ));OOO00O0O0OOO0O00O +=f"🎉获得{OO0O0O0O0O00OOOO0}积分\n";OOO00O0O0OOO0O00O +=f"💰当前共{A.UserCoin}积分\n"#line:396
				else :OOO00O0O0OOO0O00O +='❎电脑赢了!\n';O0O0000OOO0OO0000 [O00O00OO0OOOO00O0 ]+=1 ;A .UserCoin =A .UserCoin -OO0O0O0O0O00OOOO0 ;middleware .bucketSet (bucket =_OOOO00OO0O00OO00O ,key =f"{userid}",value =str (A .UserCoin ));OOO00O0O0OOO0O00O +=f"🔔输掉{OO0O0O0O0O00OOOO0}积分\n";OOO00O0O0OOO0O00O +=f"💰当前共{A.UserCoin}积分\n"#line:397
				sender .reply (OOO00O0O0OOO0O00O );O0OOO0OO000O00OO0 =0 #line:398
		except SystemExit :#line:399
			if OO0OO00OOO0000O0O :sender .reply (f"🤪玩家:{O0O0000OOO0OO0000[OOO00OOO00O0O00O0]} \n🤖电脑:{O0O0000OOO0OO0000[O00O00OO0OOOO00O0]}\n⚠️游戏结束! 每{ByYzyxmm.get(_OOOOO00O0000OO000,100)}积分相当于1元")#line:400
	def main (A ):#line:401
		if 'Y_'in UserMassage :A .CardVerification ()#line:402
		elif '猜拳'in UserMassage :A .FistGame ()#line:403
		elif '签到'in UserMassage :A .PunchClock ()#line:404
		elif '查询'in UserMassage :A .PointsInquiry ()#line:405
		elif '充值'in UserMassage :A .RechargePoints ()#line:406
		elif '生成'in UserMassage :#line:407
			if sender .isAdmin ():A .PasswordGeneration ()#line:408
			else :sender .reply ('你没有权限使用此功能！')#line:409
		elif imtype =='fake':A .CronRun ()#line:410
		elif imtype =='rt':A .ReqPush ()#line:411
		else :sender .setContinue ()#line:412
if __name__ =='__main__':MaTrixFunction ().main ()
