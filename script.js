function openSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}

function closeSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}

window.addEventListener("scroll", function() {
  const navbar = document.querySelector("navbar");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

/*FILTER*/
const btn1 = document.getElementById('myButton1');
btn1.addEventListener('click', function before(){
	document.getElementById('myImage')
	.src="img/2012231413034.jpg";
	document.getElementById('message')
	.innerHTML="IRM CARDIO";
  document.getElementById('message2')
	.innerHTML=`Cardiac magnetic resonance is known as an accurate method of diagnosing cardiac pathologies.
  The absence of irradiation of the body, the use of the contrast substance without severe 
  side effects and amazing visualization possibilities place it as the method of choice and
  the "gold standard" in the diagnosis of most cardio conditions. <br> <br>
  
  The Siemens Magnetom Skyra 3T system is a state-of-the-art system, where the latest software
   with conceptually new technologies are implemented, which ensures a high precision of the 
   investigation. All this being closely correlated with competent doctors and with a high 
   degree of specialization, who will give the answers accurately.`;
  document.getElementById('message3')
	.innerHTML="MRI-3T CARDIO";
});

const btn2 = document.getElementById('myButton2');
btn2.addEventListener('click', function after(){
	document.getElementById('myImage')
	.src="img/20122314085227.jpg";
	document.getElementById('message')
	.innerHTML="COMPUTED TOMOGRAPHY";
  document.getElementById('message2')
	.innerHTML=`Imaging investigations are essential in the monitoring of people infected or
   who have endured the infection with the Coronavirus. The main contribution of the imaging
    radiologists at the German Diagnostic Center is to provide an exact answer to each 
    investigated patient, and the performance of the Computed Tomography machine, Siemens
     Somatom Definition Age 384 slice, provides ideal accuracy to each investigated segment
      in smaller segments of a millimeter. Thus, at the German Diagnostic Center, we provide
       you with the best performing Computed Pulmonary Tomography in Moldova!`;
  document.getElementById('message3')
	.innerHTML="384-slice CT of thorax and mediastinum without contrast";
});

const btn3 = document.getElementById('myButton3');
btn3.addEventListener('click', function after(){
	document.getElementById('myImage')
	.src="img/20122314074846.jpg";
	document.getElementById('message')
	.innerHTML="HEALTH CHECK";
  document.getElementById('message2')
	.innerHTML=`The German Diagnostic Center recognizes the importance of promoting a healthy
   lifestyle and offers you a complex medical examination program for healthy people, called
    CDG HEALTH CHECK, in order to detect diseases that do not yet show signs of their 
    existence, i.e. early stages.
  <br> <br>
  The Health Check program takes into account your precious time and offers you the opportunity
   to pass all the examinations in a short time, in the same medical institution, with the release
    of the examination results and the necessary recommendations.`;
   document.getElementById('message3')
	.innerHTML=`Complex cardiological examination`;
});

const btn4 = document.getElementById('myButton4');
btn4.addEventListener('click', function after(){
	document.getElementById('myImage')
	.src="img/20122314060798.jpg";
	document.getElementById('message')
	.innerHTML="LABORATORY";
  document.getElementById('message2')
	.innerHTML=`At the German Diagnostic Center, every patient has access to complete, professional
   medical services at the highest standards, based on state-of-the-art technological support, 
   in impeccable conditions of safety and comfort. The diagnostic laboratory is equipped with
    state-of-the-art equipment that allows performing a complete range of medical tests, in a
     short time. The high quality and precision of the analyzes is certified according to 
     European standards.`;
   document.getElementById('message3')
	.innerHTML=`Cervico-vaginal cytology in liquid medium PAP test Babes – Papanicolaou`;
});

const btn5 = document.getElementById('myButton5');
btn5.addEventListener('click', function after(){
	document.getElementById('myImage')
	.src="img/20122313592032.jpg";
	document.getElementById('message')
	.innerHTML="MRI-3T";
  document.getElementById('message2')
	.innerHTML=`The accuracy of the images displayed by the SIEMENS MAGNETOM SKYRA 3T device allows
   the detection and diagnosis of a large number of pathologies of the central nervous system and
    internal organs. Thanks to advanced software, some fine lesions can be detected and more 
    complicated pathologies prevented, which, subject to timely treatment, offer a chance for 
    a healthy life.`;
   document.getElementById('message3')
	.innerHTML=`Brain 3T Magnetic Resonance – standard protocol

  <br> <br> 3T Magnetic Resonance Cerebral Spectroscopy`;
});

/*REVEAL*/
window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}

/*ANIMATION*/
let sections = document.querySelectorAll('main');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;

    if(top >= offset && top < offset + height){
      sec.classList.add('show-animate');
    }

    else {
      sec.classList.remove('show-animate');
    }
  });
}



