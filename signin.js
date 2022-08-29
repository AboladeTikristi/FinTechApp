// To check if the database exit before logging in
 if (JSON.parse(localStorage.getItem("Database"))){
  var info=JSON.parse(localStorage.getItem("Database"));
  
 }
 else{
    var info=[]
 }

//  Variable that deals with check number of logins without success
  var a=3;
  var i;
  var second=[];
   alert(a)
  function myLogin(){
       // Interval for checking the time of logins  
       if (a==0) { 
       
        var s=11;
       input1.disabled=true;
       input2.disabled=true;
       document.getElementById("but").disabled=true;
       fade.style.display="block";
     
       alert("you have logged in multiple times, you have to wait for 10 seconds to try again");
          
       var get= setInterval(function(){
         s--;
        
         fade.innerHTML=s;
         
          if (s<=0) {
           clearInterval(get);
         }
       }, 1000)
            
               if (fade.style.display="block") {
                   
                   a=3;
               var got= setInterval(function(){
                
                 input1.disabled=false;
                 input2.disabled=false;
                 document.getElementById("but").disabled=false;
                 
                 fade.style.display=fade.style.display.replace("block","none");
                  
               }, 11000)
            
           
     }
         }
     console.log(info)
       if(input1.value==""||input2.value==""){
          alert("incomplete details");
          return;
      }
      else{
      for(i=0; i<=info.length; i++){
        console.log(info[i].password)
      if(input2.value!=info[i].password && input1.value!=info[i].email ){
         a=a-1;
        show="incorrect password";
        break;
        
      }
      else if(input1.value!=info[i].email && input2.value!=info[i].password){
        show="invalid login";
        break;
        
      }
       else if(input1.value===info[i].email && input2.value===info[i].password)  {
        let dets={};
        dets.accountNo=info[i].accountNo;
        dets.email=input1.value;
        dets.password=input2.value;
        dets.username=info[i].username;
        second.push(dets);
        localStorage.setItem("Database2",JSON.stringify(second));
        dets=JSON.parse(localStorage.getItem("Database2"));
        
        show="member";
        window.location="Dashboard.html"
      }
    
   
    }
  
   alert(show);
  }
    }


    