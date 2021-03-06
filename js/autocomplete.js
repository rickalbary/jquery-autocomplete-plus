/* Autocomplete options: gym list
   ------------------------------------------------------------ */

   var data = [
    { value: "Gym A", url: "https://google.com" },
    { value: "Gym B", url: "https://google.com" },
    { value: "Gym C", url: "https://google.com" },
    { value: "Gym D", url: "https://google.com" },
    { value: "Gym E", url: "https://google.com" },
    { value: "Gym F", url: "https://google.com" },
    { value: "Gym G", url: "https://google.com" },
    { value: "Gym H", url: "https://google.com" },
    { value: "Gym I", url: "https://google.com" },
    { value: "Gym J", url: "https://google.com" },
    { value: "Gym K", url: "https://google.com" },
    { value: "Gym L", url: "https://google.com" },
    { value: "Gym M", url: "https://google.com" },
    { value: "Gym N", url: "https://google.com" },
    { value: "Gym O", url: "https://google.com" },
    { value: "Gym P", url: "https://google.com" },
    { value: "Gym Q", url: "https://google.com" },
    { value: "Gym R", url: "https://google.com" },
    { value: "Gym S", url: "https://google.com" },
    { value: "Gym T", url: "https://google.com" },
    { value: "Gym U", url: "https://google.com" },
    { value: "Gym V", url: "https://google.com" },
    { value: "Gym W", url: "https://google.com" },
    { value: "Gym X", url: "https://google.com" },
    { value: "Gym Y", url: "https://google.com" } // NB – no comma after the last data line 

    // NB - the help link is created in the button function located at the end of this file.

  ];
  
/* Variables to fill placeholder text, help link, and help text.
   ------------------------------------------------------------ */

/* Placeholder text */

if (window.matchMedia('(max-width: 500px)').matches)
{
  // Placeholder text for small screens
  var placeholder = "Search gyms";
} else {
  // Placeholder text for large screens
  var placeholder = "Search for your gym";
}

/* The help/alert link */
var helpLink = "https://google.com";

/* The help/alert link text
   NB – use a real apostrophe if you're not escaping the character: i.e. ’ instead of '  */
   var helpText = "Don’t see your gym here?";


/* Document ready
   ------------------------------------------------------------ */
$(document).ready(function () {

  $("input#search-list").autocomplete({
    source: data,
    minLength: 1, // 0 in order to show options on empty field focus
    select: function (event, ui) {
      // Go to the link when selected
      window.location = ui.item.url;
    },
    
    response: function(event, ui) {
      // Check if there are results.
      if (ui.content.length === 0) {
        // No results: push the alert message
        $("#alert").html("<ul tabindex='0' class='ui-widget ui-widget-content ui-front'><li class='ui-menu-item help'><div tabindex='-1' class='ui-menu-item-wrapper'><a href='" + helpLink + "'>" + helpText + "</a></div></li></ul>");
      } else {
        // Results exist: do nothing
        $("#alert").empty();
      }
    }
  });

  // Empty the alert when the user deletes the input content and clicks outside the field
  $('input#search-list').blur(function()
  {
    if( $(this).val().length === 0 ) {
      $("#alert").empty();
    }
  });

  // Add placeholder text
  $("#search-list").attr("placeholder", (placeholder));
  
});

/* Button function: Show all results 
   ------------------------------------------------------------ */   
$("#search-list-options").click(function () {
  $("input#search-list").autocomplete({
    minLength: 0, // 0 in order to show results on empty field focus
  });
  
  // Clear the field, set focus, and show all results
  $("#search-list").val("").removeAttr("selected").trigger("focus"),
  $("#search-list").autocomplete("search", $("#search-list").val());
  // Append help link to results list
  $("<li class='ui-menu-item help'><div tabindex='-1' class='ui-menu-item-wrapper'><a href='" + helpLink + "'>" + helpText + "</a></div></li>").appendTo("ul");
});

/* Add & remove focus class to the autocomplete wrapper 
   Using CSS, change the z-index to raise the field above the 
   autocomplete list that hides the focus outline.
   ------------------------------------------------------------ */
$("#search-list").focus(function() {
  $( ".search-list-wrapper" ).addClass( "focus" );
}).blur(function() {
  $( ".search-list-wrapper" ).removeClass( "focus" );
});  