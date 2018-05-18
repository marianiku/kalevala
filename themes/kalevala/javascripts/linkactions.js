$(document).ready(function(){

    /* Clicking actions in Simple pages page menus */
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
      $('#geneettinen-content').show();
      $('#kaukonen-content').hide();
      $('#kaukonen-content-2').hide();
    });

    $('#kaukonen-link').find('a').on('click', function() {
      $('#geneettinen-content').hide();
      $('#kaukonen-content').show();
      $('#kaukonen-content-2').show();
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
     $('#show_col_3').html($(this).next('.value3').html());
     $('#show_col_3').html($('#show_col_3').html().replace('JS:','<span class="bolded">JS:</span>'));
     $('#show_col_3').html($('#show_col_3').html().replace('NH:','<span class="bolded">NH:</span>'));
    });

});
