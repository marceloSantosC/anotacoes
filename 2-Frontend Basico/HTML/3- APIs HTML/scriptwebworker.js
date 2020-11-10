let i = 0;
function contar() {
    i = i + 1;
    postMessage(i);
    setTimeout("timedCount()",1000);
}
contar()
