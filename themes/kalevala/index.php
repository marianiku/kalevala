<?php echo head(array('bodyid'=>'home', 'bodyclass' =>'two-col')); ?>
<div id="primary">
    <?php if ($homepageText = get_theme_option('Homepage Text')): ?>
    <p><?php echo $homepageText; ?></p>
    <?php endif; ?>
</div><!-- end primary -->
<div>
</div>
<div id="secondary">
  <img src="https://upload.wikimedia.org/wikipedia/commons/1/14/V%C3%A4in%C3%A4m%C3%B6inen_kiinnitt%C3%A4%C3%A4_kielet_kanteleeseen.jpg" />
  <h6>Johan Zacharias Blackstadius: Väinämöinen kiinnittää kielet kanteleeseen (1851)</h6>
</div>
<div id="tertiary">
    <h2><?php echo __('Tekstit'); ?></h2>
    <nav class="navbar navbar-expand-md">
      <ul class="nav navbar-nav" id="frontpage_list">
        <?php
        $items = get_records('Item');
        set_loop_records('items', $items);
        foreach (loop('items') as $item) {
          if (metadata($item, 'id') != 2) {
          echo '<li><h5>'.link_to_item().'</h5>'
          .link_to_item(item_image()) ;
          }
        }
        ?>
      </ul>
    </nav>
    <?php fire_plugin_hook('public_home', array('view' => $this)); ?>

</div><!-- end secondary -->
<?php echo foot(); ?>
