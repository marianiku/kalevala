$(document).ready(function() {


    /* Clicking actions in Simple pages page menus: hide/show */
    $('#esipuhe-link').find('a').on('click', function() {
      $('#esipuhe-content').show();
      $('#esipuhe-intro').show();
      $('#tekstit-list').hide();
    });

    $('#tekstit-link').find('a').on('click', function() {
      $('#esipuhe-content').hide();
      $('#esipuhe-intro').hide();
      $('#tekstit-list').show();
    });

    $('#geneettinen-link').find('a').on('click', function() {
      if ($('#geneettinen-submenu').is(':hidden')) {
        $('#geneettinen-submenu').show();
      } else {
        $('#geneettinen-submenu').hide();
      }
    });

    $('#geneettinen-submenu1').find('a').on('click', function() {
      $('#yleisesittely').hide();
      $('#geneettinen-esittely').show();
      $('#geneettinen-versiot').hide();
      $('#geneettinen-vertailu').hide();
      $('#geneettinen-content').hide();
      $('#geneettinen-content-2').hide();
      $('#temaattinen-esittely').hide();
      $('#temaattinen-toimitustavat').hide();
      $('#kaukonen-content').hide();
      $('#kaukonen-content-2').hide();
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
      $('#kaukonen-content').hide();
      $('#kaukonen-content-2').hide();
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
      $('#kaukonen-content').hide();
      $('#kaukonen-content-2').hide();
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
      $('#kaukonen-content').hide();
      $('#kaukonen-content-2').hide();
    });

    $('#kaukonen-link').find('a').on('click', function() {
      $('#yleisesittely').hide();
      $('#geneettinen-content').hide();
      $('#kaukonen-content').show();
      $('#kaukonen-content-2').show();
      $('#temaattinen-esittely').hide()
      $('#temaattinen-toimitustavat').hide()
      $('#geneettinen-esittely').hide();
      $('#geneettinen-versiot').hide();
      $('#geneettinen-vertailu').hide();
      $('#geneettinen-content').hide();
      $('#geneettinen-content-2').hide();
    });

    $('#temaattinen-link').find('a').on('click', function() {
      if ($('#temaattinen-submenu').is(':hidden')) {
        $('#temaattinen-submenu').show();
      } else {
        $('#temaattinen-submenu').hide();
      }
    });

    $('#temaattinen-submenu1').find('a').on('click', function() {
      $('#yleisesittely').hide();
      $('#temaattinen-esittely').show()
      $('#temaattinen-toimitustavat').hide()
      $('#geneettinen-content').hide();
      $('#kaukonen-content').hide();
      $('#kaukonen-content-2').hide();
      $('#geneettinen-esittely').hide();
      $('#geneettinen-versiot').hide();
      $('#geneettinen-vertailu').hide();
      $('#geneettinen-content').hide();
      $('#geneettinen-content-2').hide();
    });

    $('#temaattinen-submenu2').find('a').on('click', function() {
      $('#yleisesittely').hide();
      $('#temaattinen-esittely').hide()
      $('#temaattinen-toimitustavat').show()
      $('#geneettinen-content').hide();
      $('#kaukonen-content').hide();
      $('#kaukonen-content-2').hide();
      $('#geneettinen-esittely').hide();
      $('#geneettinen-versiot').hide();
      $('#geneettinen-vertailu').hide();
      $('#geneettinen-content').hide();
      $('#geneettinen-content-2').hide();
    });

    $('#geneettinen-more').on('click', function() {
      if ($('#geneettinen-content-2').is(':hidden')) {
        $('#geneettinen-content-2').show();
      } else {
        $('#geneettinen-content-2').hide();
      }
    });

    $('#kaukonen-more').on('click', function() {
      if ($('#kaukonen-ohjeet').is(':hidden')) {
        $('#kaukonen-ohjeet').show();
      } else {
        $('#kaukonen-ohjeet').hide();
      }
    });

    $('#runot-nav').find('li').eq(0).find('a').click(function() {
      $(this).parent().parent().parent().next().find('ul').eq(0).show();
      $(this).parent().parent().parent().next().find('ul').eq(1).hide();
      $(this).parent().parent().parent().next().find('ul').eq(2).hide();
    });

    $('#runot-nav').find('li').eq(1).find('a').click(function() {
      $(this).parent().parent().parent().next().find('ul').eq(1).show();
      $(this).parent().parent().parent().next().find('ul').eq(0).hide();
      $(this).parent().parent().parent().next().find('ul').eq(2).hide();
    });

    $('#runot-nav').find('li').eq(2).find('a').click(function() {
      $(this).parent().parent().parent().next().find('ul').eq(2).show();
      $(this).parent().parent().parent().next().find('ul').eq(0).hide();
      $(this).parent().parent().parent().next().find('ul').eq(1).hide();
    });

    /* popup comments, show extended description */

    $('.more').on('click', function() {
     $('#show_col_3').css('padding','1em');
     $('#show_col_3').html($(this).parent().next().html());
     $('#switchImg').hide();
    });

    /* show longer commentaries in third column */
    $('.tooltp2').on('click', function() {
     $('#show_col_3').css('padding','1em');
     $('#show_col_3').html($(this).next('.value3').html());
     $('#show_col_3').html($('#show_col_3').html().replace('Väinö Kaukonen','<span class="blue">Väinö Kaukonen</span>'));
     $('#show_col_3').html($('#show_col_3').html().replace('Niina Hämäläinen','<span class="red">Niina Hämäläinen</span>'));
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
        $('.tooltp').css('background-color','#92b6f9');
      } else {
        $('.tooltp').css('background-color','');
      }
    });

    $('#pic_nav2').find('input').on('click',function() {
      if ($(this).is(':checked')) {
        $('.tooltp2').show();

      } else {
        $('.tooltp2').hide();
      }
    });

});
