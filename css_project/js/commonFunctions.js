var menu = document.getElementById("modalMenu");
var buttonMenu = document.getElementById("buttonMenu");
var closeMenu = document.getElementById("closeMenu");
var buttonMenuNav = document.getElementById("modalMenuNav");

var book = document.getElementById("modalBook");
var buttonBook = document.getElementById("buttonBook");
var closeBook = document.getElementById("closeBook");
var buttonBookNav = document.getElementById("modalBookNav");

buttonMenu.onclick = function () {
  console.log("click");
  menu.showModal();
};

buttonMenuNav.onclick = function () {
  console.log("click");
  menu.showModal();
};

closeMenu.onclick = function () {
  console.log("click");
  menu.close();
};

buttonBook.onclick = function () {
  console.log("click");
  book.showModal();
};

buttonBookNav.onclick = function () {
  console.log("click");
  book.showModal();
};

closeBook.onclick = function () {
  console.log("click");
  book.close();
};
