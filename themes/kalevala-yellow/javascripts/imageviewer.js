// Käsin rakennetun viewerin + XML-transkription zoomaus-, sivutus- ym. toiminnot

$(document).ready(function() {

  // zoomable and movable images in first column, uses javascripts/wheelzoom.js
  wheelzoom($('.pic'));

  // Load key/value pairs from comments.js and create popups
  $.each(comments, function(key, value) {

        /*$("#show_col_2").html($("#show_col_2").html().replace(key,'<a class="tooltp" href="#">' + key + '</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));*/
  });

  // Display pictures and pages, show first picture + corresponding transcription first
  $('.pic').not('.pic:first').hide();
  var i = 0;
  var j = 0;


  // Forward
  $('#nextPic').click(function() {

    if (i == $('#show_col_2').find('.page').length-1) {
      return false;
    }

    var currentPage = $('#show_col_2').find('.page:eq(' + i + ')');
    var nextPage = currentPage.next();
    var currentPic = $('.pic:eq(' + j + ')');
    var nextPic = currentPic.next();

    if (nextPage) {
      nextPage.show().siblings('.page').hide();
      nextPic.show().siblings('.pic').hide();
      j++;
    }

    i++;

  });

  // Backward
  $('#prevPic').click(function() {

    if (i == 0) {
      return false;
    }

    $('.pic:eq(' + i + ')').hide();
    if ($('.pic:eq(' + i + ')').prev()) {
      $('.pic:eq(' + i + ')').prev().show().prevAll().hide();
    }

    var currentPage = $('#show_col_2').find('.page:eq(' + i + ')');
    var prevPage = currentPage.prev();
    var currentPic = $('.pic:eq(' + j + ')');
    var prevPic = currentPic.prev();

    if (prevPage) {
      prevPage.show().siblings('.page').hide();
      prevPic.show().siblings('.pic').hide();
      j--;
    }

    i--;
  });

  // display/hide facsimile images in third column
  $('#showFacs').find('a').on('click', function() {
    if (!$('#show_col_3').find('img').length) {
      $('#show_col_3').html($('#item1_facsimiles').html()).css('padding','0px');
      $('#show_col_3').find('img').css('padding','0px');
      setTimeout(function() {
        wheelzoom($('#show_col_3').find('img'));
      }, 500);
    } else {
      $('#show_col_3').html('');
    }
  });

  // display/hide commentary in third column
  $('#showComm').find('a').on('click', function() {
    if (!$('#show_col_3').find('p').length) {
      $('#show_col_3').html($('#item_commentary').html()).css('padding','1em');
    } else {
      $('#show_col_3').html('');
    }
  });
});
