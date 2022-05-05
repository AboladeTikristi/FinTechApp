  var info=JSON.parse(localStorage.getItem("Database"));
  
  var a=3;
  var i;
  var second=[];
  // var third=[];
   //var third=JSON.parse(localStorage.getItem("Database3"));
    function myLogin(){
     
    
       if(input1.value==""||input2.value==""){
          alert("incomplete details");
          return;
      }
    for(i=0; i<=info.length; i++){ 
       
      if(input1.value==info[i].email && input2.value!=info[i].password){
        
         a=a-1;
         
        show="incorrect password";
        //alert("here");
       
      }
      else if(input1.value!=info[i].email && input2.value!=info[i].password){
        //alert("h");
        
        show="invalid login";alert(i);
       //break;
        
      }
       else {
        let dets={};
        dets.accountNo=info[i].accountNo;
        dets.email=input1.value;
        dets.password=input2.value;
        dets.username=info[i].username;
        console.log(dets);
        second.push(dets);
        localStorage.setItem("Database2",JSON.stringify(second));
        dets=JSON.parse(localStorage.getItem("Database2"));
        
        show="member";
         window.location="Dashboard.html"
        
       document.getElementById("name").innerHTML = "you";
        break;
      }
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
   
    }
   alert(show);
    }

// (input1.value==info[i].email && input2.value==info[i].password)

    