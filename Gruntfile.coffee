grunt = require('grunt')
path = require('path')

# load all grunt tasks
require('load-grunt-tasks')(grunt)

grunt.initConfig
  sass:
    dist:
      options:
        style: 'expanded'
#        require: ['susy']
      files: [
        expand: true
        cwd: './source'
        src:['stylesheets/*.scss']
        dest: '.tmp/'
        ext: '.css'
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
        dest: '.dist/'
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
        dest: 'dist/'
      ]

  copy:
    assets:
      files: [
        expand: true
        cwd: './source'
        src:[
          'assets/images/**'
          'assets/scripts/**'
          'assets/stylesheets/**'
          'index.html'
          'iframe.html'
        ]
        dest: '.tmp/'
        # exclude empty directories
        filter: (src) ->
          return src.split('/').pop().indexOf('.') != -1
      ]
    tmpToDist:
      files: [
        expand: true
        cwd: '.tmp/'
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
        cwd: './source'
        src:['stylesheets/**/*.css']
        dest: '.tmp/'
      ]

  watch:
    scripts:
      files: ['source/**/*']
      tasks: ['default']
      options:
        nospawn: true
        livereload: 35770

  clean:
    preBuild: ['.tmp/', 'dist/']
    postBuild: ['.tmp/']

  bump:
    options:
      files: ['package.json', 'source/config.json']
      commitFiles: ['-a'], # '-a' for all files
      pushTo: 'origin'
      push: true

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
  "sass"
  "copy:assets"
  "copy:stylesheets"
  "copy:tmpToDist"
  "clean:postBuild"
]

grunt.registerTask "build-design-dev", [
  "clean:preBuild"
  "lddesign:development"
  "postCompile"
]

grunt.registerTask "build-design", [
  "clean:preBuild"
  "lddesign:build"
  "postCompile"
]

grunt.registerTask "serve", [
  "build-design-dev"
  "express"
  "watch"
]



# Release a new version
# Only do this on the `master` branch.
#
# options:
# release:patch
# release:minor
# release:major
grunt.registerTask 'prepare-design-publish', (type) ->
  type ?= 'patch'
  grunt.task.run('bump-only:' + type)
  grunt.task.run('build-design')
  grunt.task.run('bump-commit')



grunt.registerTask "dev", ["serve"]
grunt.registerTask "default", ["build-design"]
