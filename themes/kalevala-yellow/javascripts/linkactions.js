$(document).ready(function(){

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

    /* popup comments, show extended description */

    $('.more').on('click', function() {
     $('#show_col_3').css('padding','1em');
     $('#show_col_3').html($(this).parent().next().html());
     $('#switchImg').hide();
    });

    $('.tooltp2').on('click', function() {
     $('#show_col_3').css('padding','1em');
     $('#show_col_3').html($(this).find('.value3').html());
     $('#show_col_3').html($('#show_col_3').html().replace('JS:','<span class="bolded">JS:</span>'));
     $('#show_col_3').html($('#show_col_3').html().replace('NH:','<span class="bolded">NH:</span>'));
    });

});
