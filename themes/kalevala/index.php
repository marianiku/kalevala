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
    <?php
    $recentItems = get_theme_option('Homepage Recent Items');
    if ($recentItems === null || $recentItems === ''):
        $recentItems = 5;
    else:
        $recentItems = (int) $recentItems;
    endif;
    if ($recentItems):
    ?>
    <div id="recent-items">
        <h2><?php echo __('Tekstit'); ?></h2>
        <?php echo recent_items($recentItems); ?>
    </div><!--end recent-items -->
    <?php endif; ?>

    <?php fire_plugin_hook('public_home', array('view' => $this)); ?>

</div><!-- end secondary -->
<?php echo foot(); ?>
