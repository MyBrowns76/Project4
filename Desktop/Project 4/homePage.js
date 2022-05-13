//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
   mybutton.style.display = "block";
} else {
   mybutton.style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}
 /* paste this line in verbatim */
 window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
 /* customize formbutton below*/     
 formbutton("create", {
   action: "https://formspree.io/f/meqnapap",
   title: "How can we help?",
   fields: [
     { 
       type: "email", 
       label: "Email:", 
       name: "email",
       required: true,
       placeholder: "your@email.com"
     },
     {
       type: "textarea",
       label: "Message:",
       name: "message",
       placeholder: "What's on your mind?",
     },
     { type: "submit" }      
   ],
   styles: {
     title: {
       backgroundColor: "gray"
     },
     button: {
       backgroundColor: "gray"
     }
   }
 });