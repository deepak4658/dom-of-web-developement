
// var listGroup= document.getElementsByClassName('list-group-item');
// console.log(listGroup);
// listGroup[2].style.backgroundColor='green';
// for(var i=0; i<listGroup.length; i++){
//     listGroup[i].style.fontWeight= 'bold';
// }

// var li= document.getElementsByTagName('li');
// console.log(li);
// li[2].style.backgroundColor='green';
// for(var i=0; i<li.length; i++){
//     li[i].style.fontWeight= 'bold';
// }

// USING QUERYSELECTOR//
// var secondItems= document.querySelector
// ('.list-group-item:nth-child(2)');
// secondItems.style.backgroundColor='green';
// console.log(secondItems);

// var thridItems= document.querySelector
// ('.list-group-item:nth-child(3)');
// thridItems.style.visibility='hidden';
// console.log(thridItems);

// USING QUERYSELECTORALL//

 var Items= document.querySelectorAll('.list-group-item');
 Items[1].style.color = "green";
 console.log(Items);

 var odd= document.querySelectorAll
 ('li:nth-child(odd)');
 var even= document.querySelectorAll
 ('li:nth-child(even)');
 for(var i=0; i<odd.length; i++){
    odd[i].style.backgroundColor='green';
    even[i].style.backgroundColor='red';
 }

 //console.log(odd);



   

   
