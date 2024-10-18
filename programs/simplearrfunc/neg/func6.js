function hasse(){
    hasseedge("obs","sec")
    hasseedge("sec","topsec")
}

function main(){
    type(s, "sec")
    type(o, "obs")
    type(ts, "topsec")
    
    if(s == 0){
        if(ts == 1){
            ts = getssec(o);
        }
    }
}
function getssec(s){
    type(s, "sec");
    return 1
}