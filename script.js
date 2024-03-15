function ChangePage(page_path){
    window.location = page_path;
    console.log("work");
}

function HandleAndView(div_to_handle,div_to_view){
    document.getElementById(div_to_handle).style.display = "none";
    document.getElementById(div_to_view).style.display = "block";
}