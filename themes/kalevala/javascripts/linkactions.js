$(document).ready(function(){

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

    $('.more').on('click', function() {
     $('#show_col_3').css('padding','1em');
     $('#show_col_3').html($(this).parent().next().html());
    });

    $('#showFacs').find('a').on('click', function() {
      if ($('#show_col_3').html() !== $('#item1_facsimiles').html()) {
        $('#show_col_3').html($('#item1_facsimiles').html()).css('padding','0px');
      } else {
        $('#show_col_3').html('');
      }
    });

    var i = 0;

    $('#esipuheNext').on('click', function(event) {

      if (i == 10) {
        return false;
      }
      var currentPic = $('#esipuhe-content').find('img:eq(' + i + ')');
      var nextPic = currentPic.next();
      if (nextPic) {
        nextPic.show();
        currentPic.hide();
      }

      i++;
    });

    $('#esipuhePrev').on('click', function() {

      if (i == 0) {
        return false;
      }

      var currentPic = $('#esipuhe-content').find('img:eq(' + i + ')');
      var prevPic = currentPic.prev();
      if (prevPic != null) {
        prevPic.show();
        currentPic.hide();
      } else {
        return false;
      }

      i--;
    });
});
