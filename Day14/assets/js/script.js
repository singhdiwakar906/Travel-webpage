$(document).ready(function(){
    let count = 1 ;
    $("#add").click(function(){
        $('#email-cnt').append(
            `<input id="email-${count}"  class="inp inp1" type="email" placeholder="email-${count+1}" required>`
        )
        count++;
    })
    $('#btn1-next').click(function(){
        let flag = true ;
        console.log("running");
        let input_arr = $(".inp1");
        for(x of input_arr){
            if(x.value == "" || x.value == "* required"){
                console.log($("#"+x.id).attr("placeholder")+"is_required");
                x.value = "* "+"required";
                x.style.color = "red";
                flag = false ;
            }
        }
        if(flag){
            $("#one").hide();
            $("#two").show();
    }
    $("input").focus(function(){
        console.log($(this).val());
        if($(this).val() == "* required"){
            $(this).val("");
        } 
        $(this).css("background","lawngreen");
        $(this).css("color","black");
       })
       $("input").blur(function(){
        $(this).css("background","#E8F0FE");
       })

    });
    $("#prev").click(function(){
        $("#two").hide();
        $("#one").show();
        count--; 

   });

   $('#btn2-next').click(function(){
    console.log("running");
    let flag = true ;
    let input_arr = $(".inp2");
    for(x of input_arr){
        if(x.value == "" ){
            console.log($("#"+x.id).attr("placeholder")+"is_required");
            x.value = "* "+"required";
            x.style.color="red";
            flag = false ;
        }
    }
    let input_arr_all = $(".inp");
    if(flag){
    alert("form submitted sucessfully");
    location.reload();
    }
});

   $("input").focus(function(){
    console.log($(this).val());
    if($(this).val() == "* required"){
        $(this).val("");
    } 
    $(this).css("background","lawngreen");
    $(this).css("color","black");
   })
   $("input").blur(function(){
    $(this).css("background","#E8F0FE");
   })

   $("#btn1-next").hover(
    function(){
        $(this).css("background","lawngreen");
    },
    function(){
        $(this).css("background","white");
    }
);

});