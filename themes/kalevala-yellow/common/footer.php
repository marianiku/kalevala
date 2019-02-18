        </div><!-- end content -->

    </div><!-- end wrap -->


    <footer role="contentinfo">

        <div id="footer-text">
            <?php echo get_theme_option('Footer Text'); ?>
            <?php if ((get_theme_option('Display Footer Copyright') == 1) && $copyright = option('copyright')): ?>
                <p><?php echo $copyright; ?></p>
            <?php endif; ?>
            <!--<p><?php echo __('Proudly powered by <a href="http://omeka.org">Omeka</a>.'); ?></p>-->
            <div class="row">
              <div class="col-xs-6 col-md-6">
                <a href="https://www.finlit.fi"><img id="sks" src="http://kalevala.finlit.fi/logo-SKS-footer@2x.png" /></a>
              </div>
              <div class="col-xs-4 col-md-4">
                <a href="https://kordelin.fi"><img id="kordelin" src="http://kalevala.finlit.fi/logo-kordelin@2x.png" /></a>
              </div>
              <div class="col-xs-2 col-md-2">
                <a href="https://kalevalaseura.fi"><img id="kalevalas" src="http://kalevala.finlit.fi/logo-kalevalaseura@2x.png" /></a>
              </div>
            </div>
        </div>

        <?php fire_plugin_hook('public_footer', array('view' => $this)); ?>

    </footer><!-- end footer -->

    <script type="text/javascript">
    jQuery(document).ready(function () {
        Omeka.showAdvancedForm();
        Omeka.skipNav();
        Omeka.megaMenu('.no-touchevents #primary-nav');
        ThanksRoy.mobileMenu();
    });
    </script>

</body>
</html>
