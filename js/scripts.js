//back end
function conversion(number) {
    var entry = [];
    for (var i = 1; i <=number; i++) {
        if (i % 15 === 0) {
            entry.push("pingpong");
        } else if (i % 3 === 0) {
            entry.push("ping");
        } else if (i % 5 === 0) {
            entry.push("pong")
        } else {
            entry.push(i)
        }
    }
    return entry;
}

//front end
$(document).ready(function() {
    $("#blank form").submit(function() {
        var inputuser= parseInt($("input#number").val());
        var result = conversion(inputuser);
        result.forEach((function)(output) {
        $("#output").append("<li>" + output + "</li>");
        event.preventDefault();
    });
    });
});
