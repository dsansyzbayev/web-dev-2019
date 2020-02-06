var nodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < nodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  nodelist[i].appendChild(span);
}

var list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
}, false);


function newTask() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("div-input").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Добавьте задание!");
  } else {
    document.getElementById("div-list").appendChild(li);
  }
  document.getElementById("div-input").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

var curList = document.getElementById("div-list");
curList.addEventListener("click", function(e){
    if(e.target.className === 'checked'){
      let li = document.createElement("li");
      li.innerHTML = e.target.innerHTML;
      li.classList.toggle('checked');
      document.getElementById("checked-list").appendChild(li);
      e.target.style.display = "none";
      for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }

    }
  }
});



var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}