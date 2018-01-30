$(document).ready(function(){

    /* Clicking actions in Simple pages page menus */
    $('#esipuhe-link').find('a').on('click', function() {
      $('#esipuhe-content').show();
      $('#tekstit-list').hide();
    });

    $('#tekstit-link').find('a').on('click', function() {
      $('#esipuhe-content').hide();
      $('#tekstit-list').show();
    });

    $('#geneettinen-link').find('a').on('click', function() {
      $('#geneettinen-content').show();
      $('#kaukonen-content').hide();
    });

    $('#kaukonen-link').find('a').on('click', function() {
      $('#geneettinen-content').hide();
      $('#kaukonen-content').show();
    });

    $('#geneettinen-more').on('click', function() {
      if ($('#geneettinen-content-2').is(':hidden')) {
        $('#geneettinen-content-2').show();
      } else {
        $('#geneettinen-content-2').hide();
      }
    });

    /* popup comments, show extended description */

    $('.more').on('click', function() {
     $('#show_col_3').css('padding','1em');
     $('#show_col_3').html($(this).parent().next().html());
     $('#switchImg').hide();
    });

});
