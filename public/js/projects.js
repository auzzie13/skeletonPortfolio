$(document).ready(function () {
  var frontEndBtn = $("#front-end");
  var backEndBtn = $("#back-end");
  var reactBtn = $("#react");
  var mernBtn = $("#mern");
  var allBtn = $("#all");
  var dropBtn = $("#dropdown-btn");
  var filterEl = $("#filter");
  var frontEndDropBtn = $("#front-end-dd");
  var backEndDropBtn = $("#back-end-dd");
  var reactDropBtn = $("#react-dd");
  var mernDropBtn = $("#mern-dd");
  var allDropBtn = $("#all-dd");

  $.get("/api/projects", function (data) {
    // console.log(data)
    createProjectCards(data);
  });

  frontEndBtn.click(buttonFilter);

  backEndBtn.click(buttonFilter);

  reactBtn.click(buttonFilter);

  mernBtn.click(buttonFilter);

  allBtn.click(function () {
    $.get("/api/projects", function (data) {
      console.log(data);
      $(".project-card").remove();
      createProjectCards(data);
    });
  });

  dropBtn.click(function() {
    showDropdown();
  })

  frontEndDropBtn.click(dropdownFilter);

  backEndDropBtn.click(dropdownFilter);

  reactDropBtn.click(dropdownFilter);

  mernDropBtn.click(dropdownFilter);

  allDropBtn.click(function() {
    $.get("/api/projects", function (data) {
      // console.log(data);
      $(".project-card").remove();
      createProjectCards(data);
      dropBtn.text("All");
      showDropdown();
    });
  });

  function createProjectCards(data) {
    for (var i = 0; i < data.length; i++) {
      var card = $("<div>");
      var projectTitle = $("<h2>");
      var gitLink = $("<a>");
      var deployLink = $("<a>");
      var description = $("<h4>");
      var languages = $("<h4>");

      card.addClass("project-card");
      projectTitle.addClass("title");
      gitLink.addClass("github-link");
      deployLink.addClass("deployed-link");
      description.addClass("description");
      languages.addClass("languages");

      card.append(projectTitle);
      card.append(gitLink);
      card.append(deployLink);
      card.append(description);
      card.append(languages);

      gitLink.attr("href", data[i].code_link);
      gitLink.attr("target", "_blank");
      deployLink.attr("href", data[i].deployed_link);
      deployLink.attr("target", "_blank");

      projectTitle.text(data[i].project_name);
      gitLink.text("Github Link");
      deployLink.text("Deployment Link");
      description.text("Description: " + data[i].description);
      languages.text("Languages: " + data[i].languages);

      $(".projects-container").append(card);
    }
  }

  function buttonFilter(btn) {
    $(".project-card").remove();
    var name = btn.target.name;

    $.get("/api/projects/" + name, function (data) {
      console.log(data);
      createProjectCards(data);
    });
  }

  function showDropdown() {
    if(filterEl[0].attributes[1].nodeValue == "display: none;" ? filterEl.css("display", "grid") : filterEl.css("display", "none"));
  }

  function dropdownFilter(btn) {
    $(".project-card").remove();

    var name = btn.target.name;
    var nameSliced = name.slice(0, -3);
    var html = $(this).text();
    $.get("/api/projects/" + nameSliced, function(data) {
      createProjectCards(data);
    })
    showDropdown();
    dropBtn.text(html);
    console.log($(this).text());

  }

  
});
