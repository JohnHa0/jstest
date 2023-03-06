import System;
import System.Windows.Forms;
import Fiddler;

// INTRODUCTION
//
// Well, hello there!
//
// Don't be scared! :-)
//
// This is the FiddlerScript Rules file, which creates some of the menu commands and
// other features of Fiddler. You can edit this file to modify or add new commands.
//
// The original version of this file is named SampleRules.js and it is in the
// \Program Files\Fiddler\ folder. When Fiddler first runs, it creates a copy named
// CustomRules.js inside your \Documents\Fiddler2\Scripts folder. If you make a 
// mistake in editing this file, simply delete the CustomRules.js file and restart
// Fiddler. A fresh copy of the default rules will be created from the original
// sample rules file.

// The best way to edit this file is to install the FiddlerScript Editor, part of
// the free SyntaxEditing addons. Get it here: http://fiddler2.com/r/?SYNTAXVIEWINSTALL

// GLOBALIZATION NOTE: Save this file using UTF-8 Encoding.

// JScript.NET Reference
// http://fiddler2.com/r/?msdnjsnet
//
// FiddlerScript Reference
// http://fiddler2.com/r/?fiddlerscriptcookbook

class Handlers
{
    // *****************
    //
    // This is the Handlers class. Pretty much everything you ever add to FiddlerScript
    // belongs right inside here, or inside one of the already-existing functions below.
    //
    // *****************

    // The following snippet demonstrates a custom-bound column for the Web Sessions list.
    // See http://fiddler2.com/r/?fiddlercolumns for more info
    /*
      public static BindUIColumn("Method", 60)
      function FillMethodColumn(oS: Session): String {
         return oS.RequestMethod;
      }
    */

    // The following snippet demonstrates how to create a custom tab that shows simple text
    /*
       public BindUITab("Flags")
       static function FlagsReport(arrSess: Session[]):String {
        var oSB: System.Text.StringBuilder = new System.Text.StringBuilder();
        for (var i:int = 0; i<arrSess.Length; i++)
        {
            oSB.AppendLine("SESSION FLAGS");
            oSB.AppendFormat("{0}: {1}\n", arrSess[i].id, arrSess[i].fullUrl);
            for(var sFlag in arrSess[i].oFlags)
            {
                oSB.AppendFormat("\t{0}:\t\t{1}\n", sFlag.Key, sFlag.Value);
            }
        }
        return oSB.ToString();
    }
    */

    // You can create a custom menu like so:
    /*
    QuickLinkMenu("&Links") 
    QuickLinkItem("IE GeoLoc TestDrive", "http://ie.microsoft.com/testdrive/HTML5/Geolocation/Default.html")
    QuickLinkItem("FiddlerCore", "http://fiddler2.com/fiddlercore")
    public static function DoLinksMenu(sText: String, sAction: String)
    {
        Utilities.LaunchHyperlink(sAction);
    }
    */

    public static RulesOption("Hide 304s")
    BindPref("fiddlerscript.rules.Hide304s")
    var m_Hide304s: boolean = false;

    // Cause Fiddler to override the Accept-Language header with one of the defined values
    public static RulesOption("Request &Japanese Content")
    var m_Japanese: boolean = false;

    // Automatic Authentication
    public static RulesOption("&Automatically Authenticate")
    BindPref("fiddlerscript.rules.AutoAuth")
    var m_AutoAuth: boolean = false;

    // Cause Fiddler to override the User-Agent header with one of the defined values
    // The page http://browserscope2.org/browse?category=selectors&ua=Mobile%20Safari is a good place to find updated versions of these
    RulesString("&User-Agents", true) 
    BindPref("fiddlerscript.ephemeral.UserAgentString")
    RulesStringValue(0,"Netscape &3", "Mozilla/3.0 (Win95; I)")
    RulesStringValue(1,"WinPhone8.1", "Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 520) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537")
    RulesStringValue(2,"&Safari5 (Win7)", "Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1")
    RulesStringValue(3,"Safari9 (Mac)", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11) AppleWebKit/601.1.56 (KHTML, like Gecko) Version/9.0 Safari/601.1.56")
    RulesStringValue(4,"iPad", "Mozilla/5.0 (iPad; CPU OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12F5027d Safari/600.1.4")
    RulesStringValue(5,"iPhone6", "Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12F70 Safari/600.1.4")
    RulesStringValue(6,"IE &6 (XPSP2)", "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)")
    RulesStringValue(7,"IE &7 (Vista)", "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; SLCC1)")
    RulesStringValue(8,"IE 8 (Win2k3 x64)", "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.2; WOW64; Trident/4.0)")
    RulesStringValue(9,"IE &8 (Win7)", "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0)")
    RulesStringValue(10,"IE 9 (Win7)", "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)")
    RulesStringValue(11,"IE 10 (Win8)", "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident/6.0)")
    RulesStringValue(12,"IE 11 (Surface2)", "Mozilla/5.0 (Windows NT 6.3; ARM; Trident/7.0; Touch; rv:11.0) like Gecko")
    RulesStringValue(13,"IE 11 (Win8.1)", "Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; rv:11.0) like Gecko")
    RulesStringValue(14,"Edge (Win10)", "Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.11082")
    RulesStringValue(15,"&Opera", "Opera/9.80 (Windows NT 6.2; WOW64) Presto/2.12.388 Version/12.17")
    RulesStringValue(16,"&Firefox 3.6", "Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.2.7) Gecko/20100625 Firefox/3.6.7")
    RulesStringValue(17,"&Firefox 43", "Mozilla/5.0 (Windows NT 6.3; WOW64; rv:43.0) Gecko/20100101 Firefox/43.0")
    RulesStringValue(18,"&Firefox Phone", "Mozilla/5.0 (Mobile; rv:18.0) Gecko/18.0 Firefox/18.0")
    RulesStringValue(19,"&Firefox (Mac)", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:24.0) Gecko/20100101 Firefox/24.0")
    RulesStringValue(20,"Chrome (Win)", "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.48 Safari/537.36")
    RulesStringValue(21,"Chrome (Android)", "Mozilla/5.0 (Linux; Android 5.1.1; Nexus 5 Build/LMY48B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.78 Mobile Safari/537.36")
    RulesStringValue(22,"ChromeBook", "Mozilla/5.0 (X11; CrOS x86_64 6680.52.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.74 Safari/537.36")
    RulesStringValue(23,"GoogleBot Crawler", "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)")
    RulesStringValue(24,"Kindle Fire (Silk)", "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us; Silk/1.0.22.79_10013310) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16 Silk-Accelerated=true")
    RulesStringValue(25,"&Custom...", "%CUSTOM%")
    public static var sUA: String = null;

    // Cause Fiddler to delay HTTP traffic to simulate typical 56k modem conditions
    public static RulesOption("Simulate &Modem Speeds", "Per&formance")
    var m_SimulateModem: boolean = false;

    // Removes HTTP-caching related headers and specifies "no-cache" on requests and responses
    public static RulesOption("&Disable Caching", "Per&formance")
    var m_DisableCaching: boolean = false;

    public static RulesOption("Cache Always &Fresh", "Per&formance")
    var m_AlwaysFresh: boolean = false;
        
    // Force a manual reload of the script file.  Resets all
    // RulesOption variables to their defaults.
    public static ToolsAction("Reset Script")
    function DoManualReload() { 
        FiddlerObject.ReloadScript();
    }

    public static ContextAction("Decode Selected Sessions")
    function DoRemoveEncoding(oSessions: Session[]) {
        for (var x:int = 0; x < oSessions.Length; x++){
            oSessions[x].utilDecodeRequest();
            oSessions[x].utilDecodeResponse();
        }
        UI.actUpdateInspector(true,true);
    }

    static function OnBeforeRequest(oSession: Session) {
        // Sample Rule: Color ASPX requests in RED
        // if (oSession.uriContains(".aspx")) {	oSession["ui-color"] = "red";	}

        // Sample Rule: Flag POSTs to fiddler2.com in italics
        // if (oSession.HostnameIs("www.fiddler2.com") && oSession.HTTPMethodIs("POST")) {	oSession["ui-italic"] = "yup";	}

        // Sample Rule: Break requests for URLs containing "/sandbox/"
        // if (oSession.uriContains("/sandbox/")) {
        //     oSession.oFlags["x-breakrequest"] = "yup";	// Existence of the x-breakrequest flag creates a breakpoint; the "yup" value is unimportant.
        // }

        if ((null != gs_ReplaceToken) && (oSession.url.indexOf(gs_ReplaceToken)>-1)) {   // Case sensitive
            oSession.url = oSession.url.Replace(gs_ReplaceToken, gs_ReplaceTokenWith); 
        }
        if ((null != gs_OverridenHost) && (oSession.host.toLowerCase() == gs_OverridenHost)) {
            oSession["x-overridehost"] = gs_OverrideHostWith; 
        }

        if ((null!=bpRequestURI) && oSession.uriContains(bpRequestURI)) {
            oSession["x-breakrequest"]="uri";
        }

        if ((null!=bpMethod) && (oSession.HTTPMethodIs(bpMethod))) {
            oSession["x-breakrequest"]="method";
        }

        if ((null!=uiBoldURI) && oSession.uriContains(uiBoldURI)) {
            oSession["ui-bold"]="QuickExec";
        }

        if (m_SimulateModem) {
            // Delay sends by 300ms per KB uploaded.
            oSession["request-trickle-delay"] = "300"; 
            // Delay receives by 150ms per KB downloaded.
            oSession["response-trickle-delay"] = "150"; 
        }

        if (m_DisableCaching) {
            oSession.oRequest.headers.Remove("If-None-Match");
            oSession.oRequest.headers.Remove("If-Modified-Since");
            oSession.oRequest["Pragma"] = "no-cache";
        }

        // User-Agent Overrides
        if (null != sUA) {
            oSession.oRequest["User-Agent"] = sUA; 
        }

        if (m_Japanese) {
            oSession.oRequest["Accept-Language"] = "ja";
        }

        if (m_AutoAuth) {
            // Automatically respond to any authentication challenges using the 
            // current Fiddler user's credentials. You can change (default)
            // to a domain\\username:password string if preferred.
            //
            // WARNING: This setting poses a security risk if remote 
            // connections are permitted!
            oSession["X-AutoAuth"] = "(default)";
        }

        if (m_AlwaysFresh && (oSession.oRequest.headers.Exists("If-Modified-Since") || oSession.oRequest.headers.Exists("If-None-Match")))
        {
            oSession.utilCreateResponseAndBypassServer();
            oSession.responseCode = 304;
            oSession["ui-backcolor"] = "Lavender";
        }
		if( oSession.fullUrl.Contains("http://xx.com1/")){
			oSession.utilDecodeResponse();
			oSession["ui-bold"] =	"true";
			var fso;
			var file;
				var sw : System.IO.StreamWriter; 
			fso = new ActiveXObject("Scripting.FileSystemObject");
			var datestr=oSession.Timers.ClientBeginRequest.ToUniversalTime().ToString('yyyy-MM-dd');
			var filename="d:/zq/xx.txt";
			var str=System.IO.File.ReadAllText(filename)
		//	FiddlerObject.alert(str)
			var json=Fiddler.WebFormats.JSON.JsonDecode(str);
			//FiddlerObject.alert(json.JSONObject.length)
			var p=oSession.GetRequestBodyAsString();
			
			if (System.IO.File.Exists(filename)){  //是否有该文件夹  
				System.IO.File.Delete(filename)
				sw = System.IO.File.CreateText(filename); 
				sw.Write(p);  
			}  
			else{  
				sw = System.IO.File.CreateText(filename);  //没有创建
				sw.Write(p);  
			}  
			sw.Close();  
			sw.Dispose();  
		
		}
		if( oSession.fullUrl.Contains("https://www.bfytech.com/dati_server302/public/index.php/wxapi/index/sendResult")){
		//	oSession.utilDecodeResponse();
			oSession["ui-bold"] =	"true";
			var que=oSession.GetRequestBodyAsString();
			var json=Fiddler.WebFormats.JSON.JsonDecode(que);
			json.JSONObject["time_consuming"]=1;
			json.JSONObject["score"]=100;
			var newstr=Fiddler.WebFormats.JSON.JsonEncode(json.JSONObject);
			oSession.utilSetRequestBody(newstr);
			
		}
    }

    // This function is called immediately after a set of request headers has
    // been read from the client. This is typically too early to do much useful
    // work, since the body hasn't yet been read, but sometimes it may be useful.
    //
    // For instance, see 
    // http://blogs.msdn.com/b/fiddler/archive/2011/11/05/http-expect-continue-delays-transmitting-post-bodies-by-up-to-350-milliseconds.aspx
    // for one useful thing you can do with this handler.
    //
    // Note: oSession.requestBodyBytes is not available within this function!
/*
    static function OnPeekAtRequestHeaders(oSession: Session) {
        var sProc = ("" + oSession["x-ProcessInfo"]).ToLower();
        if (!sProc.StartsWith("mylowercaseappname")) oSession["ui-hide"] = "NotMyApp";
    }
*/

    //
    // If a given session has response streaming enabled, then the OnBeforeResponse function 
    // is actually called AFTER the response was returned to the client.
    //
    // In contrast, this OnPeekAtResponseHeaders function is called before the response headers are 
    // sent to the client (and before the body is read from the server).  Hence this is an opportune time 
    // to disable streaming (oSession.bBufferResponse = true) if there is something in the response headers 
    // which suggests that tampering with the response body is necessary.
    // 
    // Note: oSession.responseBodyBytes is not available within this function!
    //
    static function OnPeekAtResponseHeaders(oSession: Session) {
        //FiddlerApplication.Log.LogFormat("Session {0}: Response header peek shows status is {1}", oSession.id, oSession.responseCode);
        if (m_DisableCaching) {
            oSession.oResponse.headers.Remove("Expires");
            oSession.oResponse["Cache-Control"] = "no-cache";
        }

        if ((bpStatus>0) && (oSession.responseCode == bpStatus)) {
            oSession["x-breakresponse"]="status";
            oSession.bBufferResponse = true;
        }
        
        if ((null!=bpResponseURI) && oSession.uriContains(bpResponseURI)) {
            oSession["x-breakresponse"]="uri";
            oSession.bBufferResponse = true;
        }

    }

