var count = 1;
let data = {};
let prog = 25;
// let prog_line=0;



function change_step(){
    event.preventDefault();
    let val = event.target.value;
    console.log(val);
    if(val=="next"){
        // validate();
        if(prog<100){
            prog+=25;
            // prog_line+=50;
        }
        document.getElementById('progressbar').style.width=prog+"%";
        // document.getElementById('rule').style.width=prog_line+"%";

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
        prog-=25;
        // prog_line-=50;
        document.getElementById('progressbar').style.width=prog+"%";
        // document.getElementById('rule').style.width=prog_line+"%";    
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
function onClick_rem(){
    let name = event.target.id;
    let str="#"+name+"+span";
    document.querySelector(str).style.visibility="hidden";
}




function validate(){
    let name = event.target.id;
    console.log(name);
    let str="#"+name+"+span";
    val = document.getElementById(name).value;
    if(val.length==0){
        console.log(str);
        document.querySelector(str).style.visibility="visible";
        data[name]='';
    }
    else{
        document.querySelector(str).style.visibility="hidden";
        // 
        if(name.match("university_name") || name.match("Degree_name") || name.match("pass_yeare") ){
            let last_val=name.lastIndexOf('e');
            let idx = name[last_val+1];
            // console.log("last_val"+last_val);
            // console.log( idx);
            if(data['Course_det'+idx]){
             data['Course_det'+idx][name] = val; 
             localStorage.setItem('Course_det'+idx,JSON.stringify(data['Course_det'+idx]));
            }
            else{
                data['Course_det'+idx] = {};
                data['Course_det'+idx][name] = val; 
                localStorage.setItem('Course_det'+idx,{});
                localStorage.setItem('Course_det'+idx,JSON.stringify(data['Course_det'+idx]));
            }
        }
        else{
            data[name]=val;
            localStorage.setItem(name,val);
        }
        console.log(data[name]+" "+val);
    }
    console.log(data);
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
    else if(button_name=="btn-3"){
        check = document.getElementsByClassName('step-3');
    }
    else if(button_name=="btn-4"){
        check = document.getElementsByClassName('step-4')
    }
    else if(button_name=="btn-5"){
        check = document.getElementsByClassName('step-5')
    }
    

    for(i in check){
         if(check[i].value==""){

            let st1="#"+check[i].id+"+span";
            document.querySelector(st1).style.visibility="visible"
            return false;
         }
    }
    console.log(data);
    if(button_name=="btn-4"){
        alert("form submitted sucessfully");
        change_step();
        show_Resume();
    }
    else{
    change_step();
    }
}

let edu_count=1;
function Add_Edu(){
    event.preventDefault();
    edu_count++;
    let node = document.getElementById('edu-details');
    let dv = document.createElement('div');
    dv.id="edu-details"+edu_count;
    node.appendChild(dv);
    console.log("adding div");

    document.getElementById("edu-details"+edu_count).innerHTML=`<div id="edu-details${edu_count}">
    <div class="relative-box" id="univ_cnt${edu_count}">
        <label for="u_name">University Name</label><br>
        <input type="text" name="u_name" id="university_name${edu_count}" placeholder="university name" onblur="validate()" class="step-3">
        <span>*field-required</span>
    </div>
    <div class="relative-box" id="deg_cnt${edu_count}">
        <label for="D_name">Degree Name</label><br>
        <input type="text" name="D_name" id="Degree_name${edu_count}" placeholder="Degree name" onblur="validate()" class="step-3">
        <span>*field-required</span>
    </div>
    <div class="relative-box" id="year_cnt${edu_count}">
        <label for="pass-year">Year of passing</label><br>
        <input type="month" name="pass-year" id="pass_yeare${edu_count}" max-length="10" placeholder="passing year" onblur="validate()" class="step-3">
        <span>*field-required</span>
    </div>
</div>`;
    // return false;
}

function show_Resume(){
    event.preventDefault();
    // fill data automatically
    autoFill(); 
    // fill data automatically
    for(i in data){
        if(i[0]=='C'){
        let content = "";
        content+="<tr>" ;
        console.log(content);
        for(j in data[i]){
            content+=`<td>${data[i][j]}</td>`;
            }
        
        document.getElementById('course_det'+'_d').innerHTML+=content;
        content+="</tr>" ;
        console.log(content);
        }

        else{
            document.getElementById(i+'_d').innerHTML = data[i];
        }
}
}

function autoFill(){
    data = {"Course_det1"
: 
{"university_name1": 'gehu', "Degree_name1": 'mca', "pass_yeare1": '2023-04'},
"Course_det2"
: 
{"university_name2": 'gehu', "Degree_name2": 'BA'," pass_yeare2": '2023-12'},
"age" : "89",
"c_name1": "tsc",
"designation1": "trainee",
"email": "singhdiwkar0882@gmail.com",
"end-date": "2023-04-08",
"fname": "diwakar",
"lname": "singh",
"phone": "1234567890",
"start_date1": "2023-03-01",
    }
}


// under Development

// var skill_count=1;
// function Add_skills(){
//     event.preventDefault();
//     skill_count++;
//     let node = document.getElementById('skill-details');
//     let dv = document.createElement('div');
//     dv.id="skill-details"+skill_count;
//     node.appendChild(dv);
//     console.log("adding div");

//     document.getElementById("skill-details"+skill_count).innerHTML=`
//     <div class="relative-box" id="${skill_count}">
//         <input type="text" name="u_name" id="skill_${skill_count}" placeholder="skill" onblur="validate()" class="step-5">
//         <span>*field-required</span>
//     </div>
                                    
//     `;
// }
var d_on = false;
function darkMode(){
    let cnt = document.getElementById('section1');
    let inp_arr = document.getElementsByTagName('input');
    let btn = document.getElementsByTagName('button');
    console.log("in");
    if(d_on){
        cnt.style.backgroundColor= "#7d68de" ;
        cnt.style.color="black" ;
        for(x of inp_arr){
            x.style.backgroundColor = "#eceaea";
            x.style.color = "black" ;
        }
        for(x of btn){
            x.style.backgroundColor = "#eceaea";
            x.style.color = "black" ;
        }

        d_on=false;
        console.log("in if");
    }
    else{
        cnt.style.background="black" ;
        cnt.style.color="white" ;
        for(x of inp_arr){
            x.style.backgroundColor = "black";
            x.style.color = "white" ;
            x.style.accentColor = "black" ;
        }
        for(x of btn){
            x.style.backgroundColor = "black";
            x.style.color = "white" ;
        }
        d_on=true;
        console.log("in else");
    }
}
