const form = document.getElementById('form');
const password = document.getElementById('password');
const username = document.getElementById('username');
const conformpassword = document.getElementById('password2');
const email = document.getElementById('email');
 
 form.addEventListener('submit', e =>{
      e.preventDefault();
      checkInput();
 });

    function checkInput(){
           
        const usernamevalue = username.value.trim();
        const passwordvalue = password.value.trim();
        const emailvalue = email.value.trim();
        const password2value = password2.value.trim();
          

        if(usernamevalue ===''){
            seterror(username,'username can not be blank')
        }
        else{
            setsuccess(username);
        }
        if(emailvalue ===''){
            seterror(email, 'email can not be blank')
        }
         else if(!isemail(emailvalue)){

            seterror(email,'not a valid email');

         }
         else{
             setsuccess(email);
         }

         if(passwordvalue===''){
              seterror(password, 'passsword can not be blank')
        }
         else{
              setsuccess(password);
         }
          

          if(password2value ==='')
          {
            seterror(password2value,'password2 can not be blank')
          }
            else if(passwordvalue  !== password2value){
              seterror(password2,' password does not match')
          }

          
          else{
             setsuccess(password2);

          }
        

            function  seterror (input,message){
                  
                 const  formcontrol = input.parentElement;
                 const  small  =formcontrol.querySelector('small');
                 formcontrol.className = 'form-control error';
                 small.innerText = message;
            } 

                function setsuccess(input){
                     
                     const formcontrol = input.parentElement;
                     formcontrol.className = 'form-control success';
                }
        
 
                function isemail(email) {
              
                    return  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

                      
                    
                    
                }
                  
               

            }
         
         
         

    