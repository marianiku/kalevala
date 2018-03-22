<?php echo head(array('title' => metadata('item', array('Dublin Core', 'Title')),'bodyclass' => 'item show')); ?>

<h4 id="show_title"><?php echo metadata('item', array('Dublin Core', 'Title')); ?></h4>

<?php if (metadata('item', 'id') != 2) { ?>
<div class="container-fluid" id="show_container">
  <div class="row" id="show_row_1">
    <div class="col-sm">
    </div>
    <div class="col-sm-3">
      <nav id="pic_nav" class="navbar navbar-expand-md">
        <ul class="navbar-nav">
           <li id="prevPic" class="nav-item">
             <a class="nav-link" >&#8592;</a>
           </li>
           <li id="nextPic" class="nav-item">
             <a class="nav-link" >&#8594;</a>
           </li>
         </ul>
       </nav>
    </div>
    <div class="col-sm">
      <nav id="pic_nav2" class="navbar navbar-expand-md">
        <ul class="navbar-nav">
           <li id="showFacs" class="nav-item">
             <a class="nav-link" >Faksimile &#8595;</a>
           </li>
         </ul>
       </nav>
    </div>
  </div>
  <div class="row" id="show_row_2">
    <div class="col-sm" id="show_col_1">
      <?php
      $files = $item->Files;
      foreach ($files as $file) {
        if ($file->getExtension() == 'jpg'
        && (strpos(metadata($file, 'filename'), 'page') !== false || strpos(metadata($file, 'filename'), 'esipuhe') !== false)) {
          echo '<img class="pic" src="http://128.214.12.169/kalevala/files/original/'.metadata($file, 'filename').'" />';
        }
      }
      ?>
    </div>
    <div class="col-sm-3" id="show_col_2">
      <?php
      $files = $item->Files;
      foreach ($files as $file) {
        if ($file->getExtension() == 'xml') {
          $xmlDoc = new DOMDocument();
          $xmlDoc->load("http://localhost/kalevala/files/original/".metadata($file, 'filename'));
          $xslDoc = new DOMDocument();
          $xslDoc->load("http://localhost/kalevala/files/original/TEI-to-HTML.xsl");
          $proc = new XSLTProcessor();
          $proc->importStylesheet($xslDoc);
          echo $proc->transformToXML($xmlDoc);
        }
      }
      ?>
    </div>
    <div class="col-sm" id="show_col_3">
    </div>
  </div>
</div>
<?php }?>

<div id="item1_facsimiles">
  <?php
  $files = $item->Files;
  foreach ($files as $file) {
    if ($file->getExtension() == 'jpg' && strpos(metadata($file, 'filename'), 'lna038') !== false) {
      echo '<img class="pic2" src="http://128.214.12.169/kalevala/files/original/'.metadata($file, 'filename').'" />';
    }
  }
  ?>
</div>



<!-- The following prints a citation for this item. -->
<!--<div id="item-citation" class="element">
    <h3><?php echo __('Citation'); ?></h3>
    <div class="element-text"><?php echo metadata('item', 'citation', array('no_escape' => true)); ?></div>
</div>-->

<!-- Available output formats -->
<!--<div id="item-output-formats" class="element">
    <h2><?php echo __('Output Formats'); ?></h2>
    <div class="element-text"><?php echo output_format_list(); ?></div>
</div>-->

<nav>
<ul class="item-pagination navigation">
    <li id="previous-item" class="previous"><?php echo link_to_previous_item_show(); ?></li>
    <li id="next-item" class="next"><?php echo link_to_next_item_show(); ?></li>
</ul>
</nav>

<?php echo foot(); ?>
