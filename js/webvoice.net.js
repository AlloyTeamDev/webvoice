/**
 * webvoice
 * @description 网页语音化工具--alloyTeam
 * @author Bin Wang(Dorsywang@alloyTeam)
 */

$AM_d("net", function(M){
    this.loadFile = function(word, callback){
        word = M.pinyin.convertPY(word);

        console.log("\n---------------------");
        console.log("load word file: " + word);

        var url = M.config.ROOT_PATH + word + "2.mp3?" + (+ new Date());

        console.log("url: " + url);

        var request = new XMLHttpRequest();
        var onError = function(e){alert(e)};
        request.open('POST', url, true);
        request.responseType = 'arraybuffer';

        console.log("XHR INIT");
        console.log("---------------------\n");


        request.onload = function(){
            var response = request.response;
            callback && callback(response);

            /*
            //将arraybuffer压入缓冲队列中
            M.voiceQueue.push(response);
            M.dorsyAudio.readOneWord();
            */
        };
        request.send();
        
    };
});
