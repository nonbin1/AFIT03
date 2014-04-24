  /*
   * App functions
   */
  var $ = jQuery.noConflict();
  $(document).ready(function getcontent() {
	  
	   $.ajax({
          url: 'http://db.flutx.com/DFIT03/json_getdata.php',
          type: "GET",
          dataType: "jsonp",
          async: false,
          success: function(data) {
			 $.each(data, function(i, item) {
                  $("#"+i).html(item);
              })
			  
			setTimeout(getcontent, 5 * 60 * 1000);
          },
          error: function(error) {
              ErrorFunction();
          }
      });
	  
  });
  
