function calc()
{
    var one=parseInt(document.getElementById("one").value)
    var two=parseInt(document.getElementById("two").value)

    var op= document.getElementById("opr").value

    if(op=="+"){
        document.getElementById("result").value=one+two;
    }
    if(op=="-"){
        document.getElementById("result").value=one-two;
    }
    if(op=="*"){
        document.getElementById("result").value=one*two;
    }
    if(op=="/"){
        document.getElementById("result").value=one/two;
    }
    if(op=="%"){
        document.getElementById("result").value=one%two;
    }
}