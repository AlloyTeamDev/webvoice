/**
 * webvoice
 * @description 网页语音化工具--alloyTeam
 * @author Bin Wang(Dorsywang@alloyTeam)
 */

;(function(TTS){
    //private Object
    var Main = {

        //声音文件缓冲队列
        voiceQueue: [],
        module: function(name, func){
            this[name] = new func(this);
        },
        
        //for some reson we could stop the program running
        deleteSelf: function(msg){
            delete window[TTS];
            throw new Error(msg);
        },

        init: function(){
            this.dorsyAudio.init();
            this.text.readWord();
        }
    };

    //public api
    window[TTS] = window[TTS] ||
    {
       module: function(name, func){
            Main.module(name, func);
       },
       init: function(){
            Main.init();
       }
    };

    //add module_d
    window.$AM_d = window.$AM_d || 
    function(name, func){
        Main.module(name, func);
    };

})("webVoice");
