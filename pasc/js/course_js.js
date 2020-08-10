
/*-------------------------------------*/

window.onscroll = scrollFunction;

var Gotop = document.getElementById("topBtn");
var width = screen.width;

function scrollFunction() {
  if (width > 1024) {
    if (document.documentElement.scrollTop > 50) {
      Gotop.style.display = "block";
    } 
    else {
      Gotop.style.display = "none";
    }
  }
  
  if (width > 480) {
    if (document.documentElement.scrollTop < 550) {
      header.style.height = "120px";
      logo.style.height = "100px";
    } 
    else {
      header.style.height = "80px";
      logo.style.height = "75px";
    }
  }  
}

function gotop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/*-------------------------------------*/

function course() {
  unlock();
  var id = event.currentTarget.id;
  var idlist = { "course_1": "course_in_1","course_2": "course_in_2","course_3": "course_in_3"};
  var contentid = idlist[id];
  document.getElementById(id).style.background="#1c7db2";
  document.getElementById(contentid).className = "course_in";
  document.getElementById(contentid).setAttribute("course_in", "course_in_unlock");
}

function unlock() {
  var i = 1;
  for (i = 1; i <= 3; i++) {
    var contentid = "course_" + i;
    document.getElementById(contentid).style.background="#b6b5b5";
}
  for (i = 1; i <= 3; i++) {
      var contentid = "course_in_" + i;
      document.getElementById(contentid).className = "course_in_unlock";
      document.getElementById(contentid).setAttribute("course_in", "course_in_unlock");
  }
}

/*-------------------------------------*/

function menu() {
  
  var ul=document.getElementById("ul");
  if (ul.className == "show") {
    ul.className="unlock";
  }
  else {
    ul.className="show";
  }

}


