var mobileNav = document.getElementById('fa-bars');
var mobileMenu = document.getElementById('hide-mobile-menu');
var barsBtn = document.getElementById('fa-bars');
var closeBtn = document.getElementById('fa-close');
var menuElements = document.getElementsByClassName('mobile-menu-li');
var navBar = document.getElementById('nav-bar');
var navBarA = document.getElementsByClassName('nav-li-a');
var navBarMobile = document.getElementById('fa-bars');
var percentBar = document.getElementsByClassName('meter-percent');
var experienceMeter = document.getElementsByClassName('experience-meter');
var projectOne = document.getElementById('project-1');
var projectTwo = document.getElementById('project-2');
var projectThree = document.getElementById('project-3');
var projectFour = document.getElementById('project-4');
var projectFive = document.getElementById('project-5');
var projectSix = document.getElementById('project-6');
var projects = document.getElementsByClassName('projects');
var hiddenMenu = document.getElementsByClassName('hidden-menu');
var hiddenMenuP = document.getElementsByClassName('hidden-menu-p');
var hiddenMenuBtn = document.getElementsByClassName('hidden-menu-btn');
var reviewsCont = document.getElementsByClassName('reviews-cont');
var reviewsMainCount = document.getElementsByClassName('small-cont');
var imgCont = document.getElementsByClassName('img-cont');
var imgsCont = document.getElementsByClassName('imgs-cont');
var firstPage = document.getElementsByClassName('first-page');
var firstPageImg = document.getElementsByClassName('first-page-img');
var navA = document.getElementsByClassName('nav-li-a');

// navBarA.forEach(elem => elem.addEventListener('click', smoothScroll));

function smoothScroll(event){
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    window.scrollTo({
        top: targetId==='#' ? 0 : document.querySelector(targetId).offsetTop,
        behavior: 'smooth'
    });
}
/*
function test(){
    
    var targetHref = navBarA[2].getAttribute('href');
    window.scrollTo({
        top: targetHref==="#" ? 0 : document.querySelector(targetHref).offsetTop,
        behavior: 'smooth'
    });
}
*/

navA[0].addEventListener('click', smoothScroll);
navA[1].addEventListener('click', smoothScroll);
navA[2].addEventListener('click', smoothScroll);
navA[3].addEventListener('click', smoothScroll);
navA[4].addEventListener('click', smoothScroll);
navA[5].addEventListener('click', smoothScroll);
navA[6].addEventListener('click', smoothScroll);

/*
for(var q = 0; q < navA.length; q++){
    navA[q].addEventListener('click', smoothScroll)
};

function smoothScroll(event){
    event.preventDefault();

    const targetId = event.currentTarget(targetId).getAttribute("href");

    window.scrollTo({
        top: document.querySelector(targetId).offsetTop,
        behavior: 'smooth',
    });
}
*/

barsBtn.addEventListener('click', ()=>{

    mobileMenu.classList.add('menu-anime');
        
        menuElements[0].style.top = "30%";
        menuElements[0].style.transform = "translateY(-30%)";
        menuElements[0].style.transition = "1000ms";
        menuElements[0].style.transitionDelay = "1s";

        menuElements[1].style.top = "30%";
        menuElements[1].style.transform = "translateY(-30%)";
        menuElements[1].style.transition = "1000ms";
        menuElements[1].style.transitionDelay = "1.2s";

        menuElements[2].style.top = "30%";
        menuElements[2].style.transform = "translateY(-30%)";
        menuElements[2].style.transition = "1000ms";
        menuElements[2].style.transitionDelay = "1.4s";

        menuElements[3].style.top = "30%";
        menuElements[3].style.transform = "translateY(-30%)";
        menuElements[3].style.transition = "1000ms";
        menuElements[3].style.transitionDelay = "1.6s";

        menuElements[4].style.top = "30%";
        menuElements[4].style.transform = "translateY(-30%)";
        menuElements[4].style.transition = "1000ms";
        menuElements[4].style.transitionDelay = "1.8s";

        menuElements[5].style.top = "30%";
        menuElements[5].style.transform = "translateY(-30%)";
        menuElements[5].style.transition = "1000ms";
        menuElements[5].style.transitionDelay = "2s";

        menuElements[6].style.top = "30%";
        menuElements[6].style.transform = "translateY(-30%)";
        menuElements[6].style.transition = "1000ms";
        menuElements[6].style.transitionDelay = "2.2s";
});

