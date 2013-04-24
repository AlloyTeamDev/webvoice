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

    //播放buffer
    this.playBuffer = function(voiceBuffer){
        //解码
        this.ctx.decodeAudioData(voiceBuffer, function(buffer){
            var source = _this.ctx.createBufferSource();
            source.buffer = buffer;
            source.connect(_this.ctx.destination);
            source.noteOn(0);
        });
    };

});
