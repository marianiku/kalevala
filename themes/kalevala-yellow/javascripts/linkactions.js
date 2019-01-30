$(document).ready(function() {



    /* Clicking actions in Simple pages page menus: hide/show */

    $('#julkaisu-nav1').on('click',function() {
      $('#julkaisu-editio').show();
      $('#julkaisu-osat').hide();
      $('#julkaisu-ajatus').hide();
    });

    $('#julkaisu-nav2').on('click',function() {
      $('#julkaisu-editio').hide();
      $('#julkaisu-osat').show();
      $('#julkaisu-ajatus').hide();
    });

    $('#julkaisu-nav3').on('click',function() {
      $('#julkaisu-editio').hide();
      $('#julkaisu-osat').hide();
      $('#julkaisu-ajatus').show();
    });
    $('#esipuhe-link').find('a').on('click', function() {
      $('#esipuhe-submenu').show();
      $('#esipuhe-intro').show();
      $('#esipuhe-erot').hide();
      $('#esipuhe-aani').hide();
      $('#esipuhe-lajina').hide();
    });

    $('#esipuhe-submenu1').find('a').on('click', function() {
      $('#esipuhe-lajina').show();
      $('#esipuhe-intro').hide();
      $('#esipuhe-erot').hide();
      $('#esipuhe-aani').hide();
    });

    $('#esipuhe-submenu2').find('a').on('click', function() {
      $('#esipuhe-aani').show();
      $('#esipuhe-lajina').hide();
      $('#esipuhe-erot').hide();
      $('#esipuhe-intro').hide();
    });

    $('#esipuhe-submenu3').find('a').on('click', function() {
      $('#esipuhe-erot').show();
      $('#esipuhe-aani').hide();
      $('#esipuhe-lajina').hide();
      $('#esipuhe-intro').hide();
    });


    $('#tekstit-link').find('a').on('click', function() {
      $('#esipuhe-content').hide();
      $('#esipuhe-intro').hide();
      $('#tekstit-list').show();
    });

    $('#geneettinen-link').find('a').on('click', function() {
        $('#geneettinen-submenu').show();
        $('#geneettinen-esittely').show();
        $('#geneettinen-versiot').hide();
        $('#geneettinen-vertailu').hide();
        $('#geneettinen-content').hide();
        $('#geneettinen-content-2').hide();
        $('#yleisesittely').hide();
        $('#temaattinen-esittely').hide();
        $('#temaattinen-toimitustavat').hide();
        $('#temaattinen-lyriikka').hide();
        $('#kielellinen-submenu').hide();
        $('#kielellinen-esittely').hide();
        $('#kielellinen-suomi').hide();
        $('#kielellinen-periaatteet').hide();
        $('#traditio-esittely').hide();
        $('#traditio-skvr').hide();
        $('#traditio-content').hide();
        $('#traditio-content-2').hide();
        $('#aatehistoriallinen-esittely').hide();
        $('#aatehistoriallinen-kansa').hide();
        $('#aatehistoriallinen-perhe').hide();
        $('#aatehistoriallinen-kehys').hide();
        $('#traditio-submenu').hide();
        $('#temaattinen-submenu').hide();
        $('#aatehistoriallinen-submenu').hide();
    });

    $('#geneettinen-submenu2').find('a').on('click', function() {
      $('#yleisesittely').hide();
      $('#geneettinen-esittely').hide();
      $('#geneettinen-versiot').show();
      $('#geneettinen-vertailu').hide();
      $('#geneettinen-content').hide();
      $('#geneettinen-content-2').hide();
      $('#temaattinen-esittely').hide();
      $('#temaattinen-toimitustavat').hide();
      $('#temaattinen-lyriikka').hide();
      $('#traditio-content').hide();
      $('#traditio-content-2').hide();
      $('#traditio-esittely').hide();
      $('#traditio-skvr').hide();
      $('#kielellinen-esittely').hide();
      $('#kielellinen-suomi').hide();
      $('#kielellinen-periaatteet').hide();
      $('#aatehistoriallinen-esittely').hide();
      $('#aatehistoriallinen-kansa').hide();
      $('#aatehistoriallinen-perhe').hide();
      $('#aatehistoriallinen-kehys').hide();
    });

    $('#geneettinen-submenu3').find('a').on('click', function() {
      $('#yleisesittely').hide();
      $('#geneettinen-esittely').hide();
      $('#geneettinen-versiot').hide();
      $('#geneettinen-vertailu').show();
      $('#geneettinen-content').hide();
      $('#geneettinen-content-2').hide();
      $('#temaattinen-esittely').hide();
      $('#temaattinen-toimitustavat').hide();
      $('#temaattinen-lyriikka').hide();
      $('#traditio-content').hide();
      $('#traditio-content-2').hide();
      $('#traditio-esittely').hide();
      $('#traditio-skvr').hide();
      $('#kielellinen-esittely').hide();
      $('#kielellinen-suomi').hide();
      $('#kielellinen-periaatteet').hide();
      $('#aatehistoriallinen-esittely').hide();
      $('#aatehistoriallinen-kansa').hide();
      $('#aatehistoriallinen-perhe').hide();
      $('#aatehistoriallinen-kehys').hide();
    });

    $('#geneettinen-submenu4').find('a').on('click', function() {
      $('#yleisesittely').hide();
      $('#geneettinen-esittely').hide();
      $('#geneettinen-versiot').hide();
      $('#geneettinen-vertailu').hide();
      $('#geneettinen-content').show();
      $('#geneettinen-content-2').show();
      $('#temaattinen-esittely').hide()
      $('#temaattinen-toimitustavat').hide();
      $('#temaattinen-lyriikka').hide();
      $('#traditio-content').hide();
      $('#traditio-content-2').hide();
      $('#traditio-esittely').hide();
      $('#traditio-skvr').hide();
      $('#kielellinen-esittely').hide();
      $('#kielellinen-suomi').hide();
      $('#kielellinen-periaatteet').hide();
      $('#aatehistoriallinen-esittely').hide();
      $('#aatehistoriallinen-kansa').hide();
      $('#aatehistoriallinen-perhe').hide();
      $('#aatehistoriallinen-kehys').hide();
    });

    $('#traditio-link').find('a').on('click', function() {
      $('#yleisesittely').hide();
      $('#traditio-submenu').show();
      $('#traditio-content').show();
      $('#traditio-content-2').show();
      $('#traditio-esittely').hide();
      $('#traditio-skvr').hide();
      $('#temaattinen-esittely').hide();
      $('#temaattinen-toimitustavat').hide()
      $('#temaattinen-lyriikka').hide();
      $('#geneettinen-esittely').hide();
      $('#geneettinen-versiot').hide();
      $('#geneettinen-vertailu').hide();
      $('#geneettinen-content').hide();
      $('#geneettinen-content-2').hide();
      $('#kielellinen-submenu').hide();
      $('#kielellinen-esittely').hide();
      $('#kielellinen-suomi').hide();
      $('#kielellinen-periaatteet').hide();
      $('#aatehistoriallinen-esittely').hide();
      $('#aatehistoriallinen-kansa').hide();
      $('#aatehistoriallinen-perhe').hide();
      $('#geneettinen-submenu').hide();
      $('#temaattinen-submenu').hide();
      $('#aatehistoriallinen-submenu').hide();
      $('#aatehistoriallinen-kehys').hide();
    });

    $('#traditio-submenu1').find('a').on('click', function() {
      $('#yleisesittely').hide();
      $('#traditio-content').hide();
      $('#traditio-content-2').hide();
      $('#traditio-esittely').show();
      $('#traditio-skvr').hide();
      $('#temaattinen-esittely').hide();
      $('#temaattinen-toimitustavat').hide();
      $('#temaattinen-lyriikka').hide();
      $('#geneettinen-esittely').hide();
      $('#geneettinen-versiot').hide();
      $('#geneettinen-vertailu').hide();
      $('#geneettinen-content').hide();
      $('#geneettinen-content-2').hide();
      $('#kielellinen-esittely').hide();
      $('#kielellinen-suomi').hide();
      $('#kielellinen-periaatteet').hide();
      $('#aatehistoriallinen-esittely').hide();
      $('#aatehistoriallinen-kansa').hide();
      $('#aatehistoriallinen-perhe').hide();
      $('#aatehistoriallinen-kehys').hide();
    });

    $('#traditio-submenu2').find('a').on('click', function() {
      $('#yleisesittely').hide();
      $('#traditio-content').hide();
      $('#traditio-content-2').hide();
      $('#traditio-esittely').hide();
      $('#traditio-skvr').show();
      $('#temaattinen-esittely').hide();
      $('#temaattinen-toimitustavat').hide();
      $('#temaattinen-lyriikka').hide();
      $('#geneettinen-esittely').hide();
      $('#geneettinen-versiot').hide();
      $('#geneettinen-vertailu').hide();
      $('#geneettinen-content').hide();
      $('#geneettinen-content-2').hide();
      $('#kielellinen-esittely').hide();
      $('#kielellinen-suomi').hide();
      $('#kielellinen-periaatteet').hide();
      $('#aatehistoriallinen-esittely').hide();
      $('#aatehistoriallinen-kansa').hide();
      $('#aatehistoriallinen-perhe').hide();
      $('#aatehistoriallinen-kehys').hide();
    });

    $('#kielellinen-link').find('a').on('click', function() {
      $('#yleisesittely').hide();
      $('#traditio-content').hide();
      $('#traditio-content-2').hide();
      $('#traditio-esittely').hide();
      $('#traditio-skvr').hide();
      $('#temaattinen-esittely').hide()
      $('#temaattinen-toimitustavat').hide();
      $('#temaattinen-lyriikka').hide();
      $('#geneettinen-esittely').hide();
      $('#geneettinen-versiot').hide();
      $('#geneettinen-vertailu').hide();
      $('#geneettinen-content').hide();
      $('#geneettinen-content-2').hide();
      $('#kielellinen-submenu').show();
      $('#kielellinen-esittely').show();
      $('#kielellinen-suomi').hide();
      $('#kielellinen-periaatteet').hide();
      $('#aatehistoriallinen-esittely').hide();
      $('#aatehistoriallinen-kansa').hide();
      $('#aatehistoriallinen-perhe').hide();
      $('#aatehistoriallinen-kehys').hide();
      $('#traditio-submenu').hide();
      $('#temaattinen-submenu').hide();
      $('#aatehistoriallinen-submenu').hide();
      $('#geneettinen-submenu').hide();
    });

    $('#kielellinen-submenu1').find('a').on('click', function() {
      $('#yleisesittely').hide();
      $('#traditio-content').hide();
      $('#traditio-content-2').hide();
      $('#traditio-esittely').hide();
      $('#traditio-skvr').hide();
      $('#temaattinen-esittely').hide()
      $('#temaattinen-toimitustavat').hide();
      $('#temaattinen-lyriikka').hide();
      $('#geneettinen-esittely').hide();
      $('#geneettinen-versiot').hide();
      $('#geneettinen-vertailu').hide();
      $('#geneettinen-content').hide();
      $('#geneettinen-content-2').hide();
      $('#kielellinen-esittely').hide();
      $('#kielellinen-suomi').show();
      $('#kielellinen-periaatteet').hide();
      $('#aatehistoriallinen-esittely').hide();
      $('#aatehistoriallinen-kansa').hide();
      $('#aatehistoriallinen-perhe').hide();
      $('#aatehistoriallinen-kehys').hide();
    });

    $('#kielellinen-submenu2').find('a').on('click', function() {
      $('#yleisesittely').hide();
      $('#traditio-content').hide();
      $('#traditio-content-2').hide();
      $('#traditio-esittely').hide();
      $('#traditio-skvr').hide();
      $('#temaattinen-esittely').hide()
      $('#temaattinen-toimitustavat').hide();
      $('#temaattinen-lyriikka').hide();
      $('#geneettinen-esittely').hide();
      $('#geneettinen-versiot').hide();
      $('#geneettinen-vertailu').hide();
      $('#geneettinen-content').hide();
      $('#geneettinen-content-2').hide();
      $('#kielellinen-esittely').hide();
      $('#kielellinen-suomi').hide();
      $('#kielellinen-periaatteet').show();
      $('#aatehistoriallinen-esittely').hide();
      $('#aatehistoriallinen-kansa').hide();
      $('#aatehistoriallinen-perhe').hide();
      $('#aatehistoriallinen-kehys').hide();
    });

    $('#temaattinen-link').find('a').on('click', function() {
        $('#temaattinen-submenu').show();
        $('#temaattinen-esittely').show();
        $('#temaattinen-lyriikka').hide();
        $('#temaattinen-toimitustavat').hide();
        $('#geneettinen-esittely').hide();
        $('#geneettinen-content').hide();
        $('#geneettinen-content-2').hide();
        $('#geneettinen-versiot').hide();
        $('#geneettinen-vertailu').hide();
        $('#yleisesittely').hide();
        $('#kielellinen-submenu').hide();
        $('#kielellinen-esittely').hide();
        $('#kielellinen-suomi').hide();
        $('#kielellinen-periaatteet').hide();
        $('#aatehistoriallinen-esittely').hide();
        $('#aatehistoriallinen-kansa').hide();
        $('#aatehistoriallinen-perhe').hide();
        $('#aatehistoriallinen-kehys').hide();
        $('#traditio-content').hide();
        $('#traditio-content-2').hide();
        $('#traditio-esittely').hide();
        $('#traditio-skvr').hide();
        $('#traditio-submenu').hide();
        $('#geneettinen-submenu').hide();
        $('#aatehistoriallinen-submenu').hide();
    });

    $('#temaattinen-submenu2').find('a').on('click', function() {
      $('#yleisesittely').hide();
      $('#temaattinen-esittely').hide();
      $('#temaattinen-toimitustavat').show();
      $('#temaattinen-lyriikka').hide();
      $('#traditio-content').hide();
      $('#traditio-content-2').hide();
      $('#traditio-esittely').hide();
      $('#traditio-skvr').hide();
      $('#geneettinen-esittely').hide();
      $('#geneettinen-versiot').hide();
      $('#geneettinen-vertailu').hide();
      $('#geneettinen-content').hide();
      $('#geneettinen-content-2').hide();
      $('#kielellinen-esittely').hide();
      $('#kielellinen-suomi').hide();
      $('#kielellinen-periaatteet').hide();
      $('#aatehistoriallinen-esittely').hide();
      $('#aatehistoriallinen-submenu').hide();
      $('#aatehistoriallinen-kansa').hide();
      $('#aatehistoriallinen-perhe').hide();
      $('#aatehistoriallinen-kehys').hide();
    });

    $('#temaattinen-submenu3').find('a').on('click', function() {
      $('#temaattinen-lyriikka').show();
      $('#yleisesittely').hide();
      $('#temaattinen-esittely').hide();
      $('#temaattinen-toimitustavat').hide();
      $('#traditio-content').hide();
      $('#traditio-content-2').hide();
      $('#traditio-esittely').hide();
      $('#traditio-skvr').hide();
      $('#geneettinen-esittely').hide();
      $('#geneettinen-versiot').hide();
      $('#geneettinen-vertailu').hide();
      $('#geneettinen-content').hide();
      $('#geneettinen-content-2').hide();
      $('#kielellinen-esittely').hide();
      $('#kielellinen-suomi').hide();
      $('#kielellinen-periaatteet').hide();
      $('#aatehistoriallinen-esittely').hide();
      $('#aatehistoriallinen-submenu').hide();
      $('#aatehistoriallinen-kansa').hide();
      $('#aatehistoriallinen-perhe').hide();
      $('#aatehistoriallinen-kehys').hide();
    });

    $('#aatehistoriallinen-link').find('a').on('click', function() {
        $('#aatehistoriallinen-submenu').show();
        $('#aatehistoriallinen-esittely').show();
        $('#aatehistoriallinen-kansa').hide();
        $('#aatehistoriallinen-perhe').hide();
        $('#aatehistoriallinen-kehys').hide();
        $('#temaattinen-esittely').hide();
        $('#temaattinen-lyriikka').hide();
        $('#temaattinen-toimitustavat').hide();
        $('#geneettinen-esittely').hide();
        $('#geneettinen-content').hide();
        $('#geneettinen-content-2').hide();
        $('#geneettinen-versiot').hide();
        $('#geneettinen-vertailu').hide();
        $('#yleisesittely').hide();
        $('#kielellinen-submenu').hide();
        $('#kielellinen-esittely').hide();
        $('#kielellinen-suomi').hide();
        $('#kielellinen-periaatteet').hide();
        $('#traditio-content').hide();
        $('#traditio-content-2').hide();
        $('#traditio-esittely').hide();
        $('#traditio-skvr').hide();
        $('#traditio-submenu').hide();
        $('#temaattinen-submenu').hide();
        $('#geneettinen-submenu').hide();
    });

    $('#aatehistoriallinen-submenu1').find('a').on('click', function() {
      $('#temaattinen-lyriikka').hide();
      $('#yleisesittely').hide();
      $('#temaattinen-esittely').hide();
      $('#temaattinen-toimitustavat').hide();
      $('#temaattinen-lyriikka').hide();
      $('#geneettinen-content').hide();
      $('#traditio-content').hide();
      $('#traditio-content-2').hide();
      $('#traditio-esittely').hide();
      $('#traditio-skvr').hide();
      $('#geneettinen-esittely').hide();
      $('#geneettinen-versiot').hide();
      $('#geneettinen-vertailu').hide();
      $('#geneettinen-content').hide();
      $('#geneettinen-content-2').hide();
      $('#kielellinen-esittely').hide();
      $('#kielellinen-suomi').hide();
      $('#kielellinen-periaatteet').hide();
      $('#aatehistoriallinen-esittely').hide();
      $('#aatehistoriallinen-kehys').show();
      $('#aatehistoriallinen-kansa').hide();
      $('#aatehistoriallinen-perhe').hide();
    });

    $('#aatehistoriallinen-submenu2').find('a').on('click', function() {
      $('#temaattinen-lyriikka').hide();
      $('#yleisesittely').hide();
      $('#temaattinen-esittely').hide();
      $('#temaattinen-toimitustavat').hide();
      $('#temaattinen-lyriikka').hide();
      $('#geneettinen-content').hide();
      $('#traditio-content').hide();
      $('#traditio-content-2').hide();
      $('#traditio-esittely').hide();
      $('#traditio-skvr').hide();
      $('#geneettinen-esittely').hide();
      $('#geneettinen-versiot').hide();
      $('#geneettinen-vertailu').hide();
      $('#geneettinen-content').hide();
      $('#geneettinen-content-2').hide();
      $('#kielellinen-esittely').hide();
      $('#kielellinen-suomi').hide();
      $('#kielellinen-periaatteet').hide();
      $('#aatehistoriallinen-esittely').hide();
      $('#aatehistoriallinen-kansa').show();
      $('#aatehistoriallinen-perhe').hide();
      $('#aatehistoriallinen-kehys').hide();
    });

    $('#aatehistoriallinen-submenu3').find('a').on('click', function() {
      $('#yleisesittely').hide();
      $('#temaattinen-esittely').hide();
      $('#temaattinen-toimitustavat').hide();
      $('#temaattinen-lyriikka').hide();
      $('#geneettinen-content').hide();
      $('#traditio-content').hide();
      $('#traditio-content-2').hide();
      $('#traditio-esittely').hide();
      $('#traditio-skvr').hide();
      $('#geneettinen-esittely').hide();
      $('#geneettinen-versiot').hide();
      $('#geneettinen-vertailu').hide();
      $('#geneettinen-content').hide();
      $('#geneettinen-content-2').hide();
      $('#kielellinen-esittely').hide();
      $('#kielellinen-suomi').hide();
      $('#kielellinen-periaatteet').hide();
      $('#aatehistoriallinen-esittely').hide();
      $('#aatehistoriallinen-kansa').hide();
      $('#aatehistoriallinen-perhe').show();
      $('#aatehistoriallinen-kehys').hide();
    });

    $('#geneettinen-more').on('click', function() {
      if ($('#geneettinen-content-2').is(':hidden')) {
        $('#geneettinen-content-2').show();
      } else {
        $('#geneettinen-content-2').hide();
      }
    });

    $('#kaukonen-more').on('click', function() {
      if ($('#traditio-content-2').is(':hidden')) {
        $('#traditio-content-2').show();
      } else {
        $('#traditio-content-2').hide();
      }
    });

    $('#runot-nav').find('li').eq(0).find('a').click(function() {
      $(this).parent().parent().parent().next().find('ul').eq(0).show();
      $(this).parent().parent().parent().next().find('ul').eq(1).hide();
      $(this).parent().parent().parent().next().find('ul').eq(2).hide();
      $(this).parent().parent().parent().next().find('ul').eq(3).hide();
    });

    $('#runot-nav').find('li').eq(1).find('a').click(function() {
      $(this).parent().parent().parent().next().find('ul').eq(1).show();
      $(this).parent().parent().parent().next().find('ul').eq(0).hide();
      $(this).parent().parent().parent().next().find('ul').eq(2).hide();
      $(this).parent().parent().parent().next().find('ul').eq(3).hide();
    });

    $('#runot-nav').find('li').eq(2).find('a').click(function() {
      $(this).parent().parent().parent().next().find('ul').eq(2).show();
      $(this).parent().parent().parent().next().find('ul').eq(0).hide();
      $(this).parent().parent().parent().next().find('ul').eq(1).hide();
      $(this).parent().parent().parent().next().find('ul').eq(3).hide();
    });

    $('#runot-nav').find('li').eq(3).find('a').click(function() {
      $(this).parent().parent().parent().next().find('ul').eq(3).show();
      $(this).parent().parent().parent().next().find('ul').eq(0).hide();
      $(this).parent().parent().parent().next().find('ul').eq(1).hide();
      $(this).parent().parent().parent().next().find('ul').eq(2).hide();
    });

    /* popup comments, show extended description */

    $('.more').on('click', function() {
     $('#show_col_3').css('padding','1em');
     $('#show_col_3').html($(this).parent().next().html());
     $('#switchImg').hide();
     $('#show_col_3').html($('#show_col_3').html().replace('Mythologia Fennica','<em>Mythologia Fennica</em>'));
    });

    /* show longer commentaries in third column */
    $('.tooltp2').on('click', function() {
     $('#show_col_3').css('padding','1em');
     $('#show_col_3').html($(this).next('.value3').html());
     $.each(skvr, function(key, value) {
        var regex = new RegExp(key, 'gi');
        if (key != 'I1 234') {
          $('#show_col_3').html($('#show_col_3')
          .html()
          .replace(regex,'<a href="' + value + '" target="_blank">' + key + '</a>'));
        }
      });
      $('#show_col_3').find('a.tooltp').each(function() {
        $(this).hover(function() {
          $(this).next('.value1').css('margin-left','-20px');
        });
      });
    });


    /* Dynamically add SKVR links from skvr.js to commentary texts shown in 3rd column */
    $('.tooltp3').on('click', function() {
     $('#show_col_3').css('padding','1em');
     $('#show_col_3').html($(this).next('.value3').html());
     $.each(skvr, function(key, value) {
        var regex = new RegExp(key, 'gi');
        $('#show_col_3').html($('#show_col_3')
        .html()
        .replace(regex,'<a href="' + value + '" target="_blank">' + key + '</a>'));
      });
    });

    /* show/hide popup comments and links for longer commentaries in third column */
    $('#pic_nav1').find('input').on('click',function() {
      if ($(this).is(':checked')) {
        $('.tooltp').css('background-color','rgba(205, 161, 191, 0.7)');
      } else {
        $('.tooltp').css('background-color','#fff');
      }
    });

    $('#pic_nav2').find('input').on('click',function() {
      if ($(this).is(':checked')) {
        $('.tooltp3').show();

      } else {
        $('.tooltp3').hide();
      }
    });

    $('#pic_nav3').find('input').on('click',function() {
      if ($(this).is(':checked')) {
        $('.tooltp2').show();

      } else {
        $('.tooltp2').hide();
      }
    });

    $('.resultsBtn').on('click',function() {
      if ($(this).parent().next('.hl').is(":visible")) {
        $(this).parent().next().hide();
      } else {
        $(this).parent().next('.hl').show();
        $(this).parent().next('.hl').find('li:contains("Kommentaarit")').first().css('margin-top','1em');
      }
    });

    $('.result-header:contains("Kirjallisuus")').find('.resultsBtn').on('click',function() {
      if ($(this).parent().parent().next('.hl').is(":visible")) {
        $(this).parent().parent().next().hide();
      } else {
        $(this).parent().parent().next('.hl').show();
        $(this).parent().parent().next('.hl').find('li:contains("Kommentaarit")').first().css('margin-top','1em');
      }
    });

    // Show/hide items in collections on front pages
    $('.coll_title').on('click',function() {
      if ($(this).next('.coll_items').find('ul').is(':visible')) {
        $(this).next('.coll_items').find('ul').hide();
      } else {
        $(this).next('.coll_items').find('ul').show();
      }
    });

    $('.coll-more').on('click',function() {
      if ($(this).parent().parent().next('div').is(':visible')) {
        $(this).parent().parent().next('div').hide();
      } else {
        $(this).parent().parent().next('div').show();
      }
    });
});