closeBtn.addEventListener('click', ()=>{

    mobileMenu.classList.remove('menu-anime');

    menuElements[0].style.top = "0%";
    menuElements[0].style.transform = "translateY(-0%)";
    menuElements[0].style.transition = "none";

    menuElements[1].style.top = "0%";
    menuElements[1].style.transform = "translateY(-0%)";
    menuElements[1].style.transition = "none";

    menuElements[2].style.top = "0%";
    menuElements[2].style.transform = "translateY(-0%)";
    menuElements[2].style.transition = "none";

    menuElements[3].style.top = "0%";
    menuElements[3].style.transform = "translateY(-0%)";
    menuElements[3].style.transition = "none";

    menuElements[4].style.top = "0%";
    menuElements[4].style.transform = "translateY(-0%)";
    menuElements[4].style.transition = "none";

    menuElements[5].style.top = "0%";
    menuElements[5].style.transform = "translateY(-0%)";
    menuElements[5].style.transition = "none";

    menuElements[6].style.top = "0%";
    menuElements[6].style.transform = "translateY(-0%)";
    menuElements[6].style.transition = "none";
});

function navScroll(){
    window.addEventListener('scroll', ()=>{
        if(window.scrollY === 0 || window.scrollY < 690){
            navA[0].style.border = "2px solid cyan";
        } else{
            navA[0].style.border = "2px solid violet";
        }

        if(window.scrollY === 757 || window.scrollY > 690 && window.scrollY < 1720){
            navA[1].style.border = "2px solid cyan";
        } else{
            navA[1].style.border = "2px solid violet";
        }
        if(window.scrollY === 1720 || window.scrollY > 1720 && window.scrollY < 2495){
            navA[2].style.border = "2px solid cyan";
        } else{
            navA[2].style.border = "2px solid violet";
        }
        if(window.scrollY === 2965 || window.scrollY > 2495 && window.scrollY < 2965){
            navA[3].style.border = "2px solid cyan";
        } else{
            navA[3].style.border = "2px solid violet";
        }
        if(window.scrollY === 2965 || window.scrollY > 2965 && window.scrollY < 3553){
            navA[4].style.border = "2px solid cyan";
        } else{
            navA[4].style.border = "2px solid violet";
        }
        if(window.scrollY === 3553 || window.scrollY > 3553 && window.scrollY < 4063){
            navA[5].style.border = "2px solid cyan";
        } else{
            navA[5].style.border = "2px solid violet";
        }
        if(window.scrollY === 4063 || window.scrollY > 4063){
            navA[6].style.border = "2px solid cyan";
        } else{
            navA[6].style.border = "2px solid violet";
        }
    })
}


    window.addEventListener('scroll', ()=>{
     console.log(scrollY);

      navScroll();

        if (window.scrollY > 235) {
            navBar.style.background = 'white';
            navBar.style.height = '70px';
            navBar.classList.add('nav-bar-shadow-anime');
            navBar.style.transition = '1s';
            for(var i = 0; i < navBarA.length; i++){
                navBarA[i].style.color = "black";
                navBarA[i].style.transition = "1s";
            }
            navBarMobile.style.color = "black";
        }
        else {
            navBar.style.background = 'transparent';
            navBar.style.height = '100px';
            navBar.classList.remove('nav-bar-shadow-anime');
            navBar.style.transition = '1s';
            for(var i = 0; i < navBarA.length; i++){
                navBarA[i].style.color = "white";
                navBarA[i].style.transition = "1s";
            }
            navBarMobile.style.color = "white";
        }

        if(window.scrollY > 50){
            for(var i = 0; i < percentBar.length; i++){
                experienceMeter[i].style.width = percentBar[i].getAttribute('data-target');
                experienceMeter[i].style.transition = "3s";
                experienceMeter[i].style.transitionDelay = "1s";
            }
        }


        if(window.scrollY > 700){
            /*
            projectOne.style.left = "0";
            projectOne.style.transition = '2s';
            projectOne.classList.add('project-img-anime');

            projectThree.style.left = "0";
            projectThree.style.transition = '2s';
            projectThree.classList.add('project-img-anime');
            */

            projectOne.style.top = "0";
            projectOne.style.opacity = "1";
            projectOne.style.transition = "0.2s";
            projectOne.style.transitionDelay = "1s";

            projectTwo.style.top = "0";
            projectTwo.style.opacity = "1";
            projectTwo.style.transition = "0.2s";
            projectTwo.style.transitionDelay = "1.5s";

            projectThree.style.top = "0";
            projectThree.style.opacity = "1";
            projectThree.style.transition = "0.2s";
            projectThree.style.transitionDelay = "2s";

            projectFour.style.top = "0";
            projectFour.style.opacity = "1";
            projectFour.style.transition = "0.2s";
            projectFour.style.transitionDelay = "2.5s";

            projectFive.style.top = "0";
            projectFive.style.opacity = "1";
            projectFive.style.transition = "0.2s";
            projectFive.style.transitionDelay = "3s";

            projectSix.style.top = "0";
            projectSix.style.opacity = "1";
            projectSix.style.transition = "0.2s";
            projectSix.style.transitionDelay = "3.5s";
        }
        else {
            /*
            projectOne.style.left = "-160%";
            projectOne.style.transition = '2s';
            */
        }

    },false);


        projects[0].addEventListener('mouseover', ()=>{
           hiddenMenu[0].classList.add('hidden-menu-anime');
           hiddenMenuP[0].classList.add('hidden-menu-p-anime');
           hiddenMenuBtn[0].classList.add('hidden-menu-btn-anime');
        });
           projects[1].addEventListener('mouseover', ()=>{
            hiddenMenu[1].classList.add('hidden-menu-anime');
            hiddenMenuP[1].classList.add('hidden-menu-p-anime');
            hiddenMenuBtn[1].classList.add('hidden-menu-btn-anime');
       });

       projects[2].addEventListener('mouseover', ()=>{
        hiddenMenu[2].classList.add('hidden-menu-anime');
        hiddenMenuP[2].classList.add('hidden-menu-p-anime');
        hiddenMenuBtn[2].classList.add('hidden-menu-btn-anime');
       });

       projects[3].addEventListener('mouseover', ()=>{
        hiddenMenu[3].classList.add('hidden-menu-anime');
        hiddenMenuP[3].classList.add('hidden-menu-p-anime');
        hiddenMenuBtn[3].classList.add('hidden-menu-btn-anime');
       });

       projects[4].addEventListener('mouseover', ()=>{
        hiddenMenu[4].classList.add('hidden-menu-anime');
        hiddenMenuP[4].classList.add('hidden-menu-p-anime');
        hiddenMenuBtn[4].classList.add('hidden-menu-btn-anime');
       });

       projects[5].addEventListener('mouseover', ()=>{
        hiddenMenu[5].classList.add('hidden-menu-anime');
        hiddenMenuP[5].classList.add('hidden-menu-p-anime');
        hiddenMenuBtn[5].classList.add('hidden-menu-btn-anime');
       });

       projects[0].addEventListener('mouseleave', ()=>{
        hiddenMenu[0].classList.remove('hidden-menu-anime');
        hiddenMenuP[0].classList.remove('hidden-menu-p-anime');
        hiddenMenuBtn[0].classList.remove('hidden-menu-btn-anime');
       });

       projects[1].addEventListener('mouseleave', ()=>{
        hiddenMenu[1].classList.remove('hidden-menu-anime');
        hiddenMenuP[1].classList.remove('hidden-menu-p-anime');
        hiddenMenuBtn[1].classList.remove('hidden-menu-btn-anime');
       });

       projects[2].addEventListener('mouseleave', ()=>{
        hiddenMenu[2].classList.remove('hidden-menu-anime');
        hiddenMenuP[2].classList.remove('hidden-menu-p-anime');
        hiddenMenuBtn[2].classList.remove('hidden-menu-btn-anime');
       });

       projects[3].addEventListener('mouseleave', ()=>{
        hiddenMenu[3].classList.remove('hidden-menu-anime');
        hiddenMenuP[3].classList.remove('hidden-menu-p-anime');
        hiddenMenuBtn[3].classList.remove('hidden-menu-btn-anime');
       });

       projects[4].addEventListener('mouseleave', ()=>{
        hiddenMenu[4].classList.remove('hidden-menu-anime');
        hiddenMenuP[4].classList.remove('hidden-menu-p-anime');
        hiddenMenuBtn[4].classList.remove('hidden-menu-btn-anime');
       });

       projects[5].addEventListener('mouseleave', ()=>{
        hiddenMenu[5].classList.remove('hidden-menu-anime');
        hiddenMenuP[5].classList.remove('hidden-menu-p-anime');
        hiddenMenuBtn[5].classList.remove('hidden-menu-btn-anime');
       });

       var counter = 0;
       var i = 2;
       reviewsMainCount[0].style.opacity = "1";
       reviewsCont[0].style.display = "block";

       function reviewsSlide(){
        reviewsMainCount[0].style.opacity = "0";
        if(counter < i){
            reviewsMainCount[0].style.opacity = "0";
            for(var j=0; j < reviewsCont.length; j++){
                reviewsCont[j].style.display = "none";
            }
        reviewsMainCount[0].style.opacity = "0";
        reviewsCont[counter].style.display = "block";
        reviewsMainCount[0].style.opacity = "1";
        reviewsMainCount[0].style.transitionDuration = "3s";
        counter++;
        }
        else {
            counter = 0;
            for(var j=0; j < reviewsCont.length; j++){
                reviewsCont[j].style.display = "none";
                reviewsMainCount[0].style.opacity = "0";
            }

        reviewsCont[2].style.display = "block";
        reviewsMainCount[0].style.opacity = "1";
        reviewsMainCount[0].style.transitionDuration = "3s";
        }
       }


       window.onload = timer = setInterval('reviewsSlide()', 3000);

       reviewsMainCount[0].addEventListener('mouseenter', ()=>{
       clearInterval(timer);
       });

       reviewsMainCount[0].addEventListener('mouseleave', ()=>{
       return timer = setInterval('reviewsSlide()', 3000);
        });

