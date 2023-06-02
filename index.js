


$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        
        $('.navigation').addClass('fixed-top')
        $('.navigation').addClass('bg-dark')
    } else {
        
        $('.navigation').removeClass('fixed-top')
        $('.navigation').removeClass('bg-dark')

    }
  });