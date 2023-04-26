$(document).ready(
    function(){
        function getData(){
        $.ajax({
            url:"https://reqres.in/api/users?page=2",
            type: "GET",
            data: { param1: "value1", param2: "value2" },
            dataType: "json",
            success: function(data){
                console.log(data);
                let str="";
                for(i of data.data){
                    str = `<div class="cards">` ;
                    for(key in i){
                        if(key == "avatar"){
                            str+=`<img src="${i[key]}">`
                        }
                        else{
                        str += `<p> ${key} : ${i[key]}</p>`
                        }
                    }
                str+= `</div>` ;
                $('#container').append(str);
                }
                
            },
            error: function(xhr,status,error){
                console.log(error);
            }
        })
    }
        function postData(name,job){
            $.post("https://reqres.in/api/users",{
                "name": ""+name,
                "job": ""+job
            },
            function(data,status){
                for(i in data){
                $('#status').append(`<b>${i
                 }</b> : ${data[i]}<br>`);
                console.log(data);
                }
            })
        }
        $("#submit-btn").click(function(){
            let name = $('#name').val();
            let job = $('#job').val();
            $('#status').css("color","red");
            if(name.length==0 || job.length==0){
                $('#status').html("cannot update due to empty field");
            }
            else{
                console.log(name,job);
                postData(name,job);
            }
        })

        $("#getData-btn").click(getData);
    }

)