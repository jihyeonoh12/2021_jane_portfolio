const flexible_content_code = `
<!-- Before refactor -->
  <main id="main" class="site-main">
      <?php include dirname(__FILE__) . '/../includes/components/full-screen-hero.php'; ?>
      <?php include dirname(__FILE__) . '/../includes/components/column-image-and-text.php'; ?>
      <?php include dirname(__FILE__) . '/../includes/components/steps.php'; ?>
      . . . <!-- list of components -->
  </main>

<!-- After refactor -->
  <main id="main" class="site-main">
    <?php      
        if( have_rows('flexible_content') ):
          while ( have_rows('flexible_content') ) : the_row();
          $flexible_content = get_row_layout();
          include dirname(__FILE__) . '/../includes/components/' . $flexible_content . '.php';
          endwhile;
        endif;
    ?>  
  </main>
`;

export default flexible_content_code;
