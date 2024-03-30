let id_divs_nav_bar = ["li-mk-ID", "li-ai-ID", "li-pre-ID", "li-aiuto-ID"];

let div_setted_id = "mkplaceID";

ColorOrNotNavItem("li-mk-ID");

function ChangePage(page_path) {
  window.location = page_path;
}

function HandleAndView(div_to_handle, div_to_color = undefined) {
  // document.getElementById(div_to_handle).style.display = "none";
  // document.getElementById(div_to_view).style.display = "block";
  ColorOrNotNavItem(div_to_color);
}

function ColorOrNotNavItem(id_div_nav_bar) {
  id_divs_nav_bar.forEach((element) => {
    if (element != id_div_nav_bar) {
      if (document.getElementById(element) != null) {
        document.getElementById(element).style.cssText =
          ".nav-item:hover{ background-color: #21252937; cursor: pointer; }";
      }
    }
  });
  if (document.getElementById(id_div_nav_bar) != null) {
    document.getElementById(id_div_nav_bar).style.backgroundColor = "#212529";
  }
}

let pass;

function CheckPass() {
  pass = document.getElementById("password_field").value + "";
  if (pass.length >= 10) {
    document.getElementById("validPassword1").style.display = "flex";
    document.getElementById("invalidPassword1").style.display = "none";
    document.getElementById("password_field2").disabled = false;
    return;
  }
  document.getElementById("validPassword1").style.display = "none";
  document.getElementById("invalidPassword1").style.display = "flex";
  document.getElementById("password_field2").disabled = true;
}

function CheckConfPass() {
  if (pass == document.getElementById("password_field2").value) {
    document.getElementById("validPassword2").style.display = "flex";
    document.getElementById("invalidPassword2").style.display = "none";
    document.getElementById("btn-crea-account-serial").disabled = false;
    return;
  }
  document.getElementById("validPassword2").style.display = "none";
  document.getElementById("invalidPassword2").style.display = "flex";
  document.getElementById("btn-crea-account-serial").disabled = true;
}


function CheckCategoriaComputer(){
   let categoria_selected = document.getElementById("selectCategoriaComputer").value;
   console.log(categoria_selected)
   if(categoria_selected == "hardware"){
      document.getElementById("selectTipologiaComputer").selectedIndex = 1;
      document.getElementById("selectTipologiaComputer").disabled = true;
   }else{
    document.getElementById("selectTipologiaComputer").disabled = false;
    document.getElementById("selectTipologiaComputer").selectedIndex = 0;
   }
}