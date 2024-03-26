function ChangePage(page_path){
    window.location = page_path;
}

function HandleAndView(div_to_handle,div_to_view){
    document.getElementById(div_to_handle).style.display = "none";
    document.getElementById(div_to_view).style.display = "block";
}
$(document).ready(function () {
    if (!$.browser.webkit) {
        $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
    }
});