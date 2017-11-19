const mix = require('laravel-mix')

mix.js('app/src/js/index.js', 'js')
  .js('app/src/js/users.js', 'js')
  .less('app/src/less/app.less', 'css')
  .setPublicPath('app/public')
  .extract(['vue', 'axios'])
  .version()
