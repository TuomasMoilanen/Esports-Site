function hideShow(el_id){
    clearStages();
    var el=document.getElementById(el_id);
    if(el_id.style.display!="none"){
      el_id.style.display="none";
    }else{
      el_id.style.display="";
    }
  }

  function toggleWeeks(el_id){
      clearStages();
      clearWeeks();
      var el=document.getElementById(el_id);
        el_id.style.display="";
    }

function clearStages() {
    var x = document.getElementsByClassName("stages");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
}

function clearWeeks() {
  var x = document.getElementsByClassName("weeks");
  var i;
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
}

function toggleGames(className) {
    clearGames();
    var x = document.getElementsByClassName(className);
    var i;
    for (i = 0; i < x.length; i++) {
      if(x[i].style.display!="none"){
        x[i].style.display="none";
      }else{
        x[i].style.display="";
      }
    }
}

function clearGames() {
  var x = document.getElementsByClassName("games");
  var i;
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
}
