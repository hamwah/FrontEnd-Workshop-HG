$(document).ready(function(){
    $("button").click(function(){
    let name = $("#task").val();
    $("h2").append( "<h3>"+name+"<input data class='mx-5 form-check-input' type='checkbox'>" + "<button class='mx-5 btn btn-danger'>Delete</button>" + "<hr></h3>");
     $("h3").on('click','.btn-danger',function(){
        $(this).parent('h3').fadeOut();
     });
     
   });
   
    });
    
    