var mobileNav = document.getElementById('fa-bars');
var mobileMenu = document.getElementById('hide-mobile-menu');
var barsBtn = document.getElementById('fa-bars');
var closeBtn = document.getElementById('fa-close');
var menuElements = document.getElementsByClassName('mobile-menu-li');
var navBar = document.getElementById('nav-bar');
var navBarA = document.getElementsByClassName('nav-li-a');
var navBarMobile = document.getElementById('fa-bars');
var navMobileA = document.getElementsByClassName('mobile-menu-li-a');
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
var blogView = document.getElementsByClassName('blog-full-view');
var blogBtn = document.getElementsByClassName('blog-btn');
var mobileBlogBtn = document.getElementsByClassName('mobile-blog-btn');
var blogCloseBtn = document.getElementById('blog-close-btn');
var loader = document.getElementsByClassName('loader-screen');
var blogViewImg = document.getElementsByClassName('blog-full-view-img');
var darkModeBtn = document.getElementsByClassName('dark-mode-btn');
var darkModeBtnCircle = document.getElementsByClassName('btn-circle');
var aboutPageCont = document.getElementsByClassName('cont');
var aboutPageH1 = document.getElementsByClassName('profile-info-h1');
var aboutPageH3 = document.getElementsByClassName('profile-info-h3');
var aboutPageH4 = document.getElementsByClassName('profile-info-h4');
var aboutPageSpanRight = document.getElementsByClassName('span-info-right');
var socialTitle = document.getElementsByClassName('title-links');
var experiencePageRow = document.getElementsByClassName('experience-page-row');
var projectsPageRow = document.getElementsByClassName('projects-page-row');
var experienceTitle = document.getElementsByClassName('experience-title');
var line = document.getElementsByClassName('line');
var experienceP = document.getElementsByClassName('experience-meter-p');
var experiencePageBtn = document.getElementsByClassName('experience-page-btn');
var experiencePageBtnI = document.getElementsByClassName('experience-page-btn-i');
var experiencePage2H1 = document.getElementsByClassName('experience-page-2-h1');
var experiencePage2Line = document.getElementsByClassName('experience-page-2-line');
var experiencePage2P = document.getElementsByClassName('experience-page-2-p');
var faCheck1 = document.getElementById('fa-check1');
var faCheck2 = document.getElementById('fa-check2');
var faCheck3 = document.getElementById('fa-check3');
var faCheck4 = document.getElementById('fa-check4');
var faCheck5 = document.getElementById('fa-check5');
var projectsPageH1 = document.getElementsByClassName('projects-page-h1');
var reviewsPageCont = document.getElementsByClassName('reviews-page-cont');
var reviewerComment = document.getElementsByClassName('reviewer-comment');
var reviewerName = document.getElementsByClassName('reviewer-name');
var reviewerTitle = document.getElementsByClassName('reviewer-title');
var blogPageBigCont = document.getElementsByClassName('blog-page-big-cont');
var blogH1 = document.getElementsByClassName('blog-h1');
var leftWall = document.getElementsByClassName('left-wall');
var rightWall = document.getElementsByClassName('right-wall');
var imgsCont = document.getElementsByClassName('imgs-cont');
var blogParagraph = document.getElementsByClassName('blog-paragraph');
var blogBtn = document.getElementsByClassName('blog-btn');
var blogSmallContLi = document.getElementsByClassName('blog-small-cont-li');

var servicesPageBigCont = document.getElementsByClassName('services-page-big-cont');
var servicesPageH1 = document.getElementsByClassName('services-page-h1');
var servicesCont = document.getElementsByClassName('services-cont');
var serviceTitle = document.getElementsByClassName('service-title');
var servicePara = document.getElementsByClassName('service-para');

