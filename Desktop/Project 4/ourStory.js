 
  const btn = document.querySelector("button");
  const post = document.querySelector(".post");
  const widget = document.querySelector(".star-widget");
  const editBtn = document.querySelector(".edit");
  btn.onclick = ()=>{
    widget.style.display = "none";
    post.style.display = "block";
    editBtn.onclick = ()=>{
      widget.style.display = "block";
      post.style.display = "none";
    }
    return false;
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
 




















// var btn = $('#button');

// $(window).scroll(function() {
//   if ($(window).scrollTop() > 300) {
//     btn.addClass('show');
//   } else {
//     btn.removeClass('show');
//   }
// });

// btn.on('click', function(e) {
//   e.preventDefault();
//   $('html, body').animate({scrollTop:0}, '300');
// });

