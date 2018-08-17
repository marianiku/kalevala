$(document).ready(function() {


  /* Add image content dynamically in Simple Pages page for Kalevala foreword, images
  stored in plugins/SimplePages/views/public/page/show.html */

  // Set image content
  $('#esipuhe-content')
  .find('.row:nth-child(2)')
  .find('.col-5').html($('#esipuhe_printed').html());

  $('#esipuhe-content')
  .find('.row:nth-child(2)')
  .find('.col-7').html($('#esipuhe_facsimile').html());

  // Set first image visible
  $('#esipuhe-content').find('.row:nth-child(2)').find('.col-5').find('img:nth-child(1)').show();
  $('#esipuhe-content').find('.row:nth-child(2)').find('.col-7').find('img:nth-child(1)').show();

  // Set zooming
  wheelzoom($('#esipuhe-content').find('.row:nth-child(2)').find('.col-5').find('img'));
  wheelzoom($('#esipuhe-content').find('.row:nth-child(2)').find('.col-7').find('img'));

  // Image switching
  var i = 0;
  var j = 0;

  $('#esipuheNext').on('click', function(event) {

    if (i == 10) {
      return false;
    }

    var currentPic = $('#esipuhe-content').find('.pic3:eq(' + i + ')');
    var nextPic = currentPic.next();
    if (nextPic) {
      currentPic.hide();
      nextPic.show();
    }

    i++;
  });

  $('#esipuhePrev').on('click', function() {

    if (i == 0) {
      return false;
    }

    var currentPic = $('#esipuhe-content').find('.pic3:eq(' + i + ')');
    var prevPic = currentPic.prev();
    if (prevPic != null) {
      prevPic.show();
      currentPic.hide();
    }

    i--;

  });

  $('#esipuheNext2').on('click', function(event) {

      if (j == 60) {
        return false;
      }

      var currentPic = $('#esipuhe-content').find('.pic4:eq(' + j + ')');
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

      var currentPic = $('#esipuhe-content').find('.pic4:eq(' + j + ')');
      var prevPic = currentPic.prev();
      if (prevPic != null) {
        prevPic.show();
        currentPic.hide();
      }

      j--;

  });
});
