$(function(){
    
    var v1, v2, op;

    $("input[name=btn]").click(function(){
        $("#result").val($("#result").val() + $(this).val());
    });

    $("input[name=ce]").click(function(){
        $("#result").val('');
        $("#op").text('');
    });

    $("input[name=soma]").click(function(){
        if ($("#result").val() != ''){
            v1 = parseFloat($("#result").val());
            $("#result").val('');
            op = "soma";
            $("#op").text($(this).val());
        } else {
            alert('Before starting an operation, you must select a number.');         
        }
    });

    $("input[name=sub]").click(function(){
        if ($("#result").val() != ''){
            v1 = parseFloat($("#result").val());
            $("#result").val('');
            op = "sub";
            $("#op").text($(this).val());
        } else {
            alert('Before starting an operation, you must select a number.');         
        }
    });

    $("input[name=mult]").click(function(){
        if ($("#result").val() != ''){
            v1 = parseFloat($("#result").val());
            $("#result").val('');
            op = "mult";
            $("#op").text($(this).val());
        } else {
            alert('Before starting an operation, you must select a number.');         
        }
    });

    $("input[name=divs]").click(function(){
        if ($("#result").val() != ''){
            v1 = parseFloat($("#result").val());
            $("#result").val('');
            op = "divs";
            $("#op").text($(this).val());

        }else {
            alert('Before starting an operation, you must select a number.');         
        }
    });

    $("input[name=equal]").click(function(){
        if ($("#result").val() != ''){
            v2 = parseFloat($("#result").val());
            
            var v3 = null ;
            switch (op) {
                case "soma": v3 = v1+v2;
                break;
                case "sub": v3 = v1-v2;
                break;
                case "mult": v3 = v1*v2;
                break;
                case "divs": 
                    if (v2 === 0) {
                        v3 = 0;
                    } else {
                        v3 = v1/v2;
                    }
                    break; 
                default:alert('erro');
            }

            $("#result").val(v3);
            $("#op").text('');
        }
    });  
    
    $("input[name=c]").click(function(){
        value = $("#result").val()
        $("#result").val(value.substring(0, value.length-1));
    });

    $("input[name=neg]").click(function(){
        $("#result").val($("#result").val() * -1);

    });  

    $("input[name=virg]").click(function(){
        const text = $("#result").val();
        if(!text.includes (".")){
            $("#result").val($("#result").val() + ".");
        }
    });
});
