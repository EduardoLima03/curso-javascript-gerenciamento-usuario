var name = document.querySelector("#exampleInputName");
var genderM = document.querySelector('#form-user-create [name = gender]:checked');
var birth = document.querySelector('#exampleInputBirth');
var country = document.querySelector('#exampleInputCountry');
var email = document.querySelector('#exampleInputEmail1');
var password = document.querySelector('#exampleInputPassword1');
var photo = document.querySelector('#exampleInputFile');
var admin = document.querySelector('#exampleInputAdmin');


var fields = document.querySelectorAll("#form-user-create [name]");

var user ={};


console.log(user);

//api de browser
//SPA - Single Page Application, aplicação de pagina unica


document.getElementById("form-user-create").addEventListener("submit", function(event){
    
    event.preventDefault();

    fields.forEach(function(field, index){

        if(field.name == "gender"){
            user[field.name] = field.value;
    
        }else{
            user[field.name] = field.value;
        }
    
        //console.log(field.name);
    
    });

});