    static function OnBeforeResponse(oSession: Session) {
        if (m_Hide304s && oSession.responseCode == 304) {
            oSession["ui-hide"] = "true";
        }
		if( oSession.fullUrl.Contains("csyx")||oSession.fullUrl.Contains("jjhyzcyx_new")||oSession.fullUrl.Contains("https://wx.ok0769.com/wxapi/cpic20200319o")){
			oSession["ui-bold"] =	"true";
			oSession.utilDecodeResponse();
		
			//	 var str =  oSession.GetResponseBodyAsString();
			
			//	str.replace("hg = {};","hg = {};alert('xxx')");
			//	if(str.Contains("1231231")) 
			//	FiddlerObject.alert("xx");
			//	 oSession.utilSetResponseBody(str);
			//	oSession.utilReplaceInResponse("cloudImg.x = Math.floor(xList[xList.index++]*g_rem*ratio);","cloudImg.x = 100;");
			//	oSession.utilReplaceInResponse("gameEnd();"," ");
			//	oSession.utilReplaceInResponse("hg.time.end();","if(hg.grade.val<1000){jumperUp();} else{gameEnd();hg.time.end();}");
			if(oSession.clientIP.Contains(".2.")){
				// oSession.utilReplaceInResponse("function jump(){",
				//     "var first,index=1; $(function(){try{function a(){$.ajax({type:'post',url:rankurl,dataType:'text',success:function(r){var s=$.parseJSON(r);var p=s.rankList;var t=s.rank;first=parseInt(p[index].achievement)+100}})}setInterval(a,1000)}catch(e){alert(e.name+': '+e.message)}});  function jump(){");
			}else{
				oSession.utilReplaceInResponse("function jump(){",
					"var first,index=0; $(function(){try{function a(){$.ajax({type:'post',url:rankurl,dataType:'text',success:function(r){var s=$.parseJSON(r);var p=s.rankList;var t=s.rank;first=parseInt(p[index].achievement)+100}})}setInterval(a,1000)}catch(e){alert(e.name+': '+e.message)}});  function jump(){");
		
			}
			//	oSession.utilReplaceInResponse("function jump(){","var first=parseInt(prompt(\"xxx\",\"14440\"))+parseInt(Math.random()*0)*40;function jump(){");
			oSession.utilReplaceInResponse("if(step <= 5){","$('#grade').show();if(hg.grade.val<first){ ");
			oSession.utilReplaceInResponse(" delta > 500 && (delta = 0);"," delta=300");
			oSession.utilReplaceInResponse("jumperImg.x = 0;"," jumperImg.x = 200;");
			//	oSession.utilReplaceInResponse("jumperImg.x -= jumpImg_x*ratio"," jumperImg.x = $(window).width()*ratio/2-jumperImg.w/2");
			//	oSession.utilReplaceInResponse("jumperImg.x += jumpImg_x*ratio;"," jumperImg.x = $(window).width()*ratio/2-jumperImg.w/2");
			oSession.utilReplaceInResponse("jumperImg.x -= jumpImg_x*ratio"," jumperImg.x = cloudList[0].x+4");
			oSession.utilReplaceInResponse("jumperImg.x += jumpImg_x*ratio;","  jumperImg.x = cloudList[0].x+4");
			oSession.utilReplaceInResponse("if(!cloud.hasStep){","if(!cloud.hasStep&&hg.grade.val<first){");
			oSession.utilReplaceInResponse("var initTime = 120;","var initTime = 150;");
			oSession.utilReplaceInResponse("jumperImg.a = 2*s/(t*t)","jumperImg.a = 2*2000/(t*t)");
			oSession.utilReplaceInResponse("cloudDistance = canvas.height/3;","cloudDistance = canvas.height/7;");
			oSession.utilReplaceInResponse("\"hideRank\":true","\"hideRank\":false");	
			oSession.utilReplaceInResponse("hideRank = true","hideRank = false");
		}
		
		if( oSession.fullUrl.Contains("dqgryhl.html")){//躲避 
			oSession["ui-bold"] =	"true";
			oSession.utilDecodeResponse();
			
			//	oSession.utilReplaceInResponse("hg.time = HdGame.initTime(initTime);","hg.time = HdGame.initTime(70);");//70作弊  82.77作弊
			//	oSession.utilReplaceInResponse("if(_this.fixed == 1 && hg.time.val >= tList.last.t){","if(_this.fixed == 1 && hg.time.val >= 4){");
			//		oSession.utilReplaceInResponse("if(_this.fixed == 0 && hg.time.val >= tList.last.t - 2){","if(_this.fixed == 0 && hg.time.val >=2){");
			//oSession.utilReplaceInResponse("this.addChild(this.forward);","this.addChild(this.forward);var event;");//70作弊  82.77作弊
			//oSession.utilReplaceInResponse("var touches = e.touches[0];","var touches = e.touches[0];event=e;");//70作弊  82.77作弊
			//  oSession.utilReplaceInResponse("Soccer.prototype.update = function()","var first=parseFloat(prompt(\"xxx\",\"119.9\"));Soccer.prototype.update = function()");
			oSession.utilReplaceInResponse("Soccer.prototype.update = function()",
				"var first1=parseFloat(prompt(\"xxx\",\"118.3\"));var first,index=10; Soccer.prototype.update = function()");
       
			oSession.utilReplaceInResponse("if(rt === false){","if(hg.time.val>=119.8){");//70作弊  82.77作弊 //  61.7+parseInt(Math.random()*40)/100
			oSession.utilReplaceInResponse("_this.gLayer.addChild(new Guard(x,-gData.height,true));",
				"_this.gLayer.addChild(new Guard(x,-gData.height,true));try{ _this.touches.x=gData.width*tList.last.x+forwardW/2;} catch (e) { alert(e.name + \": \" + e.message); } ");
		}
		if( oSession.fullUrl.Contains("jrdpd.html")){//翻牌
			oSession["ui-bold"] =	"true";
			oSession.utilDecodeResponse();
			//	oSession.utilReplaceInResponse(" if(jrFlag1 == ''){","num1=num2;jrCheckNum=10;if(jrFlag1 == ''){");//70作弊
			//	oSession.utilReplaceInResponse("$(this).addClass('jrNum'+temp[i]);"," $(this).addClass('jrChecked');");
			oSession.utilReplaceInResponse("var touchLock = false;"," var touchLock = false,eve;");
			oSession.utilReplaceInResponse("if(e.originalEvent.touches.length > 2){","eve=e; if(e.originalEvent.touches.length > 2){");
			oSession.utilReplaceInResponse("if(jrFlag1 == ''){","setTimeout(function(){var num1 = parseInt(jrFlag1.attr('jrNum'));$(\"#gameImgBox .jrImgBox[jrNum='\"+num1+\"']\").trigger(eve);},200);if(jrFlag1 == ''){");
		}
		if( oSession.fullUrl.Contains("zjdsg.html")){//兑话 貌似低于24秒 算作弊
			oSession["ui-bold"] =	"true";
			oSession.utilDecodeResponse();
			oSession.utilReplaceInResponse("gameStatus.status = \"wrong\";","gameStatus.status = \"right\";");//
			oSession.utilReplaceInResponse("var rAnswer = answerList[answerList.length-1].rAnswer;","answerList=[{\"title\":\"呜呜呜，我分手了！\",\"answer\":\"你在哪？\",\"wrong\":[\"别伤心了，多喝点热水\",\"你饿不饿吖？我叫外卖给你吃\",\"哈哈哈哈，好啊，终于轮到我备胎上场了\"],\"wAnswer\":\"你给我滚！\"}];var rAnswer = answerList[answerList.length-1].rAnswer;");//
			oSession.utilReplaceInResponse("gameOver('fail');"," gameOver(hg.time.val);");//
			oSession.utilReplaceInResponse("if(g_config.isOpenAreaLimit){","if(false){");//
			oSession.utilReplaceInResponse("if(gameStatus.status === \"wrong\"){","if(gameStatus.status === \"wrong\"&& hg.time.val>16){");//
		}
		if( oSession.fullUrl.Contains("zxg.html")){//拆快递
			oSession["ui-bold"] =	"true";
			oSession.utilDecodeResponse();
			
			oSession.utilReplaceInResponse("$('#canvas').bind('touchstart',function(e){",
				"var tuc;$('#canvas').bind('touchstart',function(e){");
			oSession.utilReplaceInResponse("},50);",
				"$('#canvas').trigger('touchstart'),e},10);");
			oSession.utilReplaceInResponse("createTime = 0.5 - 0.1*index;",
				"createTime = 0.09;");
			oSession.utilReplaceInResponse("var touchLock = false;",
				"var first,index=1; $(function(){try{function a(){$.ajax({type:'post',url:rankurl,dataType:'text',success:function(r){var s=$.parseJSON(r);var p=s.rankList;var t=s.rank;first=parseInt(p[index].achievement)}})}setInterval(a,1000)}catch(e){alert(e.name+': '+e.message)}}); var touchLock = false;");
			
			//oSession.utilReplaceInResponse0("e = e.originalEvent;",
			//	"var ev=e;try{e = e.originalEvent;} catch (e) { alert(e.name + \": \" + e.message); }");
			oSession.utilReplaceInResponse("e.preventDefault();","if(hg.grade.val>first+parseInt(Math.random()*2)*10) return;");//改这里
			oSession.utilReplaceInResponse("e = e.originalEvent;"," ");
			oSession.utilReplaceInResponse("touchX = e.clientX || e.changedTouches[0].clientX;"," ");
			oSession.utilReplaceInResponse("touchY = (e.clientY || e.changedTouches[0].clientY) - 80;"," ");
			oSession.utilReplaceInResponse(" if(touchX > xgX && touchX < (xgX + xg.w/ratio) && touchY > xgY && touchY < (xgY + xg.h/ratio)){",
				"touchX=xgX+2 ;touchY=xgY+2;if(touchX > xgX && touchX < (xgX + xg.w/ratio) && touchY > xgY && touchY < (xgY + xg.h/ratio)){");//70作弊
		}
		if( oSession.fullUrl.Contains("bpb")){// 单身狗 
			oSession["ui-bold"] =	"true";
			oSession.utilDecodeResponse();
			
			oSession.utilReplaceInResponse("function updateGame(){",
				"var first,index=1; $(function(){try{function a(){$.ajax({type:'post',url:rankurl,dataType:'text',success:function(r){var s=$.parseJSON(r);var p=s.rankList;var t=s.rank;first=parseInt(p[index].achievement)}})}setInterval(a,1000)}catch(e){alert(e.name+': '+e.message)}});  function updateGame(){");
			oSession.utilReplaceInResponse("crrScore = -80;"," ");//if(hg.grade.val>500) {hg.time.end();return;}
			oSession.utilReplaceInResponse("switch(this.type){","switch(1){");
			oSession.utilReplaceInResponse("if(tem.name === 'htree'){","if(hg.grade.val>first+5){");//设置分数40秒2590
			oSession.utilReplaceInResponse(" }else if(tem.type === cowboy.type){"," }else{")
			oSession.utilReplaceInResponse("GameArg.playTimer = setTimeout(arguments.callee,650*GameArg.createTimeRatio);",
				"GameArg.playTimer = setTimeout(arguments.callee,650*0.1 ) ")//创建分数速度  改小数
			//	oSession.utilReplaceInResponse("var create_time = GameArg.canvas.height/(GameArg.speed*8);","var create_time = GameArg.canvas.height/(GameArg.speed*50);");
			oSession.utilReplaceInResponse("speed = (offsetY - g.pointY)/(g.cowboyY - g.pointY)*g.speed,","  speed = 11*g.speed,");
			//	oSession.utilReplaceInResponse("if(tem.name === 'beer' && tem.offsetY > GameArg.cowboyY - GameArg.crashY && tem.offsetY < GameArg.cowboyY + GameArg.crashY){","if(tem.name === 'beer'){");
			//	oSession.utilReplaceInResponse("}else if(tem.name === 'gold' && tem.offsetY > GameArg.cowboyY - GameArg.crashY && tem.offsetY < GameArg.cowboyY + GameArg.crashY){","}else if(tem.name === 'gold'){");
		}
		if( oSession.fullUrl.Contains("dsgdphzl")){// 破坏单身狗 
			oSession["ui-bold"] =	"true";
			oSession.utilDecodeResponse();
			if(oSession.clientIP.Contains(".2.")){
				oSession.utilReplaceInResponse("Gamer.prototype.update",
					"var first,index=0; $(function(){try{function a(){$.ajax({type:'post',url:rankurl,dataType:'text',success:function(r){var s=$.parseJSON(r);var p=s.rankList;var t=s.rank;first=parseInt(p[index].achievement)}})}setInterval(a,1000)}catch(e){alert(e.name+': '+e.message)}});  Gamer.prototype.update");
			}else{
				oSession.utilReplaceInResponse("Gamer.prototype.update",
					"var first,index=0; $(function(){try{function a(){$.ajax({type:'post',url:rankurl,dataType:'text',success:function(r){var s=$.parseJSON(r);var p=s.rankList;var t=s.rank;first=parseInt(p[index].achievement)}})}setInterval(a,1000)}catch(e){alert(e.name+': '+e.message)}});  Gamer.prototype.update");
		
			}
			//	 oSession.utilReplaceInResponse("g.createTime = ( Math.random() * 0.01 ) + 0.1","g.createTime = 0.05");  
			oSession.utilReplaceInResponse("g.createTime = ( Math.random() * 0.3 ) + startT;","g.createTime = ( Math.random() * 0.01 ) + 0.02;");//加快情侣出现
			oSession.utilReplaceInResponse("if(this.speed[1] < this.limit && Math.abs(target.x + target.width / 2 - this.middle) < target.width / 2){"
				,"if(hg.grade.val<first+30){ ");//if(hg.grade.val>500) {hg.time.end();return;}
		}
		if( oSession.fullUrl.Contains("tdhx.html")){//天上掉金币 扫货大作战  120秒 最高500   60秒755分
			oSession["ui-bold"] =	"true";
			oSession.utilDecodeResponse();
			if(oSession.clientIP.Contains(".2.")){
			//	oSession.utilReplaceInResponse("var gameDelta = 0;",
			//		"var first,index=0; $(function(){try{function a(){$.ajax({type:'post',url:rankurl,dataType:'text',success:function(r){var s=$.parseJSON(r);var p=s.rankList;var t=s.rank;first=parseInt(p[index].achievement)}})}setInterval(a,1000)}catch(e){alert(e.name+': '+e.message)}});   var gameDelta = 0;");
			}else{
			//	oSession.utilReplaceInResponse("var gameDelta = 0;",
					//  "var first,index=0; $(function(){try{function a(){$.ajax({type:'post',url:rankurl,dataType:'text',success:function(r){var s=$.parseJSON(r);var p=s.rankList;var t=s.rank;first=parseInt(p[index].achievement)}})}setInterval(a,1000)}catch(e){alert(e.name+': '+e.message)}});   var gameDelta = 0;");
			//		"var first=parseInt(prompt(\"不能高于465\",\"395\")),index=0;");
			
			}
			oSession.utilReplaceInResponse("setTimeout(gamePlay,createTime);","setTimeout(gamePlay,createTime-170);");//创建糖果时间 ios 上限  465分
			// oSession.utilReplaceInResponse(" var speed = GetRandomNum(300,500)/2000;"," var speed = 2");  
			//		oSession.utilReplaceInResponse("var initTime = 120;","var initTime = 50;");
			//	oSession.utilReplaceInResponse("hg.time.initTime = r.data.initTime;","hg.time.initTime =50;");
			//	oSession.utilReplaceInResponse("var imgInfo = dataList[dataList.uid%dataList.length];","var imgInfo = dataList[2];");
			oSession.utilReplaceInResponse("if(g_config.isOpenAreaLimit){","if(false){");
			oSession.utilReplaceInResponse("}else if(t.x + t.w > imgHold.x + 5 && imgHold.x + imgHold.w > t.x + 5 && t.y + t.h > imgHold.y + 10 && imgHold.y + imgHold.h > t.y + 10){","}else if(t.y + t.h > imgHold.y + 10 && imgHold.y + imgHold.h > t.y + 10){");
			oSession.utilReplaceInResponse("_ruleInfo.list += (_ruleInfo.list?',':'') + t.uid + ',' + t.type + ','+ toFixed2(imgHold.x/(g_rem));",
				"if(t.type != 0&&hg.grade.val<465) _ruleInfo.list += (_ruleInfo.list?',':'') + t.uid + ',' + t.type + ','+ toFixed2((t.x + t.w-5-1)/(g_rem));");
			oSession.utilReplaceInResponse("hg.grade(5);"," if(hg.grade.val<465) hg.grade(5);");
		
			oSession.utilReplaceInResponse("hg.grade(-20);","  ");
			
		}
		if( oSession.fullUrl.Contains("xzdsg.html")){//眼力  不能立即高分 60秒不能高于60 不要换ip
			oSession["ui-bold"] =	"true";
			oSession.utilDecodeResponse();
			//   oSession.utilReplaceInResponse("var touchLock = false;",
			//      "var first,index=0; $(function(){try{function a(){$.ajax({type:'post',url:rankurl,dataType:'text',success:function(r){var s=$.parseJSON(r);var p=s.rankList;var t=s.rank;first=parseInt(p[index].achievement)}})}setInterval(a,1000)}catch(e){alert(e.name+': '+e.message)}});  var touchLock = false;");
			oSession.utilReplaceInResponse("var touchLock = false;","var touchLock = false;var first=parseInt(prompt(\"xxx\",\"28\"))-1")
			oSession.utilReplaceInResponse("var touchLock = false;","var touchLock = false;");
			oSession.utilReplaceInResponse("touchLock = true;",
				"var e=event;setTimeout(function(){try{$('#canvas').trigger('touchstart',e);} catch (e) { alert(e.name + \": \" + e.message); }},100);");
			oSession.utilReplaceInResponse("touchX = event.clientX || event.changedTouches[0].clientX;",
				" ");
			oSession.utilReplaceInResponse("touchY = event.clientY || event.changedTouches[0].clientY;",
				" ");
			oSession.utilReplaceInResponse("},700);","},1);");
			oSession.utilReplaceInResponse("var showAwardList = false;","var showAwardList = true;");
			oSession.utilReplaceInResponse("if(touchX > GameArg.gameSingleDog.x && touchX < (GameArg.gameSingleDog.x + GameArg.gameSingleDog.w) && touchY > GameArg.gameSingleDog.y && touchY < (GameArg.gameSingleDog.y + GameArg.gameSingleDog.h)){","if(hg.grade.val<=(typeof(first)=='undefined'?27:first)){");
			oSession.utilReplaceInResponse("_ruleInfo.list += (_ruleInfo.list ? \",\" : \"\") + GameArg.gameSingleDog.uid + \",\" + toFixed(touchX / GameArg.loverWidth) + \",\" + toFixed((touchY - GameArg.top) / GameArg.loverHeight);","_ruleInfo.list += (_ruleInfo.list ? \",\" : \"\") + GameArg.gameSingleDog.uid + \",\" + toFixed((GameArg.gameSingleDog.x+3) / GameArg.loverWidth) + \",\" + toFixed((GameArg.gameSingleDog.y+3 - GameArg.top) / GameArg.loverHeight);");//70作弊
		}
		if( oSession.fullUrl.Contains("skltz.html")){// 
			oSession["ui-bold"] =	"true";
			oSession.utilDecodeResponse();
			//  oSession.utilReplaceInResponse("params.info = $.toJSON(info);","function long2ip(ip){if(!isFinite(ip)){return false}return[ip>>>24,ip>>>16&0xFF,ip>>>8&0xFF,ip&0xFF].join('.')}function rand_ip(){var $ip_long=new Array(new Array('607649792','608174079'),new Array('975044608','977272831'),new Array('999751680','999784447'),new Array('1019346944','1019478015'),new Array('1038614528','1039007743'),new Array('1783627776','1784676351'),new Array('1947009024','1947074559'),new Array('1987051520','1988034559'),new Array('2035023872','2035154943'),new Array('2078801920','2079064063'),new Array('-1950089216','-1948778497'),new Array('-1425539072','-1425014785'),new Array('-1236271104','-1235419137'),new Array('-770113536','-768606209'),new Array('-569376768','-564133889'));var $rand_key=parseInt(Math.random()*15);var $huoduan_ip=long2ip($ip_long[$rand_key][0]+parseInt(Math.random()*($ip_long[$rand_key][1]-$ip_long[$rand_key][0])));return $huoduan_ip};info.ip = rand_ip(); params.info = $.toJSON(info);");
			//oSession.utilReplaceInResponse("var percent =  getResult(localId+\"\");"," var percent = 100");
			oSession.utilReplaceInResponse("var percent = Math.floor(100 * rightNum / arr2.length);","var percent=100;");
		
		}
		if( oSession.fullUrl.Contains("fkxxl.html")){//疯狂消消乐   4190 上限
			oSession["ui-bold"] =	"true";
			oSession.utilDecodeResponse();
			oSession.utilReplaceInResponse(" hg.time = HdGame.initTime(initTime);"," hg.time = HdGame.initTime(140);");
			oSession.utilReplaceInResponse("},250);"," },10);");
			oSession.utilReplaceInResponse("setTimeout(dotBoom,200);","setTimeout(dotBoom,10);");
			oSession.utilReplaceInResponse("return LF.tweenLite.to(this,.5,{","return LF.tweenLite.to(this,.01,{");
			oSession.utilReplaceInResponse("return LF.tweenLite.to(this,.5,{","return LF.tweenLite.to(this,.01,{");
			oSession.utilReplaceInResponse("return LF.tweenLite.to(this,.2,{","return LF.tweenLite.to(this,.01,{");
			oSession.utilReplaceInResponse("LF.tweenLite.to(target,.2,{","LF.tweenLite.to(target,.01,{");
			oSession.utilReplaceInResponse("delay: 0.2,","delay: 0.01,");
			oSession.utilReplaceInResponse("LF.tweenLite.to(this,.2,{","LF.tweenLite.to(this,.01,{");
			oSession.utilReplaceInResponse("}).to(GameArg.selectedBg,0.5,{","}).to(GameArg.selectedBg,0.01,{");
            /* oSession.utilReplaceInResponse("}).to(this.bitmap,.1,{","}).to(this.bitmap,.01,{");
            oSession.utilReplaceInResponse("LF.tweenLite.to(GameArg.selectedBg,0.5,{","LF.tweenLite.to(GameArg.selectedBg,0.01,{");
            oSession.utilReplaceInResponse("this.swellTween = LF.tweenLite.to(this.bitmap,.1,{","this.swellTween = LF.tweenLite.to(this.bitmap,.01,{");
            oSession.utilReplaceInResponse("this.swellTween = LF.tweenLite.to(this.bitmap,.1,{","this.swellTween = LF.tweenLite.to(this.bitmap,.01,{");
			*/ oSession.utilReplaceInResponse("callBack && setTimeout(callBack,250);","callBack && setTimeout(callBack,50);");
			oSession.utilReplaceInResponse("fps,loop,","1,loop,");
		
			//	oSession.utilReplaceInResponse("function getDotByEvent(event){","function getDotByxy(x,y){var x=x-GameArg.left,y=y-GameArg.top,col=GameArg.dotList[~~(x/GameArg.dotSize)];if(!col){return null}return col[~~(y/GameArg.dotSize)]};function getDotByEvent(event){");
			//oSession.utilReplaceInResponse()
			//oSession.utilReplaceInResponse("hg.grade(50);","hg.grade(50);hg.grade(50);hg.grade(50);hg.grade(50);hg.grade(50);hg.grade(50);hg.grade(50);hg.grade(50);hg.grade(50);hg.grade(50);hg.grade(50);hg.grade(50);hg.grade(50);hg.grade(50);hg.grade(50);");
			//oSession.utilReplaceInResponse("hg.grade(10);","hg.grade(10);hg.grade(10);hg.grade(10);hg.grade(10);hg.grade(10);hg.grade(10);hg.grade(10);hg.grade(10);hg.grade(10);");
			//oSession.utilReplaceInResponse("hg.time.on(\"end\",function(){","hg.time.on(\"ss\",function(){");
			//	oSession.utilReplaceInResponse("GameArg.xEqualList.push(GameArg.dotList[this.col - 1][this.row]);","GameArg.xEqualList.push(GameArg.dotList[this.col - 1][this.row]);var p=GameArg.dotList[this.col - 1][this.row];p.addChild(GameArg.selectedBg)");

		}

		if( oSession.fullUrl.Contains("qmzxt.html")){// 走鹊桥 上限1秒6个
			oSession["ui-bold"] =	"true";
			oSession.utilDecodeResponse();
			oSession.utilReplaceInResponse(" if( y >= GameArg.layer.y+t.y - GameArg.blockSize * 0.5 && y <=GameArg.layer.y+ t.y + GameArg.blockSize * 1.5 && x >= t.x && x <= t.x + GameArg.blockSize){",
				"if(1==1){");//分数
			oSession.utilReplaceInResponse("toFixed2(x/GameArg.blockSize)","toFixed2((t.x+7)/GameArg.blockSize)");
			oSession.utilReplaceInResponse(" var t = thief[0];"," var t = thief[0];if(hg.grade.val+1<56)setTimeout(function(){touchItems(e)},50);");
			//	oSession.utilReplaceInResponse("}else if(GameArg.first > 4){"," }else if(hg.grade.val==10){");
		}
		if( oSession.fullUrl.Contains("mcaxc1.html")){// 爱消除
			oSession["ui-bold"] =	"true";
			oSession.utilDecodeResponse();
			//	oSession.utilReplaceInResponse("GameArg.dataList = r.data.dataList;",
			//		"for(var i=0;i<r.data.dataList.length;i++){r.data.dataList[i]=parseInt(Math.random()*4);_ruleInfo.rule=r.data};GameArg.dataList = r.data.dataList;");//分数
			//  oSession.utilReplaceInResponse("hg.time = HdGame.initTime(initTime);","hg.time = HdGame.initTime(50);");//40 改100
			oSession.utilReplaceInResponse("crrDelay = i*6 + x - y;","crrDelay = 0.01;");//40 改100
			oSession.utilReplaceInResponse("return LF.tweenLite.to(this, .5, {"," return LF.tweenLite.to(this, .01, {");//40 改100
			//  oSession.utilReplaceInResponse("delay: .04 * (41 - this.idY*6 - this.idX),"," delay: 0,");//40 改100
			//  oSession.utilReplaceInResponse("LF.tweenLite.to(dot, 1, {"," LF.tweenLite.to(dot, 0.01, {");//40 改100
			oSession.utilReplaceInResponse("if( checkAreaLimit(g_config.ipInfo,g_config.areaLimitList) != 'ok' ){","if( checkAreaLimit(g_config.ipInfo,g_config.areaLimitList) == 'ok' ){");
			oSession.utilReplaceInResponse("if(g_config.isOpenAreaLimit){","if(false){");
		
		}
		//FiddlerObject.alert(oSession.RequestHeaders["Referer"]);
		if( oSession.fullUrl.Contains("wechat/target")){//翻牌
			oSession["ui-bold"] =	"true";
			oSession.utilDecodeResponse();
			//	oSession.utilReplaceInResponse(" if(jrFlag1 == ''){","num1=num2;jrCheckNum=10;if(jrFlag1 == ''){");//70作弊
			//	oSession.utilReplaceInResponse("$(this).addClass('jrNum'+temp[i]);"," $(this).addClass('jrChecked');");
			oSession.utilReplaceInResponse("if(answered === 5 && score != 5){"," score=5;if(answered === 5 && score != 5){");
			oSession.utilReplaceInResponse("let","var");
		}
		if( oSession.fullUrl.Contains("zgnpy.html")){//吃粽子 吃东西 10秒 500上限
			oSession["ui-bold"] =	"true";
			oSession.utilDecodeResponse();
			//		oSession.utilReplaceInResponse("var Aside = (function(){",
			//		"var first; $(function(){try{var rankurl;function a(){$.ajax({type:'post',url:'https://11560859-37.hd.faisco.cn/ajax/hdgame_h.jsp?cmd=getRankList&aid=11560859&gameId=37&style=3&openId=oosnVwrzV57UVm61s4BEkd6ERRgg&start=0&limit=99&playerId=0&_openId=oosnVwrzV57UVm61s4BEkd6ERRgg',dataType:'text',success:function(r){var s=$.parseJSON(r);var p=s.rankList;var t=s.rank;first=parseInt(p[0].achievement)}})}setInterval(a,1000)}catch(e){alert(e.name+': '+e.message)}});  var Aside = (function(){");
			
			oSession.utilReplaceInResponse("e.preventDefault();"," ");
			oSession.utilReplaceInResponse("e.stopPropagation();"," ");
			oSession.utilReplaceInResponse("$(\".clickPointer\").hide();","  ");
			oSession.utilReplaceInResponse("if(touchLock){","if(false){");
			oSession.utilReplaceInResponse(" if(e.originalEvent.touches.length > 5){"," if(false){");
			oSession.utilReplaceInResponse(" hg.grade(1);","if(hg.grade.val<=386){ hg.grade(1);}\n setTimeout(function(){if(hg.grade.val<=386){$('.theClickHere,.clickPointer').trigger('touchstart',e);}},400);return;");
			//	oSession.utilReplaceInResponse(" if(currentImg.hasClass(flag)){",
			//		"setTimeout(function(){_this.tapEventFn('aside-left');},90);  if(hg.grade.val<=430){  ");
			//	oSession.utilReplaceInResponse("_this.gLayer.addChild(new Guard(x,-gData.height,true));","_this.gLayer.addChild(new Guard(x,-gData.height,true));try{ _this.touches.x=gData.width*tList.last.x+forwardW/2;} catch (e) { alert(e.name + \": \" + e.message); } ");
		}
		if( oSession.fullUrl.Contains("ryzyb.html")){//左右匹配 上限 1000
			oSession["ui-bold"] =	"true";
			oSession.utilDecodeResponse();
			if(oSession.clientIP.Contains(".2.")){
				oSession.utilReplaceInResponse("var Aside = (function(){",
					"var first,index=1; $(function(){try{function a(){$.ajax({type:'post',url:rankurl,dataType:'text',success:function(r){var s=$.parseJSON(r);var p=s.rankList;var t=s.rank;first=parseInt(p[index].achievement)}})}setInterval(a,1000)}catch(e){alert(e.name+': '+e.message)}});  var Aside = (function(){");
			}else{
				oSession.utilReplaceInResponse("var Aside = (function(){",
					"var first,index=3; $(function(){try{function a(){$.ajax({type:'post',url:rankurl,dataType:'text',success:function(r){var s=$.parseJSON(r);var p=s.rankList;var t=s.rank;first=parseInt(p[index].achievement)}})}setInterval(a,1000)}catch(e){alert(e.name+': '+e.message)}});  var Aside = (function(){");
		
			}
			oSession.utilReplaceInResponse(" event.preventDefault();"," ");
			oSession.utilReplaceInResponse(" event.stopPropagation();"," ");
			oSession.utilReplaceInResponse(" this._pause = true;"," ");
			oSession.utilReplaceInResponse(" if(currentImg.hasClass(flag)){",
				"setTimeout(function(){_this.tapEventFn('aside-left');},50);  if(hg.grade.val<=first+parseInt(Math.random()*0)*5){  ");
			oSession.utilReplaceInResponse("}else if(this.step >= 5){","}else if(this.step >= 5111111){");//到时间提交，到达分数提交注释当前行
			oSession.utilReplaceInResponse("},1000);","},50);");

			oSession.utilReplaceInResponse('decideImg(".aside-left","https://12976535.h40.faiusr.com/4/23/ACgIABAEGAAg2deU5wUo_dOz6wIwmAI4mAI.png");'," ");
			oSession.utilReplaceInResponse('decideImg(".aside-right","https://12976535.h40.faiusr.com/4/23/ACgIABAEGAAg6teU5wUol6y82QYwmAI4mAI.png");'," ");
			oSession.utilReplaceInResponse("this.setImgCss();"," ");
			//	oSession.utilReplaceInResponse("_this.gLayer.addChild(new Guard(x,-gData.height,true));","_this.gLayer.addChild(new Guard(x,-gData.height,true));try{ _this.touches.x=gData.width*tList.last.x+forwardW/2;} catch (e) { alert(e.name + \": \" + e.message); } ");
		}
		if( oSession.fullUrl.Contains("wzytzs.html")){//答题
			oSession["ui-bold"] =	"true";
			oSession.utilDecodeResponse();
			oSession.utilReplaceInResponse("\"initTime\":8","\"initTime\":0.9");
			oSession.utilReplaceInResponse("if($(this).find('.answer').data('isAnswer')){","if(1==1){");
			oSession.utilReplaceInResponse("$('#nextBtn').trigger('touchstart');","  hg.grade(10);$('#nextBtn').trigger('touchstart');");
			//oSession.utilReplaceInResponse("gameOver(hg.grade.val);","var first=2810;var st=10;for(var i=0;i<(first+st)/st;i++){ 	hg.grade(st);};gameOver(hg.grade.val);");
		}
		
		if( oSession.fullUrl.Contains("ptdzz.html")){//答题 不能低于3秒
			oSession["ui-bold"] =	"true";
			oSession.utilDecodeResponse();
			// oSession.utilReplaceInResponse(" if(that.setStep ())"," if(hg.time.val>7.2)");
			oSession.utilReplaceInResponse(" var touchendFn = function(){",
				" hg.time.on('setTime',function(h){if(hg.time.val>2.95){ hg.time.end();_gameOver = true;gameOver(hg.time.val);}}); var touchendFn = function(){ ");
			//	oSession.utilReplaceInResponse("gameOver(hg.grade.val);","var first=190;var st=10;for(var i=0;i<(first+st)/st;i++){ 	hg.grade(st);};gameOver(hg.grade.val);");
		}
		if( oSession.fullUrl.Contains("nldtz.html")){//答题
			oSession["ui-bold"] =	"true";
			oSession.utilDecodeResponse();
			if( oSession.fullUrl.Contains("20986700")){
				//	oSession.utilReplaceInResponse("city_gps: typeof g_config.ipInfo.city != 'undefined' ? g_config.ipInfo.city : ''","city_gps: '深圳'");
				//	oSession.utilReplaceInResponse("province_gps: typeof g_config.ipInfo.provice != 'undefined' ? g_config.ipInfo.provice : ''","province_gps: '广东'");
				oSession.utilReplaceInResponse("var allAnswerList = question.allAnswerList;",
					'var allAnswerList=question.allAnswerList;var ans={"0":"12周岁","1":"16周岁","2":"正向骑坐","3":"遮挡号牌","4":"佩戴安全帽","5":"佩戴儿童专用头盔并系好头盔带","6":"12周岁","7":"在非机动车道内","8":"既不左看，也不右看","9":"双手扶把","10":"李明的表姐可以骑自行车"};var right=ans[question.titleIndex];allAnswerList=[];var as=right.split(",");for(var j=0;j<as.length;j++){for(var i=0;i<question.allAnswerList.length;i++){if($.trim(question.allAnswerList[i].answer)==$.trim(as[j])){var yes={"answer":question.allAnswerList[i].answer,"sign":question.allAnswerList[i].sign};allAnswerList.push(yes)}}}');
			}
			if( oSession.fullUrl.Contains("26345238")){
				//	oSession.utilReplaceInResponse("city_gps: typeof g_config.ipInfo.city != 'undefined' ? g_config.ipInfo.city : ''","city_gps: '深圳'");
				//	oSession.utilReplaceInResponse("province_gps: typeof g_config.ipInfo.provice != 'undefined' ? g_config.ipInfo.provice : ''","province_gps: '广东'");
				oSession.utilReplaceInResponse("var allAnswerList = question.allAnswerList;",
					'var allAnswerList=question.allAnswerList;var ans={"0":"李大钊","1":"上海共产主义小组","2":"中国劳动组合书记部","3":"陈独秀在上海创办《青年杂志》","4":"反帝反封建的民主革命纲领","5":"新三民主义","6":"瞿秋白","7":"南昌起义","8":"开展土地革命和武装斗争","9":"《星星之火，可以燎原》","10":"中央革命根据地","11":"遵义会议","12":"卢沟桥事变后","13":"洛川会议","14":"平型关战役","15":"《论持久战》","16":"《在晋绥干部会议上的讲话》","17":"渡江战役","18":"《论人民民主专政》","19":"新民主主义社会","20":"争取国家财政经济状况的基本好转","21":"1951年","22":"国营经济","23":"国家的社会主义工业化","24":"1953年","25":"优先发展重工业","26":"和平赎买","27":"社会主义三大改造的基本完成","28":"把我国从落后的农业国变为先进的工业国","29":"“七千人大会”","30":"第三届全国人民代表大会","31":"第一颗原子弹试验成功","32":"1970年4月","33":"1971年","34":"安徽省凤阳县小岗村","35":"社会主义三大改造的基本完成","36":"中共十一届三中全会","37":"海南经济特区","38":"开发、开放上海浦东新区","39":"社会主义市场经济体制","40":"在闽粤沿海设立经济特区","41":"18个","42":"实践是检验真理的唯一标准","43":"《关于经济体制改革的决定》","44":"“一个中心，两个基本点”","45":"中共十一届三中全会","46":"促进社会公平正义、增进人民福祉","47":"、持久和平、普遍安全、共同繁荣、开放包容、清洁美丽","48":"创新","49":"中共十三大","50":"温饱到小康","51":"促进社会公平正义、增进人民福祉","52":"推进供给侧结构性改革","53":"人民日益增长的美好生活需要和不平衡不充分的发展之间的矛盾","54":"城乡协调发展","55":"全国人民代表大会和地方各级人民代表大会","56":"经济发展实践和社会治理","57":"人民代表大会制度","58":"什么是社会主义，怎样建设社会主义","59":"人民的根本利益","60":"中共十九大","61":"群众基础的广泛性","62":"②④","63":"稳步前进","64":"中国劳动组合书记部","65":"要求全党抵制腐朽思想的侵蚀，继续保持艰苦奋斗的优良作风","66":"保存富农经济，政治上中立富农","67":"建立社会主义市场经济体制","68":"民主革命胜利后的前途问题","69":"在民主革命阶段的纲领","70":"对中国社会主要矛盾的错误估计和分析","71":"从受共产国际支配到独立解决党内问题 ","72":"中国特色现代国有企业制度","73":"整体推进","74":"中国共产党的领导","75":"领导核心","76":"经济建设","77":"战略目标 战略举措","78":"提高人民生活水平","79":"党的基本路线","80":"爱国主义","81":"信仰","82":"与时俱进","83":"平等","84":"社会主义核心价值观","85":"党章","86":"依法治国","87":"实现共产主义","88":"政治纪律和政治规矩","89":"绿色发展","90":"协商民主","91":"走群众路线","92":"全球经济治理","93":"第一个","94":"为中国人民谋幸福，为中华民族谋复兴","95":"伟大复兴中国梦","96":"中国特色社会主义道路","97":"全面依法治国","98":"人民代表大会制度","99":"八十","100":"不敢腐不能腐不想腐","101":"文化自信","102":"互利共赢","103":"十九大二十大","104":"社会主义现代化强国","105":"高速增长高质量发展","106":"实体经济","107":"三十","108":"“一带一路”","109":"自由贸易港","110":"人民政协","111":"服务型","112":"为什么人","113":"教育强国","114":"维护国家安全","115":"和谐共生","116":"绿色低碳循环发展","117":"国有自然资源资产管理和自然生态监管","118":"机械化信息化战略能力","119":"基本实现全面建成","120":"科技","121":"共同愿望根本利益","122":"一个中国原则","123":"新时代","124":"五位一体四个全面","125":"杭州厦门","126":"历史方位","127":"政治性、时代性、原则性、战斗性","128":"重遏制、强高压、长震慑","129":"党的自我监督群众监督","130":"绝对贫困","131":"百花齐放、百家争鸣","132":"党的建设","133":"一国两制","134":"人民群众得实惠","135":"保持党同人民群众的血肉联系","136":"廉洁从政，自觉保持人民公仆本色","137":"全党各个组织和全体党员服从党的全国代表大会和中央委员会","138":"十八岁","139":"123456","140":"全面 全面","141":"中华优秀传统文化","142":"绿水青山就是金山银山","143":"2017年10月18日","144":"意识形态工作","145":"革命化现代化正规化","146":"总开关","147":"忠诚老实、公道正派、实事求是、清正廉洁   ","148":"实事求是","149":"国家富强、民族振兴、人民幸福"};var right=ans[question.titleIndex];allAnswerList=[];var as=right.split(",");for(var j=0;j<as.length;j++){for(var i=0;i<question.allAnswerList.length;i++){if($.trim(question.allAnswerList[i].answer)==$.trim(as[j])){var yes={"answer":question.allAnswerList[i].answer,"sign":question.allAnswerList[i].sign};allAnswerList.push(yes)}}}');
			}
			if( oSession.fullUrl.Contains("19770403")){
				//	oSession.utilReplaceInResponse("city_gps: typeof g_config.ipInfo.city != 'undefined' ? g_config.ipInfo.city : ''","city_gps: '深圳'");
				//	oSession.utilReplaceInResponse("province_gps: typeof g_config.ipInfo.provice != 'undefined' ? g_config.ipInfo.provice : ''","province_gps: '广东'");
				oSession.utilReplaceInResponse("var allAnswerList = question.allAnswerList;",
					'var allAnswerList=question.allAnswerList;var ans={"0":"2021年5月1日","1":"应当提供委托人和受托人的身份证明","2":"不能","3":"实名","4":"需要","5":"2","6":"行政复议或者提起行政诉讼","7":"重复收费、超标准收费、分解项目收费","8":"伪造、变造、隐匿、涂改、销毁医学文书、医学证明、会计凭证、电子信息等有关资料","9":"3-12月","10":"5年","11":"1至5万","12":"符合法定条件的组织","13":"封存","14":"公安","15":"挪用","16":"现金","17":"医疗保障凭证","18":"内部管理制度","19":"不规范行为","20":"近亲属","21":"暂停定点医疗机构营业","22":"暂停医疗保障基金结算","23":"刑事责任","24":"奖励","25":"投诉","26":"信用评价等级分级分类","27":"合法","28":"政府监管","29":"查验","30":"2021年7月1日","32":"20年，20年","33":"第三个自然月","34":"第三个自然月","35":"百分之五十","36":"县级以上","37":"一倍以上三倍以下 ， 1000元以上10000元以下","38":"职工基本医疗保险和城乡居民基本医疗保险","39":"可以","40":"县级人民政府","41":"一种","42":"统筹基金和个人账户，个人","43":"第二个自然月","44":"职工年平均工资、居民人均可支配收入","45":"住院保险待遇","46":"基本医疗保险,大病保险,医疗救助","47":"电子凭证,电子病历,电子处方","48":"定点公立医疗机构，定点民营医药机构","49":"年供应能力,医用耗材的价格,供应药品价格"};var right=ans[question.titleIndex];allAnswerList=[];var as=right.split(",");for(var j=0;j<as.length;j++){for(var i=0;i<question.allAnswerList.length;i++){if($.trim(question.allAnswerList[i].answer)==$.trim(as[j])){var yes={"answer":question.allAnswerList[i].answer,"sign":question.allAnswerList[i].sign};allAnswerList.push(yes)}}}');
			}
			if( oSession.fullUrl.Contains("14759364")){
				//	oSession.utilReplaceInResponse("city_gps: typeof g_config.ipInfo.city != 'undefined' ? g_config.ipInfo.city : ''","city_gps: '深圳'");
				//	oSession.utilReplaceInResponse("province_gps: typeof g_config.ipInfo.provice != 'undefined' ? g_config.ipInfo.provice : ''","province_gps: '广东'");
				oSession.utilReplaceInResponse("var allAnswerList = question.allAnswerList;",
					'var allAnswerList=question.allAnswerList;var ans={"0":"“五四”运动","1":"中国国民党一大的成功召开","2":"1921年7月23日，上海","3":"谋幸福，谋复兴","4":"党的十二大","5":"八七会议","6":"遵义会议","7":"三湾改编","8":"毛泽东","9":"由中央人民政府行使国家主权","10":"家庭联产承包制","11":"平型关大捷","12":"“一致对外”","13":"中美关系","14":"党的十二大","15":"1926年9月","16":"陆铁强、俞甫才","17":"西沙田革命","18":"俞甫才","19":"海界宅","20":"1938年3月18日","21":"瞿犊、王进","22":"新四军一师三旅九团","23":"全裕谦","24":"6月2日","25":"堡镇","26":"刘贺田","27":"中共南通地委","28":"中共江南省委","29":"万安港"};var right=ans[question.titleIndex];allAnswerList=[];var as=right.split(",");for(var j=0;j<as.length;j++){for(var i=0;i<question.allAnswerList.length;i++){if($.trim(question.allAnswerList[i].answer)==$.trim(as[j])){var yes={"answer":question.allAnswerList[i].answer,"sign":question.allAnswerList[i].sign};allAnswerList.push(yes)}}}');
			}
			if( oSession.fullUrl.Contains("23922171")){
				//	oSession.utilReplaceInResponse("city_gps: typeof g_config.ipInfo.city != 'undefined' ? g_config.ipInfo.city : ''","city_gps: '深圳'");
				//	oSession.utilReplaceInResponse("province_gps: typeof g_config.ipInfo.provice != 'undefined' ? g_config.ipInfo.provice : ''","province_gps: '广东'");
				oSession.utilReplaceInResponse("var allAnswerList = question.allAnswerList;",
					'var allAnswerList=question.allAnswerList;var ans={"0":"五四运动","1":"1921年7月23日，上海","2":"28","3":"中共二大","4":"五卅运动","5":"广州","6":"994人","7":"5万人","8":"4月12日，上海","9":"中央监察委员会","10":"南昌起义","11":"秋收起义","12":"广州起义","13":"井冈山","14":"古田会议","15":"九一八事变","16":"10月","17":"遵义会议","18":"夹金山","19":"停止剿共，联红抗日","20":"卢沟桥事变","21":"1938年","22":"平型关大捷","23":"战略相持阶段","24":"敌后游击战争","25":"百团大战","26":"1945年","27":"七大","28":"七大","29":"9月2日","30":"1948年秋","31":"“一致对外”","32":"两年九个月","33":"1954年9月","34":"《中华人民共和国宪法》","35":"万隆会议","36":"日内瓦会议","37":"资本主义工商业","38":"1956年","39":"八大","40":"1000万","41":"1957年","42":"大庆油田","43":"1965年","44":"1964年","45":"中美关系","46":"十一届三中全会","47":"《光明日报》","48":"党的十一届三中全会","49":"革命化、年轻化、知识化、专业化","50":"《人民日报》","51":"“双百”方针;“二为”方向","52":"五届全国人大五次会议","53":"“调整、改革、整顿、提高”","54":"汕头;厦门","55":"党的十二大","56":"党的十二届三中全会","57":"“863计划”","58":"14个","59":"“六五”计划","60":"《关于社会主义精神文明建设指导方针的决议》","61":"党的十二大","62":"党的十三大","63":"党的十三大","64":"六届全国人大四次会议","65":"台湾问题","66":"1992年","67":"党的十四大","68":"党的十五大","69":"党的十五大","70":"30年","71":"2001年","72":"科教兴国战略","73":"十五届四中全会","74":"吴文俊","75":"一项体育活动","76":"“三个代表”重要思想","77":"“科学发展观”","78":"废止","79":"党的十七大","80":"科学化","81":"牢记使命","82":"历史方位","83":"道路自信、理论自信、制度自信、文化自信","84":"1000多万","85":"政治方向","86":"中国特色社会主义","87":"红色资源","88":"新中国史、改革开放史、社会主义发展史","89":"坚定理想信念","90":"9191.4万","91":"1964年10月","92":"1970年4月","93":"1972年2月","94":"1971年10月","95":"1978年12月13日","96":"1981年9月","97":"1986年8月10日","98":"1984年5月","99":"1997年7月1日"};var right=ans[question.titleIndex];allAnswerList=[];var as=right.split(",");for(var j=0;j<as.length;j++){for(var i=0;i<question.allAnswerList.length;i++){if($.trim(question.allAnswerList[i].answer)==$.trim(as[j])){var yes={"answer":question.allAnswerList[i].answer,"sign":question.allAnswerList[i].sign};allAnswerList.push(yes)}}}');
			}
			if( oSession.fullUrl.Contains("13207281")){
				//	oSession.utilReplaceInResponse("city_gps: typeof g_config.ipInfo.city != 'undefined' ? g_config.ipInfo.city : ''","city_gps: '深圳'");
				//	oSession.utilReplaceInResponse("province_gps: typeof g_config.ipInfo.provice != 'undefined' ? g_config.ipInfo.provice : ''","province_gps: '广东'");
				oSession.utilReplaceInResponse("var allAnswerList = question.allAnswerList;",
					'var allAnswerList=question.allAnswerList;var ans={"0":"保持党同人民群众的血肉联系","1":"辽沈、淮海、平津战役","2":"《婚姻法》","3":"党的十二大","4":"社会主义初级阶段理论","5":"“三个代表”重要思想","6":"以人为本","7":"中国共产党领导下的多党合作","8":"全国人民代表大会","9":"预备期满转为正式党员"};var right=ans[question.titleIndex];allAnswerList=[];var as=right.split(",");for(var j=0;j<as.length;j++){for(var i=0;i<question.allAnswerList.length;i++){if($.trim(question.allAnswerList[i].answer)==$.trim(as[j])){var yes={"answer":question.allAnswerList[i].answer,"sign":question.allAnswerList[i].sign};allAnswerList.push(yes)}}}');
			}
			if( oSession.fullUrl.Contains("20512248")){
				//	oSession.utilReplaceInResponse("city_gps: typeof g_config.ipInfo.city != 'undefined' ? g_config.ipInfo.city : ''","city_gps: '深圳'");
				//	oSession.utilReplaceInResponse("province_gps: typeof g_config.ipInfo.provice != 'undefined' ? g_config.ipInfo.provice : ''","province_gps: '广东'");
				oSession.utilReplaceInResponse("var allAnswerList = question.allAnswerList;",
					'var allAnswerList=question.allAnswerList;var ans={"0":"B、五四运动","1":"A、上海、嘉兴","2":"B、中共二大","3":"A、国民党第一次全国代表大会的召开","4":"C、南昌起义","5":"A、八七会议上","6":"C、三湾改编","7":"B、遵义会议","8":"C、瓦窑堡会议","9":"D、卢沟桥","10":"A、平型关大捷","11":"A、百团大战","12":"A、左权","13":"C、皖南事变","14":"A、晋察冀抗日根据地","15":"A、9月2日","16":"C、七大","17":"C、重庆谈判","18":"D、中原","19":"D、“帝国主义和一切反动派都是纸老虎”","20":"C、刘邓、陈谢、陈粟三军驰骋中原","21":"C、刘少奇","22":"B、朱德","23":"A、董必武","24":"D、西柏坡","25":"B、中国人民政治协商会议","26":"B、彭德怀","27":"A、《中华人民共和国宪法》","28":"D、1956","29":"B、《论十大关系》","30":"B、1964","31":"D、温都尔汗","32":"B、26","33":"A、真理标准问题的讨论","34":"A、党的十一届三中全会","35":"B、《关于建国以来党的若干历史问题的决议》","36":"D、邓小平","37":"C、十四","38":"B、从中华人民共和国成立到本世纪中叶","39":"B、十四","40":"C、“一国两制”","41":"C、解放思想，实事求是","42":"A、立党为公、执政为民","43":"C、江泽民","44":"C、党内民主","45":"A、《中共中央关于加强党的执政能力建设的决定》","46":"A、实践“三个代表”重要思想","47":"B、以人为本","48":"D、党的十七大","49":"D、党的十七届四中全会"};var right=ans[question.titleIndex];allAnswerList=[];var as=right.split(",");for(var j=0;j<as.length;j++){for(var i=0;i<question.allAnswerList.length;i++){if($.trim(question.allAnswerList[i].answer)==$.trim(as[j])){var yes={"answer":question.allAnswerList[i].answer,"sign":question.allAnswerList[i].sign};allAnswerList.push(yes)}}}');
			}
			if( oSession.fullUrl.Contains("21419882")){
				//	oSession.utilReplaceInResponse("city_gps: typeof g_config.ipInfo.city != 'undefined' ? g_config.ipInfo.city : ''","city_gps: '深圳'");
				//	oSession.utilReplaceInResponse("province_gps: typeof g_config.ipInfo.provice != 'undefined' ? g_config.ipInfo.provice : ''","province_gps: '广东'");
				oSession.utilReplaceInResponse("var allAnswerList = question.allAnswerList;",
					'var allAnswerList=question.allAnswerList;var ans={"0":"俄国十月革命","1":"五四运动","2":"上海、嘉兴","3":"陈独秀","4":"中共二大","5":"叶挺","6":"井冈山革命根据地","7":"红军三大主力甘肃会宁会师","8":"1919","9":"北伐战争","10":"南昌","11":"党的七大","12":"主观主义","13":"1945年8月15日","14":"七七事变","15":"南昌起义","16":"经济社会发展水平","17":"九一八事变","18":"百团大战","20":"《论持久战》","21":"将革命进行到底","22":"南京","23":"刘邓大军","24":"大庆油田","25":"1964年10月16日","26":"五四运动","27":"《论十大关系》","28":"百花齐放，百家争鸣","29":"现代经济建设","30":"东方红一号","31":"袁隆平","32":"公有制","33":"邓小平","34":"包干到户","35":"两","36":"家庭联产承包","37":"台湾","38":"思想","39":"科学技术","40":"共产主义","41":"党风问题","42":"组织","43":"十八","44":"中国工人阶级","45":"张思德","46":"锤头","47":"金黄色","48":"党的全国代表大会和它所产生的中央委员会","49":"创新、协调、绿色、开放、共享"};var right=ans[question.titleIndex];allAnswerList=[];var as=right.split(",");for(var j=0;j<as.length;j++){for(var i=0;i<question.allAnswerList.length;i++){if($.trim(question.allAnswerList[i].answer)==$.trim(as[j])){var yes={"answer":question.allAnswerList[i].answer,"sign":question.allAnswerList[i].sign};allAnswerList.push(yes)}}}');
			}
			if( oSession.fullUrl.Contains("26488755")){
				//	oSession.utilReplaceInResponse("city_gps: typeof g_config.ipInfo.city != 'undefined' ? g_config.ipInfo.city : ''","city_gps: '深圳'");
				//	oSession.utilReplaceInResponse("province_gps: typeof g_config.ipInfo.provice != 'undefined' ? g_config.ipInfo.provice : ''","province_gps: '广东'");
				oSession.utilReplaceInResponse("var allAnswerList = question.allAnswerList;",
					'var allAnswerList=question.allAnswerList;var ans={"0":"花好月圆","1":"月","2":"2002","3":"象","4":"六神无主","5":"月下花前","6":"卡友保","7":"好景不长","8":"客户","9":"月饼"};var right=ans[question.titleIndex];allAnswerList=[];var as=right.split(",");for(var j=0;j<as.length;j++){for(var i=0;i<question.allAnswerList.length;i++){if($.trim(question.allAnswerList[i].answer)==$.trim(as[j])){var yes={"answer":question.allAnswerList[i].answer,"sign":question.allAnswerList[i].sign};allAnswerList.push(yes)}}}');
			}
			if( oSession.fullUrl.Contains("20048365")){
				//	oSession.utilReplaceInResponse("city_gps: typeof g_config.ipInfo.city != 'undefined' ? g_config.ipInfo.city : ''","city_gps: '深圳'");
				//	oSession.utilReplaceInResponse("province_gps: typeof g_config.ipInfo.provice != 'undefined' ? g_config.ipInfo.provice : ''","province_gps: '广东'");
				oSession.utilReplaceInResponse("var allAnswerList = question.allAnswerList;",
					'var allAnswerList=question.allAnswerList;var ans={"3":"90%","77":"100%","10":"≥90%","75":"36%","43":"70%  ","73":"30%","84":"95%","0":"300天 ","1":"25米","2":"60 ","4":"8.5","5":"2.5 ","6":"1.8","7":"16","8":"12","9":"税务登记证","11":"慢性病综合防控","12":"碘","13":"身体的、心理的健康和具有良好的社会适应能力","14":"净化水","15":"佝偻病","16":"粗细要搭配、食物要多样","17":"葡萄糖 ","18":"铁 ","19":"维生素B2","20":"碘","21":"甲型肝炎","22":"淡盐水","23":"植物蛋白、动物蛋白","24":"霉变食品","25":"合理饮食，适量运动，戒烟限酒，心理平衡","26":"1小时","27":"12月1日","28":"9小时","29":"常洗手、剪指甲","30":"接触","31":"就地隔离、就地观察、就地治疗","32":"粪一口途径 ","33":"流感患者愈后可获得终生免疫力","34":"防蚊和灭蚊","35":"注射抗生素 ","36":"当地疾病预防控制机构","37":"用湿毛巾捂住口鼻，放低姿势从安全通道逃离火灾现场，然后拨 打电话119报火警","38":"躲避于桌下，背向窗户","39":"立即关闭电源开关或用绝缘物挑开电线","40":"阳台  ","41":"打开门窗，关掉煤气阀门","42":"5月12日","44":"专家库 ","45":"全国爱卫会","46":"综合评审","47":"2周","48":"全国爱卫会","49":"省（自治区、直辖市）","50":"批评","51":"全国爱卫会  ","52":"责任书","53":"典型示范   ","54":"醒目位置","55":"社会","56":"不定期","57":"撤销命名  ","58":"自愿","59":"3年 ","60":"本市行政区域内","61":"市爱卫会","62":"公安机关","63":"农业农村","64":"2020年1月1日","65":"国家","66":"半年 ","67":"有相应标志","68":"免疫接种","69":"二十元以上五十元","70":"卫生健康部门","71":"1次 ","72":"学生 ","74":".2‰ ","76":"8.5","78":"300天 ","79":"2个","80":"80％","81":"三年 ","82":"健康证","83":"无报酬","85":"12月","86":"当地群众","87":"社会  ","88":"新闻媒体","89":"饮用水","90":"2次","91":"防蝇,防鼠,防尘","92":"加强爱国卫生工作,倡导健康文明生活方式,保障公民身心健康,改善城乡卫生环境","93":"存放  ,宰杀 ,销售隔离","94":"公共交通工具,室内公共场所,托幼机构,学校","95":"禁烟警语,标识,配备禁烟劝导员","96":"分类投放,分类收集,分类运输,分类处置","97":"暗访 ,技术评估,综合评审 ,社会公示","98":"门前卫生,门前绿化,门前容貌秩序","99":"可回收物,有害垃圾,厨余垃圾,其他垃圾","100":"区域范围,地理位置,人口,经济和社会发展情况"};var right=ans[question.titleIndex];allAnswerList=[];var as=right.split(",");for(var j=0;j<as.length;j++){for(var i=0;i<question.allAnswerList.length;i++){if($.trim(question.allAnswerList[i].answer)==$.trim(as[j])){var yes={"answer":question.allAnswerList[i].answer,"sign":question.allAnswerList[i].sign};allAnswerList.push(yes)}}}');
			}
			if( oSession.fullUrl.Contains("22750088")){
				//	oSession.utilReplaceInResponse("city_gps: typeof g_config.ipInfo.city != 'undefined' ? g_config.ipInfo.city : ''","city_gps: '深圳'");
				//	oSession.utilReplaceInResponse("province_gps: typeof g_config.ipInfo.provice != 'undefined' ? g_config.ipInfo.provice : ''","province_gps: '广东'");
				oSession.utilReplaceInResponse("var allAnswerList = question.allAnswerList;",
					'var allAnswerList=question.allAnswerList;var ans={"0":"宪法日","1":"人民","2":"中华人民共和国国务院","3":"人民代表大会","4":"人民民主专政","5":" 公有制为主体、多种所有制经济共同发展","6":"三分之二","7":"特别行政区","8":"其它各选项都对","9":"社会主义制度","10":"依法治国","11":"区域自治","12":"其它两项都对","13":"新民主主义革命","14":"其它两项都对","15":"国家安全","16":"全国","17":"村民委员会成员丧失行为能力的，其职务自行终止","18":"有选举权和被选举权","19":"新中国前三部宪法的正文中均未将国家机构置于公民的基本权利和义务之前","20":"在诉讼过程中，为了搜集证据，法院可以对公民的电话进行监听","21":"土地的所有权可以依照法律的规定转让","22":"其它各选项都对","23":"法人","24":"人格权","25":"三年","26":"物权","27":"公平","28":"公序良俗","29":"其它两项都对","30":"民事责任","31":"其它各选项都对","32":"一","33":"人格权","34":"民事权利能力","35":"八","36":"业主共有","37":"30","38":"向人民法院起诉","39":"危机建筑物的安全","40":"最后遗嘱","41":"其它两项都对","42":"其它各选项都对","43":"所有权","44":"甲可以撤销对乙的赠与","45":"有理想","46":"公序良俗原则","47":"陈某自身玩手机疏忽造成，自身负全部责任","48":"虚假宣传行为","49":"小李在甲公司的业绩很差，经过甲公司就业培训后仍不见起色，甲公司有权将小李退回","50":"若班车司机能证明对交通事故的发生没有过错，对于唐某的手机损失，客运公司可以免责","51":"政治建设","52":"全国人民代表大会常务委员会","53":"社会主义法治","54":"1954","55":"中华人民共和国消防法","56":"民主集中制","57":"统一战线组织","58":"最有利于被监护人","59":"出租"};var right=ans[question.titleIndex];allAnswerList=[];var as=right.split(",");for(var j=0;j<as.length;j++){for(var i=0;i<question.allAnswerList.length;i++){if($.trim(question.allAnswerList[i].answer)==$.trim(as[j])){var yes={"answer":question.allAnswerList[i].answer,"sign":question.allAnswerList[i].sign};allAnswerList.push(yes)}}}');
			}
			if( oSession.fullUrl.Contains("26511041")){
				//	oSession.utilReplaceInResponse("city_gps: typeof g_config.ipInfo.city != 'undefined' ? g_config.ipInfo.city : ''","city_gps: '深圳'");
				//	oSession.utilReplaceInResponse("province_gps: typeof g_config.ipInfo.provice != 'undefined' ? g_config.ipInfo.provice : ''","province_gps: '广东'");
				oSession.utilReplaceInResponse("var allAnswerList = question.allAnswerList;",
					'var allAnswerList=question.allAnswerList;var ans={"0":"所有权","1":"有理想","2":"公序良俗原则","3":"政治建设","4":"1954 ","5":"民主集中制","6":"最有利于被监护人","7":"出租","8":"一个月","9":"二个月","10":"百分之八十 ","11":"2","12":"工会","13":"不得低于","14":"劳动者与用人单位","15":"25","16":"货币","17":"阻挠和干涉 ","18":"给予教育批评和处分","19":"9人","20":"单位和个人","21":"6","22":"2","23":"应当 ","24":"安全投入","25":"工会","26":"监理单位","27":"宪法日","28":"人民","29":"中华人民共和国国务院"};var right=ans[question.titleIndex];allAnswerList=[];var as=right.split(",");for(var j=0;j<as.length;j++){for(var i=0;i<question.allAnswerList.length;i++){if($.trim(question.allAnswerList[i].answer)==$.trim(as[j])){var yes={"answer":question.allAnswerList[i].answer,"sign":question.allAnswerList[i].sign};allAnswerList.push(yes)}}}');
			}
			oSession.utilReplaceInResponse("text(g.titleNum + 1);",
				"text(g.titleNum + 1);setTimeout(function(){$(\"#gameLayerBox .answerBox .questionAnswer\").each("
				+"function(){if($(this).html()!=''){$(this).trigger('touchend');}});/*$($(\"#gameLayerBox .answerBox .questionAnswer\")[0]).trigger('touchend');*/},610);setTimeout(function(){$($(\"#gameLayerBox .questionBox .questionSubmitBtn\")[0]).trigger('touchend');},1900);");
			oSession.utilReplaceInResponse("}, g.waitTime);","}, 10);");
		
			oSession.utilReplaceInResponse("\"hideRank\":true","\"hideRank\":false");	
			oSession.utilReplaceInResponse("hideRank = true","hideRank = false");
			//oSession.utilReplaceInResponse("(new window[decodeBase64(\"RnVuY3Rpb24=\")](decodeBase64($(decodeBase64('I3RoZW1lR2FtZVRpbWVDb2RlSW1n'))[decodeBase64('YXR0cg==')](decodeBase64('X3NyYw=='))[decodeBase64('cmVwbGFjZQ==')](decodeBase64('ZGF0YTppbWFnZS9wbmc7YmFzZTY0LFg='), ''))))();",
			//	"consumption=14.10+parseInt(50*Math.random())/100;consumption=consumption.toFixed(2);g_config.consumption = HdGame.encodeBase64('\"'+consumption+'\"');");
			 oSession.utilReplaceInResponse("g_config.consumption = HdGame.encodeBase64('\"'+consumption+'\"');","consumption=7.72+parseInt(5*Math.random())/100;consumption=consumption.toFixed(2);g_config.consumption = HdGame.encodeBase64('\"'+consumption+'\"');");
			oSession.utilReplaceInResponse("}, g.waitTime);","}, 50);");
			//	oSession.utilReplaceInResponse("if(!g.isMove){","alert('ccc');if(!g.isMove){");
			//自动点击
			//	oSession.utilReplaceInResponse("text(g.titleNum + 1);","text(g.titleNum + 1);setTimeout(function(){$($(\"#gameLayerBox .answerBox .questionAnswer\")[0]).trigger('touchend');},1400);setTimeout(function(){$($(\"#gameLayerBox .questionBox .questionSubmitBtn\")[0]).trigger('touchend');},610);");
			//	oSession.utilReplaceInResponse("$(\".gameScrollBox\").scrollTop(0);","$(\".gameScrollBox\").scrollTop(0);setTimeout(function(){ $(\"#gameLayerBox .answerBox .questionAnswer\").trigger('touchend');},300);");
		
			//多选
			//	oSession.utilReplaceInResponse("var allAnswerList = question.allAnswerList;",'var allAnswerList=question.allAnswerList;var ans=["职工e家","国航之翼app","集团职工全覆盖","手机号","7项","6项","7*24小时","移动端","70"];var right=ans[question.titleIndex];allAnswerList=[];for(var i=0;i<question.allAnswerList.length;i++){var rights=right.split("|");for(var j=0;j<rights.length;j++){if(question.allAnswerList[i].answer==rights[j]){alert("xx");var yes={"answer":question.allAnswerList[i].answer,"sign":question.allAnswerList[i].sign};allAnswerList.push(yes)}}};');
			//	oSession.utilReplaceInResponse("var allAnswerList = question.allAnswerList;",
			//		'var allAnswerList=question.allAnswerList;var ans=["职工e家","管理+服务","国航之翼APP","集团职工全覆盖","手机号","7项","6项","7*24小时","移动端","70"];var right=ans[question.titleIndex];allAnswerList=[];'
			//		+'for(var i=0;i<question.allAnswerList.length;i++){if(question.allAnswerList[i].answer==right){var yes={"answer":question.allAnswerList[i].answer,"sign":question.allAnswerList[i].sign};allAnswerList.push(yes)}}');
			//	oSession.utilReplaceInResponse("$(\".gameScrollBox\").scrollTop(0);","$(\".gameScrollBox\").scrollTop(0);setTimeout(function(){ $(\"#gameLayerBox .answerBox .questionAnswer\").trigger('touchend'); },900);");
			//	oSession.utilReplaceInResponse("if(!isRight){","if(!isRight){ return true;");
			//	oSession.utilReplaceInResponse("return \"playing\";","return true;");
			//	oSession.utilReplaceInResponse(" var touchendFn = function(){"," hg.time.on('setTime',function(h){if(hg.time.val>7){ hg.time.end();_gameOver = true;gameOver(hg.time.val);}}); var touchendFn = function(){ ");
			//	oSession.utilReplaceInResponse("gameOver(hg.grade.val);","var first=190;var st=10;for(var i=0;i<(first+st)/st;i++){ 	hg.grade(st);};gameOver(hg.grade.val);");
		//	oSession.utilReplaceInResponse("1625104800000","1625054791000");
		//	oSession.utilReplaceInResponse("2021-07-01 10:00","2021-06-01 10:00");
		//	oSession.utilReplaceInResponse("startGame(){","startGame(){ alert('xx')");
			}
		if( oSession.fullUrl.Contains("jfz")){
			oSession["ui-bold"] =	"true";
			oSession.utilDecodeResponse();
			if(oSession.clientIP.Contains(".2.")){
				oSession.utilReplaceInResponse("function r(){",
					"var first,index=0; $(function(){try{function a(){$.ajax({type:'post',url:rankurl,dataType:'text',success:function(r){var s=$.parseJSON(r);var p=s.rankList;var t=s.rank;first=parseInt(p[index].achievement)}})}setInterval(a,1000)}catch(e){alert(e.name+': '+e.message)}});function r(){");
			}else{
				oSession.utilReplaceInResponse("function r(){",
					"var first,index=0; $(function(){try{function a(){$.ajax({type:'post',url:rankurl,dataType:'text',success:function(r){var s=$.parseJSON(r);var p=s.rankList;var t=s.rank;first=parseInt(p[index].achievement)}})}setInterval(a,1000)}catch(e){alert(e.name+': '+e.message)}}); function r(){");
		
			}
			oSession.utilReplaceInResponse("y:this.computedFailHeight(),onComplete:function(){","y:this.computedFailHeight(),onComplete:function(){hlist=e.houseList;");
			oSession.utilReplaceInResponse("prototype.animationScale=function(){","prototype.animationScale=function(){var max=1.6;var i=hlist.length;if(i>0&&hg.grade.val<(560+10)){max=hlist[i - 1].scaleX-0.01;}");
			oSession.utilReplaceInResponse("!function(e){","var hlist=[];!function(e){");
			oSession.utilReplaceInResponse("scaleX:1.6","scaleX:max");
			oSession.utilReplaceInResponse("e=e>.75?e:.7+Math.random()/3","e=0.4");
			//	oSession.utilReplaceInResponse("LF.tweenLite.to(this.nowHouse,.7,{","LF.tweenLite.to(this.nowHouse, .1, {");
			oSession.utilReplaceInResponse("this.initTips(),LF.global.canvasObj.addEventListener(\"touchstart\"","this.initTips(),LF.global.canvasObj.addEventListener(\"touchstart1\"");
			oSession.utilReplaceInResponse("scaleY:1.6","scaleY: 1.6,onComplete:function(){setTimeout(function(){t.gamer.buildHouse();},200);}");
			oSession.utilReplaceInResponse(".to(this,e,{scaleX:.3,scaleY:.3})"," ");
		}
		if( oSession.fullUrl.Contains("ktdtydj.html")){//答题
			oSession["ui-bold"] =	"true";
			oSession.utilDecodeResponse();
			oSession.utilReplaceInResponse("var list = question.allAnswerList;",
				'try{var allAnswerList=question.allAnswerList;var ans={"0":"可回收物","1":"可回收物","2":"可回收物","3":"可回收物","4":"可回收物","5":"有害垃圾","6":"有害垃圾","7":"有害垃圾","8":"有害垃圾","9":"有害垃圾","10":"易腐垃圾","11":"易腐垃圾","12":"易腐垃圾","13":"易腐垃圾","14":"易腐垃圾","15":"其他垃圾","16":"其他垃圾","17":"其他垃圾","18":"其他垃圾","19":"其他垃圾","20":"可回收物","21":"可回收物","22":"可回收物","23":"有害垃圾","24":"有害垃圾","25":"有害垃圾","26":"易腐垃圾","27":"易腐垃圾","28":"其他垃圾","29":"其他垃圾","30":"可回收物","31":"可回收物","32":"有害垃圾","33":"易腐垃圾","34":"其他垃圾"};var right=ans[question.titleIndex];allAnswerList=[];var as=right.split("|");for(var j=0;j<as.length;j++){for(var i=0;i<question.allAnswerList.length;i++){if($.trim(question.allAnswerList[i].answer)==$.trim(as[j])){var yes={"answer":question.allAnswerList[i].answer,"sign":question.allAnswerList[i].sign};allAnswerList.push(yes)}}};} catch (e) { alert(e.name + ": " + e.message); } var list=allAnswerList;');
			//oSession.utilReplaceInResponse("$('.answer').each(function(i){","$('.answer').each(function(i){ alert(i);if(i>0) return;");
			oSession.utilReplaceInResponse(" var answerOrder = [0,1,2];",
				" var answerOrder = [0];//setTimeout(function(){$($(\".answerItem\")[0]).trigger('touchend');},300);");
			oSession.utilReplaceInResponse(" hg.on('startGame',function(){",
				" hg.on('startGame',function(){setTimeout(function(){$($(\".answerItem\")[0]).trigger('touchend');},3000);");
			oSession.utilReplaceInResponse(" $('.answerItem').on('touchend',function(e){",
				" $('.answerItem').on('touchend',function(e){setTimeout(function(){$($(\".answerItem\")[0]).trigger('touchend');},900);");
			oSession.utilReplaceInResponse(" hg.time.gameCostTime += hg.time.pastTime;"," hg.time.gameCostTime = 10.51  ;");//改这个 极限分1.25
			//	oSession.utilReplaceInResponse(" consumption"," hg.time.gameCostTime = 10.51  ;");//改这个 极限分1.25
			
		}
		if( oSession.fullUrl.Contains(".hd.faisco.cn")&&oSession.fullUrl.Contains(".html")){
			oSession.utilDecodeResponse();
			
			//	oSession.GetResponseBodyAsString
			if(oSession.GetResponseBodyAsString().Contains("params.info = $.toJSON(info);")){
				//	FiddlerObject.alert("xxx");
				oSession.utilReplaceInResponse("params.info = $.toJSON(info);","function long2ip(ip){if(!isFinite(ip)){return false}return[ip>>>24,ip>>>16&0xFF,ip>>>8&0xFF,ip&0xFF].join('.')}function rand_ip(){var $ip_long=new Array(new Array('607649792','608174079'),new Array('975044608','977272831'),new Array('999751680','999784447'),new Array('1019346944','1019478015'),new Array('1038614528','1039007743'),new Array('1783627776','1784676351'),new Array('1947009024','1947074559'),new Array('1987051520','1988034559'),new Array('2035023872','2035154943'),new Array('2078801920','2079064063'),new Array('-1950089216','-1948778497'),new Array('-1425539072','-1425014785'),new Array('-1236271104','-1235419137'),new Array('-770113536','-768606209'),new Array('-569376768','-564133889'));var $rand_key=parseInt(Math.random()*15);var $huoduan_ip=long2ip($ip_long[$rand_key][0]+parseInt(Math.random()*($ip_long[$rand_key][1]-$ip_long[$rand_key][0])));return $huoduan_ip};info.ip = rand_ip(); params.info = $.toJSON(info);");
			
			}
		}
		if( oSession.fullUrl.Contains(".hd.webportal.top")&&oSession.fullUrl.Contains(".html")){
			oSession.utilDecodeResponse();
			
			//	oSession.GetResponseBodyAsString
			if(oSession.GetResponseBodyAsString().Contains("params.info = $.toJSON(info);")){
				//	FiddlerObject.alert("xxx");
				//	oSession.utilReplaceInResponse("params.info = $.toJSON(info);","function long2ip(ip){if(!isFinite(ip)){return false}return[ip>>>24,ip>>>16&0xFF,ip>>>8&0xFF,ip&0xFF].join('.')}function rand_ip(){var $ip_long=new Array(new Array('607649792','608174079'),new Array('975044608','977272831'),new Array('999751680','999784447'),new Array('1019346944','1019478015'),new Array('1038614528','1039007743'),new Array('1783627776','1784676351'),new Array('1947009024','1947074559'),new Array('1987051520','1988034559'),new Array('2035023872','2035154943'),new Array('2078801920','2079064063'),new Array('-1950089216','-1948778497'),new Array('-1425539072','-1425014785'),new Array('-1236271104','-1235419137'),new Array('-770113536','-768606209'),new Array('-569376768','-564133889'));var $rand_key=parseInt(Math.random()*15);var $huoduan_ip=long2ip($ip_long[$rand_key][0]+parseInt(Math.random()*($ip_long[$rand_key][1]-$ip_long[$rand_key][0])));return $huoduan_ip};info.ip = rand_ip(); params.info = $.toJSON(info);");
			
			}
		}
		if(( oSession.fullUrl.Contains(".hd.faisco.cn")|| oSession.fullUrl.Contains(".hdpyqe.com"))&&oSession.fullUrl.Contains(".html")){
			oSession.utilDecodeResponse();
			
			oSession.utilReplaceInResponse("HdGame.initChangePoup({",
				"var rankurl;var initC=HdGame.initChangePoup;HdGame.initChangePoup=function(obj){rankurl=obj.rankUrl;initC(obj);}; HdGame.initChangePoup({");
				
			//	oSession.utilReplaceInResponse("faiAjax.ajax({","var a=({");//取消错误提交
		}
		if( oSession.fullUrl.Contains(".hd.webportal.top")&&oSession.fullUrl.Contains(".html")){
			oSession.utilDecodeResponse();
			
			oSession.utilReplaceInResponse("HdGame.initChangePoup({",
				"var rankurl;var initC=HdGame.initChangePoup;HdGame.initChangePoup=function(obj){rankurl=obj.rankUrl;initC(obj);}; HdGame.initChangePoup({");
		oSession.utilReplaceInResponse("$$isOpenPlayerEditLinkInfo\":true","$$isOpenPlayerEditLinkInfo\":false");
			}
		
		if( oSession.fullUrl.Contains("https://explore2.fengchuanba.com/static/js/app")){//左右匹配 上限 1000
			oSession["ui-bold"] =	"true";
			oSession.utilDecodeResponse();
			//		oSession.utilReplaceInResponse("var Aside = (function(){",
			//		"var first; $(function(){try{var rankurl;function a(){$.ajax({type:'post',url:'https://16342550-13.hd.faisco.cn/ajax/hdgame_h.jsp?cmd=getRankList&aid=16342550&gameId=13&style=13&openId=oosnVwgIXqkYlXjaF4IvL7G5usW8&start=0&limit=99&playerId=100&_openId=oosnVwgIXqkYlXjaF4IvL7G5usW8',dataType:'text',success:function(r){var s=$.parseJSON(r);var p=s.rankList;var t=s.rank;first=parseInt(p[0].achievement)}})}setInterval(a,1000)}catch(e){alert(e.name+': '+e.message)}});  var Aside = (function(){");
			
			oSession.utilReplaceInResponse("webpackJsonp([","var ansss;webpackJsonp([");
			oSession.utilReplaceInResponse("&&dispatch(\"totalTimeFlow\")}):void","&&dispatch(\"totalTimeFlow\");ansss=data.question.answer;setTimeout(function(){var sel=$(\"section\").find(\".btn\");var con;if(data.question.answer==\"N\"){con=\"错误\"}else{if(data.question.answer==\"Y\"){con=\"正确\"}else{for(var i=0;i<data.question.choiceList.length;i++){if(data.question.choiceList[i].tag==parseInt(data.question.answer)){con=data.question.choiceList[i].content}}}}sel.each(function(i){if($(this).html()==con){$(this).trigger(\"click\")}})},500);}):void");
			oSession.utilReplaceInResponse("function(e,a,i){if(t(\"set_errorTime\",0)","function(e,a,i){if(e.question!=null){var data=ea2a(e);if(data.question.answer.indexOf(\"/\")>0){$(\".check\").show();$(\".check\").find(\"button\").show()}setTimeout(function(){try{ansss=data.question.answer;var sel=$(\"section\").find(\".btn\");var con;if(data.question.answer==\"N\"){con=\"错误\";sel.each(function(i){if($(this).html()==con){$(this).trigger(\"click\")}})}else{if(data.question.answer==\"Y\"){con=\"正确\";sel.each(function(i){if($(this).html()==con){$(this).trigger(\"click\")}})}else{if(data.question.answer.indexOf(\"/\")>0){var ans=data.question.answer.split(\"/\");for(var j=0;j<ans.length;j++){}$(\".check\").find(\"button\").trigger(\"click\")}else{for(var i=0;i<data.question.choiceList.length;i++){if(data.question.choiceList[i].tag==parseInt(data.question.answer)){con=data.question.choiceList[i].content}}sel.each(function(i){if($(this).html()==con){$(this).trigger(\"click\")}})}}}}catch(e){alert(e.name+\": \"+e.message)}},1200)};if(t(\"set_errorTime\",0)");
			
			//	oSession.utilReplaceInResponse("_this.gLayer.addChild(new Guard(x,-gData.height,true));","_this.gLayer.addChild(new Guard(x,-gData.height,true));try{ _this.touches.x=gData.width*tList.last.x+forwardW/2;} catch (e) { alert(e.name + \": \" + e.message); } ");
		}
		if( oSession.fullUrl.Contains("jlptzs")){
			oSession["ui-bold"] =	"true";
			oSession.utilDecodeResponse();
			oSession.utilReplaceInResponse("var GameArg = {","var endGame;var GameArg = {");
			oSession.utilReplaceInResponse("function endGame(grade){","endGame=function (grade){");
		}
		if( oSession.fullUrl.Contains("bhdsg")){
			oSession["ui-bold"] =	"true";
			oSession.utilDecodeResponse();
			if(oSession.clientIP.Contains(".2.")){
				oSession.utilReplaceInResponse("Bone.prototype.update = function(){",
					"var first,index=0; $(function(){try{function a(){$.ajax({type:'post',url:rankurl,dataType:'text',success:function(r){var s=$.parseJSON(r);var p=s.rankList;var t=s.rank;first=parseInt(p[index].achievement)+1}})}setInterval(a,1000)}catch(e){alert(e.name+': '+e.message)}});  Bone.prototype.update = function(){ ");
			}else{
				oSession.utilReplaceInResponse("Bone.prototype.update = function(){",
					"var first,index=7; $(function(){try{function a(){$.ajax({type:'post',url:rankurl,dataType:'text',success:function(r){var s=$.parseJSON(r);var p=s.rankList;var t=s.rank;first=parseInt(p[index].achievement)+1}})}setInterval(a,1000)}catch(e){alert(e.name+': '+e.message)}});  Bone.prototype.update = function(){ ");
		
			}
			oSession.utilReplaceInResponse(" g.createTime = Math.max(800 - 100 * this._timerIndex, 100);"," g.createTime = 10;");
			//	oSession.utilReplaceInResponse("\"initTime\":0","\"initTime\":30");
			oSession.utilReplaceInResponse("\"countsTimeType\":0","\"countsTimeType\":1");
			oSession.utilReplaceInResponse("}else if(rt[0] === true){","};if( hg.time.pastTime>15){");//--20miao
			oSession.utilReplaceInResponse(" if(rt[0] === false){"," if(hg.grade.val<121){");
			oSession.utilReplaceInResponse("if(g.bloodVolume < 0){","if(g.bloodVolume < 1000000){");
		}
		if( oSession.fullUrl.Contains("hdg.faisys.com/js/hdgame.min1.js")){
			oSession.oResponse["Cache-Control"] = "no-cache";
				oSession["ui-bold"] =	"true";
			oSession.LoadResponseFromFile("D:\\ljj\\fiddler\\凡客互动注入timer_hdgame.min.old.js");
			
			if(oSession.RequestHeaders["Referer"].Contains("xjtx")
				||oSession.RequestHeaders["Referer"].Contains("bhmn")
				||oSession.RequestHeaders["Referer"].Contains("ftxbj")
				||oSession.RequestHeaders["Referer"].Contains("trsx")
				||oSession.RequestHeaders["Referer"].Contains("lctj")
				//		||oSession.RequestHeaders["Referer"].Contains("mcaxc")
				//	||oSession.RequestHeaders["Referer"].Contains("wzytzs")
				//	||oSession.RequestHeaders["Referer"].Contains("ryzyb")
				||oSession.RequestHeaders["Referer"].Contains("jskb")
				//	||oSession.RequestHeaders["Referer"].Contains("zgnpy")
				||oSession.RequestHeaders["Referer"].Contains("tcdzz")
				||oSession.RequestHeaders["Referer"].Contains("fkxlshy")
				||oSession.RequestHeaders["Referer"].Contains("ccdbp")
				//	||oSession.RequestHeaders["Referer"].Contains("ktdtydj")//答题
				||oSession.RequestHeaders["Referer"].Contains("ymskqdj")
				||oSession.RequestHeaders["Referer"].Contains("zjdsg")
				||oSession.RequestHeaders["Referer"].Contains("jyltzs")
				||oSession.RequestHeaders["Referer"].Contains("hxdzz")
				||oSession.RequestHeaders["Referer"].Contains("jlptzs")
				||oSession.RequestHeaders["Referer"].Contains("dbdzz")
				||oSession.RequestHeaders["Referer"].Contains("fkttt")
				||oSession.RequestHeaders["Referer"].Contains("jxtyqdj")
				||oSession.RequestHeaders["Referer"].Contains("qmdfj")
				||oSession.RequestHeaders["Referer"].Contains("wymmz")
				||oSession.RequestHeaders["Referer"].Contains("bbtzw")
				||oSession.RequestHeaders["Referer"].Contains("sssq")
				||oSession.RequestHeaders["Referer"].Contains("hlww")
				//	||oSession.RequestHeaders["Referer"].Contains("bhdsg")
				||oSession.RequestHeaders["Referer"].Contains("yqlcc")
				
			){
				
				 
				//oSession["ui-backcolor"] = "green";
				if(oSession.clientIP.Contains(".2.")){
					oSession["ui-bold"] =	"true";
					oSession.LoadResponseFromFile("D:\\ljj\\fiddler\\凡客互动注入timer_hdgame.min.js");
				}else{
					oSession["ui-bold"] =	"green";
					oSession.LoadResponseFromFile("D:\\ljj\\fiddler\\凡客互动注入timer_hdgame1.min.js");
				}
			}
		}
		if( oSession.fullUrl.Contains("https://hdg.faisys.com/js/utils/initTime.min.js")){
			oSession.oResponse["Cache-Control"] = "no-cache";
			oSession.LoadResponseFromFile("D:\\ljj\\fiddler\\凡客initTime.old.js");
				oSession["ui-bold"] =	"true";
			if(oSession.RequestHeaders["Referer"].Contains("xjtx")
				||oSession.RequestHeaders["Referer"].Contains("bhmn")
				||oSession.RequestHeaders["Referer"].Contains("ftxbj")
				||oSession.RequestHeaders["Referer"].Contains("trsx")
				||oSession.RequestHeaders["Referer"].Contains("lctj")
				//		||oSession.RequestHeaders["Referer"].Contains("mcaxc")
				//	||oSession.RequestHeaders["Referer"].Contains("wzytzs")
				//	||oSession.RequestHeaders["Referer"].Contains("ryzyb")
				||oSession.RequestHeaders["Referer"].Contains("jskb")
				//	||oSession.RequestHeaders["Referer"].Contains("zgnpy")
				||oSession.RequestHeaders["Referer"].Contains("tcdzz")
				||oSession.RequestHeaders["Referer"].Contains("fkxlshy")
				||oSession.RequestHeaders["Referer"].Contains("ccdbp")
				//	||oSession.RequestHeaders["Referer"].Contains("ktdtydj")//答题
				||oSession.RequestHeaders["Referer"].Contains("ymskqdj")
				||oSession.RequestHeaders["Referer"].Contains("zjdsg")
				||oSession.RequestHeaders["Referer"].Contains("jyltzs")
				||oSession.RequestHeaders["Referer"].Contains("hxdzz")
				||oSession.RequestHeaders["Referer"].Contains("jlptzs")
				||oSession.RequestHeaders["Referer"].Contains("dbdzz")
				||oSession.RequestHeaders["Referer"].Contains("fkttt")
				||oSession.RequestHeaders["Referer"].Contains("jxtyqdj")
				||oSession.RequestHeaders["Referer"].Contains("qmdfj")
				||oSession.RequestHeaders["Referer"].Contains("wymmz")
				||oSession.RequestHeaders["Referer"].Contains("bbtzw")
				||oSession.RequestHeaders["Referer"].Contains("sssq")
				||oSession.RequestHeaders["Referer"].Contains("hlww")
				//	||oSession.RequestHeaders["Referer"].Contains("bhdsg")
				||oSession.RequestHeaders["Referer"].Contains("yqlcc")
				
			){
				
				 
				//oSession["ui-backcolor"] = "green";
				if(oSession.clientIP.Contains(".2.")){
					oSession["ui-bold"] =	"true";
					oSession.LoadResponseFromFile("D:\\ljj\\fiddler\\凡客initTime.js");
				}else{
					oSession["ui-bold"] =	"green";
					oSession.LoadResponseFromFile("D:\\ljj\\fiddler\\凡客initTime.1.js");
				}
			}
		}
		if( oSession.fullUrl.Contains("https://15038415-24.hd.faisco.cn/15038415/rWX1qdnAkG6T5EJCsCaysg/csyx.html?fromImgMsg=true")){
			//oSession.LoadResponseFromFile("D:\\planet\\fiddler\\登高伪造数据.html");
	
		}
		if( oSession.fullUrl.Equals("https://lddr.junyouyun.com/api/v1/questionnaires")){
			oSession.utilDecodeResponse();
			var que=oSession.GetResponseBodyAsString();
			var json=Fiddler.WebFormats.JSON.JsonDecode(que);
			var questionAnswers=json.JSONObject["questionAnswers"];
			//	FiddlerObject.alert(questionAnswers[0]["question"]["content"]["choices"]);
			for(var i=0;i<10;i++){
				//	FiddlerObject.alert(questionAnswers[i]["question"]["content"]);
				//	var Result=new Array(questionAnswers[i]["question"]["choices"];
				try{
					var num=4 ;
					//	FiddlerObject.alert(num);
					for(var j=0;j<num;j++){
						//	FiddlerApplication.Log.LogFormat(' {0} ', questionAnswers[i]["question"]["choices"][j]["correct"]);
						//	FiddlerObject.alert( questionAnswers[i]["question"]["choices"][j]["correct"]);
						/*	if(questionAnswers[i]["question"]["choices"][j]["correct"]==false)
						questionAnswers[i]["question"]["choices"][j]["content"]="";*/
						if(questionAnswers[i]["question"]["choices"][j]["correct"]==true){
					
							for(var k=0;k<num;k++){
								questionAnswers[i]["question"]["choices"][k]["content"]=questionAnswers[i]["question"]["choices"][j]["content"];
								questionAnswers[i]["question"]["choices"][k]["correct"]=true;
								questionAnswers[i]["question"]["choices"][k]["id"]=questionAnswers[i]["question"]["choices"][j]["id"]
							}
							break;
						}
					
					}
			
				}catch(e){}
				//oSession.utilReplaceInResponse("problem();"," ");//创建糖果时间 ios 上限  465分
			}
			json.JSONObject["questionAnswers"]=questionAnswers;
			var newstr=Fiddler.WebFormats.JSON.JsonEncode(json.JSONObject);
			oSession.utilSetResponseBody(newstr);
		}
		if( oSession.fullUrl.Equals("https://www.njzycn.com/wechatServer/wechatExam/generation?activityType=mfzslxt20181208")){
			oSession.utilDecodeResponse();
			var que=oSession.GetResponseBodyAsString();
			var json=Fiddler.WebFormats.JSON.JsonDecode(que);
			var questionAnswers=json.JSONObject["generation"];
			//	FiddlerObject.alert(questionAnswers[0]["question"]["content"]["choices"]);
			for(var i=0;i<15;i++){
				//FiddlerObject.alert(questionAnswers[i]["question"]["content"]);
				//for(var j=0;j<4;j++){
				//	FiddlerApplication.Log.LogFormat(' {0} ', questionAnswers[i]["question"]["choices"][j]["correct"]);
				//	FiddlerObject.alert( questionAnswers[i]["question"]["choices"][j]["correct"]);
				/*	if(questionAnswers[i]["question"]["choices"][j]["correct"]==false)
				questionAnswers[i]["question"]["choices"][j]["content"]="";*/
				if(questionAnswers[i]["questionType"]=="1"){
					questionAnswers[i]["optionTrue"]="对"
					questionAnswers[i]["question"]=questionAnswers[i]["optionTrue"];
						
				}else {
					questionAnswers[i]["question"]=questionAnswers[i]["answer"];
					questionAnswers[i]["answer"]="A"
				}
					
					
				
			
			
				//oSession.utilReplaceInResponse("problem();"," ");//创建糖果时间 ios 上限  465分
			}
			json.JSONObject["questionAnswers"]=questionAnswers;
			var newstr=Fiddler.WebFormats.JSON.JsonEncode(json.JSONObject);
			oSession.utilSetResponseBody(newstr);
		}
		var str =  oSession.GetResponseBodyAsString();
		if(str.Contains("_ruleInfo.list +=")) {
			oSession.utilDecodeResponse();
			oSession.utilReplaceInResponse("$.ajaxSettings.errorCall.push","alert(\"含有规则数据\");$.ajaxSettings.errorCall.push");
		}
		// oSession.utilReplaceInResponse("\"ishasAttentiosThisAPP\":true","\"ishasAttentiosThisAPP\":false");
		// oSession.utilReplaceInResponse("if(g_config.isOpenAreaLimit){"," if(false){");//----地区限制
	
		if( oSession.fullUrl.Contains("https://tounao02.029wx.net/app/index.php?i=2&t=0&v=1.0&from=wxapp&c=entry&a=wxapp&do=Getques&&m=hc_answer")){
			oSession.utilDecodeResponse();
			var que=oSession.GetResponseBodyAsString();
			var json=Fiddler.WebFormats.JSON.JsonDecode(que);
			var xx=json.JSONObject["data"]["ans"]
			//for(var i=0;i<json.JSONObject["data"]["right"];i++){
			json.JSONObject["data"]["ans"][json.JSONObject["data"]["right"]]["ans"]="xxxxxxxxxxxxxxxxxxxxxxxxxx"
			//}
			var newstr=Fiddler.WebFormats.JSON.JsonEncode(json.JSONObject);
			//	FiddlerObject.alert(newstr);
			oSession.utilSetResponseBody(newstr);
		}
		if( oSession.fullUrl.Contains("https://f.liyouhui.com/app/index.php?i=3&c=entry&id=10&do=index&m=tad_rubbish")){
			oSession.utilDecodeResponse();
			oSession["ui-bold"] =	"true";
			oSession.utilReplaceInResponse("if (!this.currentData[a]) {",
				"if (false) {")
			oSession.utilReplaceInResponse("if (this.currentData.isSpecial) {",
				"if (true) {")
		
			oSession.utilReplaceInResponse(" i.addClass(\"open\");",
				" i.addClass(\"open\");setTimeout(function(){t.onClassify(e);},400)")
		
			oSession.utilReplaceInResponse("if(_this.passNum>=3){",
				"if(_this.passNum>=3){  window.location.href = \"./index.php?i=3&c=entry&id=10&do=Choujiang&m=tad_rubbish\";")
			oSession.utilReplaceInResponse("showSuccess('next'",
				"setTimeout(function(){ if(res.data.nowgoldnum) _this.play(mye)},100);setTimeout(function(){ if(res.data.nowgoldnum) _this.play(mye)},200);showSuccess('next'")
			oSession.utilReplaceInResponse("var timeCircle = function(){",
				"var mye;var timeCircle = function(){")
			oSession.utilReplaceInResponse("play: function(e) {",
				"play: function(e) { mye=e;")
			oSession.utilReplaceInResponse("if(this.successCount==this.maxSuccessCount){",
				"if(1==1){")
			oSession.utilReplaceInResponse("if(_this.successCount<_this.maxSuccessCount || _this.failCount>_this.maxFailCount){",
				"if(1==0){")
		}
		if( oSession.fullUrl.Contains("https://wx.qiaoluchun.cn/api/Task/GetQues")|| oSession.fullUrl.Contains("https://wx.qiaoluchun.cn/api/Task/onSaveResult?")){
			oSession.utilDecodeResponse();
			oSession["ui-bold"] =	"true";
			var que=oSession.GetResponseBodyAsString();
			var json=Fiddler.WebFormats.JSON.JsonDecode(que);
			
			var xx=json.JSONObject["data"]["QuesAns"]["AnsList"];
			var result=json.JSONObject["data"]["QuesAns"]["RESULT"];
			//var aa=new Array(xx);
			FiddlerApplication.Log.LogString(result);
			var type=json.JSONObject["data"]["QuesAns"]["TYPE"];
			//json.JSONObject["data"]["QuesAns"]["RESULT"]='A';
			try{
				for(var i=0;i<5;i++){
					if(result.Contains(xx[i]["TAG"])){
						json.JSONObject["data"]["QuesAns"]["AnsList"][i]["RETULR"]="------------------"
					}
				}
			}catch(e){}
			json.JSONObject["data"]["QuesAns"]["TITLE"]=json.JSONObject["data"]["Score"];
			var newstr=Fiddler.WebFormats.JSON.JsonEncode(json.JSONObject); 
			oSession.utilSetResponseBody(newstr);
		}
		if( oSession.fullUrl.Contains("http://www.mineni.com.cn/fish/index.php?co=index.php?co=index.php?co=fish")){
			oSession.utilDecodeResponse();
			oSession["ui-bold"] =	"true";
			oSession.utilReplaceInResponse("if(jg==daan[indenum[wtindex]]){",
				"if(1){")
		
		
		
			
		}
		if( oSession.fullUrl.Contains("http://www.6126128.com/index.php?g=Wap&m=Problem&a=index&id=2&token=qjzuvc1470036809&wecha_id=")){
			oSession.utilDecodeResponse();
			oSession["ui-bold"] =	"true";
			//	oSession.ResponseHeaders.Remove("Content-Encoding")
			oSession.ResponseHeaders.Remove("Content-Type")
			oSession.ResponseHeaders.Add("Content-Type","text/html; charset=utf-8")
			oSession.ResponseHeaders.Remove("Cache-Control")
			oSession.ResponseHeaders.Add("Cache-Control","private")
		}
		if( oSession.fullUrl.Contains("&do=question&m=jueqi_fkdt")||oSession.fullUrl.Contains("do=yhjp&m=jueqi_fkdt")){
			oSession.utilDecodeResponse();
			oSession["ui-bold"] =	"true";
			oSession.utilReplaceInResponse("if(zqda == da){",
				"if(1 == 1){")
			oSession.utilReplaceInResponse("getLocation();",
				" ")
		
		
		
			
		}
		if( oSession.fullUrl.Contains("http://wx.jiaodong.net/honestyanswer/public/index.php/index/index/answer/type/1.html")
		|| oSession.fullUrl.Contains("http://wx.jiaodong.net/honestyanswer/public/index.php/index/index/answer.html")){
			oSession.utilDecodeResponse();
			oSession["ui-bold"] =	"true";
			oSession.utilReplaceInResponse("<script>",
				"<script type=\"text/javascript\" src=\"http://www.jiaodong.net/js/jQuery1.12.4.js\"></script><script>")
			
		}
		if( oSession.fullUrl.Contains("http://ziran.weiyee.com/DatiFive/dati.aspx")){
			oSession.utilDecodeResponse();
			oSession["ui-bold"] =	"true";
			oSession.utilReplaceInResponse("if (Timu == DaAn) {","Timu=DaAn;if (Timu == DaAn) {")
			//	oSession.utilReplaceInResponse("var longitude = res.longitude;","var longitude = 112.80764;  ")
			
		}
		if( oSession.fullUrl.Contains("https://311213.m.weixunyunduan.net/wx/pub/yunduanwx/index.php?g=Wap&m=Problem&a=requestion&token=311213&id=1936")){
			oSession.utilDecodeResponse();
			oSession["ui-bold"] =	"true";
			oSession.utilReplaceInResponse("if(e){e.classList.add('endON')}"," ")
			//	oSession.utilReplaceInResponse("var longitude = res.longitude;","var longitude = 112.80764;  ")
			
		}
		if( oSession.fullUrl.Contains("https://wei.iubo.cn/app/index.php?i=20&t=0&v=1.0&from=wxapp&c=entry&a=wxapp&do=getlist&m=web168_answer")){
			oSession.utilDecodeResponse();
			oSession["ui-bold"] =	"true";
			var que=oSession.GetResponseBodyAsString();
			var json=Fiddler.WebFormats.JSON.JsonDecode(que);
			
			var xx=json.JSONObject["data"]["list"];
			//	var result=json.JSONObject["data"]["QuesAns"]["RESULT"];
			//var aa=new Array(xx);
			//	FiddlerApplication.Log.LogString(result);
			//	var type=json.JSONObject["data"]["QuesAns"]["TYPE"];
			//json.JSONObject["data"]["QuesAns"]["RESULT"]='A';
			try{
				for(var i=0;i<10;i++){
					var answer=xx[i]['answer']
					for(var j=0;j<4;j++){
						if(answer.Contains(j+1+'')){
							json.JSONObject["data"]["list"][i]["options"][j]="------------------"
						}
					}
					
				}
			}catch(e){}
			//	json.JSONObject["data"]["QuesAns"]["TITLE"]=json.JSONObject["data"]["Score"];
			var newstr=Fiddler.WebFormats.JSON.JsonEncode(json.JSONObject); 
			oSession.utilSetResponseBody(newstr);
			
		}
		if( oSession.fullUrl.Contains("https://diamond.edmarketing.cn/exam/examination/examinationWrapperWithSecure")){
			oSession.utilDecodeResponse();
			oSession["ui-bold"] =	"true";
			var que=oSession.GetResponseBodyAsString();
			var json=Fiddler.WebFormats.JSON.JsonDecode(que);
			
			var xx=json.JSONObject["paperWrapper"]["paperQuestionWrapperList"];
			//	var result=json.JSONObject["data"]["QuesAns"]["RESULT"];
			//var aa=new Array(xx);
			//	FiddlerApplication.Log.LogString(result);
			//	var type=json.JSONObject["data"]["QuesAns"]["TYPE"];
			//json.JSONObject["data"]["QuesAns"]["RESULT"]='A';
			
			//	FiddlerObject.alert(xx.length);
			
			for(var i=0;i<25;i++){
				//var answer=xx[i]['anserve']
				var options=xx[i]["questionWrapper"]["options"];
				try{
					for(var j=0;j<7;j++){
						//		FiddlerObject.alert(options[j]['isSelected']);
						if(options[j]['isSelected']){
							json.JSONObject["paperWrapper"]["paperQuestionWrapperList"][i]["questionWrapper"]["options"][j]['text']="------------------"
						}
					}
				}catch(e){}
			}
		
			//	json.JSONObject["data"]["QuesAns"]["TITLE"]=json.JSONObject["data"]["Score"];
			var newstr=Fiddler.WebFormats.JSON.JsonEncode(json.JSONObject); 
			oSession.utilSetResponseBody(newstr);
			
		}
		if( oSession.fullUrl.Contains("https://wei.iubo.cn/app/index.php?i=20&t=0&v=1.0&from=wxapp&c=entry&a=wxapp&do=getlist&m=web168_answer")){
			oSession.utilDecodeResponse();
			oSession["ui-bold"] =	"true";
			var que=oSession.GetResponseBodyAsString();
			var json=Fiddler.WebFormats.JSON.JsonDecode(que);
			
			var xx=json.JSONObject["data"]["list"];
			//	var result=json.JSONObject["data"]["QuesAns"]["RESULT"];
			//var aa=new Array(xx);
			//	FiddlerApplication.Log.LogString(result);
			//	var type=json.JSONObject["data"]["QuesAns"]["TYPE"];
			//json.JSONObject["data"]["QuesAns"]["RESULT"]='A';
		
			for(var i=0;i<10;i++){
				var answer=xx[i]['answer']
				try{
					for(var j=0;j<6;j++){
						if(answer.Contains(j+1+'')){
							json.JSONObject["data"]["list"][i]["options"][j]="------------------"
						}
					}
				}catch(e){}
			}
		
			//	json.JSONObject["data"]["QuesAns"]["TITLE"]=json.JSONObject["data"]["Score"];
			var newstr=Fiddler.WebFormats.JSON.JsonEncode(json.JSONObject); 
			oSession.utilSetResponseBody(newstr);
			
		}
		if( oSession.fullUrl.Contains("https://api.bmobcloud.com/1/classes/question_bank")){
			oSession.utilDecodeResponse();
			oSession["ui-bold"] =	"true";
			var que=oSession.GetResponseBodyAsString();
			var json=Fiddler.WebFormats.JSON.JsonDecode(que);
			
			var xx=json.JSONObject["results"];
			//	var result=json.JSONObject["data"]["QuesAns"]["RESULT"];
			//var aa=new Array(xx);
			//	FiddlerApplication.Log.LogString(result);
			//	var type=json.JSONObject["data"]["QuesAns"]["TYPE"];
			//json.JSONObject["data"]["QuesAns"]["RESULT"]='A';
		
			for(var i=0;i<100;i++){
				var an=xx[i]['answer']
				try{
					xx[i]['option_'+an]='------'
				}catch(e){}
			}
			json.JSONObject["results"]=xx;
			//	json.JSONObject["data"]["QuesAns"]["TITLE"]=json.JSONObject["data"]["Score"];
			var newstr=Fiddler.WebFormats.JSON.JsonEncode(json.JSONObject); 
			oSession.utilSetResponseBody(newstr);
			
		}
		if( oSession.fullUrl.Contains("https://court.conn100.com/api/api/activity/getQuestion")){
			oSession.utilDecodeResponse();
			oSession["ui-bold"] =	"true";
			var que=oSession.GetResponseBodyAsString();
			var json=Fiddler.WebFormats.JSON.JsonDecode(que);
			
			var xx=json.JSONObject["data"];
			//	var result=json.JSONObject["data"]["QuesAns"]["RESULT"];
			//var aa=new Array(xx);
			//	FiddlerApplication.Log.LogString(result);
			//	var type=json.JSONObject["data"]["QuesAns"]["TYPE"];
			//json.JSONObject["data"]["QuesAns"]["RESULT"]='A';
			//	var option=Fiddler.WebFormats.JSON.JsonEncode(xx["option"]);
			//		FiddlerObject.alert(option);
			var option=xx["option"];
			//			FiddlerObject.alert(typeof(option));
			var opt=[];
			eval("opt="+option+"")
			//	opt=JSON.parse(option)
			//	FiddlerObject.alert(opt[0]['answer']);
			xx['content']='';
			for(var i=0;i<10;i++){
				
				try{
			
					if(opt[i]['answer']){
						opt[i]['content']=	'-------'
						xx['content']=xx['content']+" "+opt[i]['option'];
						if(xx['currentNums']==73){
							xx['content']="A C"
						}
						if(xx['currentNums']==4){
							xx['content']="C"
						}
					}
					//
				}catch(e){}
			}
			//	FiddlerObject.alert(xx['content']);
			//	option=opt.toString()
			//		FiddlerObject.alert(option);
			//	json.JSONObject["data"]["option"]=	option
			//	json.JSONObject["data"]=xx;
			//	json.JSONObject["data"]["QuesAns"]["TITLE"]=json.JSONObject["data"]["Score"];
			json.JSONObject["data"]=xx;
			var newstr=Fiddler.WebFormats.JSON.JsonEncode(json.JSONObject); 
			//	System.Array.
			//		JArray.
			oSession.utilSetResponseBody(newstr);
			
		}
		if( oSession.fullUrl.Contains("http://weixin.gycode.com/index.php")){
			oSession["ui-bold"] =	"true";
			oSession.utilDecodeResponse();
			oSession.ResponseHeaders.Remove("Cache-Control")
			oSession.ResponseHeaders.Remove("Content-Encoding")
			oSession.ResponseHeaders.Remove("Content-Type")
		}
		if( oSession.fullUrl.Contains("http://xfnj.house365.com/prj/2021/06/jstc_guess/index.php?s=/index/rain")){
			oSession["ui-bold"] =	"true";
			oSession.utilDecodeResponse();
				oSession.utilReplaceInResponse("var err_msg  = \"6月15日-6月17日，每天10:00、15:00准时开抢\";",
				"var err_msg  = \"\";")
				oSession.utilReplaceInResponse("var click_num = 0;","var click_num = 10;")
			oSession.utilReplaceInResponse("var countDown = 10;","var countDown = 1;")
		}
		if( oSession.fullUrl.Contains("getSecretBoxFromWeChat")){
			oSession.utilDecodeResponse();
			oSession["ui-bold"] =	"true";
			oSession.utilReplaceInResponse("\"showAnswer\":3","\"regEditable\":1,\"showAnswer\":1")
			oSession.utilReplaceInResponse("\"showAnswer\":1","\"regEditable\":1,\"showAnswer\":1")
			oSession.utilReplaceInResponse("\"showAnswerExplain\":2","\"showAnswerExplain\":0")
			oSession.utilReplaceInResponse("\"modify\":1","\"modify\":0")
		}
		if( oSession.fullUrl.Contains("http://zsjs.123js.cn/Mobile2_Redis/Repair.aspx?DSID=9867&uid=")||oSession.fullUrl.Contains("http://zsjs.123js.cn/Mobile2_Redis/LoginStartExam.aspx?DSID=9867&uid=")){
			oSession.utilDecodeResponse();
			oSession["ui-bold"] =	"true";
			oSession.utilReplaceInResponse("alert('很遗憾！本活动仅限于浙江省绍兴市地区手机用户参赛，期待您继续关注我们后续赛事！');document.location.href='http://zsjs.123js.cn/Mobile2_Redis/Repair.aspx?DSID=9867&uid=';","")
			oSession.utilReplaceInResponse("if(addComp.province.indexOf(vcLocation_p)==-1)","addComp.province='浙江省';addComp.city='绍兴市';addComp.district='请选择';if(addComp.province.indexOf(vcLocation_p)==-1)")
		}
		if( oSession.fullUrl.Contains("/11/lib/main.min_3.0.js")){
			oSession.utilDecodeResponse();
			oSession["ui-bold"] =	"true";
			oSession.utilReplaceInResponse("e.maxTime=60","e.maxTime=2")
			oSession.utilReplaceInResponse("this.maxTime=platform.getGameAPI().dataEvent.getStragyData(\"basic\",\"gameTime\")","this.maxTime=2")
		}
		if( oSession.fullUrl.Contains("https://hd2.nbzztwx.com/index.php")){
			oSession.utilDecodeResponse();
			oSession["ui-bold"] =	"true";
			oSession.utilReplaceInResponse("if ($(draggableElement).attr('data') == cnumber) {","cnumber=4;if (1==1) {")
			var num=parseInt(10*Math.random())
			var t=800+num;
			//	t=t.toFixed(2);
			oSession.utilReplaceInResponse("'timeCount': timeCount","'timeCount': "+t)
		}
		if( oSession.fullUrl.Contains("https://yun.duiba.com.cn/aurora/scripts/customs.")){
			oSession.utilDecodeResponse();
			oSession["ui-bold"] =	"true";
			//	oSession.utilReplaceInResponse("{score:this.score","{score:300")
			//	oSession.utilReplaceInResponse("{score:e.score,reason:2}","{score:200,reason:1}")
			oSession.utilReplaceInResponse("\"boom\"==t.npcType","\"boom1\"==t.npcType")
			oSession.utilReplaceInResponse("\"stone\"==t.npcType","\"boom1\"==t.npcType")
			oSession.utilReplaceInResponse("this.x=630*Math.random()","this.x=100")
			oSession.utilReplaceInResponse("this.speed=1","this.speed=8")
			oSession.utilReplaceInResponse("this.showNpc(\"boom\")","this.showNpc(\"rain1\")")
			oSession.utilReplaceInResponse("this.showNpc(\"stone\")","this.showNpc(\"rain1\")")
			oSession.utilReplaceInResponse("e.hasHit(e.player,t)","e.hasHit(e.player,t)&&e.score<870")
			oSession.utilReplaceInResponse("this._score+=t","this._score+=195+parseInt(Math.random()*5)")
			//	oSession.utilReplaceInResponse("_this._score = 0;","_this._score = 9999;")
			//	oSession.utilReplaceInResponse("this.__score = 0;","this.__score = 9998;")//打冰球
			oSession.utilReplaceInResponse("this.__score = v;","this.__score = 1900000+parseInt(Math.random()*1000);")//打冰球 每天最高分 累积
			oSession.utilReplaceInResponse("_this.scoreValue = config.value;","_this.scoreValue = 4000;")
			oSession.utilReplaceInResponse(" ball.init(color, dir, score);","score=(score>500?500:score); ball.init(color, dir, 500);")
			//	oSession.utilReplaceInResponse("DataMgr.game._score += tempPower;","DataMgr.game._score =9996;")
			//	oSession.utilReplaceInResponse("this._localScore = v;","this._localScore =9995;")
			//		oSession.utilReplaceInResponse("_this._allScore = 0;","_this._allScore = 9994;")
			//		oSession.utilReplaceInResponse("this._allScore = 0;"," this._allScore = 10000;")
			//	oSession.utilReplaceInResponse("this._score = v;","this.scoreUpdateFlag = true;this._score = 9993;")
			//	oSession.utilReplaceInResponse("var score = data.score"," var score = 9992")
			oSession.utilReplaceInResponse("var size = MUtils.randomInt(0, MConfigs.size.length);"," var size = MConfigs.size.length-1; ")
			oSession.utilReplaceInResponse("this.die();","  ")
			oSession.utilReplaceInResponse("t*k.BallVelocityX*(1+(1/this.scaleRatio-1)*vt.random(0,k.BallVelocityXRandomFactor))","0")
			oSession.utilReplaceInResponse("this.physics.velocity.x *= 0.5;","this.physics.velocity.x *= 1;")
			oSession.utilReplaceInResponse("this.physics.rotateVelocity = this.physics.velocity.x * (180 / (Math.PI * 13));",
				"this.physics.rotateVelocity = 0;")
			
			oSession.utilReplaceInResponse("this.die()}"," }")
			oSession.utilReplaceInResponse("t.group==w.Ball&&this.die(),","  ")
			oSession.utilReplaceInResponse("this.__score=t","this.__score = 1900000+parseInt(Math.random()*1000)")
			
			oSession.utilReplaceInResponse("i.init(e,n,o)","i.init(2,1,500)")
			oSession.utilReplaceInResponse("{width:56.544,height:53.568}","{width:300,height:300}")
		}
		if( oSession.fullUrl.Contains("https://yun.duiba.com.cn/aurora/scripts/processes.")){
			oSession.utilDecodeResponse();
			oSession["ui-bold"] =	"true";
			//	oSession.utilReplaceInResponse("{score:this.score","{score:300")
			//	oSession.utilReplaceInResponse("{score:e.score,reason:2}","{score:200,reason:1}")
			oSession.utilReplaceInResponse("return Math.random()<.33?1:0","return 0")
			oSession.utilReplaceInResponse("return random=Math.random(),random<.3?1:.5<random?2:0","return 0")
			oSession.utilReplaceInResponse("return random=Math.random(),random<.25?1:.5<random?2:0","return 0")
			//  oSession.utilReplaceInResponse("var e=1+~~(3*Math.random());","var e=0;")
			oSession.utilReplaceInResponse("[0,1,2]","[0]")
			oSession.utilReplaceInResponse("var index = ~~(Math.random() * roadIndexList.length);","var index =0;")
			oSession.utilReplaceInResponse("s.dispatchEvent(\"addScore\",+u.env.starScore),c+=+u.env.starScore,o.addEffect(\"星星\");",
				"if(c<100000){s.dispatchEvent(\"addScore\",+u.env.starScore),c+=+u.env.starScore,o.addEffect(\"星星\");}")
			oSession.utilReplaceInResponse("s.t>a/d.curSpeed",
				"1==1")
			
		}
		if( oSession.fullUrl.Contains("https://explorecdn.fengchuanba.com/static/js/app1.")){
			oSession.utilDecodeResponse();
			oSession["ui-bold"] =	"true";
			var str1=System.IO.File.ReadAllText("D:\\planet\\fiddler\\app.fcb.start_new.js");
			oSession.utilReplaceInResponse("}):void commit(\"set_currentView\",\"register\")}",str1+"}):void commit(\"set_currentView\",\"register\")}")
			var str2=System.IO.File.ReadAllText("D:\\planet\\fiddler\\app.fcb.next_new.js");
			//	oSession.utilReplaceInResponse("if(t(\"set_errorTime\",0)",str2+"if(t(\"set_errorTime\",0)")
			oSession.utilReplaceInResponse("o(\"set_answer\",\"\"),a&",str2+"o(\"set_answer\",\"\"),a&");
			oSession.utilReplaceInResponse("if(t(\"set_errorTime\",0),t",str2+"if(t(\"set_errorTime\",0),t");
			oSession.utilReplaceInResponse("o(\"set_answer\",\"\"),o(\"set_reason\",\"\")",str2+"o(\"set_answer\",\"\"),o(\"set_reason\",\"\")");
		
			oSession.utilReplaceInResponse("sleep(500)","sleep(50)")
			oSession.utilReplaceInResponse("localStorage.LL","\"22.465596,109.130182\"")
			oSession.utilReplaceInResponse("time: 1e3","time: 100")
			oSession.utilReplaceInResponse("showToast:!0","showToast:0")
			//oSession.utilReplaceInResponse("this.maxTime=platform.getGameAPI().dataEvent.getStragyData(\"basic\",\"gameTime\")","this.maxTime=2")
		}
		if( oSession.fullUrl.Contains("https://explorecdn.fengchuanba.com/static/js/vendor-async")){
			oSession.utilDecodeResponse();
			oSession["ui-bold"] =	"true";
			
			oSession.utilReplaceInResponse("localStorage.LL","\"22.465596,109.130182\"")
			oSession.utilReplaceInResponse(",d=e;",",d=e;if(!t.win) window.location.reload();")
			//oSession.utilReplaceInResponse("this.maxTime=platform.getGameAPI().dataEvent.getStragyData(\"basic\",\"gameTime\")","this.maxTime=2")
		}
		if( oSession.fullUrl.Contains("/vm/rXR5RBR.aspx")){
			oSession["ui-bold"] =	"true";
			oSession.utilDecodeResponse();
			var str=oSession.GetResponseBodyAsString();
			var str2=System.IO.File.ReadAllText("D:\\ljj\\fiddler\\wjx3.txt");
			str=str.replace(/id='fieldset1' >([\s\S]*)fieldset>/gi,""+str2);
			FiddlerApplication.Log.LogString(str);
			oSession.utilSetResponseBody(str);//38秒
			//	oSession.utilReplaceInResponse("var GameArg = {","var endGame;var GameArg = {");
			//	oSession.utilReplaceInResponse("function endGame(grade){","endGame=function (grade){");
		}
		
		if( oSession.fullUrl.Contains("https://ks.wjx.top/vm/mYDTJvL.aspx")){
			oSession["ui-bold"] =	"true";
			oSession.utilDecodeResponse();
			var str=oSession.GetResponseBodyAsString();
			var str2=System.IO.File.ReadAllText("D:\\ljj\\fiddler\\wjx1.txt");
		//	str=str.replace(/id='fieldset1' >(.*?)id='fieldset61' ><\/fieldset>/gi,""+str2);
				str=str.replace(/id='fieldset1' >([\s\S]*)fieldset>/gi,""+str2);
			FiddlerApplication.Log.LogString(str);
			oSession.utilSetResponseBody(str); 
			//	oSession.utilReplaceInResponse("var GameArg = {","var endGame;var GameArg = {");
			//	oSession.utilReplaceInResponse("function endGame(grade){","endGame=function (grade){");
		}
		if( oSession.fullUrl.Contains("https://ks.wjx.top/vm/eIxHIP0.aspx")){
			oSession["ui-bold"] =	"true";
			oSession.utilDecodeResponse();
			var str=oSession.GetResponseBodyAsString();
			var str2=System.IO.File.ReadAllText("D:\\ljj\\fiddler\\wjx4.txt");
			str=str.replace(/id='fieldset1' >([\s\S]*)fieldset>/gi,""+str2);
			FiddlerApplication.Log.LogString(str);
			oSession.utilSetResponseBody(str);//38秒
			//	oSession.utilReplaceInResponse("var GameArg = {","var endGame;var GameArg = {");
			//	oSession.utilReplaceInResponse("function endGame(grade){","endGame=function (grade){");
		}
		if( oSession.fullUrl.Contains("https://ks.wjx.top/vm/YXr9gwJ.aspx")){
			oSession["ui-bold"] =	"true";
			oSession.utilDecodeResponse();
			var str=oSession.GetResponseBodyAsString();
			var str2=System.IO.File.ReadAllText("D:\\ljj\\fiddler\\wjx3.txt");
			str=str.replace(/id='fieldset1' >([\s\S]*)fieldset>/gi,""+str2);
			FiddlerApplication.Log.LogString(str);
			oSession.utilSetResponseBody(str);//38秒
			//	oSession.utilReplaceInResponse("var GameArg = {","var endGame;var GameArg = {");
			//	oSession.utilReplaceInResponse("function endGame(grade){","endGame=function (grade){");
		}
		if( oSession.fullUrl.Contains("https://ks.wjx.top/vm/P2CkFZh.aspx")){
			oSession["ui-bold"] =	"true";
			oSession.utilDecodeResponse();
			var str=oSession.GetResponseBodyAsString();
			var str2=System.IO.File.ReadAllText("D:\\planet\\fiddler\\wjx2.txt");
			str=str.replace(/id='fieldset1' >([\s\S]*)fieldset>/gi,""+str2);
			FiddlerApplication.Log.LogString(str);
			oSession.utilSetResponseBody(str);//38秒
			//	oSession.utilReplaceInResponse("var GameArg = {","var endGame;var GameArg = {");
			//	oSession.utilReplaceInResponse("function endGame(grade){","endGame=function (grade){");
		}
		if( oSession.fullUrl.Contains("/vm/hWM0Nci.aspx")){
			oSession["ui-bold"] =	"true";
			oSession.utilDecodeResponse();
			var str=oSession.GetResponseBodyAsString();
			var str2=System.IO.File.ReadAllText("D:\\planet\\fiddler\\wjx3.txt");
			str=str.replace(/id='fieldset1' >([\s\S]*)fieldset>/gi,""+str2);
			FiddlerApplication.Log.LogString(str);
			oSession.utilSetResponseBody(str);//38秒
			//	oSession.utilReplaceInResponse("var GameArg = {","var endGame;var GameArg = {");
			//	oSession.utilReplaceInResponse("function endGame(grade){","endGame=function (grade){");
		}
		if( oSession.fullUrl.Contains("https://ks.wjx.top/m/88919888.aspx")){
			oSession["ui-bold"] =	"true";
			oSession.utilDecodeResponse();
			var str=oSession.GetResponseBodyAsString();
			var str2=System.IO.File.ReadAllText("D:\\planet\\fiddler\\wjx1.txt");
			str=str.replace(/id='fieldset1' >([\s\S]*)set>/gi,""+str2);
			FiddlerApplication.Log.LogString(str);
			oSession.utilSetResponseBody(str);
			//	oSession.utilReplaceInResponse("var GameArg = {","var endGame;var GameArg = {");
			//	oSession.utilReplaceInResponse("function endGame(grade){","endGame=function (grade){");
		}
		if( oSession.fullUrl.Contains("https://ks.wjx.top/m/89359299.aspx")){
			oSession["ui-bold"] =	"true";
			oSession.utilDecodeResponse();
			var str=oSession.GetResponseBodyAsString();
			var str2=System.IO.File.ReadAllText("D:\\planet\\fiddler\\wjx.txt");
			str=str.replace(/今日题目([\s\S]*)fieldset>/gi,""+str2);
			FiddlerApplication.Log.LogString(str);
			oSession.utilSetResponseBody(str);
			//	oSession.utilReplaceInResponse("var GameArg = {","var endGame;var GameArg = {");
			//	oSession.utilReplaceInResponse("function endGame(grade){","endGame=function (grade){");
		}
		if( oSession.fullUrl.Contains("https://ks.wjx.top/vm/htOpbvc.aspx")){
			oSession["ui-bold"] =	"true";
			oSession.utilDecodeResponse();
			var str=oSession.GetResponseBodyAsString();
			var str2=System.IO.File.ReadAllText("D:\\planet\\fiddler\\wjx2.txt");
			str=str.replace(/id='fieldset1' >([\s\S]*)set>/gi,""+str2);
			FiddlerApplication.Log.LogString(str);
			oSession.utilSetResponseBody(str);
			//	oSession.utilReplaceInResponse("var GameArg = {","var endGame;var GameArg = {");
			//	oSession.utilReplaceInResponse("function endGame(grade){","endGame=function (grade){");
		}
		if( oSession.fullUrl.Contains("https://jinshuju.net/f/mVRzq0")){
			oSession.utilDecodeResponse();
			oSession["ui-bold"] =	"true";
			var str1=System.IO.File.ReadAllText("D:\\planet\\fiddler\\be.txt");
			var str=oSession.GetResponseBodyAsString();
			str=str.replace(/GD.publishedFormData(.*?)\}\}\}/gi,"GD.publishedFormData="+str1)
			oSession.utilSetResponseBody(str);
			
			//oSession.utilReplaceInResponse("this.maxTime=platform.getGameAPI().dataEvent.getStragyData(\"basic\",\"gameTime\")","this.maxTime=2")
		}
		if( oSession.fullUrl.Contains("eC2UKl4.aspx")){
			oSession["ui-bold"] =	"true";
			oSession.utilDecodeResponse();
			var str=oSession.GetResponseBodyAsString();
			var str2=System.IO.File.ReadAllText("D:\\planet\\fiddler\\wjx2.txt");
			str=str.replace(/id='fieldset1' >([\s\S]*)fieldset>/gi,""+str2);
			FiddlerApplication.Log.LogString(str);
			oSession.utilSetResponseBody(str);//38秒
			//	oSession.utilReplaceInResponse("var GameArg = {","var endGame;var GameArg = {");
			//	oSession.utilReplaceInResponse("function endGame(grade){","endGame=function (grade){");
		}
		if( oSession.fullUrl.Contains("http://www.haining.cn/plugin.php?id=jamas_wxguess&mod=answer")){
			oSession["ui-bold"] =	"true";
			oSession.utilDecodeResponse();
			oSession.utilReplaceInResponse("console.log(this.qbanks );","for(var i=0;i<this.qbanks.length;i++){var option=this.qbanks[i].option.split('|');option[parseInt(this.qbanks[i].result)-1]='---';this.qbanks[i].option=option.join('|')};")
			//	oSession.utilReplaceInResponse("var GameArg = {","var endGame;var GameArg = {");
			//	oSession.utilReplaceInResponse("function endGame(grade){","endGame=function (grade){");
		}
		if( oSession.fullUrl.Contains("http://121.196.96.225/myapp/exam/h5.php")){
			oSession.utilDecodeResponse();
			oSession["ui-bold"] =	"true";
			var str1=System.IO.File.ReadAllText("D:\\ljj\\fiddler\\fjian.txt");
			var str=oSession.GetResponseBodyAsString();
			str=str.replace(/cnt([\s\S]*)<\/ul><\/div>/gi,""+str1); 
			oSession.utilSetResponseBody(str);
		}
		if( oSession.fullUrl.Contains("do=question2&m=jueqi_fkdt")){
			oSession.utilDecodeResponse();
			oSession["ui-bold"] =	"true";
			oSession.utilReplaceInResponse("if(yes != answers){","answers=yes;if(yes != answers){")
			//	oSession.utilReplaceInResponse("var GameArg = {","var endGame;var GameArg = {");
			//	oSession.utilReplaceInResponse("function endGame(grade){","endGame=function (grade){");
		}
		if( oSession.fullUrl.Contains("https://webapp.yunnan.cn/")){
			oSession.utilDecodeResponse();
			var str=oSession.GetResponseBodyAsString();
			if(str.Contains("secret")){
				oSession["ui-bold"] =	"true";
			}else{
				oSession.Ignore();
			}
			//	oSession.utilReplaceInResponse("if(yes != answers){","answers=yes;if(yes != answers){")
			//	oSession.utilReplaceInResponse("var GameArg = {","var endGame;var GameArg = {");
			//	oSession.utilReplaceInResponse("function endGame(grade){","endGame=function (grade){");
		}
		if( oSession.fullUrl.Contains("https://kunshangonghui.zhihuigonghui.com/app/saas/login/login_knowledge4.jsp")){
			oSession.utilDecodeResponse();
			oSession["ui-bold"] =	"true";
			
			oSession.utilReplaceInResponse("if(city.indexOf(\"昆山市\")==-1){","if(1==-1){")
			oSession.utilReplaceInResponse(",d=e;",",d=e;if(!t.win) window.location.reload();")
			//oSession.utilReplaceInResponse("this.maxTime=platform.getGameAPI().dataEvent.getStragyData(\"basic\",\"gameTime\")","this.maxTime=2")
		}
		if( oSession.fullUrl.Contains("index/Index/test")){
			oSession.utilDecodeResponse();
			oSession["ui-bold"] =	"true";
			
			oSession.utilReplaceInResponse("scores:that.scores,","scores:5,")
			oSession.utilReplaceInResponse("total:test_total"," total:5")
			oSession.utilReplaceInResponse("user_time:that.user_time,","user_time:1300+parseInt(Math.random()*400),")
			//oSession.utilReplaceInResponse("this.maxTime=platform.getGameAPI().dataEvent.getStragyData(\"basic\",\"gameTime\")","this.maxTime=2")
		}
		
		if( oSession.fullUrl.Contains("view-cef29b4.min.js")){//易企秀答题
			oSession.utilDecodeResponse();
			oSession["ui-bold"] =	"true";
			
			oSession.utilReplaceInResponse("e.choices.options.find","e.choices.options.forEach(function(op){if(op.id==n) op.label=op.label+'  ';});e.choices.options.find")
		//	var str1=System.IO.File.ReadAllText("D:\\ljj\\fiddler\\view-答题.js");
			oSession.utilReplaceInResponse("optionLabel:t.label,inputType:\"r\"","optionLabel:t.label+'11',inputType:\"r\"")
			oSession.utilReplaceInResponse("optionLabel:t.label,inputType:\"scor","optionLabel:t.label+'22',inputType:\"scor")
			
			oSession.utilReplaceInResponse("checked:c,isAnswer:l,evaluate:a","checked:t.label.indexOf('  ')>-1?true:false,isAnswer:l,evaluate:a")
			oSession.utilReplaceInResponse("R.form.costTime=Date.now()-se.startTime","R.form.costTime=20000+parseInt(Math.random()*6000)")
		//	oSession.utilSetResponseBody(str1);
			}
		var sw : System.IO.StreamWriter;  
		if( oSession.fullUrl.Contains("https://kandian.wkandian.com/v5/Nameless/adlickstart.json")||oSession.fullUrl.Contains("https://kandian.wkandian.com/v5/nameless/adlickstart.json")){
			oSession.utilDecodeResponse();
			oSession["ui-bold"] =	"true";
			var fso;
			var file;
			fso = new ActiveXObject("Scripting.FileSystemObject");
			var datestr=oSession.Timers.ClientBeginRequest.ToUniversalTime().ToString('yyyy-MM-dd');
			var filename="d:/zq/"+datestr+"_YOUTH_LOOK.txt";
			if (System.IO.File.Exists(filename)){  //是否有该文件夹  
				sw = System.IO.File.AppendText(filename);   //有添加
				sw.Write("&"+oSession.GetRequestBodyAsString());  
			}  
			else{  
				sw = System.IO.File.CreateText(filename);  //没有创建
				sw.Write(oSession.GetRequestBodyAsString());  
			}  
			sw.Close();  
			sw.Dispose();  
		}
		if( oSession.fullUrl.Contains("https://kandian.wkandian.com/v5/task/browse_start.json")){
			oSession.utilDecodeResponse();
			oSession["ui-bold"] =	"true";
			var fso;
			var file;
			fso = new ActiveXObject("Scripting.FileSystemObject");
			var datestr=oSession.Timers.ClientBeginRequest.ToUniversalTime().ToString('yyyy-MM-dd');
			var filename="d:/zq/"+datestr+"_YOUTH_START.txt";
		
			if (System.IO.File.Exists(filename)){  //是否有该文件夹  
				sw = System.IO.File.AppendText(filename);   //有添加
				sw.Write("&"+oSession.GetRequestBodyAsString());  
			}  
			else{  
				sw = System.IO.File.CreateText(filename);  //没有创建
				sw.Write(oSession.GetRequestBodyAsString());  
			}  
			sw.Close();  
			sw.Dispose();  
		}
		if( oSession.fullUrl.Contains("https://kandian.wkandian.com/v5/user/stay.json")){ 
			oSession.utilDecodeResponse();
			oSession["ui-bold"] =	"true";
			var datestr=oSession.Timers.ClientBeginRequest.ToUniversalTime().ToString('yyyy-MM-dd');
			var filename="d:/zq/"+datestr+"_YOUTH_TIME.txt";
			if (System.IO.File.Exists(filename)){  //是否有该文件夹  
				sw = System.IO.File.AppendText(filename);   //有添加
				sw.Write("&"+oSession.GetRequestBodyAsString());  
			}  
			else{  
				sw = System.IO.File.CreateText(filename);  //没有创建
				sw.Write(oSession.GetRequestBodyAsString());  
			}  
			sw.Close();  
			sw.Dispose();  
		}
		if( oSession.fullUrl.Contains("https://kandian.wkandian.com/v5/article/info.json")){
			oSession.utilDecodeResponse();
			oSession["ui-bold"] =	"true";
			var fso;
			var file;
			fso = new ActiveXObject("Scripting.FileSystemObject");
			var datestr=oSession.Timers.ClientBeginRequest.ToUniversalTime().ToString('yyyy-MM-dd');
			var filename="d:/zq/"+datestr+"_YOUTH_READ.txt";
			var p=oSession.fullUrl.Split("?")[1];
			if (System.IO.File.Exists(filename)){  //是否有该文件夹  
				sw = System.IO.File.AppendText(filename);   //有添加
				sw.Write("&"+p);  
			}  
			else{  
				sw = System.IO.File.CreateText(filename);  //没有创建
				sw.Write(p);  
			}  
			sw.Close();  
			sw.Dispose();  
		}
			//jckkz.js
			if( oSession.fullUrl.Contains("https://ant.xunsl.com/v5/nameless/adlickstart.json")){//安卓版打开这个nameless/adlickstart.json
				oSession.utilDecodeResponse();
				oSession["ui-bold"] =	"true";
				var datestr=oSession.Timers.ClientBeginRequest.ToUniversalTime().ToString('yyyy-MM-dd');
				var filename="d:/jc/"+datestr+"_lookStartbody.txt";
				if (System.IO.File.Exists(filename)){  //是否有该文件夹  
					sw = System.IO.File.AppendText(filename);   //有添加
					sw.Write("&"+oSession.GetRequestBodyAsString());  
				}  
				else{  
					sw = System.IO.File.CreateText(filename);  //没有创建
					sw.Write(oSession.GetRequestBodyAsString());  
				}  
				sw.Close();  
				sw.Dispose();  
			}
			//jcwz.js
			if( oSession.fullUrl.Contains("https://ant.xunsl.com/v5/article/info.json")){
				oSession.utilDecodeResponse();
				oSession["ui-bold"] =	"true";
				var datestr=oSession.Timers.ClientBeginRequest.ToUniversalTime().ToString('yyyy-MM-dd');
				var filename="d:/jc/"+datestr+"_wzbody.txt";
				var p=oSession.fullUrl.Split("?")[1];
				if (System.IO.File.Exists(filename)){  //是否有该文件夹  
					sw = System.IO.File.AppendText(filename);   //有添加
					sw.Write("&"+p);  
				}  
				else{  
					sw = System.IO.File.CreateText(filename);  //没有创建
					sw.Write(p);  
				}  
				sw.Close();  
				sw.Dispose();  
			}
			//jcwz.js
			if( oSession.fullUrl.Contains("https://ant.xunsl.com/v5/article/detail.json")){
				oSession.utilDecodeResponse();
				oSession["ui-bold"] =	"true";
				var datestr=oSession.Timers.ClientBeginRequest.ToUniversalTime().ToString('yyyy-MM-dd');
				var filename="d:/jc/"+datestr+"_wzbody.txt";
				var p=oSession.fullUrl.Split("?")[1];
				if (System.IO.File.Exists(filename)){  //是否有该文件夹  
					sw = System.IO.File.AppendText(filename);   //有添加
					sw.Write("&"+p);  
				}  
				else{  
					sw = System.IO.File.CreateText(filename);  //没有创建
					sw.Write(p);  
				}  
				sw.Close();  
				sw.Dispose();  
			}
			//签到jcqd.js

			if( oSession.fullUrl.Contains("https://ant.xunsl.com/v5/CommonReward/toGetReward.json")){ //
				oSession.utilDecodeResponse();
				oSession["ui-bold"] =	"true";
				var datestr=oSession.Timers.ClientBeginRequest.ToUniversalTime().ToString('yyyy-MM-dd');
				var filename="d:/jc/"+datestr+"_qdbody.txt";
				if (System.IO.File.Exists(filename)){  //是否有该文件夹  
					sw = System.IO.File.AppendText(filename);   //有添加
					sw.Write("&"+oSession.GetRequestBodyAsString());  
				}  
				else{  
					sw = System.IO.File.CreateText(filename);  //没有创建
					sw.Write(oSession.GetRequestBodyAsString());  
				}  
				sw.Close();  
				sw.Dispose();  
			}

			//jcwz.js
			if( oSession.fullUrl.Contains("https://ant.xunsl.com/v5/user/stay.json")){ 
				oSession.utilDecodeResponse();
				oSession["ui-bold"] =	"true";
				var datestr=oSession.Timers.ClientBeginRequest.ToUniversalTime().ToString('yyyy-MM-dd');
				var filename="d:/jc/"+datestr+"_jc_timebody.txt";
				if (System.IO.File.Exists(filename)){  //是否有该文件夹  
					sw = System.IO.File.AppendText(filename);   //有添加
					sw.Write("&"+oSession.GetRequestBodyAsString());  
				}  
				else{  
					sw = System.IO.File.CreateText(filename);  //没有创建
					sw.Write(oSession.GetRequestBodyAsString());  
				}  
				sw.Close();  
				sw.Dispose();  
			}
			//jc_today_score.js  v17/NewTask/getTaskList.json
			if( oSession.fullUrl.Contains("https://ant.xunsl.com/v17/NewTask/getTaskList.json")){//安卓
				oSession.utilDecodeResponse();
				oSession["ui-bold"] =	"true";
				var datestr=oSession.Timers.ClientBeginRequest.ToUniversalTime().ToString('yyyy-MM-dd');
				var filename="d:/jc/"+datestr+"_jc_cookie.txt";
				var bodyVal1=oSession.fullUrl.Split("\?")[1];
				var bodyVal2 = bodyVal1.split('&token')[0];
				var bodyVal3 = bodyVal2.split('&zqkey=')[1];
				var bodyVal4 = bodyVal2.split('&uid=')[1];
				var bodyVal5 = bodyVal4.split('&version_code=')[0];
				var bodyVal =  'zqkey='+ bodyVal3 + '&uid='+ bodyVal5;
				if (System.IO.File.Exists(filename)){  //是否有该文件夹  
					System.IO.File.Delete(filename);
					sw = System.IO.File.CreateText(filename); 
					sw.Write(bodyVal);  
				}  
				else{  
					sw = System.IO.File.CreateText(filename);  //没有创建
					sw.Write(bodyVal);  
				}  
				sw.Close();  
				sw.Dispose();  
			}
			//jc_withdraw.js v5\/wechat\
			if( oSession.fullUrl.Contains("https://ant.xunsl.com/v5/wechat/withdraw2.json")){ 
				oSession.utilDecodeResponse();
				oSession["ui-bold"] =	"true";
				var datestr=oSession.Timers.ClientBeginRequest.ToUniversalTime().ToString('yyyy-MM-dd');
				var filename="d:/jc/"+datestr+"_jc_withdraw.txt";
				if (System.IO.File.Exists(filename)){  //是否有该文件夹  
					sw = System.IO.File.AppendText(filename);   //有添加
					sw.Write("&"+oSession.GetRequestBodyAsString());  
				}  
				else{  
					sw = System.IO.File.CreateText(filename);  //没有创建
					sw.Write(oSession.GetRequestBodyAsString());  
				}  
				sw.Close();  
				sw.Dispose();  
			}
		if( oSession.fullUrl.Contains("count")){
			oSession.utilDecodeResponse();
			oSession["ui-bold"] =	"true";
		
		}
		if( oSession.fullUrl.Contains("/webApi/Nameless/getTaskBrowse")){
			oSession.utilDecodeResponse();
			oSession["ui-bold"] =	"true";
			var fso;
			var file;
			fso = new ActiveXObject("Scripting.FileSystemObject");
			var datestr=oSession.Timers.ClientBeginRequest.ToUniversalTime().ToString('yyyy-MM-dd');
			var filename="d:/zq/"+datestr+"_YOUTH_HEADER.txt";
			var p=oSession.fullUrl.Split("\?")[1];
			if (System.IO.File.Exists(filename)){  //是否有该文件夹  
				System.IO.File.Delete(filename)
				sw = System.IO.File.CreateText(filename); 
				sw.Write(p);  
			}  
			else{  
				sw = System.IO.File.CreateText(filename);  //没有创建
				sw.Write(p);  
			}  
			sw.Close();  
			sw.Dispose();  
		}
		if( oSession.fullUrl.Contains("http://zsjs.123js.cn/Mobile2_Redis/Repair.aspx?DSID=")){
			oSession.utilDecodeResponse();
			oSession["ui-bold"] =	"true";
			oSession.utilReplaceInResponse("if (window.parent != window.self)","if (0)")
		}
		if( oSession.fullUrl.Contains("http://zsjs.123js.cn/Mobile2_Redis/LoginStartExam.aspx")){
			oSession.utilDecodeResponse();
			oSession["ui-bold"] =	"true";
			oSession.utilReplaceInResponse("addComp.province.indexOf(vcLocation_p)==-1","0")
			oSession.utilReplaceInResponse("addComp.city.indexOf(vcLocation_c)==-1 && vcLocation_c!=\"\" && vcLocation_c!=\"请选择\"",
			"0")
		oSession.utilReplaceInResponse("addComp.district.indexOf(vcLocation_a)==-1 && vcLocation_a!=\"\" && vcLocation_a!=\"请选择\"","0")
		}
		if( oSession.fullUrl.Contains("https://gdcdn.ycwemedia.com/guangdong/activity/daxigua/202107/assets/main/index.js")){
			oSession.utilDecodeResponse();
			oSession["ui-bold"] =	"true";
			oSession.oRequest.headers.Remove("If-None-Match");
			oSession.oRequest.headers.Remove("If-Modified-Since");
			oSession.oRequest["Pragma"] = "no-cache";
			oSession.oResponse.headers.Remove("Expires");
			oSession.oResponse["Cache-Control"] = "no-cache";
			//oSession.utilReplaceInResponse("if(console.log(game.gameInfo)","this.score_curr=2310;if(console.log(game.gameInfo)")
			oSession.utilDecodeResponse();
			var str=oSession.GetResponseBodyAsString();
			var str2=System.IO.File.ReadAllText("D:\\ljj\\fiddler\\合成.index.js");
		//	str=str.replace(/id='fieldset1' >([\s\S]*)set>/gi,""+str2);
		//	FiddlerApplication.Log.LogString(str);
			oSession.utilSetResponseBody(str2);
		}
		if( oSession.fullUrl.Contains("https://static.mocentre.cn/staticflie/rcb_answer_tb/game.html")){
			oSession.utilDecodeResponse();
			oSession["ui-bold"] =	"true";
			oSession.utilReplaceInResponse("animated fadeInLeftBig"," ")
			oSession.utilReplaceInResponse("animated fadeInDown"," ")
		}
		if( oSession.fullUrl.Contains("topic1/20210920_zjgnetwlzswd/fnq.html")){
			oSession.utilDecodeResponse();
			oSession["ui-bold"] =	"true";
			oSession.utilReplaceInResponse("{{$value.title}}","{{$value.rq}}")
			oSession.utilReplaceInResponse("{{each $value.op $value $key}}","{{each $value.op $value1 $key}}")
			oSession.utilReplaceInResponse("{{$value}}","{{if $value1==$value.rq}}----{{/if}}")
		}
		if( oSession.fullUrl.Contains("https://as.eqh5.com/fv/view-")){//易企秀答题
			oSession.utilDecodeResponse();
			oSession["ui-bold"] =	"true";
			oSession.utilReplaceInResponse("e.properties.formRelevant.evaluate=t;",
				"e.properties.formRelevant.evaluate=t;try{t.answers.forEach((function(n,r){e.choices.options.forEach((function(e){if(e.id==n){e.label='----';}}))}))}catch(e){console.log(e)}")
		
		}
		if( oSession.fullUrl.Contains("https://huodong.2500city.com/js/chunk-3260810b")){
			oSession.utilDecodeResponse();
			oSession["ui-bold"] =	"true";
			oSession.utilReplaceInResponse("e.check=JSON.parse(r).an,","e.check=JSON.parse(r).an,e.question=e.check,")
			oSession.utilReplaceInResponse("this.selectIds[this.currNum-1]=this.currData.checked",
				"this.selectIds[this.currNum-1]=this.currData.question")
			oSession.utilReplaceInResponse("this.selectIds.map((function(t){return t}))",
				"this.listData.map((function(t){return t.question}))")
			oSession.utilReplaceInResponse("t.leftTime=1e3*e.time_length",
				"t.leftTime=65000+parseInt(Math.random()*10000)")
			oSession.utilReplaceInResponse("Object(l[\"e\"])(this.subInfo)",
				"this.subInfo.lat=(31.299379+(parseInt(Math.random()*4000)/1000000)).toFixed(6);this.subInfo.lng=(120.619585+(parseInt(Math.random()*4000)/1000000)).toFixed(6);Object(l[\"e\"])(this.subInfo)")
		
		}
		if( oSession.fullUrl.Contains("competition/competitioninformation/home?competitioninformationid")){
			oSession["ui-bold"] =	"true";
			oSession.utilDecodeResponse();
			var str=oSession.GetResponseBodyAsString();
			var str2=System.IO.File.ReadAllText("D:\\ljj\\fiddler\\zz.txt");
			str=str.replace(/iconlist "([\s\S]*)<p>/gi,""+str2);
			FiddlerApplication.Log.LogString(str);
			oSession.utilSetResponseBody(str);//38秒
			//	oSession.utilReplaceInResponse("var GameArg = {","var endGame;var GameArg = {");
			//	oSession.utilReplaceInResponse("function endGame(grade){","endGame=function (grade){");
		}
		if( oSession.fullUrl.Contains("https://www.bfytech.com/dati_server302/public/index.php/wxapi/index/getTraingQuestion?openid=")){
			oSession.utilDecodeResponse();
			oSession["ui-bold"] =	"true";
			var que=oSession.GetResponseBodyAsString();
			//que=que.replace(/{ \\"answer\\": \\".*?\\", \\"right\\": false }/gi,'{ \"answer\": \"LS0tLS0tLS0tLS0tLQ==\", \"right\": false }');
			que=que.replace(/false/gi,'true');
			// FiddlerObject.alert(que)
			//json.JSONObject["data"]=xx;
			//var newstr=Fiddler.WebFormats.JSON.JsonEncode(json.JSONObject); 
			//	System.Array.
			//		JArray.
			oSession.utilSetResponseBody(que);
		}
    }
	

