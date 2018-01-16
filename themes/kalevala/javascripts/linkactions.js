$(document).ready(function(){
    $('#esipuhe-link').find('a').on('click', function() {
      $('p#esipuhe-content').show();
      $('p#tekstit-list').hide();
    });

    $('#tekstit-link').find('a').on('click', function() {
      $('p#esipuhe-content').hide();
      $('p#tekstit-list').show();
    });

    $('#geneettinen-link').find('a').on('click', function() {
      $('div#geneettinen-content').show();
      $('div#kaukonen-content').hide();
    });

    $('#kaukonen-link').find('a').on('click', function() {
      $('div#geneettinen-content').hide();
      $('div#kaukonen-content').show();
    });

    $('#geneettinen-more').on('click', function() {
      if ($('#geneettinen-content-2').is(':hidden')) {
        $('#geneettinen-content-2').show();
      } else {
        $('#geneettinen-content-2').hide();
      }
    });

    $('.more').on('click', function() {
     $('#show_col_3').css('padding','1em');
     $('#show_col_3').html($(this).parent().next().html());
    });

    $('#showFacs').find('a').on('click', function() {
      if ($('#show_col_3').html() !== $('#pic_storage').html()) {
        $('#show_col_3').html($('#pic_storage').html()).css('padding','0px'); 
      } else {
        $('#show_col_3').html('');
      }
    });
});
