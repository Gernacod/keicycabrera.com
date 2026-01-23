import './globals.css'
import { Providers } from "@/components/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from 'next'
import AnimationsHandler from '@/components/AnimationsHandler'
import { Toaster } from 'sonner'

export const metadata: Metadata = {
  title: 'Keicy Cabrera',
  description: 'Consultora Internacional en Proyectos Sociales',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel='stylesheet' id='mailerlite_forms.css-css' href="/wp-content/plugins/official-mailerlite-sign-up-forms/assets/css/mailerlite_forms5971.css?ver=1.7.18" type='text/css' media='all' />
        <link rel='stylesheet' id='tutor-icon-css' href="/wp-content/plugins/tutor/assets/css/tutor-icon.minc063.css?ver=3.9.5" type='text/css' media='all' />
        <link rel='stylesheet' id='tutor-css' href="/wp-content/plugins/tutor/assets/css/tutor.minc063.css?ver=3.9.5" type='text/css' media='all' />
        <link rel='stylesheet' id='tutor-frontend-css' href="/wp-content/plugins/tutor/assets/css/tutor-front.minc063.css?ver=3.9.5" type='text/css' media='all' />
        <link rel='stylesheet' id='woocommerce-layout-css' href="/wp-content/plugins/woocommerce/assets/css/woocommerce-layoutf607.css?ver=10.4.3" type='text/css' media='all' />
        <link rel='stylesheet' id='woocommerce-smallscreen-css' href="/wp-content/plugins/woocommerce/assets/css/woocommerce-smallscreenf607.css?ver=10.4.3" type='text/css' media='only screen and (max-width: 768px)' />
        <link rel='stylesheet' id='woocommerce-general-css' href="/wp-content/plugins/woocommerce/assets/css/woocommercef607.css?ver=10.4.3" type='text/css' media='all' />
        <link rel='stylesheet' id='elementor-frontend-css' href="/wp-content/plugins/elementor/assets/css/frontend.mine4fa.css?ver=3.29.1" type='text/css' media='all' />
        <link rel='stylesheet' id='widget-image-css' href="/wp-content/plugins/elementor/assets/css/widget-image.mine4fa.css?ver=3.29.1" type='text/css' media='all' />
        <link rel='stylesheet' id='elementor-post-10-css' href="/wp-content/uploads/elementor/css/post-10a059.css?ver=1750609400" type='text/css' media='all' />
        <link rel='stylesheet' id='elementor-post-305-css' href="/wp-content/uploads/elementor/css/post-305f338.css?ver=1743658547" type='text/css' media='all' />
        <link rel='stylesheet' id='widget-text-editor-css' href="/wp-content/plugins/elementor/assets/css/widget-text-editor.mine4fa.css?ver=3.29.1" type='text/css' media='all' />
        <link rel='stylesheet' id='e-animation-grow-css' href="/wp-content/plugins/elementor/assets/lib/animations/styles/e-animation-grow.mine4fa.css?ver=3.29.1" type='text/css' media='all' />
        <link rel='stylesheet' id='widget-social-icons-css' href="/wp-content/plugins/elementor/assets/css/widget-social-icons.mine4fa.css?ver=3.29.1" type='text/css' media='all' />
        <link rel='stylesheet' id='e-apple-webkit-css' href="/wp-content/plugins/elementor/assets/css/conditionals/apple-webkit.mine4fa.css?ver=3.29.1" type='text/css' media='all' />
        <link rel='stylesheet' id='widget-theme-elements-css' href="/wp-content/plugins/pro-elements/assets/css/widget-theme-elements.min81e1.css?ver=3.24.2" type='text/css' media='all' />
        <link rel='stylesheet' id='widget-heading-css' href="/wp-content/plugins/elementor/assets/css/widget-heading.mine4fa.css?ver=3.29.1" type='text/css' media='all' />
        <link rel='stylesheet' id='widget-icon-list-css' href="/wp-content/plugins/elementor/assets/css/widget-icon-list.mine4fa.css?ver=3.29.1" type='text/css' media='all' />
        <link rel='stylesheet' id='widget-divider-css' href="/wp-content/plugins/elementor/assets/css/widget-divider.mine4fa.css?ver=3.29.1" type='text/css' media='all' />
        <link rel='stylesheet' id='elementor-post-1691-css' href="/wp-content/uploads/elementor/css/post-1691ff2f.css?ver=1743658597" type='text/css' media='all' />
        <link rel='stylesheet' id='qi-addons-for-elementor-grid-style-css' href="/wp-content/plugins/qi-addons-for-elementor/assets/css/grid.minc801.css?ver=1.9.3" type='text/css' media='all' />
        <link rel='stylesheet' id='qi-addons-for-elementor-helper-parts-style-css' href="/wp-content/plugins/qi-addons-for-elementor/assets/css/helper-parts.minc801.css?ver=1.9.3" type='text/css' media='all' />
        <link rel='stylesheet' id='qi-addons-for-elementor-style-css' href="/wp-content/plugins/qi-addons-for-elementor/assets/css/main.minc801.css?ver=1.9.3" type='text/css' media='all' />
        <link rel='stylesheet' id='royal-elementor-kit-style-css' href="/wp-content/themes/royal-elementor-kit/style5152.css?ver=1.0" type='text/css' media='all' />
        <link rel='stylesheet' id='swiper-css' href="/wp-content/plugins/qi-addons-for-elementor/assets/plugins/swiper/8.4.5/swiper.min94a4.css?ver=8.4.5" type='text/css' media='all' />
        <link rel='stylesheet' id='elementor-post-1867-css' href="/wp-content/uploads/elementor/css/post-1867ccf8.css?ver=1730701053" type='text/css' media='all' />
        <link rel='stylesheet' id='elementor-pro-css' href="/wp-content/plugins/pro-elements/assets/css/frontend.min81e1.css?ver=3.24.2" type='text/css' media='all' />
        <link rel='stylesheet' id='e-animation-zoomIn-css' href="/wp-content/plugins/elementor/assets/lib/animations/styles/zoomIn.mine4fa.css?ver=3.29.1" type='text/css' media='all' />
        <link rel='stylesheet' id='widget-video-css' href="/wp-content/plugins/elementor/assets/css/widget-video.mine4fa.css?ver=3.29.1" type='text/css' media='all' />
        <link rel='stylesheet' id='e-animation-slideInLeft-css' href="/wp-content/plugins/elementor/assets/lib/animations/styles/slideInLeft.mine4fa.css?ver=3.29.1" type='text/css' media='all' />
        <link rel='stylesheet' id='e-animation-slideInRight-css' href="/wp-content/plugins/elementor/assets/lib/animations/styles/slideInRight.mine4fa.css?ver=3.29.1" type='text/css' media='all' />
        <link rel='stylesheet' id='widget-counter-css' href="/wp-content/plugins/elementor/assets/css/widget-counter.mine4fa.css?ver=3.29.1" type='text/css' media='all' />
        <link rel='stylesheet' id='e-shapes-css' href="/wp-content/plugins/elementor/assets/css/conditionals/shapes.mine4fa.css?ver=3.29.1" type='text/css' media='all' />
        <link rel='stylesheet' id='e-swiper-css' href="/wp-content/plugins/elementor/assets/css/conditionals/e-swiper.mine4fa.css?ver=3.29.1" type='text/css' media='all' />
        <link rel='stylesheet' id='widget-image-carousel-css' href="/wp-content/plugins/elementor/assets/css/widget-image-carousel.mine4fa.css?ver=3.29.1" type='text/css' media='all' />
        <link rel='stylesheet' id='e-animation-tada-css' href="/wp-content/plugins/elementor/assets/lib/animations/styles/tada.mine4fa.css?ver=3.29.1" type='text/css' media='all' />
        <link rel='stylesheet' id='e-animation-slideInDown-css' href="/wp-content/plugins/elementor/assets/lib/animations/styles/slideInDown.mine4fa.css?ver=3.29.1" type='text/css' media='all' />
        <link rel='stylesheet' id='widget-posts-css' href="/wp-content/plugins/pro-elements/assets/css/widget-posts.min81e1.css?ver=3.24.2" type='text/css' media='all' />
        <link rel='stylesheet' id='font-awesome-4-shim-css' href="/wp-content/plugins/tutor-lms-elementor-addons/assets/css/font-awesome.min784e.css?ver=2.1.6" type='text/css' media='all' />
        <link rel='stylesheet' id='slick-css-css' href="/wp-content/plugins/tutor-lms-elementor-addons/assets/css/slick.min784e.css?ver=2.1.6" type='text/css' media='all' />
        <link rel='stylesheet' id='slick-theme-css-css' href="/wp-content/plugins/tutor-lms-elementor-addons/assets/css/slick-theme784e.css?ver=2.1.6" type='text/css' media='all' />
        <link rel='stylesheet' id='tutor-elementor-css-css' href="/wp-content/plugins/tutor-lms-elementor-addons/assets/css/tutor-elementor.min784e.css?ver=2.1.6" type='text/css' media='all' />
        <link rel='stylesheet' id='wpr-link-animations-css-css' href="/wp-content/plugins/royal-elementor-addons/assets/css/lib/animations/wpr-link-animations.mine64a.css?ver=1.7.1045" type='text/css' media='all' />
        <link rel='stylesheet' id='wpr-button-animations-css-css' href="/wp-content/plugins/royal-elementor-addons/assets/css/lib/animations/button-animations.mine64a.css?ver=1.7.1045" type='text/css' media='all' />
        <link rel='stylesheet' id='wpr-text-animations-css-css' href="/wp-content/plugins/royal-elementor-addons/assets/css/lib/animations/text-animations.mine64a.css?ver=1.7.1045" type='text/css' media='all' />
        <link rel='stylesheet' id='wpr-addons-css-css' href="/wp-content/plugins/royal-elementor-addons/assets/css/frontend.mine64a.css?ver=1.7.1045" type='text/css' media='all' />
        <link rel='stylesheet' id='font-awesome-5-all-css' href="/wp-content/plugins/elementor/assets/lib/font-awesome/css/all.min48b8.css?ver=4.11.54" type='text/css' media='all' />
        <link rel='stylesheet' id='elementor-gf-local-montserrat-css' href="/wp-content/uploads/elementor/google-fonts/css/montserratc6b6.css?ver=1763914901" type='text/css' media='all' />
        <link rel='stylesheet' id='elementor-gf-local-redhatdisplay-css' href="/wp-content/uploads/elementor/google-fonts/css/redhatdisplayc014.css?ver=1763914902" type='text/css' media='all' />
        <link rel='stylesheet' id='elementor-gf-local-poppins-css' href="/wp-content/uploads/elementor/google-fonts/css/poppins1a2a.css?ver=1763914903" type='text/css' media='all' />
        <link rel='stylesheet' id='elementor-gf-local-arsenal-css' href="/wp-content/uploads/elementor/google-fonts/css/arsenal3a0b.css?ver=1763914904" type='text/css' media='all' />
        <link rel='stylesheet' id='wc-blocks-style-css' href="/wp-content/plugins/woocommerce/assets/client/blocks/wc-blocks5210.css?ver=wc-10.4.3" type='text/css' media='all' />
        <link rel='stylesheet' id='wpforms-modern-full-css' href="/wp-content/plugins/wpforms-lite/assets/css/frontend/modern/wpforms-full.min6a02.css?ver=1.9.5.1" type='text/css' media='all' />
        <link rel='stylesheet' id='elementor-post-1478-css' href='/wp-content/uploads/elementor/css/post-1478e0ad.css?ver=1745594171' type='text/css' media='all' />
        <link rel='stylesheet' id='e-animation-fadeInLeft-css' href='/wp-content/plugins/elementor/assets/lib/animations/styles/fadeInLeft.mine4fa.css?ver=3.29.1' type='text/css' media='all' />
        <link rel='stylesheet' id='e-animation-fadeInRight-css' href='/wp-content/plugins/elementor/assets/lib/animations/styles/fadeInRight.mine4fa.css?ver=3.29.1' type='text/css' media='all' />
        <link rel='stylesheet' id='elementor-post-978-css' href='/wp-content/uploads/elementor/css/post-978c2ad.css?ver=1745593429' type='text/css' media='all' />
        <link rel='stylesheet' id='widget-woocommerce-css' href='/wp-content/plugins/pro-elements/assets/css/widget-woocommerce.min81e1.css?ver=3.24.2' type='text/css' media='all' />
        <link rel='stylesheet' id='wpr-animations-css-css' href='/wp-content/plugins/royal-elementor-addons/assets/css/lib/animations/wpr-animations.mine64a.css?ver=1.7.1045' type='text/css' media='all' />
        <link rel='stylesheet' id='elementor-post-957-css' href='/wp-content/uploads/elementor/css/post-9577da5.css?ver=1745593206' type='text/css' media='all' />
        <link rel='stylesheet' id='widget-toggle-css' href='/wp-content/plugins/elementor/assets/css/widget-toggle.mine4fa.css?ver=3.29.1' type='text/css' media='all' />
        <link rel='stylesheet' id='e-animation-zoomInDown-css' href='/wp-content/plugins/elementor/assets/lib/animations/styles/zoomInDown.mine4fa.css?ver=3.29.1' type='text/css' media='all' />
        <link rel='stylesheet' id='wp-block-library-css' href='/wp-includes/css/dist/block-library/style.mind4d0.css?ver=6.9' type='text/css' media='all' />
        <link rel='stylesheet' id='elementor-post-1385-css' href='/wp-content/uploads/elementor/css/post-13852786.css?ver=1766591145' type='text/css' media='all' />
        <link rel='stylesheet' id='elementor-post-13-css' href='/wp-content/uploads/elementor/css/post-132668.css?ver=1731193394' type='text/css' media='all' />
        <link rel='stylesheet' id='wpr-loading-animations-css-css' href='/wp-content/plugins/royal-elementor-addons/assets/css/lib/animations/loading-animations.mine64a.css?ver=1.7.1045' type='text/css' media='all' />
        <link rel='stylesheet' id='wpr-lightgallery-css-css' href='/wp-content/plugins/royal-elementor-addons/assets/css/lib/lightgallery/lightgallery.mine64a.css?ver=1.7.1045' type='text/css' media='all' />
        <link rel='stylesheet' id='elementor-post-3180-css' href='/wp-content/uploads/elementor/css/post-318010db.css?ver=1750609904' type='text/css' media='all' />
        <link rel='stylesheet' id='wp-block-paragraph-css' href='/wp-includes/blocks/paragraph/style.mind4d0.css?ver=6.9' type='text/css' media='all' />
        <link rel='stylesheet' id='elementor-post-2995-css' href='/wp-content/uploads/elementor/css/post-299531b6.css?ver=1731617293' type='text/css' media='all' />
        <link rel='stylesheet' id='elementor-post-1367-css' href='/wp-content/uploads/elementor/css/post-1367f132.css?ver=1750617507' type='text/css' media='all' />
        <link rel='stylesheet' id='elementor-post-1376-css' href='/wp-content/uploads/elementor/css/post-1376ab24.css?ver=1750611007' type='text/css' media='all' />
        <link rel='stylesheet' id='elementor-post-1379-css' href='/wp-content/uploads/elementor/css/post-13792e0c.css?ver=1750617367' type='text/css' media='all' />
        <link rel='stylesheet' id='elementor-post-1627-css' href='/wp-content/uploads/elementor/css/post-16276d76.css?ver=1750610200' type='text/css' media='all' />
        <link rel='stylesheet' id='buttons-css' href='/wp-includes/css/buttons.mind4d0.css?ver=6.9' type='text/css' media='all' />
        <link rel='stylesheet' id='dashicons-css' href='/wp-includes/css/dashicons.mind4d0.css?ver=6.9' type='text/css' media='all' />
        <link rel='stylesheet' id='mediaelement-css' href='/wp-includes/js/mediaelement/mediaelementplayer-legacy.min1f61.css?ver=4.2.17' type='text/css' media='all' />
        <link rel='stylesheet' id='wp-mediaelement-css' href='/wp-includes/js/mediaelement/wp-mediaelement.mind4d0.css?ver=6.9' type='text/css' media='all' />
        <link rel='stylesheet' id='media-views-css' href='/wp-includes/css/media-views.mind4d0.css?ver=6.9' type='text/css' media='all' />
        <link rel='stylesheet' id='imgareaselect-css' href='/wp-includes/js/imgareaselect/imgareaselect3bf4.css?ver=0.9.8' type='text/css' media='all' />
        <link rel='stylesheet' id='tutor-frontend-dashboard-css-css' href='/wp-content/plugins/tutor/assets/css/tutor-frontend-dashboard.minc063.css?ver=3.9.5' type='text/css' media='all' />
        <style id='wp-img-auto-sizes-contain-inline-css' type='text/css' dangerouslySetInnerHTML={{
          __html: `
img:is([sizes=auto i],[sizes^="auto," i]){contain-intrinsic-size:3000px 1500px}
/*# sourceURL=wp-img-auto-sizes-contain-inline-css */
` }} />
        <style id='wp-emoji-styles-inline-css' type='text/css' dangerouslySetInnerHTML={{
          __html: `

	img.wp-smiley, img.emoji {
		display: inline !important;
		border: none !important;
		box-shadow: none !important;
		height: 1em !important;
		width: 1em !important;
		margin: 0 0.07em !important;
		vertical-align: -0.1em !important;
		background: none !important;
		padding: 0 !important;
	}
/*# sourceURL=wp-emoji-styles-inline-css */
` }} />
        <style id='classic-theme-styles-inline-css' type='text/css' dangerouslySetInnerHTML={{
          __html: `
/*! This file is auto-generated */
.wp-block-button__link{color:#fff;background-color:#32373c;border-radius:9999px;box-shadow:none;text-decoration:none;padding:calc(.667em + 2px) calc(1.333em + 2px);font-size:1.125em}.wp-block-file__button{background:#32373c;color:#fff;text-decoration:none}
/*# sourceURL=/wp-includes/css/classic-themes.min.css */
` }} />
        <style id='tutor-frontend-inline-css' type='text/css' dangerouslySetInnerHTML={{
          __html: `
.mce-notification.mce-notification-error{display: none !important;}
:root{--tutor-color-primary:#3e64de;--tutor-color-primary-rgb:62, 100, 222;--tutor-color-primary-hover:#395bca;--tutor-color-primary-hover-rgb:57, 91, 202;--tutor-body-color:#212327;--tutor-body-color-rgb:33, 35, 39;--tutor-border-color:#cdcfd5;--tutor-border-color-rgb:205, 207, 213;--tutor-color-gray:#e3e5eb;--tutor-color-gray-rgb:227, 229, 235;}
/*# sourceURL=tutor-frontend-inline-css */
` }} />
        <style id='woocommerce-layout-inline-css' type='text/css' dangerouslySetInnerHTML={{
          __html: `

	.infinite-scroll .woocommerce-pagination {
		display: none;
	}
/*# sourceURL=woocommerce-layout-inline-css */
` }} />
        <style id='woocommerce-inline-inline-css' type='text/css' dangerouslySetInnerHTML={{
          __html: `
.woocommerce form .form-row .required { visibility: visible; }
/*# sourceURL=woocommerce-inline-inline-css */
` }} />
        <style dangerouslySetInnerHTML={{ __html: `img#wpstats{display:none}` }} />
        <style dangerouslySetInnerHTML={{ __html: `.woocommerce-product-gallery{ opacity: 1 !important; }` }} />
        <style dangerouslySetInnerHTML={{
          __html: `
				.e-con.e-parent:nth-of-type(n+4):not(.e-lazyloaded):not(.e-no-lazyload),
				.e-con.e-parent:nth-of-type(n+4):not(.e-lazyloaded):not(.e-no-lazyload) * {
					background-image: none !important;
				}
				@media screen and (max-height: 1024px) {
					.e-con.e-parent:nth-of-type(n+3):not(.e-lazyloaded):not(.e-no-lazyload),
					.e-con.e-parent:nth-of-type(n+3):not(.e-lazyloaded):not(.e-no-lazyload) * {
						background-image: none !important;
					}
				}
				@media screen and (max-height: 640px) {
					.e-con.e-parent:nth-of-type(n+2):not(.e-lazyloaded):not(.e-no-lazyload),
					.e-con.e-parent:nth-of-type(n+2):not(.e-lazyloaded):not(.e-no-lazyload) * {
						background-image: none !important;
					}
				}
			` }} />
        <style id="wpr_lightbox_styles" dangerouslySetInnerHTML={{
          __html: `
				.lg-backdrop {
					background-color: rgba(0,0,0,0.6) !important;
				}
				.lg-toolbar,
				.lg-dropdown {
					background-color: rgba(0,0,0,0.8) !important;
				}
				.lg-dropdown:after {
					border-bottom-color: rgba(0,0,0,0.8) !important;
				}
				.lg-sub-html {
					background-color: rgba(0,0,0,0.8) !important;
				}
				.lg-thumb-outer,
				.lg-progress-bar {
					background-color: #444444 !important;
				}
				.lg-progress {
					background-color: #a90707 !important;
				}
				.lg-icon {
					color: #efefef !important;
					font-size: 20px !important;
				}
				.lg-icon.lg-toogle-thumb {
					font-size: 24px !important;
				}
				.lg-icon:hover,
				.lg-dropdown-text:hover {
					color: #ffffff !important;
				}
				.lg-sub-html,
				.lg-dropdown-text {
					color: #efefef !important;
					font-size: 14px !important;
				}
				#lg-counter {
					color: #efefef !important;
					font-size: 14px !important;
				}
				.lg-prev,
				.lg-next {
					font-size: 35px !important;
				}

				/* Defaults */
				.lg-icon {
				background-color: transparent !important;
				}

				#lg-counter {
				opacity: 0.9;
				}

				.lg-thumb-outer {
				padding: 0 10px;
				}

				.lg-thumb-item {
				border-radius: 0 !important;
				border: none !important;
				opacity: 0.5;
				}

				.lg-thumb-item.active {
					opacity: 1;
				}
	         ` }} />
        <style id='wp-block-heading-inline-css' type='text/css' dangerouslySetInnerHTML={{
          __html: `
h1:where(.wp-block-heading).has-background,h2:where(.wp-block-heading).has-background,h3:where(.wp-block-heading).has-background,h4:where(.wp-block-heading).has-background,h5:where(.wp-block-heading).has-background,h6:where(.wp-block-heading).has-background{padding:1.25em 2.375em}h1.has-text-align-left[style*=writing-mode]:where([style*=vertical-lr]),h1.has-text-align-right[style*=writing-mode]:where([style*=vertical-rl]),h2.has-text-align-left[style*=writing-mode]:where([style*=vertical-lr]),h2.has-text-align-right[style*=writing-mode]:where([style*=vertical-rl]),h3.has-text-align-left[style*=writing-mode]:where([style*=vertical-lr]),h3.has-text-align-right[style*=writing-mode]:where([style*=vertical-rl]),h4.has-text-align-left[style*=writing-mode]:where([style*=vertical-lr]),h4.has-text-align-right[style*=writing-mode]:where([style*=vertical-rl]),h5.has-text-align-left[style*=writing-mode]:where([style*=vertical-lr]),h5.has-text-align-right[style*=writing-mode]:where([style*=vertical-rl]),h6.has-text-align-left[style*=writing-mode]:where([style*=vertical-lr]),h6.has-text-align-right[style*=writing-mode]:where([style*=vertical-rl]){rotate:180deg}
/*# sourceURL=https://keicycabrera.com/wp-includes/blocks/heading/style.min.css */
` }} />
        <style id='wp-block-paragraph-inline-css' type='text/css' dangerouslySetInnerHTML={{
          __html: `
.is-small-text{font-size:.875em}.is-regular-text{font-size:1em}.is-large-text{font-size:2.25em}.is-larger-text{font-size:3em}.has-drop-cap:not(:focus):first-letter{float:left;font-size:8.4em;font-style:normal;font-weight:100;line-height:.68;margin:.05em .1em 0 0;text-transform:uppercase}body.rtl .has-drop-cap:not(:focus):first-letter{float:none;margin-left:.1em}p.has-drop-cap.has-background{overflow:hidden}:root :where(p.has-background){padding:1.25em 2.375em}:where(p.has-text-color:not(.has-link-color)) a{color:inherit}p.has-text-align-left[style*="writing-mode:vertical-lr"],p.has-text-align-right[style*="writing-mode:vertical-rl"]{rotate:180deg}
/*# sourceURL=https://keicycabrera.com/wp-includes/blocks/paragraph/style.min.css */
` }} />
        <style id='global-styles-inline-css' type='text/css' dangerouslySetInnerHTML={{
          __html: `
:root{--wp--preset--aspect-ratio--square: 1;--wp--preset--aspect-ratio--4-3: 4/3;--wp--preset--aspect-ratio--3-4: 3/4;--wp--preset--aspect-ratio--3-2: 3/2;--wp--preset--aspect-ratio--2-3: 2/3;--wp--preset--aspect-ratio--16-9: 16/9;--wp--preset--aspect-ratio--9-16: 9/16;--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #184476;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgb(6,147,227) 0%,rgb(30,64,175) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgb(252,185,0) 0%,rgb(255,105,0) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgb(255,105,0) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgb(255, 255, 255), 6px 6px rgb(0, 0, 0);--wp--preset--shadow--crisp: 6px 6px 0px rgb(0, 0, 0);}:where(.is-layout-flex){gap: 0.5em;}:where(.is-layout-grid){gap: 0.5em;}body .is-layout-flex{display: flex;}.is-layout-flex{flex-wrap: wrap;align-items: center;}.is-layout-flex > :is(*, div){margin: 0;}body .is-layout-grid{display: grid;}.is-layout-grid > :is(*, div){margin: 0;}:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}
/*# sourceURL=global-styles-inline-css */
` }} />
        <style id='core-block-supports-inline-css' type='text/css' dangerouslySetInnerHTML={{
          __html: `
.wp-elements-e8efb826b5227ae8e8bf245ce92ed51b a:where(:not(.wp-element-button)){color:var(--wp--preset--color--vivid-cyan-blue);}.wp-elements-c488946d7bf4451c4aeb1de1c19238f1 a:where(:not(.wp-element-button)){color:var(--wp--preset--color--vivid-cyan-blue);}.wp-elements-b61b38ff298d0ada016e36183155dcac a:where(:not(.wp-element-button)){color:var(--wp--preset--color--vivid-cyan-blue);}
/*# sourceURL=core-block-supports-inline-css */
` }} />
        <style id='wpforms-modern-full-inline-css' type='text/css' dangerouslySetInnerHTML={{
          __html: `
:root {
				--wpforms-field-border-radius: 3px;
--wpforms-field-border-style: solid;
--wpforms-field-border-size: 1px;
--wpforms-field-background-color: #ffffff;
--wpforms-field-border-color: rgba( 0, 0, 0, 0.25 );
--wpforms-field-border-color-spare: rgba( 0, 0, 0, 0.25 );
--wpforms-field-text-color: rgba( 0, 0, 0, 0.7 );
--wpforms-field-menu-color: #ffffff;
--wpforms-label-color: rgba( 0, 0, 0, 0.85 );
--wpforms-label-sublabel-color: rgba( 0, 0, 0, 0.55 );
--wpforms-label-error-color: #d63637;
--wpforms-button-border-radius: 3px;
--wpforms-button-border-style: none;
--wpforms-button-border-size: 1px;
--wpforms-button-background-color: #066aab;
--wpforms-button-border-color: #066aab;
--wpforms-button-text-color: #ffffff;
--wpforms-page-break-color: #066aab;
--wpforms-background-image: none;
--wpforms-background-position: center center;
--wpforms-background-repeat: no-repeat;
--wpforms-background-size: cover;
--wpforms-background-width: 100px;
--wpforms-background-height: 100px;
--wpforms-background-color: rgba( 0, 0, 0, 0 );
--wpforms-background-url: none;
--wpforms-container-padding: 0px;
--wpforms-container-border-style: none;
--wpforms-container-border-width: 1px;
--wpforms-container-border-color: #000000;
--wpforms-container-border-radius: 3px;
--wpforms-field-size-input-height: 43px;
--wpforms-field-size-input-spacing: 15px;
--wpforms-field-size-font-size: 16px;
--wpforms-field-size-line-height: 19px;
--wpforms-field-size-padding-h: 14px;
--wpforms-field-size-checkbox-size: 16px;
--wpforms-field-size-sublabel-spacing: 5px;
--wpforms-field-size-icon-size: 1;
--wpforms-label-size-font-size: 16px;
--wpforms-label-size-line-height: 19px;
--wpforms-label-size-sublabel-font-size: 14px;
--wpforms-label-size-sublabel-line-height: 17px;
--wpforms-button-size-font-size: 17px;
--wpforms-button-size-height: 41px;
--wpforms-button-size-padding-h: 15px;
--wpforms-button-size-margin-top: 10px;
--wpforms-container-shadow-size-box-shadow: none;

			}
/*# sourceURL=wpforms-modern-full-inline-css */
` }} />
        <style dangerouslySetInnerHTML={{
          __html: `.elementor-305 .elementor-element.elementor-element-5a366309{--display:flex;top:0px;bottom:auto;z-index:10;--z-index:3;}.elementor-305 .elementor-element.elementor-element-5a366309:not(.elementor-motion-effects-element-type-background), .elementor-305 .elementor-element.elementor-element-5a366309 > .elementor-motion-effects-container > .elementor-motion-effects-layer{background-color:#FFFFFF;}.elementor-305 .elementor-element.elementor-element-5a366309 + .wpr-hidden-header{top:0px;}.elementor-305 .elementor-element.elementor-element-5a366309 + .wpr-hidden-header-flex{top:0px;}.wpr-hidden-header{z-index:10;}.wpr-hidden-header-flex{z-index:10;}.elementor-305 .elementor-element.elementor-element-46ba0f48{--display:flex;--flex-direction:row;--container-widget-width:calc( ( 1 - var( --container-widget-flex-grow ) ) * 100% );--container-widget-height:100%;--container-widget-flex-grow:1;--container-widget-align-self:stretch;--flex-wrap-mobile:wrap;--justify-content:space-between;--align-items:center;}.elementor-305 .elementor-element.elementor-element-46ba0f48.e-con{--flex-grow:0;--flex-shrink:0;}.elementor-widget-image .widget-image-caption{color:var( --e-global-color-text );font-family:var( --e-global-typography-text-font-family ), Sans-serif;font-weight:var( --e-global-typography-text-font-weight );}.elementor-305 .elementor-element.elementor-element-7d7063f6 > .elementor-widget-container{margin:-20px 0px -20px 0px;padding:0px 0px 0px 0px;}.elementor-305 .elementor-element.elementor-element-7d7063f6 img{width:200px;}.elementor-305 .elementor-element.elementor-element-47158517.elementor-element{--flex-grow:0;--flex-shrink:0;}.elementor-305 .elementor-element.elementor-element-47158517 .wpr-menu-item.wpr-pointer-item{transition-duration:0.2s;}.elementor-305 .elementor-element.elementor-element-47158517 .wpr-menu-item.wpr-pointer-item:before{transition-duration:0.2s;}.elementor-305 .elementor-element.elementor-element-47158517 .wpr-menu-item.wpr-pointer-item:after{transition-duration:0.2s;}.elementor-305 .elementor-element.elementor-element-47158517 .wpr-mobile-toggle-wrap{text-align:center;}.elementor-305 .elementor-element.elementor-element-47158517 .wpr-nav-menu .wpr-menu-item,
					 .elementor-305 .elementor-element.elementor-element-47158517 .wpr-nav-menu > .menu-item-has-children > .wpr-sub-icon{color:var( --e-global-color-secondary );}.elementor-305 .elementor-element.elementor-element-47158517 .wpr-nav-menu .wpr-menu-item:hover,
					 .elementor-305 .elementor-element.elementor-element-47158517 .wpr-nav-menu > .menu-item-has-children:hover > .wpr-sub-icon,
					 .elementor-305 .elementor-element.elementor-element-47158517 .wpr-nav-menu .wpr-menu-item.wpr-active-menu-item,
					 .elementor-305 .elementor-element.elementor-element-47158517 .wpr-nav-menu > .menu-item-has-children.current_page_item > .wpr-sub-icon{color:var( --e-global-color-accent );}.elementor-305 .elementor-element.elementor-element-47158517.wpr-pointer-line-fx .wpr-menu-item:before,
					 .elementor-305 .elementor-element.elementor-element-47158517.wpr-pointer-line-fx .wpr-menu-item:after{background-color:var( --e-global-color-accent );}.elementor-305 .elementor-element.elementor-element-47158517.wpr-pointer-border-fx .wpr-menu-item:before{border-color:var( --e-global-color-accent );border-width:1px;}.elementor-305 .elementor-element.elementor-element-47158517.wpr-pointer-background-fx .wpr-menu-item:before{background-color:var( --e-global-color-accent );}.elementor-305 .elementor-element.elementor-element-47158517 .menu-item-has-children .wpr-sub-icon{font-size:14px;}.elementor-305 .elementor-element.elementor-element-47158517.wpr-pointer-background:not(.wpr-sub-icon-none) .wpr-nav-menu-horizontal .menu-item-has-children .wpr-pointer-item{padding-right:calc(14px + 7px);}.elementor-305 .elementor-element.elementor-element-47158517.wpr-pointer-border:not(.wpr-sub-icon-none) .wpr-nav-menu-horizontal .menu-item-has-children .wpr-pointer-item{padding-right:calc(14px + 7px);}.elementor-305 .elementor-element.elementor-element-47158517 .wpr-nav-menu .wpr-menu-item,.elementor-305 .elementor-element.elementor-element-47158517 .wpr-mobile-nav-menu a,.elementor-305 .elementor-element.elementor-element-47158517 .wpr-mobile-toggle-text{font-family:"Red Hat Display", Sans-serif;font-weight:700;}.elementor-305 .elementor-element.elementor-element-47158517.wpr-pointer-underline .wpr-menu-item:after,
					 .elementor-305 .elementor-element.elementor-element-47158517.wpr-pointer-overline .wpr-menu-item:before,
					 .elementor-305 .elementor-element.elementor-element-47158517.wpr-pointer-double-line .wpr-menu-item:before,
					 .elementor-305 .elementor-element.elementor-element-47158517.wpr-pointer-double-line .wpr-menu-item:after{height:1px;}.elementor-305 .elementor-element.elementor-element-47158517.wpr-pointer-underline>nav>ul>li>.wpr-menu-item:after,
					 .elementor-305 .elementor-element.elementor-element-47158517.wpr-pointer-overline>nav>ul>li>.wpr-menu-item:before,
					 .elementor-305 .elementor-element.elementor-element-47158517.wpr-pointer-double-line>nav>ul>li>.wpr-menu-item:before,
					 .elementor-305 .elementor-element.elementor-element-47158517.wpr-pointer-double-line>nav>ul>li>.wpr-menu-item:after{height:1px;}.elementor-305 .elementor-element.elementor-element-47158517.wpr-pointer-border-fx>nav>ul>li>.wpr-menu-item:before{border-width:1px;}.elementor-305 .elementor-element.elementor-element-47158517.wpr-pointer-underline>.elementor-widget-container>nav>ul>li>.wpr-menu-item:after,
					 .elementor-305 .elementor-element.elementor-element-47158517.wpr-pointer-overline>.elementor-widget-container>nav>ul>li>.wpr-menu-item:before,
					 .elementor-305 .elementor-element.elementor-element-47158517.wpr-pointer-double-line>.elementor-widget-container>nav>ul>li>.wpr-menu-item:before,
					 .elementor-305 .elementor-element.elementor-element-47158517.wpr-pointer-double-line>.elementor-widget-container>nav>ul>li>.wpr-menu-item:after{height:1px;}.elementor-305 .elementor-element.elementor-element-47158517.wpr-pointer-border-fx>.elementor-widget-container>nav>ul>li>.wpr-menu-item:before{border-width:1px;}.elementor-305 .elementor-element.elementor-element-47158517:not(.wpr-pointer-border-fx) .wpr-menu-item.wpr-pointer-item:before{transform:translateY(-0px);}.elementor-305 .elementor-element.elementor-element-47158517:not(.wpr-pointer-border-fx) .wpr-menu-item.wpr-pointer-item:after{transform:translateY(0px);}.elementor-305 .elementor-element.elementor-element-47158517 .wpr-nav-menu .wpr-menu-item{padding-left:7px;padding-right:7px;padding-top:15px;padding-bottom:15px;}.elementor-305 .elementor-element.elementor-element-47158517.wpr-pointer-background:not(.wpr-sub-icon-none) .wpr-nav-menu-vertical .menu-item-has-children .wpr-sub-icon{text-indent:-7px;}.elementor-305 .elementor-element.elementor-element-47158517.wpr-pointer-border:not(.wpr-sub-icon-none) .wpr-nav-menu-vertical .menu-item-has-children .wpr-sub-icon{text-indent:-7px;}.elementor-305 .elementor-element.elementor-element-47158517 .wpr-nav-menu > .menu-item{margin-left:10px;margin-right:10px;}.elementor-305 .elementor-element.elementor-element-47158517 .wpr-nav-menu-vertical .wpr-nav-menu > li > .wpr-sub-menu{margin-left:10px;}.elementor-305 .elementor-element.elementor-element-47158517.wpr-main-menu-align-left .wpr-nav-menu-vertical .wpr-nav-menu > li > .wpr-sub-icon{right:10px;}.elementor-305 .elementor-element.elementor-element-47158517.wpr-main-menu-align-right .wpr-nav-menu-vertical .wpr-nav-menu > li > .wpr-sub-icon{left:10px;}.elementor-305 .elementor-element.elementor-element-47158517 .wpr-sub-menu .wpr-sub-menu-item,
					 .elementor-305 .elementor-element.elementor-element-47158517 .wpr-sub-menu > .menu-item-has-children .wpr-sub-icon{color:var( --e-global-color-secondary );}.elementor-305 .elementor-element.elementor-element-47158517 .wpr-sub-menu .wpr-sub-menu-item{background-color:#ffffff;font-family:"Red Hat Display", Sans-serif;font-weight:700;padding-left:15px;padding-right:15px;padding-top:13px;padding-bottom:13px;}.elementor-305 .elementor-element.elementor-element-47158517 .wpr-sub-menu .wpr-sub-menu-item:hover,
					 .elementor-305 .elementor-element.elementor-element-47158517 .wpr-sub-menu > .menu-item-has-children .wpr-sub-menu-item:hover .wpr-sub-icon,
					 .elementor-305 .elementor-element.elementor-element-47158517 .wpr-sub-menu .wpr-sub-menu-item.wpr-active-menu-item,
					 .elementor-305 .elementor-element.elementor-element-47158517 .wpr-sub-menu > .menu-item-has-children.current_page_item .wpr-sub-icon{color:#ffffff;}.elementor-305 .elementor-element.elementor-element-47158517 .wpr-sub-menu .wpr-sub-menu-item:hover,
					 .elementor-305 .elementor-element.elementor-element-47158517 .wpr-sub-menu .wpr-sub-menu-item.wpr-active-menu-item{background-color:var( --e-global-color-secondary );}.elementor-305 .elementor-element.elementor-element-47158517 .wpr-sub-menu .wpr-sub-icon{right:15px;}.elementor-305 .elementor-element.elementor-element-47158517.wpr-main-menu-align-right .wpr-nav-menu-vertical .wpr-sub-menu .wpr-sub-icon{left:15px;}.elementor-305 .elementor-element.elementor-element-47158517 .wpr-nav-menu-horizontal .wpr-nav-menu > li > .wpr-sub-menu{margin-top:0px;}.elementor-305 .elementor-element.elementor-element-47158517.wpr-sub-divider-yes .wpr-sub-menu li:not(:last-child){border-bottom-color:#e8e8e8;border-bottom-width:1px;}.elementor-305 .elementor-element.elementor-element-47158517 .wpr-sub-menu{border-style:solid;border-width:1px 1px 1px 1px;border-color:#E8E8E8;}.elementor-305 .elementor-element.elementor-element-47158517 .wpr-mobile-nav-menu a,
					 .elementor-305 .elementor-element.elementor-element-47158517 .wpr-mobile-nav-menu .menu-item-has-children > a:after{color:#333333;}.elementor-305 .elementor-element.elementor-element-47158517 .wpr-mobile-nav-menu li{background-color:#ffffff;}.elementor-305 .elementor-element.elementor-element-47158517 .wpr-mobile-nav-menu li a:hover,
					 .elementor-305 .elementor-element.elementor-element-47158517 .wpr-mobile-nav-menu .menu-item-has-children > a:hover:after,
					 .elementor-305 .elementor-element.elementor-element-47158517 .wpr-mobile-nav-menu li a.wpr-active-menu-item,
					 .elementor-305 .elementor-element.elementor-element-47158517 .wpr-mobile-nav-menu .menu-item-has-children.current_page_item > a:hover:after{color:#ffffff;}.elementor-305 .elementor-element.elementor-element-47158517 .wpr-mobile-nav-menu a:hover,
					 .elementor-305 .elementor-element.elementor-element-47158517 .wpr-mobile-nav-menu a.wpr-active-menu-item{background-color:var( --e-global-color-secondary );}.elementor-305 .elementor-element.elementor-element-47158517 .wpr-mobile-nav-menu a{padding-left:50px;padding-right:50px;}.elementor-305 .elementor-element.elementor-element-47158517 .wpr-mobile-nav-menu .menu-item-has-children > a:after{margin-left:50px;margin-right:50px;}.elementor-305 .elementor-element.elementor-element-47158517 .wpr-mobile-nav-menu .wpr-mobile-menu-item{padding-top:4px;padding-bottom:4px;}.elementor-305 .elementor-element.elementor-element-47158517.wpr-mobile-divider-yes .wpr-mobile-nav-menu a{border-bottom-color:#F4F4F4;border-bottom-width:1px;}.elementor-305 .elementor-element.elementor-element-47158517 .wpr-mobile-nav-menu .wpr-mobile-sub-menu-item{font-size:12px;padding-top:5px;padding-bottom:5px;}.elementor-305 .elementor-element.elementor-element-47158517 .wpr-mobile-nav-menu{margin-top:10px;}.elementor-305 .elementor-element.elementor-element-47158517 .wpr-mobile-toggle{border-color:var( --e-global-color-primary );width:43px;border-width:0px;}.elementor-305 .elementor-element.elementor-element-47158517 .wpr-mobile-toggle-text{color:var( --e-global-color-primary );}.elementor-305 .elementor-element.elementor-element-47158517 .wpr-mobile-toggle-line{background-color:var( --e-global-color-primary );height:2px;margin-bottom:3px;}.elementor-305 .elementor-element.elementor-element-47158517 .wpr-mobile-toggle:hover{border-color:var( --e-global-color-secondary );}.elementor-305 .elementor-element.elementor-element-47158517 .wpr-mobile-toggle:hover .wpr-mobile-toggle-text{color:var( --e-global-color-secondary );}.elementor-305 .elementor-element.elementor-element-47158517 .wpr-mobile-toggle:hover .wpr-mobile-toggle-line{background-color:var( --e-global-color-secondary );}.elementor-widget-button .elementor-button{background-color:var( --e-global-color-accent );font-family:var( --e-global-typography-accent-font-family ), Sans-serif;font-weight:var( --e-global-typography-accent-font-weight );}.elementor-305 .elementor-element.elementor-element-6ff8c872 .elementor-button{background-color:var( --e-global-color-secondary );fill:#FFFFFF;color:#FFFFFF;border-style:solid;border-width:1px 1px 1px 1px;border-radius:30px 30px 30px 30px;padding:10px 40px 10px 40px;}.elementor-305 .elementor-element.elementor-element-d3ff6c3{--display:flex;}@media(max-width:1024px){.elementor-305 .elementor-element.elementor-element-5a366309{top:0px;bottom:auto;}.elementor-305 .elementor-element.elementor-element-5a366309 + .wpr-hidden-header{top:0px;}.elementor-305 .elementor-element.elementor-element-5a366309 + .wpr-hidden-header-flex{top:0px;}.elementor-305 .elementor-element.elementor-element-47158517 .wpr-nav-menu .wpr-menu-item{padding-left:4px;padding-right:4px;}.elementor-305 .elementor-element.elementor-element-47158517.wpr-pointer-background:not(.wpr-sub-icon-none) .wpr-nav-menu-vertical .menu-item-has-children .wpr-sub-icon{text-indent:-4px;}.elementor-305 .elementor-element.elementor-element-47158517.wpr-pointer-border:not(.wpr-sub-icon-none) .wpr-nav-menu-vertical .menu-item-has-children .wpr-sub-icon{text-indent:-4px;}.elementor-305 .elementor-element.elementor-element-47158517 .wpr-nav-menu > .menu-item{margin-left:4px;margin-right:4px;}.elementor-305 .elementor-element.elementor-element-47158517 .wpr-nav-menu-vertical .wpr-nav-menu > li > .wpr-sub-menu{margin-left:4px;}.elementor-305 .elementor-element.elementor-element-47158517.wpr-main-menu-align-left .wpr-nav-menu-vertical .wpr-nav-menu > li > .wpr-sub-icon{right:4px;}.elementor-305 .elementor-element.elementor-element-47158517.wpr-main-menu-align-right .wpr-nav-menu-vertical .wpr-nav-menu > li > .wpr-sub-icon{left:4px;}}@media(max-width:767px){.elementor-305 .elementor-element.elementor-element-5a366309{top:0px;bottom:auto;--padding-top:10px;--padding-bottom:10px;--padding-left:20px;--padding-right:20px;}.elementor-305 .elementor-element.elementor-element-5a366309 + .wpr-hidden-header{top:0px;}.elementor-305 .elementor-element.elementor-element-5a366309 + .wpr-hidden-header-flex{top:0px;}.elementor-305 .elementor-element.elementor-element-46ba0f48{--width:100%;--margin-top:0px;--margin-bottom:0px;--margin-left:0px;--margin-right:0px;--padding-top:0px;--padding-bottom:0px;--padding-left:0px;--padding-right:0px;}.elementor-305 .elementor-element.elementor-element-47158517{width:var( --container-widget-width, 41% );max-width:41%;--container-widget-width:41%;--container-widget-flex-grow:0;}.elementor-305 .elementor-element.elementor-element-47158517 .wpr-mobile-toggle-wrap{text-align:center;}}` }} />
        <style id="wpforms-css-vars-elementor-widget-3faafc5" dangerouslySetInnerHTML={{
          __html: `
				.elementor-widget-wpforms.elementor-element-3faafc5 {
				--wpforms-field-size-input-height: 43px;
--wpforms-field-size-input-spacing: 15px;
--wpforms-field-size-font-size: 16px;
--wpforms-field-size-line-height: 19px;
--wpforms-field-size-padding-h: 14px;
--wpforms-field-size-checkbox-size: 16px;
--wpforms-field-size-sublabel-spacing: 5px;
--wpforms-field-size-icon-size: 1;
--wpforms-label-size-font-size: 16px;
--wpforms-label-size-line-height: 19px;
--wpforms-label-size-sublabel-font-size: 14px;
--wpforms-label-size-sublabel-line-height: 17px;
--wpforms-button-size-font-size: 17px;
--wpforms-button-size-height: 41px;
--wpforms-button-size-padding-h: 15px;
--wpforms-button-size-margin-top: 10px;

			}
			` }} />
        <style type="text/css" dangerouslySetInnerHTML={{ __html: `@import url("https://assets.mlcdn.com/fonts.css?version=1750329");` }} />
        <style type="text/css" dangerouslySetInnerHTML={{
          __html: `
    /* LOADER */
    .ml-form-embedSubmitLoad {
      display: inline-block;
      width: 20px;
      height: 20px;
    }

    .g-recaptcha {
    transform: scale(1);
    -webkit-transform: scale(1);
    transform-origin: 0 0;
    -webkit-transform-origin: 0 0;
    height: ;
    }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0,0,0,0);
      border: 0;
    }

    .ml-form-embedSubmitLoad:after {
      content: " ";
      display: block;
      width: 11px;
      height: 11px;
      margin: 1px;
      border-radius: 50%;
      border: 4px solid #fff;
    border-color: #ffffff #ffffff #ffffff transparent;
    animation: ml-form-embedSubmitLoad 1.2s linear infinite;
    }
    @keyframes ml-form-embedSubmitLoad {
      0% {
      transform: rotate(0deg);
      }
      100% {
      transform: rotate(360deg);
      }
    }
      #mlb2-16043421.ml-form-embedContainer {
        box-sizing: border-box;
        display: table;
        margin: 0 auto;
        position: static;
        width: 100% !important;
      }
      #mlb2-16043421.ml-form-embedContainer h4,
      #mlb2-16043421.ml-form-embedContainer p,
      #mlb2-16043421.ml-form-embedContainer span,
      #mlb2-16043421.ml-form-embedContainer button {
        text-transform: none !important;
        letter-spacing: normal !important;
      }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper {
        background-color: #f6f6f6;
        
        border-width: 0px;
        border-color: transparent;
        border-radius: 4px;
        border-style: solid;
        box-sizing: border-box;
        display: inline-block !important;
        margin: 0;
        padding: 0;
        position: relative;
              }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper.embedPopup,
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper.embedDefault { width: 400px; }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper.embedForm { max-width: 400px; width: 100%; }
      #mlb2-16043421.ml-form-embedContainer .ml-form-align-left { text-align: left; }
      #mlb2-16043421.ml-form-embedContainer .ml-form-align-center { text-align: center; }
      #mlb2-16043421.ml-form-embedContainer .ml-form-align-default { display: table-cell !important; vertical-align: middle !important; text-align: center !important; }
      #mlb2-16043421.ml-form-embedContainer .ml-form-align-right { text-align: right; }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedHeader img {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        height: auto;
        margin: 0 auto !important;
        max-width: 100%;
        width: undefinedpx;
      }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody,
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody {
        padding: 20px 20px 0 20px;
      }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody.ml-form-embedBodyHorizontal {
        padding-bottom: 0;
      }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent,
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent {
        text-align: left;
        margin: 0 0 20px 0;
      }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent h4,
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent h4 {
        color: #000000;
        font-family: 'Montserrat', sans-serif;
        font-size: 30px;
        font-weight: 400;
        margin: 0 0 10px 0;
        text-align: left;
        word-break: break-word;
      }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent p,
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent p {
        color: #000000;
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        margin: 0 0 10px 0;
        text-align: left;
      }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent ul,
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent ol,
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent ul,
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent ol {
        color: #000000;
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
      }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent ol ol,
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent ol ol {
        list-style-type: lower-alpha;
      }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent ol ol ol,
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent ol ol ol {
        list-style-type: lower-roman;
      }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent p a,
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent p a {
        color: #000000;
        text-decoration: underline;
      }

      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-block-form .ml-field-group {
        text-align: left!important;
      }

      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-block-form .ml-field-group label {
        margin-bottom: 5px;
        color: #333333;
        font-size: 14px;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold; font-style: normal; text-decoration: none;;
        display: inline-block;
        line-height: 20px;
      }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent p:last-child,
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent p:last-child {
        margin: 0;
      }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody form {
        margin: 0;
        width: 100%;
      }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-formContent,
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow {
        margin: 0 0 20px 0;
        width: 100%;
      }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow {
        float: left;
      }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-formContent.horozintalForm {
        margin: 0;
        padding: 0 0 20px 0;
        width: 100%;
        height: auto;
        float: left;
      }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow {
        margin: 0 0 10px 0;
        width: 100%;
      }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow.ml-last-item {
        margin: 0;
      }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow.ml-formfieldHorizintal {
        margin: 0;
      }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input {
        background-color: #ffffff !important;
        color: #333333 !important;
        border-color: #cccccc;
        border-radius: 4px !important;
        border-style: solid !important;
        border-width: 1px !important;
        font-family: 'Montserrat', sans-serif;
        font-size: 14px !important;
        height: auto;
        line-height: 21px !important;
        margin-bottom: 0;
        margin-top: 0;
        margin-left: 0;
        margin-right: 0;
        padding: 10px 10px !important;
        width: 100% !important;
        box-sizing: border-box !important;
        max-width: 100% !important;
      }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input::-webkit-input-placeholder,
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input::-webkit-input-placeholder { color: #333333; }

      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input::-moz-placeholder,
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input::-moz-placeholder { color: #333333; }

      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input:-ms-input-placeholder,
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input:-ms-input-placeholder { color: #333333; }

      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input:-moz-placeholder,
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input:-moz-placeholder { color: #333333; }

      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow textarea, #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow textarea {
        background-color: #ffffff !important;
        color: #333333 !important;
        border-color: #cccccc;
        border-radius: 4px !important;
        border-style: solid !important;
        border-width: 1px !important;
        font-family: 'Montserrat', sans-serif;
        font-size: 14px !important;
        height: auto;
        line-height: 21px !important;
        margin-bottom: 0;
        margin-top: 0;
        padding: 10px 10px !important;
        width: 100% !important;
        box-sizing: border-box !important;
        max-width: 100% !important;
      }

      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-label::before, #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-label::before, #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label::before, #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-label::before, #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::before, #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::before, #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before {
          border-color: #cccccc!important;
          background-color: #ffffff!important;
      }

      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input.custom-control-input[type="checkbox"]{
        box-sizing: border-box;
        padding: 0;
        position: absolute;
        z-index: -1;
        opacity: 0;
        margin-top: 5px;
        margin-left: -1.5rem;
        overflow: visible;
      }

      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label::before, #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-label::before, #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::before, #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::before, #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before {
        border-radius: 4px!important;
      }

      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow input[type=checkbox]:checked~.label-description::after, #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox input[type=checkbox]:checked~.label-description::after, #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-input:checked~.custom-control-label::after, #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-input:checked~.custom-control-label::after, #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox input[type=checkbox]:checked~.label-description::after {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
      }

      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-input:checked~.custom-control-label::after, #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-input:checked~.custom-control-label::after {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
      }

      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-input:checked~.custom-control-label::before, #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-input:checked~.custom-control-label::before, #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-input:checked~.custom-control-label::before, #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-input:checked~.custom-control-label::before, #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox input[type=checkbox]:checked~.label-description::before, #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox input[type=checkbox]:checked~.label-description::before, #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow input[type=checkbox]:checked~.label-description::before  {
          border-color: #000000!important;
          background-color: #000000!important;
      }

      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-label::before, #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-label::before, #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-label::after, #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-label::after, #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label::before, #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label::after, #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-label::before, #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-label::after {
           top: 2px;
           box-sizing: border-box;
      }

      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::before, #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::after, #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before, #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::after {
           top: 0px!important;
           box-sizing: border-box!important;
      }

      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before, #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::after {
        top: 0px!important;
           box-sizing: border-box!important;
      }

       #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::after {
            top: 0px!important;
            box-sizing: border-box!important;
            position: absolute;
            left: -1.5rem;
            display: block;
            width: 1rem;
            height: 1rem;
            content: "";
       }

      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::before {
        top: 0px!important;
        box-sizing: border-box!important;
      }

      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .custom-control-label::before {
          position: absolute;
          top: 4px;
          left: -1.5rem;
          display: block;
          width: 16px;
          height: 16px;
          pointer-events: none;
          content: "";
          background-color: #ffffff;
          border: #adb5bd solid 1px;
          border-radius: 50%;
      }

      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .custom-control-label::after {
          position: absolute;
          top: 2px!important;
          left: -1.5rem;
          display: block;
          width: 1rem;
          height: 1rem;
          content: "";
      }

      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::before, #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::before, #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before {
          position: absolute;
          top: 4px;
          left: -1.5rem;
          display: block;
          width: 16px;
          height: 16px;
          pointer-events: none;
          content: "";
          background-color: #ffffff;
          border: #adb5bd solid 1px;
          border-radius: 50%;
      }

      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::after {
          position: absolute;
          top: 0px!important;
          left: -1.5rem;
          display: block;
          width: 1rem;
          height: 1rem;
          content: "";
      }

      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::after {
          position: absolute;
          top: 0px!important;
          left: -1.5rem;
          display: block;
          width: 1rem;
          height: 1rem;
          content: "";
      }

      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .custom-radio .custom-control-label::after {
          background: no-repeat 50%/50% 50%;
      }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .custom-checkbox .custom-control-label::after, #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::after, #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::after, #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::after {
          background: no-repeat 50%/50% 50%;
      }

      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-control, #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-control {
        position: relative;
        display: block;
        min-height: 1.5rem;
        padding-left: 1.5rem;
      }

      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-input, #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-input, #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-input, #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-input {
          position: absolute;
          z-index: -1;
          opacity: 0;
          box-sizing: border-box;
          padding: 0;
      }

      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-label, #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-label, #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label, #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-label {
          color: #000000;
          font-size: 12px!important;
          font-family: 'Montserrat', sans-serif;
          line-height: 22px;
          margin-bottom: 0;
          position: relative;
          vertical-align: top;
          font-style: normal;
          font-weight: 700;
      }

      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-select, #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-select {
        background-color: #ffffff !important;
        color: #333333 !important;
        border-color: #cccccc;
        border-radius: 4px !important;
        border-style: solid !important;
        border-width: 1px !important;
        font-family: 'Montserrat', sans-serif;
        font-size: 14px !important;
        line-height: 20px !important;
        margin-bottom: 0;
        margin-top: 0;
        padding: 10px 28px 10px 12px !important;
        width: 100% !important;
        box-sizing: border-box !important;
        max-width: 100% !important;
        height: auto;
        display: inline-block;
        vertical-align: middle;
        background: url('../assets.mlcdn.com/ml/images/default/dropdown.svg') no-repeat right .75rem center/8px 10px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }

      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow {
        height: auto;
        width: 100%;
        float: left;
      }
      .ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-input-horizontal { width: 70%; float: left; }
      .ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-button-horizontal { width: 30%; float: left; }
      .ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-button-horizontal.labelsOn { padding-top: 25px;  }
      .ml-form-formContent.horozintalForm .ml-form-horizontalRow .horizontal-fields { box-sizing: border-box; float: left; padding-right: 10px;  }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input {
        background-color: #ffffff;
        color: #333333;
        border-color: #cccccc;
        border-radius: 4px;
        border-style: solid;
        border-width: 1px;
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
        line-height: 20px;
        margin-bottom: 0;
        margin-top: 0;
        padding: 10px 10px;
        width: 100%;
        box-sizing: border-box;
        overflow-y: initial;
      }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow button {
        background-color: #000000 !important;
        border-color: #000000;
        border-style: solid;
        border-width: 1px;
        border-radius: 4px;
        box-shadow: none;
        color: #ffffff !important;
        cursor: pointer;
        font-family: 'Montserrat', sans-serif;
        font-size: 14px !important;
        font-weight: 700;
        line-height: 20px;
        margin: 0 !important;
        padding: 10px !important;
        width: 100%;
        height: auto;
      }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow button:hover {
        background-color: #333333 !important;
        border-color: #333333 !important;
      }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow input[type="checkbox"] {
        box-sizing: border-box;
        padding: 0;
        position: absolute;
        z-index: -1;
        opacity: 0;
        margin-top: 5px;
        margin-left: -1.5rem;
        overflow: visible;
      }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description {
        color: #000000;
        display: block;
        font-family: 'Poppins', sans-serif;
        font-size: 12px;
        text-align: left;
        margin-bottom: 0;
        position: relative;
        vertical-align: top;
      }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow label {
        font-weight: normal;
        margin: 0;
        padding: 0;
        position: relative;
        display: block;
        min-height: 24px;
        padding-left: 24px;

      }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow label a {
        color: #000000;
        text-decoration: underline;
      }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow label p {
        color: #000000 !important;
        font-family: 'Poppins', sans-serif !important;
        font-size: 12px !important;
        font-weight: normal !important;
        line-height: 18px !important;
        padding: 0 !important;
        margin: 0 5px 0 0 !important;
      }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow label p:last-child {
        margin: 0;
      }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit {
        margin: 0 0 20px 0;
        float: left;
        width: 100%;
      }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button {
        background-color: #000000 !important;
        border: none !important;
        border-radius: 4px !important;
        box-shadow: none !important;
        color: #ffffff !important;
        cursor: pointer;
        font-family: 'Montserrat', sans-serif !important;
        font-size: 14px !important;
        font-weight: 700 !important;
        line-height: 21px !important;
        height: auto;
        padding: 10px !important;
        width: 100% !important;
        box-sizing: border-box !important;
      }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button.loading {
        display: none;
      }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button:hover {
        background-color: #333333 !important;
      }
      .ml-subscribe-close {
        width: 30px;
        height: 30px;
        background: url('../assets.mlcdn.com/ml/images/default/modal_close.png') no-repeat;
        background-size: 30px;
        cursor: pointer;
        margin-top: -10px;
        margin-right: -10px;
        position: absolute;
        top: 0;
        right: 0;
      }
      .ml-error input, .ml-error textarea, .ml-error select {
        border-color: red!important;
      }

      .ml-error .custom-checkbox-radio-list {
        border: 1px solid red !important;
        border-radius: 4px;
        padding: 10px;
      }

      .ml-error .label-description,
      .ml-error .label-description p,
      .ml-error .label-description p a,
      .ml-error label:first-child {
        color: #ff0000 !important;
      }

      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow.ml-error .label-description p,
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow.ml-error .label-description p:first-letter {
        color: #ff0000 !important;
      }
            @media only screen and (max-width: 400px){

        .ml-form-embedWrapper.embedDefault, .ml-form-embedWrapper.embedPopup { width: 100%!important; }
        .ml-form-formContent.horozintalForm { float: left!important; }
        .ml-form-formContent.horozintalForm .ml-form-horizontalRow { height: auto!important; width: 100%!important; float: left!important; }
        .ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-input-horizontal { width: 100%!important; }
        .ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-input-horizontal > div { padding-right: 0px!important; padding-bottom: 10px; }
        .ml-form-formContent.horozintalForm .ml-button-horizontal { width: 100%!important; }
        .ml-form-formContent.horozintalForm .ml-button-horizontal.labelsOn { padding-top: 0px!important; }

      }
    ` }} />
        <style type="text/css" dangerouslySetInnerHTML={{
          __html: `
    @media only screen and (max-width: 400px) {
       .ml-form-formContent.horozintalForm .ml-form-horizontalRow .horizontal-fields {
        margin-bottom: 10px !important;
        width: 100% !important;
      }
    }
  ` }} />
        <style type="text/css" dangerouslySetInnerHTML={{
          __html: `
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions { text-align: left; float: left; width: 100%; }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent {
        margin: 0 0 15px 0;
        text-align: left;
      }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent.horizontal {
        margin: 0 0 15px 0;
      }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent h4 {
        color: #000000;
        font-family: 'Open Sans', Arial, Helvetica, sans-serif;
        font-size: 12px;
        font-weight: 700;
        line-height: 18px;
        margin: 0 0 10px 0;
        word-break: break-word;
      }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent p {
        color: #000000;
        font-family: 'Open Sans', Arial, Helvetica, sans-serif;
        font-size: 12px;
        line-height: 18px;
        margin: 0 0 10px 0;
      }

      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent.privacy-policy p {
        color: #000000;
        font-family: 'Poppins', sans-serif;
        font-size: 12px;
        line-height: 22px;
        margin: 0 0 10px 0;
      }

      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent.privacy-policy p a {
        color: #000000;
      }

      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent.privacy-policy p:last-child {
        margin: 0;
      }

      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent p a {
        color: #000000;
        text-decoration: underline;
      }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent p:last-child { margin: 0 0 15px 0; }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptions {
        margin: 0;
        padding: 0;
      }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox {
        margin: 0 0 10px 0;
      }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox:last-child {
        margin: 0;
      }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox label {
        font-weight: normal;
        margin: 0;
        padding: 0;
        position: relative;
        display: block;
        min-height: 24px;
        padding-left: 24px;
      }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description {
        color: #000000;
        font-family: 'Montserrat', sans-serif;
        font-size: 12px;
        line-height: 18px;
        text-align: left;
        margin-bottom: 0;
        position: relative;
        vertical-align: top;
        font-style: normal;
        font-weight: 700;
      }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .description {
        color: #000000;
        font-family: 'Montserrat', sans-serif;
        font-size: 12px;
        font-style: italic;
        font-weight: 400;
        line-height: 18px;
        margin: 5px 0 0 0;
      }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox input[type="checkbox"] {
        box-sizing: border-box;
        padding: 0;
        position: absolute;
        z-index: -1;
        opacity: 0;
        margin-top: 5px;
        margin-left: -1.5rem;
        overflow: visible;
      }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedMailerLite-GDPR {
        padding-bottom: 20px;
      }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedMailerLite-GDPR p {
        color: #000000;
        font-family: 'Open Sans', Arial, Helvetica, sans-serif;
        font-size: 10px;
        line-height: 14px;
        margin: 0;
        padding: 0;
      }
      #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedMailerLite-GDPR p a {
        color: #000000;
        text-decoration: underline;

      }
      @media (max-width: 768px) {
        #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent p {
          font-size: 12px !important;
          line-height: 18px !important;
        }
        #mlb2-16043421.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedMailerLite-GDPR p {
          font-size: 10px !important;
          line-height: 14px !important;
        }
      }
    ` }} />
        <style dangerouslySetInnerHTML={{ __html: `.elementor-1691 .elementor-element.elementor-element-7747876f{--display:flex;--flex-direction:row;--container-widget-width:initial;--container-widget-height:100%;--container-widget-flex-grow:1;--container-widget-align-self:stretch;--flex-wrap-mobile:wrap;--gap:0px 0px;--row-gap:0px;--column-gap:0px;--margin-top:100px;--margin-bottom:0px;--margin-left:0px;--margin-right:0px;--padding-top:50px;--padding-bottom:0px;--padding-left:0px;--padding-right:0px;}.elementor-1691 .elementor-element.elementor-element-7747876f:not(.elementor-motion-effects-element-type-background), .elementor-1691 .elementor-element.elementor-element-7747876f > .elementor-motion-effects-container > .elementor-motion-effects-layer{background-color:var( --e-global-color-primary );}.elementor-1691 .elementor-element.elementor-element-2ab1b9f5{--display:flex;}.elementor-1691 .elementor-element.elementor-element-2ab1b9f5.e-con{--flex-grow:0;--flex-shrink:0;}.elementor-widget-image .widget-image-caption{color:var( --e-global-color-text );font-family:var( --e-global-typography-text-font-family ), Sans-serif;font-weight:var( --e-global-typography-text-font-weight );}.elementor-1691 .elementor-element.elementor-element-20120b07 > .elementor-widget-container{margin:-20px 0px -20px 0px;padding:0px 0px 0px 0px;}.elementor-1691 .elementor-element.elementor-element-20120b07{text-align:left;}.elementor-1691 .elementor-element.elementor-element-20120b07 img{width:220px;}.elementor-widget-text-editor{font-family:var( --e-global-typography-text-font-family ), Sans-serif;font-weight:var( --e-global-typography-text-font-weight );color:var( --e-global-color-text );}.elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap{background-color:var( --e-global-color-primary );}.elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap, .elementor-widget-text-editor.elementor-drop-cap-view-default .elementor-drop-cap{color:var( --e-global-color-primary );border-color:var( --e-global-color-primary );}.elementor-1691 .elementor-element.elementor-element-262d481d{font-family:"Red Hat Display", Sans-serif;font-size:15px;font-weight:400;color:#000000;}.elementor-1691 .elementor-element.elementor-element-7f91b92e{--grid-template-columns:repeat(0, auto);--icon-size:14px;--grid-column-gap:10px;--grid-row-gap:0px;}.elementor-1691 .elementor-element.elementor-element-7f91b92e .elementor-widget-container{text-align:center;}.elementor-1691 .elementor-element.elementor-element-7f91b92e .elementor-social-icon{background-color:#FFFFFF;--icon-padding:0.7em;}.elementor-1691 .elementor-element.elementor-element-7f91b92e .elementor-social-icon i{color:var( --e-global-color-secondary );}.elementor-1691 .elementor-element.elementor-element-7f91b92e .elementor-social-icon svg{fill:var( --e-global-color-secondary );}.elementor-1691 .elementor-element.elementor-element-7f91b92e .elementor-icon{border-radius:50px 50px 50px 50px;}.elementor-1691 .elementor-element.elementor-element-1b8991e9{--display:flex;}.elementor-1691 .elementor-element.elementor-element-1b8991e9.e-con{--flex-grow:0;--flex-shrink:0;}.elementor-widget-sitemap .elementor-sitemap-title{color:var( --e-global-color-primary );font-family:var( --e-global-typography-primary-font-family ), Sans-serif;font-weight:var( --e-global-typography-primary-font-weight );}.elementor-widget-sitemap .elementor-sitemap-item, .elementor-widget-sitemap span.elementor-sitemap-list, .elementor-widget-sitemap .elementor-sitemap-item a{color:var( --e-global-color-text );font-family:var( --e-global-typography-text-font-family ), Sans-serif;font-weight:var( --e-global-typography-text-font-weight );}.elementor-widget-sitemap .elementor-sitemap-item{color:var( --e-global-color-text );}.elementor-1691 .elementor-element.elementor-element-535afaab .elementor-sitemap-section{flex-basis:calc( 1 / 1 * 100% );}.elementor-1691 .elementor-element.elementor-element-535afaab .elementor-sitemap-title{color:#333333;font-family:"Red Hat Display", Sans-serif;font-size:18px;font-weight:700;}.elementor-1691 .elementor-element.elementor-element-535afaab .elementor-sitemap-item, .elementor-1691 .elementor-element.elementor-element-535afaab span.elementor-sitemap-list, .elementor-1691 .elementor-element.elementor-element-535afaab .elementor-sitemap-item a{color:#000000;font-family:var( --e-global-typography-secondary-font-family ), Sans-serif;font-weight:var( --e-global-typography-secondary-font-weight );}.elementor-1691 .elementor-element.elementor-element-535afaab .elementor-sitemap-item{color:#000000;}.elementor-1691 .elementor-element.elementor-element-535afaab .elementor-sitemap-list, .elementor-1691 .elementor-element.elementor-element-535afaab .elementor-sitemap-list .children{list-style-type:disc;}.elementor-1691 .elementor-element.elementor-element-303debfc{--display:flex;}.elementor-widget-heading .elementor-heading-title{font-family:var( --e-global-typography-primary-font-family ), Sans-serif;font-weight:var( --e-global-typography-primary-font-weight );color:var( --e-global-color-primary );}.elementor-1691 .elementor-element.elementor-element-790e26e1 .elementor-heading-title{font-family:"Red Hat Display", Sans-serif;font-size:18px;font-weight:700;color:#333333;}.elementor-widget-icon-list .elementor-icon-list-item:not(:last-child):after{border-color:var( --e-global-color-text );}.elementor-widget-icon-list .elementor-icon-list-icon i{color:var( --e-global-color-primary );}.elementor-widget-icon-list .elementor-icon-list-icon svg{fill:var( --e-global-color-primary );}.elementor-widget-icon-list .elementor-icon-list-item > .elementor-icon-list-text, .elementor-widget-icon-list .elementor-icon-list-item > a{font-family:var( --e-global-typography-text-font-family ), Sans-serif;font-weight:var( --e-global-typography-text-font-weight );}.elementor-widget-icon-list .elementor-icon-list-text{color:var( --e-global-color-secondary );}.elementor-1691 .elementor-element.elementor-element-74ee24a9 .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:last-child){padding-bottom:calc(11px/2);}.elementor-1691 .elementor-element.elementor-element-74ee24a9 .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:first-child){margin-top:calc(11px/2);}.elementor-1691 .elementor-element.elementor-element-74ee24a9 .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item{margin-right:calc(11px/2);margin-left:calc(11px/2);}.elementor-1691 .elementor-element.elementor-element-74ee24a9 .elementor-icon-list-items.elementor-inline-items{margin-right:calc(-11px/2);margin-left:calc(-11px/2);}body.rtl .elementor-1691 .elementor-element.elementor-element-74ee24a9 .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after{left:calc(-11px/2);}body:not(.rtl) .elementor-1691 .elementor-element.elementor-element-74ee24a9 .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after{right:calc(-11px/2);}.elementor-1691 .elementor-element.elementor-element-74ee24a9 .elementor-icon-list-icon i{color:var( --e-global-color-secondary );transition:color 0.3s;}.elementor-1691 .elementor-element.elementor-element-74ee24a9 .elementor-icon-list-icon svg{fill:var( --e-global-color-secondary );transition:fill 0.3s;}.elementor-1691 .elementor-element.elementor-element-74ee24a9{--e-icon-list-icon-size:14px;--icon-vertical-offset:0px;}.elementor-1691 .elementor-element.elementor-element-74ee24a9 .elementor-icon-list-item > .elementor-icon-list-text, .elementor-1691 .elementor-element.elementor-element-74ee24a9 .elementor-icon-list-item > a{font-family:"Red Hat Display", Sans-serif;font-weight:500;}.elementor-1691 .elementor-element.elementor-element-74ee24a9 .elementor-icon-list-text{color:#000000;transition:color 0.3s;}.elementor-1691 .elementor-element.elementor-element-454d36c0{--display:flex;--justify-content:center;--gap:0px 0px;--row-gap:0px;--column-gap:0px;--padding-top:0px;--padding-bottom:20px;--padding-left:0px;--padding-right:0px;}.elementor-1691 .elementor-element.elementor-element-454d36c0:not(.elementor-motion-effects-element-type-background), .elementor-1691 .elementor-element.elementor-element-454d36c0 > .elementor-motion-effects-container > .elementor-motion-effects-layer{background-color:var( --e-global-color-primary );}.elementor-1691 .elementor-element.elementor-element-4a3883d1{--display:flex;}.elementor-widget-divider{--divider-color:var( --e-global-color-secondary );}.elementor-widget-divider .elementor-divider__text{color:var( --e-global-color-secondary );font-family:var( --e-global-typography-secondary-font-family ), Sans-serif;font-weight:var( --e-global-typography-secondary-font-weight );}.elementor-widget-divider.elementor-view-stacked .elementor-icon{background-color:var( --e-global-color-secondary );}.elementor-widget-divider.elementor-view-framed .elementor-icon, .elementor-widget-divider.elementor-view-default .elementor-icon{color:var( --e-global-color-secondary );border-color:var( --e-global-color-secondary );}.elementor-widget-divider.elementor-view-framed .elementor-icon, .elementor-widget-divider.elementor-view-default .elementor-icon svg{fill:var( --e-global-color-secondary );}.elementor-1691 .elementor-element.elementor-element-60076cbb{--divider-border-style:solid;--divider-color:var( --e-global-color-secondary );--divider-border-width:1px;}.elementor-1691 .elementor-element.elementor-element-60076cbb .elementor-divider-separator{width:100%;}.elementor-1691 .elementor-element.elementor-element-60076cbb .elementor-divider{padding-block-start:10px;padding-block-end:10px;}.elementor-1691 .elementor-element.elementor-element-9afdb83{text-align:center;font-family:"Red Hat Display", Sans-serif;font-size:12px;font-weight:400;color:#000000;}@media(min-width:768px){.elementor-1691 .elementor-element.elementor-element-2ab1b9f5{--width:30%;}.elementor-1691 .elementor-element.elementor-element-1b8991e9{--width:46%;}}@media(max-width:1024px) and (min-width:768px){.elementor-1691 .elementor-element.elementor-element-1b8991e9{--width:38%;}}@media(max-width:1024px){.elementor-1691 .elementor-element.elementor-element-7f91b92e{--icon-size:15px;}.elementor-1691 .elementor-element.elementor-element-7f91b92e .elementor-social-icon{--icon-padding:0.5em;}.elementor-1691 .elementor-element.elementor-element-535afaab .elementor-sitemap-section{flex-basis:calc( 1 / 1 * 100% );}}@media(max-width:767px){.elementor-1691 .elementor-element.elementor-element-20120b07.elementor-element{--align-self:center;}.elementor-1691 .elementor-element.elementor-element-1b8991e9{--width:100%;}.elementor-1691 .elementor-element.elementor-element-535afaab .elementor-sitemap-section{flex-basis:calc( 1 / 1 * 100% );}.elementor-1691 .elementor-element.elementor-element-303debfc{--margin-top:10px;--margin-bottom:0px;--margin-left:0px;--margin-right:0px;}.elementor-1691 .elementor-element.elementor-element-9afdb83{text-align:center;}}` }} />
        <style id="wpforms-css-vars-elementor-widget-a5682de" dangerouslySetInnerHTML={{
          __html: `
				.elementor-widget-wpforms.elementor-element-a5682de {
				--wpforms-field-size-input-height: 43px;
--wpforms-field-size-input-spacing: 15px;
--wpforms-field-size-font-size: 16px;
--wpforms-field-size-line-height: 19px;
--wpforms-field-size-padding-h: 14px;
--wpforms-field-size-checkbox-size: 16px;
--wpforms-field-size-sublabel-spacing: 5px;
--wpforms-field-size-icon-size: 1;
--wpforms-label-size-font-size: 16px;
--wpforms-label-size-line-height: 19px;
--wpforms-label-size-sublabel-font-size: 14px;
--wpforms-label-size-sublabel-line-height: 17px;
--wpforms-button-size-font-size: 17px;
--wpforms-button-size-height: 41px;
--wpforms-button-size-padding-h: 15px;
--wpforms-button-size-margin-top: 10px;

			}
			` }} />
        <style id="wpforms-css-vars-elementor-widget-18c2e7b" dangerouslySetInnerHTML={{
          __html: `
				.elementor-widget-wpforms.elementor-element-18c2e7b {
				--wpforms-field-size-input-height: 43px;
--wpforms-field-size-input-spacing: 15px;
--wpforms-field-size-font-size: 16px;
--wpforms-field-size-line-height: 19px;
--wpforms-field-size-padding-h: 14px;
--wpforms-field-size-checkbox-size: 16px;
--wpforms-field-size-sublabel-spacing: 5px;
--wpforms-field-size-icon-size: 1;
--wpforms-label-size-font-size: 16px;
--wpforms-label-size-line-height: 19px;
--wpforms-label-size-sublabel-font-size: 14px;
--wpforms-label-size-sublabel-line-height: 17px;
--wpforms-button-size-font-size: 17px;
--wpforms-button-size-height: 41px;
--wpforms-button-size-padding-h: 15px;
--wpforms-button-size-margin-top: 10px;

			}
			` }} />
        <style id="wpforms-css-vars-elementor-widget-517438d" dangerouslySetInnerHTML={{
          __html: `
				.elementor-widget-wpforms.elementor-element-517438d {
				--wpforms-field-size-input-height: 43px;
--wpforms-field-size-input-spacing: 15px;
--wpforms-field-size-font-size: 16px;
--wpforms-field-size-line-height: 19px;
--wpforms-field-size-padding-h: 14px;
--wpforms-field-size-checkbox-size: 16px;
--wpforms-field-size-sublabel-spacing: 5px;
--wpforms-field-size-icon-size: 1;
--wpforms-label-size-font-size: 16px;
--wpforms-label-size-line-height: 19px;
--wpforms-label-size-sublabel-font-size: 14px;
--wpforms-label-size-sublabel-line-height: 17px;
--wpforms-button-size-font-size: 17px;
--wpforms-button-size-height: 41px;
--wpforms-button-size-padding-h: 15px;
--wpforms-button-size-margin-top: 10px;

			}
			` }} />
        <style id='wp-block-list-inline-css' type='text/css' dangerouslySetInnerHTML={{
          __html: `
ol,ul{box-sizing:border-box}:root :where(.wp-block-list.has-background){padding:1.25em 2.375em}
/*# sourceURL=https://keicycabrera.com/wp-includes/blocks/list/style.min.css */
` }} />
      </head>
      <body className="antialiased">
        <Providers>
          <Toaster richColors position="top-right" />
          <AnimationsHandler />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
