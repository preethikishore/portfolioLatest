const navbar = document.querySelector(".nav-bar");
const navbarOffset  = navbar.offsetTop;
const progress = document.querySelector(".progress-bar-wrapper");
const progressBarPercent = [85,80,68,50,50,30,60,50,50]
window.addEventListener('scroll',()=>
{
    if(window.pageYOffset >= navbarOffset)
    {
        console.log('Sticky');
        navbar.classList.add('sticky');
    }else{
        navbar.classList.remove('sticky'); 
    }

    if(window.pageYOffset + window.innerHeight >= progress.offsetTop )
    {
      
       document.querySelectorAll('.progress-percent').forEach((el,i)=>
       {
           el.style.width = `${progressBarPercent[i]}%`;
       })
    }
    
})


