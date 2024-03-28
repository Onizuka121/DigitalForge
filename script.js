

let id_divs_nav_bar = [
    "li-mk-ID",
    "li-ai-ID",
    "li-pre-ID",
    "li-aiuto-ID"
];

let div_setted_id = "mkplaceID";

ColorOrNotNavItem("li-mk-ID");

function ChangePage(page_path){
    window.location = page_path;
}

function HandleAndView(div_to_handle,div_to_color = undefined){
   // document.getElementById(div_to_handle).style.display = "none";
    // document.getElementById(div_to_view).style.display = "block";
    ColorOrNotNavItem(div_to_color);
    
}


function ColorOrNotNavItem(id_div_nav_bar){
    id_divs_nav_bar.forEach(element => {
        if(element != id_div_nav_bar){
            document.getElementById(element).style.cssText = ".nav-item:hover{ background-color: #21252937; cursor: pointer; }";
        }
    });
    document.getElementById(id_div_nav_bar).style.backgroundColor = "#212529";
}

