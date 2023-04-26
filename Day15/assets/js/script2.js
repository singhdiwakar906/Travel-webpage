var data_ar;
$(document).ready(function(){
    
    $.ajax({
      url: "https://api.spacexdata.com/v3/capsules",
      type: "GET",
      data: { param1: "value1", param2: "value2" },
      dataType: "json",
      success: function(data) {
        let count = 1;
        data_ar = data;
        for(x of data ){
            $('#cards-cnt').append(`<div id="card-${count}" class="cards">
                    <div id="capsule-id-cnt-${count}" >
                        <h2 id="capsule-id" >${x.capsule_id}</h2>
                    </div>
                    <div id="capsule-serial-cnt-${count}">
                        <h3 id="capsule-serial" >${x.capsule_serial}</h3>
                    </div>
                    <div id="view-btn-cnt${count}">
                        <button id="view-btn${count}">view</button>
                    </div>
                </div>`
            )
            $("#view-btn"+count).click(function(){
                console.log(this.id);
                let id= this.id;
                console.log(id.slice(8,));
                let idx = Number(id.slice(8,))-1;
                console.log(idx);

                let str = "";
                for(i in data[idx].missions){
                    str += "<p>"+data[idx].missions[i].name+"</p>";
                    str += "<p>"+data[idx].missions[i].name+"</p>";
                    console.log(str);
                }
                console.log(str);
                // console.log(data[idx].capsule_serial);
                $('#cards-cnt').hide(); 
                $('#details-cnt').show();
                
                $('#details-cnt').html(
                        `<div id="detail-id">
                        <p><b>id:</b> ${data[idx].capsule_id}</p>
                    </div>
                    <div id="detail-serial">
                        <p><b>serial:</b> ${data[idx].capsule_serial}</p>
                    </div>
                    <div id="detail-dets">
                        <p><b>details:</b> ${data[idx].details}</p>
                    </div>
                    <div id="detail-landing">
                        <p><b>landings:</b> ${data[idx].landings}</p>
                    </div>
                    <div id="detail-missions">
                        <b>Missions</b>
                        ${str}
                    </div>
                    <div id="detail-original_launch">
                        <p><b>launch:</b> ${data[idx].original_launch}</p>
                    </div>
                    <div id="detail-status">
                        <p><b>status:</b> ${data[idx].status}</p>
                    </div>
                    <div id="detail-type">
                        <p><b>type:</b> ${data[idx].type}</p>
                    </div>
                    <div id="back-btn${idx+1}">
                        <button id="back${idx+1}" class="back-btn">back</button>
                    </div>
                    `
                    );
                    $('.back-btn').click(function(){
                        $('#cards-cnt').show(); 
                        $('#details-cnt').hide();
                        console.log("going back");
                    })
            })
                
            count++;
        }
      },
      error: function(xhr, status, error) {
        console.log("Error: " + error);
      }
    })
    
    
}
)



 // 
