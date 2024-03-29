$(document).ready(function() {

  $(window).scrollTop(0);

//options( 1 - ON , 0 - OFF)  
        var auto_slide = 1;  
            var hover_pause = 1;  
        var key_slide = 1;  
  
        //speed of auto slide(  
        var auto_slide_seconds = 5000;  
        /* IMPORTANT: i know the variable is called ...seconds but it's 
        in milliseconds ( multiplied with 1000) '*/



// function hideNav(){
//   if ($('.hamburger-menu').css('display') == 'block') {
//     $('.menu').removeClass('shownav');
//   }
// }

$( '.hamburger-menu' ).click(function() {
  event.preventDefault();
  // hideNav();
  $('.hamburger-menu').hide();
  $( '.menu' ).addClass('shownav');
  $('.logo').hide();
  $('.banner').hide();
  $('.mission-statment').hide();

    
});

$('.links .about').click(function( event ) {
	event.preventDefault();
  $('#aboutMeBox').show();
  $('.menu').hide();
  $('.home').removeClass('hide');
  $('#resumeBox').hide();
  $('#portfolioBox').hide();
  $('#contactBox').hide();
  $('.mission-statment').hide();
  var menu = $('header').height();
  var href = $(this).attr('href');
  var anchor = $(href).offset();
  console.log(menu,anchor);
  window.scrollTo(anchor.left, anchor.top - menu );
  window.scrollTo(0, anchor.top - menu );
  

});


$('.links .resume').click(function( event ) {
	event.preventDefault();
	$('#resumeBox.container.background').show();
  $('.menu').hide();
  $('.home').removeClass('hide');
	$('#aboutMeBox').hide();
	$('#portfolioBox').hide();
  $('#contactBox').hide();
  $('.mission-statment').hide();
  var href = $(this).attr('href');
  var anchor = $(href).offset();
  var menu = $('.header.menu').height();
  window.scrollTo(anchor.left, anchor.top - menu - 75);


});

$('.links .portfolio').click(function( event ) {
	event.preventDefault();
	$('#portfolioBox.container').show();
  $('.menu').hide();
  $('.home').removeClass('hide');
  $('#submit-btn').hide();
	$('#resumeBox').hide();
	$('#aboutMeBox').hide();
  $('#contactBox').hide();
  $('.mission-statment').hide();
  $('footer').removeClass('hide');
  var href = $(this).attr('href');
  var anchor = $(href).offset();
  var menu = $('.header.menu').height();
  window.scrollTo(anchor.left, anchor.top - menu - 75);


});

$('#portfolioBox ul .photography').click(function(){
  event.preventDefault();
  $('#submit-btn').show();
})

$('.links .contact').click(function( event ) {
  event.preventDefault();
  $('#contactBox.container').show();
  $('.menu').hide();
  $('.home').removeClass('hide');
  $('#portfolioBox').hide();
  $('#resumeBox').hide();
  $('#aboutMeBox').hide();
  $('.mission-statment').hide();
  var href = $(this).attr('href');
  var anchor = $(href).offset();
  var menu = $('.header.menu').height();
  window.scrollTo(anchor.left, anchor.top - menu);
  

});

$('.since-graduating a').click(function(){
  event.preventDefault();
  $('.since-graduating a').addClass('hide');
  $('#myStory').slideDown();
  $('#close').removeClass('hide');
  $('.container.background').css('height','4500px');
});

$('#close').click(function(){
  event.preventDefault();
  $('#myStory').slideUp();
  $('.since-graduating a').removeClass('hide');

});

//listen for an event when user clicks the submit button

  $('form').on('change',submitCategory);

  event.preventDefault();
//function to change background image

  var category = ['Abstract','Close-up','Asymmetrical','Kids', 'Nature' ,'Wedding', 'Other' , ];

  for (i = 0; i < category.length; i++) { 
    $('#submit-btn').append('<option value="' + category[i] + '">' + category[i] + '</option>')
  }


  function submitCategory(){

    //prevent the page from reloading

    event.preventDefault();

    //select the input


    var currentCategory = $('#submit-btn').val();


    if(currentCategory== "Abstract") {
      $('.slider').hide();
      $('#carousel-abstract').slideToggle();
      $('#carousel-close-up').hide();
      $('#carousel-asymmetrical').hide();
          $('#carousel-kids').hide(); 
      $('#carousel-other').hide(); 
      $('#carousel-wedding').hide(); 
      $('#carousel-nature').hide(); 
      
      }

    else if(currentCategory== "Close-up" ) {
      $('.slider').hide();
      $('#carousel-close-up').slideToggle();
       $('#carousel-abstract').hide();
      $('#carousel-asymmetrical').hide();
        $('#carousel-kids').hide(); 
      $('#carousel-other').hide(); 
      $('#carousel-wedding').hide(); 
      $('#carousel-nature').hide(); 
      }

    else if(currentCategory== "Asymmetrical") {
      $('.slider').hide();
      $('#carousel-asymmetrical').slideToggle(); 
       $('#carousel-close-up').hide();
      $('#carousel-abstract').hide();
       $('#carousel-kids').hide(); 
      $('#carousel-other').hide(); 
      $('#carousel-wedding').hide(); 
      $('#carousel-nature').hide(); 
      }

    else if(currentCategory== "Kids" ) {
       $('.slider').hide();
      $('#carousel-kids').slideToggle(); 
       $('#carousel-close-up').hide();
      $('#carousel-abstract').hide();
      $('#carousel-asymmetrical').hide();
       $('#carousel-nature').hide(); 
      $('#carousel-other').hide(); 
      $('#carousel-wedding').hide(); 
      }

    else if(currentCategory== "Nature" ) {
       $('.slider').hide();
      $('#carousel-nature').slideToggle(); 
       $('#carousel-close-up').hide();
      $('#carousel-abstract').hide();
      $('#carousel-asymmetrical').hide();
      $('#carousel-kids').hide(); 
      $('#carousel-other').hide(); 
      $('#carousel-wedding').hide(); 

      }

    else if(currentCategory== "Wedding" ) {
           $('.slider').hide();
          $('#carousel-wedding').slideToggle(); 
           $('#carousel-close-up').hide();
          $('#carousel-abstract').hide();
          $('#carousel-asymmetrical').hide();
          $('#carousel-kids').hide();
           $('#carousel-nature').hide(); 
           $('#carousel-other').hide();  
          }

      else if(currentCategory== "Other" ) {
       $('.slider').hide();
      $('#carousel-other').slideToggle(); 
       $('#carousel-close-up').hide();
      $('#carousel-abstract').hide();
      $('#carousel-asymmetrical').hide();
      $('#carousel-kids').hide();
       $('#carousel-nature').hide(); 
       $('#carousel-wedding').hide(); 
      }

     
  }


// settings
  var $slider = $('.slider'); // class or id of carousel slider
  var $slide = 'li'; // could also use 'img' if you're not using a ul
  var $transition_time = 1500; // 1.5 second
  var $time_between_slides = 1500; // 1.5 seconds

  function slides(){
    return $slider.find($slide);
  }

  slides().fadeOut();

  // set active classes
  slides().first().addClass('active');
  slides().first().fadeIn($transition_time);

  // auto scroll 
  $interval = setInterval(
    function(){
      var $i = $slider.find($slide + '.active').index();

      slides().eq($i).removeClass('active');
      slides().eq($i).fadeOut($transition_time);

      if (slides().length == $i + 1) $i = -1; // loop to start

      slides().eq($i + 1).fadeIn($transition_time);
      slides().eq($i + 1).addClass('active');
    }
    , $transition_time +  $time_between_slides 
  );

$(function(){
      var carousel = $('#carousel-abstract ul');
      var carouselChild = carousel.find('li');
      var clickCount = 0;
      
      itemWidth = carousel.find('li:first').width()+1; //Including margin

      //Set Carousel width so it won't wrap
      carousel.width(itemWidth*carouselChild.length);

      //Place the child elements to their original locations.
      refreshChildPosition();
      
      //Set the event handlers for buttons.
      $('.btnNext').click(function(){
        clickCount++;
        
        //Animate the slider to left as item width 
        carousel.finish().animate({
          left : '-='+itemWidth
        },300, function(){
          //Find the first item and append it as the last item.
          lastItem = carousel.find('li:first');
          lastItem.remove().appendTo(carousel);
          lastItem.css('left', ((carouselChild.length-1)*(itemWidth))+(clickCount*itemWidth));
        });
      });
      
      $('.btnPrevious').click(function(){
        clickCount--;
        //Find the first item and append it as the last item.
        lastItem = carousel.find('li:last');
        lastItem.remove().prependTo(carousel);

        lastItem.css('left', itemWidth*clickCount);       
        //Animate the slider to right as item width 
        carousel.finish().animate({
          left: '+='+itemWidth
        },300);
      });

      function refreshChildPosition(){
        carouselChild.each(function(){
          $(this).css('left', itemWidth*carouselChild.index($(this)));
        });
      }
      
      function refreshChildPositionNext(){
        carouselChild.each(function(){
          leftVal =  parseInt($(this).css('left'));
        });
      }
    });


    $(function(){
      var carousel = $('#carousel-close-up ul');
      var carouselChild = carousel.find('li');
      var clickCount = 0;
      
      itemWidth = carousel.find('li:first').width()+1; //Including margin

      //Set Carousel width so it won't wrap
      carousel.width(itemWidth*carouselChild.length);

      //Place the child elements to their original locations.
      refreshChildPosition();
      
      //Set the event handlers for buttons.
      $('.btnNext').click(function(){
        clickCount++;
        
        //Animate the slider to left as item width 
        carousel.finish().animate({
          left : '-='+itemWidth
        },300, function(){
          //Find the first item and append it as the last item.
          lastItem = carousel.find('li:first');
          lastItem.remove().appendTo(carousel);
          lastItem.css('left', ((carouselChild.length-1)*(itemWidth))+(clickCount*itemWidth));
        });
      });
      
      $('.btnPrevious').click(function(){
        clickCount--;
        //Find the first item and append it as the last item.
        lastItem = carousel.find('li:last');
        lastItem.remove().prependTo(carousel);

        lastItem.css('left', itemWidth*clickCount);       
        //Animate the slider to right as item width 
        carousel.finish().animate({
          left: '+='+itemWidth
        },300);
      });

      function refreshChildPosition(){
        carouselChild.each(function(){
          $(this).css('left', itemWidth*carouselChild.index($(this)));
        });
      }
      
      function refreshChildPositionNext(){
        carouselChild.each(function(){
          leftVal =  parseInt($(this).css('left'));
        });
      }
    });

$(function(){
      var carousel = $('#carousel-asymmetrical ul');
      var carouselChild = carousel.find('li');
      var clickCount = 0;
      
      itemWidth = carousel.find('li:first').width()+1; //Including margin

      //Set Carousel width so it won't wrap
      carousel.width(itemWidth*carouselChild.length);

      //Place the child elements to their original locations.
      refreshChildPosition();
      
      //Set the event handlers for buttons.
      $('.btnNext').click(function(){
        clickCount++;
        
        //Animate the slider to left as item width 
        carousel.finish().animate({
          left : '-='+itemWidth
        },300, function(){
          //Find the first item and append it as the last item.
          lastItem = carousel.find('li:first');
          lastItem.remove().appendTo(carousel);
          lastItem.css('left', ((carouselChild.length-1)*(itemWidth))+(clickCount*itemWidth));
        });
      });
      
      $('.btnPrevious').click(function(){
        clickCount--;
        //Find the first item and append it as the last item.
        lastItem = carousel.find('li:last');
        lastItem.remove().prependTo(carousel);

        lastItem.css('left', itemWidth*clickCount);       
        //Animate the slider to right as item width 
        carousel.finish().animate({
          left: '+='+itemWidth
        },300);
      });

      function refreshChildPosition(){
        carouselChild.each(function(){
          $(this).css('left', itemWidth*carouselChild.index($(this)));
        });
      }
      
      function refreshChildPositionNext(){
        carouselChild.each(function(){
          leftVal =  parseInt($(this).css('left'));
        });
      }
    });

$(function(){
      var carousel = $('#carousel-kids ul');
      var carouselChild = carousel.find('li');
      var clickCount = 0;
      
      itemWidth = carousel.find('li:first').width()+1; //Including margin

      //Set Carousel width so it won't wrap
      carousel.width(itemWidth*carouselChild.length);

      //Place the child elements to their original locations.
      refreshChildPosition();
      
      //Set the event handlers for buttons.
      $('.btnNext').click(function(){
        clickCount++;
        
        //Animate the slider to left as item width 
        carousel.finish().animate({
          left : '-='+itemWidth
        },300, function(){
          //Find the first item and append it as the last item.
          lastItem = carousel.find('li:first');
          lastItem.remove().appendTo(carousel);
          lastItem.css('left', ((carouselChild.length-1)*(itemWidth))+(clickCount*itemWidth));
        });
      });
      
      $('.btnPrevious').click(function(){
        clickCount--;
        //Find the first item and append it as the last item.
        lastItem = carousel.find('li:last');
        lastItem.remove().prependTo(carousel);

        lastItem.css('left', itemWidth*clickCount);       
        //Animate the slider to right as item width 
        carousel.finish().animate({
          left: '+='+itemWidth
        },300);
      });

      function refreshChildPosition(){
        carouselChild.each(function(){
          $(this).css('left', itemWidth*carouselChild.index($(this)));
        });
      }
      
      function refreshChildPositionNext(){
        carouselChild.each(function(){
          leftVal =  parseInt($(this).css('left'));
        });
      }
    });

$(function(){
      var carousel = $('#carousel-nature ul');
      var carouselChild = carousel.find('li');
      var clickCount = 0;
      
      itemWidth = carousel.find('li:first').width()+1; //Including margin

      //Set Carousel width so it won't wrap
      carousel.width(itemWidth*carouselChild.length);

      //Place the child elements to their original locations.
      refreshChildPosition();
      
      //Set the event handlers for buttons.
      $('.btnNext').click(function(){
        clickCount++;
        
        //Animate the slider to left as item width 
        carousel.finish().animate({
          left : '-='+itemWidth
        },300, function(){
          //Find the first item and append it as the last item.
          lastItem = carousel.find('li:first');
          lastItem.remove().appendTo(carousel);
          lastItem.css('left', ((carouselChild.length-1)*(itemWidth))+(clickCount*itemWidth));
        });
      });
      
      $('.btnPrevious').click(function(){
        clickCount--;
        //Find the first item and append it as the last item.
        lastItem = carousel.find('li:last');
        lastItem.remove().prependTo(carousel);

        lastItem.css('left', itemWidth*clickCount);       
        //Animate the slider to right as item width 
        carousel.finish().animate({
          left: '+='+itemWidth
        },300);
      });

      function refreshChildPosition(){
        carouselChild.each(function(){
          $(this).css('left', itemWidth*carouselChild.index($(this)));
        });
      }
      
      function refreshChildPositionNext(){
        carouselChild.each(function(){
          leftVal =  parseInt($(this).css('left'));
        });
      }
    });

$(function(){
      var carousel = $('#carousel-other ul');
      var carouselChild = carousel.find('li');
      var clickCount = 0;
      
      itemWidth = carousel.find('li:first').width()+1; //Including margin

      //Set Carousel width so it won't wrap
      carousel.width(itemWidth*carouselChild.length);

      //Place the child elements to their original locations.
      refreshChildPosition();
      
      //Set the event handlers for buttons.
      $('.btnNext').click(function(){
        clickCount++;
        
        //Animate the slider to left as item width 
        carousel.finish().animate({
          left : '-='+itemWidth
        },300, function(){
          //Find the first item and append it as the last item.
          lastItem = carousel.find('li:first');
          lastItem.remove().appendTo(carousel);
          lastItem.css('left', ((carouselChild.length-1)*(itemWidth))+(clickCount*itemWidth));
        });
      });
      
      $('.btnPrevious').click(function(){
        clickCount--;
        //Find the first item and append it as the last item.
        lastItem = carousel.find('li:last');
        lastItem.remove().prependTo(carousel);

        lastItem.css('left', itemWidth*clickCount);       
        //Animate the slider to right as item width 
        carousel.finish().animate({
          left: '+='+itemWidth
        },300);
      });

      function refreshChildPosition(){
        carouselChild.each(function(){
          $(this).css('left', itemWidth*carouselChild.index($(this)));
        });
      }
      
      function refreshChildPositionNext(){
        carouselChild.each(function(){
          leftVal =  parseInt($(this).css('left'));
        });
      }
    });

$(function(){
      var carousel = $('#carousel-wedding ul');
      var carouselChild = carousel.find('li');
      var clickCount = 0;
      
      itemWidth = carousel.find('li:first').width()+1; //Including margin

      //Set Carousel width so it won't wrap
      carousel.width(itemWidth*carouselChild.length);

      //Place the child elements to their original locations.
      refreshChildPosition();
      
      //Set the event handlers for buttons.
      $('.btnNext').click(function(){
        clickCount++;
        
        //Animate the slider to left as item width 
        carousel.finish().animate({
          left : '-='+itemWidth
        },300, function(){
          //Find the first item and append it as the last item.
          lastItem = carousel.find('li:first');
          lastItem.remove().appendTo(carousel);
          lastItem.css('left', ((carouselChild.length-1)*(itemWidth))+(clickCount*itemWidth));
        });
      });
      
      $('.btnPrevious').click(function(){
        clickCount--;
        //Find the first item and append it as the last item.
        lastItem = carousel.find('li:last');
        lastItem.remove().prependTo(carousel);

        lastItem.css('left', itemWidth*clickCount);       
        //Animate the slider to right as item width 
        carousel.finish().animate({
          left: '+='+itemWidth
        },300);
      });

      function refreshChildPosition(){
        carouselChild.each(function(){
          $(this).css('left', itemWidth*carouselChild.index($(this)));
        });
      }
      
      function refreshChildPositionNext(){
        carouselChild.each(function(){
          leftVal =  parseInt($(this).css('left'));
        });
      }
    });

});
