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
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key + ' kannaksia','<a class="tooltp" href="#">' + key + '</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span> kannaksia'));
      } else if (key == 'lappalainen') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace('Laiha poika ' + key,'Laiha poika <a class="tooltp" href="#">' + key + '</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
      } else if (key == 'vetone') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace('vellova ' + key,'vellova <a class="tooltp" href="#">' + key + '</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
      } else if (key == 'sirkeämpi') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key + ',','<a class="tooltp" href="#">' + key + '</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>,'));
        // This appears first in wrong context, find correct occurrence from context
      } else if (key == 'kaarta') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace('mulla ' + key,'mulla <a class="tooltp" href="#">' + key + '</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
      } else if (key == 'vieremähän') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace('virkku ' + key,'virkku <a class="tooltp" href="#">' + key + '</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
      } else if (key == 'sanelemahan') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace('Saakamme ' + key,'Saakamme <a class="tooltp" href="#">' + key + '</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
        // These appear as part of another word for the first time; find key preceded, followed or surrounded by space
      } else if (key == 'naisen' || key == 'leuan' || key == 'ahoilla' || key == 'yöhyt' || key == 'kapo' || key == 'eritä'
        || key == 'aisa' || key == 'lakea' || key == 'kirjat' || key == 'rahin') {
        $("#show_col_2").html($("#show_col_2").html().replace(' ' + key,' <a class="tooltp" href="#">' + key + '</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
      } else if (key == 'Vähä' || key == 'kanta' || key == 'Vemmel' || key == 'vaski' || key == 'Syän' || key == 'Ikä' ||
        key == 'toimi' || key == 'kuulun' || key == 'Uros' || key == 'Otava' || key == 'Luovu' || key == 'Rotu') {
        $("#show_col_2").html($("#show_col_2").html().replace(key + ' ','<a class="tooltp" href="#">' + key + '</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span> '));
      } else if (key == 'ikä' || key == 'ani' || key == 'tieto' || key == 'eleä' || key == 'impi' || key == 'iät') {
        $("#show_col_2").html($("#show_col_2").html().replace(' ' + key + ' ',' <a class="tooltp" href="#">' + key + '</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span> '));
        // Need to account for declinated forms with these
      } else if (key == 'Wäinämöi' || key == 'Joukahai' || key == 'Aino' || key == 'Wäinölä'
      || key == 'maammo' || key == 'nureksi' || key == 'pientare' || key == 'saneli') {
        $("#show_col_2").html($("#show_col_2").html().replace(regex,'<a class="tooltp" href="#">$&</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
        // Different meanings in different places, key needs preceding word for context, replace substring
      } else if (key == 'Kuu keritä') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'Kuu <a class="tooltp" href="#">keritä</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
      } else if (key == 'miestä oppimahan') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'miest <a class="tooltp" href="#">keritä</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
      } else if (key == 'virttä virkkoi') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'virttä <a class="tooltp" href="#">virkkoi</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
      } else if (key == 'kohtua kovoa') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'kohtua <a class="tooltp" href="#">kovoa</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
      } else if (key == 'koskea kovoa') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'koskea <a class="tooltp" href="#">kovoa</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
      } else if (key == 'Uuen päivän') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'Uuen <a class="tooltp" href="#">päivän</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
      } else if (key == 'ussakan utuisen') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'ussakan <a class="tooltp" href="#">utuisen</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
      } else if (key == 'minun utuisen') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'minun <a class="tooltp" href="#">utuisen</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
      } else if (key == 'kultia kypärin') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'kultia <a class="tooltp" href="#">kypärin</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
      } else if (key == 'utuisen niemen') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'<a class="tooltp" href="#">utuisen</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span> niemen'));
      } else if (key == 'emo imettäjäni') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'<a class="tooltp" href="#">emo</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span> imettäjäni'));
      } else if (key == 'Jopa tiesi') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'<a class="tooltp" href="#">Jopa</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span> tiesi'));
      } else if (key == 'Vieri impi') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'<a class="tooltp" href="#">Vieri</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span> impi'));
      } else if (key == 'Vieri soita') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'<a class="tooltp" href="#">Vieri</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span> soita'));
      } else if (key == 'Ahon lasta') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'<a class="tooltp" href="#">Ahon</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span> lasta'));
      } else if (key == 'emo elossa') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'<a class="tooltp" href="#">emo</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span> elossa'));
      } else if (key == 'kana katosi') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'<a class="tooltp" href="#">kana</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span> katosi'));
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