function darkMode(){
    darkModeBtn[0].addEventListener('click', ()=>{
        darkModeBtnCircle[0].classList.toggle('toggle-btn');
        darkModeBtn[0].classList.toggle('toggle-btn-cont');
        console.log(document.body.style.background);
        if(document.body.style.background !== 'linear-gradient(to right top, black, grey, black)'){
            document.body.style.background = 'linear-gradient(to right top, black, grey, black)';
            aboutPageCont[0].style.background = '#212121';
            aboutPageH1[0].style.color = '#fff';
            aboutPageH3[0].style.color = '#fff';
            aboutPageH4[0].style.color = '#fff';
            for(var i = 0; i < aboutPageSpanRight.length; i++){
                aboutPageSpanRight[i].style.color = '#fff';
            }
            socialTitle[0].style.color = '#fff';
            experiencePageRow[0].style.background = '#212121'
            projectsPageRow[0].style.background = '#212121';
            experienceTitle[0].style.color = '#fff';
            /*
            for(var i = 0; i < line.length; i++){
                line[i].style.background = 'linear-gradient(to right, black, #212121, black)';
            }
            */
            for(var i = 0; i < experienceP.length; i++){
                experienceP[i].style.color = '#fff';
            }
            /*
            for(var i = 0; i < experienceMeter.length; i++){
                experienceMeter[i].style.background = 'linear-gradient(to right, black, #212121)';
            }
            */
            experiencePageBtn[0].style.color = '#fff';
            experiencePageBtn[0].style.border = '2px solid grey';
            experiencePageBtnI[0].style.color = '#fff';
            experiencePage2H1[0].style.color = '#fff';
        //    experiencePage2Line[0].style.background = 'linear-gradient(to right, black, #212121, black)';
            for(var i = 0; i < experiencePage2P.length; i++){
                experiencePage2P[i].style.color = '#fff';
            }
            faCheck1.style.color = 'grey';
            faCheck2.style.color = 'grey';
            faCheck3.style.color = 'grey';
            faCheck4.style.color = 'grey';
            faCheck5.style.color = 'grey';
            projectsPageH1[0].style.color = '#fff';
            for(var i = 0; i < hiddenMenu.length; i++){
                hiddenMenu[i].style.background = '#424242';
            }
            reviewsPageCont[0].style.background = '#212121';
            for(var i = 0; i < reviewerComment.length; i++){
                reviewerComment[i].style.color = '#fff';
                reviewerName[i].style.color = '#fff';
                reviewerTitle[i].style.color = '#fff';
            }
            blogPageBigCont[0].style.background = '#212121';
            blogH1[0].style.color = '#fff';
            leftWall[0].style.background = '#212121';
            rightWall[0].style.background = '#212121';
            imgsCont[0].style.background = '#212121';
            for(var i = 0; i < blogParagraph.length; i++){
                blogParagraph[i].style.color = '#fff';
                blogBtn[i].style.color = '#fff';
            }
            for(var i = 0; i < blogSmallContLi.length; i++){
                blogSmallContLi[i].style.color = '#fff';
            }
            servicesPageBigCont[0].style.background = '#212121';
            servicesPageH1[0].style.color = '#fff';
            servicesCont[0].style.background = '#212121';
            for(var i = 0; i < serviceTitle.length; i++){
                serviceTitle[i].style.color = '#fff';
                servicePara[i].style.color = 'grey';
            }
        } else{
            document.body.style.background = 'linear-gradient(to right top, violet, cyan, darkviolet)';
            aboutPageCont[0].style.background = '#fff';
            aboutPageH1[0].style.color = '#000';
            aboutPageH3[0].style.color = '#000';
            aboutPageH4[0].style.color = '#000';
            for(var i = 0; i < aboutPageSpanRight.length; i++){
                aboutPageSpanRight[i].style.color = '#000';
            }
            socialTitle[0].style.color = '#000';
            experiencePageRow[0].style.background = '#fff'
            projectsPageRow[0].style.background = '#fff';
            experienceTitle[0].style.color = '#000';
            /*
            for(var i = 0; i < line.length; i++){
                line[i].style.background = 'linear-gradient(to right, cyan, violet)';
            }
            */
            for(var i = 0; i < experienceP.length; i++){
                experienceP[i].style.color = '#000';
            }
            /*
            for(var i = 0; i < experienceMeter.length; i++){
                experienceMeter[i].style.background = 'linear-gradient(to left, darkcyan, violet)';
            }
            */
            experiencePageBtn[0].style.color = '#000';
            experiencePageBtn[0].style.border = '2px solid cyan';
            experiencePageBtnI[0].style.color = '#000';
            experiencePage2H1[0].style.color = '#000';
          //  experiencePage2Line[0].style.background = 'linear-gradient(to right, cyan, violet)';
            for(var i = 0; i < experiencePage2P.length; i++){
                experiencePage2P[i].style.color = '#000';
            }
            faCheck1.style.color = 'darkcyan';
            faCheck2.style.color = 'darkcyan';
            faCheck3.style.color = 'darkcyan';
            faCheck4.style.color = 'darkcyan';
            faCheck5.style.color = 'darkcyan';
            projectsPageH1[0].style.color = '#000';
            for(var i = 0; i < hiddenMenu.length; i++){
                hiddenMenu[i].style.background = 'linear-gradient(to left, darkcyan, violet)';
            }
            reviewsPageCont[0].style.background = '#fff';
            for(var i = 0; i < reviewerComment.length; i++){
                reviewerComment[i].style.color = '#000';
                reviewerName[i].style.color = '#000';
                reviewerTitle[i].style.color = '#000';
            }
            blogPageBigCont[0].style.background = '#fff';
            blogH1[0].style.color = '#000';
            leftWall[0].style.background = '#fff';
            rightWall[0].style.background = '#fff';
            imgsCont[0].style.background = '#fff';
            for(var i = 0; i < blogParagraph.length; i++){
                blogParagraph[i].style.color = '#000';
                blogBtn[i].style.color = '#000';
            }
            for(var i = 0; i < blogSmallContLi.length; i++){
                blogSmallContLi[i].style.color = '#000';
            }
            servicesPageBigCont[0].style.background = '#fff';
            servicesPageH1[0].style.color = '#000';
            servicesCont[0].style.background = '#fff';
            for(var i = 0; i < serviceTitle.length; i++){
                serviceTitle[i].style.color = '#000';
                servicePara[i].style.color = 'grey';
            }
        }
    });
};


