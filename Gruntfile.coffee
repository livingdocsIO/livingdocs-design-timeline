grunt = require('grunt')
path = require('path')

# load all grunt tasks
require('load-grunt-tasks')(grunt)

grunt.initConfig
  recess:
    development:
      options:
        compile: true
      files: [
        expand: true
        cwd: './'
        src:['source/stylesheets/*']
        dest: '.tmp/'
        ext: '.css'
        filter: (src) ->
          return src.split('/').pop()[0] != '_' && (src.indexOf('.css') != -1 || src.indexOf('.less') != -1)
      ]

  sass:
    dist:
      files: [
        expand: true
        cwd: './'
        src:['source/stylesheets/*.scss']
        dest: '.tmp/'
        ext: '.css'
      ]

  compass:
    dist:
      options:
        sassDir: 'source/stylesheets/'
        cssDir: '.tmp/source/stylesheets/'
        imagesDir: 'source/images/',
        require: ['susy', 'breakpoint']

  stylus:
    compile:
      options:
        compress: true
      files: [
        expand: true
        cwd: './'
        src: [ 'source/stylesheets/*.styl' ]
        dest: '.tmp/'
        ext: '.css'
      ]

  jade:
    compile:
      files: [
        expand: true
        cwd: './'
        src: [ 'source/**/*.jade' ]
        ext: '.html'
      ]

  lddesign:
    options:
      templatesDirectory: 'components'
      configurationElement: 'script[type=ld-conf]'
    development:
      files: [
        expand: true
        cwd: './source'
        src: ['./']
        dest: '.tmp/'
      ]
    build:
      options:
        minify:
          collapseWhitespace: true
          removeComments: true
          removeCommentsFromCDATA: true
          removeCDATASectionsFromCDATA: true
      files: [
        expand: true
        cwd: './source'
        src: ['./']
        dest: '.tmp/'
      ]

  copy:
    assets:
      files: [
        expand: true
        cwd: './'
        src:[
          'source/images/**'
          'source/index.html'
        ]
        dest: '.tmp/'
        # exclude empty directories
        filter: (src) ->
          return src.split('/').pop().indexOf('.') != -1
      ]
    tmpToDist:
      files: [
        expand: true
        cwd: '.tmp/source/'
        src: ['**/*']
        dest: 'dist/'
      ]
    dist:
      files: [
        expand: true
        cwd: 'dist/'
        src: ['**']
        dest: '../livingdocs-editor/app/designs/dist/'
      ]
    stylesheets:
      files: [
        expand: true
        cwd: './'
        src:['source/stylesheets/**/*.css']
        dest: '.tmp/'
      ]

  watch:
    scripts:
      files: ['source/**/*']
      tasks: ['default']
      options:
        nospawn: true
        livereload: 35769

  clean:
    preBuild: ['.tmp/', 'dist/']
    postBuild: ['.tmp/']

  express:
    dev:
      options:
        port: 3333
        hostname: 'localhost'
        open: true
        server: './server'

  concurrent:
    tasks: ['express']


grunt.registerTask "postCompile", [
  "recess"
  "compass"
  "stylus"
  "copy:assets"
  "copy:stylesheets"
  "copy:tmpToDist"
  "clean:postBuild"
]

grunt.registerTask "build", [
  "clean:preBuild"
  "jade"
  "lddesign:development"
  "postCompile"
]

grunt.registerTask "serve", [
  "default"
  "express"
  "watch"
]

grunt.registerTask "dev", ["serve"]
