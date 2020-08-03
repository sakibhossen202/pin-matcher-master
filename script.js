
        //step 1 for Hiding notify section first 

        document.querySelector(".notify-section").style.display = "none";

        //step-2 for Generating Random number within 9999 include 9999

        document.querySelector(".generate-btn").addEventListener("click",generatePin)
        function generatePin(){
            document.querySelector(".form-control").value = Math.ceil(Math.random()*(9999-1000 + 1 ) + 1000);
            document.querySelector(".form-control").style.color ="white"
            
        }

        //step-3 for Showing input value in input-box

        function inputValueTaker(x){
            const inputAmount = document.querySelector(".inputValueShower")
            inputAmount.value = inputAmount.value + x
            document.querySelector(".inputValueShower").style.color ="white"
            document.querySelector(".inputValueShower").style.textAlign ="right"

        }
        
        //step-4 for showing notify-section according to the condition
s
        function submitAction(){
                const assignValue = document.querySelector(".inputValueShower").value

                const generateValue = document.querySelector(".generatedValue").value

                if(assignValue == generateValue){
                   document.querySelector(".notify-section").style.display="block"
                   document.querySelector(".right").style.display= "block"
                   document.querySelector(".wrong").style.display= "none"

                }

                else{
                    document.querySelector(".notify-section .wrong").style.display="block"
                    document.querySelector(".wrong").style.display ="block";
                    document.querySelector(".right").style.display ="none";
                }

                document.querySelector(".inputValueShower").value = "" 
            
                
                //part 6

                document.querySelector(".action-left").innerText = 0 + ' try left'

        }

       
        //step-5 for bonus mark Attaining

        function removeFromLast(){
            
           const currentValue =  document.querySelector(".inputValueShower").value

          const newCurrentValue = currentValue.substring(0, currentValue.length - 1)

          document.querySelector(".inputValueShower").value = newCurrentValue   
        }


        function clearAll(){
            document.querySelector(".inputValueShower").value = null;
            
        }
        
    