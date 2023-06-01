function loadScroll() {
    var textContainer = document.querySelector(".text");
    var textPosition = textContainer.getBoundingClientRect().top;
    var screenHeight = window.innerHeight / 2;
  
    if (textPosition < screenHeight) {
      textContainer.classList.add("text-appear");
    }else {
      textContainer.classList.remove("text-appear")
    }
  }
  
  window.addEventListener('scroll', loadScroll);
  
function bgChanger () {
  var leftContainer = document.querySelector(".news");
  var leftPosition = leftContainer.getBoundingClientRect().top;
  var leftHeight = window.innerHeight / 2.5;

  if (leftPosition <  leftHeight) {
    leftContainer.classList.add("news-appear");
  }else {
    leftContainer.classList.remove("news-appear")
  }
}

window.addEventListener('scroll', bgChanger);

function loadBox () {
  var boxSection = document.querySelector(".box");;
  var boxPosition = Box.getBoundingClientRect().top;
  var boxHeight = window.innerHeight / 0.5;
  
  if (boxPosition < boxHeight) {
    boxSection.classList.add("box-appear");
  }else{
    boxSection.classList.remove("box-appear")
  }

}

window.addEventListener('scroll', loadBox);

