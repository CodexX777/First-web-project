let s="";
let a;
let ans="";
function append(a){
    if(a==="back"){
        s=String(s);
        s=s.substring(0,s.length-1);
    }
    else if(a==="clear"){
        s="";
    }
    else if(a==="="){
        try{
            ans=eval(s);
            s=ans;
        }
        catch(err){
            s="Syntax Error";
        }
    }
    else{
    s=s+a;
    }
    display(s)
}
function display(s){
    document.getElementById('display').innerHTML=s;
}