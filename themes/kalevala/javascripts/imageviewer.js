// Käsin rakennetun viewerin + XML-transkription zoomaus-, sivutus- ym. toiminnot

$(document).ready(function() {

  // zoomable and movable images in first column, uses javascripts/wheelzoom.js

  wheelzoom($('.pic'));
    // Lataa kommentit listasta ja tekee jokaiselle popupin
  $.each(comments, function(key, value) {

    var regex = new RegExp(key + '+(?=(\\s|.|,|;)){' + 1 + '}','m');
    var first = $('#show_col_2').text().indexOf(key);

    var before = $('#show_col_2').text().charAt(first-1);
    var after = $('#show_col_2').text().charAt(first+key.length);
    if (key == 'naisen' || key == 'leuan') {
      $("#show_col_2").html($("#show_col_2").html().replace(' ' + key,' <a class="tooltp" href="#">' + key + '</a>'
      + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
    } else if (key == 'tieto') {
      $("#show_col_2").html($("#show_col_2").html().replace(key,'<a class="tooltp" href="#">' + key + '</a>'
      + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
    } else {
      $("#show_col_2").html($("#show_col_2").html().replace(key,'<a class="tooltp" href="#">' + key + '</a>'
      + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
    }
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

  /* display facsimile in third column */

  $('#showFacs').find('a').on('click', function() {
    $('#show_col_3').html($('#item1_facsimiles').html()).css('padding','0px');
    $('#show_col_3').find('img').css('padding','0px');
    setTimeout(function() {
      wheelzoom($('#show_col_3').find('img'));
    }, 500);
  });
});
