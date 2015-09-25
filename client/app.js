$(document).ready(function() {
    $.ajax({
        url: "/getColors",
    }).done(function (response) {
        console.log(response);
        for (var i = 0; i < response.length; i++) {
            console.log(response[i]);
            var $content = $("<div class = 'group' style='color:" + response[i].value + "'>" + "The Color # " + (i + 1) + " is:" + "</div>");
            $(".content-placeholder").append($content);

            var $colorType = $("<p style = 'color:" + response[i].value + "'>" + response[i].color + " known as hex #: " + response[i].value + "</p>");
            console.log($colorType);

            $(".group").parent().append($colorType);
        }
    });

});