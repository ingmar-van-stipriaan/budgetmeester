axis         = require 'axis'
rupture      = require 'rupture'
autoprefixer = require 'autoprefixer-stylus'
js_pipeline  = require 'js-pipeline'
css_pipeline = require 'css-pipeline'

module.exports =
  ignores: ['readme.md', '**/layout.*', '.gitignore', 'ship.*conf']

  extensions: [
    js_pipeline(manifest: "assets/js/manifest.yml"),
    css_pipeline(files: 'assets/css/*.css')
  ]

  css:
    sourcemap: true

  js:
    sourcemap: true

  jade:
    pretty: true
