
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



/*-------------------------------------*/

function imgup() {
  imgunlock();
  var id = event.currentTarget.id;
  var idlist = {"experience_1": "experiencecontent_1",
                "experience_2": "experiencecontent_2",
                "experience_3": "experiencecontent_3",
                "experience_4": "experiencecontent_4",
                "experience_5": "experiencecontent_5",
                "experience_6": "experiencecontent_6",
                "experience_7": "experiencecontent_7",
                "experience_8": "experiencecontent_8",
                "experience_9": "experiencecontent_9",
               };
  var contentid = idlist[id];
  document.getElementById(contentid).className = "experience_bg_content";
  document.getElementById("experienceimg").className = "experience_bg_lock";
}

function imgunlock() {
  var i = 1;
  for (i = 1; i <= 9; i++) {
      var contentid = "experiencecontent_" + i;
      document.getElementById(contentid).className = "experience_bg_content_unlock";
  }
}

document.onclick=open;
function open() {
    e = window.event;
    var target = e.target.id;
    if (target== "experienceimg") { 
      document.getElementById("experienceimg").className = "experience_bg_content_unlock";
      toggleVideo();
    }
    
}

function toggleVideo() {
  var i = 1;
  for (i = 1; i <= 9; i++) {
      var contentid = "experiencecontent_" + i;
      var div = document.getElementById(contentid);
      var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
      iframe.postMessage('{"event":"command","func":"' + "pauseVideo" + '","args":""}','*');
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



