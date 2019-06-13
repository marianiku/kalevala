<?php
$pageTitle = __('Browse Collections');
echo head(array('title'=>$pageTitle,'bodyclass' => 'collections browse'));
?>




<div class="container-fluid" style="margin-top:2em;">
  <div class="row">
    <!-- list collections in menu to the left -->
    <div class="col-3">
      <ul id="runot-nav" class="navbar-nav">
        <?php $collections = get_records('Collection',array('sort_field'=>'Dublin Core,Identifier','sort_dir'=>'a')); ?>
        <?php set_loop_records('collections',$collections);?>
        <?php foreach (loop('collections') as $collection): ?>
          <?php $collId = metadata($collection, array('Dublin Core', 'Identifier')); ?>
          <?php if (strpos($collId, 'coll') !== false):?>
            <li class="nav-item"><a class="nav-link"><?php echo metadata('collection', array('Dublin Core', 'Title')) ;?></a></li>
          <?php endif;?>
        <?php endforeach; ?>
      </ul>
    </div>
    <!-- list items for each collection -->
    <div class="col-9" id="poems">
      <?php foreach (loop('collections') as $collection): ?>

        <?php $collId = metadata('collection', array('Dublin Core', 'Identifier')); ?>
        <?php if (strpos($collId, 'coll') !== false):?>

          <ul id="<?php echo $collId;?>" class="navbar-nav">
            
            <?php echo metadata($collection,array('Dublin Core', 'Description'));?>
            <?php $items = get_records('Item', array('collection'=>$collection)); ?>
            <?php set_loop_records('items',$items); ?>
            <?php foreach(loop('items') as $item): ?>
              <li class="nav-item">
                <?php $itemTitle = metadata($item, 'display_title'); ?>
                <span><?php echo link_to_item(item_image('square_thumbnail', array('alt' => $itemTitle))); ?></span>
                <span>
                  <span style="width:100%;"><?php echo link_to_item($itemTitle, array('class'=>'permalink')); ?></span>
                  <span style="width:100%"><?php echo metadata($item, array('Dublin Core', 'Description')); ?></span>
                </span>
              </li>
            <?php endforeach; ?>
          </ul>
        <?php endif;?>
      <?php endforeach; ?>

    </div>
  </div>
</div>




<?php echo pagination_links(); ?>

<?php fire_plugin_hook('public_collections_browse', array('collections'=>$collections, 'view' => $this)); ?>

<?php echo foot(); ?>
<script type="text/javascript" src="//eu1.snoobi.com/snoop.php?tili=codicesfennici_fi"></script>

