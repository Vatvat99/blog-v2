<?php get_header(); ?>
<?php get_sidebar(); ?>

<div id="colonne-gauche">
<?php
/* Run the loop to output the posts.
 * If you want to overload this in a child theme then include a file
 * called loop-index.php and that will be used instead.
 */
 get_template_part( 'loop', 'index' );
 if (function_exists('postbar'))
                    postbar();
?>
</div> <!-- fin "colonne-gauche" -->

<?php get_footer(); ?>
