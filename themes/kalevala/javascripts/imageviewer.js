// Käsin rakennetun viewerin + XML-transkription zoomaus-, sivutus- ym. toiminnot

$(document).ready(function() {

  // zoomable and movable images in first column, uses javascripts/wheelzoom.js
  wheelzoom($('.pic'));

  // Load key/value pairs from comments.js and create popups
  $.each(comments, function(key, value) {

    // Regex to find each key with case endings, until following space/punctuation character
    regex = new RegExp(key + '[^(\\s|\.|,|\<|;|\"|\?)]*');


    if ($("#show_col_2").html() != undefined) {
      // 'Kalevalan', 'lappalainen' and 'sirkeämpi' appear first time in popup, find next occurrences
      if (key == 'Kalevalan') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key + ' kankahilla','<a class="tooltp" href="#">' + key + '</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span> kankahilla'));
      } else if (key == 'lappalainen') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace('Laiha poika ' + key,'Laiha poika <a class="tooltp" href="#">' + key + '</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
      } else if (key == 'sirkeämpi') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key + ',','<a class="tooltp" href="#">' + key + '</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>,'));
        // This appears first in wrong context, find correct occurrence in from context
      } else if (key == 'kaarta') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace('mulla ' + key,'Laiha poika <a class="tooltp" href="#">' + key + '</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
        // These appear as part of another word for the first time; find key preceded, followed or surrounded by space
      } else if (key == 'naisen' || key == 'leuan' || key == 'ahoilla' || key == 'kana' || key == 'yöhyt') {
        $("#show_col_2").html($("#show_col_2").html().replace(' ' + key,' <a class="tooltp" href="#">' + key + '</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
      } else if (key == 'Vähä' || key == 'kanta' || key == 'Vemmel' || key == 'vaski' || key == 'saneli') {
        $("#show_col_2").html($("#show_col_2").html().replace(key + ' ','<a class="tooltp" href="#">' + key + '</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span> '));
      } else if (key == 'ikä') {
        $("#show_col_2").html($("#show_col_2").html().replace(' ' + key + ' ',' <a class="tooltp" href="#">' + key + '</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span> '));
        // Need to account for declinated forms with these
      } else if (key == 'Wäinämöi' || key == 'Joukahai' || key == 'Aino' || key == 'Wäinölä'
      || key == 'maammo' || key == 'iso' || key == 'nureksi' || key == 'pientare' || key == 'Syän') {
        $("#show_col_2").html($("#show_col_2").html().replace(regex,'<a class="tooltp" href="#">$&</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
        // 'utuisen' and 'katala' have different meanings, key needs preceding word for context, replace substring
      } else if (key == 'ussakan utuisen') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'ussakan <a class="tooltp" href="#">utuisen</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
      } else if (key == 'minun utuisen') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'minun <a class="tooltp" href="#">utuisen</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
      } else if (key == 'kanssasi katala') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'kanssasi <a class="tooltp" href="#">katala</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
      } else if (key == 'Katkeaisinki katala') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key, 'Katkeaisinki <a class="tooltp" href="#">katala</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
      } else if (key == 'Vaaksan palttina') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key, '<a class="tooltp" href="#">Vaaksan</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span> palttina'));
      } else if (key == 'Vaaksan varsi') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key, '<a class="tooltp" href="#">Vaaksan</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span> varsi'));
        // otherwise just replace key
      } else {
        $("#show_col_2").html($("#show_col_2").html().replace(key,'<a class="tooltp" href="#">' + key + '</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
      }
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
