localStorage.setItem('F1_data',JSON.stringify({}));
function addData(){
    let button_id = event.target.id;
    let input_f = "Item-"+ button_id[button_id.length-1];
    let val = document.getElementById(input_f).value;
    let retrieve_data = JSON.parse(localStorage.getItem('F1_data'));
    retrieve_data[input_f]=val;
    localStorage.setItem('F1_data',JSON.stringify(retrieve_data));
    document.getElementById("display-area").innerHTML = localStorage.getItem('F1_data') ;
}