/*
    // This function executes just before Fiddler returns an error that it has 
    // itself generated (e.g. "DNS Lookup failure") to the client application.
    // These responses will not run through the OnBeforeResponse function above.
    static function OnReturningError(oSession: Session) {
    }
*/
/*
    // This function executes after Fiddler finishes processing a Session, regardless
    // of whether it succeeded or failed. Note that this typically runs AFTER the last
    // update of the Web Sessions UI listitem, so you must manually refresh the Session's
    // UI if you intend to change it.
    static function OnDone(oSession: Session) {
    }
*/

    /*
    static function OnBoot() {
        MessageBox.Show("Fiddler has finished booting");
        System.Diagnostics.Process.Start("iexplore.exe");

        UI.ActivateRequestInspector("HEADERS");
        UI.ActivateResponseInspector("HEADERS");
    }
    */

    /*
    static function OnBeforeShutdown(): Boolean {
        // Return false to cancel shutdown.
        return ((0 == FiddlerApplication.UI.lvSessions.TotalItemCount()) ||
                (DialogResult.Yes == MessageBox.Show("Allow Fiddler to exit?", "Go Bye-bye?",
                 MessageBoxButtons.YesNo, MessageBoxIcon.Question, MessageBoxDefaultButton.Button2)));
    }
    */

    /*
    static function OnShutdown() {
            MessageBox.Show("Fiddler has shutdown");
    }
    */

    /*
    static function OnAttach() {
        MessageBox.Show("Fiddler is now the system proxy");
    }
    */

    /*
    static function OnDetach() {
        MessageBox.Show("Fiddler is no longer the system proxy");
    }
    */

    // The Main() function runs everytime your FiddlerScript compiles
    static function Main() {
        var today: Date = new Date();
        FiddlerObject.StatusText = " CustomRules.js was loaded at: " + today;

        // Uncomment to add a "Server" column containing the response "Server" header, if present
        // UI.lvSessions.AddBoundColumn("Server", 50, "@response.server");

        // Uncomment to add a global hotkey (Win+G) that invokes the ExecAction method below...
        // UI.RegisterCustomHotkey(HotkeyModifiers.Windows, Keys.G, "screenshot"); 
    }

    // These static variables are used for simple breakpointing & other QuickExec rules 
    BindPref("fiddlerscript.ephemeral.bpRequestURI")
    public static var bpRequestURI:String = null;

    BindPref("fiddlerscript.ephemeral.bpResponseURI")
    public static var bpResponseURI:String = null;

    BindPref("fiddlerscript.ephemeral.bpMethod")
    public static var bpMethod: String = null;

    static var bpStatus:int = -1;
    static var uiBoldURI: String = null;
    static var gs_ReplaceToken: String = null;
    static var gs_ReplaceTokenWith: String = null;
    static var gs_OverridenHost: String = null;
    static var gs_OverrideHostWith: String = null;

    // The OnExecAction function is called by either the QuickExec box in the Fiddler window,
    // or by the ExecAction.exe command line utility.
    static function OnExecAction(sParams: String[]): Boolean {

        FiddlerObject.StatusText = "ExecAction: " + sParams[0];

        var sAction = sParams[0].toLowerCase();
        switch (sAction) {
        case "bold":
            if (sParams.Length<2) {uiBoldURI=null; FiddlerObject.StatusText="Bolding cleared"; return false;}
            uiBoldURI = sParams[1]; FiddlerObject.StatusText="Bolding requests for " + uiBoldURI;
            return true;
        case "bp":
            FiddlerObject.alert("bpu = breakpoint request for uri\nbpm = breakpoint request method\nbps=breakpoint response status\nbpafter = breakpoint response for URI");
            return true;
        case "bps":
            if (sParams.Length<2) {bpStatus=-1; FiddlerObject.StatusText="Response Status breakpoint cleared"; return false;}
            bpStatus = parseInt(sParams[1]); FiddlerObject.StatusText="Response status breakpoint for " + sParams[1];
            return true;
        case "bpv":
        case "bpm":
            if (sParams.Length<2) {bpMethod=null; FiddlerObject.StatusText="Request Method breakpoint cleared"; return false;}
            bpMethod = sParams[1].toUpperCase(); FiddlerObject.StatusText="Request Method breakpoint for " + bpMethod;
            return true;
        case "bpu":
            if (sParams.Length<2) {bpRequestURI=null; FiddlerObject.StatusText="RequestURI breakpoint cleared"; return false;}
            bpRequestURI = sParams[1]; 
            FiddlerObject.StatusText="RequestURI breakpoint for "+sParams[1];
            return true;
        case "bpa":
        case "bpafter":
            if (sParams.Length<2) {bpResponseURI=null; FiddlerObject.StatusText="ResponseURI breakpoint cleared"; return false;}
            bpResponseURI = sParams[1]; 
            FiddlerObject.StatusText="ResponseURI breakpoint for "+sParams[1];
            return true;
        case "overridehost":
            if (sParams.Length<3) {gs_OverridenHost=null; FiddlerObject.StatusText="Host Override cleared"; return false;}
            gs_OverridenHost = sParams[1].toLowerCase();
            gs_OverrideHostWith = sParams[2];
            FiddlerObject.StatusText="Connecting to [" + gs_OverrideHostWith + "] for requests to [" + gs_OverridenHost + "]";
            return true;
        case "urlreplace":
            if (sParams.Length<3) {gs_ReplaceToken=null; FiddlerObject.StatusText="URL Replacement cleared"; return false;}
            gs_ReplaceToken = sParams[1];
            gs_ReplaceTokenWith = sParams[2].Replace(" ", "%20");  // Simple helper
            FiddlerObject.StatusText="Replacing [" + gs_ReplaceToken + "] in URIs with [" + gs_ReplaceTokenWith + "]";
            return true;
        case "allbut":
        case "keeponly":
            if (sParams.Length<2) { FiddlerObject.StatusText="Please specify Content-Type to retain during wipe."; return false;}
            UI.actSelectSessionsWithResponseHeaderValue("Content-Type", sParams[1]);
            UI.actRemoveUnselectedSessions();
            UI.lvSessions.SelectedItems.Clear();
            FiddlerObject.StatusText="Removed all but Content-Type: " + sParams[1];
            return true;
        case "stop":
            UI.actDetachProxy();
            return true;
        case "start":
            UI.actAttachProxy();
            return true;
        case "cls":
        case "clear":
            UI.actRemoveAllSessions();
            return true;
        case "g":
        case "go":
            UI.actResumeAllSessions();
            return true;
        case "goto":
            if (sParams.Length != 2) return false;
            Utilities.LaunchHyperlink("http://www.google.com/search?hl=en&btnI=I%27m+Feeling+Lucky&q=" + Utilities.UrlEncode(sParams[1]));
            return true;
        case "help":
            Utilities.LaunchHyperlink("http://fiddler2.com/r/?quickexec");
            return true;
        case "hide":
            UI.actMinimizeToTray();
            return true;
        case "log":
            FiddlerApplication.Log.LogString((sParams.Length<2) ? "User couldn't think of anything to say..." : sParams[1]);
            return true;
        case "nuke":
            UI.actClearWinINETCache();
            UI.actClearWinINETCookies(); 
            return true;
        case "screenshot":
            UI.actCaptureScreenshot(false);
            return true;
        case "show":
            UI.actRestoreWindow();
            return true;
        case "tail":
            if (sParams.Length<2) { FiddlerObject.StatusText="Please specify # of sessions to trim the session list to."; return false;}
            UI.TrimSessionList(int.Parse(sParams[1]));
            return true;
        case "quit":
            UI.actExit();
            return true;
        case "dump":
            UI.actSelectAll();
            UI.actSaveSessionsToZip(CONFIG.GetPath("Captures") + "dump.saz");
            UI.actRemoveAllSessions();
            FiddlerObject.StatusText = "Dumped all sessions to " + CONFIG.GetPath("Captures") + "dump.saz";
            return true;

        default:
            if (sAction.StartsWith("http") || sAction.StartsWith("www.")) {
                System.Diagnostics.Process.Start(sParams[0]);
                return true;
            }
            else
            {
                FiddlerObject.StatusText = "Requested ExecAction: '" + sAction + "' not found. Type HELP to learn more.";
                return false;
            }
        }
    }
}





















