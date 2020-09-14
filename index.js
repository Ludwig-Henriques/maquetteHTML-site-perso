$(function(){
  $("body a").on("click", function(event){
      event.preventDefault();
      var hash = this.hash;
      console.log(hash)

      $('body, html').animate({scrollTop: ($(hash).offset().top) - 55}, 900, function(){
          // window.location.hash = hash;
      });
  });

  ScrollReveal().reveal('section', { delay: 250, distance: '20px', reset: true });
  ScrollReveal().reveal('.progress', { interval: 200 });
  ScrollReveal().reveal('.card', { interval: 200 });

  Particles.init({
    selector: '.header__background',
    color: '#75A5B7',
    maxParticles: 130,
    connectParticles: true,
    responsive: [
      {
        breakpoint: 768,
        options: {
          maxParticles: 80
        }
      }, {
        breakpoint: 375,
        options: {
          maxParticles: 50
        }
      }
    ]
  });

  /** FIXED NAVBAR **/

  document.addEventListener('scroll', handleScroll);

  function handleScroll(event) {
    var header = document.querySelector('header');
    
    if(window.pageYOffset > 0){
      header.classList.add('fixed');
      header.style.top = "0px";
    }
    else if(window.pageYOffset < 30) {
      header.style.top = "30px";
      header.classList.remove('fixed');
    }
  }


})