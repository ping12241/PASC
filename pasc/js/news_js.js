
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

function menu() {
  var ul=document.getElementById("ul");
  if (ul.className == "show") {
    ul.className="unlock";
  }
  else {
    ul.className="show";
  }

}

/*-------------------------------------*/

var content_page = 1;
news_in(content_page);

function page(n) {
  news_in(content_page += n);
}

function news_in(n) {
  var i;
  var content = document.getElementsByClassName("news_in");
  if (n > content.length) {content_page = 1}
  if (n < 1) {content_page = content.length}
  for (i = 0; i < content.length; i++) {
    content[i].style.display = "none";
    
  }
  content[content_page-1].style.display = "flex";
}




