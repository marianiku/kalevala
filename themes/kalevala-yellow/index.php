<?php echo head(array('bodyid'=>'home', 'bodyclass' =>'two-col')); ?>
<div id="primary">
    <img src="http://128.214.12.169/kalevala/facsimile.jpg" />
    <?php if ($homepageText = get_theme_option('Homepage Text')): ?>
    <p><?php echo $homepageText; ?></p>
    <?php endif; ?>
</div><!-- end primary -->
<div>
</div>
<div id="secondary">
  <nav class="navbar navbar-expand-md">
    <ul class="nav navbar-nav flex-column" id="frontpage_list">
      <?php
      $items = get_records('Item');
      // Sort items by id
      function cmp($a, $b) {
        return strcmp(metadata($a, array('Dublin Core', 'Identifier')), metadata($b, array('Dublin Core', 'Identifier')));
      }
      usort($items, "cmp");
      $v = $items[5];
      unset($items[5]);
      $items[6] = $v;
      set_loop_records('items', $items);
      foreach (loop('items') as $item) {
        echo '<li><h5>'.link_to_item(item_image()).' '.link_to_item().'</h5></li>';
      }
      ?>
    </ul>
  </nav>
  <?php fire_plugin_hook('public_home', array('view' => $this)); ?>
</div>

<?php echo foot(); ?>
