while(true){
    var i = dialogs.select("老婆老婆喜欢我嘛？", "喜欢", "不喜欢", "不知道", "最爱你啦~");
    if(i == -1){
        toastLog("猜一下呗~");
        continue;
    }
    if(i == 3){
        toastLog("答对辣！我也最爱虹霞啦~ ᗰદ૨૨ʏ ᘓમ૨ıડτന੨ડ");
        break;
    }else if(i == 0){
        toastLog("不够哦~");
        }
        else{
            toastLog("答错辣！")
        }
}
var i=0;
        setInterval(function (){
        i++;
        toast("虹霞么么哒！");
        },10000);


