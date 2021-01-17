console.log("app is connected!");
$(".contact-form").on('click', "contact-form-btn", function (e) {
   e.preventDefault();
   console.log("clicked");
   var name = $('.name').val();
   console.log(name);
   var email = $('.email').val();
   console.log(email);
   var message = $('.message').val();
   console.log(message);
   if (email.includes('@')  && email.includes('.') && email.length > 5 ) {
       console.log("valid email");   
   } 
   else if (name == "" || email==""|| message== ""){
       return;
    
   }

});