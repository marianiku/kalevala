<?php echo head(array('title' => metadata('item', array('Dublin Core', 'Title')),'bodyclass' => 'item show')); ?>

<h4 id="show_title"><?php echo metadata('item', array('Dublin Core', 'Title')); ?></h4>

<div class="container-fluid" id="show_container">
  <div class="row" id="show_row_1">
    <div class="col">
    </div>
    <div class="col">
      <span id="pic_nav">
        <a id="prevPic">&#8592;</a>
        <a id="nextPic">&#8594;</a>
      </span>
    </div>
    <div class="col">
    </div>
  </div>
  <div class="row" id="show_row_2">
    <div class="col" id="show_col_1">
      <?php
      $item = get_record_by_id('Item', 1);
      $files = $item->Files;
      foreach ($files as $file) {
        if ($file->getExtension() == 'jpg') {
          echo '<img class="pic" src="http://localhost/kalevala/files/original/'.metadata($file, 'filename').'" />';
        }
      }
      ?>
    </div>
    <div class="col" id="show_col_2">
      <?php
      $xmlDoc = new DOMDocument();
      $xmlDoc->load("http://localhost/kalevala/files/original/1/kolmas_runo.xml");
      $xslDoc = new DOMDocument();
      $xslDoc->load("http://localhost/kalevala/files/original/TEI-to-HTML.xsl");
      $proc = new XSLTProcessor();
      $proc->importStylesheet($xslDoc);
      echo $proc->transformToXML($xmlDoc);
      ?>
    </div>
    <div class="col" id="show_col_3">
    </div>
  </div>
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
