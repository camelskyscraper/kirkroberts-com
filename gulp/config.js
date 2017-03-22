var config = {
  browserSync: {
    options: {
      server: {
        baseDir: 'app'
      },
      browser: 'google chrome',
      // open: false,
      notify: false,
      // proxy: test.dev // if using MAMP or similar
    }
  },
  copy: {
    src: [
      'app/.htaccess',
      'app/mailchimp',
      'app/android-*',
      'app/apple-*',
      'app/browserconfig.xml',
      'app/favicon*',
      'app/manifest.json',
      'app/mstile*',
      'app/safari-*'
      ],
    dest: 'dist'
  },
  fonts: {
    src: 'app/fonts',
    dest: 'dist'
  },
  images: {
    src: 'app/images/**/*.+(png|jpg|jpeg|gif|svg)',
    dest: 'dist/images',
    options: {
      name: 'default'
    }
  },
  js: {
    src: 'app/js/**/*.js'
  },
  jscs: {
    dest: 'app/js',
    options: {
      fix: true,
      configPath: '.jscsrc'
    }
  },
  jshint: {
    reporterOptions: {
      ignoreWarning: true,
      ignoreInfo: true
    }
  },
  nunjucks: {
    templates: ['app/templates/'],
    src: 'app/pages/**/*.+(html|nunjucks)',
    data: './app/data.json',
    dest: 'app',
    watch: [
      'app/pages/**/*.+(html|nunjucks)',
      'app/templates/**/*.+(html|nunjucks)',
      'app/data.json'
    ]
  },
  sass: {
    src: 'app/scss/**/*.scss',
    dest: 'app/css',
    options: {
      // precision: 2,
      includePaths: [
      'app/bower_components',
      'node_modules'
      ]
    }
  },
  sprites: {
    src: 'app/images/sprites/**/*',
    imgDest: 'app/images',
    scssDest: 'app/scss',
    options: {
      cssName: '_sprites.scss',
      imgName: 'sprites.png',
      imgPath: '../images/sprites.png',
      retinaSrcFilter: 'app/images/sprites/**/*@2x.png',
      retinaImgName: 'sprites@2x.png',
      retinaImgPath: '../images/sprites@2x.png'
    }
  },
  uncss: {
    options: {
      ignore: [
        '.susy-test',
        /.is-/,
        /.has-/,
        /.sidebar/
      ],
      html: ['app/*.html']
    }
  },
  useref: {
    src: 'app/*.html',
    dest: 'dist'
  }
};

module.exports = config;
