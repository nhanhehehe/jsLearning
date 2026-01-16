var inputElement = document.querySelector(`input[type="text"]`);
var h2Element = document.querySelector(`h2`)
inputElement.onclick = function() {
   document.querySelector('ul').style.display = `block`;
   document.querySelector('ul').style.cursor = `pointer`;
}

document.querySelector(`ul`).onclick = function (event) {
   h2Element.style.display = "block";
   h2Element.textContent = `đợi anh cuối tuần nha bé iu, anh dẫn bé đi ăn món ${event.target.textContent}`;
}

inputElement.onkeyup = function (event) {
   if (event.which === 13) {
      h2Element.style.display = "block";
      h2Element.textContent = `đợi anh cuối tuần nha bé iu, anh dẫn bé đi ăn món ${event.target.value}`;
   }
}
