
var listGroup= document.getElementsByClassName('list-group-item');
console.log(listGroup);
listGroup[2].style.backgroundColor='green';
for(var i=0; i<listGroup.length; i++){
    listGroup[i].style.fontWeight= 'bold';
}

   
