 $(document).ready(function() {

    $('a.tooltp').on('hover', function() {
     $('.value1')
     .css({'display':'inline', 'text-align': 'left', 'position':'absolute','color':'#111', 'border':'1px solid #DCA',
     'background':'#fffAF0'});
   });
   $('.more').on('click', function() {
    $('#show_col_3').html($(this).parent().next().html());
   });

 });