var left = -1;
var count = 0;
var countTwo = 3;

function blogSlider(){

if(left === -1){
    left = left * 33.33;
    imgsCont[0].style.left = left + "%";
    count = 0;
    countTwo = 3;
}
else if(countTwo === 0){
    left = left - 33.33;
    imgsCont[0].style.left = left + "%";
    countTwo = 3;
    count = 0;
}
else if(left > -99.99 && count < 2){
    left = left - 33.33;
    imgsCont[0].style.left = left + "%";
    count++;
}

else if(left === -99.99 || countTwo !== 0){
    left = left + 33.33;
    imgsCont[0].style.left = left + "%";
    countTwo--;
} 
}

        window.onload = timerTwo = setInterval('blogSlider()', 2000);


imgsCont[0].addEventListener('mouseenter', ()=>{
    clearInterval(timerTwo);
})

imgsCont[0].addEventListener('mouseleave', ()=>{
    return timerTwo = setInterval('blogSlider()', 2000);
})


var z = firstPageImg.length;


    firstPageImg[3].style.opacity = '0.5';
    firstPageImg[3].style.width = '100%';
    firstPageImg[3].style.height = '100%';
    firstPageImg[3].style.top = '0';
    firstPageImg[3].style.left = '0';



function fadeImg(){

    if(z < firstPageImg.length){

        for(var x = 0; x < firstPageImg.length; x++){
            firstPageImg[x].style.opacity = '0';
            firstPageImg[x].style.top = '-50%';
    firstPageImg[x].style.width = '150%';
    firstPageImg[x].style.height = '150%';
            firstPageImg[x].style.transition = '6s';
        }
        firstPageImg[z].style.opacity = '0.5';
        firstPageImg[z].style.transition = '6s';
        firstPageImg[z].style.left = '0';
    firstPageImg[z].style.top = '0';
    firstPageImg[z].style.width = '100%';
    firstPageImg[z].style.height = '100%';
        z++;
    }
    else{
        for(var x = 0; x < firstPageImg.length; x++){
            firstPageImg[x].style.opacity = '0';
            firstPageImg[x].style.top = '-50%';
            firstPageImg[x].style.width = '150%';
            firstPageImg[x].style.height = '150%';
            firstPageImg[x].style.transition = '6s';
        }
        firstPageImg[0].style.opacity = '0.5';
        firstPageImg[0].style.left = '0';
        firstPageImg[0].style.top = '0';
        firstPageImg[0].style.width = '100%';
        firstPageImg[0].style.height = '100%';
        firstPageImg[0].style.transition = '6s';
        z = 1;
    }
}

 window.onload = setTimeout(()=>{
    setInterval('fadeImg()', 6000);
 }, 1000);

/*
firstPage.addEventListener('mouseenter', ()=>{

    firstPageImg[0].style.left = '0';
    firstPageImg[0].style.top = '0';
    firstPageImg[0].style.width = '100%';
    firstPageImg[0].style.height = '100%';
    firstPageImg[0].style.transition = '3s';
    firstPageImg[0].style.opacity = '0.5';
});
*/

function changeColor(elem){

    for(var j = 0; j < navA.length; j++){
            navA[j].style.border = "2px solid violet";
            navA[j].style.transition = "1s";
    }

    navA[elem].style.border = "2px solid cyan";
    navA[elem].style.transition = "1s";
    navA[elem].style.textDecoration = "none";
    navA[elem].style.color = "white";
    
}


