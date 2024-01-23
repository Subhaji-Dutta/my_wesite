/*==================== toggle icon navbar ====================*/
let menuIcon = document.getElementById('menu-icon');
let submit = document.getElementById('submit');
let navbar = document.querySelector('.navbar');


window.onload = function() {
    menuIcon.onclick = tog;
    submit.onclick = CheckInput;
}

var tog = function(){
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle("active");
    
}

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    
/*==================== sticky navbar ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove("active");
    

};


// extra and optional part:

/*==================== scroll reveal ====================*/
ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading, .Projects h2',{origin:'top'});
ScrollReveal().reveal('.home-img, .services-content, .portfolio-box, .contact-form, .skill-content, .pro_ject-box',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .myskills,  .about-img img',{origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content',{origin:'right'});

/*==================== typed js ====================*/

const all = document.body.getElementsByTagName("*");
for (var i = 0;  i < all.length; ++i) {
  all[i].onclick = (event) => event.stopPropagation();
}
var typed = new Typed('#element', {
    strings: ['Frontend Developer',
               'Graphic Designer',
               'Robotics Engineer',
               'AI Developer',
               'Electrical Engineer'],
    typeSpeed: 100,
    backspeed:100,
    backDelay:1000,
    loop:true
  });

/*==================== Email ====================*/

function CheckInput() {
    const items = document.querySelectorAll(".item");

    for(const item of items){
        if(item.value == ""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        item.addEventListener("keyup",()=>{
            if(item.value!=""){
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else{
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }

    if((document.getElementById("name").value != '')&&(document.getElementById("email").value !='')&&(document.getElementById("phone").value !='')&&(document.getElementById("subject").value!='')&&(document.getElementById("message").value!='')){
        sendEmail();
    }
    

    
}



function sendEmail(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "projectblynk99@gmail.com",
    Password : "D071BB587E82DE3616B010D5EED84D1415E7",
    To : 'duttasubhajit956@gmail.com',
    From : "projectblynk99@gmail.com",
    Subject : document.getElementById("subject").value,
    Body : "Name :" + document.getElementById("name").value
    + "<br> Email :"+ document.getElementById("email").value
    + "<br> Phone :"+ document.getElementById("phone").value
    + "<br> Message :"+ document.getElementById("message").value

}).then(
  message => {
    if(message== 'OK'){
        swal("Message Sent"," ","success");
    }else{
        swal("Something Wrong"," ","error");
    }
  }


);
document.getElementById("name").value='';
document.getElementById("email").value='';
document.getElementById("phone").value='';
document.getElementById("subject").value='';
document.getElementById("message").value='';
return false;
}




