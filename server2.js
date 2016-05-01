$(document).ready(function() {
    var clicks = 0;
    var imgURL;

    function EL(id) { return document.getElementById(id); }

    function readFile() {
        if (this.files && this.files[0]) {
            var FR = new FileReader();
            FR.onload = function(e) {
                imgURL = e.target.result;
                EL("upload-img").src = imgURL;
                $("#upload-img").css("height", "100%");
            };
            FR.readAsDataURL( this.files[0] );
        }
    }

    EL("picture").addEventListener("change", readFile, false);

    /* Takes in a localStorage string ITEM and a number INDEX
     * to prepend to the div name (string) DEST. This method will only
     * populate DEST with the title, text, and img. */
    function populate(index, item, dest) {
        var obj = JSON.parse(item);
        var title = "<div id=\"title" + index + "\">" + obj.title + "</div>";
        var textSeg = "";
        var imgSeg = "";
        if (obj.text) {
            textSeg = "<div id=\"text" + index + "\">" + obj.text + "</div>";
        }
        if (obj.img) {
            var src = obj.img;
            imgSeg = "<img id=\"img" + index + "\" src=\"" + src + "\"/>";
        }
        $(dest).prepend("\n" + title + "\n" + imgSeg + "\n" + textSeg);
    }

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
            img: file,
            date: currentDate
        };
        var info = JSON.stringify(obj);
        if (title && (text || file)) {
            localStorage.setItem(clicks, info);
            // $('#result').prepend(localStorage.getItem(clicks));
            $('#title').val("");
            $('textarea#story').val("");
            $('#picture').val("");
            EL("upload-img").src = "";
            $('#upload-img').css("height", "300px");
            clicks++;
            // Window.location.reload();
        }
    });

    if (localStorage.length > 0) {
        clicks = localStorage.length;
    }

    for (var i = 0; i < localStorage.length; i++) {
        populate(i, localStorage.getItem(i), "#result");
    }
});
