$(document).ready(function () {
  var data = [
    // Autocomplete options: gym list
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
    { value: "Gym Y", url: "https://google.com" },
    { value: "Gym Z", url: "https://google.com" }

    // NB - the help link is created in the button function located at the end of this file.

  ];

  $("input#search-list").autocomplete({
    source: data,
    minLength: 0, // 0 in order to show options on empty field focus
    select: function (event, ui) {
      // Go to the link when selected
      window.location = ui.item.url;
    }
  });

  // Placeholder text
  $("#search-list").attr("placeholder", "SEARCH FOR YOUR GYM");

  // Optional: show all autocomplete options on field focus
  // .focus(function () {
  //   $(this).autocomplete("search", $(this).val());
  // })
});

// Show options Button function
$("#search-list-options").click(function () {
  // Clear the field, set focus, and show all results
  $("#search-list").val("").removeAttr("selected").trigger("focus"),
  $("#search-list").autocomplete("search", $("#search-list").val());
  // Append help link to results list
  $("<li class='ui-menu-item help'><div tabindex='-1' class='ui-menu-item-wrapper'><a href='https://google.com'>Don’t see your gym here?</a></div></li>").appendTo("ul");
});

// Add & remove focus class to the autocomplete wrapper 
$("#search-list").focus(function() {
  $( ".search-list-wrapper" ).addClass( "focus" );
}).blur(function() {
  $( ".search-list-wrapper" ).removeClass( "focus" );
});
