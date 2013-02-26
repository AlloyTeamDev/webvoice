/**
 * webvoice
 * @description 网页语音化工具--alloyTeam
 * @author Bin Wang(Dorsywang@alloyTeam)
 */

$AM_d("dorsyAudio", function(M){
    var _this = this;

    this.prototype = {
        ctx: null,
    };

    //init run
    this.init = function(){
        (window.webkitAudioContext && (this.ctx = new webkitAudioContext())) || M.deleteSelf("不支持web audio api,请使用webkit内核浏览器");
    };

    //从缓冲队列中读取一个文字并解码
    this.readOneWord = function(){
        var voiceBuffer = M.voiceQueue.shift();

        //解码
        this.ctx.decodeAudioData(voiceBuffer, function(buffer){
            var source = _this.ctx.createBufferSource();
            source.buffer = buffer;
            source.connect(_this.ctx.destination);
            source.noteOn(0);
        });
    };
});
