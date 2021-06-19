const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.browserSync({
    proxy: 'http://127.0.0.1:8000'
 })
 

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/app.js', 'public/js')
//     .react()
//     .sass('resources/sass/app.scss', 'public/css');

mix.js('resources/js/app.js', 'public/js')
	 .sass('resources/sass/app.scss', 'public/css')
     .js('resources/js/views/Login.js', 'public/js/views').react()
	 .options({processCssUrls: false, postCss: [tailwindcss('./tailwind.config.js')],});
