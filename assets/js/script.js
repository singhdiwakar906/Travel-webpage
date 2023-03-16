function open_site(){
    let url = event.target.title;
    console.log(url);
    document.getElementById("window-view").src = url ;
}