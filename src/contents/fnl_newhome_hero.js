const fnl_newhome_hero = `
<?php 
$globalLogo = get_field('logos', 'option')['horizontal'];
if( have_rows('2023_hero_banner') ): 
  while( have_rows('2023_hero_banner') ): the_row(); 
  $background = get_sub_field('background');
    $media_type = $background['media_type'];
    $video = $background['video_link'];
    $desktop_img = $background['images']['desktop_image'];
    $mobile_img = $background['images']['mobile_image'];
    $img_height = $background['banner_height'];
  $container = get_sub_field('container');
    $desktop_logo_type = $container['desktop_logo'];
    $mobile_logo_type = $container['mobile_logo'];
    $desktop_logo = $globalLogo[$desktop_logo_type];
    $mobile_logo = $globalLogo[$mobile_logo_type];
    $text_box = $container['text_box'];
    $cta_text = $container['button']['title'];
    $cta_url = $container['button']['url'];
    $cta_class = $container['class'];
  $extra_feature = get_sub_field('extra_feature');
    $anchor_img = $extra_feature['anchor_link']['image'];
    $anchor_link = $extra_feature['anchor_link']['text'];
    $apply_promo = get_sub_field('promo')['apply_promo'];
    //promo
    if ($apply_promo && do_shortcode("[CheckForPromo]")) {
        $promo = get_field('promo', 'option');
        $promo_img = get_sub_field('promo');
        $desktop_img = $promo_img['desktop_image'] ? $promo['desktop_image'] : $background['images']['desktop_image'];
        $mobile_img = $promo_img['mobile_image'] ? $promo['mobile_image'] : $background['images']['mobile_image'];
    } 
  ?>
`
export default fnl_newhome_hero;