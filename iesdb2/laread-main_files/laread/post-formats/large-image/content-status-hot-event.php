<?php
/**
 * @package Evmet laread
 */
?>
<?php 
	$opts = TitanFramework::getInstance( 'laread' );
	$hot_event = $opts->getOption( 'laread_hot_event', get_the_ID() ); 
?>
<?php $categorys = get_the_category(); ?>
<div id="post-<?php the_ID(); ?>"  class="container-fluid" <?php post_class(); ?>>
	<div class="container">
		<div class="row post-items">

			<div class="col-md-2">
				<?php fn_laread_post_date(); ?>
			</div>
			<div class="col-md-10">
				
				<div class="post-item">
					<?php 
					$custome_style = '';
					if (has_post_thumbnail())
						{
							 $image = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'full' ); 
							 $custome_style = 'style="background-size:cover;background-image: url('.$image[0].'); background-position: center center;"';
						}
					?>

								<div class="in-hotnews" <?php echo $custome_style; ?>>
									<div class="block-overlay">
										<div class="overlay-hotnews">
											<div class="important-post">
												<span class="icon-bookmark">
													<i class="fa fa-star"></i>
												</span>
											</div>
											<a class="hotnews-link" href="<?php the_permalink(); ?>">
												<i class="fa fa-bug"></i>
												<span class="hotnews-title"><?php echo $hot_event; ?></span>
												<span class="clearfix"></span>

												<?php if ($categorys): ?>
										<?php foreach ($categorys as $category): ?>	
											<span class="hotnews-category"><?php echo esc_html( $category->name ); ?></span>
										<?php endforeach ?>
									<?php endif ?>

												
											</a>
										</div>
									</div>
								</div>
								<?php fn_laread_medium_sidebar_post_footer('no-border'); ?>
							</div>
				</div>
		</div>
	</div>
</div>
