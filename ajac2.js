document.getElementById('button1').addEventListener('click',loadUser);
document.getElementById('button2').addEventListener('click',loadUsers);
document.getElementById('button3').addEventListener('click',loadImages);
function loadUser() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET','do.json',true);
    
    xhr.onload = function () {
   if (this.status == 200 ) {
   var user = JSON.parse(this.responseText);   
  var output = '';
    output += '<ul>' + 
    '<li>ID: '+ user._id+'</li>'+
   '<li>Name: '+ user.name.first+'</li>'+
    '<li>Lastname: '+ user.name.last+'</li>'+
    '</ul>';
    document.getElementById('user').innerHTML= output;
    }
}
  xhr.send();  
};

function loadUsers() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET','jo2.json',true);
    
    xhr.onload = function () {
   if (this.status == 200 ) {
   var users = JSON.parse(this.responseText);   
  var output = '';
  for(var i in users){
    output += '<ul>' + 
    '<li>ID: '+ users[i]._id+'</li>'+
   '<li>Name: '+ users[i].name+'</li>'+
    '<li>Email: '+ users[i].email+'</li>'+
    '</ul>';
  }
    document.getElementById('users').innerHTML= output;
    }
}
  xhr.send();  
};
function loadImages() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET','images.json',true);
    
    xhr.onload = function () {
   if (this.status == 200 ) {
   var images = JSON.parse(this.responseText);   
  var output = '';
  for(var i in images){
    output += '<div>' +    
    '<img src ='+ '"'+ images[i].picture+'"'+'>'+
    '</div>';
  }
    document.getElementById('images').innerHTML= output;
    }
}
  xhr.send();  
}
