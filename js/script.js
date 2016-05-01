$(document).ready(function() {

    $('.data').click(function() {
        var id = $(this).attr('id');
        var num = id[4];
        var plot = "#plot" + num;
        if ($('#plot').text()) {
            $('#plot').empty();
        }
        $("#plot").html
        console.log(num);
    })
});
