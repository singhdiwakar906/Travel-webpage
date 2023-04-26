$(document).ready(
    function(){
    function fetchData(){
    $.ajax({
        url:"http://13.126.253.245:9010/api/users/list",
        type: "GET",
        success: function(data){
            console.log(data);
            let count = 0;
            let str = "";
            for(x of data.data){
                if(x.status=="Active"){
                str += `
                        <tr id="row_${count}" draggable="true" ondragstart="startDrag()" ondrop="dropDrag()" ondragover="overDrag()" ondragenter="enterDrag()" >
                            <td>${count}</td>
                            <td>${x._id}</td>
                            <td>${x.first_name}</td>
                            <td>${x.last_name}</td>
                            <td>${x.email}</td>
                            <td>${x.gender}</td>
                            <td>${x.created_at}</td>
                            <td><button id="del-btn${count}" email-data="${x.email}">Delete</button></td>
                        </tr>
                `
                count++ ;
            }
            }
            $('#display-data').html(str);
            
            count = 0 ;
            for(x of data.data){
                $("#del-btn"+count).click(delData);
                count++;
            }
        }
        
    })
}
    function postData(obj){
        $.post(
            "http://13.126.253.245:9010/api/users/profile",
            obj,
            function(data,status){
                console.log(data,status);
            }
        )
    }
    function delData(){
        let mail = $(this).attr("email-data");
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            console.log(result,"confirm")
            if (result.isConfirmed) {
                console.log("inside if")
                $.ajax({
                    url:"http://13.126.253.245:9010/api/users/profile/delete",
                    type: "delete",
                    data: {"email":mail},
                    success: function(data){
                        console.log("deleting",data);
                    }
                    
                })
                
                reloadAll();
            }
            else{
                reloadAll();
            }
        })
        console.log("reloading");
    }
    function updateData(obj){
        $.ajax({
            url:'http://13.126.253.245:9010/api/users/update/profile',
            type: "PUT",
            data: obj,
            dataType: "json",
            success: function(data){
                console.log(data);
            },
            error: function(xhr,status,error){
                console.log(error);
            }
        })
    }

    function formData(){
        event.preventDefault();
        // let data = $('form').serialize().split('&').map(val=>val.split('='));

        payload = {
        "first_name":$('#fname').val(),
        "last_name":$('#lname').val(),  
        "email":$('#email').val(),  
        "gender": $('#gender').val(),    
        "phone": $('#phone').val()
        }
        // let data_obj={};
        // for(x of data){
        //     data_obj[x[0]] = x[1] ;
        // }
        return payload;
        
    }
    function reloadAll(){
        setTimeout(()=>{
        $('#display-data').html("");
        fetchData();
    },100);
    }
    function mainControl(){
        console.log("inside main")
        let data = formData();
        if(this.id=="form-submit"){
            console.log("posting")
            postData(data);
            reloadAll();
        }
        if(this.id=="update-api"){
            console.log("updating")
            updateData(data);
            reloadAll();
        }
    }

    

    // $('#fetchData').click(fetchData);
    $('#form-submit').click(mainControl);
    $('#update-api').click(mainControl);
    fetchData();
}
)

// ///////////////// Drag ///////////////////
function startDrag(){
    console.log("drag start is triggered by",event.target.id);
    event.target.classList.add('item');
}
function dropDrag(){
    console.log("drag drop is triggered by",event.target);
    let item = document.getElementsByClassName("item")[0];
    if(event.target.id == "display-data-cnt-3"){
        console.log("inside here");
        event.target.appendChild(item);
        event.target.border = 1;
    }
    else{
        let drop_idx = Number(event.target.parentElement.id.slice(4,));
        let drag_idx = Number(document.getElementsByClassName("item")[0].id.slice(4,));
        console.log("drop",drop_idx,"drag",drag_idx);
        
        // console.log("xx",event.target.parentElement.id);
        let arr = document.getElementsByTagName('tr');
        if(drag_idx<drop_idx){
            event.target.parentElement.after(item);
        }
        else{
            event.target.parentElement.before(item);
        }
        item.classList.remove("item");
        for(i in arr){
            arr[i].id="row_"+i ;
        }
    }
}
function enterDrag(){
    console.log("entering div",event.target);
}
function overDrag(){
    event.preventDefault();
    // console.log("dragging",event.target);
}
// /////////////////////////////////////
