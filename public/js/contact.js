$(document).ready(function () {
  var name = $("#name");
  var email = $("#email");
  var message = $("#message");
  var submitBtn = $("#submit");
  var alertContainer = $("#alert-container");
  var alertButton = $("#alert-button");

  submitBtn.click(function (event) {
    event.preventDefault();
    if (!name.val() || !email.val() || !message.val()) {
      alert();
    } else {
      var newMessage = {
        name: name.val().trim(),
        email: email.val().trim(),
        message: message.val().trim(),
      };
      submitMessage(newMessage);
    }
  });

  function submitMessage(message) {
    $.post("/api/contact", message, function () {
      var form = $("#form");
      var label = $("<label>");
      label.text(
        "Thanks for your message! Be sure and check out my linkedin and github pages, as well as my resume, or send me a direct email."
      );
      label.css({
        margin: "15px",
        backgroundColor: "#191a1d",
        border: "2px solid #3bbecd",
        padding: "10px",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      });
      form.append(label);
    });
  }

  function alert() {
    alertContainer.css("display", "flex");
  }

  alertButton.click(function(event) {
    event.preventDefault();
    alertContainer.css("display", "none")
  })



  

});
