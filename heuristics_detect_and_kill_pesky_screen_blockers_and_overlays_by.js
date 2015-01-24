(function(){
  var style;

  Array.prototype.forEach.call(document.getElementsByTagName('div'), function(element) {
    style = window.getComputedStyle(element);
    if ("fixed" === style.position && (Number.parseInt(style.zIndex, 10) > 1000) || ("100%" === style.width && "100%" === style.height)) {

      element.parentNode.removeChild(element);
      delete element;
    }
  });
}());
