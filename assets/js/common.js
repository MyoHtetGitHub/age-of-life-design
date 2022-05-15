jQuery(function($) {
    $(function() {
      var scroll_func = function() {
        $('html,body').animate({ scrollTop: $($(this).attr("href")).offset().top }, 'slow', 'swing');
        return false;
      }
      $(function() {
        $('a[href^="#"]').not('[href$="#"]').click(scroll_func);
      });
    });
    $(function(){
      $(document).on('click', '.sp-menu-toggle', function(){
          $(this).toggleClass("menu-on");
          $(this).find(".subnav-box").slideToggle();
        });
    });
    $(function(){
      $(".setting-ico > a").click(function() {
        $('.setting-ico').toggleClass('setico-on');
        // $('.setting-box').addClass('setting-on');
        $('.setting-box').slideToggle();
      });
    });
    $(function(){
      var winWidth = $(window).width();
        if (winWidth < 768) {
          $(document).on('click', '.setting-ico', function(){
            if ($('.gmenu').hasClass('is-active')) {
              $('.gmenu').removeClass('is-active');
              $('.nav-box').removeClass('nav-open');
            }
            if ($('.h-utility').hasClass('spnavClick')) {
              $('.h-utility').removeClass('spnavClick');
            }
            $('.h-utility').toggleClass('spmenuClick');
          });
        }
    });
    $(document).on('click', '.gmenu', function(){
      if ($('.setting-ico').hasClass('setico-on')) {
        $('.setting-ico').toggleClass('setico-on');
        $('.setting-box').removeClass('setting-on');
        $('.setting-box').slideToggle();
      }
      $('.gmenu').addClass('is-active');
      $('.nav-box').addClass('nav-open');
      $('.h-utility').addClass('spnavClick');
    });
    $(document).on('click', '.is-active', function(){
        $('.gmenu').removeClass('is-active');
        $('.nav-box').removeClass('nav-open');
        $('.h-utility').removeClass('spnavClick');
    });



      // ===== Scroll to Top ==== 
      $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
      });
      $('#return-to-top').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
      });

        });
         
        function fadeAnime() {
          $(".fadeUpTrigger").each(function () {
            //fadeUpTriggerというクラス名が
            var elemPos = $(this).offset().top - 50; //要素より、50px上の
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight) {
              $(this).addClass("fadeUp"); // 画面内に入ったらfadeUpというクラス名を追記
            } else {
              $(this).removeClass("fadeUp"); // 画面外に出たらfadeUpというクラス名を外す
            }
          });
        }
        $(window).scroll(function () {
          fadeAnime(); //スクロールに連動した動きの関数を呼ぶ
        });
        $(function(){
          var x = document.getElementById("search-box");
          var add_nav_padding = document.getElementById("open-nav");
          var winWidth = $(window).width();
            if (winWidth < 768) {
              $(document).on('click', '.search-sp', function(){
                if (x.style.display === "none") {
                  x.style.display = "block";
                $(add_nav_padding).addClass("add-padding");
                $(this).find('.fas').removeClass('fa-search').addClass('fa-times');
                } else {
                  x.style.display = "none";
                  $(add_nav_padding).removeClass("add-padding");
                  $(this).find('.fas').removeClass('fa-times').addClass('fa-search');

                }              
              });
            }

        });
        // $(function(){
        //   $(document).on('click', '.sp-menu-toggle', function(){
        //       $(this).toggleClass("menu-on");
        //       $(this).find(".subnav-box").slideToggle();
        //     });
        // });
      
 
    $(function() {
      $('.new-list li').matchHeight();
    });

  // });
  


