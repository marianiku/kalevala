$(document).ready(function(){
    $('#esipuhe-link').find('a').on('click', function() {
      $('p#esipuhe-content').show();
      $('p#tekstit-list').hide();
    });

    $('#tekstit-link').find('a').on('click', function() {
      $('p#esipuhe-content').hide();
      $('p#tekstit-list').show();
    });

    $('#geneettinen-link').find('a').on('click', function() {
      $('div#geneettinen-content').show();
      $('div#kaukonen-content').hide();
    });
    $('#kaukonen-link').find('a').on('click', function() {
      $('div#geneettinen-content').hide();
      $('div#kaukonen-content').show();
    });
});
