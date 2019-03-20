var time=13000;
var name="蚂蚁森林";

flash("将会在" + time/1000 + "秒后执行" + name);

setTimeout(function (time, name) {
    // 开始执行
    flash("开始执行：" + time + " " + name);
    performTask("亮屏", 5, "", "");
    wait(2000);
    exit();
}, time, time, name);

var i=0;
setInterval(function(){
    i++;
    flash(i * 5 + "秒");
}, 5000);