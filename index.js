


$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        
        $('.navigation').addClass('fixed-top')
        $('.navigation').addClass('bg-dark')
    } else {
        
        $('.navigation').removeClass('fixed-top')
        $('.navigation').removeClass('bg-dark')

    }
  });


  const subs_cont_elm = document.getElementById("subs-cont");
  const btn_sub_close = document.getElementById("subs-close");
  
  btn_sub_close.addEventListener("click", () => {
    subs_cont_elm.classList.remove("show");
  
    /* Code To Show Subscribe Modale After 5 Seconds */
    setTimeout(() => {
      subs_cont_elm.classList.add("show");
    }, 1000 * 5);
  });
  
  


  $(".place-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    margin: 30,
    dots: true,
    loop: true,
    center: true,
    responsive: {
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:1
        },
        992:{
            items:1
        }
    }
  });

  