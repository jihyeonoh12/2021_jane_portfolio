
const sitewide_code_component = 
`<!-- On component -->

<?php 
$link = '/meal-plans';
$text = 'View Our Plans';
$class = 'btn border-btn--primary';
do_shortcode("[createCTAButton url=\"$link\" text=\"$text\" class=\"$class\"]" );
?>
`

export default sitewide_code_component;