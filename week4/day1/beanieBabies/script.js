var all = document.querySelectorAll();

var cursorArray = [
  'url("tm1.gif"), auto',
  'url("tm2.gif"), auto',
  'url("tm3.gif"), auto',
  'url("tm4.gif"), auto',
  'url("tm5.gif"), auto',
  'url("tm6.gif"), auto',
  'url("tm7.gif"), auto',
  'url("tm8.gif"), auto',
  'url("tm9.gif"), auto',
  'url("tm10.gif"), auto',
];
i = 0;
(function cursor() {
  all.style.cursor = cursorArray[i];
  i++;
  if (i == cursorArray.length) {
    i = 0;
  }
  setTimeout(cursor, 50);
})();
