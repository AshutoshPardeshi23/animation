"use strict";


// ttogal

const body = document.querySelector('body');
const toggle = document.getElementById('toggle');
toggle.onclick = function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');
}


// div2 gun
let div2 = document.querySelector('#div2');
let pera = document.querySelector('#pragraf');
let bullet = document.querySelector("#bullet");

let WRD = pera.innerHTML.split("");
let numI = 0;

div2.addEventListener('click', () => {
      bullet.innerHTML = WRD[numI];
      bullet.classList.toggle('goword');
      numI++;
});

// hover
let mMove = document.querySelector('#mousemove');
div2.addEventListener('mousemove', (e) => {
      mMove.style.top  = e.y + 'px';
      mMove.style.left = e.x + 'px';
      mMove.style.padding = '20px 20px';
});


// div_last img
let imgRan = ['../images/pexels-rachel-claire-4577122.jpg', '../images/07c398e4-5274-4557-a66c-61928f635c3a.jpeg', '../images/A man walking on a path in a field at night.jpeg', '../images/b376f4a5-fcd9-4753-8434-49a4c91da97f.jpeg', '../images/Summer Family Fun – Without Breaking your Bank Account -.jpeg', '../images/14bc0dcb-9240-4eb4-b24f-9d37d94f58c4.jpeg', '../images/94322.jpg', '../images/1712420785290.jpg', '../images/1712420785301.jpg', '../images/1712420785310.jpg', '../images/1712420785319.jpg', '../images/1712420785328.jpg', '../images/gettyimages-485184039-612x612.jpg', '../images/images (85).jpeg', '../images/pexels-charles-1851164.jpg', '../images/pexels-vedran-miletić-2313396.jpg'];
let rotNum = ['20deg', '-20deg', '20deg', '-20deg', '20deg', '-20deg', '20deg', '-20deg'];

let randunNum = () => {
      return Math.floor(Math.random() * imgRan.length);
};

const throttleFunction=(func, delay)=>{
      let prev = 0;
      return (...args) => {
          let now = new Date().getTime();
          if(now - prev> delay){
              prev = now;
              return func(...args);
          }
      }
};

let anime = document.querySelector('#anime');

anime.addEventListener("mousemove", throttleFunction((dets) => { 
      let divImg = document.createElement('div');
      document.body.appendChild(divImg);
      divImg.classList.add('divImg2');
      divImg.style.top = dets.clientY + 'px';
      divImg.style.left = dets.clientX + 'px';

      let Img1 = document.createElement('img');
      divImg.appendChild(Img1);
      Img1.setAttribute("src", imgRan[randunNum()]);
      
      setTimeout( () => {
            Img1.style.transform = "translate(0, 0)";
            divImg.style.rotate = '0deg';
            divImg.style.rotate = rotNum[randunNum()];
      }, 0);

      setTimeout( () => {
            Img1.style.transform = "translate(0, 200px)";
            divImg.style.rotate = rotNum[randunNum()];
            Img1.style.opacity = '0';
      }, 1000);

      setTimeout( () => {
            Img1.style.transform = "translate(0, 0)";
            Img1.style.opacity = '0';
      }, 1500);
      
      setTimeout( () => {
            divImg.remove();
      }, 1600);

   }, 200)
);







            
