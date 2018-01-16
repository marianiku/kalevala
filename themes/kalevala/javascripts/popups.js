 $(document).ready(function() {
   $('.more').on('click', function() {
    $('#show_col_3').css('padding','1em');
    $('#show_col_3').html($(this).parent().next().html());
   });

 });
