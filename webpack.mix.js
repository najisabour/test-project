const mix = require('laravel-mix');

const appJs = [
  //Libs
  'node_modules/jquery/dist/jquery.min.js',

	// Project
	'src/js/app.js',
];

mix
	.sass('src/scss/app.scss', 'css')
  .scripts(appJs, 'public/js/app.js')
  .browserSync({
    server: "public"
  })
  .setPublicPath('public');

