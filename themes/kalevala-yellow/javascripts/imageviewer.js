// Käsin rakennetun viewerin + XML-transkription zoomaus-, sivutus- ym. toiminnot

$(document).ready(function() {

  // zoomable and movable images in first column, uses javascripts/wheelzoom.js
  wheelzoom($('.pic'));

  // Load key/value pairs from comments.js and create popups
  $.each(comments, function(key, value) {

    // Regex to find each key with case endings, until following space/punctuation character
    var regex = new RegExp(key + '[^(\\s|\.|,|\<|;|\"|\?)]*');

    var keys1 = ['naisen', 'leuan', 'ahoilla', 'yöhyt', 'kapo', 'eritä', 'aisa', 'lakea', 'kirjat', 'rahin','ilmalla','iät','aloa','ahoja'];
    var keys2 = ['Vähä', 'kanta', 'Vemmel', 'vaski', 'Syän', 'Ikä', 'toimi', 'kuulun', 'Uros', 'Otava', 'Luovu', 'Rotu','Mi','Ku','Untamo',
    'Vaski','mokoma', 'Koko', 'runojan','ikänä','suora','Sai'];
    var keys3 = ['ikä','ani','tieto','eleä','impi','iät','mielin','sanoma','kassan'];
    var keys4 = ['Wäinämöi','Joukahai','Lemminkäi','Ilmari','Aino','Wäinölä','maammo','nureksi','pientare','saneli','sorea','taatto','korea'];

    if ($("#show_col_2").html() != undefined) {
      // Appear first as part of another word, find key preceded, followed or surrounded by space
      if (keys1.indexOf(key) >= 0) {
        $("#show_col_2").html($("#show_col_2").html().replace(' ' + key,' <a class="tooltp" href="#">' + key + '</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
      } else if (keys2.indexOf(key) >= 0) {
        $("#show_col_2").html($("#show_col_2").html().replace(key + ' ','<a class="tooltp" href="#">' + key + '</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span> '));
      } else if (keys3.indexOf(key) >= 0) {
        $("#show_col_2").html($("#show_col_2").html().replace(' ' + key + ' ',' <a class="tooltp" href="#">' + key + '</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span> '));
      // Account for declinated forms too
      } else if (keys4.indexOf(key) >= 0) {
        $("#show_col_2").html($("#show_col_2").html().replace(regex,'<a class="tooltp" href="#">$&</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
      // First occurrence in wrong context (e.g. popup), find next one
      } else if (key == 'Sampo') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key + ' ei','<a class="tooltp" href="#">' + key + '</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span> ei'));
      } else if (key == 'Kalevalan') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key + ' kankahilla','<a class="tooltp" href="#">' + key + '</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span> kankahilla'));
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key + ' kankahilta','<a class="tooltp" href="#">' + key + '</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span> kankahilta'));
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key + ' kannaksia','<a class="tooltp" href="#">' + key + '</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span> kannaksia'));
      } else if (key == 'lappalainen') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace('Laiha poika ' + key,'Laiha poika <a class="tooltp" href="#">' + key + '</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
      } else if (key == 'Louhi') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace('Eikä ' + key,'Eikä <a class="tooltp" href="#">' + key + '</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
      } else if (key == 'kokko') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace('Lenti ' + key,'Lenti <a class="tooltp" href="#">' + key + '</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
      } else if (key == 'vetone') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace('vellova ' + key,'vellova <a class="tooltp" href="#">' + key + '</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
      } else if (key == 'sirkeämpi') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key + ',','<a class="tooltp" href="#">' + key + '</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>,'));
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
        // Different explanation in different contexts, look for substrings including key
      } else if (key == 'naisen muisti') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'<a class="tooltp" href="#">naisen</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span> muisti'));
      } else if (key == 'Kussa ilman') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'Kussa <a class="tooltp" href="#">ilman</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
      } else if (key == 'Ajatukset arvoisessa') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'Ajatukset <a class="tooltp" href="#">arvoisessa</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
      } else if (key == 'Kaikki toimi') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'Kaikki <a class="tooltp" href="#">toimi</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
      } else if (key == 'Saata maalle') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'Saata <a class="tooltp" href="#">maalle</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
      } else if (key == 'Kuu keritä') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'Kuu <a class="tooltp" href="#">keritä</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
      } else if (key == 'vaarnanen varottu') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'vaarnanen <a class="tooltp" href="#">varottu</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
      } else if (key == 'miestä oppimahan') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'miestä <a class="tooltp" href="#">oppimahan</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
      } else if (key == 'virttä virkkoi') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'virttä <a class="tooltp" href="#">virkkoi</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
      } else if (key == 'Sanan virkkoi') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'Sanan <a class="tooltp" href="#">virkkoi</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
      } else if (key == 'Kuuta taivon') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'Kuuta <a class="tooltp" href="#">taivon</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
      } else if (key == 'suurenen suvehen') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'suurenen <a class="tooltp" href="#">suvehen</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
      } else if (key == 'vierähti suvehen') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'vierähti <a class="tooltp" href="#">suvehen</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
      } else if (key == 'Lähteäni laulamahan') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'Lähteäni <a class="tooltp" href="#">laulamahan</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
      } else if (key == 'tammen kaata') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'tammen <a class="tooltp" href="#">kaata</a>'
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
      } else if (key == 'Päivän heitti') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'<a class="tooltp" href="#">Päivän</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span> heitti'));
      } else if (key == 'ussakan utuisen') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'ussakan <a class="tooltp" href="#">utuisen</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
      } else if (key == 'minun utuisen') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'minun <a class="tooltp" href="#">utuisen</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
      } else if (key == 'isoni tieto') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'isoni <a class="tooltp" href="#">tieto</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
      } else if (key == 'kultia kypärin') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'kultia <a class="tooltp" href="#">kypärin</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
      } else if (key == 'Tinarinta riukuttele') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'<a class="tooltp" href="#">Tinarinta</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span> riukuttele'));
      } else if (key == 'Tinarinta riutununna') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'<a class="tooltp" href="#">Tinarinta</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span> riutununna'));
      } else if (key == 'utuisen niemen') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'<a class="tooltp" href="#">utuisen</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span> niemen'));
      } else if (key == 'päivyt päästä') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'<a class="tooltp" href="#">päivyt</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span> päästä'));
      } else if (key == 'emo imettäjäni') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'<a class="tooltp" href="#">emo</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span> imettäjäni'));
      } else if (key == 'Pohjan mailla') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'<a class="tooltp" href="#">Pohjan</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span> mailla'));
      } else if (key == 'Pohjan tyttärihin') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'<a class="tooltp" href="#">Pohjan</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span> tyttärihin'));
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
      } else if (key == 'tulisen tammen') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'<a class="tooltp" href="#">tulisen</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span> tammen'));
      } else if (key == 'tulisen synnyn') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'<a class="tooltp" href="#">tulisen</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span> synnyn'));
      } else if (key == 'emo elossa') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'<a class="tooltp" href="#">emo</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span> elossa'));
      } else if (key == 'lemmen lehti') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key,'<a class="tooltp" href="#">lemmen</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span> lehti'));
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
      } else if (key == 'pilviä pitävi') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key, 'pilviä <a class="tooltp" href="#">pitävi</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span>'));
      } else if (key == 'Vaaksan palttina') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key, '<a class="tooltp" href="#">Vaaksan</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span> palttina'));
      } else if (key == 'Vaaksan varsi') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key, '<a class="tooltp" href="#">Vaaksan</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span> varsi'));
      } else if (key == 'Vaaksan korkeuinen') {
        $("#show_col_2").html($("#show_col_2").html()
        .replace(key, '<a class="tooltp" href="#">Vaaksan</a>'
        + '<span class="value1">' + value[0] + '</span><span class="value2">' + value[1] + '</span> korkeuinen'));
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
