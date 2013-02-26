/**
 * webvoice
 * @description 网页语音化工具--alloyTeam
 * @author Bin Wang(Dorsywang@alloyTeam)
 */

$AM_d("net", function(M){
    this.loadFile = function(word){
        var url = M.config.ROOT_PATH + word + ".mp3?" + (new Date());

        var request = new XMLHttpRequest();
        var onError = function(e){alert(e)};
        request.open('POST', url, true);
        request.responseType = 'arraybuffer';


        request.onload = function(){
            var response = request.response;

            //将arraybuffer压入缓冲队列中
            M.voiceQueue.push(response);
            M.dorsyAudio.readOneWord();
        };
        request.send();
        
    };
});
