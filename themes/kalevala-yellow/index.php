<?php echo head(array('bodyid'=>'home', 'bodyclass' =>'two-col')); ?>
<div id="primary">
    <img src="http://kalevala.finlit.fi/kalevala/img-home@2x.jpg" />
    <?php if ($homepageText = get_theme_option('Homepage Text')): ?>
    <p><?php echo $homepageText; ?></p>
    <?php endif; ?>
</div><!-- end primary -->
<div>
</div>
<div id="secondary">

  <nav class="navbar navbar-expand-md">
    <ul class="nav navbar-nav flex-column" id="frontpage_list">
      <?php $collections = get_records('Collection',array('sort_field'=>'Dublin Core,Identifier','sort_dir'=>'a')); ?>
      <?php set_loop_records('collections',$collections);?>
      <?php foreach (loop('collections') as $collection): ?>
          <li class="nav-item coll_title">
            <a class="nav-link"><?php echo metadata($collection, array('Dublin Core', 'Title'));?></a>
          </li>
          <li class="nav-item coll_items">
            <ul>
            <?php $items = get_records('Item', array('collection'=>$collection)); ?>
            <?php set_loop_records('items',$items); ?>
            <?php foreach(loop('items') as $item): ?>
                <li class="nav-item" class="coll_item">
                  <?php $itemTitle = metadata($item, 'display_title'); ?>
                  <span><?php echo link_to_item($itemTitle, array('class'=>'permalink')); ?>
                  </span>
                </li>
              <?php endforeach; ?>
            </ul>
          </li>
      <?php endforeach; ?>
    </ul>
    <!--<ul class="nav navbar-nav flex-column" id="frontpage_list">
      <?php
      $items = get_records('Item');
      // Sort items by id
      function cmp($a, $b) {
        return strcmp(metadata($a, array('Dublin Core', 'Identifier')), metadata($b, array('Dublin Core', 'Identifier')));
      }
      usort($items, "cmp");
      $v = $items[7];
      unset($items[7]);
      $items[8] = $v;
      set_loop_records('items', $items);
      foreach (loop('items') as $item) {
        echo '<li><h5>'.link_to_item(item_image()).' '.link_to_item().'</h5></li>';
      }
      ?>
    </ul>-->
  </nav>
  <?php fire_plugin_hook('public_home', array('view' => $this)); ?>
</div>

<?php echo foot(); ?>
