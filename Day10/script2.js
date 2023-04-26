var count = 1;
let data = {};
let prog = 33.33;
let prog_line=0;
function change_step(){
    event.preventDefault();
    let val = event.target.value;
    console.log(val);
    if(val=="next"){
        // validate();
        if(prog<100){
            prog+=33.33;
            prog_line+=50;
        }
        document.getElementById('progressbar').style.width=prog+"%";
        document.getElementById('rule').style.width=prog_line+"%";

        let id_name = "step" + count;
        console.log(id_name);
        let arr1 = document.getElementById(id_name);
        arr1.classList.remove('show')
        arr1.classList.add('hide');

        count++;

        id_name = "step" + count;
        arr1 = document.getElementById(id_name);
        arr1.classList.remove('hide');
        arr1.classList.add('show');
    }
    else if(val == "prev"){
        prog-=33.33;
        prog_line-=50;
        document.getElementById('progressbar').style.width=prog+"%";
        document.getElementById('rule').style.width=prog_line+"%";    
        console.log("runnign prev");
        let id_name = "step" + count;
        let arr1 = document.getElementById(id_name);
        arr1.classList.remove('show')
        arr1.classList.add('hide');

        count--;

        id_name = "step" + count;
        arr1 = document.getElementById(id_name);
        arr1.classList.remove('hide');
        arr1.classList.add('show');
    }
}
function validate(){
    let name = event.target.id;
    let str="#"+name+"+span";
    val = document.getElementById(name).value;
    if(val.length==0){

        
        console.log(str);
        document.querySelector(str).style.visibility="visible";
        data[name]='';
    }
    else{
        document.querySelector(str).style.visibility="hidden";
        data[name]=val;
    }
}
function main_control(){
    event.preventDefault();
    button_name = event.target.id;
    if(button_name=="btn-1"){
        check = document.getElementsByClassName('step-1');
    }
    else if(button_name=="btn-2"){
        check = document.getElementsByClassName('step-2');
    }
    for(i in check){
         if(check[i].value==""){
            alert("No field should be empty");
            return false;
         }
    }
    console.log(data);
    change_step();
}
function submition(){
    alert("Form submitted sucessfully");
  
}

