// Käsin rakennetun viewerin + XML-transkription zoomaus-, sivutus- ym. toiminnot

$(document).ready(function() {

  // zoomable and movable images, uses javascripts/wheelzoom.js
  wheelzoom(document.querySelectorAll('.pic'));
  wheelzoom(document.querySelectorAll('.pic2'));

  // Lataa kommentit listasta ja tekee jokaiselle popupin
  $.each(comments, function(key, value) {
    var first = $('#show_col_2').text().indexOf(key);
    if (first >= 0) {
      var last = first + key.length;
      var str = $('#show_col_2').text().substring(first, last);

      // insert popup
      $("#show_col_2").html($("#show_col_2").html().replace(str,'<a class="tooltp" href="#">' + str + '</a>'
      + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
    }
  });

  // Kuvien & sivujen näyttö. Aluksi näytetään ensimmäinen kuva & vastavaan sivun transkriptio
  $('.pic').not('.pic:first').hide();
  var i = 0;
  var j = 0;

  // Selaus eteenpäin
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

  // Selaus taaksepäin
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

});