// navBarA.forEach(elem => elem.addEventListener('click', smoothScroll));
/*
function smoothScro(){
function smoothScroll(event){
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    window.scrollTo({
        top: targetId==='#' ? 0 : document.querySelector(targetId).offsetTop,
        behavior: 'smooth'
    });
}

navA[0].addEventListener('click', smoothScroll);
navA[1].addEventListener('click', smoothScroll);
navA[2].addEventListener('click', smoothScroll);
navA[3].addEventListener('click', smoothScroll);
navA[4].addEventListener('click', smoothScroll);
navA[5].addEventListener('click', smoothScroll);
navA[6].addEventListener('click', smoothScroll);
navMobileA[0].addEventListener('click', smoothScroll);
navMobileA[1].addEventListener('click', smoothScroll);
navMobileA[2].addEventListener('click', smoothScroll);
navMobileA[3].addEventListener('click', smoothScroll);
navMobileA[4].addEventListener('click', smoothScroll);
navMobileA[5].addEventListener('click', smoothScroll);
navMobileA[6].addEventListener('click', smoothScroll);
}
*/

function loader(){
    document.body.addEventListener('load', ()=>{
        loader[0].style.opacity = '0';
        loader[0].style.transitionDelay = '1s';
        loader[0].style.display = 'none';
    });


    
};

function blogMobileV(){
    event.preventDefault();

    for(var q = 0; q < blogBtn.length; q++){
        mobileBlogBtn[q].addEventListener('click', ()=>{
            blogView[0].style.left = '0%';
            blogView[0].style.transition = '1s';
            blogView[0].style.clipPath = 'polygon(0 48%, 100% 52%, 100% 100%, 0 52%)';
            
            setTimeout(()=>{
            blogView[0].style.clipPath = 'polygon(0 48%, 100% 52%, 100% 100%, 0 100%)';
            }, 700);
            setTimeout(()=>{
            blogView[0].style.clipPath = 'polygon(0 48%, 100% 0%, 100% 100%, 0 100%)';
            }, 900);
            setTimeout(()=>{
                blogView[0].style.clipPath = 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)';
            }, 1100);
        });
    };
    
    blogCloseBtn.addEventListener('click', ()=>{
        setTimeout(()=>{
            blogView[0].style.left = '-100%';
        }, 700);
    
    blogView[0].style.transition = '1s';
    blogView[0].style.clipPath = 'polygon(0 48%, 100% 48%, 100% 52%, 0 52%)';
    });
    
    }


