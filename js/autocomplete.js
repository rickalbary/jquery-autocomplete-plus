$(document).ready(function () {
  var data = [
    // Options
    { label: "Option A", value: "Option A", url: "https://google.com" },
    { label: "Option B", value: "Option B", url: "https://yahoo.com" },
    { label: "Option C", value: "Option C", url: "https://bing.com" },

    {
      label: "Don't see your option here?",
      value: "Don't see your option here?",
      url: "https://bbc.com"
    }
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
  $("#search-list").attr("placeholder", "SEARCH");

  // Optional: show all autocomplete options on field focus
  // .focus(function () {
  //   $(this).autocomplete("search", $(this).val());
  // })

  // Show options Button function
  $("#search-list-options").click(function () {
    // Clear the field, set focus, and show all results
    $("#search-list").val("").removeAttr("selected").trigger("focus"),
      $("#search-list").autocomplete("search", $("#search-list").val());
  });
});