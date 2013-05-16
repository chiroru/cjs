module.exports = function(grunt){
  grunt.initConfig({
    cssmin: {
      compress: {
        files: {
          './min.css': ['css/commont.css']
        }
      }
    },
    watch: {
      files: ['css/*.css'],
      tasks: ['cssmin']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
