document.getElementById('button').addEventListener
('click',loadText);
// ВЫВОД В КОНСОЛЬ!!!!!!!!!!!!!!!!!!!!!!!!
// function loadText(){
// console.log("button clicked");
// }
// ОБРАЩЕНИЕ К ТЕКСТОВОМУ ФАЙЛУ
 function loadText(){
 var xhr = new XMLHttpRequest();
 //open type request url async
 xhr.open('GET', 'https://raw.githubusercontent.com/JavaScriptNoob/public-json/master/jsonfor%20test.json77',true);
//  xhr.onload = function(){
//      if (this.status == 200) {
//          console.log(this.responseText)
//         }
//     }
console.log('READYSTATE: ', xhr.readyState);
    // SEND REQUEST
    xhr.onreadystatechange = function () {console.log('READYSTATE: ', xhr.readyState);
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('text').innerHTML = this.responseText;
       console.log(this.responseText);
     }else if(this.status = 404){
         document.getElementById('text').innerHTML = 'Not Founnd';
     }
        
    }
    xhr.send();
 }