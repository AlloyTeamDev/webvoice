/**
 * webvoice
 * @description 网页语音化工具--alloyTeam
 * @author Bin Wang(Dorsywang@alloyTeam)
 */

$AM_d("net", function(M){
    this.loadFile = function(word, callback){
        word = M.pinyin.toPY(word);

        console.log("\n---------------------");
        console.log("load word file: " + word);

        var url = M.config.ROOT_PATH + word + ".mp3?&" + (+ new Date());

        this.request(url, callback, "POST", "arraybuffer");

        
    };

    //用XHR请求
    this.request = function(url, callback, method, responseType){
        console.log("url: " + url);

        var method = method || "GET";

        var request = new XMLHttpRequest();
        var onError = function(e){alert(e)};

        request.open(method, url, true);
        responseType && (request.responseType = responseType);

        console.log("XHR INIT");
        console.log("---------------------\n");


        request.onload = function(){
            var response = request.response;
            callback && callback(response);

        };
        request.send();
        
    };
});
