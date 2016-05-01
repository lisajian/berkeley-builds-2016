$(document).ready(function() {
    var clicks = 0;
    function clickCount() {
        console.log(clicks);
    }
    $('input#submit').click(function() {
        var d = new Date();
        currentDate = d.toDateString();
        var title = $('#title').val();
        var text = $('textarea#story').val();
        var file = $('#picture').val();
        obj = {
            title: title,
            text: text,
            file: file,
            date: currentDate
        };
        var info = JSON.stringify(obj);
        if (title && (text || file)) {
            localStorage.setItem(clicks, obj);
            $('#result').prepend(localStorage.getItem(clicks)[2]);
            $('#title').val("");
            $('textarea#story').val("");
            $('#picture').val("");
            clicks++;
        }
    });
});
