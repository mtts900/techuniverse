var links = document.getElementsByClassName("smooth-menu");
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", smoothScroll);
}

function smoothScroll(event) {
  event.preventDefault();
  var target = this.getAttribute("href");
  document.querySelector(target).scrollIntoView({
    behavior: "smooth"
  });
}



