/**
 * webvoice
 * @description 网页语音化工具--alloyTeam
 * @author Bin Wang(Dorsywang@alloyTeam)
 */

$AM_d("pinyin", function(M){
    this.status = {
        //记录请求状态
        readyState: 0
    };

    //记录字典
    this.dictionary = {};

    //初始化请求
    this.init = function(){
        var pyDataUrl = "data/zidian.json";
        var _this = this;

        M.net.request(pyDataUrl, function(data){
            _this.status.readyState = 1;

            _this.dictionary = JSON.parse(data);

            console.log(_this.dictionary);

            M.init();
        });
    };

    this.toPY = function(word){
        console.log(word);
        for(var i in this.dictionary){
            if(this.dictionary[i].indexOf(word) > -1){
                return i;
            }
        }
    };
});
