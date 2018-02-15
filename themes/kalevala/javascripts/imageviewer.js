// Käsin rakennetun viewerin + XML-transkription zoomaus-, sivutus- ym. toiminnot

$(document).ready(function() {

  // zoomable and movable images in first column, uses javascripts/wheelzoom.js
  wheelzoom($('.pic'));

  // Load key/value pairs from comments.js and create popups
  $.each(comments, function(key, value) {

    inPopup = $('.value1').text().indexOf(key);
    // Regex to find each key with case endings, until following space/punctuation character
    regex = new RegExp(key + '[^(\\s|\.|,|\<|;|\"|\?)]*');
    var str = 'Laiha poika ';
    regex2 = new RegExp('[^' + str + ']' + key);

    // 'Kalevalan' and 'lappalainen' appear first time in popup, hack to find next occurrences
    if (key == 'Kalevalan') {
      $("#show_col_2").html($("#show_col_2").html()
      .replace(key + ' kankahilla','<a class="tooltp" href="#">' + key + '</a>'
      + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span> kankahilla'));
    } else if (key == 'lappalainen') {
      $("#show_col_2").html($("#show_col_2").html()
      .replace('Laiha poika ' + key,'Laiha poika <a class="tooltp" href="#">' + key + '</a>'
      + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
    // This appears first in wrong context, hack to find occurrence in correct context
    } else if (key == 'kaarta') {
      $("#show_col_2").html($("#show_col_2").html()
      .replace('mulla ' + key,'mulla <a class="tooltp" href="#">' + key + '</a>'
      + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
    // These two appear as part of another word for the first time in 3rd poem - need to find key preced by space
    } else if (key == 'naisen' || key == 'leuan') {
      $("#show_col_2").html($("#show_col_2").html().replace(' ' + key,' <a class="tooltp" href="#">' + key + '</a>'
      + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
    } else {
    // Otherwise search with regex
      $("#show_col_2").html($("#show_col_2").html().
      replace(regex,'<a class="tooltp" href="#">$&</a>'
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

  // display facsimile images in third column
  $('#showFacs').find('a').on('click', function() {
    $('#show_col_3').html($('#item1_facsimiles').html()).css('padding','0px');
    $('#show_col_3').find('img').css('padding','0px');
    setTimeout(function() {
      wheelzoom($('#show_col_3').find('img'));
    }, 500);
  });
});
