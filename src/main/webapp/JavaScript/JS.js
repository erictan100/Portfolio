function validate() {
      	 var nameID = document.ContactMe.name.value;
		 var emailID = document.ContactMe.email.value;
		 var messageID = document.ContactMe.message.value;
         atpos = emailID.indexOf("@");
         dotpos = emailID.lastIndexOf(".");
         
         if(nameID == ""){
            alert( "Please provide your name!" );
            document.ContactMe.name.focus();
            return false;
         }
		 if(nameID<10){
            alert( "Please provide valid name!" );
            document.ContactMe.name.focus();
            return false;
         }

         if(emailID == ""){
            alert("Please provide your Email!");
            document.ContactMe.email.focus();
            return false;
         }
		 if (atpos < 1 || ( dotpos - atpos < 2 )) {
            alert("Please enter correct email ID")
            document.ContactMe.email.focus() ;
            return false;
         }
		 
         if(messageID == ""){
            alert("Please provide your message!");
            document.ContactMe.message.focus();
            return false;
         }
		 if(messageID <50){
            alert("Please provide more message!");
            document.ContactMe.message.focus();
            return false;
         }
      }