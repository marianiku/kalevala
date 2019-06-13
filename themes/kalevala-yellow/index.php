<?php echo head(array('bodyid'=>'home', 'bodyclass' =>'two-col')); ?>
<div id="primary">
    <img style="width:90%;" src="http://kalevala.finlit.fi/KalevalaMontage-LowRes.jpg" />
    (Kuva: Gary Wornell, SKS 2018)
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

  </nav>
  <?php fire_plugin_hook('public_home', array('view' => $this)); ?>
</div>

<?php echo foot(); ?>
<script type="text/javascript" src="//eu1.snoobi.com/snoop.php?tili=codicesfennici_fi"></script>
