var homeurl = ["www.766.com", "www.ptbus.com", "www.tgbus.com", "www.178.com"];
var h_state = true;
var cururl = document.URL.replace("http://", "").replace("/", "").replace("index.shtml", "").replace("index.html", "").replace("index.htm", "");
for (var hi = 0; hi < homeurl.length; hi++) {
    if (cururl == homeurl[hi]) {
        h_state = false;
        break;
    }
}
if (h_state) {
    var allfooter = document.createElement("script");
    allfooter.src = "http://g1.tagtic.cn/v1/xingyou/c/700.js";
    document.body.appendChild(allfooter);
}
var arr_video = ["qq.com", "leshi.com", "bilibili.com", "tudou.com", "youku.com", "plures.net", "dwstatic.com", "acg.tv", "aipai.com", "hdslb.com", "letv.com"];
var key_value = [["iframe", "src"], ["embed", "src"], ["param", "value"], ["object", "data"], ["script", "src"]];
var a_videos = ["http://iphone.tgbus.com/tutorial/shipinjiaocheng/", "http://android.tgbus.com/news/video/"];
var fi_c = false;
function fi_v() {
    for (var kv_i = 0; kv_i < key_value.length; kv_i++) {
        $(key_value[kv_i][0]).each(function(i, n) {
            var flash_src = $(this).attr(key_value[kv_i][1]);
            if (flash_src != null && flash_src != undefined) {
                for (var v_i = 0; v_i < arr_video.length; v_i++) {
                    if (flash_src.indexOf(arr_video[v_i]) != -1) {
                        if (key_value[kv_i][0] == "script") {
                            fi_c = true;
                        }
                        $(this).remove();
                        continue;
                    }
                }
            }

        })
    }

}
fi_v();
if (fi_c == true) {
    setTimeout(function() { fi_v(); }, 2000);
}
for (var va_i = 0; va_i < a_videos.length; va_i++) {
    $('a[href="' + a_videos[va_i] + '"]').remove();
}
$(".bt_w310:contains('\u70ed\u95e8\u89c6\u9891')").parent().remove();
$(".bt_w310:contains('\u7f8e\u5973\u76f4\u64ad')").parent().remove();
$("h2:contains('\u7f8e\u5973\u76f4\u64ad')").parent().parent().remove();

if (document.getElementById("bdshare") || document.getElementById("body")) {
    if (document.URL.indexOf(".shtml") != -1 || document.URL.indexOf(".html") != -1 || document.URL.indexOf(".htm") != -1) {
        var newdomain = ["dnf.tgbus.com", "wow.tgbus.com", "xyq.tgbus.com", "jx.tgbus.com", "mhzx.tgbus.com", "d3.tgbus.com", "x5.tgbus.com", "hs.tgbus.com", "x51.tgbus.com", "qn.tgbus.com", "tl3.tgbus.com", "zx.tgbus.com", "ps3.tgbus.com", "xbox360.tgbus.com", "nds.tgbus.com", "psp.tgbus.com", "wii.tgbus.com", "3ds.tgbus.com", "psv.tgbus.com", "wiiu.tgbus.com", "ps4.tgbus.com", "xboxone.tgbus.com", "switch.tgbus.com", "iphone.tgbus.com", "android.tgbus.com/android/", "android.tgbus.com/news/", "android.tgbus.com/lab/", "android.tgbus.com/rom/", "android.tgbus.com/shouji/", "android.tgbus.com/faq/", "android.tgbus.com/zhongce/", "ol.tgbus.com/news/"];
        for (var d_i = 0; d_i < newdomain.length; d_i++) {
            if ("undefined" != typeof IDENTIFY && "undefined" != typeof HOME) {
                IDENTIFY = parseInt(IDENTIFY);
                if (HOME.toLowerCase().indexOf(newdomain[d_i]) != -1 && !isNaN(IDENTIFY) && IDENTIFY > 0) {
                    document.write("<img style=\"display:none;\" src=\"http://app.tgbus.com/ad/article.ashx?aid=" + IDENTIFY + "&arcurl=" + escape(HOME) + "\" />");
                }
            }
        }
    }
}
var href = location.href ;
if(href.indexOf("xsqs.tgbus.com")>-1){
    //跳转
  location.href = "https://game.stargame.com/";
}else if (window.location.href.indexOf("http://gcld.tgbus.com") > -1) {
  location.href = "https://game.stargame.com/";
}else if (window.location.href.indexOf("http://zzjb.tgbus.com") > -1) {
  location.href = "https://game.stargame.com/";
}else if (window.location.href.indexOf("http://hysj.tgbus.com") > -1) {
  location.href = "https://game.stargame.com/";
}else if (window.location.href.indexOf("http://qyxc.tgbus.com") > -1) {
  location.href = "https://game.stargame.com/";
}else if (window.location.href.indexOf("http://hhzw.tgbus.com") > -1) {
  location.href = "https://game.stargame.com/";
}else if (window.location.href.indexOf("http://img.tgbus.com") > -1) {
  location.href = "https://game.stargame.com/";
}else if (window.location.href.indexOf("http://sg.tgbus.com") > -1) {
  location.href = "https://game.stargame.com/";
}else if (window.location.href.indexOf("http://ns.tgbus.com") > -1) {
  location.href = "https://game.stargame.com/";
}else if (window.location.href.indexOf("http://zcsn.tgbus.com") > -1) {
  location.href = "https://game.stargame.com/";
}else if (window.location.href.indexOf("http://xmzyw.tgbus.com") > -1) {
  location.href = "https://game.stargame.com/";
}