/*COUNTER*/
var nr1 = setInterval(counter1, 8);
var nr2 = setInterval(counter2, 8);

let count1 = 1;
let count2 = 1;

function counter1(){
  count1++;
  document.querySelector("#number1").innerHTML = count1;
  if (count1 == 500) {
    clearInterval(nr1);
  }
}

function counter2(){
  count2++;
  document.querySelector("#number3").innerHTML = count2;
  if (count2 == 400) {
    clearInterval(nr2);
  }
}

/*PARTNERS*/
const copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

/*SLIDER WITH STOP*/
const sliderWrapper = document.querySelector('.slider-wrapper');
const sliderItems = document.querySelectorAll('.slider-wrapper > *');
const imageLength = sliderItems.length;
const perView = 3;
let totalScroll = 0;
const delay = 5000;

sliderWrapper.style.setProperty('--per-view', perView);
for (let i = 0; i < perView; i++){
  sliderWrapper.insertAdjacentHTML('beforeend', sliderItems[i].outerHTML);
}

let autoScroll = setInterval(scrolling, delay);

function scrolling() {
  totalScroll++;
  if(totalScroll == imageLength + 1) {
    totalScroll = 1;
    sliderWrapper.style.transition = '.3s';
    sliderWrapper.style.left = '0';
    autoScroll = setInterval(scrolling, 5000);
  }
  const widthEl = document.querySelector('.slider-wrapper > :first-child').offsetWidth + 24;
  sliderWrapper.style.left = `-${totalScroll * widthEl}px`;
  sliderWrapper.style.transition = '.3s';
}

/*SLIDER*/
const teamWrapper = document.querySelector('.team-wrapper');
const teamItems = document.querySelectorAll('.team-wrapper > *');
const imgLength = teamItems.length;
const view = 3;
let totScroll = 0;
const del = 5000;

teamWrapper.style.setProperty('--view', view);
for (let i = 0; i < view; i++){
  teamWrapper.insertAdjacentHTML('beforeend', teamItems[i].outerHTML);
}

let auto = setInterval(scrolling1, del);

function scrolling1() {
  totScroll++;
  if(totScroll == imgLength + 1) {
    totScroll = 1;
    teamWrapper.style.transition = '.3s';
    teamWrapper.style.left = '0';
    auto = setInterval(scrolling1, 5000);
  }
  const widthE = document.querySelector('.team-wrapper > :first-child').offsetWidth + 24;
  teamWrapper.style.left = `-${totScroll * widthE}px`;
  teamWrapper.style.transition = '.3s';
}


/*FAQ*/
const accordionBtns = document.querySelectorAll('.accordion-btn');

accordionBtns.forEach(btn => {
  btn.addEventListener('click', function () {
    this.classList.toggle('active');
    const accordionDescrib = this.nextElementSibling;
    const plusIcon = this.querySelector('.fa-circle-plus');
    const minusIcon = this.querySelector('.fa-circle-minus');

    if(accordionDescrib.style.maxHeight){
      accordionDescrib.style.maxHeight = null;
      plusIcon.style.display = 'block';
      minusIcon.style.display = 'none';
    } else {
      accordionDescrib.style.maxHeight = accordionDescrib.scrollHeight + 'px';
      plusIcon.style.display = 'none';
      minusIcon.style.display = 'block';
    }
  });
});

/*LINKS*/
function scrollToElement(elementSelector, instance = 0) {
  // Select all elements that match the given selector
  const elements = document.querySelectorAll(elementSelector);
  // Check if there are elements matching the selector and if the requested instance exists
  if (elements.length > instance) {
      // Scroll to the specified instance of the element
      elements[instance].scrollIntoView({ behavior: 'smooth' });
  }
}


const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");
const link5 = document.getElementById("link5");
const link6 = document.getElementById("link6");

const link7 = document.getElementById("link7");
const link8 = document.getElementById("link8");
const link9 = document.getElementById("link9");
const link10 = document.getElementById("link10");
const link11 = document.getElementById("link11");

link1.addEventListener('click', () => {
  scrollToElement('.about');
});

link2.addEventListener('click', () => {
  scrollToElement('.service');
});

link3.addEventListener('click', () => {
  scrollToElement('.benefits');
});

link4.addEventListener('click', () => {
  scrollToElement('.team');
});

link5.addEventListener('click', () => {
  scrollToElement('.appointment');
});

link6.addEventListener('click', () => {
  scrollToElement('.about');
});



link7.addEventListener('click', () => {
  scrollToElement('.about');
});

link8.addEventListener('click', () => {
  scrollToElement('.service');
});

link9.addEventListener('click', () => {
  scrollToElement('.benefits');
});

link10.addEventListener('click', () => {
  scrollToElement('.team');
});

link11.addEventListener('click', () => {
  scrollToElement('.appointment');
});
