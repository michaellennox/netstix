module.exports = function(config) {
  config.set({

    basePath: '../',
    frameworks: ['jasmine'],
    files: [
      '../public/libs/angular/angular.js',
      '../public/libs/angular-route/angular-route.js',
      '../public/libs/angular-resource/angular-resource.js',
      '../public/libs/angular-mocks/angular-mocks.js',
      '../public/js/**/*.js',
      './front_end/**/*.spec.js'
    ],

    exclude: [],

    preprocessors: {
      '../public/js/**/*.js': ['coverage']
    },

    reporters: ['spec', 'coverage'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    // browsers: ['Chrome'],
    browsers: ['PhantomJS'],

    singleRun: true,

    coverageReporter: {
      type : 'html',
      dir : 'front_end/coverage/'
    }

  });
};
