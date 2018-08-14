// PHP-käännetyn XML-transkription muotoilut

$(document).ready(function() {

    $('.pb').each(function() {
       if ($(this).nextUntil('.pb')) {
           $(this).nextUntil('.pb').andSelf().wrapAll('<div xmlns="http://www.w3.org/1999/xhtml" class="page"></div>');
       } else {
           $(this).nextAll('lg').andSelf().wrapAll('<div xmlns="http://www.w3.org/1999/xhtml" class="page"></div>');
       }
     });

    $('.page').not('.page:eq(0)').hide();

});
