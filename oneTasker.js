if (!(time && name)) {
    flash("测试");
    wait(3000);
    exit();
}

var date = new Date();
var now = date.getTime();
var timestamp = Date.parse(time);
var remain_time = timestamp - now;
remain_time = Math.max(1000, remain_time);
flash("将会在" + remain_time/60000 + "分钟后执行" + name);

setTimeout(function (time, name) {
    // 开始执行
    flash("开始执行：" + time + " " + name);
    performTask("亮屏", 5, "", "");
    wait(2000);
    exit();
}, remain_time, time, name);

var i=0;
setInterval(function (){
    i++;
    flash(i*10+"秒 共"+remain_time/1000+"秒");
},10000);