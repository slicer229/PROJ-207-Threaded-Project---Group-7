function startTime() 
{
    const today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var d = today.getDate();
    var mts = today.getMonth() + 1;
    var y = today.getFullYear() + 1;
    if (m<10)
        {m = "0" + m}
    if (s<10)
        {s= "0" + s}
    document.getElementById('timeDisplay').innerHTML = h + ":" + m + ":" + s + "   " + mts + "." + d + "." + y;
    setTimeout(startTime, 1000);
}