# [rule: ^(甬派.*|.*甬派)$]
# 设置青龙容器
# [param: {"required":true,"key":"Yzyxmm_yongpai_PluginsData.Qinglong","bool":false,"placeholder":"http://xxx.xx丨ClientID丨ClientSecret","name":"设置对接容器","desc":"你的变量需要添加到的容器？参数用丨分割，这个符号是中文的竖(直接复制)"}]
# 青龙的变量名
# [param: {"required":true,"key":"Yzyxmm_yongpai_PluginsData.EnvName","bool":false,"placeholder":"必填项,例:pangguai","name":"青龙变量名","desc":"青龙容器内甬派的变量名"}]
# [param: {"required":true,"key":"Yzyxmm_yongpai_PluginsData.MonthlyFee","bool":false,"placeholder":"例:0.88,不填为0元","name":"上车价格","desc":"上车价格(单位:元)/月"}]
# [param: {"required":true,"key":"Yzyxmm_yongpai_PluginsData.filespath","bool":false,"placeholder":"例：YongPai.json","name":"上车价格","desc":"运行记录文件在青龙中的路径，不填则无法查询"}]

_OO00000O0000OOOOO ='暂未绑定甬派账号,发送‘甬派登录’进行绑定！'#line:4
_OOOO000000OO0O0O0 ='Yzyxmm_yongpai_invalid'#line:5
_O00OO0OO0O0000O00 ='Yzyxmm_yongpai_account'#line:6
_OOOO0OOO00O0O0000 ='token'#line:7
_OOOOOO000O00O00O0 =False #line:8
_OO0OOO0O0OO0O0OOO ='账密无效'#line:9
_O0O0OOO0OO00000OO ='Yzyxmm_yongpai_vip'#line:10
_O0000OO0O00OO0O0O =True #line:11
_OO0O0O0OO00OOO0O0 ='data'#line:12
_O000OO0O0OOOOO00O ='Yzyxmm_yongpai_bind'#line:13
_OO000O000000OO0O0 =None #line:14
import json ,middleware ,hashlib ,requests #line:15
from datetime import datetime #line:16
import uuid ,time #line:17
senderID =middleware .getSenderID ()#line:18
sender =middleware .Sender (senderID )#line:19
userid =sender .getUserID ()#line:20
try :import Yzyxmm #line:21
except Exception :sender .reply (f"未安装核心插件，请前往市场安装MaTrix后再试！");exit (0 )#line:22
BasicInteraction =Yzyxmm .BasicInteraction ()#line:23
payment =Yzyxmm .PaymentAPI ()#line:24
AutService =Yzyxmm .AutPlugins ('甬派','Yzyxmm_yongpai_PluginsData',Container =_O0000OO0O00OO0O0O )#line:25
PluginsDatas =AutService .GetPluginsDatas ()#line:26
uservalue =middleware .bucketGet (bucket =_O000OO0O0OOOOO00O ,key =userid )#line:27
usermessage =sender .getMessage ()#line:28
today_time =str (datetime .now ().date ())#line:29
imtype =sender .getImtype ()#line:30
class Plugins :#line:31
	def __init__ (O0OOOOO0000O0OOOO ):O0OOOOO0000O0OOOO .phone =_OO000O000000OO0O0 ;O0OOOOO0000O0OOOO .deviceId =str (uuid .uuid4 ());O0OOOOO0000O0OOOO .password =_OO000O000000OO0O0 ;O0OOOOO0000O0OOOO .userId =_OO000O000000OO0O0 ;O0OOOOO0000O0OOOO .AccountToken =_OO000O000000OO0O0 ;O0OOOOO0000O0OOOO .jwtToken =_OO000O000000OO0O0 ;O0OOOOO0000O0OOOO .account =_OO000O000000OO0O0 ;O0OOOOO0000O0OOOO .mobile =_OO000O000000OO0O0 #line:32
	def BindAccount (OOOO000OOO00000OO ):#line:33
		def O0OO00O00O00O0OO0 (O000OOOO0O0O00OO0 ):#line:34
			if len (O00O0000O0OOOOO0O )!=0 and O00O0000O0OOOOO0O >=today_time :#line:35
				AutService .AddEnvs (OO0OO0000O00O0OO0 ,OOOO000OOO00000OO .account ,f"{OO000OO0O0O0O0000}")#line:36
				if O000OOOO0O0O00OO0 :O0O000O0O0OOOO0O0 .append (OOOO000OOO00000OO .account );sender .reply (f"🤪{OO000OO0O0O0O0000}添加账号成功！\n————————————————\n» 可发送‘甬派管理’进行管理！")#line:37
				else :sender .reply (f"🤪{OO000OO0O0O0O0000}更新账号成功！\n————————————————\n» 可发送‘甬派管理’进行管理！")#line:38
			elif O000OOOO0O0O00OO0 :O0O000O0O0OOOO0O0 .append (OOOO000OOO00000OO .account );sender .reply (f"🤪{OO000OO0O0O0O0000}添加账号成功！\n————————————————\n» 未授权发送‘甬派管理’进行授权！")#line:39
			else :sender .reply (f"🤪{OO000OO0O0O0O0000}更新账号成功！\n————————————————\n» 授权过期发送‘甬派管理’进行续期！")#line:40
			middleware .bucketSet (bucket =_O000OO0O0OOOOO00O ,key =userid ,value =f"{O0O000O0O0OOOO0O0}")#line:41
		OOOO000OOO00000OO .phone =BasicInteraction .inputm ('请输入手机号：',long =11 );OOOO000OOO00000OO .password =BasicInteraction .inputm ('请输入密码：');O000OOOO0O00OO000 ,OO000O00OO0000000 =OOOO000OOO00000OO .login ()#line:42
		if not O000OOOO0O00OO000 :sender .reply (f"登录失败：{OO000O00OO0000000}");return #line:43
		OO0OOOOO0O0O000OO =BasicInteraction .inputm ('请输入支付宝手机或邮箱：');O000O0O00O0OO0OOO =BasicInteraction .inputm ('请输入支付宝实名：');OOOO000OOO00000OO .account =OOOO000OOO00000OO .phone ;OO000OO0O0O0O0000 =OOOO000OOO00000OO .account [:3 ]+'*'*4 +OOOO000OOO00000OO .account [7 :];OO0OO0000O00O0OO0 =f"{OOOO000OOO00000OO.phone}#{OOOO000OOO00000OO.password}#{OO0OOOOO0O0O000OO}#{O000O0O00O0OO0OOO}";middleware .bucketSet (bucket =_O00OO0OO0O0000O00 ,key =OOOO000OOO00000OO .account ,value =OO0OO0000O00O0OO0 );middleware .bucketSet (bucket =_OOOO000000OO0O0O0 ,key =OOOO000OOO00000OO .account ,value ='0');O00O0000O0OOOOO0O =middleware .bucketGet (bucket =_O0O0OOO0OO00000OO ,key =OOOO000OOO00000OO .account )#line:44
		if len (uservalue )==0 :O0O000O0O0OOOO0O0 =[];O0OO00O00O00O0OO0 (_O0000OO0O00OO0O0O )#line:45
		else :#line:46
			O0O000O0O0OOOO0O0 =eval (uservalue )#line:47
			if OOOO000OOO00000OO .account in O0O000O0O0OOOO0O0 :O0OO00O00O00O0OO0 (_OOOOOO000O00O00O0 )#line:48
			else :O0OO00O00O00O0OO0 (_O0000OO0O00OO0O0O )#line:49
	def login (O00OOOOOOOOOOOO00 ):#line:50
		O0OOO00OO00OOOO0O =str (int (time .time ()*1000 ));OOO00000OOOOOO00O =hashlib .md5 (f"globalDatetime{O0OOO00OO00OOOO0O}username{O00OOOOOOOOOOOO00.phone}test_123456679890123456".encode ()).hexdigest ();O0OO0O00OO00O0000 =f"https://ypapp.cnnb.com.cn/yongpai-user/api/login2/local3?username={O00OOOOOOOOOOOO00.phone}&password={O00OOOOOOOOOOOO00.password}&deviceId={O00OOOOOOOOOOOO00.deviceId}&globalDatetime={O0OOO00OO00OOOO0O}&sign={OOO00000OOOOOO00O}";O00OO0OOOO0OOO0OO =requests .get (O0OO0O00OO00O0000 ).json ()#line:51
		if O00OO0OOOO0OOO0OO .get ('code')==0 :O00OOOOOOOOOOOO00 .userId =O00OO0OOOO0OOO0OO .get (_OO0O0O0OO00OOO0O0 ).get ('userId');O00OOOOOOOOOOOO00 .AccountToken =O00OO0OOOO0OOO0OO .get (_OO0O0O0OO00OOO0O0 ).get (_OOOO0OOO00O0O0000 );O00OOOOOOOOOOOO00 .jwtToken =O00OO0OOOO0OOO0OO .get (_OO0O0O0OO00OOO0O0 ).get ('jwtToken');return _O0000OO0O00OO0O0O ,_OO000O000000OO0O0 #line:52
		else :OOO0O00O0OO0O00O0 =O00OO0OOOO0OOO0OO .get ('message','未知错误');return _OOOOOO000O00O00O0 ,OOO0O00O0OO0O00O0 #line:53
	def GetAccountMessage (O0OOO0O0O0OO000OO ):#line:54
		OOO00OOO0O0O00000 =middleware .bucketGet (bucket =_O0O0OOO0OO00000OO ,key =O0OOO0O0O0OO000OO .account );O0OOO0O0O0OO000OO .token =middleware .bucketGet (bucket =_O00OO0OO0O0000O00 ,key =O0OOO0O0O0OO000OO .account );O0OOO0O0O0OO000OO .phone =O0OOO0O0O0OO000OO .token .split ('#')[0 ];O0OOO0O0O0OO000OO .password =O0OOO0O0O0OO000OO .token .split ('#')[1 ];O0OOO0O0O0OO000OO .mobile =O0OOO0O0O0OO000OO .phone [:3 ]+'*'*4 +O0OOO0O0O0OO000OO .phone [7 :];OO0OOO0OO0000O0OO =0 #line:55
		if len (OOO00OOO0O0O00000 )==0 :OOO00OOO0O0O00000 ='未授权'#line:56
		else :#line:57
			OO0OOO0OO0000O0OO =AutService .DayCalculation (OOO00OOO0O0O00000 )#line:58
			if OOO00OOO0O0O00000 <today_time :OOO00OOO0O0O00000 ='授权过期'#line:59
		OOO0OO0O000O0OO00 ,O000OOOO0OO00O000 =O0OOO0O0O0OO000OO .login ()#line:60
		if not OOO0OO0O000O0OO00 :O00O000OOOOO0O00O =_OO0OOO0O0OO0O0OOO #line:61
		else :O00O000OOOOO0O00O ='状态正常'#line:62
		return O00O000OOOOO0O00O ,OOO00OOO0O0O00000 ,OO0OOO0OO0000O0OO #line:63
	def AccountManagement (O0O00O0O000O0O0O0 ):#line:64
		if len (uservalue )==0 :AutService .ErrorMessage (_OO00000O0000OOOOO )#line:65
		O0OO0O0OO0000O0OO =eval (uservalue );OO00O00OOOO00OO0O =0 ;OOOO0O0O00OOO0O0O =''#line:66
		for O0O00O0O000O0O0O0 .account in O0OO0O0OO0000O0OO :O0O00OO00O0O0OO0O ,OOO00O00OO00OO00O ,O0OOOO00O0OO0OO0O =O0O00O0O000O0O0O0 .GetAccountMessage ();OO00O00OOOO00OO0O +=1 ;OOOO0O0O00OOO0O0O +=f"【{OO00O00OOOO00OO0O}】      ———\n🤪用户ID:{O0O00O0O000O0O0O0.mobile}\n🪫账号状态:{O0O00OO00O0O0OO0O}\n☁云授权:{OOO00O00OO00OO00O}\n"#line:67
		OO0O0O0OO0OOOO00O =f"————《甬派管理》————\n{OOOO0O0O00OOO0O0O}";sender .reply (OO0O0O0OO0OOOO00O );O000O00O00OO00O00 =BasicInteraction .inputm (mes ='请输入【】中的数字序号进行管理：',count =OO00O00OOOO00OO0O );O0O00O0O000O0O0O0 .account =O0OO0O0OO0000O0OO [O000O00O00OO00O00 -1 ];O0O00OO00O0O0OO0O ,OOO00O00OO00OO00O ,O0OOOO00O0OO0OO0O =O0O00O0O000O0O0O0 .GetAccountMessage ();sender .reply (f"🤪用户ID:{O0O00O0O000O0O0O0.mobile}\n🪫账号状态:{O0O00OO00O0O0OO0O}\n☁云授权:{OOO00O00OO00OO00O}");O000O00O00OO00O00 =BasicInteraction .inputm (mes ='【1】丨续费授权\n【3】丨批量授权\n【3】丨删除账号',count =3 )#line:68
		if O000O00O00OO00O00 ==1 :#line:69
			if O0O00OO00O0O0OO0O ==_OO0OOO0O0OO0O0OOO :AutService .ErrorMessage ('账密无效,请重新登录！')#line:70
			OOO00O00OO00OO00O ,O000O00O00OO00O00 ,O0O00000O00O0O0OO =AutService .empower (OOO00O00OO00OO00O );payment .pay (money =O0O00000O00O0O0OO ,project ='甬派授权',quantity =O000O00O00OO00O00 );middleware .bucketSet (bucket =_O0O0OOO0OO00000OO ,key =O0O00O0O000O0O0O0 .account ,value =OOO00O00OO00OO00O );AutService .AddEnvs (O0O00O0O000O0O0O0 .token ,O0O00O0O000O0O0O0 .account ,f"{O0O00O0O000O0O0O0.mobile}")#line:71
		elif O000O00O00OO00O00 ==2 :#line:72
			O000O00O00OO00O00 =BasicInteraction .inputm (mes ='请问您每个账号需要授权几个月？\n(只回复数字！)',count =99 );O0O00000O00O0O0OO =PluginsDatas .get ('MonthlyFee',0 );payment .pay (money =O0O00000O00O0O0OO ,project ='批量授权',quantity =O000O00O00OO00O00 *len (O0OO0O0OO0000O0OO ))#line:73
			for O0O00O0O000O0O0O0 .account in O0OO0O0OO0000O0OO :O0O00OO00O0O0OO0O ,OOO00O00OO00OO00O ,O0OOOO00O0OO0OO0O =O0O00O0O000O0O0O0 .GetAccountMessage ();OOO00O00OO00OO00O ,O000O00O00OO00O00 ,O0O00000O00O0O0OO =AutService .empower (OOO00O00OO00OO00O ,inputs =_OOOOOO000O00O00O0 ,mes =O000O00O00OO00O00 );middleware .bucketSet (bucket =_O0O0OOO0OO00000OO ,key =O0O00O0O000O0O0O0 .account ,value =OOO00O00OO00OO00O );AutService .AddEnvs (O0O00O0O000O0O0O0 .token ,O0O00O0O000O0O0O0 .account ,O0O00O0O000O0O0O0 .mobile )#line:74
		elif O000O00O00OO00O00 ==3 :#line:75
			if BasicInteraction .SingleChoiceQuestion (Content ='确定要删除该账号吗？',Choose1 ='是',Choose2 ='否'):#line:76
				AutService .DelEnvs (O0O00O0O000O0O0O0 .account );O0OO0O0OO0000O0OO .remove (O0O00O0O000O0O0O0 .account )#line:77
				if len (O0OO0O0OO0000O0OO )==0 :middleware .bucketDel (bucket =_O000OO0O0OOOOO00O ,key =userid )#line:78
				else :middleware .bucketSet (bucket =_O000OO0O0OOOOO00O ,key =userid ,value =f"{O0OO0O0OO0000O0OO}")#line:79
				sender .reply ('删除完成！');exit (0 )#line:80
	def qltoken (O0O00O00000OO0000 ):#line:81
		O0O0OO0OOO0OOOO0O =PluginsDatas .get ('Qinglong');O0OO0OO000O00O0O0 =['丨','|','#','＃'];O0000OOO00O0OOO00 =next ((O0000OOOOOOO0000O for O0000OOOOOOO0000O in O0OO0OO000O00O0O0 if O0000OOOOOOO0000O in O0O0OO0OOO0OOOO0O ),_OO000O000000OO0O0 )#line:82
		if O0000OOO00O0OOO00 :O0OOOO0O00000OO0O =O0O0OO0OOO0OOOO0O .split (O0000OOO00O0OOO00 );O0O00O00000OO0000 .QLurl ,O0O00O00000OO0000 .ClientID ,O0O00O00000OO0000 .ClientSecret =O0OOOO0O00000OO0O [0 ],O0OOOO0O00000OO0O [1 ],O0OOOO0O00000OO0O [2 ]#line:83
		else :AutService .ErrorMessage ('青龙面板配置有误！')#line:84
		O000OO000O0O0O0O0 =f"{O0O00O00000OO0000.QLurl}/open/auth/token?client_id={O0O00O00000OO0000.ClientID}&client_secret={O0O00O00000OO0000.ClientSecret}";O00O000O0OO0O0000 =requests .get (O000OO000O0O0O0O0 )#line:85
		if _OOOO0OOO00O0O0000 in O00O000O0OO0O0000 .text :O0O0OO0OOO0OOOO0O =O00O000O0OO0O0000 .json ();O0O00O00000OO0000 .qltoken =O0O0OO0OOO0OOOO0O [_OO0O0O0OO00OOO0O0 ][_OOOO0OOO00O0O0000 ]#line:86
		else :AutService .ErrorMessage ('青龙面板token获取失败！')#line:87
	def lookfiles (OOOO000000O0OOOOO ):#line:88
		OOOO000000O0OOOOO .qltoken ();OOOO000000O0OOOOO .filespath =PluginsDatas .get ('filespath')#line:89
		if '/'in OOOO000000O0OOOOO .filespath :OOOO0O0OOOO00O000 =OOOO000000O0OOOOO .filespath .split ('/');OO0OO0OO00OOOO0OO =OOOO0O0OOOO00O000 [0 ];OOO000O0000000O00 =OOOO0O0OOOO00O000 [1 ]#line:90
		else :OO0OO0OO00OOOO0OO ='';OOO000O0000000O00 =OOOO000000O0OOOOO .filespath #line:91
		O000O0000OO00OOO0 =f"{OOOO000000O0OOOOO.QLurl}/open/scripts/{OOO000O0000000O00}";O0O000OO0O0O0O0O0 ={'accept':'application/json','Authorization':'Bearer '+OOOO000000O0OOOOO .qltoken };O00OOOO0O00O000OO =requests .get (O000O0000OO00OOO0 ,headers =O0O000OO0O0O0O0O0 ,params ={'path':f"{OO0OO0OO00OOOO0OO}"});O00000O0O000O000O =O00OOOO0O00O000OO .json ()#line:92
		if O00000O0O000O000O ['code']==200 :#line:93
			try :OOOO000000O0OOOOO .QueryData =json .loads (O00000O0O000O000O [_OO0O0O0OO00OOO0O0 ])#line:94
			except Exception :AutService .ErrorMessage ('青龙面板查询文件格式有误！')#line:95
		else :AutService .ErrorMessage ('获取青龙面板查询文件失败！')#line:96
	def Query (O0000O0OO0O000000 ):#line:97
		O00O0OOOO000OO00O ='无数据';O0000O0OO0O000000 .lookfiles ();OO0OOO0OOOO00OOOO =O0000O0OO0O000000 .QueryData .get (O0000O0OO0O000000 .account )#line:98
		if OO0OOO0OOOO00OOOO is _OO000O000000OO0O0 :O0000O0OO0O000000 .TodayMone =O00O0OOOO000OO00O ;O0000O0OO0O000000 .CumulativeMoey =O00O0OOOO000OO00O #line:99
		else :O0000O0OO0O000000 .TodayMone =OO0OOO0OOOO00OOOO .get ('TodayMone');O0000O0OO0O000000 .CumulativeMoey =OO0OOO0OOOO00OOOO .get ('CumulativeMoey')#line:100
	def Querys (O0OO0O0O00O000OO0 ):#line:101
		if len (uservalue )==0 :AutService .ErrorMessage (_OO00000O0000OOOOO )#line:102
		sender .reply ('正在查询....');OO0O000O0OOOO0OOO =eval (uservalue )#line:103
		for O0OO0O0O00O000OO0 .account in OO0O000O0OOOO0OOO :#line:104
			OO0OO0OO0O0000OOO ,O00OOOOOO00O0O0O0 ,OO0O0OOO0O00OOOO0 =O0OO0O0O00O000OO0 .GetAccountMessage ()#line:105
			if O00OOOOOO00O0O0O0 in ['未授权','授权过期']:sender .reply (f"【{O0OO0O0O00O000OO0.mobile}】{O00OOOOOO00O0O0O0}")#line:106
			elif OO0OO0OO0O0000OOO ==_OO0OOO0O0OO0O0OOO :sender .reply (f"【{O0OO0O0O00O000OO0.mobile}】{OO0OO0OO0O0000OOO}")#line:107
			else :O0OO0O0O00O000OO0 .Query ();O0000OOOOOOO000OO =f"🤪用户ID:{O0OO0O0O00O000OO0.mobile}\n💰今日金额:{O0OO0O0O00O000OO0.TodayMone}元\n📒累计金额:{O0OO0O0O00O000OO0.CumulativeMoey}元\n☁️剩余授权:{OO0O0OOO0O00OOOO0}天";sender .reply (O0000OOOOOOO000OO )#line:108
	def CronTask (OO000O0000OO00O0O ):#line:109
		O0OO00OO0O0000O00 =middleware .bucketAllKeys (bucket =_O000OO0O0OOOOO00O )#line:110
		for O000OO0OO000OOOO0 in O0OO00OO0O0000O00 :#line:111
			OO000O0O0O0O00O00 =middleware .bucketGet (bucket =_O000OO0O0OOOOO00O ,key =O000OO0OO000OOOO0 );O00O0OOOO0O000OO0 =eval (OO000O0O0O0O00O00 )#line:112
			for OO000O0000OO00O0O .account in O00O0OOOO0O000OO0 :#line:113
				OOO00O0OOOOOO0O0O ,OO000OO00000000O0 ,O000OOO0O0OOO0OOO =OO000O0000OO00O0O .GetAccountMessage ()#line:114
				if OOO00O0OOOOOO0O0O ==_OO0OOO0O0OO0O0OOO :OOO00O0OOOOOO0O0O ='Token失效'#line:115
				O0O0O00OOOOO00OO0 =BasicInteraction .CronPush (acs =OOO00O0OOOOOO0O0O ,user =O000OO0OO000OOOO0 ,account =OO000O0000OO00O0O .account ,accountVip =OO000OO00000000O0 ,RemainingDays =O000OOO0O0OOO0OOO ,InvalidBucket =_OOOO000000OO0O0O0 ,VipoverMes =f"🔔{OO000O0000OO00O0O.mobile}甬派云授权过期，请及时发送‘甬派管理’续费！",TokenoverMes =f"🔔{OO000O0000OO00O0O.mobile}顺丰账密无效，请及时发送‘甬派登录’进行更新！")#line:116
				if O0O0O00OOOOO00OO0 :AutService .DelEnvs (OO000O0000OO00O0O .account )#line:117
	def main (OO000OO0OO0O0000O ):#line:118
		if '登录'in usermessage or '登陆'in usermessage :OO000OO0OO0O0000O .BindAccount ()#line:119
		elif '管理'in usermessage :OO000OO0OO0O0000O .AccountManagement ()#line:120
		elif '查询'in usermessage :OO000OO0OO0O0000O .Querys ()#line:121
		elif imtype =='fake':OO000OO0OO0O0000O .CronTask ()#line:122
if __name__ =='__main__':Plugins ().main ()
