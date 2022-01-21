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
            alert('erro');         
        }
    });

    $("input[name=sub]").click(function(){
        if ($("#result").val() != ''){
            v1 = parseFloat($("#result").val());
            $("#result").val('');
            op = "sub";
            $("#op").text($(this).val());
        } else {
            alert('erro');         
        }
    });

    $("input[name=mult]").click(function(){
        if ($("#result").val() != ''){
            v1 = parseFloat($("#result").val());
            $("#result").val('');
            op = "mult";
            $("#op").text($(this).val());
        } else {
            alert('erro');         
        }
    });

    $("input[name=divs]").click(function(){
        if ($("#result").val() != ''){
            v1 = parseFloat($("#result").val());
            $("#result").val('');
            op = "divs";
            $("#op").text($(this).val());
        } else {
            alert('erro');         
        }
    });

    $("input[name=equal]").click(function(){
        if ($("#result").val() != ''){
            v2 = parseFloat($("#result").val());
            
            var v3 = null;
            switch (op) {
                case "soma": v3 = v1+v2;
                break;
                case "sub": v3 = v1-v2;
                break;
                case "mult": v3 = v1*v2;
                break;
                case "divs": v3 = v1/v2;
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
    
       $("input[name=virg]").click(function(){
        const text = $("#result").val();
        if(!text.includes (",")){
        $("#result").val($("#result").val() + ",");
        }
        
        
    });
  /* 
    $("input[name=music]").click(function(){
        value = $("#result").val()
        $("#result").val(value.substring(0, value.length-1));
    });

    $("input[name=color]").click(function(){
        value = $("#result").val()
        $("#result").val(value.substring(0, value.length-1));
    });
    */

});
