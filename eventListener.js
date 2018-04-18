const divs = document.querySelectorAll('div');
function stopProp(e){
   e.stopPropagation();
   console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

for(var i = 0; i < divs.length; i++){
  divs[i].addEventListener('click', stopProp);
}