function blogV(){
event.preventDefault();

for(var q = 0; q < blogBtn.length; q++){
    blogBtn[q].addEventListener('click', ()=>{
        blogView[0].style.left = '0%';
        blogView[0].style.transition = '1s';
        blogView[0].style.clipPath = 'polygon(0 48%, 100% 52%, 100% 100%, 0 52%)';
        
        setTimeout(()=>{
        blogView[0].style.clipPath = 'polygon(0 48%, 100% 52%, 100% 100%, 0 100%)';
        }, 700);
        setTimeout(()=>{
        blogView[0].style.clipPath = 'polygon(0 48%, 100% 0%, 100% 100%, 0 100%)';
        }, 900);
        setTimeout(()=>{
            blogView[0].style.clipPath = 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)';
        }, 1100);
        
     //   var blogImg = imgCont[3].getAttribute('src');
     //   blogViewImg[0].setAttribute('src', blogImg);
        /* Change blog view img */
    });
};

blogCloseBtn.addEventListener('click', ()=>{
    setTimeout(()=>{
        blogView[0].style.left = '-100%';
    }, 700);

blogView[0].style.transition = '1s';
blogView[0].style.clipPath = 'polygon(0 48%, 100% 48%, 100% 52%, 0 52%)';
});

}


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

function mobileNavBtn(){
    for(var l = 0; l < menuElements.length; l++){
        menuElements[l].addEventListener('click', ()=>{
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
    }
    
}

function navScroll(){
    window.addEventListener('scroll', ()=>{
        if(window.scrollY === 0 || window.scrollY < 690){
            navBarA[0].style.border = "2px solid cyan";
        } else{
            navBarA[0].style.border = "2px solid violet";
        }

        if(window.scrollY === 757 || window.scrollY > 690 && window.scrollY < 1720){
            navBarA[1].style.border = "2px solid cyan";
        } else{
            navBarA[1].style.border = "2px solid violet";
        }
        if(window.scrollY === 1720 || window.scrollY > 1720 && window.scrollY < 2495){
            navBarA[2].style.border = "2px solid cyan";
        } else{
            navBarA[2].style.border = "2px solid violet";
        }
        if(window.scrollY === 2965 || window.scrollY > 2495 && window.scrollY < 2965){
            navBarA[3].style.border = "2px solid cyan";
        } else{
            navBarA[3].style.border = "2px solid violet";
        }
        if(window.scrollY === 2965 || window.scrollY > 2965 && window.scrollY < 3553){
            navBarA[4].style.border = "2px solid cyan";
        } else{
            navBarA[4].style.border = "2px solid violet";
        }
        if(window.scrollY === 3553 || window.scrollY > 3553 && window.scrollY < 4063){
            navBarA[5].style.border = "2px solid cyan";
        } else{
            navBarA[5].style.border = "2px solid violet";
        }
        if(window.scrollY === 4063 || window.scrollY > 4063){
            navBarA[6].style.border = "2px solid cyan";
        } else{
            navBarA[6].style.border = "2px solid violet";
        }
    })
}


    window.addEventListener('scroll', ()=>{

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

        if(window.scrollY > 800){
            for(var i = 0; i < percentBar.length; i++){
                experienceMeter[i].style.width = percentBar[i].getAttribute('data-target');
                experienceMeter[i].style.transition = "3s";
                experienceMeter[i].style.transitionDelay = "1s";
            }
        }


        if(window.scrollY > 1400){
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


       window.onload = () => {

        timer = setInterval('reviewsSlide()', 3000);
        timerTwo = setInterval('blogSlider()', 3000);
        setTimeout(()=>{setInterval('fadeImg()', 6000);}, 1000);
       // smoothScro();
        darkMode();
        blogV();
        blogMobileV();
        mobileNavBtn();
        setTimeout(()=>{
        loader[0].style.WebkitTransitionDelay = '3s';
        loader[0].style.transitionDelay = '3s';
        loader[0].style.transition = '1s';
        loader[0].style.opacity = '0';
        }, 2000);
        setTimeout(()=>{loader[0].style.display = 'none';}, 3000);
       }
       

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

        


imgsCont[0].addEventListener('mouseenter', ()=>{
    clearInterval(timerTwo);
})

imgsCont[0].addEventListener('mouseleave', ()=>{
    return timerTwo = setInterval('blogSlider()', 3000);
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

    for(var j = 0; j < navBarA.length; j++){
            navBarA[j].style.border = "2px solid violet";
            navBarA[j].style.transition = "1s";
    }

    navBarA[elem].style.border = "2px solid cyan";
    navBarA[elem].style.transition = "1s";
    navBarA[elem].style.textDecoration = "none";
    navBarA[elem].style.color = "white";
    
}