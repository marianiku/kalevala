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
  <p>Johan Zacharias Blackstadius (1816-1898): <em>Väinämöinen kiinnittää kielet kanteleeseen</em> (Kuva: Wikimedia). Maalaus valmistui 1851, pian <em>Kalevalan</em> toisen laitoksen ilmestyttyä, ja on
  ensimmäinen taiteellinen kuvitus eepoksesta. <a href="http://www.kalevalaseura.fi/kaku/sivu.php?n=p1a3&s=p1a3s1s1&h=hp1a3&f=fp1s"
  target="_blank">Katso lisää</a>.</p>
</div>
<!-- list items on index page -->
<div id="tertiary">
    <h2><?php echo __('Tekstit'); ?></h2>
    <nav class="navbar navbar-expand-md">
      <ul class="nav navbar-nav" id="frontpage_list">
        <?php
        $items = get_records('Item');
        // Sort items by title
        function cmp($a, $b) {
          return strcmp(metadata($a, array('Dublin Core', 'Title')), metadata($b, array('Dublin Core', 'Title')));
        }
        usort($items, "cmp");
        $v = $items[3];
        unset($items[3]);
        $items[5] = $v;
        set_loop_records('items', $items);
        foreach (loop('items') as $item) {
          echo '<li><h5>'.link_to_item().'</h5>'
          .link_to_item(item_image()) ;
        }
        ?>
      </ul>
    </nav>
    <?php fire_plugin_hook('public_home', array('view' => $this)); ?>

</div><!-- end secondary -->
<?php echo foot(); ?>
