$( document ).ready(function() {
  console.log( "ready!" );
  $.ajax({
    type:"GET",
    url:"js/test.json",
    success: function(data) {
      console.log(data);
      var rowScript = $("#rowTemplate").html();
      var mainInfoScript = $("#mainInfo").html();
    
      Handlebars.registerHelper('list', function(items, options) {
        var out = ""; 
        for(var i=0, l=items.length; i<l; i++) {
          out = out + options.fn(items[i]);
          console.log(options.fn(items[i]));
        }
        return out;
      });

      // Compiling the templates
      var rowTemplate = Handlebars.compile(rowScript);
      var mainInfoTemplate = Handlebars.compile(mainInfoScript);

      // Pass our data to the template
      var rowCompiledHtml = rowTemplate(data);
      var mainInfoCompiledHtml = mainInfoTemplate(data);
      // Write your code here


      // Add the compiled html to the page
      $(".tableBody").html(rowCompiledHtml);
      $(".basicInfo").html(mainInfoCompiledHtml);
    },
    dataType: 'json',
  });
});

