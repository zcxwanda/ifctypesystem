function hasse(){
    hasseedge("low","mid");
    hasseedge("mid","high");
}

function funch(argm){
    type(h, "high");
    type(argm, "mid");
    return h;
}
function funcmh(x){
    type(x, "low")
    type(m, "mid")
    type(h, "high")
    h = funch(m);
    return h
}
function funcl(){
    type(l, "low")
    type(h, "high")
    
    h = funcmh(l);
}