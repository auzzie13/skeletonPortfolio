$(document).ready(function () {
  var frontEndBtn = $("#front-end");
  var backEndBtn = $("#back-end");
  var reactBtn = $("#react");
  var mernBtn = $("#mern");
  var allBtn = $("#all");

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
      description.text(data[i].description);
      languages.text(data[i].languages);

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
  
});
