
var entry = []
var myNumber = function(number) {
    for(var i= 0; i <= number; i ++) {
if (i % 15 === 0) {
    entry.push("pingpong"); {
}else if (i % 5 === 0) {
    entry.push("pong");
}else if (i % 3 === 0) {
    entry.push("ping");
}else
    entry.push(i);
}
return entry;
}
}

$(document).ready(function() {
    $("#form-group").submit(function() {
        var number = parseInt($("input#number").val());
        var result = myNumber(number);
        result.forEach((function)(output) {
        $("#output").append("<li>" + entry + "</li>");
        event.preventDefault();
    });
    });
});
