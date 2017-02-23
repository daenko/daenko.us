function validate()
      {
      
         if (!(/\S/.test(document.myForm.first.value)))
         {
            alert( "Please provide your first name!");
            document.myForm.first.focus();
            document.myForm.first.select();
            return false;
         }         
         if (!(/\S/.test(document.myForm.last.value)))
         {
            alert( "Please provide your last name!");
            document.myForm.last.focus();
            return false;
         }
          
         if (!(/\S/.test(document.myForm.address.value)))
         {
            alert( "Please provide your address!");
            document.myForm.address.focus();
            return false;
         }  
        if (!(/\S/.test(document.myForm.city.value)))
         {
            alert( "Please provide your city!");
            document.myForm.city.focus() ;
            return false;
         }
         if (!(/\S/.test(document.myForm.state.value)))
         {
            alert( "Please provide your state!");
            document.myForm.state.focus() ;
            return false;
         }
        if (!(/\S/.test(document.myForm.email.value)))
         {
            alert( "Please provide your email!");
            document.myForm.email.focus() ;
            return false;
         }        
         if (!(/^[0-9]{5}$|^[0-9]{9}$/.test(document.myForm.zip.value)))
         {
            alert( "Please provide a zip in the format #####." );
            document.myForm.zip.focus() ;
            return false;
         }
         if (!(/^[(][0-9]{3}[)][0-9]{3}-[0-9]{4}$/.test(document.myForm.phone.value)))
         {
            alert( "Please provide a phone in the format (###)###-####." );
            document.myForm.phone.focus() ;
            return false;
         }
         if (!(/^[0-9]{16}$/.test(document.myForm.ccnum.value)))
         {
            alert( "Please provide a credit card number in the format of 16 digital numbers." );
            document.myForm.ccnum.focus() ;
            return false;
         }
         if (!(/^(01|02|03|04|05|06|07|08|09|10|11|12)\/(20)[0-9]{2}$/.test(document.myForm.ccexpire.value)))
         {
            alert( "Please provide a credit card expiration date in the format mm/yyyy." );
            document.myForm.ccexpire.focus() ;
            return false;
         }  
         var str = document.myForm.ccexpire.value;
         var m = str.slice(0,2);
         if (m[0]=='0'){
             m = m.slice(1,2)
         }
         var y = str.slice(3,7);
        var today = new Date();
        var month = today.getMonth();
        var year = today.getFullYear();
        if (year >= y && (month+1)>= m)  {
            alert("Credit card date is expired");
            document.myForm.ccexpire.focus();   
            return false;
    }
         return true;
}

function calculate_cost(num,price,cost) {
     var number = parseInt(document.myForm[num].value);
     if (document.myForm[num].value.trim().length == 0) {
                document.myForm[cost].value = "";
     } else if (number >= 0) {
                document.myForm[cost].value = number * price;
     } else {
        alert("Please enter number of classes");
     }    
   update_table();
} 
function update_table() {
    var subt1 = 0;
    if (parseInt(document.myForm.cost1.value) >= 0) {
                subt1 +=parseInt(document.myForm.cost1.value);
            }
    if (parseInt(document.myForm.cost2.value) >= 0) {
                subt1 +=parseInt(document.myForm.cost2.value);
            }
    document.myForm.subtotal1.value = subt1;
    var subt2 = 0;
    if (parseInt(document.myForm.cost3.value) >= 0) {
                subt2 +=parseInt(document.myForm.cost3.value);
            }
    if (parseInt(document.myForm.cost4.value) >= 0) {
                subt2 +=parseInt(document.myForm.cost4.value);
            }
    document.myForm.subtotal2.value = subt2;
    var subt3 = 0;
    if (parseInt(document.myForm.cost5.value) >= 0) {
                subt3 +=parseInt(document.myForm.cost5.value);
            }
    if (parseInt(document.myForm.cost6.value) >= 0) {
                subt3 +=parseInt(document.myForm.cost6.value);
            }
    document.myForm.subtotal3.value = subt3;

    var total_price = subt1+subt2+subt3;
    var price_with_tax = total_price*0.085 + total_price;    
    if (subt1 != 0 || subt2 != 0 || subt3 != 0) { 
        var price_final = price_with_tax + 10;}
    else {
            price_final = 0;
    }
   document.myForm.total.value = total_price;
   document.myForm.total_with_tax.value = price_with_tax;
   document.myForm.final.value = price_final; 
}
function clear_all() {
    var frm_elements = myForm.elements;    
    for(i=0; i<frm_elements.length; i++)
        {
        field_type = frm_elements[i].type.toLowerCase(); 
         switch (field_type)
            {
            case "text": 
            case "number": 
            case "email":     
            frm_elements[i].value = "";            
            break;
            default:
            break;
            }
        }
}
