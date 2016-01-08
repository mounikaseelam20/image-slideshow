$(document).ready(function() {
    var O = $.ajax({
        url: 'pictures.json',
        type: 'GET',
        dataType: 'JSON'

    });
    O.success(function(data) {
        var pics = data;
        console.log(pics.length);
        console.log(pics.pictures[0]);

        var index = 0;
        $('div img').attr("src", pics.pictures[index].path);

        $('#next').click(function() {
            if (index < pics.pictures.length - 1) {

                ++index;
                console.log(pics.pictures[index]);

                $('div img').attr("src", pics.pictures[index].path);
            } else {
                index = 0;
                $('div img').attr("src", pics.pictures[index].path);
            }
        });

        $('#prev').click(function() {
            if (index > 0) {

                --index;
                console.log(pics.pictures[index]);

                $('div img').attr("src", pics.pictures[index].path);
            } else {
                index = 9;
                $('div img').attr("src", pics.pictures[index].path);
            }
        });
    });
});
