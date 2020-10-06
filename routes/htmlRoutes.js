var path = require("path");

module.exports = function(app) {

    app.get("/projects", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/projects.html"))
    })

    app.get("/contact", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/contact.html"))
    })

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })
}