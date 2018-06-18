
window.onscroll = function changeClass(){

var scrollPosY = window.pageYOffset | document.body.scrollTop;
var navBar = document.getElementsByTagName('header');

if(scrollPosY > 100) {
  navBar.className = ('alternate');
} else if(scrollPosY <= 100) {
this.navBar = navBar}
}
