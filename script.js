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
    
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove("active");
};

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading, .Projects h2',{origin:'top'});
ScrollReveal().reveal('.home-img, .services-content, .portfolio-box, .contact-form, .skill-content, .pro_ject-box, .tabcontent',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .myskills,  .about-img img',{origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content, .tab',{origin:'right'});

const all = document.body.getElementsByTagName("*");
for (var i = 0;  i < all.length; ++i) {
  all[i].onclick = (event) => event.stopPropagation();
}

var typed = new Typed('#element', {
    strings: ['Website Developer',
               'web APP Developer',
               'QA Engineer',
               'UI/UX designer',
               'Graphic Designer'],
    typeSpeed: 100,
    backspeed:100,
    backDelay:1000,
    loop:true
});

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

document.querySelectorAll(".tab p").forEach(tab => {
    tab.addEventListener("click", function () {
        document.querySelectorAll(".tab p").forEach(t => t.classList.remove("active"));
        document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
        this.classList.add("active");
        const tabName = this.getAttribute("data-tab");
        document.getElementById(tabName).classList.add("active");
    });
});

function sendEmail(){
    let parms ={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        contact: document.getElementById("phone").value,
        subject:  document.getElementById("subject").value,
        message: document.getElementById("message").value
    }

  emailjs.send("service_55shx79",
    "template_vp18jdo",
    parms
    ).then(
        message => {
            if(message.status=== 200 && message.text==='OK'){
                swal("Message Sent"," ","success");
                document.getElementById("name").value='';
                document.getElementById("email").value='';
                document.getElementById("phone").value='';
                document.getElementById("subject").value='';
                document.getElementById("message").value='';
            }else{
                swal("Something Wrong"," ","error");
            }
        }
    );
    
}