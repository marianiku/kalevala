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

    /* image switching in Simple Pages pages */
    var i = 0;
    var j = 0;

    $('#esipuheNext').on('click', function(event) {

      if (i == 10) {
        return false;
      }
      var currentPic = $('#esipuhe-content').find('.esipuhe_pic1:eq(' + i + ')');
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

      var currentPic = $('#esipuhe-content').find('.esipuhe_pic1:eq(' + i + ')');
      var prevPic = currentPic.prev();
      if (prevPic != null) {
        prevPic.show();
        currentPic.hide();
      } else {
        return false;
      }

      i--;

    });

    $('#esipuheNext2').on('click', function(event) {

        if (j == 10) {
          return false;
        }

        var currentPic = $('#esipuhe-content').find('.esipuhe_pic2:eq(' + j + ')');
        var nextPic = currentPic.next();
        if (nextPic) {
          nextPic.show();
          currentPic.hide();
        }

        j++;
    });

    $('#esipuhePrev2').on('click', function() {

        if (j == 0) {
          return false;
        }

        var currentPic = $('#esipuhe-content').find('.esipuhe_pic2:eq(' + j + ')');
        var prevPic = currentPic.prev();
        if (prevPic != null) {
          prevPic.show();
          currentPic.hide();
        } else {
          return false;
        }

        j--;
    });
});
