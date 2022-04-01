var info=JSON.parse(localStorage.getItem("Database"));
  var i=0;

    function myLogin(){
       if(input1.value==""||input2.value==""){
          alert("incomplete details");
          return;
      }
    for(i=0; i<=info.length; i++){ 
      
       
      if(input1.value==info[i].email && input2.value!=info[i].password){
        show="incorrect password";
        break;
      }
      else if(input1.value!=info[i].email && input2.value!=info[i].password){
        show="invalid login";
        
      }
       else {
        show="member";
         window.location="Dashboard.html"
        
       document.getElementById("name").innerHTML = "you";
        break;
      }
    }
   alert(show);
    }

// (input1.value==info[i].email && input2.value==info[i].password)

    