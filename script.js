let id_divs_nav_bar = ["li-mk-ID", "li-ai-ID", "li-pre-ID", "li-aiuto-ID"];
let id_divs_container = ["serialMARKET-PLACE", "serialAiContainer","serialPreferitiContainer"];

let div_setted_id = "mkplaceID";

ColorOrNotNavItem("li-mk-ID");

function ChangePage(page_path) {
  window.location = page_path;
}

function HandleAndView(
  div_nav_to_color = undefined,
  div_container_to_view = undefined
) {
  // document.getElementById(div_to_handle).style.display = "none";
  // document.getElementById(div_to_view).style.display = "block";
  ColorOrNotNavItem(div_nav_to_color);
  id_divs_container.forEach((element) => {
    if (element != div_container_to_view) {
      document.getElementById(element).style.display = "none";
    }
  });
  document.getElementById(div_container_to_view).style.display = "block";
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

function CheckCategoriaComputer(isfilter = true) {

  let id = isfilter ? "selectCategoriaComputer" : "selectCategoriaComputer2";
  let id2 = isfilter ? "selectTipologiaComputer" : "selectTipologiaComputer2";
  let categoria_selected = document.getElementById(id).value;
  if (categoria_selected == "hardware") {
    document.getElementById(id2).selectedIndex = 1;
    document.getElementById(id2).disabled = true;
  } else {
    document.getElementById(id2).disabled = false;
    document.getElementById(id2).selectedIndex = 0;
  }

}

function formatCreditCardNumber() {
  var input = document.getElementById('inputCardNum');
  var trimmedValue = input.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
  var formattedValue = trimmedValue.replace(/(.{4})/g, '$1 ');
  input.value = formattedValue.trim();
  let image = "";
  if((input.value+"").startsWith("4")){
    image = "visa.png";
  }else if((input.value+"").startsWith("5")){
    image = "master.png"
  }else if((input.value+"").startsWith("3")){
    image = "american-express.png"
  }else if((input.value+"").startsWith("6")){
    image = "discover.png"
  }else{
    image = "";
  }
  if(image.length > 0){
    document.getElementById("cardTipo").innerHTML = "<img src='card-img/"+image+"' alt='' width='50' height='50'>";
  }else{
    document.getElementById("cardTipo").innerHTML = "credit_card";
  }
}

if(document.getElementById('inputCardNum') != null){
  document.getElementById('inputCardNum').addEventListener('input', formatCreditCardNumber);
  document.getElementById('scadenza_card').addEventListener('input', function(event) {
    var inputValue = event.target.value;
    var cleanedInputValue = inputValue.replace(/[^0-9]/g, '');
    var formattedValue = cleanedInputValue.replace(/(\d{2})(\d{0,2})/, '$1/$2'); 
    var month = parseInt(cleanedInputValue.substring(0, 2));
    if (month > 12) {
      formattedValue = formattedValue.substring(0, formattedValue.length - 1);
    }
    event.target.value = formattedValue;
  });
}



function SetPlan(plan1 = true){
  var plan_html = "€ 3.00 al mese"
  if(!plan1){
    plan_html = "€ 24.00 all'anno / € 2.00 al mese <span class='badge text-bg-success align-top fs-7'>20% sconto</span>"
  }
  document.getElementById("planScelto").innerHTML = plan_html;
  
  
}


function CancellaPreferito(id_card_preferito){
  document.getElementById(id_card_preferito).style.display = "none";
}

/*
var buttons = document.querySelectorAll(".bookmark-btn");

buttons.forEach(function(button) {
    button.addEventListener("click",  function() {
      this.classList.toggle("clicked");
  });
});
*/
$(document).ready(function () {
  $('.toast').toast();

  $('.bookmark-btn').click(function () {
      if ($(this).hasClass('clicked')) {
        $('.toast.toast-aggiunto').html("<div class='toast-body'> <span class='material-symbols-outlined align-middle'>bookmark_remove</span>Prodotto rimosso tra i preferiti </div>");
      } else {
        $('.toast.toast-aggiunto').html("<div class='toast-body'> <span class='material-symbols-outlined align-middle'>bookmark_added</span>Prodotto aggiunto tra i preferiti </div>");
      }
      $('.toast.toast-aggiunto').toast('show');
      $(this).toggleClass('clicked');
  });
});


