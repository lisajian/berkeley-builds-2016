$(document).ready(function() {
    var clicks = 0;
    var imgURL;

    function EL(id) { return document.getElementById(id); }
    function readFile() {
        if (this.files && this.files[0]) {
            var FR = new FileReader();
            FR.onload = function(e) {
                imgURL = e.target.result;
                EL("img").src = imgURL;
                $("#img").css("height", "100%");
                // EL("b64").innerHTML = imgURL;
            };
            FR.readAsDataURL( this.files[0] );
        }
    }

    EL("picture").addEventListener("change", readFile, false);

    $('input#submit').click(function() {
        var d = new Date();
        currentDate = d.toDateString();
        var title = $('#title').val();
        var text = $('textarea#story').val();
        var file = $('#picture').val();
        if (file) {
            file = imgURL;
        } else {
            file = "";
        }
        obj = {
            title: title,
            text: text,
            file: file,
            date: currentDate
        };
        var info = JSON.stringify(obj);
        if (title && (text || file)) {
            localStorage.setItem(clicks, info);
            $('#result').prepend(localStorage.getItem(clicks));
            $('#title').val("");
            $('textarea#story').val("");
            $('#picture').val("");
            EL("img").src = "";
            $('#img').css("height", "300px");
            clicks++;
        }
    });
});
