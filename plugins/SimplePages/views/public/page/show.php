<?php
$bodyclass = 'page simple-page';
if ($is_home_page):
    $bodyclass .= ' simple-page-home';
endif;

echo head(array(
    'title' => metadata('simple_pages_page', 'title'),
    'bodyclass' => $bodyclass,
    'bodyid' => metadata('simple_pages_page', 'slug')
));
?>
<div id="primary">
    <?php if (!$is_home_page): ?>
    <!--<p id="simple-pages-breadcrumbs"><?php echo simple_pages_display_breadcrumbs(); ?></p>-->
    <!--<h3><?php echo metadata('simple_pages_page', 'title'); ?></h3>-->
    <?php endif; ?>
    <?php
    $text = metadata('simple_pages_page', 'text', array('no_escape' => true));
    echo $this->shortcodes($text);
    ?>
</div>

<!-- images for displaying in foreword Simple Page -->

<div id="esipuhe_printed">
  <?php
  $item = get_record_by_id('Item', 5);
  $files = $item->Files;
  foreach ($files as $file) {
    if (strpos(metadata($file, 'filename'), 'esipuhe') !== false) {
      echo '<img class="pic3" src="http://128.214.12.169/kalevala/files/original/'.metadata($file, 'filename').'" />';
    }
  }
  ?>
</div>

<div id="esipuhe_facsimile">
  <?php
  $item = get_record_by_id('Item', 5);
  $files = $item->Files;
  foreach ($files as $file) {
    if (strpos(metadata($file, 'filename'), 'lna038') !== false) {
      echo '<img class="pic4" src="http://128.214.12.169/kalevala/files/original/'.metadata($file, 'filename').'" />';
    }
  }
  ?>
</div>

<?php echo foot(); ?>
