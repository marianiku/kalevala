// Pagination

$(document).ready(function() {

    // wrap content between pb-tags (page tags) in DIV
    $('.pb').each(function() {
       if ($(this).nextUntil('.pb')) {
           $(this).nextUntil('.pb').andSelf().wrapAll('<div xmlns="http://www.w3.org/1999/xhtml" class="page"></div>');
       } else {
           $(this).nextAll('lg').andSelf().wrapAll('<div xmlns="http://www.w3.org/1999/xhtml" class="page"></div>');
       }
     });

    // hide all but first page at start
    $('.page').not('.page:eq(0)').hide();

    // popup comments: position needs to be set manually because of container edges
    $('a.tooltp').each(function() {
      $(this).hover(function() {
        if ($(this).position().left >= 240) {
          $(this).next('.value1').css('margin-left','-50%');
        } else {
          $(this).next('.value1').css('margin-left','-10%');
        }

        if ($(this).position().top >= 1000) {
          $(this).next('.value1').css('margin-top','-30px');
        }
      });
    });

    $('.snippet').find('b:contains("Tietosivut")').parent().parent().parent().css('font-style','normal');
    $('.snippet').find('span').css('font-style','normal');

    $('.item-pagination').find('#next-item').prop('title','seuraava runo (esipuhe)');
    $('.item-pagination').find('#previous-item').prop('title','seuraava runo (esipuhe)');

});
