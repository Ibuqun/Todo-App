// //LIST CONTROLLER

// const listController = (function (){



// }) ();

// //UI CONTROLLER
// const UIController = (function (){
    
//     return {
//         getInput : function () {
//             return document.querySelector(".add__description").value;
//         } , 


//         addListItem: function (input) {
//             let html;
//             html = "<li></li>" ;
//             newHtml = html.replace('', input);

//             document.querySelector('.myUL').insertAdjacentHTML('beforeend', newHtml);
//         }
             
        

     

// }
// }) ();

// //GLOBAL APP CONTROLLER
// let globe = (function  (listCtrl, UICtrl) {
//     ctrlAddItem =  () => {

//         let read = UIController.getInput();
//         UIController.addListItem(read);
// }

//     document.querySelector(".addBtn").addEventListener('click', ctrlAddItem);
//     document.addEventListener('keypress', function (event){
//         if (event.keyCode === 13 || event.which === 13){
//             ctrlAddItem();
//         }
//     });  
    


// })(listController, UIController);

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

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

