<?php echo head(array('title' => metadata('item', array('Dublin Core', 'Title')),'bodyclass' => 'item show')); ?>

<h4 id="show_title"><?php echo metadata('item', array('Dublin Core', 'Title')); ?></h4>

<div id="prose_description"><?php echo metadata('item', array('Dublin Core', 'Description')); ?></div>

<!-- Display images, transcription -->
<div class="container-fluid" id="show_container">
  <div class="row" id="show_row_3">
    <div class="col-sm">
      <span>Kalevalan 1849 ensimmäinen painos</span>
    </div>
    <div class="col-sm">
      <span>Transkriptio</span>
    </div>
    <div class="col-sm">
      <span>Kommentaarit ja käsikirjoitus</span>
    </div>
  </div>
  <div class="row" id="show_row_1">
    <div class="col-sm">
    </div>
    <div class="col-sm">
      <nav id="pic_nav" class="navbar navbar-expand-md">
        <ul class="navbar-nav">
           <li id="pic_nav1" class="nav-item" title="näytä sananselitykset">
             <input type="checkbox" title="näytä sananselitykset"> Sananselitykset
           </li>
           <?php if (metadata('item', array('Dublin Core', 'Title')) == 'Neljäs runo'): ?>
             <li id="pic_nav2" class="nav-item" title="näytä säeviitteet">
               <input type="checkbox" title="näytä säeviitteet"> Säeviitteet
             </li>
             <li id="pic_nav3" class="nav-item" title="näytä kommentaarit">
               <input type="checkbox" title="näytä kommentaarit"> Kommentaarit
             </li>
          <?php elseif (metadata('item', array('Dublin Core', 'Title')) == 'Uuden Kalevalan esipuhe'
          || metadata('item', array('Dublin Core', 'Title')) == 'Vanhan Kalevalan esipuhe'
          || metadata('item', array('Dublin Core', 'Title')) == 'Ensimmäinen runo'
          || metadata('item', array('Dublin Core', 'Title')) == 'Toinen runo'
          || metadata('item', array('Dublin Core', 'Title')) == 'Kolmas runo'
          || metadata('item', array('Dublin Core', 'Title')) == 'Viides runo'
          || metadata('item', array('Dublin Core', 'Title')) == 'Kahdestoista runo'
          || metadata('item', array('Dublin Core', 'Title')) == 'Yhdestoista runo'): ?>
            <li id="pic_nav3" class="nav-item" title="näytä kommentaarit">
              <input type="checkbox" title="näytä kommentaarit"> Kommentaarit
            </li>
          <?php endif ?>
           <li id="pic_nav4" class="nav-item">
             <a id="prevPic" class="nav-link" title="edellinen sivu"><i class="fas fa-arrow-left"></i></a><a id="nextPic" class="nav-link" title="seuraava sivu"><i class="fas fa-arrow-right"></i></a>
           </li>
         </ul>
       </nav>
    </div>
    <div class="col-sm">
      <nav id="pic_nav5" class="navbar navbar-expand-md">
        <ul class="navbar-nav">
           <li id="showFacs" class="nav-item">
             <a class="nav-link" title="avaa käsikirjoitus">Käsikirjoitus</a>
           </li>
           <li class="nav-item">
             <?php
             $files = $item->Files;
             foreach ($files as $file) {
               if ($file->getExtension() == 'xml') {
                 echo '<a title="lataa TEI-tiedosto" href="http://kalevala.finlit.fi/files/original/'.metadata($file, 'filename').'" download><i class="fa fa-download"></i> TEI</a>';
               }
             }
             ?>
           </li>
         </ul>
       </nav>
    </div>
  </div>
  <div class="row" id="show_row_2">
    <div class="col-sm" id="show_col_1">
      <?php
      // Fetch each item's images
      $files = $item->Files;
      foreach ($files as $file) {
        if ($file->getExtension() == 'jpg'
        && (strpos(metadata($file, 'filename'), 'page') !== false || strpos(metadata($file, 'filename'), 'esipuhe') !== false)) {
          echo '<img class="pic" src="http://kalevala.finlit.fi/files/original/'.metadata($file, 'filename').'" />';
        }
      }
      ?>
    </div>
    <div class="col-sm" id="show_col_2">
      <div style="position:relative;">
      <?php
      // Fetch each item's XML file and convert to XHTML using DOMDocument()
      $files = $item->Files;
      foreach ($files as $file) {
        if ($file->getExtension() == 'xml') {
          $xmlDoc = new DOMDocument();
          $xmlDoc->load("http://kalevala.finlit.fi/files/original/".metadata($file, 'filename'));
          $xslDoc = new DOMDocument();
          $xslDoc->load("http://kalevala.finlit.fi/files/original/TEI-to-HTML.xsl");
          $proc = new XSLTProcessor();
          $proc->importStylesheet($xslDoc);
          echo $proc->transformToXML($xmlDoc);
        }
      }
      ?>
    </div>
    </div>
    <div class="col-sm" id="show_col_3">
    </div>
  </div>
</div>

<!-- Preload commentaries and facsimile images -->
<div id="item_commentary" style="display:none;">
  <p><?php echo (metadata('item', array('Item Type Metadata', 'Text'))); ?></p>
</div>
<div id="item1_facsimiles">
  <?php
  $files = $item->Files;
  foreach ($files as $file) {
    if ($file->getExtension() == 'jpg' && (strpos(metadata($file, 'filename'), 'lna038') !== false || strpos(metadata($file, 'filename'), 'lna036') !== false)) {
      echo '<img class="pic2" src="http://kalevala.finlit.fi/files/original/'.metadata($file, 'filename').'" />';
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

<!--<nav>
<ul class="item-pagination navigation">
    <li id="previous-item" class="previous"><?php /*echo link_to_previous_item_show();*/ ?></li>
    <li id="next-item" class="next"><?php /*echo link_to_next_item_show();*/ ?></li>
</ul>
</nav>-->
<!-- default item paging is by order of addition to database; this is the only way to get correct order -->
<nav>
<?php
$ids = array('9','21','6','7','8','24','25','26','27','32','23','28','29','30','31','22','5');
$current_id = array_search($item->id, $ids);
$previous_item = '';
$next_item = '';
if ($current_id >= 1 && $current_id <= sizeof($ids)-2) {
  $previous_item = $ids[$current_id-1];
  $next_item = $ids[$current_id+1];
} elseif ($current_id == 0) {
  $previous_item = $ids[sizeof($ids)-1];
  $next_item = $ids[$current_id+1];
} elseif ($current_id == sizeof($ids)-1) {
  $previous_item = $ids[$current_id-1];
  $next_item = $ids[0];
}
?>
<ul class="item-pagination navigation">
    <li id="previous-item" class="previous">
      <?php
      echo '<a title="edellinen runo (edellinen esipuhe)" href="http://kalevala.finlit.fi/items/show/'.$previous_item.'">edellinen</a>';
      ?>
    </li>
    <li id="next-item" class="next">
      <?php 
      echo '<a "seuraava runo (seuraava esipuhe)" href="http://kalevala.finlit.fi/items/show/'.$next_item.'">seuraava</a>'; 
      ?>
    </li>
</ul>
</nav>

<?php echo foot(); ?>
