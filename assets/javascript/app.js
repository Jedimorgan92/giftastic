$(document).ready(function () {
    var topics = ["Frank Ocean", "Beyonce" , "J. Cole", "Kanye West", "The Weeknd", "SZA", "Kehlani", "Cardi B"];
    
})

function gifButtons () {
    for (var i=0; i < topics.length; i++) {
        var gifPush = $("<button>");
        gifPush.addClass("topic");
        gifPush.attr("data-name", topics[i]);
        gifPush.html(topics[i]);
        $("gifButtons").append(gifPush);
    }
}