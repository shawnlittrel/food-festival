require("bootstrap");
const createEl = require("./domMethods");

$(document).ready(function() {

     function purchaseTicket () {
 
       modalEl.removeChild(modalBodyEl)
       modalEl.removeChild(modalFooterEl)
 
       modalEl.append(createEl("div", {class: "modal-body"},
         createEl("h5", {class: "modal-title"}, 
         `Thanks for requesting a ticket purchase! We will send an email to ${purchaseEmail.value} to complete the order form!`
         ),
       ))
       
     }
     purchaseBtn.addEventListener("click", purchaseTicket);
   });