$(document).ready(function() {
    var prevPlot;

    $('.data').click(function() {
        var id = $(this).attr('id');
        var num = id[4];
        var plot = "#plot" + num;
        if (prevPlot) {
            $(prevPlot).css('display', 'none');
        }
        $(plot).css('display', 'block');
        prevPlot = plot;
        console.log(num);
    })
});
