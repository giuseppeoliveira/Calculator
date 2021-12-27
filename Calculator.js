function insert(number)
{
    var num = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = num + number;
}
function del ()
{
    document.getElementById('result').innerHTML= "";
}

function back () 
{
    var result2 = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result2.substring(0, result2.length -1);
}

function equal ()
{
    var result2 = document.getElementById('result').innerHTML;
    if (result2)
    {
        document.getElementById('result').innerHTML = eval(result2);
    }
    else
    {
        document.getElementById('result').innerHTML = "0";
    }
}