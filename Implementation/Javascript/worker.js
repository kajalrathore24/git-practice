let i=1;
function count(){
    i++;
    postMessage(i);     //return the message back into html
    setTimeout("count()",500);
}
count();