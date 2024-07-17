const flexible_content_after = 
`<!-- After refactor -->

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

export default flexible_content_after;
