/**
 * Created by championswimmer on 14/04/17.
 */

$(function () {
    console.log('Yay client works!');

    $('#mybutton').click(function () {
        $.get('/funnyquote', function (data) {
            $('#heading').text(data)
        })

        // Example to
        // $.post('/path', {
        //     name: "ASd",
        //     age: "Asdasd"
        // }, function (data) {
        //
        // })
    })
});