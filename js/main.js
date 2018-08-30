$( document ).ready(function() {
  console.log( "ready!" );
  $.ajax({
    type:"GET",
    url:"js/test.json",
    success: function(data) {
      //console.log(data);
      var mainInfoScript = $("#mainInfo").html();

      // Compiling the templates
      var mainInfoTemplate = Handlebars.compile(mainInfoScript);

      // Pass our data to the template
      var mainInfoCompiledHtml = mainInfoTemplate(data);
      
      // Add the compiled html to the page
      $(".container").html(mainInfoCompiledHtml);
    },
    dataType: 'json',
  });
});


// "Notes": "The information contained in this report applies to the product itself. Information about product help and support documentation related to 602.3 (Support Docs) for Section 508 as published in 2017 is located at: http://www.adobe.com/accessibility/compliance.html.",