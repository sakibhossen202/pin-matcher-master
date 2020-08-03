
        //step 1 for Hiding notify-section first 

        document.querySelector(".notify-section").style.display = "none";

        //step-2 for Generating Random number within 9999 including 9999

        document.querySelector(".generate-btn").addEventListener("click",generatePin)
        function generatePin(){
            document.querySelector(".generatedValue").value = Math.ceil(Math.random()*(9999-1000 + 1 ) + 1000);
            document.querySelector(".generatedValue").style.color ="white"
            document.querySelector(".generatedValue").style.fontSize ="1.5em"
            document.querySelector(".generatedValue").style.textAlign ="center"
            
        }

        //step-3 for Showing input value in input-box

        function inputValueTaker(x){
            const inputShower = document.querySelector(".inputValueShower")
            inputShower.value = inputShower.value + x;
            inputShower.style.color ="white"
            inputShower.style.textAlign ="right"
            inputShower.style.fontSize ="1.5em"

        }
        
        //step-4 for showing notify-section according to the condition

        function submitAction(){
                const assignValue = document.querySelector(".inputValueShower").value

                const generateValue = document.querySelector(".generatedValue").value

                if(assignValue == generateValue){
                   document.querySelector(".notify-section").style.display="block"
                   document.querySelector(".right").style.display= "block"
                   document.querySelector(".wrong").style.display= "none"

                   document.querySelector(".action-left").innerText = 0 + ' try left'

                }

                else{
                    document.querySelector(".notify-section").style.display="block"
                    document.querySelector(".wrong").style.display ="block";
                    document.querySelector(".right").style.display ="none";

                    document.querySelector(".action-left").innerText = 2 + ' try left'
                }

                document.querySelector(".inputValueShower").value = "" 
            
                
                
        }

       
        //step-5 for bonus marks Attaining

        function removeFromLast(){
            
           const currentValue =  document.querySelector(".inputValueShower").value

          const newCurrentValue = currentValue.substring(0, currentValue.length - 1)

          document.querySelector(".inputValueShower").value = newCurrentValue   
        }


        function clearAll(){
            document.querySelector(".inputValueShower").value = null;
            
        }
   
        
        
    