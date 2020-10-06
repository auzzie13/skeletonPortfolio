$(document).ready(function() {

    var name = $("#name");
    var email = $("#email");
    var message = $("#message");
    var submitBtn = $("#submit");

    submitBtn.click(function(event) {
        event.preventDefault();

        var newMessage = {
            name: name.val().trim(),
            email: email.val().trim(),
            message: message.val().trim()
        }
        submitMessage(newMessage);

    });

    function submitMessage(message) {
        $.post('/api/contact', message, function() {
            var form = $("#form");
            var label = $("<label>");
            label.text("Thanks for your message! Be sure and check out my linkedin and github pages, as well as my resume, or send me a direct email.")
            form.append(label);
        })
    }

});