window.onload=function(){

if (localStorage["height"] && localStorage["width"]) {
	ix = parseInt(localStorage["width"]);
	iy = parseInt(localStorage["height"]);
	console.log(iy);
	console.log(ix);
} else {
	iy = 6;
	ix = 6;
}

function init(x, y) {
	for (var i = 0; i < y; i++) {
	  var row = document.querySelector("table").insertRow(-1);
	  for (var j = 0; j < x; j++) {
		var letter = String.fromCharCode("A".charCodeAt(0) + j - 1);
		row.insertCell(-1).innerHTML = i && j ? "<input id='" + letter + i + "'/>" : i || letter;
	  }
	}
}

init(iy, ix);

function change(dy, dx) {
	document.querySelector("table").innerHTML = "";
	ix = dx + ix;
	iy = dy + iy;
	localStorage["height"] = iy;
	localStorage["width"] = ix;
	location.reload();
}

document.getElementById("+y").addEventListener("click", function() { change(0, 1) });
document.getElementById("-y").addEventListener("click", function() { change(0, -1) });
document.getElementById("+x").addEventListener("click", function() { change(1, 0) });
document.getElementById("-x").addEventListener("click", function() { change(-1, 0) });

var DATA = {},
  INPUTS = [].slice.call(document.querySelectorAll("input"));
INPUTS.forEach(function(elm) {
  elm.onfocus = function(e) {
    e.target.value = localStorage[e.target.id] || "";
  };
  elm.onblur = function(e) {
    localStorage[e.target.id] = e.target.value;
    computeAll();
  };
  var getter = function() {
    var value = localStorage[elm.id] || "";
    if (value.charAt(0) == "=") {
      with(DATA) return eval(value.substring(1));
    } else {
      return isNaN(parseFloat(value)) ? value : parseFloat(value);
    }
  };
  Object.defineProperty(DATA, elm.id, {
    get: getter
  });
  Object.defineProperty(DATA, elm.id.toLowerCase(), {
    get: getter
  });
});

function populate() {
  INPUTS.forEach(function(elm) {
    try {
      elm.value = DATA[elm.id];
    } catch (e) {}
  });
}

(window.computeAll = function populate() {
  INPUTS.forEach(function(elm) {
    try {
      elm.value = DATA[elm.id];
    } catch (e) {}
  });
})();

}