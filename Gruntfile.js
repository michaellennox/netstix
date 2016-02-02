module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    express: {
      options: {
          port:8080,
          script: 'app.js'
        },
      run: {
        }
    },
    karma: {
      options: {
        configFile: './test/front_end/karma.conf.js'
      },
      run: {
      }
    },
    protractor: {
      options: {
        configFile: './test/e2e/conf.js'
      },
      run: {
      }
    },
    protractor_webdriver: {
      start: {
        options: {
          path: 'node_modules/protractor/bin/',
          command: 'webdriver-manager start'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-protractor-webdriver');

  grunt.registerTask('e2e', ['express', 'protractor_webdriver', 'protractor']);

};
