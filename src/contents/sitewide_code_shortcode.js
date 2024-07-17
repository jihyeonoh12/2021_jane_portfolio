const sitewide_code_shortcode = 
`<!-- Shortcode -->

<?php 
function updateCTAButton($arg) { 
    $promoCode = addPromoCode();
    $ctaCopy = $arg['text'];
    $url = $arg['url'];
    $class = $arg['class'];
     if ($promoCode && strpos($url, 'order')) {
        $url = $url . $promoCode;
        $ctaCopy = $promo['cta_text'];
     }
?>
<a href="<?= $url; ?>" class="<?= $class; ?>"><?= ctaCopy; ?></a>
<?php
}
add_shortcode('createCTAButton', 'updateCTAButton');
?>
`;

export default sitewide_code_shortcode;