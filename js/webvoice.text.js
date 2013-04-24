/**
 * webvoice
 * @description 网页语音化工具--alloyTeam
 * @author Bin Wang(Dorsywang@alloyTeam)
 */

$AM_d("text", function(M){
    this.readWords = function(){
    };

    //请求wordBuffer
    this.requestWordBuffer = function(){
        //取到一个没有请求到buffer的word
        var unreadWord = M.unreadWordQueue.shift();

        //递归出口
        if(! unreadWord) return;

        //放入读过的队列中
        M.readedWordQueue.push(unreadWord);

        //请求文件
        M.net.loadFile(unreadWord, function(response){
            M.voiceQueue.push(response);

            //继续异步请求
            M.text.requestWordBuffer();
        });
    };

    //读取文本
    this.playOneWord = function(){
       var voiceBuffer = M.voiceQueue.shift(); 
       voiceBuffer && (M.dorsyAudio.playBuffer(voiceBuffer));
    };
});
