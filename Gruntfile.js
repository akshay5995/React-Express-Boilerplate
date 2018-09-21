const webpackConfig = require('./webpack.config.js');

module.exports = (grunt) => {
  const pkg = {
    name: 'vapps',
    dest: './dist/',
    static: './dist/assets/',
    api: './api/',
    src: './src',
    archiveName: 'frontend',
  };

  const archiveMode = 'tar';

  grunt.initConfig({
    copy: {
      app: {
        files: [
          {
            expand: true,
            src: ['favicon.png'],
            cwd: pkg.src,
            dest: pkg.static,
            flatten: true,
            filter: 'isFile',
          },
          {
            expand: true,
            src: ['views/*', 'server.js', 'routes/*'],
            cwd: pkg.api,
            dest: `${pkg.dest}`,
          },
          {
            expand: true,
            src: ['package.json'],
            dest: pkg.dest,
          },
        ],
      },
    },
    compress: {
      app: {
        options: {
          mode: archiveMode,
          archive: `pkg/${pkg.name}-DEV.${archiveMode}`,
        },
        files: [
          {
            src: ['dist/*'], expand: true, flatten: true, dest: pkg.archiveName, filter: 'isFile',
          },
          {
            src: ['dist/routes/*'], expand: true, flatten: true, dest: `${pkg.archiveName}/routes`, filter: 'isFile',
          },
          {
            src: ['dist/helpers/*'],
            expand: true,
            flatten: true,
            dest: `${pkg.archiveName}/helpers`,
            filter: 'isFile',
          },
          {
            src: ['dist/assets/*'], expand: true, dest: `${pkg.archiveName}/assets`, flatten: true, filter: 'isFile',
          },
          {
            src: ['dist/src/*'], expand: true, dest: `${pkg.archiveName}/src`, flatten: true, filter: 'isFile',
          },
        ],
      },
    },
    clean: {
      app: ['dist/', 'pkg'],
    },
    webpack: {
      options: webpackConfig,
      start: {},
    },
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.registerTask('default', ['clean:app', 'copy:app', 'webpack', 'compress:app']);
};
